import React from 'react';
import {ScrollView, Text} from 'react-native';
import FlatListCom from '../components/FlatList';
import SectionListCom from '../components/SectionListCom';
import TouchableHighlightCom from '../components/TouchableHighlightButton';
import TouchableOpacityRadioButton from '../components/TouchableOpacityRadioButton';
import PressableButton from '../components/PressableButton';
import PlatformCom from '../components/PlatformCom';
import AsynsStorageCom from '../components/AsynsStorageCom';

const TaskAll = () => {
  return (
    <ScrollView>
      <Text
        style={{
          backgroundColor: 'skyblue',
          fontSize: 30,
          margin: 50,
          padding: 10,
        }}>
        All Task for Learn
      </Text>
      <FlatListCom />
      <SectionListCom />
      <TouchableHighlightCom />
      <TouchableOpacityRadioButton />
      <PressableButton />
      <PlatformCom />
      <AsynsStorageCom />
    </ScrollView>
  );
};

export default TaskAll;
