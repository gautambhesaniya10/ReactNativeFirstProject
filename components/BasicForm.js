import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {api_endpoint} from '../config';

const BasicForm = props => {
  const {isUpdate, pastData, setUpdateModalVisible, GetFormData} = props;
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});

  const IsFormValid = () => {
    let FormValid = true;
    let error = {};
    if (!formData?.name) {
      FormValid = false;
      error['name'] = 'Please enter a name *';
    }
    if (!formData?.email) {
      FormValid = false;
      error['email'] = 'Please enter an email address *';
    }
    if (!formData?.password) {
      FormValid = false;
      error['password'] = 'Please enter a password *';
    }

    setError(error);
    return FormValid;
  };

  const NameChangeHandler = value => {
    setFormData({...formData, name: value});
    setError({...error, name: ''});
  };
  const EmailChangeHandler = value => {
    setFormData({...formData, email: value});
    setError({...error, email: ''});
  };
  const PasswordChangeHandler = value => {
    setFormData({...formData, password: value});
    setError({...error, password: ''});
  };

  const submitHandler = async value => {
    // setShow(true);
    if (IsFormValid()) {
      if (isUpdate) {
        await axios
          .put(`${api_endpoint}/${pastData?.id}`, formData)
          ?.then(res => {
            GetFormData();
            setUpdateModalVisible(false);
          });
      } else {
        await axios
          .post(`${api_endpoint}`, formData)
          .then(res => {
            props.props.navigation.navigate('Home', {formData: formData});
            setFormData({
              name: '',
              email: '',
              password: '',
            });
          })
          .catch(err => {
            console.warn(err);
          });
      }
    }
  };

  useEffect(() => {
    setFormData({
      name: pastData?.name,
      email: pastData?.email,
      password: pastData?.password,
    });
  }, [isUpdate]);

  return (
    <>
      <View>
        <View style={style.inputWrapper}>
          <TextInput
            style={style?.inputField}
            placeholder="Enter Your Name"
            value={formData?.name}
            onChangeText={value => NameChangeHandler(value)}
          />
          {error?.name && <Text style={style.errorMsg}>{error?.name}</Text>}
        </View>

        <View style={style.inputWrapper}>
          <TextInput
            style={style?.inputField}
            placeholder="Enter Your Email"
            value={formData?.email}
            onChangeText={value => EmailChangeHandler(value)}
          />
          {error?.email && <Text style={style.errorMsg}>{error?.email}</Text>}
        </View>

        <View style={style.inputWrapper}>
          <TextInput
            style={style?.inputField}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            value={formData?.password}
            onChangeText={value => PasswordChangeHandler(value)}
          />
          {error?.password && (
            <Text style={style.errorMsg}>{error?.password}</Text>
          )}
        </View>

        <View style={{marginBottom: 10}}>
          <Button
            color={'green'}
            title={isUpdate ? 'Update' : 'Add'}
            onPress={() => submitHandler()}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Button
            color={'red'}
            title="Clear"
            onPress={() => {
              setShow(false);
              setFormData({
                name: '',
                email: '',
                password: '',
              });
            }}
          />
        </View>

        {show && (
          <>
            <Text style={style.nameDiv}>My Name is : {formData.name}</Text>
            <Text style={style.nameDiv}>My Email is : {formData.email}</Text>
            <Text style={style.nameDiv}>
              My Password is : {formData.password}
            </Text>
          </>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  inputField: {
    fontSize: 25,
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  nameDiv: {
    fontSize: 20,
    marginBottom: 10,
  },
  errorMsg: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BasicForm;
