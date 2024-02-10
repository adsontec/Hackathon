import { StyleSheet, View, Image, Text } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Fundo.png")}
      />
      <Text style={{fontSize: 22, position: 'absolute'}}> Qualidade </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
