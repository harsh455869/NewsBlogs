import React from 'react'
import { ActivityIndicator } from 'react-native-paper';
import {StyleSheet} from 'react-native'
import { View } from 'react-native'
import WebView from 'react-native-webview'
import Spinner from './Spinner';

export default function ResultScreen({navigation,route}) {
    const {link}=route.params;
    const [loading, setfirst] = React.useState(true)
   
    
  return (<>
  <WebView  onLoadEnd={()=>setfirst(false)} style={{flex:1,justifyContent:'center',alignContent:'center',marginTop:30}} source={{uri:link}}/>
  {(loading)&&<View ><Spinner/></View>}
 </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    img:{
      width:300,
         height:300,
         marginVertical:20
  
    }
  });