import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  // Artist Detail Screen Styles
  artistDetailView: {
    flex: 1,
    //marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  test2: {
    flex: 2,
    //justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "blue"
  },

  test3: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#7FFFD4"
  },

  box: {
    backgroundColor: "steelblue",
    padding: 100,
    margin: 10
  },

  myText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },

  // Home Screen Styles
  homeView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#212121"
  },

  logoView: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212121"
  },

  homeLogo: {
    flex: 0.9,
    aspectRatio: 1.0,
    resizeMode: "contain"
  },

  homeButton: {
    marginTop: 20,
    fontFamily: "Montserrat",
    padding: 15,
    backgroundColor: "#FAFCED",
    color: "#212121",
    fontSize: 12,
    letterSpacing: 0.1
  }
});

export default Style;
