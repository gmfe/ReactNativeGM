import React, {PropTypes} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Icon} from '../icon';
import {
    Cells,
    Cell,
    CellBody,
} from '../cell';

const styles = StyleSheet.create({
    radio: {
        fontSize: 16,
    }
});

const RadioCells = (props) => {
    const {
        value,
        options,
        onChange,
        style,
        ...others
    } = props;

    return (
        <Cells style={style} {...others}>
            {options.map((option, idx) =>
                <Cell key={idx} onPress={() => onChange(option.value)}>
                    <CellBody>
                        {option.label || option.value}
                    </CellBody>
                    {value === option.value ? (
                        <Icon name="success_no_circle" style={styles.radio}/>
                    ) : null}
                </Cell>
            )}
        </Cells>
    );
};

RadioCells.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    style: Icon.propTypes.style,
};

export default RadioCells;