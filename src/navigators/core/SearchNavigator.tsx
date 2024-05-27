import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../../screens/SearchScreen';
import {AppColors} from '../../configs/colors';

const StackNavigator = createStackNavigator();

type Props = {};
const SearchNavigator = (_props: Props) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: AppColors.background,
        },
      }}>
      <StackNavigator.Screen name="SearchScreen" component={SearchScreen} />
    </StackNavigator.Navigator>
  );
};

export default SearchNavigator;
