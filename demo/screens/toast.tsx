import React from 'react';
import { View } from 'react-native';
import { Toast, Screen, Button, S } from '../../src';

const ToastDemo = () => {
  return (
    <Screen>
      <View style={S.padding8}>
        <Button
          style={S.marginTop8}
          onPress={() => {
            Toast.tip('hello');
          }}>
          Toast
        </Button>

        <Button
          style={S.marginTop8}
          onPress={() => {
            Toast.success('hello');
          }}>
          success
        </Button>
        <Button
          style={S.marginTop8}
          onPress={() => {
            Toast.warning('hello');
          }}>
          warning
        </Button>
        <Button
          style={S.marginTop8}
          onPress={() => {
            Toast.danger('hello');
          }}>
          danger
        </Button>
        <Button
          style={S.marginTop8}
          onPress={() => {
            Toast.loading({
              time: 5000,
              children: 'hello',
            });
          }}>
          loading
        </Button>
        <Button
          style={S.marginTop8}
          onPress={() => {
            Toast.info('hello');
          }}>
          info
        </Button>
      </View>
    </Screen>
  );
};

export default ToastDemo;
