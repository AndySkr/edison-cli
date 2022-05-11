<!-- @format -->

#### edison-cli

1. ##### 主要依赖
   1. **inquirer**
   2. **commander**
   3. **download-git-repo**
   4. **inquirer**
   5. **clear,chalk（log 颜色）,figlet（log 格式）,ora(进度条)**
2. ##### commander 定义命令行并解析
   1. 提供与处理用户命令能力，提取出用户的输入供给脚手架工作使用。
3. ##### inquirer 获取与用户交互信息
   1. 提供与用户信息交互的能力，比如展示出交互选项供给用户选择各种配置，获取用户需要的功能信息。（比如是否需要 typescript，是否需要 jest，需要哪个组件库，状态管理库等等）。
4. ##### download-git-repo 拉取模板
   1. 根据用户提供的各项交互信息去拉取远程项目模版
5. ##### 动态渲染模版
   1. 如果是复杂模版时 需要动态的进行渲染
   2. 使用 ejs 渲染
