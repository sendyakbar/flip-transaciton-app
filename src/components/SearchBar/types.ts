import { TextInputProps } from 'react-native';

export type Props = {
  onChangeText: TextInputProps['onChangeText'];
  onPressSort: () => void;
};
