import { StyleSheet, View } from "react-native-web";
import { Days } from "../componentes/Days";
import { Title } from "../componentes/Title";

export function Week() {
    return(
        <View style={styles.container}>
            <Title />
            <Days />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4A73FC',
    }
  });