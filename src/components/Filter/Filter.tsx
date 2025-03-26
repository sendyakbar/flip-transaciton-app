import { FC, memo, useCallback } from 'react';
import { PopupModal } from '../PopupModal/PopupModal';
import { Props } from './types';
import { Image, TouchableOpacity, View } from 'react-native';
import { FILTER } from '../../utils/constants';
import { styles } from './styles';
import { Text } from '../Text/Text';

const filterData = [
  FILTER.ORDER,
  FILTER.NAME_ASC,
  FILTER.NAME_DESC,
  FILTER.DATE_DESC,
  FILTER.DATE_ASC,
];

export const Filter: FC<Props> = memo((props) => {
  const {visible, selectedFilter, onSelectFilter} = props;

  const onPressFilter = useCallback((item: string) => {
    onSelectFilter(item);
  }, [onSelectFilter]);

  return (
    <PopupModal visible={visible}>
      <View style={styles.container}>
        {filterData.map((item, index) => (
          <TouchableOpacity
            key={index} style={styles.filterItem}
            activeOpacity={0.7}
            onPress={() => { onPressFilter(item); }}
          >
            <Image
              source={
                selectedFilter === item
                  ? require('../../assets/icons/icon_radio_active.jpeg')
                  : require('../../assets/icons/icon_radio_inactive.jpeg')
              }
              style={styles.radio}
            />
            <Text size={18} weight="500">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </PopupModal>
  );
});
