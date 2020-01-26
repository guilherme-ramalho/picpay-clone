import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const ItemView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65px;
`;

export const ItemImage = styled.Image`
  border: 2px solid ${theme.accentColor};
  height: 60px;
  width: 60px;
  border-radius: 35px;
  padding: 0 5px;
`;

export const ItemText = styled.Text`
  color: ${theme.accentColor};
`;
