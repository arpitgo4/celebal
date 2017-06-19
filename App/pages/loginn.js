import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");
import restdata from './restdata';
 export default class Login extends Component {
  
    state = {
      // used to display a progress indicator if waiting for a network response.
      
      email: '',
      password: ''
  }
  
   handleEmail = (text)=> {
      this.setState({ email: text })
   }

   handlePassword = (text) => {
      this.setState({ password: text })
   }
  _onSubmit() {
    this.setState({
     
    });
    const value = this.refs.form.getValue();
     if (value) { // if validation fails, value will be null
       console.log(value);
        // value here is an instance of LoginFields
     }
     

  }
   login = (email, pass) => {
     
       const data = {
        username: this.state.email,
        password: this.state.password
      }
      console.log('data', data);
      let dataa = new FormData();
     dataa.append("email", data.username);
      dataa.append("password", data.password);
       fetch('http://sdssoftltd.co.uk/football/web-services/login.php', {
     method: 'POST',
    headers: {
       'Content-Type': 'multipart/form-data',
           },
      body: dataa
   })
    
   .then((response) => response.json())
   .then((responseJson) => {
     if(responseJson.response_string=='Success.')
     {
      this.props.navigation.navigate('restdata'); 
     }
     else{
       //alert('Invalid User Name and password')
       console.log('Invalid User Name and password');
     }
       return responseJson.json()
   }).then(function(response) {
            return response.json()
        }).catch(function(err) {
          return err;
        })
     
 }
  render() {
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Username" 
                placeholderTextColor="#FFF"
                style={styles.input} 
                onChangeText = {this.handleEmail}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry 
                  onChangeText = {this.handlePassword}
              />
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity title="Settings"activeOpacity={.5}   onPress = { this.login.bind(this) } >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={.5} onPress={()=>navigate('SignUp')}>
                <View>
                  <Text style={styles.signupLinkText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
       
      </View>
      
    ); 
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});