import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Container = styled.View`
  background-color: ${theme.primaryColor};
  width: 100%;
  height: 160px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${theme.accentColor};
  font-weight: bold;
  font-size: 18px;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
})``;
