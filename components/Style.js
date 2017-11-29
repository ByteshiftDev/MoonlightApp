import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    myView: {
      marginTop: 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },

    myText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 300,
    },

    homeView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#212121',
    },

    homeText: {
      fontFamily: 'MontserratBold',
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#FAFCED',
    },

    homeLogo: {
      color: '#FAFCED',
      textAlign: 'center',
      fontSize: 80,
    },

    homeButton: {
      fontFamily: 'Montserrat',
      padding: 15,
      backgroundColor: '#FAFCED',
      color: '#212121',
      fontSize: 12,
      letterSpacing: 0.1,
    }
  });

export default Style;
