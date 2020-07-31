import React from 'react'
import {Text,View,TextInput,TouchableOpacity,FlatList,StyleSheet,KeyboardAvoidingView,Alert, Button} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class CampScreen extends React.Component{
    constructor(){
        super();
        this.state={
Location:'',
PhoneNumber:'',
Date:'',
City:'',
Time:'',

        }
    }
    submitForm=async()=>{
      db.collection("Camps").add({
        'Location' : this.state.Location,
        'Time' : this.state.Time,
        'Date' : firebase.firestore.Timestamp.now().toDate(),
        'PhoneNumber':this.state.PhoneNumber,
        'City':this.state.City,
      })
      this.setState({
        Location:'',
Time:'',
Date:'',
PhoneNumber:'',
City:''
      })
    }
    render() {
       return(
         
        <KeyboardAvoidingView style={styles.container}>
             <Text style={{marginLeft:30,marginTop:0,fontSize:70}}>Camp Info</Text>
             <Text style={{fontSize:20}}>To be filled by doctors to locate where the camp is held</Text>
            <View>
          <TextInput onChangeText={(text)=>{this.setState({
            Location:text
          })}}value={this.state.Location} style={styles.inputboxStyle}placeholder='Location'/>
          <TextInput onChangeText={(text)=>{this.setState({
            Date:text
          })}}value={this.state.Date} style={styles.inputboxStyle}placeholder='Date'/>
           <TextInput onChangeText={(text)=>{this.setState({
            Time:text
          })}}value={this.state.Time} style={styles.inputboxStyle}placeholder='Time'/>
            <TextInput onChangeText={(text)=>{this.setState({
            City:text.toUpperCase()
          })}}value={this.state.City} style={styles.inputboxStyle}placeholder='City'/>
           <TextInput onChangeText={(text)=>{this.setState({
            PhoneNumber:text
          })}}value={this.state.PhoneNumber} style={styles.inputboxStyle}placeholder='Phone Number'/>
</View>
<TouchableOpacity style={{marginBottom:30}}onPress={async()=>{
        var userCamp = await this.submitForm()
      }}>
      <Text style={styles.buttontext}>Submit</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    );
      }
  }
  const styles = StyleSheet.create({

    buttontext: {
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
       },
    displayText: {
      textAlign: 'center',
      fontSize: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#ffe9c5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    inputboxStyle:{
        marginTop: 50,
        width: 300,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 2,
        backgroundColor:'white'
    },
   
})