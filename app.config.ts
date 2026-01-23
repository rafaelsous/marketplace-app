import "dotenv/config";

export default {
  expo: {
    extra: {
      isPhysicalDevice: process.env.IS_PHYSICAL_DEVICE === "true",
    },
  },
};
