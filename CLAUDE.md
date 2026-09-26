# 刷题精灵 · 项目上下文

考研专业课 AI 刷题 App。帮考生把专业课资料变成可练、可测、可追踪的知识体系。
首期试点：海南大学 · 中国语言文学（预设路径）；其他院校专业上传资料生成专属知识库（自建路径）。

## 应用标识
- App 名称（暂定）：考研Training
- iOS Bundle ID（暂定）：peetraining.dreamerlab.cn；Android 包名待定
- 工作区包名前缀：@peetraining/*（如 @peetraining/shared、@peetraining/rules）
- EAS 账号 / 组织：待补充

## 依据文档（有冲突时：业务规则以 PRD 为准，技术实现以技术规格为准）
- docs/prd.md            产品需求（功能、规则、商业化、指标）
- docs/tech-spec.md      技术规格（架构、数据模型、接口、AI 层、算法）
- docs/construction.md   施工文档（任务卡与验收）
- docs/design/INDEX.md   视觉稿索引：页面编号 → HTML 源文件
- docs/design/NOTES.md   每个页面的交互说明
- docs/design/*.dc.html  每个页面的视觉稿源码（390×844，内联样式）。读它获取布局、文案、颜色；
                         不要照搬 HTML，用 ui-tokens 和基础组件以 React Native 重写；
                         support.js 不在仓库，{{}} 模板的选项与文案看文件内 <script> 数据
- docs/open-questions.md 文档审阅清单：矛盾、缺失与团队结论（未决项不得自行发明规则）

## 技术栈
- 客户端：Expo（React Native）+ TypeScript + Expo Router；TanStack Query + Zustand + MMKV
- 后端：Supabase（Postgres + RLS、Storage、Edge Functions）
- 任务：apps/worker（Node 22 LTS + TS），队列 pgmq：q_interactive / q_batch
- AI：只通过 packages/ai 调用，按「能力」调用，不直接调用任何模型 SDK

## 目录（运行环境统一 Node 22 LTS，CI 用 GitHub Actions）
- apps/mobile        App
- apps/worker        异步任务（解析、建库、批改、推送、定时任务）
- supabase/          migrations（SQL，唯一的改库方式）、functions、seed
- packages/shared    类型、zod schema、错误码
- packages/rules     掌握度 / 复习 / 今日计划等纯函数（客户端与服务端共用）
- packages/ai        AI 能力：prompt.md + schema.ts + config.ts + examples/
- packages/ui-tokens 设计令牌
- evals/             AI 评测集与脚本

## 常用命令
- pnpm install / pnpm typecheck / pnpm lint / pnpm test
- pnpm --filter mobile start         启动 App（需 dev build）
- pnpm --filter worker dev           启动 Worker
- supabase db reset                  从零重建本地库并导入 seed
- pnpm eval <capability>             跑 AI 评测（改 packages/ai 后必须跑）

## 必须遵守
1. 一次只做一张任务卡；先输出实现计划等确认，再动手；不改卡片范围外的代码
2. 改数据库只写新的 migration，不改已合并的 migration，不在控制台手改
3. 每张新表都开 RLS；掌握度、额度、会员等受控字段只能由服务端写
4. 客户端永远不持有模型、短信、支付密钥；AI 调用只在 Worker / Edge Functions
5. 业务规则只写在 packages/rules，参数读 rule_params，不在页面里硬编码
6. AI 输出必须通过 zod 校验；批改结果还要做分值与引用原文的二次校验
7. 改 packages/ai 的提示词或模型配置后必须跑 pnpm eval，低于门槛不得合并
8. UI 只用 ui-tokens 与基础组件，不写裸色值；可点区域 ≥ 44×44
9. 每个页面都要处理：加载、空、错误、AI 生成中、额度不足（如适用）
10. 主观题、作文、整卷的作答每 5 秒存 MMKV 草稿；所有写接口带 idempotency_key
11. 日志不记录用户资料原文与作答原文
12. 不确定的地方先问，不要自行发明业务规则

## 约定
- 代码标识符用英文，界面文案用简体中文；文案以视觉稿为准
- 函数返回 { ok, data } 或 { ok: false, error: { code, message, detail } }
- 时间统一存 UTC，业务日期（今日计划、额度周期）按北京时间计算
- 页面放 apps/mobile/app，按 PRD 模块分组；复用组件放 apps/mobile/components
- 提交信息格式：T26: 主观题批改结果页
- 一张任务卡一个分支，分支名 card/T01-<英文短名>；验收通过再合并
- 真机验收由团队完成：每张卡结束时列出真机验证步骤
- 文档里未决的问题见 docs/open-questions.md，已决结论先改进文档再实现

## 完成一张卡前自检
- [ ] pnpm typecheck && pnpm test 通过
- [ ] 对照卡片「验收」逐条自检并写出结果
- [ ] 对照 docs/design 中对应页面检查布局、文案与各状态
- [ ] 列出需要人工在真机上验证的步骤
