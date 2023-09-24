import 'react-native-gesture-handler'; // eslint-disable-line import/no-extraneous-dependencies
// import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native'; // eslint-disable-line import/no-extraneous-dependencies
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // eslint-disable-line import/no-extraneous-dependencies
import { useState } from 'react';
import { useFonts } from 'expo-font'; // eslint-disable-line import/no-extraneous-dependencies
import * as SplashScreen from 'expo-splash-screen'; // eslint-disable-line import/no-extraneous-dependencies
import { registerRootComponent } from 'expo';
import Home from './pages/Home';
import { consoleConfig } from './config';
import { RootStackParamList } from './router/types';
import SignIn from './pages/SignIn';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (__DEV__) {
    consoleConfig();
  }

  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line global-require
    NotoSansRegular: require('./assets/fonts/NotoSansJP-Regular.ttf'),
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          // Screens for logged in users
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>
        ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
            {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
          </Stack.Group>
        )}
        {/* Common modal screens */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          {/* <Stack.Screen name="Help" component={Help} /> */}
          {/* <Stack.Screen name="Invite" component={Invite} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
