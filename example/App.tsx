import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativePassportNfcScanner from 'react-native-passport-nfc-scanner';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativePassportNfcScanner.hello()}</Text>
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
});
