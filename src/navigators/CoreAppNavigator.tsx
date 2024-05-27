import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './core/HomeNavigator';
import SearchNavigator from './core/SearchNavigator';
import AppTabBar from '../components/navigation/AppTabBar';

const BottomTab = createBottomTabNavigator();

type Props = {};
const CoreAppNavigator = (_props: Props) => {
  return (
    <BottomTab.Navigator
      id="CoreAppNavigator"
      initialRouteName="HomeNavigator"
      screenOptions={{headerShown: false}}
      backBehavior="history"
      tabBar={({descriptors, insets, navigation, state}) => (
        <AppTabBar
          descriptors={descriptors}
          insets={insets}
          navigation={navigation}
          state={state}
        />
      )}>
      <BottomTab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{tabBarLabel: 'Home'}}
      />

      <BottomTab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{tabBarLabel: 'Search'}}
      />
    </BottomTab.Navigator>
  );
};

export default CoreAppNavigator;
