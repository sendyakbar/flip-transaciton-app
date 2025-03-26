import { ReactNode } from 'react';
import { ModalProps } from 'react-native';

export interface Props extends ModalProps {
  children: ReactNode;
}
