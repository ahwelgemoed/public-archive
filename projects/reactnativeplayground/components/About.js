import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Linking,
  LayoutAnimation,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Body,
  Icon,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Subtitle,
  Title
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class About extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 80,
      elevation: 0, //remove shadow on Android
      shadowOpacity: 0, //remove shadow on iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      borderRadius: 5,
      backgroundColor: '#fff',
      paddingBottom: 5
    },
    headerTintColor: 'black',
    headerTitle: (
      <View style={{ width: '100%' }}>
        <Title
          style={{ fontFamily: 'Streamster', fontSize: 35, color: '#000' }}
        >
          Dis Net Jy
        </Title>
        <Subtitle
          style={{
            fontFamily: 'Proxima Nova Alt',
            fontSize: 16,
            color: '#000'
          }}
        >
          KLYNTJI
        </Subtitle>
      </View>
    )
  };
  render() {
    const { buttonStyle, fontStyle, fontStyles } = styles;
    return (
      <Container>
        <Content style={{ padding: 20 }}>
          <Grid>
            <Row>
              <Col
                style={{
                  marginRight: 20,
                  paddingLeft: 3,
                  paddingBottom: 5
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontFamily: 'Proxima Nova Alt',
                    fontSize: 30,
                    textAlign: 'left',
                    marginTop: 20
                  }}
                >
                  About "Dis Net Jy"
                </Text>

                <Text
                  style={{
                    fontFamily: 'Lato-Light',
                    fontSize: 18,
                    lineHeight: 25
                  }}
                >
                  "Dis Net Jy" was started in middle 2018 by me, A.H. Welgemoed,
                  It's just a simple place to post and read poetry. What has
                  happened here already feels very magical, now with the App I
                  hope we can make it even more.
                </Text>
              </Col>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`https://www.instagram.com/ahwelgemoed`)
                }
              >
                <Right style={{ paddingRight: 20 }}>
                  <Icon
                    style={{ fontSize: 20 }}
                    name="instagram"
                    type="FontAwesome"
                  />
                </Right>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingBottom: 50 }}
                onPress={() => Linking.openURL(`http://disnetjy.klyntji.com//`)}
              >
                <Right style={{ paddingRight: 20 }}>
                  <Icon
                    style={{ fontSize: 20 }}
                    name="desktop"
                    type="FontAwesome"
                  />
                </Right>
              </TouchableOpacity>
            </Row>
            <Row>
              <Col
                style={{
                  marginRight: 20,
                  paddingLeft: 3,
                  paddingBottom: 5
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontFamily: 'Proxima Nova Alt',
                    fontSize: 30,
                    textAlign: 'left',
                    marginTop: 20
                  }}
                >
                  About Ons Klyntji
                </Text>

                <Text
                  style={{
                    fontFamily: 'Lato-Light',
                    fontSize: 18,
                    lineHeight: 25,
                    marginBottom: 20
                  }}
                >
                  Ons Klyntji is die eerste en oudste Afrikaanse tydskrif,
                  gestig in die jaar 1896. Dit was ’n anti-apartheid zine in die
                  1990’s. Die gedrukte zine verskyn steeds elke jaar.
                  Klyntji.com, afstammeling van die oorspronklike tydskrif, is
                  in 2014 op die been gebring. Ons is ’n onafhanklike publikasie
                  wat fokus op diverse en vooruitstrewende kuns en kultuur.
                </Text>
              </Col>
            </Row>
            <Row>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`https://www.instagram.com/klyntji`)
                }
              >
                <Right style={{ paddingRight: 20 }}>
                  <Icon
                    style={{ fontSize: 20 }}
                    name="instagram"
                    type="FontAwesome"
                  />
                </Right>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingBottom: 50 }}
                onPress={() => Linking.openURL(`https://klyntji.com/`)}
              >
                <Right style={{ paddingRight: 20 }}>
                  <Icon
                    style={{ fontSize: 20 }}
                    name="desktop"
                    type="FontAwesome"
                  />
                </Right>
              </TouchableOpacity>
            </Row>
            <Row>
              <Col
                style={{
                  marginRight: 20,
                  paddingLeft: 3,
                  paddingBottom: 5
                }}
              >
                <Text
                  style={{
                    marginBottom: 10,
                    fontFamily: 'Proxima Nova Alt',
                    fontSize: 30,
                    textAlign: 'left',
                    marginTop: 20
                  }}
                >
                  Terms and Conditions
                </Text>

                <Text
                  style={{
                    fontFamily: 'Lato-Light',
                    fontSize: 18,
                    lineHeight: 25,
                    marginBottom: 20
                  }}
                >
                  by using the app you agree to the same T&C's as the Website.
                  Follow the Link To Read.
                </Text>
              </Col>
            </Row>
            <Row>
              <TouchableOpacity
                style={{ paddingBottom: 50 }}
                onPress={() =>
                  Linking.openURL(`http://disnetjy.klyntji.com/tandc`)
                }
              >
                <Right style={{ paddingRight: 20 }}>
                  <Icon
                    style={{ fontSize: 20 }}
                    name="desktop"
                    type="FontAwesome"
                  />
                </Right>
              </TouchableOpacity>
            </Row>
            <Row />
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    height: 70,
    fontFamily: 'Lora-Regular',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  fontStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14
  },
  fontStyles: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12
  },
  buttonStyle: {
    height: 70,
    fontFamily: 'Lora-Regular',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    borderRadius: 5,
    backgroundColor: '#fff'
  }
};
