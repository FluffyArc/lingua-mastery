import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="ds-screen items-center justify-center px-[28px]">
      <Text className="font-poppins__bold text-[34px] leading-[42px] text-[#111735]">
        Codeventure
      </Text>
      <Text className="ds-type__body-md mt-3 text-center text-text-secondary">
        The fun is coming soon.
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-8 h-[58px] w-full max-w-[336px] flex-row items-center justify-center rounded-[18px] bg-[#6245F6]">
          <Text className="font-poppins__semibold text-[17px] leading-[24px] text-white">
            Open Onboarding
          </Text>
          <Feather
            name="arrow-right"
            size={22}
            color="#FFFFFF"
            style={{ marginLeft: 10 }}
          />
        </Pressable>
      </Link>
    </View>
  );
}
