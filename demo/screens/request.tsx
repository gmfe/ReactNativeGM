import React from 'react';
import {
  Request,
  configError,
  configHeaders,
  initAuth,
  Response,
  Toast,
  Button,
} from '../../src';
import { AxiosResponse } from 'axios';
import { View } from 'react-native';
import sha256 from 'crypto-js/sha256';

const baseUrl = 'https://x.guanmai.cn';

initAuth(baseUrl + '/ceres/oauth/OAuthService/Token', 'access_token');

configError((message, res?: AxiosResponse<Response<any>>) => {
  const code = res?.data?.code;
  if (code === 16) {
    Toast.info('未登录');
  } else {
    Toast.warning(message);
  }
});

configHeaders();

const RequestDemo = () => {
  return (
    <View>
      <Button
        onPress={() => {
          console.log('login');
          Request(baseUrl + '/ceres/oauth/OAuthService/Token')
            .data({
              grant_type: 'password',
              username: 'admin',
              password: sha256('123456').toString(),
              group_id: '326828001767456792',
              client_id: '1',
            })
            .run();
        }}>
        Request
      </Button>
    </View>
  );
};

export default RequestDemo;
