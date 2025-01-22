import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className=" my-10 font-rubik text-3xl">Welcome to my Mobile App</Text>
      <Link className=" font-rubik-medium text-6xl" href="/sign-in">Sing In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>



  );
}

