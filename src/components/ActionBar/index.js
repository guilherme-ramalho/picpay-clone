import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Header,
  HeaderAction,
  BalanceView,
  BalanceText,
  BalanceValueText,
  ActionButton,
} from './styles';
import theme from '../../styles/theme';

export default function ActionBar() {
  return (
    <Header>
      <HeaderAction>
        <ActionButton>
          <Icon name="qrcode-scan" size={24} color={theme.primaryColor} />
        </ActionButton>
      </HeaderAction>
      <BalanceView>
        <BalanceText>Meu saldo</BalanceText>
        <BalanceValueText>R$ 0,00</BalanceValueText>
      </BalanceView>
      <HeaderAction align="flex-end">
        <ActionButton>
          <Icon
            name="account-plus-outline"
            size={24}
            color={theme.primaryColor}
          />
        </ActionButton>
      </HeaderAction>
    </Header>
  );
}
