# 仿-酷狗APP
## 前期准备
- 设计图放在'{{工程文件夹}}/from'下
- uniCloud（暂时未使用）
- 切割设计图，将切好的item放在'{{工程文件夹}}/static/pic'下

## 编程环境
|  环境   | 说明  |
|  ----  | ----  |
| 前端框架  | uni-app |
| 编译器  | Hbuilder X 3.1.22.20210709 |
| 编程语言  | html5 + vue.js(js暂未使用) + css3 |
| 测试浏览器  | FireFox响应设计模式   iPhone 6/7/8   iOS-11 |
| 测试移动终端  | COL-AL1-10(华为荣耀10)  Android-10|

## 打包
[工程项目/unpackage/release/__UNI__EB967F3__20210730190654](./unpackage/release/__UNI__EB967F3__20210730190654)
[网络下载链接](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ac0ab413-d6ce-4706-a0d7-812977463aaf/ad193833-71ee-42ca-9969-85b690a4297d.apk)

## 补充说明
由于时间关系所以才做到音乐分类页面，事件还没绑定

## 实现细节
### 状态管理
使用原生api - globalData

### 页面路由
使用原生api - pages

### 数据操作方式
| 数据类型 | 操作方式 |
| --- | --- |
| 用户直接信息 | 直接访问云数据库 |
| 网络资源 | 通过云数据库记录的url信息再向云存储发送https请求获取 |

### 动画
animation-play-state 控制旋转
linear-gradient 实现背景渐变
vue的数据绑定和定时器Interval 实现歌词轮播