import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme/color';

export const styles = StyleSheet.create({
  wrapper: {
    gap: 2,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    paddingTop: 20,
  },
  section: {
    backgroundColor: COLOR.WHITE,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    height: 20,
    width: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
});
