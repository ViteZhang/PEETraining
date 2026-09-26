import { StyleSheet, Text, View } from 'react-native';

interface PlaceholderScreenProps {
  title: string;
}

/** 空壳页面：页面内容在各自任务卡实现，样式在 T02 接入 ui-tokens。 */
export function PlaceholderScreen({ title }: PlaceholderScreenProps) {
  return (
    <View style={styles.container} accessibilityLabel={`${title}页面`}>
      <Text accessibilityRole="header">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
