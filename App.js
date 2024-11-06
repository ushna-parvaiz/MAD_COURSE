import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './components/calculator';  // Ensure this path is correct
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
