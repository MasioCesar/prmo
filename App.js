import { TailwindProvider } from 'tailwindcss-react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './src/telas/Home';
import { Week } from './src/telas/Week';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Week" component={Week} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>

    /*
    <TailwindProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Week />
      </View>
    </TailwindProvider>
    */
  );
}
