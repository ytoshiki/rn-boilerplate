import 'react-native-gesture-handler'; // eslint-disable-line import/no-extraneous-dependencies
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native'; // eslint-disable-line import/no-extraneous-dependencies
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // eslint-disable-line import/no-extraneous-dependencies
import Home from './pages/Home';
import { consoleConfig } from './config';
import { RootStackParamList } from './router/types';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  if (__DEV__) {
    consoleConfig();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
