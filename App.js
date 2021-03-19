import { StatusBar } from 'expo-status-bar';
import React,{cloneElement, useRef,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated,Dimensions } from 'react-native';
import { withOrientation } from 'react-navigation';
import SlidingUpPanel from 'rn-sliding-up-panel'
import Dashboard from './Components/Dashboard';
import Payment from './Components/Payment';

export default function App() {
  const {width,height} = Dimensions.get('window')
  const ModalRef = useRef(null);
  const [dragRange,setDragRange] = useState({
    top:height/2,
    bottom:70
  })
  const _draggedValue = new Animated.Value(30)
  const printHello = ()=>{console.log("hellott")}
  return (
    <View style={styles.container}>
      {/* <Payment></Payment> */}
      <Dashboard></Dashboard>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    paddingTop:50,
    paddingHorizontal:14,




  },
});
