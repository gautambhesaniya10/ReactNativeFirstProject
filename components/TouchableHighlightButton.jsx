import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlightCom = () => {
  return (
    <>
      <View style={style.main}>
        <Text
          style={{
            backgroundColor: 'skyblue',
            fontSize: 18,
            margin: 10,
            padding: 10,
            fontWeight: 'bold',
          }}>
          This is Touchable HeighLight Component
        </Text>
        <TouchableHighlight>
          <Text style={style.submitButton}> Submit</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[style.submitButton, style.success]}> Success</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
  success: {
    backgroundColor: 'green',
  },
});

export default TouchableHighlightCom;
