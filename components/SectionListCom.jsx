import React from 'react';
import {SectionList, Text, View} from 'react-native';

const SectionListCom = () => {
  const UserData = [
    {
      id: 1,
      name: 'GB',
      data: ['css', 'js', 'php'],
    },
    {
      id: 2,
      name: 'Meet',
      data: ['python', 'js', 'wordpress'],
    },
    {
      id: 3,
      name: 'Druvin',
      data: ['Angular', 'Net', 'nextjs'],
    },
    {
      id: 4,
      name: 'Hari',
      data: ['Java', 'ccc', 'c++'],
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
          This is SectionList Component
        </Text>
        <SectionList
          sections={UserData}
          renderItem={({item}) => (
            <Text
              style={{
                fontSize: 19,
                color: 'blue',
                marginLeft: 15,
              }}>
              {item}
            </Text>
          )}
          renderSectionHeader={({section}) => (
            <Text style={{fontSize: 30, color: 'red'}}>{section.name}</Text>
          )}
        />
      </View>
    </>
  );
};

export default SectionListCom;
