import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

import { colors } from "@/styles/colors";

const DEFAULT_CHANNEL = "default";

const NOTIFICATIONS_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
});

async function setupNotificationChannel() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
      name: "Notificações do Marketplace",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: colors["purple-base"],
    });
  }
}

interface ScheduleCartReminder {
  productId: number;
  productName: string;
  delayInMinutes: number;
}

async function scheduleCartReminder({
  productId,
  productName,
  delayInMinutes,
}: Readonly<ScheduleCartReminder>) {
  const hasPermission = await Notifications.requestPermissionsAsync();

  if (hasPermission.status !== "granted") return;

  await setupNotificationChannel();

  const notification = await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATIONS_IDS.CART_REMINDER,
    content: {
      title: "🛒 Você esqueceu algo no carrinho!",
      body: `O produto "${productName}" está esperando por você. Finalize sua compra agora!`,
      data: {
        type: "cart_reminder",
        productId: String(productId),
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes,
    },
  });

  return notification;
}

export const localNotificationsService = {
  scheduleCartReminder,
};
