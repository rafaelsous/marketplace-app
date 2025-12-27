import { Pressable, TextInput, View } from "react-native";
import { SolarIcon } from "react-native-solar-icons";

import { appInputVariants } from "./input.variants";

export function AppInput() {
  const styles = appInputVariants();

  return (
    <View>
      <Pressable>
        <SolarIcon
          name="KeyMinimalisticSquare2"
          size={24}
          color="blue"
          type="outline"
        />

        <TextInput />
      </Pressable>
    </View>
  );
}
