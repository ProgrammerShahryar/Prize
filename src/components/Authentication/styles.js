import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F0F8FF',
  },


  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },




  input: {
    height: 50,
    borderColor: '#B0C4DE',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },


  
  error: {
    color: 'red',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default commonStyles;
