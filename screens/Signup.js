import Icon  from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import loginimg from "../assets/loginimg.png";
import loginlogo from "../assets/loginlogo.png";
import google from "../assets/google.png";
import facebookship from "../assets/facebookship.png";
import linkedinship from "../assets/linkedinship.png";
import { SelectList } from 'react-native-dropdown-select-list'

import { TouchableOpacity } from 'react-native';


const Signup = ({navigation}) => {

    const [secure, setSecure] = useState(true);

    const userType = ["Personal", "Business"]

    const changeIcon= () => {
        setSecure(!secure)
    }
    const handleSubmit=()=>{
        console.warn(selected, source, signup)
    }
    
    const pressHandler = () =>{
        navigation.push("Login")
    }
    const [selected, setSelected] = useState("");
    const [source, setSource] = useState("");
    const [signup, setSignup] = useState("");

    const data = [
        {key:'1', value:'Select op', disabled:true},
        {key:'2', value:'Personal'},
        {key:'3', value:'Business'},
    ]
    const data2 = [
        {key:'1', value:'default', disabled:true},
        {key:'2', value:'Personal'},
        {key:'3', value:'Business'},
    ]
    const data3 = [
        {key:'1', value:'default', disabled:true},
        {key:'2', value:'Friends'},
        {key:'3', value: 'Linkedin'},
    ]

    return(
        <View style={styles.body}>
            <ImageBackground source={loginimg} resizeMode="cover" style={styles.child}>
                <View style={styles.coverchild}></View>
                </ImageBackground>
            
                <View style={styles.logininfo}>
                <Image source={loginlogo} style={styles.loginlogo} />
                <Text style={styles.signin}>Sign Up</Text>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.scrollsignup}>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>First name</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Last name</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Password</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} style={styles.emailinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 10 }}
name={secure ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Confirm Password</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} style={styles.emailinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 10 }}
name={secure ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Email</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Phone number</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>User Type</Text>
                    <SelectList 
                    setSelected={(value) => setSelected(value)} 
                    data={data} 
                    save="value"
                    boxStyles={{backgroundColor: "#DCDCDC", border: "none"}}
                    placeholder="Select Type"
                        />
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Signup Method</Text>
                    <SelectList 
                    setSelected={(val) => setSignup(val)} 
                    data={data2} 
                    save="value"
                    boxStyles={{backgroundColor: "#DCDCDC", border: "none"}}
                    placeholder="Select Type"
                        />
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Source of Awareness</Text>
                    <SelectList 
                    setSelected={(val) => setSource(val)} 
                    data={data3} 
                    save="value"
                    boxStyles={{backgroundColor: "#DCDCDC", border: "none"}}
                    placeholder="Select Type"
                        />
                </View>
                
                {/* <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>City</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Address</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Company</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput}/>
                    </View>
                </View> */}
                {/* <View>
                    <RadioGroup  radioButtons={radioButtons} 
            onPress={onPressRadioButton}  />
                </View> */}
                <TouchableOpacity style={{ backgroundColor: '#1E6738', width: "90%", marginTop: 30, padding: 8, borderRadius: 5 }} onPress={pressHandler}>
                <Text onPress={handleSubmit} style={{ color: '#fff', textAlign: 'center', fontSize: "20px"}}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.notyet}>
                <Text style={styles.notmember}>Not yet a ShiptoNaija member?</Text>
                <Text style={styles.signup} onPress={pressHandler}>Sign in</Text>
                </View>
                </View>
                </ScrollView>
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
    scrollView :{
        flex: 1,
        width: "100%",
        marginBottom: 30
    },
    signup: {
        color: "#1E6738"
    },
    scrollsignup: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
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
        fontSize: "30px",
        marginTop: 60
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
    },
    selectdropdown: {
        width: "100% ",
        backgroundColor: "#DCDCDC"
    }
})

export default Signup;