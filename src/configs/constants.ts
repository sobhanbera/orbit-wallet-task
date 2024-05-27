import {NativeModules, Platform} from 'react-native';

const {StatusBarManager} = NativeModules;
export const DEVICE_STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const isIOS = Platform.OS === 'ios';

// layout related constants
export const BOTTOM_TAB_BAR_HEIGHT_IOS = 66;
export const BOTTOM_TAB_BAR_HEIGHT_ANDROID = 62;
export const BOTTOM_TAB_BAR_HEIGHT_UNIVERSAL = isIOS ? BOTTOM_TAB_BAR_HEIGHT_IOS : BOTTOM_TAB_BAR_HEIGHT_ANDROID; // both for android
