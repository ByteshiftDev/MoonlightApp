import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  myView: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  myText: {
    fontSize: 15,
    textAlign: "center",
    margin: 10
  },

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
