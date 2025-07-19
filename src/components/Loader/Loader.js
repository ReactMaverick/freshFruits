
import { ActivityIndicator, View } from "react-native";
import { styles } from "./Style";
import { colors } from "../../constants/colors";
import { Text } from "react-native-elements";

export default function Loader({text}) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.PrimaryColor} />
            {/* <Ctext>{text}</Ctext> */}
        </View>
    );
}