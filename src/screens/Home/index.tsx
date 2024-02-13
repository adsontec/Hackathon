
import { View, Image} from 'react-native';
import { Container, ViewPrincipal, TextPrincipal, TextSegundario, TextR, ScrollR, Buttom, ViewButtom, TextButton, TextButtonTime } from './styles';

import { Ionicons } from '@expo/vector-icons';

export function Home() {
  return (
      <Container>
        <Image source={require("../../../assets/Fundo.png")} />
        <ViewPrincipal>
          <TextPrincipal>Parabéns, você está com consumo excelente!{"\n"}20 litros de consumo nas últimas 24h</TextPrincipal>
          <View>
            <Image source={require("../../../assets/Water.png")} />
            <TextSegundario>   20{"\n"} Litros</TextSegundario>
          </View>
          <TextR> Registro de uso hoje </TextR>
          <ScrollR showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 16}}>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 2500 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 8:00 am </TextButtonTime>
          </Buttom>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 2000 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 10:00 am </TextButtonTime>
          </Buttom>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 5000 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 11:00 am </TextButtonTime>
          </Buttom>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 2900 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 01:00 pm </TextButtonTime>
          </Buttom>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 2500 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 03:00 pm </TextButtonTime>
          </Buttom>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 3000 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 04:00 pm </TextButtonTime>
          </Buttom>
          <Buttom>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <TextButton> 4000 ml </TextButton>
            </ViewButtom>
            <TextButtonTime> 05:00 pm </TextButtonTime>
          </Buttom>          
          </ScrollR>
        </ViewPrincipal>
      </Container>
  );
}

