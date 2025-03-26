import { TextInputProps } from 'react-native';

export type Props = {
  value?: string;
  sortTitle: string;
  onChangeText: TextInputProps['onChangeText'];
  onPressSort: () => void;
};
