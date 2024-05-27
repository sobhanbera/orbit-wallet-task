import React, {useEffect} from 'react';
import {
  Animated,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

const DEFAULT_TOUCHABLE_OPACITY = 0.8;
const DEFAULT_TOUCHABLE_SCALE = 0.975;

export interface TouchableScalableProps extends TouchableOpacityProps {
  buttonStyle?: StyleProp<any>; // custom button styles
  children?: React.ReactNode; // the actual children to render as a button
  containerStyle?: StyleProp<ViewStyle>; // main outer container's style
  scale?: number; // the value to scale
  autoAnimate?: boolean;
}
export function TouchableScalable(props: TouchableScalableProps) {
  const animation = React.useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, props.scale ?? DEFAULT_TOUCHABLE_SCALE],
  });

  /**
   * when the user starts the press, this means hover
   */
  const onHovered = () => {
    if (!props.autoAnimate) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  /**
   * when the user ended the press
   * or in other words the onPress is called
   */
  const onPressCompleted = () => {
    if (!props.autoAnimate) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  /**
   * this method and the below method are responsible to make a scale animation
   * which updates the value of scale animated value
   */
  const autoAnimateContinue = () => {
    if (props.autoAnimate) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        delay: 0,
      }).start(autoAnimate);
    }
  };

  const autoAnimate = () => {
    if (props.autoAnimate) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        delay: 0,
      }).start(autoAnimateContinue);
    }
  };

  /**
   * at the first render this component auto animates this component itself
   * if auto animate prop is true
   */
  useEffect(() => {
    if (props.autoAnimate) {
      autoAnimate();
    }
  }, []);

  return (
    <Animated.View
      style={[
        props.containerStyle,
        {transform: [{scale}], overflow: 'hidden'}, // the animated value
      ]}>
      <TouchableOpacity
        style={props.buttonStyle}
        activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
        onPressIn={onHovered}
        onPressOut={onPressCompleted}
        {...props}>
        {props.children}
      </TouchableOpacity>
    </Animated.View>
  );
}
