import {StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import { HomeScreen, SearchScreen} from '../screens';
import {icons, myColor} from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}} initialRouteName='Home'>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={[
                styles.bottomTabIcon,
                {
                  tintColor: focused ? myColor.black : myColor.grey,
                },
              ]}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? myColor.black : myColor.grey}}>Home</Text>
          )
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={[
                styles.bottomTabIcon,
                {
                  tintColor: focused ? myColor.black : myColor.grey,
                },
              ]}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? myColor.black : myColor.grey}}>Search</Text>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 25,
    height: 25,
  },
});
