import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button, S } from '../../src';

class ButtonWrap extends React.Component {
  static navigationOptions = {
    title: 'Button',
  };

  render() {
    return (
      <ScrollView style={[S.flex]}>
        <View style={S.padding8}>
          <Text>按钮类型</Text>

          <Button style={S.marginTop8}>默认按钮</Button>
          <Button type="primary" style={S.marginTop8}>
            主要按钮
          </Button>
          <Button type="warning" style={S.marginTop8}>
            警告按钮
          </Button>

          <Text>朴素按钮</Text>

          <Button plain style={S.marginTop8}>
            默认按钮
          </Button>
          <Button type="primary" plain style={S.marginTop8}>
            主要按钮
          </Button>
          <Button type="warning" plain style={S.marginTop8}>
            警告按钮
          </Button>

          <Text>禁用</Text>

          <Button disabled style={S.marginTop8}>
            禁用按钮
          </Button>

          <Text>按钮尺寸</Text>

          <View style={[S.flex, S.flexRow]}>
            <Button mini style={S.marginTop8}>
              小号按钮
            </Button>
          </View>

          <Button
            style={S.marginTop8}
            hasLoading
            onPress={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });
            }}>
            loading 5000s
          </Button>

          <Button
            type="primary"
            style={S.marginTop8}
            hasLoading
            onPress={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });
            }}>
            loading 5000s
          </Button>
          <Button
            type="warning"
            style={S.marginTop8}
            hasLoading
            onPress={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });
            }}>
            loading 5000s
          </Button>

          <Button
            plain
            style={S.marginTop8}
            hasLoading
            onPress={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });
            }}>
            loading 5000s
          </Button>

          <Button
            plain
            type="primary"
            style={S.marginTop8}
            hasLoading
            onPress={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });
            }}>
            loading 5000s
          </Button>

          <Button
            plain
            type="warning"
            style={S.marginTop8}
            hasLoading
            onPress={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, 5000);
              });
            }}>
            loading 5000s
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default ButtonWrap;
