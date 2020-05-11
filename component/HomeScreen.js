import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native'
import Read from './Read';
import Reading from './Reading';
import Total from './Total';
import {Ionicons } from '@expo/vector-icons';
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 

   
      isAddNewBookVisible: false,
      TextInputData: '',
      books:[],
      Read: [],
      Reading: [],
   

      
         };

        }
         ShowAddNewBook = () => {
           this.setState({isAddNewBookVisible: true })
         }

         HideAddNewBook = () => {
          this.setState({isAddNewBookVisible: false })
        }
        addBooks =book => {
       
            this.setState( (state, props) => ({
               books: [...state.books, book],
               Total: state.Total +1,
               Reading: state.Reading +1,
             
            }))
          
             
        console.log(this.state.books)
        console.log(this.state.TextInputData)

        }

        markAsRead = (selectedBook, index) =>  {

          let  newList = this.state.books.filter(book=> book != selectedBook )
          let  filterRead = this.state.books.filter(book=> book != selectedBook )
  
          this.setState( prevState => ({
            books: newList,
            Reading: filterRead,
            Read:[...prevState.Read, selectedBook]
         }))


        }
        renderItem = (item , index) => (
    
          <View style={{height:50, flexDirection: "row", paddingTop: 30}} >
            <View style={{flex:1, justifyContent:"center", paddingLeft:10}}>
           <Text>{item}</Text>
           </View>

           <TouchableOpacity  onPress={() =>  this.markAsRead(item, index)} >
         <View style={{width:100, height:50, backgroundColor:"#a5deba", alignItems:"center"}} >

        <Text style={{fontWeight:"bold", color:"white"}} >Mark as Read</Text>
         </View>
         </TouchableOpacity>
          
          </View>

        )


 
  
  render() {
    return ( 
     <View style={{  flex:1}}>
         <SafeAreaView />
         <View  style={{   height: 70 , borderBottomColor: "grey", borderBottomWidth: 0.5,  justifyContent: "center", textAlign:'center' }}>

           <Text style={{fontSize:24, textAlign: "center", }}>
               Book Worm

           </Text>


           </View>
         <View   style={{    flex:1 }}  >
   { this.state.isAddNewBookVisible && 
         <View style={{height:50, flexDirection:'row'}}>

         <TextInput
         
         onChangeText={(text) => this.setState({TextInputData:text})}
           
         style={{flex:1, backgroundColor:"#ececec", paddingLeft:10}}
        placeholder="Enter Nook Name" placeholderTextColor="grey" >
       

         </TextInput>
         <TouchableOpacity  onPress={() =>  this.addBooks(this.state.TextInputData)} >
         <View style={{width:50, height:50, backgroundColor:"#a5deba", paddingLeft:18}} >

       <Ionicons name="ios-checkmark" color="white" size={40}  />
         </View>
         </TouchableOpacity>
            
        
         <TouchableOpacity onPress={this.HideAddNewBook} >
         <View style={{width:50,height:50, backgroundColor:"#deada5", paddingLeft:18}} >

       <Ionicons name="ios-close" color="white" size={40} />
         </View>
         </TouchableOpacity>

         </View>
  }


<FlatList
        data={this.state.books}
renderItem={({ item }, index) => this.renderItem(item, index)}
        keyExtractor={(item , index)=> index.toString()}
        ListEmptyComponent={
          
          <View style={{marginTop:50, alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>
              Now Book to Read
            </Text>
            </View>

        }

      />
 



         <TouchableOpacity
            onPress={this.ShowAddNewBook}
         style={{position:"absolute", bottom:20, right:20}}>
    
           <View  style={{width:50, height:50, borderRadius:25, alignItems:'center', backgroundColor:'#AAD1E6'}}>

             <Text style={{fontSize:40,color:"white", alignItems:"center", justifyContent:'center' }}  >+</Text>

   
           </View>

           </TouchableOpacity>




  
           </View>
         <View  style={{    height:70 , borderTopColor: "grey", borderTopWidth: 0.5, flexDirection:"row"}}>

    
    <Total Total={this.state.books.length} />
    <Reading Reading={this.state.Reading.length} />
    <Read   Read={this.state.Read.length} />




           </View>
         <SafeAreaView />
      </View>
    )
  }
}

export default HomeScreen
