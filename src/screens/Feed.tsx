import { StyleSheet, View , SafeAreaView, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/Fundo.png")} />
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Text style={{fontSize: 26, fontWeight: 'bold', padding: 15, color: "#FFF"}}>Parabéns, você está com consumo excelente!{"\n"}20 litros de consumo nas últimas 24h</Text>
        <View>
          <Image source={require("../../assets/Water.png")} />
          <Text style={{position:"absolute", padding: 60, fontSize: 38, fontWeight: 'bold', color: "#1D6AFF"}}>   20 {"\n"} Litros </Text>
        </View>
        <Text style={{fontSize: 32, fontWeight: 'bold' ,color: "#272353"}}>Registro de uso hoje</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 16}} style={{width: 250, height: 380, marginTop: 20, marginBottom: 20}}> 
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 2500 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 8:00 am </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 2000 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 10:00 am </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 5000 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 11:00 pm </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 2900 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 01:00 pm </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 2500 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 03:00 pm </Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 3000 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 04:00 pm </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 250, height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row",backgroundColor: "#FFF", borderRadius: 12}}>
            <View style={{flexDirection: "row", margin: 10}}>
              <Ionicons name="water" size={24} color="#90e0fe" />
              <Text style={{fontSize: 22 ,color: "#7B81A6"}}> 4000 ml </Text>
            </View>
            <Text style={{fontSize: 22 ,color: "#7B81A6", margin: 10}}> 05:00 pm </Text>
          </TouchableOpacity>     
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});