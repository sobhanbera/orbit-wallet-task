import {View, Text} from 'react-native';
import React from 'react';

type Props = {};
const ProfileScreen = (_props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Your Profile
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          textAlign: 'center',
          paddingHorizontal: 20,
        }}>
        This screen is a placeholder for creating content.
      </Text>
    </View>
  );
};

export default ProfileScreen;
