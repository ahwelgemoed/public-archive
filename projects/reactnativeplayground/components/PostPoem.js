import React, { Component } from 'react';
import axios from 'axios';
import {
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  View,
  Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Textarea,
  Button,
  Row,
  Col,
  Left,
  Right,
  Card,
  CardItem,
  Body,
  Title,
  Subtitle
} from 'native-base';

export default class PostPoem extends Component {
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
  state = {
    name: '',
    body: '',
    handle: '',
    localValues: '',
    showToast: false
  };
  saveData = async () => {
    const { name, body, handle } = this.state;
    if (!name) {
      return alert('Please Add Name before Saving');
    }
    let poem = {
      name,
      body,
      handle
    };
    await AsyncStorage.setItem(name, JSON.stringify(poem));
    await this.iniLoad();
    await this.setState({
      name: '',
      body: '',
      handle: ''
    });
    // alert('Saved');
  };
  handleText = () => {
    alert('asdasd');
  };
  Clicked = () => {
    alert('Clicky');
    // const hand = this.state.handle;
    // const res = hand.replace('@', '');
    // const newPoem = {
    //   name: this.state.name,
    //   body: this.state.body,
    //   handle: res
    // };
    // axios.post(`http://www.disnetjy.com/api/poems`, newPoem).then(res => {
    //   console.log(res);
    //   console.log(res.data);
    //   this.setState({
    //     name: '',
    //     body: '',
    //     handle: ''
    //   });
    // });
  };
  removeFromLocal = async poem => {
    await AsyncStorage.removeItem(poem[0]);
    await this.iniLoad();
  };
  welcome = () => {
    if (this.state.localValues.length) {
      return (
        <Content>
          {this.state.localValues.map((poem, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                this.setState({
                  name: JSON.parse(poem[1]).name,
                  body: JSON.parse(poem[1]).body,
                  handle: JSON.parse(poem[1]).handle
                });
              }}
            >
              <Card style={styles.card}>
                <CardItem header>
                  <Left>
                    <Text style={styles.name}>{`${
                      JSON.parse(poem[1]).name
                    }`}</Text>
                  </Left>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Are you sure you want to Delete',

                        JSON.parse(poem[1]).name,
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                          },
                          {
                            text: 'OK',
                            onPress: () => this.removeFromLocal(poem)
                          }
                        ],
                        { cancelable: false }
                      );
                    }}
                  >
                    <Right
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        textAlign: 'left',
                        color: 'red'
                      }}
                    >
                      <Icon
                        name="close"
                        style={{ color: 'red', fontSize: 32 }}
                      />
                    </Right>
                  </TouchableOpacity>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.body}>{`${JSON.parse(
                      poem[1]
                    ).body.slice(0)}`}</Text>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          ))}
        </Content>
      );
    } else {
      return (
        <Content>
          <Card style={styles.card}>
            <CardItem header>
              <Text style={styles.name}>Nothing Saved Yet</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.body}>
                  If you want to save a poem for later. Type it out and Click
                  DRAFT. It will save it on your Device, so that you can work on
                  it offline and post it when you feel its.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      );
    }
  };
  iniLoad = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, localValues) => {
        this.setState({ localValues });
      });
    });
  };
  componentDidMount() {
    // AsyncStorage.clear();
    this.iniLoad();
  }
  render() {
    // console.log(this.state);
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#fff' }}
        contentContainerStyle={{ flex: 1 }}
      >
        <Content
          style={{
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            flex: 1,
            backgroundColor: '#fff'
          }}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.name}>Post a Poem</Text>
          <Item>
            <Input
              name="name"
              placeholder="Title of Thought/Poem"
              style={styles.body}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>
          <Item>
            <Textarea
              multiline={true}
              placeholder="Thought/Poem"
              rowSpan={6}
              editable={true}
              autogrow={true}
              style={styles.bodys}
              value={this.state.body}
              onChangeText={body => this.setState({ body })}
            />
          </Item>
          <Item>
            <Input
              name="body"
              placeholder="Instagram"
              style={styles.body}
              value={this.state.handle}
              onChangeText={handle => this.setState({ handle })}
            />
          </Item>
          <Row style={{ paddingTop: 20 }}>
            <Col style={{ paddingRight: 20 }}>
              <Button
                iconLeft
                style={styles.buttonStyle}
                block
                light
                onPress={this.saveData}
              >
                <Left style={{ paddingLeft: 20 }}>
                  <Icon
                    type="FontAwesome"
                    style={{ fontSize: 20 }}
                    name="save"
                  />
                </Left>

                <Text style={styles.fontStyle}>DRAFT</Text>
              </Button>
            </Col>
            <Col>
              <Button
                iconRight
                style={styles.buttonStyle}
                block
                light
                onPress={this.Clicked}
              >
                <Text style={styles.fontStyle}>POST</Text>
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
          <Row style={{ paddingTop: 50 }}>
            <Text style={styles.name}>Poems in Draft</Text>
          </Row>
          <Row style={{ paddingTop: 20 }}>{this.welcome()}</Row>
        </Content>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 20,
    textAlign: 'center'
  },
  body: {
    fontFamily: 'Lato-Light',
    fontSize: 16
  },
  bodys: {
    fontFamily: 'Lato-Light',
    fontSize: 18
  },
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
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20
  },
  card: {
    fontFamily: 'Lora-Regular',
    shadowColor: '#000',
    borderColor: '#d6d7da',
    shadowOpacity: 0,
    borderRadius: 5,
    flex: 1
  }
});
