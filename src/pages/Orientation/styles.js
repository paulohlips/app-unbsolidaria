
import styled from 'styled-components';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
  background: #fff;
`;

export const CenterView = styled.View`
  align-items: center;
`;

export const LogoUnB = styled.Image`
  margin-top: 70px;
  width: ${normalize(60)};
  height: ${normalize(60, 'height')};
  background: #fff;
  align-self: center;
  margin-bottom: 15px;
`;

export const SimpleText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const LargeImage = styled.Image`
  width: ${normalize(60)};
  height: ${normalize(60, 'height')};
  align-self: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;
