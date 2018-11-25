import React, { Component } from 'react';
import { Icon, Button } from 'native-base';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
export default class ModalMenu extends Component {
  state = {
    isModalVisible: false
  };
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    return (
      <View>
        <View style={{ flex: 1 }}>
          <Modal
            style={{
              backgroundColor: '#fff',
              marginTop: '30%',
              marginBottom: '30%',
              borderRadius: 10
            }}
            isVisible={this.state.isModalVisible}
          >
            <View
              style={{
                flex: 1,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20
              }}
            >
              <Text
                style={{
                  fontFamily: 'Proxima Nova Alt',
                  fontSize: 30,
                  textAlign: 'left'
                  // paddingBottom: 30
                }}
              >
                Options for:
              </Text>
              <Text
                style={{
                  fontFamily: 'Proxima Nova Alt',
                  fontSize: 25,
                  textAlign: 'left',
                  paddingBottom: 30
                }}
              >
                {this.props.poem.name}
              </Text>
              <Button
                full
                style={{
                  height: 70,
                  fontFamily: 'Lora-Regular',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  marginBottom: 20,
                  borderWidth: 2,
                  borderColor: '#d7eff1'
                }}
                onPress={this.props.share}
              >
                <Text
                  style={{
                    fontFamily: 'Proxima Nova Alt',
                    fontSize: 20,
                    textAlign: 'left'
                    // color: '#d7eff1'
                  }}
                >
                  Save/Share
                </Text>
              </Button>

              <Button
                full
                style={{
                  height: 70,
                  fontFamily: 'Lora-Regular',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: '#d7eff1',
                  backgroundColor: '#fff',
                  marginBottom: 20,
                  color: '#d7eff1'
                }}
                onPress={this.props.report}
              >
                <Text
                  style={{
                    fontFamily: 'Proxima Nova Alt',
                    fontSize: 20,
                    textAlign: 'left'
                    // color: '#d7eff1'
                  }}
                >
                  Report
                </Text>
              </Button>
              <Button
                full
                style={{
                  height: 70,
                  fontFamily: 'Lora-Regular',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.2,
                  borderRadius: 5,
                  backgroundColor: '#e8f3eb',
                  borderWidth: 2,
                  borderColor: '#e8f3eb'
                }}
                onPress={this._toggleModal}
              >
                <Text
                  style={{
                    fontFamily: 'Proxima Nova Alt',
                    fontSize: 20,
                    textAlign: 'left'
                  }}
                >
                  Close
                </Text>
              </Button>
            </View>
          </Modal>
        </View>
        <Button
          style={{ backgroundColor: '#fff' }}
          iconLeft
          block
          light
          onPress={this._toggleModal}
        >
          <Text>
            <Icon
              style={{
                fontFamily: 'Lato-Light',
                fontSize: 12,
                textAlign: 'right',
                color: '#DCDCDC'
              }}
              type="FontAwesome"
              name="ellipsis-h"
            />{' '}
          </Text>
        </Button>
        {/* <Text> {this.props.poem.name} </Text> */}
      </View>
    );
  }
}
