import { StyleSheet } from "react-native";

export default StyleSheet.create({
    aOne: {
        flex: 1,
        backgroundColor: '#ffffff', 
        paddingTop: 10,
    },
    aTwo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#212121',
    },

    aHuge: {
        container: {
            marginTop: 20,
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333',
        },
        text: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#555',
            marginTop: 5,
        },
    },

    
    aThree: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#757575',
        marginBottom: 10,
    },

    sBig: {
        padding:
         20,
        backgroundColor: '#4CAF50', 
        borderRadius: 10, 
        margin:
         10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.5, 
        shadowRadius:
         10, 
        elevation: 6,
    },

    sChange: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
        },
        label: {
            marginLeft: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#424242',
        },
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain', 
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});
