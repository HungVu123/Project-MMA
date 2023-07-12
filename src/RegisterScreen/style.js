import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    images: {
        height: 72,
        width: 72,
        borderRadius: 16
    },
    header: {
        width: "100%",
        height: 200,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 700,
        marginTop: 10,
        marginBottom: 5
    },
    subtitle: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 400,
        color: "#9098B1",
    },
    registerForm: {
        width: "100%",
        textAlign: 'center',
        padding: 15,
    },
  
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingVertical: 5,
        marginVertical: 5,
    },
    icon: {
        marginRight: 10,
        color: '#888',
        fontSize: 20
    },
    input: {
        flex: 1,
    },
    iconPassword: {
        fontSize: 20,
        marginLeft: 5
    },  



    //button
    button: {
        marginVertical: 10,
        backgroundColor: '#52D4D0',
        paddingVertical: 15,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    registerContainer: {
        flexDirection: 'row',
        fontSize: 12,
        fontWeight: 400,
        letterSpacing: 1,
       justifyContent: 'center',
       marginTop: 4
    },
    text: {
        color: '#52D4D0',
        fontSize: 12,
        fontWeight: 'bold',
    },
})

export default styles;