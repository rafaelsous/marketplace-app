import { Tabs } from "expo-router";

import { colors } from "@/styles/colors";
import { AppIcon } from "@/shared/components/AppIcon";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 110,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Produtos",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <AppIcon name="Shop2Outline" size={20} color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Pedidos",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <AppIcon name="ClipboardTextOutline" size={20} color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <AppIcon name="CartLarge2Outline" size={25} color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
        }}
      />
    </Tabs>
  );
}
