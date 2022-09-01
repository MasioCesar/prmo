import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-web';
import { TailwindProvider } from 'tailwindcss-react-native';

import { Home } from './src/telas/Home';
import { Week } from './src/telas/Week';

export default function App() {
  return (
    <TailwindProvider>
      <View>
        <StatusBar style="auto" />
        <Home />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A73FC',
  }
});
