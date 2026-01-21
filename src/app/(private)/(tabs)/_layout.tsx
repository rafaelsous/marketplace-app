import { Tabs } from "expo-router";

import { colors } from "@/styles/colors";
import { AppIcon } from "@/shared/components/AppIcon";
import { useCartStore } from "@/shared/store/cart-store";

export default function TabsLayout() {
  const { products } = useCartStore();

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
            <AppIcon name="CartLarge2Outline" size={28} color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
          tabBarBadge: products.length > 0 ? products.length : undefined,
          tabBarBadgeStyle: {
            position: "relative",
            top: -8,
            left: 13,
            color: colors.white,
            backgroundColor: colors["blue-dark"],
          },
        }}
      />
    </Tabs>
  );
}
