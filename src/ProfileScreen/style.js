import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  scrollview: {
    height: "100%",
    width: "100%",
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    marginTop: 30
  },
  containImageAva: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageAva: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  containName: {
    width: "60%",
    height: "100%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  nameMail: {
    color: "#9098B1",
    marginTop: 10,
  },
  containProfile: {
    width: "100%",
    height: 700,
    marginTop: 40
  },
  containItem: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
  },
  containIcon: {
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconItemHeight: {
    width: 18,
    height: 25,
  },
  iconItemWidth: {
    width: 24,
    height: 20,
  },
  iconUpdate: {
    width: 8,
    height: 15,
  },
  containHeaderItem: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containContentItem: {
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerItem: {
    fontWeight: "bold",
    fontSize: 15,
  },
  contentItem: {
    fontSize: 15,
    color: "#9098B1",
  },
});
export default styles;
