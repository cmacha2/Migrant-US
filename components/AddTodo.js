import * as React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button } from "react-native";
import MyInput from "./MyInput";
import { View } from '../components/theme/Themed'
import MyText from "./MyText";
import { createTodo } from "../graphql/mutations";

export default function AddTodo({ setTodos }) {
  const [name, setName] = React.useState("");

  const handleSubmit = async () => {
    const { data } = await API.graphql(
      graphqlOperation(createTodo, {
        input: {
          name,
        },
      })
    );
    setName("");
    setTodos((prevTodos) => [...prevTodos, data.createTodo]);
    console.log("Todo created!");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <MyInput label={"Create todo"} onChangeText={setName} value={name} />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}