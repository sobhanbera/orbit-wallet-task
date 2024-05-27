import {View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import React from 'react';

import {AppColors} from '../../../configs/colors';
import {CityList} from '../../../data/city';
import {TouchableScalable} from '../../../components/resuables/TouchableScalable';

/**
 * in real world scenario,
 * this would be a separate component, and would be getting the data from an API
 * but for this test, we're using a dummy data
 */
type Props = {title: string};
const CityListRenderer = ({title}: Props) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>

        <Text style={styles.seeAllText}>See all</Text>
      </View>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CityList.map((city, index) => {
            return (
              // key in real world scenario would be the city id or a unique id
              <TouchableScalable key={index}>
                <ImageBackground
                  source={{uri: 'https://picsum.photos/333'}} // since this is a test UI, else we'll get the image data from API itself, in the same object
                  style={styles.cardImage}>
                  <View style={styles.cardContainer}>
                    <View style={styles.cardPostCountContainer}>
                      <Text style={styles.cardPostCountText}>{city.postCount} posts/day</Text>
                    </View>

                    <View style={styles.cardTextContainer}>
                      <Text style={styles.cardText}>{city.text}</Text>

                      <Text style={styles.cardCityText}>{city.city}</Text>
                    </View>
                  </View>
                </ImageBackground>
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

  cardImage: {
    height: 160,
    width: 160,
    borderRadius: 14,
    overflow: 'hidden',
    marginRight: 16,

    elevation: 5,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardPostCountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardPostCountText: {
    padding: 5,

    fontSize: 14,
    fontWeight: '600',

    textAlign: 'left',
    color: 'white',
  },
  cardTextContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  cardCityText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default CityListRenderer;
