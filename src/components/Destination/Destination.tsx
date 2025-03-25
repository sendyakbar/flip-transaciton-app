import { forwardRef, memo } from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { Props } from './types';
import { Text } from '../Text/Text';

export const Destination = memo(forwardRef<View, Props>(
  (props, ref) => {
    const {sender, destination} = props;

    return (
      <View style={styles.container} ref={ref}>
        <Text weight="bold" size={18}>{sender}</Text>
        <Image
          source={require('../../assets/icons/icon_arrow_right.jpeg')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text weight="bold" size={18}>{destination}</Text>
      </View>
    );
  }
));
