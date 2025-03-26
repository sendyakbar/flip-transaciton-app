import { forwardRef, memo } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import { Text } from '../Text/Text';
import { COLOR } from '../../theme/color';

export const SearchBar = memo(forwardRef<View, Props>(
  (props, ref) => {
    const {
      onChangeText,
      onPressSort,
      value,
      sortTitle,
    } = props;

    return (
      <View style={styles.container} ref={ref}>
        <View style={styles.leftCol}>
          <Image
            source={require('../../assets/icons/icon_search.jpeg')}
            style={styles.iconSearch}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Cari nama, bank, atau nominal"
            onChangeText={onChangeText}
            style={styles.input}
            value={value}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressSort}
          style={styles.sortButton}
        >
          <Text size={16} weight="600" color={COLOR.WARNING}>
            {sortTitle}
          </Text>
          <Image
            source={require('../../assets/icons/icon_chevron_down.jpeg')}
            style={styles.iconChevron}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
));
