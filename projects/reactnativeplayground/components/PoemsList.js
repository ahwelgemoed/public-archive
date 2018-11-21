import React, { Component } from 'react';
import { captureRef } from 'react-native-view-shot';
import ViewShot from 'react-native-view-shot';
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
  CameraRoll,
  LayoutAnimation,
  ScrollView
} from 'react-native';
import { Icon, Container, Content, Right, Title, Subtitle } from 'native-base';
import axios from 'axios';
import moment from 'moment';

export default class PoemsList extends Component {
  static navigationOptions = {
    headerStyle: { height: 80, backgroundColor: '#000' },
    headerTintColor: 'white',
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
    loading: true,
    res: '',
    value: {
      format: 'png',
      quality: 1,
      result: 'tmpfile',
      snapshotContentContainer: false
    }
  };
  componentWillUpdate() {
    LayoutAnimation.configureNext({
      duration: 500,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity
      },
      update: { type: LayoutAnimation.Types.easeInEaseOut }
    });
  }
  Report = item => {
    const repotedPoem = {
      name: item.name,
      body: item.body,
      handle: item.handle
    };
    axios
      .post(`http://www.disnetjy.com/api/send`, repotedPoem)
      .then(res => res.data);
    console.log(repotedPoem);
    alert('Poem Reported, we will review.');
  };
  componentWillMount() {
    axios.get(`http://www.disnetjy.com/api/poems`).then(res =>
      this.setState({
        poems: res.data,
        loading: false
      })
    );
  }
  snapshot = refname => () => {
    console.log(this.refs[refname]);
    captureRef(this.refs[refname], this.state.value)
      .then(res =>
        this.setState({
          error: null,
          res,
          previewSource: {
            uri:
              this.state.value.result === 'base64'
                ? 'data:image/' + this.state.value.format + ';base64,' + res
                : res
          }
        })
      )
      .then(
        this.saveCamera()
        // CameraRoll.saveToCameraRoll(this.state.res).then(
        //   Alert.alert('Success', 'Photo added to camera roll!')
        // )
      )

      .catch(
        error => (
          console.warn(error),
          this.setState({ error, res: null, previewSource: null })
        )
      );
  };
  saveCamera = () => {
    var promise = CameraRoll.saveToCameraRoll(this.state.res);
    promise
      .then(function(result) {
        console.log('save succeeded ' + result);
      })
      .catch(function(error) {
        console.log('save failed ' + error);
      });
  };
  // onEndReached() {
  //   // this.refs.full.getNode().scrollToOffset({ offset: 0, animated: true });
  //   this.refs.full.scrollToOffset({ x: 0, y: 0, animated: true });
  // }
  scrollToBottom(animated = true) {
    const scrollHeight = this.contentHeight - this.scrollViewHeight;
    if (scrollHeight > 0) {
      const scrollResponder = this.refs.full.getScrollResponder();
      scrollResponder.scrollResponderScrollTo({ x: 0, scrollHeight, animated });
    }
  }
  render() {
    console.log(this.state);
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
            // <Content
            //   collapsable={false}
            //   style={{ margin: 20, flex: 1 }}
            //   showsHorizontalScrollIndicator={false}
            // >
            <View style={{ margin: 20, flex: 1 }}>
              <FlatList
                onContentSizeChange={(w, h) => (this.contentHeight = h)}
                onLayout={ev =>
                  (this.scrollViewHeight = ev.nativeEvent.layout.height)
                }
                onScrollEndDrag={this.scrollToBottom.bind(this)}
                pagingEnabled={true}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={this.state.poems}
                horizontal={true}
                collapsable={false}
                ref="full"
                renderItem={({ item }) => (
                  <ScrollView style={styles.flatview} collapsable={false}>
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

                      <Text
                        onPress={this.Report.bind(this, item)}
                        style={styles.date}
                      >
                        Report
                      </Text>
                      {/* <Text
                        collapsable={false}
                        onPress={this.snapshot('full')}
                        style={styles.date}
                      >
                        Save To Camera
                      </Text> */}
                    </View>
                  </ScrollView>
                )}
                keyExtractor={item => item._id}
              />
            </View>
            // </Content>
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
    color: '#000',
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    borderRadius: 5
  },
  name: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 20,
    textAlign: 'center'
  },
  handle: {
    fontFamily: 'Proxima Nova Alt',
    fontSize: 16,
    textAlign: 'center'
    // paddingBottom: 10
  },
  body: {
    fontFamily: 'Lato-Light',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10
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
