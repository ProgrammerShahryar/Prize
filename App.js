import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Header from './src/components/PrizeHeader/PHeader';
import Tasks from './src/components/PrizeLayout/PrizeList';
import Form from './src/components/Prize/Prize';
import styles from './src/styles/main';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Authentication/Login'; 
import Signup from './src/components/Authentication/Signup';
import Logout from './src/components/Authentication/Logout';
import { showPrize } from './src/components/SFirebaseMethods/ShowDataMethod';
import Prize from './src/components/Prize/Prize';
import PrizeList from './src/components/PrizeLayout/PrizeList';
import LocalNotifications from './src/components/LocalNotifications';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [prize, setPrize] = useState([]);

  useEffect(() => {
    showPrize(setPrize);
  }, []);

  const sAdd = () => {
    showPrize(setPrize);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home"
        options={{
          headerShown: true,
          headerLeft: () => null,
        }}>
          {(props) => (
            <View style={styles.default}>
              <StatusBar style="auto" />
              <Header />
              <TabNavigator
                {...props}
                prize={prize}
                sAdd={sAdd}
              />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

  function TabNavigator({ prize, sDelete, sAdd }) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let iconSharry;
            if (route.name === 'Add') {
              iconSharry = 'create-outline';
            } else if (route.name === 'Settings') {
              iconSharry = 'ios-settings';
            } else if (route.name === 'Prize') {
              iconSharry = 'ios-cash';
            } else if (route.name === 'Logout') {
              iconSharry = 'ios-log-out';
            }
            return <Ionicons name={iconSharry} size={34} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Prize">
          {(props) => (
            <PrizeList {...props} prize={prize} />
          )}
        </Tab.Screen>
        <Tab.Screen name="Add">
          {(props) => <Prize {...props} onAddPrize={sAdd} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {(props) => <LocalNotifications />}
        </Tab.Screen>
        <Tab.Screen name="Logout">
          {(props) => <Logout />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}
