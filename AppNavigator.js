import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Scan from './src/pages/scan/scan';
import CodeScan from './src/pages/codeScan/codeScan';
import Bins from './src/pages/bins/bins';
import Passport from './src/pages/passport/passport';
import { Icon, View } from 'native-base';
import { TouchableOpacity, Text } from 'react-native';

const Tab = createBottomTabNavigator();

class AppNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName="Scan"
        activeColor="#e91e63"
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: '#a7a7dc',
            borderRadius: 0,
            height: 60
          }
        }}
      >
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarLabel: 'Scan',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="#000" />
            ),
            tabBarOptions: {
              showLabel: false
            }
          }}
        />
        <Tab.Screen
          name="CodeScan"
          component={CodeScan}
          options={{
            tabBarLabel: 'CodeScan',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="#000" />
            ),
            tabBarOptions: {
              showLabel: false
            }
          }}
        />
        <Tab.Screen
          name="Bins"
          component={Bins}
          options={{
            tabBarLabel: 'Bins',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="archive" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Passport"
          component={Passport}
          options={{
            tabBarLabel: 'Passport',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="passport" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default AppNavigator;
