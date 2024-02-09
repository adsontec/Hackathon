import { StyleSheet, View , Image } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Fundo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});