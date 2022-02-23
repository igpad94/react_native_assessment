/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import QrList from './components/QrList';
import ReadQr from './components/ReadQr';
import store from './store/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="ReadQr"
            component={ReadQr}
            options={{
              headerShown: false,
              tabBarLabel: ({ focused }) => (
                <View>
                  <Text style={{ fontFamily: 'Optima', color: focused ? '#00B4D8' : 'grey' }}>
                    QR Reader
                  </Text>
                </View>
              ),
              tabBarIcon: ({ focused }) => (
                <Icon name="camera" size={20} color={focused ? '#00B4D8' : 'grey'} />
              ),
            }}
          />
          <Tab.Screen
            name="QrList"
            component={QrList}
            options={{
              headerShown: false,
              tabBarLabel: ({ focused }) => (
                <View>
                  <Text style={{ fontFamily: 'Optima', color: focused ? '#00B4D8' : 'grey' }}>
                    QR List
                  </Text>
                </View>
              ),
              tabBarIcon: ({ focused }) => (
                <Icon name="list" size={20} color={focused ? '#00B4D8' : 'grey'} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
