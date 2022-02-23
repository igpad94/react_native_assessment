import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Dimensions,
    SafeAreaView
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch } from "react-redux";
import { readQr } from "../actions"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function ReadQr () {

    const dispatch = useDispatch();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [camera, setCamera] = useState(false);


    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        alert(`Bar code has been scanned!`);
        dispatch(readQr(data))
      };
    
    const handleClose = () => {
        setScanned(false);
        setCamera(false)
    }
    
    if (hasPermission === null) {
        return <Text>Requesting for camera permission...</Text>;
      }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <SafeAreaView  style={styles.container} >
            <View>
                <View>
                    <Text style={styles.title}>
                        Read QR
                    </Text>
                </View>
                <View>
                    {camera ? (
                    <View>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={styles.codeScanner}
                        />
                        {scanned && <Button title={'Tap to scan a new code'} onPress={() => setScanned(false)} />}
                        <Button title={"Close Scanner"} onPress={handleClose}/>
                    </View>
                    ):(
                    <View>
                        <Button title={"Tap to start Scanning"} onPress={() => setCamera(true)}/>
                    </View>
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        width: windowWidth,
        height: windowHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    title :{
        fontSize: 22,
        fontFamily: "Optima",
        alignSelf: "center",
        marginBottom: 10
    },
    codeScanner: {
        width: windowWidth*0.55, 
        height: windowHeight*0.30,
    },
})