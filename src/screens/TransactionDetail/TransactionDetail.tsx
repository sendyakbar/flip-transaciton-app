import { FC } from 'react';
import { View, Text } from 'react-native';
import { Props } from './types';
import { styles } from './styles';

export const TransactionDetail: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Transaction Detail Screen</Text>
    </View>
  );
};
