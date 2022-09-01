import { StatusBar } from "expo-status-bar";
import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native-web";

const statusBarHeight = StatusBar ? StatusBar.currentHeight + 22 : 64;

export function Title(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity activeOpacity={0.7}>
                    <CaretLeft size={20} color="#FFF"/>
                </TouchableOpacity>
                <Text className="absolute left-[30%] transform -translate-x-1/2">
                    <Text style={styles.header1}>Bandung, </Text>
                    <Text style={styles.header2}>Indonesia</Text>
                </Text>
            </View>    
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4A73FC',
        paddingTop: 28,
        paddingStart: 22,
        paddingEnd: 22,
        paddingBottom: 35,
    },
    content:{
        display: 'flex',
        width: '100%', 
        textAlign: 'center',
        flexDirection: 'row',
 
    },
    header:{
        position: 'absolute',
        left: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#F8FAFD',
    },
    header1:{
        fontSize: 18,
        fontWeight: 500,
        color: '#F8FAFD',
    },
    header2:{
        fontSize: 15,
        color: '#F8FAFD',
    },
});