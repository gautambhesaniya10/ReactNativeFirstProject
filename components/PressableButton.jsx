import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PressableButton = () => {
  const [counter, setCounter] = useState(0);
  const timeoutRef = useRef(null);

  const handlePressIn = () => {
    timeoutRef.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 100);
  };

  const handlePressOut = () => {
    clearInterval(timeoutRef.current);
  };

  return (
    <>
      <View>
        <Text
          style={{
            backgroundColor: 'skyblue',
            fontSize: 18,
            margin: 10,
            padding: 10,
            fontWeight: 'bold',
          }}>
          This is Pressble button com
        </Text>

        <Text style={{fontSize: 20}}>Counter: {counter}</Text>
        <Pressable
          //   onPress={() => console.warn('Normal onpress')}
          //   onLongPress={() => console.warn('longg')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <View ref={timeoutRef} style={style.main}>
            <Text style={style.submitButton}> Pressable</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  main: {
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: 'skyblue',
    color: 'black',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
});

export default PressableButton;
