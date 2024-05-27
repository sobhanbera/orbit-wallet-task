import {View, Text, ImageBackground, Image, StyleSheet, Dimensions, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {TouchableScalable} from '../../../components/resuables/TouchableScalable';

const FOLLOW_ICON = require('../../../assets/images/icons/follow.png');
const COMMENT_ICON = require('../../../assets/images/icons/comments.png');
const LIKE_ICON = require('../../../assets/images/icons/heart.png');
const SHARE_ICON = require('../../../assets/images/icons/share.png');
const SEND_ICON = require('../../../assets/images/icons/send.png');

const {width} = Dimensions.get('window');

const DEMO_CAPTION_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

type Props = {
  imageData: string;
  imageHeight: number;
};
const ImageContent = ({imageData: item, imageHeight}: Props) => {
  const [showFullCaption, setShowFullCaption] = useState(false);

  const imageAnim = useRef(new Animated.Value(0)).current;

  /**
   * this function will be called when the user taps on the caption
   * to see it fully
   */
  const enableFullCaption = () => {
    Animated.timing(imageAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const disableFullCaption = () => {
    Animated.timing(imageAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleShowFullCaption = () => {
    setShowFullCaption(value => {
      if (value) {
        disableFullCaption();
      } else {
        enableFullCaption();
      }
      return !value;
    });
  };

  /**
   * FEATURE: when the user taps on the caption
   * now the background image will fade away
   * so that the user can focus on the text itself
   */
  const imageBGOpacity = imageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#00000000', '#0000004f'],
  });

  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri: item}} style={[styles.image, {height: imageHeight}]}>
        {/* everything will be rendered at the bottom of the screen */}

        <Animated.View style={[styles.imageContentContainer, {backgroundColor: imageBGOpacity}]}>
          <View style={styles.imageBottom}>
            {/* the left side of the image */}
            {/* text and titles */}

            <TouchableScalable
              containerStyle={styles.textContainer}
              onPress={() => {
                toggleShowFullCaption();
              }}>
              <Text style={styles.captionText}>Caption</Text>

              <Text
                style={[
                  styles.imgText,
                  {
                    color: showFullCaption ? 'white' : '#ffffffbf',
                  },
                ]}>
                {showFullCaption ? DEMO_CAPTION_TEXT : DEMO_CAPTION_TEXT.slice(0, 100) + '\nRead more...'}
              </Text>
            </TouchableScalable>

            {/* right side of the image */}
            {/* icons and actions */}
            <View style={styles.imgActions}>
              <Image source={FOLLOW_ICON} style={[styles.actionIcon, {width: 34, height: 34}]} tintColor={'white'} />

              <Image source={COMMENT_ICON} style={styles.actionIcon} tintColor={'white'} />

              <Image source={LIKE_ICON} style={[styles.actionIcon, {width: 32, height: 32}]} tintColor={'white'} />

              <Image source={SHARE_ICON} style={styles.actionIcon} tintColor={'white'} />

              <Image source={SEND_ICON} style={styles.actionIcon} tintColor={'white'} />
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  imageContentContainer: {
    width: '100%',

    flexDirection: 'column',
  },
  imageBottom: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 100,
  },
  textContainer: {
    maxWidth: '75%',
    padding: 14,
    paddingBottom: 20,

    flexDirection: 'column',
    // justifyContent: 'flex-end',
  },
  captionText: {
    color: '#ffffffbf',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingBottom: 8,
  },
  imgText: {
    color: 'white',
    fontSize: 16,
  },
  imgActions: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',

    marginRight: 10,
  },
  actionIcon: {
    width: 44,
    height: 44,

    marginBottom: 16,
  },
});

export default ImageContent;
