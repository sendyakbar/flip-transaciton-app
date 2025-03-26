import { View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import { FC } from 'react';

export const DetailSection: FC<Props> = (props) => (
  <View style={styles.container} {...props}>
    {props.children}
  </View>
);
