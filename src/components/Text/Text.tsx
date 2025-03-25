import { forwardRef, memo, ReactNode } from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { COLOR } from '../../theme/color';

interface Props extends RNTextProps {
  children: ReactNode;
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'],
  style?: TextStyle;
}

export const Text = memo(forwardRef<RNText, Props>(
  (props, ref) => {
    const {
      children,
      size,
      weight,
      color,
      style,
      ...rest
    } = props;

    return (
      <RNText
        {...rest}
        ref={ref}
        style={[
          {
            fontSize: size || 14,
            fontWeight: weight || '400',
            color: color || COLOR.BLACK,
          },
          style,
        ]}
      >
        {children}
      </RNText>
    );
  }
));
