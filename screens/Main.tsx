import { Container, Left, Body, Right, Icon, ListItem } from "native-base";
import React, { useState, useEffect }  from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button } from "react-native";
import useAuthContext from "../hooks/useAuthContext";
import { BarCodeScanner } from "expo-barcode-scanner";
import IonIcons from "react-native-vector-icons/Ionicons"

enum SyncState {
  Pending,
  Synced,
  Syncing
}

interface IItem {
  id: string,
  upc: string,
  title: string,
  price: string,
  quantity: number,
  syncState: SyncState
}

export default function Main() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [items, setItems] = useState([
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Blueberries", 
      price: "£6.00", 
      quantity: 1, 
      syncState: SyncState.Pending 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Pears", 
      price: "£4.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Oranges", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Apples", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Strawberries", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Grapes", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Lettuce", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Cheese", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Milk", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Tomatoes", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Rhubarb", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Plums", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Custard", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Shampoo", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Plums", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Toilet Roll", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Washing Up Liquid", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Pancakes", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Plums", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Cottage Cheese", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Yoghurt", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Lego", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Cat", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Plums", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Plums", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Dog", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Shoe", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Cabbage", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Donald Duck", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Semtex", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    {
      id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", 
      upc: '123124123123213', 
      title: "ASDA Wispa", 
      price: "£3.00", 
      quantity: 1, 
      syncState: SyncState.Synced 
    },
    
  ]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(data);
    if(data === "50404957") {
      setItems(state => [{id: "ge7acbea-c1b1-46c2-aed5-3ad53abb28ba", upc: '123124123123213', title: "ASDA Blueberries",
      price: "£6.00", quantity: 1, syncState: SyncState.Synced }, ...state ])
    } else {
      //alert('WE WILL NEVER EEEVVVEERRR SHOW THE USER AN ERRORR.... EVER!!!!
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
              height:191,
              alignSelf: 'stretch',
              borderBottomColor: '#777777', 
              borderBottomWidth: 1 
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && 
                <View style={{ marginTop: 20 }}>
                  <Button title={'Tap to Scan Again'} color="white" onPress={() => setScanned(false)} />
                </View>
            }
          </View>
          <View style={{ flexDirection: "row", 
                         backgroundColor: "#181818", 
                         height: 40,               
                         borderBottomColor: '#777777', 
                         borderBottomWidth: 1 }}>
            <Left><View style={{flexDirection: "row"}}><Icon style={{ marginTop: 3, marginHorizontal: 5, color: "#eeeeee" }} name="cart"></Icon><Text style={{ textAlignVertical: "center", fontSize: 20, marginTop: 6, color: "#7dc242" }}>35</Text></View></Left>
            <Body><Button title="Checkout" color="#7dc242" onPress={() => alert('yay')}></Button></Body>
            <Right>
              <View style={{flex:1, marginTop: 2}}>
                <View style={{flexDirection: "row"}}><Text style={{width:60, color: "#eeeeee"}}>Total:</Text><Text style={{textAlign: 'right', alignSelf: 'stretch', color: "#eeeeee"}}>£118.99</Text></View>
                <View style={{flexDirection: "row"}}><Text style={{width:60, color: "#eeeeee"}}>Savings:</Text><Text style={{textAlign: 'right', alignSelf: 'stretch', color: "#7dc242"}}>-£22.99</Text></View>
              </View>
            </Right>
          </View>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              data={items}
              renderItem={({item}: { item: IItem }) =>
                <ListItem style={{height: 40, justifyContent: "center"}} noBorder>
                  <View style={styles.item}>
                    <Left>
                        <Text style={styles.title}>{item.title}</Text>
                    </Left>
                    <Body  style={{flexDirection: "row-reverse", justifyContent: "flex-start" }}>
                      <Text style={styles.price}>{item.price}</Text>
                      {/* <Text style={styles.quantity}>{item.quantity}</Text> */}
                    </Body>
                    <Right style={{flexDirection: "row-reverse", justifyContent: "flex-start" }}>
                      <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
                        { item.syncState === SyncState.Synced ?  <IonIcons name="ios-checkmark" size={25} color="#7dc242" /> : <IonIcons name="ios-checkmark" size={25} color="#999999" /> }
                      </View>
                    </Right>
                  </View>
                </ListItem>
              }
              keyExtractor={item => item.id}
            />
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
    flexDirection: "row",
    backgroundColor: '#181818',
    padding: 8,
    height: 40,
    marginVertical: 4,
    marginHorizontal: 4,
    alignSelf: 'stretch'
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    width: 180
  },
  upc: {
    fontSize: 16,
    color: "#eeeeee",
    margin: 4,
  },
  price: {
    fontSize: 16,
    color: "#eeeeee",
    width: 70
  },
  quantity: {
    fontSize: 16,
    color: "#eeeeee",
    width: 30,
  },
  syncState: {
    width: 30
  },
});


