import * as React from "react";
import MyText from "../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, TextInput, useColorScheme } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/colors";
import { createPost } from "../src/utils/postsOperations";
import { ScrollView } from "../components/theme/Themed";
import { addPostReducer } from "../src/features/posts";
import MyButton from "../components/MyButton";

export default function NewPost() {
  const user = useSelector((state) => state.user);
  const [postContent, setPostContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useColorScheme();
  const charsRemaining = 600 - postContent.length;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          style={styles.postButton}
          onPress={onPublish}
          title={isLoading ? "Publishing" : "Publish"}
          disabled={postContent.trim().length === 0 || isLoading}
        />
      ),
    });
  }, [postContent, isLoading]);

  async function onPublish() {
    try {
      setIsLoading(true);
      const { data } = await createPost(user.id, postContent);
      dispatch(addPostReducer(data.createPost));
      setIsLoading(false);
      setPostContent("");
      navigation.navigate("Home");
    } catch (e) {
      setIsLoading(false);
      console.log(e, "error publishing post");
    }
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingVertical: 24 }}
    >
      <MyText style={{ fontWeight: "600" }}>What are you thinking?</MyText>
      <TextInput
        value={postContent}
        onChangeText={setPostContent}
        maxLength={600}
        multiline
        style={[styles.input, { color: Colors[theme].text }]}
        placeholderTextColor={Colors[theme].text + "60"}
        placeholder={"Write your post here..."}
      />
      <MyText
        style={[
          { textAlign: "right" },
          charsRemaining < 150 && charsRemaining > 30
            ? { color: "orange" }
            : charsRemaining <= 30
            ? { color: "red" }
            : null,
        ]}
      >
        {charsRemaining} Characteres remaining
      </MyText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
    fontWeight: "500",
    maxHeight: 140,
    marginVertical: 20,
  },
  postButton: {
    width: 'auto',
    marginRight: 10,
    height: 'auto',
    fontSize: 12,
  },
});