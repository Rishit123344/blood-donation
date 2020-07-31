import React from 'react'
import {Text,View,TextInput,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class SearchScreen extends React.Component{
    constructor(props){
        super(props);
this.state = {
    alldonors:[],
    search:'',
    lastVisibleDonor:null
}
    }
    searchDonors=async(text)=>{
 var enteredText = text.split("")
var text = text.toUpperCase()
if(enteredText[0].toUpperCase()==='B'){
    const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
    Donor.docs.map((doc)=>{
        this.setState({
            alldonors:[...this.state.alldonors,doc.data()],
            lastVisibleDonor:doc
        })
    })
}
    if(enteredText[0].toUpperCase()==='A'){
        const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
        Donor.docs.map((doc)=>{
            this.setState({
                alldonors:[...this.state.alldonors,doc.data()],
                lastVisibleDonor:doc
            })
        })
    }
    if(enteredText[0].toUpperCase()==='B-'){
        const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
        Donor.docs.map((doc)=>{
            this.setState({
                alldonors:[...this.state.alldonors,doc.data()],
                lastVisibleDonor:doc
            })
        })
    }
    if(enteredText[0].toUpperCase()==='AB+'){
        const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
        Donor.docs.map((doc)=>{
            this.setState({
                alldonors:[...this.state.alldonors,doc.data()],
                lastVisibleDonor:doc
            })
        })
    }
    if(enteredText[0].toUpperCase()==='O'){
        const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
        Donor.docs.map((doc)=>{
            this.setState({
                alldonors:[...this.state.alldonors,doc.data()],
                lastVisibleDonor:doc
            })
        })
    }
    if(enteredText[0].toUpperCase()==='C'){
        const Donor = await db.collection("Donor").where("location",'==',text).get()
        Donor.docs.map((doc)=>{
            this.setState({
                alldonors:[...this.state.alldonors,doc.data()],
                lastVisibleDonor:doc
            })
        })
    }

    }
    fetchMoreDonor=async()=>{
        var text = this.state.search.toUpperCase()
        var enteredText = text.split("")
        if(enteredText[0].toUpperCase()==='B'){
            const Donor = await db.collection("Donor").where("BloodGroup",'==',text).startAfter(this.state.lastVisibleDonor).limit(10).get()
            Donor.docs.map((doc)=>{
                this.setState({
                    alldonors:[...this.state.alldonors,doc.data()],
                    lastVisibleDonor:doc
                })
            })
        }
            if(enteredText[0].toUpperCase()==='A'){
                const Donor = await db.collection("Donor").where("BloodGroup",'==',text).startAfter(this.state.lastVisibleDonor).limit(10).get()
                Donor.docs.map((doc)=>{
                    this.setState({
                        alldonors:[...this.state.alldonors,doc.data()],
                        lastVisibleDonor:doc
                    })
                })
            }
            if(enteredText[0].toUpperCase()==='B-'){
                const Donor = await db.collection("Donor").where("BloodGroup",'==',text).startAfter(this.state.lastVisibleDonor).limit(10).get()
                Donor.docs.map((doc)=>{
                    this.setState({
                        alldonors:[...this.state.alldonors,doc.data()],
                        lastVisibleDonor:doc
                    })
                })
            }
            if(enteredText[0].toUpperCase()==='AB+'){
                const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
                Donor.docs.map((doc)=>{
                    this.setState({
                        alldonors:[...this.state.alldonors,doc.data()],
                        lastVisibleDonor:doc
                    })
                })
            }
            if(enteredText[0].toUpperCase()==='O'){
                const Donor = await db.collection("Donor").where("BloodGroup",'==',text).get()
                Donor.docs.map((doc)=>{
                    this.setState({
                        alldonors:[...this.state.alldonors,doc.data()],
                        lastVisibleDonor:doc
                    })
                })
            }
            if(enteredText[0].toUpperCase()==='C'){
                const Donor = await db.collection("Donor").where("Location",'==',text).get()
                Donor.docs.map((doc)=>{
                    this.setState({
                        alldonors:[...this.state.alldonors,doc.data()],
                        lastVisibleDonor:doc
                    })
                })
            }
            }
    componentDidMount=async()=>{
          const query = await db.collection("Donor").limit(10).get(
              query.docs.map((doc)=>{
                  this.setState({
                     alldonors:[],
                     lastVisibleDonor:doc
                  })
              })
          )
      }
   
      render(){
        return(
          
            <View style={styles.container}>
            <View style={styles.searchbar}>
                <TextInput style={styles.bar}placeholder="Enter you'r BloodGroup"onChangeText={(text)=>{this.setState({
                    search:text
                            })}}></TextInput>
                <TouchableOpacity style={styles.searchbutton}onPress={()=>{
                    this.searchDonors(this.state.search)
                }}>
                    <Text>Search</Text>
                </TouchableOpacity>
                </View>
<FlatList data={this.state.alldonors}
renderItem={({item})=>(
<View style={{borderBottomWidth:2,padding:10}}>
<Text>{'BloodGroup:'+item.BloodGroup}</Text>
<Text>{'Name:'+item.Name}</Text>
<Text>{'Age:'+item.Age}</Text>
<Text>{'City:'+item.City}</Text>
<Text>{'Gender:'+item.Gender}</Text>
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
        backgroundColor:'#ffe9c5'
    },
    searchbar:{
flexDirection:'row',
height:40,
borderWidth:1,
alignItems:'center',
backgroundColor:'white'
    },
    bar:{
borderWidth:2,
height:30,
width:300,
paddingLeft:10,
fontSize:25
    },
    searchbutton:{
        borderWidth:1,
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#96bb7c'
    }
})

