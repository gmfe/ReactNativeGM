import React from 'react';
import { View, ScrollView } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Icon, S } from '../../src';

class ButtonWrap extends React.Component {
  static navigationOptions = {
    title: 'Button',
  };

  render() {
    return (
      <ScrollView style={[S.flex]}>
        <View style={S.padding8}>
          <Icon name="ok" size={30} />
          <Icon name="bluetooth" size={30} />
          <IconFontAwesome.Button name="facebook" onPress={() => {}} solid>
            Login with Facebook
          </IconFontAwesome.Button>
        </View>
      </ScrollView>
    );
  }
}

export default ButtonWrap;
