import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CartHeader from '../components/CartHeader';
import {AddToCart, RemoveToCart} from '../redux/action';
import {useSelector, useDispatch} from 'react-redux';

const productData = [
  {
    name: 'Samsung S23',
    color: 'white',
    price: 75400,
    image:
      'https://images.samsung.com/in/smartphones/galaxy-s23/images/galaxy-s23-share-image.jpg',
  },
  {
    name: 'Vivo Y73',
    color: 'purple',
    price: 75400,
    image:
      'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1621854005218/91ac87ce038b1c39f78f83f96dc3882b.png',
  },
  {
    name: 'iPhone 14',
    color: 'black',
    price: 45000,
    image:
      'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg',
  },
  {
    name: 'Oppo O14',
    color: 'green',
    price: 14000,
    image:
      'https://media.croma.com/image/upload/v1666991370/Croma%20Assets/Communication/Mobiles/Images/247199_wimawg.png',
  },
];

const Products = () => {
  const Data = useSelector(state => state?.products?.productData);
  const dispatch = useDispatch();
  const AddToCartHandler = item => {
    dispatch(AddToCart(item));
  };

  const RemoveToCartHandler = item => {
    dispatch(RemoveToCart(item));
  };

  const filterCartItems = item => {
    if (Data?.find(cartItem => cartItem?.name === item.name)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <CartHeader />
      <ScrollView>
        <Text style={style.title}>All Products</Text>
        {Data?.map((item, index) => (
          <View style={style.cartItem} key={index}>
            <Text>{index + 1}</Text>
            <Text>{item?.name}</Text>
            {/* <Button color="red" title="Remove" /> */}
          </View>
        ))}

        <View style={style.mainDiv}>
          {productData?.map((item, index) => (
            <>
              <View key={index} style={style.productMain}>
                <Image width={100} height={100} source={{uri: item?.image}} />
                <Text style={style.productText}>{item?.name}</Text>
                <Text style={style.productText}>{item?.color}</Text>
                <Text style={style.productText}>{item?.price}</Text>
                <Button
                  color={filterCartItems(item) ? 'red' : 'blue'}
                  onPress={() =>
                    filterCartItems(item)
                      ? RemoveToCartHandler(item)
                      : AddToCartHandler(item)
                  }
                  title={
                    filterCartItems(item) ? 'Remove to Cart' : 'Add to Cart'
                  }
                />
              </View>
            </>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    fontFamily: 'Helvetica',
    color: 'blue',
    fontWeight: 'bold',
  },
  mainDiv: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    // marginBottom: 100,
  },
  productMain: {
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 4,
  },
  productText: {
    fontSize: 15,
    paddingVertical: 2,
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Products;
