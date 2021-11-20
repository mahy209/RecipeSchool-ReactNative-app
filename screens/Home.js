import React from 'react';
import { render } from 'react-dom';
import {View,Text,TouchableOpacity, Image, SafeAreaView, TextInput, FlatList, ColorPropType} from 'react-native';
import { CategoryCard } from '../components';

import {COLORS, SIZES, FONTS, images, icons, dummyData} from '../constants'

const Home = ({ navigation }) => {
    function renderHeader() {
        return(
            <View style={{flexDirection:"row", marginHorizontal: SIZES.padding, alignItems: 'center', height: 80}}>
            {/*text*/}
            <View style={{flex:1}}>
                <Text style={{ color: COLORS.darkOrange, ...FONTS.h2 }}>Hello Admin,</Text>
                <Text style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3}}> What you want to cook today?</Text>
            </View>
            {/*image*/}
            <TouchableOpacity onPress={() => console.log("profile")}>
            <Image source={images.profile} style={{width:40, height:40, borderRadius:20}}/>
            </TouchableOpacity>
            </View>
        )
    }

    function renderSearch(){
        return(
            <View style={{flexDirection:"row", height:50, alignItems: "center", marginHorizontal: SIZES.padding, paddingHorizontal: SIZES.radius, borderRadius:10, backgroundColor: COLORS.lightOrange2}}>
            <Image source={icons.search} style={{width:20, height:20, tintColor: COLORS.gray}}/>
            <TextInput style={{marginLeft: SIZES.padding, ...FONTS.body3}} 
            placeholderTextColor={COLORS.gray} placeholder="Search Recipes"/>
            </View>
        )
    }

    function renderRecipeCard(){
        return(
            <View style={{flexDirection: "row", marginTop: SIZES.padding, marginHorizontal: SIZES.padding, borderRadius:10, backgroundColor: COLORS.lightOrange}}>
            <View style={{width:100, alignItems: "center", justifyContent: "center"}}>
            <Image source={images.recipe} style={{width:80, height:80}}/>
            </View>
            <View style={{flex:1, paddingVertical: SIZES.radius}}>
            <Text style={{width: "70%", ...FONTS.body4}}>You have 15 recipes that you haven’t try yet!</Text>
            <TouchableOpacity style={{marginTop: 10}} onPress={() => console.log("see recipes")}>
            <Text style={{color: COLORS.darkOrange, textDecorationLine: 'underline', ...FONTS.h4}}>See Recipes</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }

    function renderTrendingSection(){
        return(
            <View>
                
            </View>
        )
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
        <FlatList data={dummyData.categories} 
        keyExtractor={ item => `${item.id}`}
        keyboardShouldPersistTaps="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            <View>
                {/*header*/}
                {renderHeader()}

                {/*Search Bar*/}
                {renderSearch()}

                {/*recipe card*/}
                {renderRecipeCard()}

                {/*trending section*/}
                {renderTrendingSection()}
                {/*Category Header*/}
            </View>
        }
        renderItem= {({item}) =>{
            return(
                <CategoryCard containerStyle={{marginHorizontal: SIZES.padding}} categoryItem={item} onPress={() => navigation.navigate ("Recipe", { recipe: item})}/>
            )
        }}
        ListFooterComponent={
            <View style={{ marginBottom:100}}/>
        }
        />
        </SafeAreaView>
    )
}

export default Home;