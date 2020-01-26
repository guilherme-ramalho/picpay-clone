import React from 'react';

import SuggestionItem from '../SuggestionItem';

import { Container, Title, Scroll } from './styles';

export default function SuggestedActions() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container>
      <Title>Sugestões para você</Title>
      <Scroll>
        {arr.map(item => (
          <SuggestionItem key={item} />
        ))}
      </Scroll>
    </Container>
  );
}
