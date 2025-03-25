import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: COLOR.WHITE,
    gap: 8,
  },
  leftCol: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconSearch: {
    height: 24,
    width: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconChevron: {
    height: 16,
    width: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});
