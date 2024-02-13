import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container } from './styles';

export function Analysis() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Image source={require("../../../assets/Fundo.png")} />
    </Container>
  );
}
