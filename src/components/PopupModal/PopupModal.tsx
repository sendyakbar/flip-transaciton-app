import { forwardRef, memo } from 'react';
import { Modal, View } from 'react-native';
import { Props } from './types';
import { styles } from './styles';

export const PopupModal = memo(forwardRef<Modal, Props>(
  (props, ref) => {
    return (
      <Modal
        ref={ref}
        backdropColor="rgba(0, 0, 0, 0.6)"
        animationType="fade"
        {...props}
      >
        <View style={styles.modal}>
          {props.children}
        </View>
      </Modal>
    );
  }
));
