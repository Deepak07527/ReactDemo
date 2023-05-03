import React, {useState} from 'react';
import {TouchableOpacity, ScrollView, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
<ScrollView>
  <View style = {styles.container}>
    <TouchableOpacity>
      <Text style = {{color: 'white', fontWeight: 'bold'}}> New User </Text>
    </TouchableOpacity>
  </View>
  <View style = {styles.imageViewContainer}> 
   <Image
    style = {styles.imageLogo}
    source = {require('../assets/logo.png')}
    />
  </View>
  <View style = {styles.textFieldContainer}>
   <Image 
   style = {styles.emailInputIcon}
   source = {require('../assets/email.png')}/>
   <TextInput
   style = {styles.input}
   placeholder = 'Last 8 Digits of the Card'
   keyboardType = 'number-pad'
   />
  </View>
  <View style = {styles.textFieldContainer}>
   <Image 
    style = {styles.passwordInputIcon}
    source = {require('../assets/password.png')}/>
   <TextInput
    style = {styles.input}
    placeholder = 'Code ID Number'
    keyboardType = 'number-pad'
   />
  </View>
  <View style = {styles.checkBoxContainer}>
  <TouchableOpacity>
   <Image
   style = {styles.checkBoxImage}
   source = {require('../assets/uncheck.png')} />
  </TouchableOpacity>
  <Text>Remember Me</Text>
  </View>
  <TouchableOpacity style = {styles.loginButton} onPress = { () => navigation.navigate('Dashboard')}>
    <Text style = {styles.loginTitle}>LOGIN</Text>
  </TouchableOpacity>
  <TouchableOpacity style = {{alignItems: 'center', marginBottom: 20}}>
    <Text style = {styles.forgotTitle}>Forgot Id number?</Text>
  </TouchableOpacity>
  <Text style = {styles.touchIdTitle}>Login with Touch Id</Text>
  <View>
    <TouchableOpacity style = {{alignItems: 'center'}}>
      <Image 
       style = {styles.fingerprintContainer}
       source = {require('../assets/fingerprint.png')} />
    </TouchableOpacity>
  </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 20,
  height: 64,
  backgroundColor: '#0079C1'
},
imageViewContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: 103
},
imageLogo: {
  width: 200, 
  height: 70,
},
textFieldContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
  marginHorizontal: 30,
  marginBottom: 20
},
emailInputIcon: {
  width: 22,
  height: 15,
  marginRight: 8
},
passwordInputIcon: {
  width: 17,
  height: 21,
  marginRight: 8
},
input: {
  flex: 1,
  height: 40,
  paddingVertical: 0
},
checkBoxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 30
},
checkBoxImage: {
  width: 27,
  height: 27,
  marginRight: 15
},
loginButton: {
  backgroundColor: '#9CD01E',
  marginTop: 20,
  borderRadius: 20,
  marginLeft: 30,
  marginRight: 30,
  padding: 5,
  marginBottom: 20
},
loginTitle: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 22,
  textAlign: 'center'
},
forgotTitle: {
  color: '#0079C1',
  fontWeight: 'bold'
},
touchIdTitle: {
  color: 'gray',
  fontWeight: 'bold',
  textAlign: 'center'
},
fingerprintContainer: {
  width: 65,
  height: 65,
  marginTop: 20
}
});

export default Login;