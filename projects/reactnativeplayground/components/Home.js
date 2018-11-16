import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { ImageBackground, View, Linking } from 'react-native';
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

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: { height: 80, backgroundColor: '#000' },
    headerTitle: (
      <View style={{ width: '100%' }}>
        <Title
          style={{ color: '#fff', fontFamily: 'Streamster', fontSize: 30 }}
        >
          Dis Net Jy
        </Title>
        <Subtitle
          style={{
            color: '#fff',
            fontFamily: 'Proxima Nova Alt',
            fontSize: 16
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
        {/* <ImageBackground
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            height: 150
          }}
          source={require('../assets/Header.gif')}
        /> */}
        <Content style={{ margin: 20 }}>
          <Grid>
            <Row>
              <Col>
                <Card>
                  <CardItem header>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 20
                      }}
                    >
                      The Idea
                    </Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text style={{ fontFamily: 'Lora-Regular' }}>
                        A simple space to add a Thought/Poem or anything really,
                        It’s anonymous and very open to abuse.{' '}
                      </Text>
                      <Text style={{ fontFamily: 'Lora-Regular' }}>
                        It can't be deleted or edited. Use any Language or
                        Emoji.
                      </Text>
                      <Text style={{ fontFamily: 'Lora-Regular' }}>
                        We ask that you post anything you want as long as it's
                        true, make it short, make it long, just fucking make it.
                        You can add your Instagram handle if you want to be
                        found, or leave it blank.
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
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
                <Button iconLeft style={buttonStyle} block light>
                  <Left style={{ paddingLeft: 20 }}>
                    <Icon
                      type="FontAwesome"
                      style={{ fontSize: 20 }}
                      name="heart"
                    />
                  </Left>
                  <Text
                    onPress={() => Linking.openURL(`https://klyntji.com/`)}
                    style={fontStyle}
                  >
                    KLYNTJI
                  </Text>
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
    borderRadius: 5
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
