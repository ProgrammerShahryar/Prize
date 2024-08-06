import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  aOne: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
  },

  errorMessage: {
    container: {
      backgroundColor: '#ffebee',
      padding: 12,
      marginBottom: 15,
      borderColor: '#f44336',
      borderWidth: 1,
      borderLeftWidth: 8,
      margin: 10, 
      borderRadius: 10, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 0.3, 
      shadowRadius: 5, 
      elevation: 6, 
    },
    label: {
      color: '#f44336',
      fontSize: 14,
      fontWeight: 'bold',
    },
    text: {
      color: '#f44336',
      fontSize: 16,
    },
  },


  aTwo: {
    alignSelf: 'stretch',
    backgroundColor: '#4CAF50',
    padding: 15,
    marginBottom: 15, 
    margin: 10, 
    borderRadius: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 6, 
  },

  
  aImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },



  textbox: {
    backgroundColor: '#f0f0f0',
    borderWidth: 0,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderRadius: 10,
  },
});

export default styles;
