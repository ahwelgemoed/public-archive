import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Linking
} from 'react-native';
import { Icon, Container, Content, Right } from 'native-base';
import axios from 'axios';
import moment from 'moment';

export default class PoemsList extends Component {
  static navigationOptions = {
    header: null
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
    return (
      <Container>
        <ImageBackground
          style={{
            width: '100%',
            height: 150
          }}
          source={require('../assets/Header.gif')}
        >
          <TouchableOpacity
            style={{ paddingLeft: 20, paddingTop: 120 }}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={{ color: '#fff', fontFamily: 'Montserrat-SemiBold' }}>
              <Icon
                style={{
                  color: '#fff',
                  fontSize: 18,
                  paddingLeft: 20,
                  fontFamily: 'Montserrat-SemiBold'
                }}
                name="arrow-back"
              />{' '}
              Back
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.container} showsHorizontalScrollIndicator={false}>
          <Content
            style={{ margin: 20, flex: 1 }}
            showsHorizontalScrollIndicator={false}
          >
            <FlatList
              pagingEnabled={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={this.state.poems}
              horizontal={true}
              renderItem={({ item }) => (
                <View style={styles.flatview}>
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
                  <Right>
                    <Text style={styles.date}>
                      {moment(item.date).fromNow()}
                    </Text>
                  </Right>
                </View>
              )}
              keyExtractor={item => item._id}
            />
          </Content>
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
    fontSize: 12
    // float: 'right',
    // transform: [{ rotate: '90deg' }]
  }
});
