import React, {useState, useEffect} from "react"
import { View, Image, ActivityIndicator} from 'react-native';
import { Container, ViewPrincipal, TextPrincipal, TextSegundario, TextR, ScrollR, Buttom, ViewButtom, TextButton, TextButtonTime } from './styles';

import { Ionicons } from '@expo/vector-icons';

const movieURL = "http://192.168.15.181:3000/data/";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    buscarDados();
  }, [])

  async function buscarDados() {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setTitle(Object.values(json))
        console.log(Object.values(json));
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => setLoading(false));
  }

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
          <Buttom onPress={buscarDados}>
            <ViewButtom>
              <Ionicons name="water" size={24} color="#90e0fe" />
              {loading ? (<ActivityIndicator />) : (<TextButton> {title} </TextButton>)}
            </ViewButtom>
          </Buttom>          
          </ScrollR>
        </ViewPrincipal>
      </Container>
  );
}