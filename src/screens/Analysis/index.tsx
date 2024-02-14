import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import { Container, ViewGraph, TextGraph} from './styles';
import { LineChart } from "react-native-chart-kit";

export function Analysis() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Image source={require("../../../assets/Fundo.png")} />
      <ViewGraph>
        <TextGraph>Quantidade de Água por mês</TextGraph>
          <View>
          <LineChart
          data={{
            labels: ["Janeiro", "Fevereiro", "Março", "April", "Maio", "Junho"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10
                ]
              }
            ]
          }}
          width={400} // from react-native
          height={220}
          yAxisLabel="ml "
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#007ce2",
            backgroundGradientFrom: "#303c3f",
            backgroundGradientTo: "#26ccff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ViewGraph>
    </Container>
  );
}
