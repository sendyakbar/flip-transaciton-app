import { forwardRef, memo } from 'react';
import { View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import { Text } from '../Text/Text';

export const DetailItem = memo(forwardRef<View, Props>(
  (props, ref) => {
    const {label, value} = props;

    return (
      <View ref={ref} style={styles.container}>
        <Text size={16} weight="600">
          {label.toUpperCase()}
        </Text>
        <Text size={16}>
          {value}
        </Text>
      </View>
    );
  }
));
