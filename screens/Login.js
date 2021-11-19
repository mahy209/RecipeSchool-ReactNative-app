import React from 'react';
import {View,Text,TouchableOpacity, ImageBackground, StatusBar} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {images,COLORS,SIZES,FONTS} from '../constants';

import {CustomerButton} from '../components';

const Login = ({ navigation }) => {
    function renderHeader() {
        return(
            <View style={{height: SIZES.height> 700? "70%": "50%"}}>
                <ImageBackground source={images.loginBackground}
                    style={{flex:1,justifyContent:'flex-end'}}
                    resizeMode="cover">
                        <LinearGradient start={{x:0, y:0}} end={{x:0, y:1}}
                        colors={[ COLORS.transparent, COLORS.darkNave]}
                        style={{height:250, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding}}>
                        <Text style={{width:"80%", color: COLORS.white, ...FONTS.largeTitle, lineHeight:40}}>
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
            <Text style={{marginTop: SIZES.radius, width:"70%", color: COLORS.gray, ...FONTS.h3}}>
            discover more than +1200 food recipe in your hand and cook it easily by one click!
            </Text>
            {/*button*/}
            <View style={{flex:1, justifyContent:"center"}}>
                {/*login button*/}
                <CustomerButton buttonText="Login" buttonContainerStyle={{paddingVertical:20, borderRadius:10}} colors={[COLORS.darkOrange]} onPress={() => navigation.replace("Home")}/>
                {/*signup button*/}
                <CustomerButton buttonText="Sign Up" buttonContainerStyle={{paddingVertical:20, borderRadius:10, marginTop:SIZES.radius, borderColor:COLORS.darkOrange,borderWeight: 2}} colors={[]} onPress={() => navigation.replace("Home")}/>
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