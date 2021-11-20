import React from "react";
import {View, Image} from "react-native";

import {COLORS} from '../constants';

const TabIcon = ({focused, icon}) =>{
    return(
        <View
        style={{ alignItems: "center", justifyContent: "center", height:50, width:50  }}>
        <Image source={icon} resizeMode="contain" 
        style={{ width:28, height:28, tintColor: focused ? COLORS.darkOrange : COLORS.lightOrange2 }}/>
        {focused &&
        <View style={{position: 'absolute',left: 0, right: 0, bottom:0, height:5, borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: COLORS.darkOrange}}>

        </View>
        }
        </View>
    )
}

export default TabIcon;