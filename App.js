import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import AuthContextProvider from "./store/auth-context";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "Kullancı Girişi" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          headerTitle: "Kullanıcı Kayıt",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <NormalStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
