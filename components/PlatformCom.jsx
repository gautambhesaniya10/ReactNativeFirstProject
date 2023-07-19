import React from 'react';
import {Platform, Text, View} from 'react-native';

const PlatformCom = () => {
  return (
    <>
      <View>
        <Text style={{fontSize: 20, marginBottom: 20}}>
          PlatForm : {Platform.OS}{' '}
        </Text>
      </View>
    </>
  );
};

export default PlatformCom;
