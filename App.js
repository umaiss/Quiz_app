import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizPage from "./app/screen/QuizPage";
import Welcome from "./app/screen/Welcome";
import Result from "./app/screen/Result";
import { useEffect } from "react";
import BootSplash from "react-native-bootsplash";


const Stack = createNativeStackNavigator();
export default function App() {
    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
            console.log("BootSplash has been hidden successfully");
        });
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Quiz"
                    component={QuizPage}
                    options={{
                        title: "Questions",
                        headerStyle: {
                            backgroundColor: "#fac782",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Result"
                    component={Result}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}