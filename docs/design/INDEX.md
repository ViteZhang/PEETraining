# 视觉稿源文件索引

每个页面一个 .dc.html 文件（390×844 手机画板的 HTML 源码，内联样式）。
用途：给 Claude Code 读取精确的布局、文案、颜色与交互说明；不要直接复制成 React Native 代码，按 ui-tokens 和基础组件重写。
在线查看与点击原型：https://claude.ai/artifact/URoTFxjLpB4NnenFA3VARC

| 模块 | 页面 | 文件 |
| --- | --- | --- |
| 00 设计规范 | 设计规范（颜色、字体、组件、状态） | Main.dc.html |
| 0 启动与账号 | 0.1 启动页 | m0_splash.dc.html |
| 0 启动与账号 | 0.2 登录 · 本机号码一键登录 | m0_login.dc.html |
| 0 启动与账号 | 0.2b 手机号登录 | m0_phone.dc.html |
| 0 启动与账号 | 0.3 输入验证码 | m0_code.dc.html |
| 0 启动与账号 | 0.3b 验证码错误态 | m0_code_err.dc.html |
| 0 启动与账号 | 0.4 用户协议与隐私政策 | m0_agreement.dc.html |
| 0 启动与账号 | 0.5 权限说明弹窗（以相机为例） | m0_permission.dc.html |
| 0 启动与账号 | 0.6 版本更新弹窗 | m0_update.dc.html |
| 1 新用户引导 | 1.1 选择院校（已更新） | m1_school.dc.html |
| 1 新用户引导 | 1.2 选择专业 | m1_major.dc.html |
| 1 新用户引导 | 1.2b 选择专业 · 未收录院校 | m1_major_custom.dc.html |
| 1 新用户引导 | 1.2c 填写专业课科目 | m1_subjects.dc.html |
| 1 新用户引导 | 1.3 备考设置 | m1_setup.dc.html |
| 1 新用户引导 | 1.3b 上传资料 | m1_upload.dc.html |
| 1 新用户引导 | 1.3c 知识库生成中 | m1_building.dc.html |
| 1 新用户引导 | 1.3d 确认知识框架 | m1_framework.dc.html |
| 1 新用户引导 | 1.4 摸底测说明 | m1_diagintro.dc.html |
| 1 新用户引导 | 1.4b 摸底测说明 · 自建路径 | m1_diagintro_custom.dc.html |
| 1 新用户引导 | 1.5 摸底测答题 | m1_diag.dc.html |
| 1 新用户引导 | 1.6 退出摸底测确认 | m1_diagexit.dc.html |
| 1 新用户引导 | 1.7 报告生成中 | m1_reportloading.dc.html |
| 1 新用户引导 | 1.8 摸底诊断报告 | m1_report.dc.html |
| 1 新用户引导 | 1.9 学习提醒设置 | m1_remind.dc.html |
| 2 今日 | 2.1 今日首页 · 正常状态 | m2_home.dc.html |
| 2 今日 | 2.1b 今日首页 · 未完成摸底 | m2_home_nodiag.dc.html |
| 2 今日 | 2.1c 今日首页 · 今日已完成 | m2_home_done.dc.html |
| 2 今日 | 2.1d 今日首页 · 知识库生成中 | m2_home_building.dc.html |
| 2 今日 | 2.1e 今日首页 · 未上传资料 | m2_home_nomat.dc.html |
| 2 今日 | 2.2 今日训练完成 | m2_complete.dc.html |
| 2 今日 | 2.3 消息中心 | m2_messages.dc.html |
| 3 知识点 | 3.1 知识点树 | m3_tree.dc.html |
| 3 知识点 | 3.2 搜索 | m3_search.dc.html |
| 3 知识点 | 3.3 知识点卡片 | m3_card.dc.html |
| 3 知识点 | 3.3b 更多操作（底部弹层） | m3_card_more.dc.html |
| 3 知识点 | 3.4 编辑知识点 | m3_edit.dc.html |
| 3 知识点 | 3.5 原文查看 | m3_source.dc.html |
| 3 知识点 | 3.6 908 作文知识库 | m3_essaykb.dc.html |
| 4 训练 | 4.1 训练首页 | m4_practice.dc.html |
| 4 训练 | 4.2 练习设置 | m4_setup.dc.html |
| 4 训练 | 4.3 答题 · 客观题 | m4_answer.dc.html |
| 4 训练 | 4.4 答题 · 主观题 | m4_subj.dc.html |
| 4 训练 | 4.5 拍照识别确认 | m4_photo.dc.html |
| 4 训练 | 4.6 AI 批改中 | m4_grading.dc.html |
| 4 训练 | 4.7 批改结果 · 主观题 | m4_result.dc.html |
| 4 训练 | 4.8 批改异议（底部弹层） | m4_dispute.dc.html |
| 4 训练 | 4.9 额度用尽（底部弹层） | m4_quota.dc.html |
| 4 训练 | 4.10 本组训练总结 | m4_summary.dc.html |
| 4 训练 | 4.11 错题本 | m4_wrong.dc.html |
| 4 训练 | 4.12 真题整卷列表 | m4_papers.dc.html |
| 4 训练 | 4.13 整卷模拟 · 答题中 | m4_exam.dc.html |
| 4 训练 | 4.14 答题卡（底部弹层） | m4_examcard.dc.html |
| 4 训练 | 4.15 交卷确认 | m4_submit.dc.html |
| 4 训练 | 4.16 整卷报告 | m4_examreport.dc.html |
| 4 训练 | 4.17 背诵 · 挖空 | m4_recite.dc.html |
| 4 训练 | 4.18 背诵 · 默写（结果态） | m4_recite_write.dc.html |
| 4 训练 | 4.19 背诵 · 口述（录音中） | m4_recite_speak.dc.html |
| 4 训练 | 4.20 背诵完成 | m4_recite_done.dc.html |
| 4 训练 | 4.21 退出训练确认 | m4_exit.dc.html |
| 5 作文 | 5.1 作文题目 | m5_topics.dc.html |
| 5 作文 | 5.2 作文写作 | m5_write.dc.html |
| 5 作文 | 5.2b 拍照上传手写稿 | m5_upload.dc.html |
| 5 作文 | 5.2c 作文批改中 | m5_grading.dc.html |
| 5 作文 | 5.3 素材库（底部弹层） | m5_material.dc.html |
| 5 作文 | 5.4 作文批改结果 | m5_result.dc.html |
| 5 作文 | 5.5 作文本 | m5_book.dc.html |
| 5 作文 | 5.6 范文详情 | m5_model.dc.html |
| 6 我的 | 6.1 我的 | m6_me.dc.html |
| 6 我的 | 6.2 掌握度看板（二级页） | m6_dashboard.dc.html |
| 6 我的 | 6.3 我的资料 | m6_library.dc.html |
| 6 我的 | 6.4 资料解析详情 | m6_parse.dc.html |
| 6 我的 | 6.5 会员中心 | m6_member.dc.html |
| 6 我的 | 6.6 支付结果 | m6_payresult.dc.html |
| 6 我的 | 6.7 兑换码（错误态） | m6_redeem.dc.html |
| 6 我的 | 6.8 邀请研友 | m6_invite.dc.html |
| 6 我的 | 6.9 备考设置 | m6_prep.dc.html |
| 6 我的 | 6.10 设置 | m6_settings.dc.html |
| 6 我的 | 6.11 账号与安全 | m6_account.dc.html |
| 6 我的 | 6.12 注销账号 | m6_delete.dc.html |
| 6 我的 | 6.13 意见反馈 | m6_feedback.dc.html |
