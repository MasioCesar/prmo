import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

import { Home } from './src/telas/Home';

export default function App() {
  return (
    <TailwindProvider>
      <View>
        <StatusBar style="auto" />
        <Home />
      </View>
    </TailwindProvider>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
