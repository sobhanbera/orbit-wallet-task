import {View, Text, StyleSheet, FlatList, ListRenderItemInfo, Dimensions} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BOTTOM_TAB_BAR_HEIGHT_UNIVERSAL, DEVICE_STATUSBAR_HEIGHT} from '../configs/constants';
import ImageContent from '../navigators/core/home/ImageContent';

const {height} = Dimensions.get('window');

// in real world senario this url will be fetched from the server
const IMAGE_URL = `https://picsum.photos/600/1200`;
const generateImages = (count: number) => {
  return Array.from({length: count}, () => IMAGE_URL);
};

type Props = {};
const HomeScreen = (_props: Props) => {
  // to render the image content above the bottom tab bar
  const {bottom} = useSafeAreaInsets();
  const IMAGE_HEIGHT = height - bottom - BOTTOM_TAB_BAR_HEIGHT_UNIVERSAL;

  const [images, setImages] = useState(generateImages(10));

  /**
   * this function will be called when the user reaches the end of the list
   * it will add more images to the list
   */
  const loadMoreImages = useCallback(() => {
    // adding 10 more images to the list
    setImages(prevImages => [...prevImages, ...generateImages(10)]);
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<any>) => <ImageContent imageData={item} imageHeight={IMAGE_HEIGHT} />;

  return (
    <View style={{flex: 1}}>
      {/* demo title preference text */}
      <Text style={styles.prefText}>For you</Text>

      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        pagingEnabled
        onEndReached={loadMoreImages}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        windowSize={10}
        getItemLayout={(data, index) => ({length: IMAGE_HEIGHT, offset: IMAGE_HEIGHT * index, index})}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  prefText: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    color: 'white',

    position: 'absolute',
    top: DEVICE_STATUSBAR_HEIGHT + 10,
    zIndex: 10,
  },
});

export default HomeScreen;
