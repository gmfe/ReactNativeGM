import React, {Component} from 'react';
import {
    ScrollView
} from 'react-native';

import {
    Styles as S,
    Cells, CellsTitle, CellsTips, Cell
} from '../../src';

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=';

class CellScreen extends Component {
    static navigationOptions = {
        title: 'Cell'
    };

    render() {
        return (
            <ScrollView>
                <CellsTitle>
                    带说明得列表项
                </CellsTitle>
                <Cells>
                    <Cell
                        bodyText="标题文字"
                        footerText="说明文字"
                    />
                </Cells>
                <CellsTitle>
                    输入框
                </CellsTitle>
                <Cells>
                    <Cell input
                        headerText="名字"
                        bodyType="input"
                        bodyInputHolder="拉拉阿拉"
                    />
                </Cells>
                <CellsTitle>
                    带图标、说明得列表项
                </CellsTitle>
                <Cells>
                    <Cell
                        headerIconUri={icon}
                        bodyText="标题文字"
                        footerText="说明文字"
                    />
                    <Cell
                        headerIconUri={icon}
                        bodyText="标题文字"
                        footerText="说明文字"
                        footerStyle={[S.text, S.textDesc]}
                    />
                </Cells>
                <CellsTips>
                    默认Text文本size:14 偏小
                </CellsTips>
                <CellsTitle>
                    带图标、跳转、说明和调整的列表项
                </CellsTitle>
                <Cells>
                    <Cell
                        onPress={() => console.log('onPress')}
                        bodyText="cell standard"
                    />
                    <Cell
                        onPress={() => console.log('onpress')}
                        bodyText="cell footer"
                        footerText="说明文字"
                    />
                    <Cell
                        headerIconUri={icon}
                        onPress={() => console.log('onpress')}
                        bodyText="cell header footer"
                        footerText="说明文字"
                    />
                    <Cell
                        headerIconUri={icon}
                        onPress={() => console.log('onpress')}
                        bodyText="cell error footer"
                        bodyType="error"
                        footerText="说明文字"
                    />
                    <Cell
                        headerIconUri={icon}
                        onPress={() => console.log('onpress')}
                        bodyText="cell error image footer"
                        bodyType="error"
                        footerIconUri={icon}
                    />
                </Cells>
                <CellsTips>
                    传递onPress就可以响应点击
                </CellsTips>
            </ScrollView>
        );
    }
}

export default CellScreen;