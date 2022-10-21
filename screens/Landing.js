import React from "react";
import { Image, View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from "react-native";
import landingimg from "../assets/landing.png";
import quote from "../assets/quote.png";
import track from "../assets/track.png";
import hasitems from "../assets/hasitems.png";
import logowhite from "../assets/logowhite.png";



const Landing = ({navigation}) =>{

    const pressHandler = () =>{
        navigation.push("Login")
    }
    return (
        <View style={styles.imagehold}>
            {/* <Image style={styles.images} source={require('../assets/shiptonaijalogo.png')}/>
            <Button title="View Login"  onPress={pressHandler}/> */}
            <ImageBackground source={landingimg} resizeMode="cover" style={styles.imgbody}>
                <View style={styles.landhold}>
                    <View>
                        <Image source={logowhite} />
                    </View>
                    <View style={styles.child}>
                <Text style={styles.welcome}>WELCOME</Text>
                <View style={styles.trackabt}>
                <TouchableOpacity onPress={pressHandler}>
                    <Image source={quote} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pressHandler}>
                    <Image source={track}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pressHandler}>
                    <Image source={hasitems}/>
                    </TouchableOpacity>
                </View>
                {/* <Button color="white" backgroundColor="green" title="Sign in" style={styles.buttonhome} /> */}
                <TouchableOpacity style={{ backgroundColor: '#1E6738', width: "90%", marginTop: 130, padding: 8 }} onPress={pressHandler}>
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: "20px"}}>Sign in</Text>
                </TouchableOpacity>
                    <View
                        style={{
                                borderBottomColor: 'white',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                width:"90%", 
                                marginTop: 10
                        }}
                    />
                    <View style={styles.signuphelp}>
                        <Text style={styles.sihe}>Sign up</Text>
                        <Text style={styles.sihe}>Help</Text>
                    </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    landhold: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    backgroundColor: 'rgba(0,0,0,0.5)'
    },
    imagehold: {
        flex: 1,
        // justifyContent : "center",
        // alignItems: "center",
    },
    imgbody: {
        flex: 1
    },
    sihe: {
        color: "white",
        fontSize: "17px",
        margin: 5
    },
    signuphelp: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 30
    },
  child: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
    welcome: {
        color: "white",
        fontSize: 23,
        fontWeight: "600"
    },
    images: {
        resizeMode: "cover",
        height: 100,
        width: 200
    },
    trackabt: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginTop: 100
    },
    buttonhome: {

    }
})

export default Landing;