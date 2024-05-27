import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateContentScreen from '../../screens/CreateContentScreen';
import {AppColors} from '../../configs/colors';

const StackNavigator = createStackNavigator();

type Props = {};
const CreateNavigator = (_props: Props) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: AppColors.background,
        },
      }}>
      <StackNavigator.Screen name="CreateContentScreen" component={CreateContentScreen} />
    </StackNavigator.Navigator>
  );
};

export default CreateNavigator;
