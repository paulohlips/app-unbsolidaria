/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, {Component} from 'react';
import {BackHandler} from 'react-native';

import {
  Container,
  CenterView,
  LogoUnB,
  LogoLatitude,
  SimpleText,
  LargeImage,
} from './styles';

export default class Orientation extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const {navigation} = this.props;
    navigation.navigate('Home');
    return true;
  };

  render() {
    return (
      <Container>
        <CenterView>
          <LargeImage source={require('../../assets/images/risk.png')} />
          <SimpleText>
            Caso se encontre em uma situação de risco basta agitar o
            celular repetidas vezes. O UnB Solidária enviará para as
            autoridades um pedido de socorro com a sua localização.
          </SimpleText>
          <LogoUnB source={require('../../assets/images/logo.png')} />
        </CenterView>
      </Container>
    );
  }
}

// 16
