import { View, Text } from 'react-native'
import React ,{useState}from 'react'
import WebView from 'react-native-webview'
import Spinner from './Spinner'

export default function Contactus() {
    const [loading, setfirst] = React.useState(true)
  return (<>
    <WebView onLoadEnd={()=>setfirst(false)} source={{uri:'https://allinonefreestudymatirial.000webhostapp.com/Files/Contact.html'}}/>
    {(loading)&&<View><Spinner/></View>}
  </>)
}