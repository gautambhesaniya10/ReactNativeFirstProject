/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomePage from './pages/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './pages/Loginpage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignUp from './pages/SignUp';
import TaskAll from './pages/TaskAll';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: 'skyblue',
        //   },
        //   headerTintColor: 'black',
        //   headerTitleStyle: {
        //     fontSize: 25,
        //   },
        // }}
        >
          <Tab.Screen
            name="Login"
            component={LoginPage}
            // options={{
            //   headerTitle: () => <Button title="Left" />,
            //   headerRight: () => <Button title="Right" />,
            //   title: 'User Login',
            //   headerStyle: {
            //     backgroundColor: 'orange',
            //   },
            // }}
          />
          <Tab.Screen
            name="Home"
            component={HomePage}
            initialParams={{formData: undefined}}
          />
          <Tab.Screen name="Tasks" component={TaskAll} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
