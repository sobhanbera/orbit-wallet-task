import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './core/HomeNavigator';
import SearchNavigator from './core/SearchNavigator';
import AppTabBar from '../components/navigation/AppTabBar';
import CommunityNavigator from './core/CommunityNavigator';
import ProfileNavigator from './core/ProfileNavigator';
import CreateNavigator from './core/CreateNavigator';

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
        <AppTabBar descriptors={descriptors} insets={insets} navigation={navigation} state={state} />
      )}>
      <BottomTab.Screen name="HomeNavigator" component={HomeNavigator} options={{tabBarLabel: 'Home'}} />

      <BottomTab.Screen name="SearchNavigator" component={SearchNavigator} options={{tabBarLabel: 'Search'}} />

      <BottomTab.Screen name="CreateNavigator" component={CreateNavigator} options={{tabBarLabel: 'Create'}} />

      <BottomTab.Screen name="CommunityNavigator" component={CommunityNavigator} options={{tabBarLabel: 'Comm'}} />

      <BottomTab.Screen name="ProfileNavigator" component={ProfileNavigator} options={{tabBarLabel: 'Me'}} />
    </BottomTab.Navigator>
  );
};

export default CoreAppNavigator;
