import { StyleSheet } from "react-native";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundPrimary,
    },

    logo: {
        width: '95%',
        height: 200,
        marginTop: getStatusBarHeight() + 10,
        marginLeft: 10
    },

    title: {
        fontFamily: theme.fonts.textHeading,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: theme.colors.normalText,   
        marginTop: 20
    },

    serviceCard: {
        borderWidth: 1,
        borderColor: '#fff', 
        width: '100%',
        marginTop: 50,
        alignItems: 'center'
    },

    serviceTitle: {
        fontFamily: theme.fonts.textHeading,
        color: theme.colors.fields,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },

    serviceDescription: {
        fontFamily: theme.fonts.textNormal,
        color: theme.colors.fields,
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20
    },

    buttonBox: {
        marginRight: 30,
        paddingBottom: 15
    }, 
    
    totalPriceContainer: {
        width: '100%',
        height: 80,
        paddingBottom: getBottomSpace(),
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#fff',
        flexDirection: 'row'
    },

    totalValue: {
        color: theme.colors.fields,
        fontFamily: theme.fonts.textButton,
        marginLeft: 10
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundPrimary
    },

    barberPic: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 50,
    },

    barberName: {
        fontFamily: theme.fonts.textHeading,
        fontSize: 18,
        color: theme.colors.fields,
        marginTop: 20
    }


})