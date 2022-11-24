import React from "react"
import { SafeAreaView, Text } from "react-native"
import { View } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import boxed from "../assets/boxed.jpg"
import sponsimg from "../assets/loginlogo.png";
import { FontAwesome } from '@expo/vector-icons'; 

const TrendingEvent= ({navigation})=>{

    const showTrending = ()=>{
        navigation.navigate("Dashboard", {screen : "Eventhome"})
    }
    return(
        <SafeAreaView styles={styles.wholeTrend}>
            <View style={styles.headertrend}>
            <Ionicons name="arrow-back-outline" size={35} color="black" onPress={showTrending} />
            <Text style={styles.trendText}>Trending Events</Text>
            </View>
            <View style={styles.wholecomp}>
                <Image source={boxed} style={styles.imgTrend}/>
                <Text style={styles.name_ofevent}>Miami Carnival 2022 | Viva Londvdfdfdon</Text>
                <View style={styles.location_events}>
                        <Ionicons name="location-sharp" size={24} color="rgb(114,110,142)" />
                        <Text style={styles.loc_particular}> Singapore Exvsdvvfdvfvdpo, ...</Text>
                </View>
                <View>
                <View style={styles.going_indv}>
                    <Image source={sponsimg} style={styles.sponsimgper}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin}/>
                    <Image source={sponsimg} style={styles.sponsimgperupcomin2}/>
                    <Text style={styles.going_nummber}>65 + going</Text>
                </View>
                <View style={styles.redheart}>
                    <FontAwesome name="heart" size={24} color="red"  />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    wholeTrend:{
        flex: 1
    },
    headertrend:{
        flexDirection:"row",
        marginLeft: "2.5%",
        width:"95%"
    },
    trendText:{
        fontSize: 25,
        marginTop: 5,
    },
    imgTrend:{
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    wholecomp:{
        width:"95%",
        marginLeft:"2.5%",
        padding: 10,
        marginTop: 20,
        borderWidth: 1
    },
    name_ofevent:{
        fontSize: 18,
        marginTop: 10,
        maxWidth: "100%"
    },
    location_events:{
        flexDirection:"row",
        alignItems:"center",
        maxWidth: "95%",
        marginTop: 10
    },
    loc_particular:{
        color:"rgb(179,179,179)",
        maxWidth: "100%",
        fontSize: 16
    },
    going_indv:{
        flexDirection:"row",
        alignItems:"center",
        position:"relative",
        top: 10,
        marginBottom: 10
    },
    sponsimgper:{
        width: 50,
        height: 50
    },
    sponsimgperupcomin:{
        width: 50,
        height: 50,
        position: "absolute",
        left: 30
    },
    sponsimgperupcomin2:{
        width: 50,
        height: 50,
        position: "absolute",
        left: 60
    },
    going_nummber:{
        color:"rgb(107,100,233)",
        position:"absolute",
        left:110
    },
    redheart:{
        position:"absolute",
        right: 0,
        backgroundColor: "rgb(162,156,156)",
        padding: 8,
        borderRadius: "50%",
        top: 10
    }
})

export default TrendingEvent;