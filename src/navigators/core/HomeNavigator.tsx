import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import {AppColors} from '../../configs/colors';

const StackNavigator = createStackNavigator();

type Props = {};
const HomeNavigator = (_props: Props) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: AppColors.background,
          marginBottom: 100,
        },
      }}
      initialRouteName="HomeScreen">
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};

export default HomeNavigator;
