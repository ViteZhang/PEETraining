import { renderRouter, screen } from 'expo-router/testing-library';

import TabsLayout from '../app/(tabs)/_layout';
import KnowledgeScreen from '../app/(tabs)/knowledge';
import MeScreen from '../app/(tabs)/me';
import PracticeScreen from '../app/(tabs)/practice';
import TodayScreen from '../app/(tabs)/today';
import Index from '../app/index';
import { TAB_ROUTES } from '../components/tab-routes';

const routes = {
  index: Index,
  '(tabs)/_layout': TabsLayout,
  '(tabs)/today': TodayScreen,
  '(tabs)/knowledge': KnowledgeScreen,
  '(tabs)/practice': PracticeScreen,
  '(tabs)/me': MeScreen,
};

describe('底部导航', () => {
  it('定义了 PRD 要求的四个 Tab，顺序为 今日 / 知识点 / 训练 / 我的', () => {
    expect(TAB_ROUTES.map((t) => t.title)).toEqual(['今日', '知识点', '训练', '我的']);
  });

  it('启动后进入今日，并显示四个 Tab', async () => {
    const view = renderRouter(routes, { initialUrl: '/' });

    expect(await screen.findByLabelText('今日页面')).toBeTruthy();
    expect(view.getPathname()).toBe('/today');
    for (const title of ['今日', '知识点', '训练', '我的']) {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    }
  });

  it('每个 Tab 路由都能打开对应页面', async () => {
    for (const tab of TAB_ROUTES) {
      const view = renderRouter(routes, { initialUrl: `/${tab.name}` });
      expect(await screen.findByLabelText(`${tab.title}页面`)).toBeTruthy();
      expect(view.getPathname()).toBe(`/${tab.name}`);
      view.unmount();
    }
  });
});
