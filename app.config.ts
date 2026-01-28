import "dotenv/config";

export default {
  expo: {
    android: {
      scheme: "marketplace",
      package: "com.rafaelsousa.marketplaceapp",
    },
    extra: {
      isPhysicalDevice: process.env.IS_PHYSICAL_DEVICE === "true",
    },
  },
};
