import React,{Component,PropTypes} from 'react';
import {View,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import Mask from '../mask';
import LayoutRoot from '../layer_root';
import _ from 'lodash';
import S from '../styles';

const styles=StyleSheet.create({
    content:{
        marginLeft:60
    }
});

class Drawer extends Component{
    render(){
        const {
            onClose,
            children
        } = this.props;

        return(
            <Mask onCancel={onClose}>
                <TouchableWithoutFeedback onPress={null}>
                    <View style={[S.flex, styles.content, S.bgWhite]}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            </Mask>
        );
    }
}

Drawer.render=(children)=>{
    return new Promise((resolve,reject)=>{
        LayoutRoot.setComponent(LayoutRoot.TYPE.POPUP,(
            <Drawer
                onClose={()=>{
                    Drawer.hide();
                    reject();
                }}
            >
                {children}
            </Drawer>
        ));
    });
};

Drawer.hide=()=>LayoutRoot.removeComponent(LayoutRoot.TYPE.POPUP);

Drawer.propTypes={
    onClose:PropTypes.func
};
Drawer.defaultProps={
    onClose:_.noop
};

export default Drawer;