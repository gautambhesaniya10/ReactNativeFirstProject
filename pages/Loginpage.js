import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import BasicForm from '../components/BasicForm';

const LoginPage = props => {
  return (
    <ScrollView style={{margin: 30}}>
      <Text style={{fontSize: 30, marginBottom: 30}}>This is Login Screen</Text>
      <BasicForm props={props} />
      {/* <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      /> */}
    </ScrollView>
  );
};

export default LoginPage;
