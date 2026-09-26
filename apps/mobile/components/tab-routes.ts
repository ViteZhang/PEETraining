/** 底部导航 4 个 Tab（PRD 4；路由见技术规格 8.1）。 */
export const TAB_ROUTES = [
  { name: 'today', title: '今日' },
  { name: 'knowledge', title: '知识点' },
  { name: 'practice', title: '训练' },
  { name: 'me', title: '我的' },
] as const;

export type TabRouteName = (typeof TAB_ROUTES)[number]['name'];
