import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TouchableOpacityRadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
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
          This is Touchable opacity Radio Button
        </Text>

        <TouchableOpacity onPress={() => setSelectedRadio(1)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {selectedRadio === 1 ? <View style={style.innerBG}></View> : null}
            </View>
            <Text style={style.radioText}>Yes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedRadio(2)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {selectedRadio === 2 ? <View style={style.innerBG}></View> : null}
            </View>
            <Text style={style.radioText}>No</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  radio: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
  innerBG: {
    width: 22,
    height: 22,
    backgroundColor: 'blue',
    borderRadius: 11,
    margin: 2,
  },
  radioText: {
    fontSize: 24,
    paddingLeft: 10,
  },
});

export default TouchableOpacityRadioButton;
