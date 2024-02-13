import styled from "styled-components/native";

export const Container = styled.View`
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

export const ViewPrincipal = styled.View`
    flex: 1;
    position: absolute;
    padding: 25px;
    align-items: center;
`;

export const TextPrincipal = styled.Text`
    font-size: 26px;
    font-weight: bold;
    padding: 12px;
    color: #FFF;
`;

export const TextSegundario = styled.Text`
  position: absolute;
  padding: 60px;
  font-Size: 38px;
  font-Weight: bold;
  color: #1D6AFF;
`;

export const TextR = styled.Text`
  font-Size: 32px;
  font-Weight: bold;
  color: #272353;
`;

export const ScrollR = styled.ScrollView`
  width: 250px;
  height: 380px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Buttom = styled.TouchableOpacity`
  width: 250px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #FFF;
  border-radius: 12px;
`;

export const ViewButtom = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  color: #7B81A6;
`;

export const TextButtonTime = styled.Text`
  font-size: 22px;
  color: #7B81A6;
  margin: 10px;
`;
