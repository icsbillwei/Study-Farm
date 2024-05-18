import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack screenOptions={{contentStyle: {backgroundColor: "#C0D470"}}}>
      <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }}/>
      <Stack.Screen name="study" options={{ headerShown: false, animation: 'none' }}/>
      <Stack.Screen name="study/timeline" options={{ headerShown: false, animation: 'none' }}/>
      <Stack.Screen name="study/timelinesetting" options={{ headerShown: false, animation: 'none' }}/>
      <Stack.Screen name="farm" options={{ headerShown: false, animation: 'none' }}/>
    </Stack>
  );
}


