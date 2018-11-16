import React, { Component } from 'react';
// import { captureRef } from 'react-native-view-shot';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
  Button,
  Alert,
  CameraRoll
} from 'react-native';
import { Icon, Container, Content, Right, Title, Subtitle } from 'native-base';
import axios from 'axios';
import moment from 'moment';

export default class PoemsList extends Component {
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
    poems: [],
    loading: true
  };
  componentWillMount() {
    axios.get(`http://www.disnetjy.com/api/poems`).then(res =>
      this.setState({
        poems: res.data,
        loading: false
      })
    );
  }
  render() {
    var now = 1;
    return (
      <Container>
        <View
          style={styles.container}
          collapsable={false}
          showsHorizontalScrollIndicator={false}
        >
          {this.state.loading ? (
            <Image
              style={{
                flex: 1,
                width: '70%'
              }}
              resizeMode={'contain'}
              source={require('../assets/LOAD.gif')}
            />
          ) : (
            <Content
              style={{ margin: 20, flex: 1 }}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                pagingEnabled={true}
                initialNumToRender={5}
                maxToRenderPerBatch={4}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={this.state.poems}
                horizontal={true}
                ref="view"
                renderItem={({ item }) => (
                  <View style={styles.flatview} ref={now++}>
                    <Text style={styles.name}>{item.name}</Text>
                    {item.handle ? (
                      <Text
                        onPress={() =>
                          Linking.openURL(
                            `https://www.instagram.com/${item.handle}`
                          )
                        }
                        style={styles.handle}
                      >
                        <Icon
                          style={styles.icon}
                          type="FontAwesome"
                          name="instagram"
                        />{' '}
                        {item.handle}
                      </Text>
                    ) : null}

                    <Text style={styles.body}>{item.body}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Text style={styles.date}>
                        {moment(item.date).fromNow()}
                      </Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => item._id}
              />
            </Content>
          )}
        </View>
      </Container>
    );
  }
}
let screenWidth = Dimensions.get('window').width - 40;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatview: {
    width: screenWidth,
    backgroundColor: '#fff',
    // marginLeft: 100,
    // marginRight: 10
    paddingLeft: 20,
    paddingRight: 20
  },
  name: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 20,
    textAlign: 'center'
  },
  handle: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 10
  },
  body: {
    fontFamily: 'Lato-Light',
    fontSize: 18
  },
  icon: {
    fontSize: 14
  },
  date: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
    alignSelf: 'flex-end',
    textAlign: 'right'
    // float: 'right',
    // transform: [{ rotate: '90deg' }]
  }
});
