import { ReactNode } from 'react';
import { TextProps, TextStyle } from 'react-native';

export interface Props extends TextProps {
  children: ReactNode;
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'],
  style?: TextStyle;
}
