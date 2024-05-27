import React from 'react';
import {View, Dimensions, Text, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {NavigationHelpers, ParamListBase, TabNavigationState} from '@react-navigation/native';

import {EdgeInsets} from 'react-native-safe-area-context';
import {AppColors} from '../../configs/colors';

const {width} = Dimensions.get('window');

const RouteFocusedIcon = {
  Home: require('../../assets/images/icons/home-filled.png'),
  Search: require('../../assets/images/icons/search-filled.png'),

  // more screens
  Create: require('../../assets/images/icons/add-filled.png'),
  Comm: require('../../assets/images/icons/community-filled.png'),
  Me: require('../../assets/images/icons/profile-filled.png'),
};
const RouteUnFocusedIcon = {
  Home: require('../../assets/images/icons/home-outline.png'),
  Search: require('../../assets/images/icons/search-outline.png'),

  // more screens
  Create: require('../../assets/images/icons/add-outline.png'),
  Comm: require('../../assets/images/icons/community-outline.png'),
  Me: require('../../assets/images/icons/profile-outline.png'),
};

interface AppTabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap> | any;
  insets: EdgeInsets;
}
const AppTabBar = ({state, descriptors, navigation, insets}: AppTabBarProps) => {
  return (
    <View
      style={[
        {
          width: width,
          position: 'absolute',
          flexDirection: 'row',
          bottom: 0,
          paddingBottom: insets.bottom, // safe area
          backgroundColor: AppColors.primaryLight,
          // borderTopWidth: 1,
          // borderTopColor: AppColors.primary,
        },
      ]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label: 'Explore' | 'Search' | 'Sobyte' = // screen labels
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const color = isFocused ? '#000000' : '#0000007F';

        return (
          <TouchableWithoutFeedback
            key={index}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onPress}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
              }}>
              <ImageBackground
                source={isFocused ? RouteFocusedIcon[label] : RouteUnFocusedIcon[label]}
                style={{width: 24, height: 24, marginBottom: 5}}
                resizeMode="contain"
                tintColor={color}
              />
              <Text style={{color, fontSize: 14}}>{label}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default AppTabBar;
