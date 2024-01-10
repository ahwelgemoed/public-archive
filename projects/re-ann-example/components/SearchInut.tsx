import { StyleSheet, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useInput } from "../utils/SearchPro";
import Animated, {
  SharedTransition,
  withTiming,
} from "react-native-reanimated";
import { useRouter, useSegments } from "expo-router";
export const searchInputTransitionName = "searchInputTag";

export const searchInputTransition = SharedTransition.custom((values) => {
  "worklet";
  return {
    width: withTiming(values.targetWidth, {
      duration: 250,
    }),
    originX: withTiming(values.targetOriginX, {
      duration: 250,
    }),
    originY: withTiming(values.targetOriginY, {
      duration: 250,
    }),
  };
});

const SearchInput = () => {
  const txtRef = React.useRef<TextInput>(null);
  const router = useRouter();
  const segments = useSegments(); // Might be a better way to do this

  const { searchText, updateSearchText } = useInput();
  const isOnModal = (segments as any).includes("modal"); // TODO :: Why is TS complaining about this?

  useEffect(() => {
    // TODO :: Seems like Slack is on a 500ms delay before focusing the input. feels hacky investigate  this.
    setTimeout(() => {
      txtRef.current?.focus();
    }, 500);

    return () => {
      txtRef.current?.blur();
    };
  }, []);

  return (
    <Animated.View
      sharedTransitionTag={searchInputTransitionName}
      sharedTransitionStyle={searchInputTransition}
      style={[styles.input]}
    >
      <TextInput
        ref={txtRef}
        editable={isOnModal}
        contextMenuHidden={!isOnModal}
        placeholderTextColor={"gray"}
        placeholder="Search ..."
        onChangeText={(text) => {
          updateSearchText(text);
        }}
        onPressIn={() => {
          if (!isOnModal) {
            router.push("/modal");
          }
        }}
        value={searchText}
      />
    </Animated.View>
  );
};

export default SearchInput;

export const searchInputStyle = {
  backgroundColor: "#e8e8e8",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  padding: 10,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  input: {
    ...searchInputStyle,
    flexGrow: 1,
  },
});
