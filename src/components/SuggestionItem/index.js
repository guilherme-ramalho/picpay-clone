import React from 'react';
import PropTypes from 'prop-types';

import { ItemView, ItemImage, ItemText } from './styles';

export default function SuggestionItem({ key }) {
  return (
    <ItemView>
      <ItemImage
        key={key}
        source={{
          uri:
            'https://www.planejarbrasil.com.br/wp-content/uploads/2018/02/LogoCielo1602.png',
        }}
      />
      <ItemText>Máquinas Cielo</ItemText>
    </ItemView>
  );
}

SuggestionItem.propTypes = {
  key: PropTypes.number.isRequired,
};
