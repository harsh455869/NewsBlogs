import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Linking, Share } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { ActivityIndicator } from 'react-native-paper';
import {WebView} from 'react-native-webview'
import { Link } from '@react-navigation/native';
import Spinner from './Spinner';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default HomeScreen = ({ route, navigation }) => {
  let { title, urlToImage, publishedAt, description, url,name,v } = route.params;
 
 
  const [loading,setLoading]=useState(true)
  const [first, setfirst] = useState()
 
 
  
  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('DATA');
        if (value !== null) {
          // We have data!!
          setfirst(JSON.parse(value))
          console.log(value);
          
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    _retrieveData()
    setTimeout(() => {
      setLoading(false)
    }, 2000);
   }, [])
  const  _storeData = async ({title,description,date}) => {
    try {
      let y=first
   
      y.push([title,description,urlToImage,url,publishedAt])
      await AsyncStorage.setItem(
        'DATA',
        JSON.stringify(y)
      );
      alert('data saved')
    } catch (error) {
      alert('please clear all articals before saving articals')
      console.log('data not saved')
      // Error saving data
    }
  };
  
  return (
   !(loading)? <ScrollView >
    
    {(v)? <View style={{display:'flex',flexDirection:'row',borderWidth:0.4}}>
    <Button  icon='share' color='darkblue' style={{width:'50%',marginRight:3,backgroundColor:'white',borderWidth:0.4}} onPress={async () => {
      await Share.share({
        title: "Sharing pdf file from awesome share app",
        message: url,
        url: url,
      })}}>Share</Button>
      <Button  icon='file' style={{width:"50%",backgroundColor:'white',borderWidth:0.4}} onPress={()=>_storeData({title,description,date:new Date().toUTCString()})}  color='blue' >Save</Button></View>: <Button  icon='share' style={{width:'100%',marginRight:3,backgroundColor:'white',elevation:10}} color='blue'onPress={async () => {
      await Share.share({
        title: "Sharing pdf file from awesome share app",
        message: url,
        url: url,
      })}}>Share</Button>}
      <View style={{elevation:10,backgroundColor:'white',padding:5}}>
        <Text style={{fontSize:20,fontWeight:'bold',fontFamily:'serif'}}>{title}</Text>
        <Text style={{fontFamily:'monospace'}}>{new Date(publishedAt).toUTCString()}</Text>
      </View>
      <View >
        <Image style={styles.img} source={{uri:urlToImage}}/>
      </View>
      <View style={{elevation:10,backgroundColor:'white',borderWidth:0.4,elevation:10,padding:5}}>
        <Text style={{fontSize:15,fontWeight:"500", fontFamily:'monospace'}}>
          {description}
        </Text>
      </View>
     
      <View>
    
      <Button mode='contained' color='darkblue' style={{marginBottom:10}} onPress={()=>navigation.navigate('Result',{link:url})}>Full Artical</Button></View>
      </ScrollView> :<View style={styles.container}><Spinner/></View>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   

  },
  img: {
  
    marginVertical: 10,
    minHeight:330,
    minWidth:330

  }
});