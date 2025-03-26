import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme/color';

export const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: '30%',
    marginHorizontal: 20,
    backgroundColor: COLOR.WHITE,
    width: '90%',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignSelf: 'center',
    shadowColor: COLOR.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
