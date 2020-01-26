import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const AppContainer = styled.View`
  flex: 1;
  background-color: yellow;
`;

export const QrCodeReader = styled(RNCamera)`
  justify-content: center;
  align-content: center;
  flex: 1;
`;
