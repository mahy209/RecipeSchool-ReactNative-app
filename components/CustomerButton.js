import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {COLORS,FONTS} from '../constants';

const CustomerButton = ({buttonText, buttonContainerStyle, colors, onPress}) => {
    if (colors.length > 0){
        return(
            <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
            <Text style={{textAlign:"center",colors:COLORS.white, ...FONTS.h2}}>{buttonText}</Text>
            </TouchableOpacity>
        )
    } else{
        return(
            <TouchableOpacity onPress={onPress} style={{...buttonContainerStyle}}>
            <Text style={{textAlign:"center",colors:COLORS.white, ...FONTS.h2}}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomerButton