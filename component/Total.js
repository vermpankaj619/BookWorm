import React, { Component } from 'react'
import { Text, View } from 'react-native'


const Total = ({Total}) => {

    return (
        <View style={{flex:1, alignItems:"center", justifyContent:'center'}}>
           <Text style={{fontSize:20}} >Total</Text>
    <Text>{Total}</Text>
        </View>
    )

}




export default Total
