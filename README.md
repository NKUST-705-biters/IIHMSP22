# 2022 Confrence Template
## 需求
- jQuery 僅Ajax與Css
- Bootstrap 5.2 有新增色彩。
## template
存放網頁的各個組件
## index.html
nav與基本框架，有Bootstrap RWD，以lg為斷點。
## assets
存放css、js、pdf以及圖檔。
# Bootstrap
可以參考[六角學院文件](https://bootstrap5.hexschool.com/docs/5.0/)
# helper.js
- linkInit() 註冊insite連結。可以使用 class="insite"將右側頁面變更。 example: Invite Sessions的CFP連結
- `var _x = window.matchMedia("(max-width: 992px)")`
    Bootstrap 的 lg 斷點，可以用 `_x.matches` 為 `condition` 判斷執行，如自動收合menu部分。
- MENU DOM 中 nav-item 的 `LinkState` 屬性
    - 不存在：表示正常載入網頁。
    - 存在，但為空 `""`：表示尚未建置，會輸出 Available Soon。
    - 存在，有日期：表示尚未建置，會輸出 Available on \[日期\]。
    - 存在，值為 `Online` ：表示線上會議，會輸出 will be held Online 字樣。

