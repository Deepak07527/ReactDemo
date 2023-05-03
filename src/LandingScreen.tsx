import React from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/gaming.svg';

const LandingScreen = (navigation) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={{marginTop: 20}}>
        <Text style={styles.headerText}>
          OnBoarding
        </Text>
      </View>
      <View style={styles.logoView}>
        <Gaming
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress= { () => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
safeAreaContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},
headerText: {
  fontWeight: 'bold',
  fontSize: 30,
  color: '#20315f'
},
logoView: {
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center'
},
buttonContainer: {
  backgroundColor: '#AD40AF',
  padding: 20,
  width: '90%',
  borderRadius: 10,
  marginBottom: 50,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
buttonText: {
  color: 'white',
  fontSize: 18,
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Roboto-Italic'
}
});

export default LandingScreen;
