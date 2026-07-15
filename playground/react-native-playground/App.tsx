import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Home, Heart, Angry, Chat, Settings, User, Search, Plus, Star, ArrowLeft} from 'kivex-react-native';

const { width } = Dimensions.get('window');

const iconList = [
  { name: 'Home', Icon: Home },
  { name: 'Heart', Icon: Heart },
  { name: 'Angry', Icon: Angry },
  { name: 'Chat', Icon: Chat },
  { name: 'Settings', Icon: Settings },
  { name: 'User', Icon: User },
  { name: 'Search', Icon: Search },
  { name: 'Plus', Icon: Plus },
  { name: 'Star', Icon: Star },
  { name: 'ArrowLeft', Icon: ArrowLeft },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Kivex Icons</Text>
          <Text style={styles.subtitle}>Kivex Icons playground for React Native</Text>
        </View>
        <FlatList
          data={iconList}
          numColumns={4}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <View style={styles.iconCard}>
              <item.Icon size={40} color="#ffffff" strokeWidth={2} />
              <Text style={styles.iconName}>{item.name}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#a0aec0',
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  iconCard: {
    width: (Dimensions.get('window').width - 48) / 4,
    aspectRatio: 1,
    backgroundColor: '#2d2d44',
    borderRadius: 12,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  iconName: {
    color: '#a0aec0',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
    fontWeight: 600
  },
});