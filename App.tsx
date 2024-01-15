import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';


function App(): React.JSX.Element {
 
  return (
   <View style={styles.sectionContainer}>

    <View style={styles.first}><Image source = {require('../Ryu_Front/asset/image/logo_01.png')}
    style={{marginBottom:10, width: 285, height: 300}}/>
    </View>
 
    <View style={styles.log}><TouchableOpacity style ={{width:"80%",height:"30%",justifyContent:"center",alignItems:"center",backgroundColor:"#009B64",borderColor:'rgba(0,0,0,0,2)',
    borderRadius:15
    }}>
      <Text style={{color:"#FFFFFF", fontSize:15, fontStyle:"normal"}}>로  그  인</Text> 
      </TouchableOpacity></View>

    <View style={styles.log2}><TouchableOpacity style ={{width:"80%",height:"30%",justifyContent:"center",alignItems:"center",backgroundColor:"#aaa",
    borderColor:'rgba(0,0,0,0,2)',
    borderRadius:15,
    }}>
      <Text style={{fontSize:15, fontStyle:"normal"}}>회 원 가 입</Text>
      </TouchableOpacity></View>

   </View>
   
  
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex:1, 
    backgroundColor:'#0000',
    
  },
  first :{
    flex : 5,
   backgroundColor: "abc",
    justifyContent: "center",
    alignItems : "center"
    
  },
  
  log:{
    flex : 1.5,
    backgroundColor:"#0000",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -90,
  },
  log2:{
    flex : 1.5,
    backgroundColor:"#0000",
    justifyContent: "space-between",
    alignItems : "center",

  },
  
  
    
    
 
  }

);

export default App;
