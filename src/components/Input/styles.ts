import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";


export const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.colors.fields,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '80%',
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.activeTint,
        marginBottom: 15,
    }
})