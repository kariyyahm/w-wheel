# w-wheel - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/kariyyahm/w-wheel.svg?branch=master)](https://travis-ci.org/kariyyahm/w-wheel)

## 介绍
这是我在学习 Vue 时制作的一个 UI 框架，希望它可以对你有帮助。<br>
1. 添加 css 样式
    使用本框架前，请在 css 中启用 border-box
    ```
    *, *::before, *::after {box-sizing: border-box;}
    ```
    IE 8 及以上浏览器均支持此样式。
    你还需要以下样式： 
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-background: white;
        --button-active-background: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
2. 安装 w-wheel
    ```
    npm i -S w-wheel    // 使用 npm 安装
    
    yarn add w-wheel    // 使用 yarn 安装
    ```
3. 引入 w-wheel
    ```
    import {Button, Icon} from 'w-wheel'
    import 'w-wheel/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        'w-button': Button,
        'w-icon': Icon
      }
    }
    ```

## 提问

## 变更记录

## 联系方式

## 贡献代码
