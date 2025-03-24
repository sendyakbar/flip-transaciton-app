import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import { TransactionList } from '../screens/TransactionList/TransactionList';
import { TransactionDetail } from '../screens/TransactionDetail/TransactionDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TransactionList"
      component={TransactionList}
    />
    <Stack.Screen
      name="TransactionDetail"
      component={TransactionDetail}
    />
  </Stack.Navigator>
);
