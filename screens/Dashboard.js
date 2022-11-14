import React from "react";
import { Image, View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import clientimgnative from "../assets/clientimgnative.png";
import quote from "../assets/quote.png";
import track from "../assets/track.png";
import hasitems from "../assets/hasitems.png";
import logowhite from "../assets/logowhite.png";
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';



const Dashboard = ({navigation}) =>{

    const pressHandler = () =>{
        navigation.push("Login")
    }
    return (
        <View style={styles.firstView}>
            <View style={styles.toppart}>
            {/* <Image style={styles.images} source={require('../assets/shiptonaijalogo.png')}/>
            <Button title="View Login"  onPress={pressHandler}/> */}
           <View style={styles.imgclient}><Text style={styles.nameclient}>it works</Text>
           <Image source={clientimgnative} />
           </View>
           <View style={styles.searchpart}>
            <View style={styles.searchpartenter}><Ionicons name="ios-location" size={30} color="rgba(72, 130, 101, 1)" />
            <TextInput placeholder="Enter Your Track ID" style={styles.textinputreg}/>
            </View>
            <TouchableOpacity style={styles.searchbut}><Entypo name="chevron-right" size={24} color="white" /></TouchableOpacity>
           </View>
           </View>
           <ScrollView style={styles.secondpart}>
            <View style={styles.diffpages}>
                <TouchableOpacity style={styles.textsec}>
                <Text style={styles.innertext}>Statistics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textsec2}>
                <Text style={styles.innertext2}>Quick Access</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.threeboxes}>
                <View style={styles.onebox}>
                    <Text>Shipments</Text>
                    <Text style={styles.noofinput}>45</Text>
                </View>
                <View style={styles.onebox}>
                    <Text>Transaction</Text>
                    <Text style={styles.noofinput}>104</Text>
                </View>
                <View style={styles.onebox}>
                    <Text>Not Delivered</Text>
                    <Text style={styles.noofinput}>1</Text>
                </View>
            </View>
            <View style={styles.recenthistory}>
                <View style={styles.history}>
                    <Text style={styles.recent}>Recent History</Text>
                    <Text style={styles.seeall}>See All</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>Track ID</Text>
                        <Text style={styles.togethertext}>#454-565-686</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>Status</Text>
                        <Text style={styles.togethertext}>In Transit</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>From</Text>
                        <Text style={styles.togethertext}>Nigeria</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>To</Text>
                        <Text style={styles.togethertext}>USA</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>Date</Text>
                        <Text style={styles.togethertext}>10-Jun-22</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>Track ID</Text>
                        <Text style={styles.togethertext}>#454-565-686</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>Status</Text>
                        <Text style={styles.togethertext}>In Transit</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>From</Text>
                        <Text style={styles.togethertext}>Nigeria</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>To</Text>
                        <Text style={styles.togethertext}>USA</Text>
                    </View>
                    <View style={styles.together}>
                        <Text style={styles.togethertext}>Date</Text>
                        <Text style={styles.togethertext}>10-Jun-22</Text>
                    </View>
                </View>
            </View>
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    firstView: {
        flex: 1,
        flexDirection: "column"
    },
    imgclient: {
        // flex: 1,
        paddingTop: 50,
        justifyContent: "flex-end",
        flexDirection: "row",
        paddingRight:20,
        height: 10
    },
    nameclient: {
        fontSize: 25,
        fontWeight:"600",
        marginTop:10,
        marginRight: 10,
        height: 30
    },
    searchpart: {
        marginTop:150,
        flexDirection: "row",
        paddingHorizontal:10,
        justifyContent:"space-between",
        marginBottom: 10
    },
    searchpartenter: {
        flexDirection: "row",
        backgroundColor: "#DCDCDC",
        padding:8,
        borderRadius: 5,
        width: "85%"
    },
    textinputreg: {
        marginLeft: 10,
        width: "80%"
    },
    searchbut: {
        backgroundColor: "rgba(72, 130, 101, 1)",
        justifyContent: "center",
        alignItems:"center",
        padding:15,
        borderRadius: 5
    },
    toppart: {
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20
    },
    secondpart: {
        backgroundColor: "rgba(72, 130, 101, 0.06)",
        flex: 1
    },
    diffpages:{
        marginTop: 10,
        flexDirection: "row",
        padding: 10
    },
    textsec: {
        color: "white",
        backgroundColor: "rgba(72, 130, 101, 1)",
        padding: 5, 
        borderRadius: 20
    },
    textsec2: {
        color: "black",
        backgroundColor: "white",
        padding: 5, 
        borderRadius: 20,
        marginLeft: 10
    },
    innertext: {
        color: "white"
    },
    innertext2: {
        color: "black"
    },
    threeboxes: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        marginTop: 10
    },
    onebox: {
        backgroundColor:"white",
        justifyContent: "center",
        alignItems:"center",
        padding: 20,
        borderRadius: 5
    },
    noofinput: {
        fontSize: 25,
        fontWeight: "600",
        marginTop:10
    },
    recenthistory: {
        backgroundColor:"white",
        flex: 1,
        width:"94%",
        marginLeft: "3%",
        marginTop: 40,
        borderRadius: 5,
        padding:20
    },
    history: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    recent: {
        fontSize: 25
    },
    seeall: {
        marginTop: 10,
        color: "rgba(72, 130, 101, 1)"
    },
    details: {
        backgroundColor: "rgba(72, 130, 101, 0.06)",
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        paddingVertical: 10
    },
    together: {
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 10,
        marginBottom: 10
    },
    togethertext: {
        color: "rgba(89, 89, 89, 1)"
    }
})

export default Dashboard;