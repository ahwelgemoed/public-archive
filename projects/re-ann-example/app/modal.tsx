import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { Text, View } from "../components/Themed";
import Animated, {
  FadeIn,
  FadeInDown,
  SlideInDown,
} from "react-native-reanimated";
import SearchInput from "../components/SearchInut";
import { useRouter } from "expo-router";
import { useInput } from "../utils/SearchPro";
import { FontAwesome } from "@expo/vector-icons";

export default function ModalScreen() {
  const router = useRouter();
  const { searchResults } = useInput();
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View
        style={{
          width: width - 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchInput />
        <Animated.View
          entering={FadeIn.duration(200).delay(100)}
          exiting={FadeInDown.duration(400)}
          style={{
            zIndex: 100,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              alignItems: "center",
              backgroundColor: "#dedede",
            }}
          >
            <FontAwesome
              size={16}
              name="search"
              color={"green"}
              style={{
                padding: 10,
              }}
            />
          </Pressable>
          <Pressable
            onPress={() => router.back()}
            style={{
              alignItems: "center",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: "#dedede",
            }}
          >
            <FontAwesome
              size={16}
              name="close"
              color={"red"}
              style={{
                padding: 10,
              }}
            />
          </Pressable>
        </Animated.View>
      </View>

      <Animated.View
        style={{
          width: "100%",
        }}
        entering={SlideInDown.duration(300)}
        exiting={FadeInDown.duration(300)}
      >
        <FlatList
          data={searchResults}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginVertical: 10,
                  padding: 10,
                  height: 100,
                  backgroundColor: "#efefef",
                  borderRadius: 10,
                }}
              >
                <Text>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </Animated.View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    margin: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});
