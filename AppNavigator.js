import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Scan from './src/pages/scan/scan';
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
                // tabBar={props => <MyTabBar {...props} />}
                initialRouteName="Scan"
                activeColor="#e91e63"
                tabBarOptions={{
                  showLabel: true,
                  style: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90
                  }
                }}
            >
                <Tab.Screen
                    name="Scan"
                    component={Scan}
                    options={{
                        tabBarLabel: 'Scan',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" size={26} />
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
                            <MaterialCommunityIcons name="home" size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Passport"
                    component={Passport}
                    options={{
                        tabBarLabel: 'Passport',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row',backgroundColor:"#F4AF5F",height:50,borderRadius:50,justifyContent:"center",alignItems:"center" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems:"center" }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
}

export default AppNavigator;
