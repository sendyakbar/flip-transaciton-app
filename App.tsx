import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';

export const App: FC = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
