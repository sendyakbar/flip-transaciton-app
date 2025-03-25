import { StyleSheet } from 'react-native';
import { COLOR } from '../../theme/color';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLOR.BACKGROUND,
    paddingHorizontal: 8,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
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
