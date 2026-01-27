import { useEffect } from "react";

import { localNotificationsService } from "../services/local-notifications.service";

export function useNotifications() {
  useEffect(() => {
    localNotificationsService.requestPermissions();
    localNotificationsService.setupNotificationChannel();
  }, []);

  return {};
}
