import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

import { colors } from "@/styles/colors";

const DEFAULT_CHANNEL = "default";

const NOTIFICATIONS_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
};

const DEEP_LINK = "marketplace://";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: false,
    shouldShowList: true,
  }),
});

async function requestPermissions() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  return finalStatus === "granted";
}

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

interface ScheduleProductParams {
  productId: number;
  productName: string;
  delayInMinutes: number;
}

async function scheduleCartReminder({
  productId,
  productName,
  delayInMinutes,
}: Readonly<ScheduleProductParams>) {
  const hasPermission = await requestPermissions();

  if (!hasPermission) {
    console.log("[LocalNotifications] Permission not granted");
    return;
  }

  await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATIONS_IDS.CART_REMINDER,
    content: {
      title: "🛒 Você esqueceu algo no carrinho!",
      body: `O produto "${productName}" está esperando por você. Finalize sua compra agora!`,
      data: {
        type: "cart_reminder",
        productId: String(productId),
        deepLink: `${DEEP_LINK}cart`,
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
      // seconds: 5,
    },
  });
}

async function scheduleFeedbackNotification({
  productId,
  productName,
  delayInMinutes,
}: ScheduleProductParams) {
  const hasPermission = await requestPermissions();

  if (!hasPermission) {
    console.log("[LocalNotifications] Permission not granted");
    return;
  }

  await Notifications.scheduleNotificationAsync({
    identifier: `${NOTIFICATIONS_IDS.PURCHASE_FEEDBACK}-${productId}`,
    content: {
      title: "⭐ Como foi sua compra?",
      body: `Você realizou o pedido do produto "${productName}". Envie um feedback do que achou do produto!`,
      data: {
        type: "purchase_feedback",
        productId: String(productId),
        deepLink: `${DEEP_LINK}product/${productId}`,
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
      // seconds: 5,
    },
  });
}

export const localNotificationsService = {
  requestPermissions,
  scheduleCartReminder,
  setupNotificationChannel,
  scheduleFeedbackNotification,
};
