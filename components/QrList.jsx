import React from "react";
import { useSelector } from "react-redux";
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function QrList () {

const QrDataList = useSelector((state) => state.qrData)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text>
                        Qr List
                    </Text>
                </View>
                <View>
                    <FlatList
                    keyExtractor={(item) => item.id}
                    data={QrDataList}
                    renderItem={({item}) => (
                        <Text>{item.title}</Text>
                    )}
                    />
                </View>
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