import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { readQr } from '../actions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function ReadQr() {
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

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert('Bar code has been scanned!');
    dispatch(readQr(data));
  };

  const handleClose = () => {
    setScanned(false);
    setCamera(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            QR Reader
          </Text>
        </View>
        <View style={styles.subContainer}>

          {camera ? (
            <View>
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.codeScanner}
              />
              {scanned && <Button title="Tap to scan a new code" onPress={() => setScanned(false)} />}
              <Button title="Close Scanner" onPress={handleClose} />
            </View>
          ) : (

            <View>
              <View style={styles.codeScanner} />
              {hasPermission === false || null
                ? <Text style={styles.warningText}> Access to the camera wasn´t granted </Text>
                : <Button title="Tap to start Scanning" onPress={() => setCamera(true)} />}
            </View>
          )}
          <Text style={{ fontFamily: 'Optima', color: 'grey', fontSize: 16 }}>
            Scan any QR Code and save it´s data on the QR List.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Optima',
    alignSelf: 'center',
    marginBottom: 10,
    color: 'white',
  },
  codeScanner: {
    width: windowWidth * 0.55,
    height: windowHeight * 0.30,
    alignSelf: 'center',
    backgroundColor: 'grey',
  },
  subContainer: {
    justifyContent: 'center',
    height: windowHeight,
    paddingBottom: windowHeight * 0.13,
  },
  titleContainer: {
    paddingTop: 5,
    alignSelf: 'center',
    width: windowWidth * 0.4,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#00B4D8',
  },
  warningText: {
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 8,
    fontFamily: 'Optima',
    fontSize: 16,
  },

});
