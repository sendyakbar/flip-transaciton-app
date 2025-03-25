import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  separator: {
    height: 8,
  },
  loading: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
