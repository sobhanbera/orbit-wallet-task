import {Image, Text, View} from 'react-native';
import {AppColors} from '../configs/colors';

const SEARCH_ICON = require('../assets/images/icons/search-outline.png');

interface SearchDummyInputProps {
  onPress: () => void;
}
const SearchDummyInput = ({onPress}: SearchDummyInputProps) => {
  return (
    <View
      style={{
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 14,
        marginVertical: 14,

        borderWidth: 2,
        borderColor: AppColors.primary,
      }}>
      <Image
        source={SEARCH_ICON}
        style={[{width: 22, height: 22}]}
        tintColor={AppColors.primary}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          color: AppColors.primary,
          paddingHorizontal: 12,
        }}>
        Search...
      </Text>
    </View>
  );
};

export default SearchDummyInput;
