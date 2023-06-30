import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home";
import { SvgCamera, SvgHome, SvgPerson } from "../components/CustomIcons";
import Login from "../pages/Login";
import Onboarding from "../pages/Onboarding";

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#0A0A0C', borderTopColor: "transparent" },
            tabBarLabelStyle: { display: "none" },
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#45D9A6',
        }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => <SvgHome strokePath={color} size={size} /> }} />
            <Tab.Screen name="Login" component={Login} options={{ tabBarIcon: ({ color, size }) => <SvgCamera strokeG={color} size={size} /> }} />
            <Tab.Screen name="Onboarding" component={Onboarding} options={{ tabBarIcon: ({ color, size }) => <SvgPerson strokePath={color} size={size} /> }} />
        </Tab.Navigator>
    )
}