import React, { Component } from 'react'
import { Text, View } from 'react-native'


const  Read = ({Read}) => {
   
        return (
            <View style={{flex:1, alignItems:"center", justifyContent:'center'}}>
               <Text style={{fontSize:20}} >Read</Text>
        <Text>{Read}</Text>
            </View>
        )
    


}




export default Read
