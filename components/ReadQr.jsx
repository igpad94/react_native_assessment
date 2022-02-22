import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarCodeScanner } from "expo-barcode-scanner";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function ReadQr () {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const handleBarCodeScanned = () => {
        setScanned(true);
        alert(`Bar code has been scanned!`);
      };
    
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text>
                        ReadQr
                    </Text>
                </View>
                <View style={styles.scannerContainer}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={styles.codeScanner}
                    />
                     {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
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
    },
    codeScanner: {
        width: windowWidth*0.55, 
        height: windowHeight*0.30
    },
    scannerContainer: {
        borderColor: "#00B4D8",
        borderWidth: 4
    }
})