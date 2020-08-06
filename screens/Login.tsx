import {
    Button,
    Container,
    Content,
    Form,
    Input,
    Item,
    Label,
    Text,
  } from "native-base";
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  import React from "react";
  import { ActivityIndicator, Image, Dimensions, StyleSheet } from "react-native";
  import useAuthContext from "../hooks/useAuthContext";
  
  export default function Login() {
  
    const {
      state,
      login,
      setUsername,
      setPassword
    } = useAuthContext();
  
    return (
        <Container style={styles.container}>  
          <Content contentContainerStyle={styles.content}>
            <Image
              source={require("../assets/Logo2.png")}
              style={styles.logo}
            />
            <Form style={styles.form}>
              <Item floatingLabel>
                <Label
                  style={{
                    paddingTop: 4,
                    textAlign: "center"
                  }}
                >
                  {" "}
                  username or email{" "}
                </Label>
                <Input
                  style={{ color: "white" }}
                  value={state.username}
                  onChangeText={(value) => setUsername(value)}
                />
              </Item>
              <Item floatingLabel>
                <Label
                  style={{
                    paddingTop: 4,
                    textAlign: "center"
                  }}
                >
                  {" "}
                  password{" "}
                </Label>
                <Input
                  style={{ color: "white" }}
                  onChangeText={(value) => setPassword(value)}
                  value={state.password}
                  secureTextEntry
                />
              </Item>
            </Form>
            <Button
              block
              style={{
                margin: 30,
                marginTop: 50,
                backgroundColor: "#222325",
                borderRadius: 20,
                height: 52,
              }}
              onPress={() => {
                login(state.username, state.password);
              }}
            >
              <Text
                style={{
                  backgroundColor: "#222325",
                  color: "#a4cf40",
                  fontSize: 30
                }}
              >
                {" "}
                LOGIN{" "}
              </Text>
            </Button>

            <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            marginBottom: 10,
            marginTop: 20
          }}
        //   onPress={todo}
        >
          Create an Account
        </Text>
  
            <ActivityIndicator
              size="large"
              color="#ffffff"
              animating={state.isAuthenticating}
            />
            {state.isError && <Text style={styles.errorLabel}>Login Failed.  Please try again.</Text>}
          </Content>
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
      alignItems: "center",
      justifyContent: "center"
    },
    logo: {
      marginTop: 50,
      height: 300,
      width: 380,
      resizeMode: 'stretch',
    },
    registerLogo: {
      height: deviceHeight / 4.2,
      width: deviceHeight / 4.2
    },
    form: {
      width: deviceWidth / 1.4,
      marginRight: 10,
      marginTop: 30,
      color: "white"
    },
    formLabel:{
      paddingTop: 4, 
      textAlign: "center"
    },
    errorLabel:{
        paddingTop: 4, 
        textAlign: "center",
        color: "red"
      },
    registerButton:{
      margin: 15, 
      marginTop: 50, 
      backgroundColor: "black" 
    },
    loginText:{
      textAlign:"center", 
      fontWeight: "bold",
      color: "white"
    },
    white:{
      color: 'white'
    },
    headerTitle:{
      color: 'white',
      width: deviceWidth / 1.5
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  
  
  