import React from 'react'
// import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'; // 正确的导入路径

// 导入antd-mobile的样式：
import 'antd-mobile/dist/antd-mobile.css'

const root = createRoot(document.getElementById('root'));
root.render(<App />);
