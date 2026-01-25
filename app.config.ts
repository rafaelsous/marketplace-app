import "dotenv/config";

export default {
  expo: {
    android: {
      package: "com.rafaelsousa.marketplaceapp",
    },
    extra: {
      isPhysicalDevice: process.env.IS_PHYSICAL_DEVICE === "true",
    },
  },
};
