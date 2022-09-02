import { DotsThree, List } from "phosphor-react-native";
import { View } from "react-native";

export function Topbar(){
    return(
        <View className="flex flex-row justify-between px-[7.5%] py-4">
            <List size={32} color="#100f0f" />
            <DotsThree size={32} color="#100f0f" />
        </View>
    )
}
