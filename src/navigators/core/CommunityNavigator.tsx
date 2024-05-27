import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunityScreen from '../../screens/CommunityScreen';
import {AppColors} from '../../configs/colors';

const StackNavigator = createStackNavigator();

type Props = {};
const CommunityNavigator = (_props: Props) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: AppColors.background,
        },
      }}>
      <StackNavigator.Screen name="CommunityScreen" component={CommunityScreen} />
    </StackNavigator.Navigator>
  );
};

export default CommunityNavigator;
