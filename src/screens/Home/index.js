import React from 'react';
import { Text } from 'react-native';

import SuggestedActions from '../../components/SuggestedActions';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <SuggestedActions />
    </Container>
  );
}
