import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Animation from 'lottie-react-native';
import ani from '../assets/ani/favorite_black.json';
import {
  StyleSheet,
  ImageBackground,
  View,
  Linking,
  LayoutAnimation,
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

const BGColor = ['#e8f3eb', '#fde7dc', '#d7eff1', '#9EBEC1', '#AED9E0'];
const BGColorRand = BGColor[Math.floor(Math.random() * BGColor.length)];
export default class Home extends Component {
  componentDidMount() {
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: { type: LayoutAnimation.Types.easeInEaseOut }
    });
  }
  static navigationOptions = {
    headerStyle: {
      height: 80,
      borderBottom: 'none',
      elevation: 0, //remove shadow on Android
      shadowOpacity: 0, //remove shadow on iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      borderRadius: 5,
      backgroundColor: '#fff',
      paddingBottom: 5
    },

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
                  THE IDEA
                </Text>

                <Text
                  style={{
                    fontFamily: 'Lato-Light',
                    fontSize: 18,
                    lineHeight: 25
                  }}
                >
                  A simple space to add a Thought/Poem or anything really, It’s
                  anonymous and very open to abuse.{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lato-Light',
                    fontSize: 18,
                    lineHeight: 25
                  }}
                >
                  It can't be deleted or edited. Use any Language or Emoji.
                </Text>
                <Text
                  style={{
                    fontFamily: 'Lato-Light',
                    fontSize: 18,
                    lineHeight: 25
                  }}
                >
                  We ask that you post anything you want as long as it's true,
                  make it short, make it long, just fucking make it. You can add
                  your Instagram handle if you want to be found, or leave it
                  blank.
                </Text>
              </Col>
            </Row>
            <Row style={{ paddingTop: 20 }}>
              <Col style={{ paddingRight: 20 }}>
                <Button
                  iconLeft
                  style={buttonStyle}
                  block
                  light
                  onPress={() => this.props.navigation.navigate('PoemsList')}
                >
                  <Left style={{ paddingLeft: 20 }}>
                    <Icon
                      type="FontAwesome"
                      style={{ fontSize: 20 }}
                      name="book"
                    />
                  </Left>
                  <Text style={fontStyle}>VIEW ALL</Text>
                </Button>
              </Col>
              <Col>
                <Button
                  iconRight
                  style={buttonStyle}
                  block
                  light
                  onPress={() => this.props.navigation.navigate('PostPoem')}
                >
                  <Text style={fontStyle}>POST</Text>
                  <Right style={{ paddingRight: 20 }}>
                    <Icon
                      style={{ fontSize: 20 }}
                      name="plus"
                      type="FontAwesome"
                    />
                  </Right>
                </Button>
              </Col>
            </Row>
            <Row style={{ paddingTop: 20 }}>
              <Col style={{ paddingRight: 20 }}>
                <Button
                  onPress={() => {
                    Linking.openURL(`https://klyntji.com/`);
                  }}
                  iconLeft
                  style={buttonStyle}
                  block
                  light
                >
                  <Left style={{ paddingLeft: 20 }}>
                    <Icon
                      type="FontAwesome"
                      style={{ fontSize: 20 }}
                      name="heart"
                    />
                  </Left>
                  <Text style={fontStyle}>KLYNTJI</Text>
                </Button>
              </Col>
              <Col>
                <Button iconRight style={buttonStyle} block light>
                  <Text style={fontStyle}>ABOUT</Text>
                  <Right style={{ paddingRight: 20 }}>
                    <Icon
                      type="FontAwesome"
                      style={{ fontSize: 22 }}
                      name="info"
                    />
                  </Right>
                </Button>
              </Col>
            </Row>
            <Row style={{ paddingTop: 20 }}>
              <Col style={{ paddingRight: 20 }}>
                <Button
                  iconLeft
                  style={{
                    height: 50,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2
                  }}
                  block
                  light
                >
                  <Left style={{ paddingLeft: 20 }}>
                    <Icon
                      type="FontAwesome"
                      style={{ fontSize: 20 }}
                      name="bug"
                    />
                  </Left>
                  <Text style={fontStyles}>REPOT BUG</Text>
                </Button>
              </Col>
              <Col>
                <Button
                  iconRight
                  style={{
                    height: 50,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.2,
                    fontSize: 12
                  }}
                  block
                  light
                >
                  <Text style={fontStyles}>SUGGESTION</Text>
                  <Right style={{ paddingRight: 20 }}>
                    <Icon type="FontAwesome" name="question" />
                  </Right>
                </Button>
              </Col>
            </Row>
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
  }
};
