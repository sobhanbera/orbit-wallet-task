import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

import {AppColors} from '../../../configs/colors';
import {TouchableScalable} from '../../../components/resuables/TouchableScalable';
import {peopleList} from '../../../data/people';

/**
 * in real world scenario,
 * this would be a separate component, and would be getting the data from an API
 * but for this test, we're using a dummy data
 */
type Props = {title: string};
const PeopleListRenderer = ({title}: Props) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>

        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {peopleList.map((user, index) => {
            return (
              // key in real world scenario would be the user id or a unique id
              <TouchableScalable key={index}>
                <View style={styles.peopleContainer}>
                  <Image source={{uri: 'https://picsum.photos/150'}} style={styles.peopleImg} />

                  <Text style={styles.usernameText}>@{user.id}</Text>

                  <Text style={styles.followersText}>{user.followers}K followers</Text>
                </View>
              </TouchableScalable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingTop: 35,
    paddingBottom: 22,
  },
  titleText: {
    fontSize: 26,
    fontWeight: '800',
    color: AppColors.primary,
  },
  seeAllText: {
    fontSize: 15,
    color: AppColors.primary,
    textDecorationLine: 'underline',
  },

  peopleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    paddingRight: 20,
  },
  peopleImg: {
    height: 125,
    width: 125,
    borderRadius: 75,
  },
  usernameText: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.primary,
    marginTop: 10,
  },
  followersText: {
    fontSize: 12,
    fontWeight: '500',
    color: AppColors.primary,
    marginTop: 5,
  },
});

export default PeopleListRenderer;
