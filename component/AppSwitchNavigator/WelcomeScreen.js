import React, { Component } from 'react'
import { Text, View , TextInput, TouchableOpacity} from 'react-native'
import {Ionicons } from '@expo/vector-icons';
import color from '../../assets/color'

 class WelcomeScreen extends Component {
    static navigationOptions = {
        haeder: null,
      };
    render() {
        return (
            <View style={{flex:1, backgroundColor:color.bgmain }}>
                
                <View style={{flex:1, alignItems:"center", justifyContent:'center'}}>
                <Ionicons name="ios-bookmarks" color={color.logoColor}  size={150}  />
                     <Text style={{fontSize: 50, fontWeight:'100', color:"white"}} >Book Worm</Text>
                    </View>

                    <View style={{flex:1, }}>
                    
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} style={{alignItems:"center", marginBottom:10}}>
                     <View style={{width:200,height:50, borderColor:"white", borderWidth:0.5 , color:"white", alignItems:'center', justifyContent:'center'}}>

<Text style={{color:"white", fontSize:20}}>DashBoard</Text>


                         </View>

                    </TouchableOpacity>
              

        


                    </View>

            </View>
        )
    }
}


export default WelcomeScreen;