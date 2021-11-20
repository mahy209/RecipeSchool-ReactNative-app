import React from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";

import {COLORS, FONTS, SIZES} from '../constants'

const CategoryCard= ({containerStyle, categoryItem, onPress}) =>{
    return(
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", padding: 10, marginTop: 10, borderRadius: SIZES.radius, color: COLORS.lightGray2, ...containerStyle}}
        onPress={onPress}>
            {/*image*/}
            <Image source={categoryItem.image} resizeMode="cover" style={{width: 80, height: 80, borderRadius: SIZES.radius }}/>
            {/*details*/}
            <View style={{width:'65%', paddingHorizontal: 20,}}>
            {/*name*/}
            <Text style={{flex:1, ...FONTS.h2}}>
            {categoryItem.name}</Text>
            {/*serving*/}
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
            {categoryItem.duration} | {categoryItem.serving} serving</Text>
            </View>
            
        </TouchableOpacity>
    )
}

export default CategoryCard;