---
## 概述

该项目是canvas合成图片的测试项目，希望有好玩的事情会发生

## 脚本命令说明

### package.json中已有script说明如下

~~~
npm run server
~~~

开启本地服务器，loacalhost:8000

可通过访问http://loacalhost:8000/canvas_card.html 测试页面

## 代码提交

~~~
npm run commit
~~~

该脚本会生成commit模版，避免直接使用git commit校验失败

commit message格式

**Header**

type：用于说明commit的类型

| type | 描述 |
| --- | --- |
| feat | 新功能 |
| fix | 修补bug |
| docs | 文档 |
| style | 格式（不影响代码运行的变动） |
| refactor | 重构（既不是新增功能，也不是修改bug的代码变动） |
| test | 增加测试 |
| chore | 构建过程或辅助工具的变动 |
| revert | 回滚到上一个版本 |

注：revert比较特殊，如果当前commit用于撤销以前的commit，则必须以revert:开头，后面跟着被撤销commit的Header

scope：可以省略，用于说明commit的影响范围，比如数据层、控制层、视图层等

subject：是commit的简短描述，不超过50个字符

**Body**

是commit的详细描述，可省略

**Footer**

用于不兼容变动或关闭issue

BREAKING CHANGE：当前代码与上个版本不兼容，Footer部分以BREAKING CHANGE开头，后面是对变动的描述、变动的理由以及迁移的方法

Closes：针对某个issue，可以在Footer部分关闭这个issue，比如`Closes #233`