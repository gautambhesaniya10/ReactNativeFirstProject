import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const CartHeader = () => {
  const Data = useSelector(state => state?.products?.productData);

  return (
    <View style={style.main}>
      <Text style={style.text}>Cart</Text>
      <Text style={style.text}>Item : {Data?.length}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CartHeader;
