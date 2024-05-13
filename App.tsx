import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Config from 'react-native-config';

const App = () => {
  console.log('env file test------>', Config.BASE_URL);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.centerText}>Hello World!!!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 20,
  },
});
