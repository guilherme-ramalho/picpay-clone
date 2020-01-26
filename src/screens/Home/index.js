import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text } from 'react-native';

import { Container } from './styles';

export default function Home() {
  return (
    <Swiper showsPagination={false}>
      <Container color="red">
        <Text>Camera</Text>
      </Container>
      <Container color="yellow">
        <Text>Home</Text>
      </Container>
    </Swiper>
  );
}
