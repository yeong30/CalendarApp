import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpenseIncomeScreen from '@/screens/ExpenseIncomeScreen';
import BudgetScreen from '@/screens/BudgetScreen';
import AnalysisScreen from '@/screens/AnalysisScreen';
import HomeScreen from '@/screens/HomeScreen';
import SettingScreen from '@/screens/SettingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 예산 설정 , 지출 수입 목록 , HOME,  분석, 설정(지출 카테고리 관리)의 Tab을 생성하기

function HomeTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Budget" component={BudgetScreen} />
      <Tab.Screen name="ExpenseIncome" component={ExpenseIncomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analysis" component={AnalysisScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeTab">
        <Stack.Screen name="HomeTab" component={HomeTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
