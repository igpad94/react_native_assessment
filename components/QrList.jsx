import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function QrList () {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>
                    QrList
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})