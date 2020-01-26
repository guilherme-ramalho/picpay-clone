import React from 'react';
import Swiper from 'react-native-swiper';
import { RNCamera } from 'react-native-camera';
import { AppContainer, QrCodeReader } from './styles';

import ActionBar from './components/ActionBar';

import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <Swiper showsPagination={false}>
      <AppContainer>
        <ActionBar />
        <Routes />
      </AppContainer>
      <AppContainer>
        {/* <QrCodeReader
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
        /> */}
      </AppContainer>
    </Swiper>
  );
}
