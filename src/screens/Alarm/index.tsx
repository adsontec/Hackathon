import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, TouchableOpacity, Modal, Button } from 'react-native';
import { Container } from './styles';
import React, {useState} from "react"
import { Calendar } from 'react-native-calendars';

export function Alarm() { 
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  return (
    <Container>
        <StatusBar style="auto" />
        <Image source={require("../../../assets/Fundo.png")} />
          <TouchableOpacity  style={{position: 'absolute', width: 400, height: 200, margin: 5, backgroundColor: '#FFF', borderRadius: 12}}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate || '']: {
                selected: true,
                selectedColor: 'blue',
              },
            }}
          />
          </TouchableOpacity>
        
        {/*
        <View style={{width: 400, height: 200, position:'absolute', backgroundColor: '#FFF', borderRadius: 12}}>
        
        </View>
        */}
    </Container>
  );
}
