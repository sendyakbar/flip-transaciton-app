import { forwardRef, memo } from 'react';
import { Text as RNText } from 'react-native';
import { COLOR } from '../../theme/color';
import { Props } from './types';

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
