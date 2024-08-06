import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { padding: 10, flexDirection: "row" },
  image: { width: 100, height: 100, borderRadius: 50 },
  title: { fontWeight: "bold", fontSize: 27 },
  artist: {},
  year: { marginLeft: 10, color: "gray", fontSize: 12 },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  info_container: { flexDirection: "row", flex: 1, alignItems: "center" },
  soldout_container: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: { color: "red" },
  content_container: { flexDirection: "row" },
});
