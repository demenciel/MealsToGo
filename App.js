import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, TextInput, Platform } from 'react-native';

export default function App() {
  const isAndroid = Platform.OS === "android";
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.input}>
          <TextInput>This is a react native text canvas</TextInput>
        </View>
        <View style={styles.restaurantList}>
          <Text>This is a react native text canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  input: {
    backgroundColor: 'green',
    padding: 16,
    justifyContent: 'center',
  },
  restaurantList: {
    backgroundColor: 'red',
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  }
}); 
