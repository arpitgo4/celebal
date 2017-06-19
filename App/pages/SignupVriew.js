import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class SignupVriew extends Component { 
  
  constructor(props) {
    super(props);
    this.navigate = props.navigation.navigate;
    this.state = {
      name: '',
      email: '',
      password: '',
      birthday: ''
    };
  }

  // username, email, password, age
  SIGN_UP = 'http://sdssoftltd.co.uk/football/web-services/signup.php';

  // ...[1,2,3] = 1 2 3
  onTextChanged(text, fieldName) {
    switch(fieldName) {
      case 'name':
        this.setState({ ...this.state, name: text });
        break;
      case 'email':
        this.setState({ ...this.state, email: text });
        break;
      case 'password': 
        this.setState({ ...this.state, password: text });
        break;
      case 'birthday': 
        this.setState({ ...this.state, birthday: text });
        break;
    }
  }

  onSubmit() {
    const data = new FormData();
    data.append('username', this.state.name);
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    data.append('age', this.state.birthday);
    data.append('device_token', '123123124asjfajksfk123123');

    fetch(this.SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data
    })
    .catch(err => console.log(err.message))
    .then(res => res.json())
    .then(json => {
      if(json.error_code === 0) {
        this.navigate('Login');
      }
      ToastAndroid.show(json.response_string, ToastAndroid.LONG);
    });
  }

  render() {
    return (
      
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            <Image 
              source={background} 
              style={[styles.container, styles.bg]}
              resizeMode="cover"
            >
              <View style={styles.inputsContainer}>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image 
                      source={personIcon}
                      style={styles.inputIcon}
                      resizeMode="contain" 
                    />
                  </View>  
                  <TextInput
                    style={[styles.input, styles.whiteFont]}
                    placeholder="Name"
                    placeholderTextColor="#FFF"
                    underlineColorAndroid='transparent'
                    onChangeText={(fieldName => text => this.onTextChanged.bind(this)(text, fieldName))('name')}
                    ref={(input) => this.name = input}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image 
                      source={emailIcon} 
                      style={styles.inputIcon} 
                      resizeMode="contain"
                    />
                  </View>
                  <TextInput
                    style={[styles.input, styles.whiteFont]}
                    placeholder="Email"
                    placeholderTextColor="#FFF" 
                    onChangeText={(fieldName => text => this.onTextChanged.bind(this)(text, fieldName))('email')}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image 
                      source={lockIcon} 
                      style={styles.inputIcon} 
                      resizeMode="contain"
                    />
                  </View>
                  <TextInput
                    secureTextEntry={true}
                    style={[styles.input, styles.whiteFont]}
                    placeholder="Password"
                    placeholderTextColor="#FFF" 
                    onChangeText={(fieldName => text => this.onTextChanged.bind(this)(text, fieldName))('password')}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image 
                      source={birthdayIcon} 
                      style={styles.inputIcon} 
                      resizeMode="contain"
                    />
                  </View>
                  <TextInput
                    style={[styles.input, styles.whiteFont]}
                    placeholder="Birthday"
                    placeholderTextColor="#FFF"
                    underlineColorAndroid='transparent' 
                    onChangeText={(fieldName => text => this.onTextChanged.bind(this)(text, fieldName))('birthday')}
                  />
                </View>

              </View>

              <View style={styles.footerContainer}>

                <TouchableOpacity onPress={this.onSubmit.bind(this)}>
                  <View style={styles.signup}>
                    <Text style={styles.whiteFont}>Join</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.signin}>
                    <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont} onPress={()=>this.navigate('Login')}> Sign In</Text></Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Image>
          </ScrollView>
        </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10
  },
  scroll: {

  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1,
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
