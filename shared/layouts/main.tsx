import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/Home';
import { useAppSelector } from '../../shared/hooks';
import { RootState, store } from '../../store';
import LoginScreen from '../../screens/Auth/login';
import SignUpScreen from '../../screens/Auth/sign-up';

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  const { isLoggedIn } = useAppSelector((state: RootState) => state.authStore);
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainLayout;
