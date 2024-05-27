import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import {AppColors} from '../../configs/colors';
import {Platform} from 'react-native';

const StackNavigator = createStackNavigator();

type Props = {};
const HomeNavigator = (_props: Props) => {
  const isIOS = Platform.OS === 'ios';

  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: AppColors.background,
          marginBottom: isIOS ? 100 : 0,
        },
      }}
      initialRouteName="HomeScreen">
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};

export default HomeNavigator;
