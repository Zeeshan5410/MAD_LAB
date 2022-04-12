import { StyleSheet, Image,Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import WhatsApp from"./WhatsApp/WhatsApp";

export default function App() {
  return (
    <View style={styles.container}>
      <WhatsApp/>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  }
});