import { StatusBar } from 'expo-status-bar';
import { Text, Image } from 'react-native';
import { Container } from './styles';

export function Alarm() {
  return (
    <Container>
        <StatusBar style="auto" />
        <Image source={require("../../../assets/Fundo.png")} />
    </Container>
  );
}
