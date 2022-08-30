import { DotsThree, List } from "phosphor-react-native";
import { View } from "react-native-web";

export function Header(){
    return(
        <View className="flex flex-row justify-between p-4">
            <List size={32} color="#100f0f" />
            <DotsThree size={32} color="#100f0f" />
        </View>
    )
}
