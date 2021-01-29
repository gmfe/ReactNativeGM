import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenProps } from './screen.props';
import { isNonScrolling, offsets, presets } from './screen.presets';

const isIos = Platform.OS === 'ios';
const keyboardAvoidingViewBehavior = isIos ? 'padding' : undefined;

function BaseScreen(props: ScreenProps) {
  const {
    preset,
    backgroundColor,
    keyboardOffset = 'none',
    statusBar = 'light-content',
    children,
  } = props;

  const outerStyle = presets[preset!].outer;
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};
  /**
   *  KeyboardAvoidingView：
   *  手机上弹出的键盘常常会挡住当前的视图。
   * 本组件可以自动根据键盘的高度，调整自身的 height 或底部的 padding，以避免被遮挡
   */
  return (
    <KeyboardAvoidingView
      style={[outerStyle, backgroundStyle]}
      behavior={keyboardAvoidingViewBehavior}
      keyboardVerticalOffset={offsets[keyboardOffset]}>
      <StatusBar barStyle={statusBar} />
      {children}
    </KeyboardAvoidingView>
  );
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};

  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };
  return (
    <BaseScreen
      preset="fixed"
      backgroundColor={props.backgroundColor}
      keyboardOffset={props.keyboardOffset}
      statusBar={props.statusBar}>
      <View style={[preset.inner, style, insetStyle]}>{props.children}</View>
    </BaseScreen>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

  return (
    <BaseScreen
      preset="scroll"
      backgroundColor={props.backgroundColor}
      keyboardOffset={props.keyboardOffset}
      statusBar={props.statusBar}>
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}>
          {props.children}
        </ScrollView>
      </View>
    </BaseScreen>
  );
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export default function Screen(props: ScreenProps) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
