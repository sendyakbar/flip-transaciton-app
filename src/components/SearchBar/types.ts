import { TextInputProps } from 'react-native';

export type Props = {
  value?: string;
  onChangeText: TextInputProps['onChangeText'];
  onPressSort: () => void;
};
