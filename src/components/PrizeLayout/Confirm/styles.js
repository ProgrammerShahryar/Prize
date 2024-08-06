import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  aPop: {
    backgroundColor: '#4CAF50',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    padding: 12,
    borderRadius: 10,
    width:
     150,
    height: 120,
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },


  sButton: {
    flexDirection: 'row',
    justifyContent:
     'center',
    marginTop: 20,
  },



  aHit: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor:
     '#FFC107',
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 8,
  },


  aPopTwo: {
    width: '80%',
    maxHeight: '70%',
    alignSelf: 'center',
    marginTop:
     '70%',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    borderRadius: 20,
    elevation: 10,
  },



  Logo: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },



  aLayout: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#4CAF50',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 0,
    elevation: 2,
  },



  aInside: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#FF9800',
    textAlign: 'center',
  },



  sButtonArea: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default styles;
