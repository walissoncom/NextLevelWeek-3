import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";

import mapMarker from "./src/images/map-marker.png";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -33.8568456,
          longitude: 151.2145049,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.88
          }}
          coordinate={{
            latitude: -33.8568456,
            longitude: 151.2145049
          }}
        >
          <Callout
            tooltip={true}
            onPress={() => {
              alert("Marker pressed");
            }}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Opera House</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center"
  },
  calloutText: {
    color: "#0089a5",
    fontSize: 14
  }
});
