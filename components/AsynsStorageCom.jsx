import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsynsStorageCom = () => {
  const [name, setName] = useState('');

  const setDataFunction = async () => {
    await AsyncStorage.setItem('user', 'Gautam');
    Alert.alert('Data set successfully');
  };
  const getDataFunction = async () => {
    const myName = await AsyncStorage.getItem('user');
    setName(myName);
  };
  const removeDataFunction = async () => {
    await AsyncStorage.removeItem('user');
    Alert.alert('Data remove successfully');
    setName('');
  };

  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{
          backgroundColor: 'orange',
          fontSize: 18,
          margin: 10,
          padding: 10,
          fontWeight: 'bold',
        }}>
        This is Async Storage Component
      </Text>
      <Text style={style.nameText}>My name is : {name} </Text>
      <View style={style.btnMain}>
        <View style={style.btn}>
          <Button onPress={setDataFunction} title="SetData" />
        </View>
        <View style={style.btn}>
          <Button onPress={getDataFunction} title="GetData" />
        </View>
        <View style={style.btn}>
          <Button onPress={removeDataFunction} title="RemoveData" />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  btnMain: {
    margin: 15,
  },
  btn: {
    marginVertical: 10,
    width: '50%',
  },
  nameText: {
    padding: 10,
    fontSize: 15,
  },
});

export default AsynsStorageCom;
