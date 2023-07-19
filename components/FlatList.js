import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListCom = () => {
  const ListData = [
    {
      id: 1,
      name: 'GB',
    },
    {
      id: 2,
      name: 'Meet',
    },
    {
      id: 3,
      name: 'Druvin',
    },
    {
      id: 4,
      name: 'Hari',
    },
    {
      id: 5,
      name: 'Meet',
    },
    {
      id: 6,
      name: 'Druvin',
    },
    {
      id: 7,
      name: 'Hari',
    },
    {
      id: 8,
      name: 'Meet',
    },
    {
      id: 9,
      name: 'Druvin',
    },
    {
      id: 10,
      name: 'Hari',
    },
  ];
  return (
    <>
      <View style={{marginTop: 15}}>
        <Text
          style={{
            backgroundColor: 'skyblue',
            fontSize: 18,
            margin: 10,
            padding: 10,
            fontWeight: 'bold',
          }}>
          This is FlatList Component
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {ListData?.map((item, index) => {
            return (
              <>
                <Text key={index} style={style.flatListText}>
                  {item?.name}
                </Text>
              </>
            );
          })}
          {/* <FlatList
            data={ListData}
            renderItem={({item}) => (
              <>
                <Text style={style.flatListText}>{item?.name}</Text>
              </>
            )}
            keyExtractor={item => item.id}
          /> */}
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  flatListText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    color: 'blue',
    padding: 5,
    margin: 5,
  },
});

export default FlatListCom;
