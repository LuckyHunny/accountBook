import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './page/LoginScreen';
import MainScreen from './page/MainScreen';
import TotalScreen from './page/TotalScreen';
import MonthScreen from './page/MonthScreen';
import TodayScreen from './page/TodayScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // 로그인 화면에서는 헤더를 숨김
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ 
            headerTitle: "메인화면",
            headerLeft: null,
            headerStyle: { backgroundColor: '#E8F5E9' }, // 헤더 배경색
          headerTintColor: '#1B5E20' // 헤더 텍스트 색상
           }} // 메인 화면에서는 뒤로가기 버튼을 숨김
        />
        <Stack.Screen 
          name="Total" 
          component={TotalScreen} 
        />
        <Stack.Screen 
          name="Month" 
          component={MonthScreen} 
        />
        <Stack.Screen 
          name="Today" 
          component={TodayScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;