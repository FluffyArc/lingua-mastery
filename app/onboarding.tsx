import { Feather } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View className="relative flex-1 w-full max-w-[410px] self-center px-[31px] pb-[28px] pt-[8px]">
        <View className="ml-[38px] h-[92px] flex-row items-center">
          <View className="h-[92px] w-[92px] overflow-hidden">
            <Image
              className="absolute -left-[40px] -top-[15px] h-[127px] w-[150px]"
              source={images.mascotLogo}
              resizeMode="contain"
            />
          </View>

          <Text className="font-poppins__bold text-[22px] leading-[37px] text-[#111735]">
            Codeventure
          </Text>
        </View>

        <View className="ml-[7px] mt-[43px]">
          <Text className="font-poppins__bold text-[30px] leading-[38px] text-[#111735]">
            Your AI Programming{"\n"}
            <Text className="text-[#6043F6]">teacher.</Text>
          </Text>

          <Text className="mt-[1px] w-[265px] font-poppins__medium text-[15px] leading-[19px] text-[#7A80A0]">
            Real case project, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="mt-[50px] h-[308px] items-center justify-center">
          <Image
            className="h-[347px] w-[520px]"
            source={images.mascotWelcome}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.86}
          className="absolute bottom-[28px] left-[31px] right-[31px] h-[78px] flex-row items-center justify-center rounded-[18px] bg-[#6245F6] shadow-lg shadow-[#5B3BF6]"
          onPress={() => router.replace("/")}
        >
          <Text className="font-poppins__semibold text-[21px] leading-[28px] text-white">
            Get Started
          </Text>
          <View className="absolute right-[31px]">
            <Feather name="chevron-right" size={31} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
