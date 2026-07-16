import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as icons from "../../packages/kivex-react-native/dist/index.js";

export default function App() {

  const iconData = Object.entries(icons);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>All icons ({iconData.length}) for kivex-react-native</Text>

      <View style={styles.iconsContainer}>
        {iconData.map(([name, Icon]) => (
          <View style={styles.iconBox} key={name}>

            <Icon size={32} color="#000" /> 
            <Text style={styles.iconName} numberOfLines={1}>
              {name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  iconBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  iconName: {
    fontSize: 11,
    marginTop: 8,
    textAlign: 'center',
    color: '#555',
  },
});