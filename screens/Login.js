import React from 'react';
import {View,Text,TouchableOpacity, ImageBackground, StatusBar} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {images,COLORS,SIZES,FONTS} from '../constants';

import {CustomerButton} from '../components';

const Login = ({ navigation }) => {
    function renderHeader() {
        return(
            <View style={{height: SIZES.height> 700? "65%": "60%"}}>
                <ImageBackground source={images.loginBackground}
                    style={{flex:1,justifyContent:'flex-end'}}
                    resizeMode="cover">
                    <LinearGradient start={{x:0, y:0}} end={{x:0, y:1}}
                        colors={[ COLORS.transparent, COLORS.darkNave]}
                        style={{height:200, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding}}>
                        <Text style={{width:"60%",left: 20, color: COLORS.white, ...FONTS.largeTitle, lineHeight:40, fontWeight: "bold"}}>
                        Cooking a Delicious Food Easily 
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }
    function renderDetails() {
        return(
            <View style={{flex:1, paddingHorizontal: SIZES.padding}}>
            <Text style={{marginTop: SIZES.radius, width:"70%",left: 20, color: COLORS.lightGray2, ...FONTS.h3, lineHeight:20, fontWeight: "400"}}>
            discover more than +1200 food recipe in your hand and cook it easily by one click!
            </Text>
            {/*button*/}
            <View style={{flex:1, justifyContent:"center"}}>
                {/*login button*/}
                <CustomerButton buttonText="Login" 
                buttonContainerStyle={{paddingVertical:20, borderRadius:10, width:350, height:70}}
                colors={[COLORS.darkOrange, COLORS.darkOrange]} 
                onPress={() => navigation.replace("Home")}/>
                {/*signup button*/}
                <CustomerButton buttonText="Sign Up" 
                buttonContainerStyle={{paddingVertical:20, borderRadius:10, marginTop:SIZES.radius, borderColor: COLORS.darkOrange, borderWidth: 2, width:350, height:70}} 
                colors={[]} 
                onPress={() => navigation.replace("Home")}/>
            </View>
            </View>
        )
    }
    return (
        <View style={{flex:1, backgroundColor: COLORS.darkNave}}>
            <StatusBar barStyle="light-content" />
            {renderHeader()}
            {renderDetails()}
        </View>
    )
}

export default Login;