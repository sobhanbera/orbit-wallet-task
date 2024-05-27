import {View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppColors} from '../configs/colors';
import SearchDummyInput from '../components/SearchDummyInput';
import {TouchableScalable} from '../components/resuables/TouchableScalable';
import LinearGradient from 'react-native-linear-gradient';
import CityListRenderer from '../navigators/core/search/CityListRenderer';
import HashtagedCityRenderer from '../navigators/core/search/HashtagedCityRenderer';
import PeopleListRenderer from '../navigators/core/search/PeopleListRenderer';

type Props = {};
const SearchScreen = (_props: Props) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[AppColors.primaryLight, AppColors.transparent]}
      angle={135}
      angleCenter={{x: 0.5, y: 0.5}}
      useAngle={true}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingVertical: 24,
            paddingBottom: 200,
          }}>
          <Text style={style.titleText}>Discover the world</Text>

          <SearchDummyInput onPress={() => {}} />

          <TouchableScalable>
            <ImageBackground source={{uri: 'https://picsum.photos/536/354'}} style={style.headerImage}>
              <Text style={style.headerImageText}>#Top search of the day</Text>
            </ImageBackground>
          </TouchableScalable>

          {/* both of the below renderer are rendering images from the same data */}
          {/* just to make it simple to understand */}
          <HashtagedCityRenderer title="Trending hashtags" />

          <CityListRenderer title="Top Community" />

          <PeopleListRenderer title="Top nomads" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  titleText: {
    fontSize: 26,
    fontWeight: '800',
    color: AppColors.primary,
  },
  headerImage: {
    height: 200,
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  headerImageText: {
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default SearchScreen;
