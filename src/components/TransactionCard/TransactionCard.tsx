import { forwardRef, memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import { Destination } from '../Destination/Destination';
import { Text } from '../Text/Text';
import { COLOR } from '../../theme/color';
import { Label } from '../Label/Label';
import { TransactionStatus } from '../../services/model/transaction/types';

export const TransactionCard = memo(forwardRef<View, Props>(
  (props, ref) => {
    const {
      onPress,
      senderBank,
      beneficiaryBank,
      beneficiaryName,
      amount,
      date,
      status,
    } = props;

    return (
      <TouchableOpacity
        ref={ref}
        style={styles.container}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <View
          style={[
            styles.ornament,
            {
              backgroundColor:
                status === TransactionStatus.SUCCESS
                  ? COLOR.SUCCESS
                  : COLOR.WARNING,
            },
          ]}
        />
        <View style={styles.inner}>
          <View style={styles.leftCol}>
            <Destination sender={senderBank} destination={beneficiaryBank} />
            <Text size={16} weight="500">{beneficiaryName.toUpperCase()}</Text>
            <Text size={16} weight="500">{amount} &bull; {date}</Text>
          </View>
          <Label status={status} />
        </View>
      </TouchableOpacity>
    );
  }
));
