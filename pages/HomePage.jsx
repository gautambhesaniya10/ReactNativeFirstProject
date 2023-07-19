import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import axios from 'axios';
import BasicForm from '../components/BasicForm';
import {api_endpoint} from '../config';

const HomePage = props => {
  const {formData} = props?.route?.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  const [apiData, setApiData] = useState([]);

  const GetFormData = async () => {
    await axios.get(`${api_endpoint}`)?.then(res => {
      setApiData(res?.data);
    });
  };

  const DeleteItem = async id => {
    setDeleteId(id);
    setModalVisible(true);
  };
  const DeleteItemHandler = async () => {
    await axios.delete(`${api_endpoint}/${deleteId}`)?.then(res => {
      GetFormData();
      setModalVisible(false);
    });
  };

  const [updateFormData, setUpdateFormData] = useState({});

  const updateUserOpenModel = async (id, item) => {
    setUpdateFormData(item);
    setUpdateModalVisible(true);
  };

  useEffect(() => {
    GetFormData();
  }, [formData]);

  return (
    <>
      <View style={{margin: 30}}>
        <Text style={{fontSize: 26}}>This is home Screen</Text>
        <ScrollView style={{marginBottom: 40}}>
          {apiData?.map((item, index) => (
            <>
              <View
                key={index}
                style={{borderBottomColor: 'black', borderBottomWidth: 2}}>
                <Text style={style.nameDiv}>User : {index + 1}</Text>
                <Text style={style.nameDiv}>My Name is : {item?.name}</Text>
                <Text style={style.nameDiv}>My Email is : {item?.email}</Text>
                <Text style={style.nameDiv}>
                  My Password is : {item?.password}
                </Text>
                <View style={style.delBtn}>
                  <Button
                    onPress={() => DeleteItem(item?.id)}
                    color="red"
                    title="Delete"
                  />
                  <Button
                    onPress={() => updateUserOpenModel(item?.id, item)}
                    color="green"
                    title="Update"
                  />
                </View>
              </View>
            </>
          ))}
        </ScrollView>

        {/* Model */}
        <View style={ModelStyle.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={ModelStyle.centeredView}>
              <View style={ModelStyle.modalView}>
                <Text style={ModelStyle.modalText}>
                  Are You Sure to Delete !
                </Text>
                <View style={style.delBtn}>
                  <Button
                    onPress={() => setModalVisible(!modalVisible)}
                    color="skyblue"
                    title="Cancel"
                  />
                  <Button
                    onPress={() => DeleteItemHandler()}
                    color="red"
                    title="Delete"
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={ModelStyle.scrollWrapper}>
          <View style={ModelStyle.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={updateModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setUpdateModalVisible(!updateModalVisible);
              }}>
              <View style={ModelStyle.centeredView}>
                <View style={ModelStyle.modalView}>
                  <Text style={ModelStyle.modalText}>Update User</Text>
                  <BasicForm
                    isUpdate={true}
                    pastData={updateFormData}
                    setUpdateModalVisible={setUpdateModalVisible}
                    GetFormData={GetFormData}
                  />
                  <View style={style.delBtn}>
                    <Button
                      onPress={() => setUpdateModalVisible(!updateModalVisible)}
                      color="skyblue"
                      title="Cancel"
                    />
                    {/* <Button color="green" title="Update" /> */}
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  nameDiv: {
    fontSize: 20,
    margin: 10,
  },
  delBtn: {
    marginVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
});

const ModelStyle = StyleSheet.create({
  scrollWrapper: {
    // marginTop: 60,
  },
  centeredView: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomePage;
