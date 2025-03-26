import { FC, useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';
import { Text } from '../../components/Text/Text';
import { COLOR } from '../../theme/color';
import { DetailSection } from '../../components/DetailSection/DetailSection';
import { Destination } from '../../components/Destination/Destination';
import { DetailItem } from '../../components/DetailItem/DetailItem';
import { formatCurrency, formatDate } from '../../utils/helpers';

export const TransactionDetail: FC<Props> = ({ navigation, route }) => {
  const {
    id,
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    account_number,
    amount,
    remark,
    unique_code,
    created_at,
  } = route.params;

  const data = useMemo(() => [
    {
      label: beneficiary_name,
      value: account_number,
    },
    {
      label: 'Nominal',
      value: formatCurrency(amount),
    },
    {
      label: 'Berita Transfer',
      value: remark,
    },
    {
      label: 'Kode Unik',
      value: unique_code.toString(),
    },
    {
      label: 'Waktu Dibuat',
      value: formatDate(created_at),
    },
  ], [
    account_number,
    amount,
    beneficiary_name,
    created_at,
    remark,
    unique_code,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <DetailSection>
          <View style={styles.row}>
            <Text size={18} weight="bold">ID TRANSAKSI: #{id}</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={require('../../assets/icons/icon_copy.jpeg')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </DetailSection>
        <DetailSection>
          <View style={styles.rowBetween}>
            <Text size={18} weight="bold">DETAIL TRANSAKSI</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text size={18} color={COLOR.WARNING} weight="bold">Tutup</Text>
            </TouchableOpacity>
          </View>
        </DetailSection>
        <DetailSection>
          <Destination sender={sender_bank} destination={beneficiary_bank} />
          <View style={styles.detail}>
            {data.map((item, index) => (
              <DetailItem {...item} key={index} />
            ))}
          </View>
        </DetailSection>
      </View>
    </View>
  );
};
