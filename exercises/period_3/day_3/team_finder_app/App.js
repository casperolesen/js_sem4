import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import LoginInput from "./components/LoginInput";
import About from "./components/About";
import * as Location from "expo-location";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isAboutMode, setIsAboutMode] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [myMarker, setMyMarker] = useState();
  const [newMarkers, setNewMarkers] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let marker = {
        latlng: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        title: "Me",
      };
      setMyMarker(marker);
    })();
  }, []);

  const cancelLogin = () => {
    setIsLoginMode(false);
  };

  const cancelAbout = () => {
    setIsAboutMode(false);
  };

  const login = async (username, password, distance) => {
    try {
      let response = await fetch(
        "https://js.lecasper.dk/api/game/nearbyplayers",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: username,
            password: password,
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            distance: distance,
          }),
        }
      );
      let json = await response.json();
      console.log(json);
      //lat og lon byttet om her, tror det er pga det med rækkefølge, den lavede markers på forkerte steder ellers.
      let newMarkers = await json.map((obj) => ({
        latlng: {
          latitude: obj.lat,
          longitude: obj.lon,
        },
        title: obj.name,
      }));

      setNewMarkers(newMarkers);
      setIsLoginMode(false);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setErrorMsg(error.msg);
    }
  };

  const renderMyMarker = () => {
    if (myMarker) {
      return (
        <Marker key="me" coordinate={myMarker.latlng} title={myMarker.title} />
      );
    }
  };

  const renderNewMarkers = () => {
    if (newMarkers) {
      return newMarkers.map((marker, index) => (
        <Marker key={index} coordinate={marker.latlng} title={marker.title} />
      ));
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}>
        {renderNewMarkers()}
        {renderMyMarker()}
      </MapView>
      <LoginInput
        visible={isLoginMode}
        onCancel={cancelLogin}
        onLogin={login}
      />
      <About visible={isAboutMode} onBack={cancelAbout} />
      <View style={styles.buttonContainer}>
        <Button title="About" onPress={() => setIsAboutMode(true)} />
        {isLoggedIn ? null : (
          <Button title="Login" onPress={() => setIsLoginMode(true)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    width: "60%",
  },
});
