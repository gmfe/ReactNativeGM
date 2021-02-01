/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Button, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { Screen } from '../src';
import { LayerRoot } from '../src';
import ButtonDemo from './screens/button';
import CellDemo from './screens/cell';
import IconDemo from './screens/icon';
import ActionSheetDemo from './screens/action_sheet';
import _ from 'lodash';

enableScreens();

export type RootParamList = {
  mainStack: undefined;
};

export type PrimaryParamList = {
  [key: string]: undefined;
};

const Stack = createStackNavigator<RootParamList>();
const MainStack = createStackNavigator<PrimaryParamList>();

const pages = {
  button: ButtonDemo,
  icon: IconDemo,
  action_sheet: ActionSheetDemo,
  cell: CellDemo,
};

const Home = () => {
  const navigation = useNavigation();

  const onPress = (name: string) => {
    navigation.navigate(name);
  };

  return (
    <Screen preset="fixed">
      {_.map(pages, (value, key) => (
        <View key={key} style={{ paddingVertical: 5 }}>
          <Button title={key} onPress={() => onPress(key)} />
        </View>
      ))}
    </Screen>
  );
};

function MainNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="home" component={Home} />
      {_.map(pages, (value, key) => (
        <MainStack.Screen key={key} name={key} component={value} />
      ))}
    </MainStack.Navigator>
  );
}

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="mainStack"
        component={MainNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <LayerRoot />
    </View>
  );
};

export default App;
