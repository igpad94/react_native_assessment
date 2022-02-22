import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReadQr from "./components/ReadQr"
import QrList from "./components/QrList"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, Text } from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="ReadQr"
        component={ReadQr}
        options={{
        headerShown: false,
        tabBarLabel: () => (
          <View>
            <Text>
             Read Qr 
            </Text>
          </View>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon name="camera" size={20} color={focused ? "#00B4D8" : "grey"} />
        )
        }}/> 
        <Tab.Screen 
        name="QrList" 
        component={QrList}
        options={{
          headerShown: false,
          tabBarLabel: () => (
            <View>
              <Text>
               Qr List 
              </Text>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Icon name="list" size={20} color={focused ? "#00B4D8" : "grey"} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



