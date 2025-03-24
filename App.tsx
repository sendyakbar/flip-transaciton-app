import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const App: FC = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  </NavigationContainer>
);
