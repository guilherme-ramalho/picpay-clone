import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Header = styled.View`
  height: 50px;
  background-color: ${theme.accentColor};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.secondaryColorLight};
  flex-direction: row;
`;

export const HeaderAction = styled.View`
  flex: 1;
  justify-content: center;
  padding: 5px;
  align-items: ${({ align }) => align || 'flex-start'};
`;

export const TitleView = styled.View`
  flex: 3;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${theme.primaryColor};
  justify-content: center;
`;

export const BalanceView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BalanceText = styled.Text``;

export const BalanceValueText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ActionButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
