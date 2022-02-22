import React, {useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TextInput
} from "react-native";
import { filterData } from "../actions";


export default function QrList () {

    const QrDataList = useSelector((state) => state.filteredData)
    const [text, setText] = useState("")
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(filterData(text))
    }


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text>
                        Qr List
                    </Text>
                </View>
                <View>
                    <TextInput
                    onChangeText={setText}
                    value={text}
                    placeholder={"Search Qr..."}
                    onSubmitEditing={onSubmit}
                    />
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
        paddingTop: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})