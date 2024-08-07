import React from "react";
import { Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/searchBar";

export default function Index() {
  const renderSong = ({ item }) => <SongCard song={item}></SongCard>;
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <FlatList
        keyExtractor={(item) => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  seperator: { borderWidth: 1, borderColor: "#e0e0e0" },
});
