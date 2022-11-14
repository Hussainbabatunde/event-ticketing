import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

const LoadingComponent = () =>{
    return(
        <View style={styles.backdrop}>
        <ActivityIndicator animating={true} color={styles.spinner} />
        </View>
    )
}


const styles = StyleSheet.create({
    backdrop: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        position: "absolute"
    },
    spinner: {
        color: "white"
    }
})
export default LoadingComponent;