import React from 'react';
import {
    Text,
    Image
} from 'react-native';

import {
    Header, Styles as S,
    Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter,
    Page
} from '../../src/index';

import pressHandle from '../press_handle';

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=';

class Component extends React.Component {
    render() {
        const {navigator} = this.props;

        return (
            <Page header={<Header navigator={navigator}/>}>
                <CellsTitle>
                    带说明得列表项
                </CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>
                    带图标、说明得列表项
                </CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <Image source={{uri: icon}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <Image source={{uri: icon}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            <Text style={[S.text, S.textDesc]}>说明文字</Text>
                        </CellFooter>
                    </Cell>
                </Cells>
                <CellsTips>
                    默认Text文本size:14 偏小
                </CellsTips>

                <CellsTitle>
                    带图标、跳转、说明和调整的列表项
                </CellsTitle>
                <Cells>
                    <Cell access {...pressHandle}>
                        <CellBody>
                            cell standard
                        </CellBody>
                        <CellFooter/>
                    </Cell>
                    <Cell access {...pressHandle}>
                        <CellBody>
                            cell standard
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell access {...pressHandle}>
                        <CellHeader>
                            <Image source={{uri: icon}}/>
                        </CellHeader>
                        <CellBody>
                            cell standard
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>
                <CellsTips>
                    加入onPress handle就可以响应点击
                </CellsTips>
            </Page>
        );
    }
}

export default Component;