import { StyleSheet, View , SafeAreaView, Image, Text } from 'react-native';

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Fundo.png")}
      />
      <Text style={{fontSize: 26, position: 'absolute', padding: 15, color: "#FFF"}}>Parabéns, você está com consumo excelente!{"\n"}20 litros de consumo nas últimas 24h</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    width: 212,
    height: 40,
    backgroundColor: "#FFF",
    position: "absolute",
    
  }
});