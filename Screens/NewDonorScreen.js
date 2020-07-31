import React from 'react'
import {Text,View,TextInput,TouchableOpacity,FlatList,StyleSheet,KeyboardAvoidingView,Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class NewDonorScreen extends React.Component{
    constructor(){
        super();
        this.state={
BloodGroup:'',
Name:'',
Age:'',
PhoneNumber:'',
City:'',
Gender:''
        }
    }
    submitForm=async()=>{
      db.collection("Donor").add({
        'BloodGroup' : this.state.BloodGroup,
        'Name' : this.state.Name,
        'Date' : firebase.firestore.Timestamp.now().toDate(),
        'Age' : this.state.Age,
        'PhoneNumber':this.state.PhoneNumber,
        'City':this.state.City,
        'Gender':this.state.Gender
      })
      this.setState({
        BloodGroup:'',
Name:'',
Age:'',
PhoneNumber:'',
City:'',
Gender:''
      })
    }
    render() {
       return(
         
        <KeyboardAvoidingView style={styles.container}>
        <View>
        
               <Text style={{marginTop:-350,fontSize:50,marginLeft:70}}>Donor Registration</Text>
          <TextInput onChangeText={(text)=>{this.setState({
            BloodGroup:text
          })}}value={this.state.BloodGroup} style={styles.inputbox}placeholder='BloodGroup'/>
          <TextInput onChangeText={(text)=>{this.setState({
            Name:text
          })}}value={this.state.Name} style={styles.inputbox2}placeholder='Name'/>
           <TextInput onChangeText={(text)=>{this.setState({
            Age:text
          })}}value={this.state.Age} style={styles.inputbox3}placeholder='Age'/>
            <TextInput onChangeText={(text)=>{this.setState({
            City:text
          })}}value={this.state.City} style={styles.inputbox4}placeholder='City'/>
          <TextInput onChangeText={(text)=>{this.setState({
            Gender:text
          })}}value={this.state.Gender} style={styles.inputbox5}placeholder='Gender'/>
</View>
      <TouchableOpacity style={styles.goButton}onPress={async()=>{
        var userDonor = await this.submitForm()
      }}><Text style={styles.buttontext}>Submit</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
     
    );
      }
  }
     
    
    const styles = StyleSheet.create({
        inputbox: {
          marginTop: -10,
          width: 120,
          alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
          marginLeft:-20,
          marginTop:150,
          borderRadius:200,
          backgroundColor:'white'
        },
        goButton: {
          width: '-90%',
          height: 100,
          alignSelf: 'center',
          padding: 10,
          color:'white',
          marginBottom:-300
        },
        buttontext: {
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color:'black'
        },
        displayText: {
          textAlign: 'center',
          fontSize: 30,
        },
        container: {
          flex: 1,
          backgroundColor: '#aa96da',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputbox2:{
          marginTop: -5,
          width: 90,
          alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
          marginLeft:-300,
          marginBottom:-200,
          borderRadius:200,
          marginTop:-49,
          backgroundColor:'white'
  },
        inputbox3:{
          marginTop:160,
          width: 100,
            alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
marginLeft:280,
borderRadius:200,
backgroundColor:'white'
        },
        inputbox4:{
          marginTop: -100,
          width: 100,
          alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
          marginLeft:-20,
marginBottom:-100,
borderRadius:200,
backgroundColor:'white'
        },
        inputbox5:{
          marginTop:200,
          width: 120,
          alignSelf: 'center',
          height: 40,
          textAlign: 'center',
          borderWidth: 4,
          marginLeft:-25,
          backgroundColor:'white',
borderRadius:200
        },
        });
       
