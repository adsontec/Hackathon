import { StyleSheet, View , Image, Text } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Fundo.png")}
      />
      <Text style={{fontSize: 26, position: 'absolute', padding: 15, color: "#FFF"}}>Parabéns, você está com consumo excelente!{"\n"}20 litros de consumo nas últimas 24h</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff56',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});