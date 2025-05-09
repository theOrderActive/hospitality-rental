import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

// 导入antd-mobile的样式：
// import 'antd-mobile/dist/antd-mobile.css'

// 导入字体图标库的样式文件
import './assets/fonts/iconfont.css'

// 注意：我们自己写的全局样式需要放在组件库样式后面导入，这样，样式才会生效！因为后面的样式会覆盖前面同名的样式
import './index.css'
// 导入 react-virtualized 组件的样式
import 'react-virtualized/styles.css'
import axios from 'axios'
axios.defaults.withCredentials = false; // 禁用全局凭据模式

// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
