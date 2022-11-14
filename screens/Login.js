import Icon  from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import loginimg from "../assets/loginimg.png";
import loginlogo from "../assets/loginlogo.png";
import google from "../assets/google.png";
import facebookship from "../assets/facebookship.png";
import linkedinship from "../assets/linkedinship.png";
import * as SecureStore from 'expo-secure-store';
import { TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Loginauth } from '../components/auth/auth';
import { ActivityIndicator } from 'react-native';
import { Alert } from 'react-native';
// import {RadioGroup}  from 'react-native-radio-buttons-group';




const Login = ({navigation}) => {

    const[email, setEmail] =useState('')
    const[password, setPassword] =useState('')
    const [secure, setSecure] = useState(true);
    const [loading, setLoading] = useState(false)

    const changeIcon= () => {
        setSecure(!secure)
    }

    const Signuppage = () => {
        navigation.navigate("Signup")
    }
    // const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    // function onPressRadioButton(radioButtonsArray) {
    //     setRadioButtons(radioButtonsArray);
    // }

    // const radioButtonsData = [{
    //     id: '1', // acts as primary key, should be unique and non-empty string
    //     label: 'Option 1',
    //     value: 'option1'
    // }, {
    //     id: '2',
    //     label: 'Option 2',
    //     value: 'option2'
    // }]
    const pressHandler = () =>{
        navigation.navigate("Dashboard")
    }
    const dispatch= useDispatch();
    const {success} = useSelector((state)=> state.auth)
    

    const onSubmithandler= async() =>{
        const name = {
            email: email,
            password: password
        }
        console.warn(name)
        setLoading(true)
        await dispatch(Loginauth(name, navigation))
        setLoading(false)
    }

        useEffect(()=>{
            if (success== true){
                navigation.navigate("Dashboard")
            }
            
        }, [navigation, success])
    return(
        <View style={styles.body}>
            <ImageBackground source={loginimg} resizeMode="cover" style={styles.child}>
                <View style={styles.coverchild}></View>
                </ImageBackground>
            <View style={styles.logininfo}>
                <Image source={loginlogo} style={styles.loginlogo} />
                <Text style={styles.signin}>Sign In</Text>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Email</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput} value={email} onChangeText={setEmail} placeholder="Input your email" />
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Password</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} value={password} onChangeText={setPassword} style={styles.emailinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 10 }}
name={secure ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon}/>
                    </View>
                </View>
                {/* <View>
                    <RadioGroup  radioButtons={radioButtons} 
            onPress={onPressRadioButton}  />
                </View> */}
                {/* <TouchableOpacity style={{ backgroundColor: '#1E6738', width: "90%", marginTop: 30, padding: 8, borderRadius: 5 }} onPress={pressHandler}> */}
                <TouchableOpacity onPress={onSubmithandler} style={{ backgroundColor: '#1E6738', width: "90%", marginTop: 30, padding: 8, borderRadius: 5 }}>
                {loading?  <ActivityIndicator animating={true} color="white" />: <Text style={{ color: '#fff', textAlign: 'center', fontSize: "20px"}}>Sign in</Text>}
                </TouchableOpacity>
                <View style={styles.networks}>
                    <Image source={google} />
                    <Image source={facebookship} />
                    <Image source={linkedinship} />
                </View>
                <View style={styles.notyet}>
                <Text style={styles.notmember}>Not yet a ShiptoNaija member?</Text>
                <Text style={styles.signup} onPress={Signuppage}>Sign up</Text>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    body: {
        flex: 1
    },
    networks: {
        flexDirection:"row",
        marginTop: 40,
        justifyContent: "space-evenly",
        width: "100%"
    },
    signup: {
        color: "#1E6738"
    },
    notyet: {
        flexDirection: "row",
        marginTop: 40
    },
    notmember: {
        color: "#5F6160"
    },
    child:{
        // width: "100%",
        // height: "55%"
        flex: 1
    },
    coverchild: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: "100%",
    height: "100%"
    },
    logininfo: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    signin: {
        color: "#5F6160",
        fontSize: "30px"
    },
    loginlogo :{
        position: "absolute",
        top: -60
    },
    emailinputhold:{
        backgroundColor: "#DCDCDC",
        borderRadius: "5px",
        flexDirection: "row"
    },
    inputemailtog:{
        width: "90%",
        marginTop: 30
    },
    emailinput:{
        fontSize:"18px",
        padding: 10,
        flex: 1
    },
    emailtog: {
        color: "#305743",
        fontWeight: "600"
    }
})

export default Login;