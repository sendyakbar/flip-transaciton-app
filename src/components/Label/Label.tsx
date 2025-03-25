import { forwardRef, memo, useMemo } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { Text } from '../Text/Text';
import { TransactionStatus } from '../../services/model/transaction/types';
import { styles } from './styles';
import { COLOR } from '../../theme/color';
import { Props } from './types';

export const Label = memo(forwardRef<View, Props>(
  (props, ref) => {
    const { status } = props;

    const title = useMemo(() => {
      if (status === TransactionStatus.PENDING) {
        return 'Pengecekan';
      }
      return 'Berhasil';
    }, [status]);

    const containerStyle = useMemo((): ViewStyle => {
      if (status === TransactionStatus.PENDING) {
        return {
          borderWidth: 2,
          borderColor: COLOR.WARNING,
        };
      }
      return {
        backgroundColor: COLOR.SUCCESS,
      };
    }, [status]);

    const textColor = useMemo((): TextStyle['color'] => {
      if (status === TransactionStatus.PENDING) {
        return COLOR.BLACK;
      }
      return COLOR.WHITE;
    }, [status]);

    return (
      <View style={[styles.container, containerStyle]} ref={ref}>
        <Text weight="600" size={16} color={textColor}>
          {title}
        </Text>
      </View>
    );
  }
));
