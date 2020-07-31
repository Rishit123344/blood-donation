import React from 'react'
import {Text,View,TextInput,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class SearchScreen extends React.Component{
    constructor(props){
        super(props);
this.state = {
    allcamps:[],
    search:'',
    lastVisibleCamp:null
}
    }
    searchCamps=async(text)=>{
 var enteredText = text.split("")
var text = text.toUpperCase()
/*if(enteredText[0].toUpperCase()==='B'){*/
    const Donor = await db.collection("Camps").orderBy("City").startAt(text)
    .endAt(text+"\uf8ff").get()//.where("City",'==',text).get()
    Donor.docs.map((doc)=>{
        this.setState({
            allcamps:[...this.state.allcamps,doc.data()],
            lastVisibleCamp:doc
        })
    })
/*}*/
    }
    fetchMoreCamps=async()=>{
        var text = this.state.search.toUpperCase()
        var enteredText = text.split("")
        if(enteredText[0].toUpperCase()==='C'){
            const Donor = await db.collection("Donor").where("Camp",'==',text).startAfter(this.state.lastVisibleCamp).limit(10).get()
            Donor.docs.map((doc)=>{
                this.setState({
                    allcamps:[...this.state.allcamps,doc.data()],
                    lastVisibleCamp:doc
                })
            })
        }
           
            }
    componentDidMount=async()=>{
          const query = await db.collection("Donor").limit(10).get(
              query.docs.map((doc)=>{
                  this.setState({
                     allcamps:[],
                     lastVisibleCamp:doc
                  })
              })
          )
      }
   
      render(){
        return(
        <View style={styles.container}>
        <View style={styles.searchbar}>
            <TextInput style={styles.bar}placeholder="Enter you'r City"onChangeText={(text)=>{this.setState({
                search:text
                        })}}></TextInput>
            <TouchableOpacity style={styles.searchbutton}onPress={()=>{
                this.searchCamps(this.state.search)
            }}>
                <Text>Search</Text>
            </TouchableOpacity>
            </View>
            <View>
            <Text style={{fontSize:20,borderWidth:2}}>Search For Blood Donation Camps</Text>
            </View>
<FlatList data={this.state.allcamps}
renderItem={({item})=>(
<View style={{borderBottomWidth:2}}>
<Text>{'PhoneNumber:'+item.PhoneNumber}</Text>
<Text>{'City:'+item.City}</Text>
<Text>{'Location:'+item.Location}</Text>
<Text>{'Time:'+item.Time}</Text>
</View>
)} keyExtractor={(item,index)=>index.toString()} onEndReached={this.fetchMoreDonor} onEndReachedThreshold={0.7}>
    
</FlatList>
</View>
);
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:'#cedebd'
    },
    searchbar:{
flexDirection:'row',
height:40,
width:'auto',
borderWidth:2,
alignItems:'center',
backgroundColor:'white'
    },
    bar:{
borderWidth:2,
height:30,
width:400,
paddingLeft:10,
fontSize:25
},
    searchbutton:{
        borderWidth:1,
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    }
})

