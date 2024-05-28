import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <Text style={styles.message}>
        I am Tiago, a new programmer!
      </Text>

      <Text style={styles.message}>
        A like to develop stuff!
      </Text>
      <Button title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    padding:16,
    margin:16,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ff0000',
  }
});
