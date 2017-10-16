import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ViewPropTypes
} from 'react-native';
import V from '../variable';

import {CellHeader, CellBody, CellFooter} from './';

const styles = StyleSheet.create({
    cell: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: V.cellGapH,
        paddingTop: V.cellGapV,
        paddingBottom: V.cellGapV,
        paddingRight: V.cellGapH,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: V.cellBorderColor
    },
    firstCell: {
        borderTopWidth: 0
    },
    inputCell: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0
    }
});

class Cell extends React.Component {
    _renderCellHeader() {
        const {headerText, headerIconUri, headerStyle, renderHeader} = this.props;
        const headerProps = headerText || headerIconUri ? {headerText, headerIconUri, headerStyle} : null;
        if(headerProps) {
            return(<CellHeader {...headerProps} />);
        }
        if(renderHeader) {
            return renderHeader();
        }
    }

    _renderCellBody() {
        const {bodyText, bodyType, bodyInputHolder, renderBody, bodyStyle} = this.props;
        const bodyProps = bodyText || bodyType ? {bodyText, bodyType, bodyInputHolder, bodyStyle} : null;
        if(bodyProps) {
            return(<CellBody {...bodyProps} />);
        }
        if(renderBody) {
            return renderBody();
        }
    }

    _renderCellFooter() {
        const {footerText, footerIconUri, renderFooter, onPress, footerStyle} = this.props;
        const footerProps = footerText || footerIconUri || onPress ? {footerText, footerIconUri, onPress, footerStyle} : null;
        if(footerProps) {
            return(<CellFooter {...footerProps} />);
        }
        if(renderFooter) {
            return renderFooter();
        }
    }

    render() {
        const {onPress, cellStyle, isFirst, bodyType} = this.props;
        return(
            <View>
                {
                    onPress ?
                    <TouchableOpacity
                        style={[cellStyle, styles.cell, isFirst ? styles.firstCell : null, bodyType === 'input' ? styles.inputCell : null]}
                        underlayColor={V.activeColor}
                        onPress={onPress}
                    >
                        {this._renderCellHeader()}
                        {this._renderCellBody()}
                        {this._renderCellFooter()}
                    </TouchableOpacity> :
                    <View style={[cellStyle, styles.cell, isFirst ? styles.firstCell : null, bodyType === 'input' ? styles.inputCell : null]}>
                        {this._renderCellHeader()}
                        {this._renderCellBody()}
                        {this._renderCellFooter()}
                    </View>
                }
            </View>
        );
    }
}

Cell.propTypes = {
    onPress: PropTypes.func,
    cellStyle: ViewPropTypes.style,
    isFirst: PropTypes.bool,
    headerText: PropTypes.string,
    headerIconUri: PropTypes.string,
    headerStyle: ViewPropTypes.style,
    renderHeader: PropTypes.func,
    bodyText: PropTypes.string,
    bodyType: PropTypes.oneOf(['text', 'input', 'error']),
    bodyInputHolder: PropTypes.string,
    bodyStyle: ViewPropTypes.style,
    renderBody: PropTypes.func,
    footerText: PropTypes.string,
    footerIconUri: PropTypes.string,
    footerStyle: ViewPropTypes.style,
    renderFooter: PropTypes.func
};

export default Cell;
