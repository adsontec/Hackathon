import { Home } from "./src/screens/Home";
import { Alarm } from "./src/screens/Alarm";
import { Analysis } from "./src/screens/Analysis";
import { Profile } from "./src/screens/Profile";
import { Setting } from "./src/screens/Setting";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from "react-native";

import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
              position: 'absolute',
              elevation: 5,
              backgroundColor: '#ffffff',
              borderRadius: 15,
              height: 90
          }
      }}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Feather style={{color: focused ? '#2f32e3' : '#748c94'}} name="home" size={24} /> 
            <Text style={{color: focused ? '#2f32e3' : '#748c94'}}>Home</Text>
          </View>
          ) }} />
        <Tab.Screen name="Alarm" component={Alarm} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{top: -20, position: 'absolute', backgroundColor: '#fff', borderRadius: 30, padding: 10, elevation: 5, shadowColor: '#062f6d', shadowOpacity: 1.0, shadowOffset: { width: 0, height: 1 } }}>
            <MaterialIcons style={{color: focused ? '#2f32e3' : '#748c94'}} name="access-alarms" size={40} />
          </View>
          ) }} />
        <Tab.Screen name="Analysis" component={Analysis} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons style={{color: focused ? '#2f32e3' : '#748c94'}} name="bar-chart" size={24} /> 
            <Text style={{color: focused ? '#2f32e3' : '#748c94'}}>Analysis</Text>
          </View>
          ) }} />
        {/*
        <Tab.Screen name="Setting" component={Setting} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <FontAwesome style={{color: focused ? '#2f32e3' : '#748c94'}} name="gear" size={24} />
            <Text style={{color: focused ? '#2f32e3' : '#748c94'}}>Setting</Text>
          </View>
          ) }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Feather style={{color: focused ? '#2f32e3' : '#748c94'}} name="user" size={24} />
            <Text style={{color: focused ? '#2f32e3' : '#748c94'}}>Profile</Text>
          </View>
          ) }}/>
        */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
