import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';
import {AppColors} from '../../configs/colors';

const StackNavigator = createStackNavigator();

type Props = {};
const ProfileNavigator = (_props: Props) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: AppColors.background,
        },
      }}>
      <StackNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
    </StackNavigator.Navigator>
  );
};

export default ProfileNavigator;
