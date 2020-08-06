import { Container } from "native-base";
import React, { useState, useEffect }  from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from "react-native";
import useAuthContext from "../hooks/useAuthContext";
import { BarCodeScanner } from "expo-barcode-scanner";

interface IItem {
  id: string,
  upc: string,
  title: string
}

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.upc}>{item.upc}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item item={item} />
);
  
export default function Main() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [items, setItems] = useState([]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(data);
    if(data === "50404957") {
      setItems(state => [{ id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", upc: data, title: "Paracetamol Caplets" }, ...state ])
    } else {
      //alert('Unknown Item... please ')
    } 
    //setItems(state => [{ id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28bb", upc: data, title: "Unknown Item" }, ...state ])
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const {
    state,
  } = useAuthContext(); //TODO: We Need to Use our CartContext here instead :)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <Container style={styles.container}>  
          <View
            style={{
              height:150,
              alignSelf: 'stretch'
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button  title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          </View>
          <SafeAreaView style={{ marginTop: 4 }}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181818",
    flex: 1,
    color: "white"
  },
  content: {
    alignItems: "stretch",
    justifyContent: "center"
  },
  item: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 8,
    height: 80,
    marginVertical: 4,
    marginHorizontal: 4,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 32,
  },
  upc: {
    fontSize: 16,
  },
});


