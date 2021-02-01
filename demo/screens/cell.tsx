import React from 'react';
import { Text, Image, TextInput } from 'react-native';

import {
  Styles as S,
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Screen,
} from '../../src/index';

const icon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=';

class Component extends React.Component {
  static navigationOptions = {
    title: 'Cell',
  };

  render() {
    return (
      <Screen>
        <CellsTitle>说明</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>

        <CellsTitle>输入框</CellsTitle>
        <Cells>
          <Cell input>
            <CellHeader>名字</CellHeader>
            <CellBody>
              <TextInput placeholder="拉拉阿拉" />
            </CellBody>
          </Cell>
        </Cells>

        <CellsTitle>图标、说明</CellsTitle>
        <Cells>
          <Cell>
            <CellHeader>
              <Image source={{ uri: icon }} style={{ height: 16, width: 16 }} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>
              <Image source={{ uri: icon }} style={{ height: 16, width: 16 }} />
            </CellHeader>
            <CellBody>标题文字</CellBody>
            <CellFooter>
              <Text style={[S.text, S.textDesc]}>说明文字</Text>
            </CellFooter>
          </Cell>
        </Cells>
        <CellsTips>提示提示提示</CellsTips>

        <CellsTitle>图标、跳转、说明</CellsTitle>
        <Cells>
          <Cell
            access
            onPress={() => {
              // Toast.tip('press it');
            }}>
            <CellBody>press</CellBody>
            <CellFooter />
          </Cell>
          <Cell access>
            <CellBody>press</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
          <Cell access>
            <CellHeader>
              <Image source={{ uri: icon }} style={{ height: 16, width: 16 }} />
            </CellHeader>
            <CellBody>press</CellBody>
            <CellFooter>说明文字</CellFooter>
          </Cell>
        </Cells>
        <CellsTips>加入onPress handle就可以响应点击</CellsTips>

        <CellsTitle>感情色彩</CellsTitle>
        <Cells>
          <Cell>
            <CellBody error>cell standard</CellBody>
            <CellFooter />
          </Cell>
        </Cells>
      </Screen>
    );
  }
}

export default Component;
