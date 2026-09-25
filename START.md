# 开工指南（给团队看的，不是给 Claude Code 的）

## 1. 放文件
1. 新建空仓库 shuati，把本压缩包内容解压到仓库根目录
2. 从三份 Claude Doc 导出 Markdown（打开文档 → 点文档名 → Export → Markdown），分别存为：
   - docs/prd.md          ← 刷题精灵 产品需求文档（PRD）v1
   - docs/tech-spec.md    ← 刷题精灵 技术规格文档 v1
   - docs/construction.md ← 刷题精灵 施工文档 v1
3. git add . && git commit -m "docs: 项目文档与视觉稿"

## 2. 第一次对话（只做一次）
在仓库根目录启动 Claude Code，发送：

    先通读 CLAUDE.md、docs/prd.md、docs/tech-spec.md、docs/construction.md 和 docs/design/INDEX.md。
    不要写代码。读完后告诉我：
    1. 你对项目的一段话理解
    2. 你认为文档之间有矛盾或缺失的地方
    3. 在开始 T01 之前需要我提供的账号、密钥或决定
    
## 3. 每张任务卡（重复 49 次）
开新会话（或 /clear），发送：

    执行任务卡 T01「仓库与工程骨架」。
    1. 先读 CLAUDE.md，再读 docs/construction.md 中 T01 卡片，以及卡片「参考」里列出的文档章节和 docs/design 中对应页面
    2. 先输出实现计划（改哪些文件、新增哪些表或函数、怎么测试），等我确认
    3. 按计划实现，只改本卡范围内的代码
    4. 补齐单元测试，跑通 pnpm typecheck、pnpm test
    5. 逐条对照卡片「验收」自检，输出自检结果和我需要手动验证的步骤

把 T01 和卡片名换成当前卡片即可。

## 4. 节奏建议
- 一张卡一个分支；验收通过再合并，再开下一张
- 计划阶段多看一眼：Claude Code 想新增表、改规则、引入新依赖时，确认是否符合文档
- 卡片之间用新会话，避免上下文过长导致遗忘约定
- 可以并行的卡（见施工文档第 2 节）可以开多个终端各自处理，但不要同时改同一个模块
- 遇到文档没写清的问题，先改文档再让 Claude Code 实现，保持文档是唯一依据
