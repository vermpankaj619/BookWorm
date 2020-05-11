import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Reading =({Reading}) => {

    return (
        <View style={{flex:1, alignItems:"center", justifyContent:'center'}}>
        <Text style={{fontSize:20}} >Raeding</Text>
    <Text>{Reading}</Text>
     </View>
    )



}


export default Reading
