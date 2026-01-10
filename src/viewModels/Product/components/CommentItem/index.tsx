import { Image, Text, View } from "react-native";

import { colors } from "@/styles/colors";

import { useUserStore } from "@/shared/store/user-store";
import { ProductComment } from "@/shared/interfaces/product-comment";

import { AppIcon } from "@/shared/components/AppIcon";

interface CommentItemProps {
  comment: ProductComment;
}

export function CommentItem({ comment }: Readonly<CommentItemProps>) {
  const { user } = useUserStore();

  const isCurrentUser = user?.id === comment.user.id;

  return (
    <View className="bg-white p-2 pr-3 rounded-lg gap-2 shadow-sm">
      <View className="flex-row items-center justify-between gap-2">
        <View className="w-8 h-8 bg-gray-100 rounded-md overflow-hidden">
          {comment.user.avatar.url &&
          comment.user.avatar.url.trim().length > 0 ? (
            <Image
              source={{ uri: comment.user.avatar.url }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            <View className="w-full h-full items-center justify-center">
              <AppIcon name="UserBold" size={20} color={colors.gray[300]} />
            </View>
          )}
        </View>

        <View className="flex-1 flex-row items-center gap-2">
          <Text className="text-base text-gray-500 font-medium">
            {comment.user.name}
          </Text>

          {isCurrentUser && (
            <View className="px-2 py-1 gap-2 bg-blue-base rounded-full">
              <Text className="text-xs text-white font-bold uppercase">
                Você
              </Text>
            </View>
          )}
        </View>

        <View className="flex-row items-center gap-1">
          <AppIcon name="StarBold" size={20} color={colors["blue-base"]} />

          <Text className="text-sm font-bold text-gray-500">
            {comment.user.rating.value.toFixed(1)}{" "}
            <Text className="text-xs text-gray-400 font-semibold">/ 5</Text>
          </Text>
        </View>
      </View>

      <Text>{comment.content}</Text>
    </View>
  );
}
