import React from 'react'

import { BrowserRouter as Router, HashRouter, Route, Redirect } from 'react-router-dom'

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
// 房源详情组件
import HouseDetail from './pages/HouseDetail'
// 登录
import Login from './pages/Login'
import Registe from './pages/Registe'
import AuthRoute from './components/AuthRoute'

// 房源发布
import Rent from './pages/Rent'
import RentAdd from './pages/Rent/Add'
import RentSearch from './pages/Rent/Search'

function App() {
  return (
    // <Router>
    <HashRouter>
      <div className="App">
        {/* 默认路由匹配时，跳转到 /home 实现路由重定向到首页 */}
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        {/* 配置路由 */}
        {/* Home 组件是父路由的内容 */}
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
        <Route path="/map" component={Map} />
        {/* <AuthRoute path="/map" component={Map} /> */}
        {/* 房源详情的路由规则： */}
        <Route path="/detail/:id" component={HouseDetail} />
        <Route path="/login" component={Login} />
        <Route path="/registe" component={Registe} />
        {/* 配置登录后，才能访问的页面 */}
        <AuthRoute exact path="/rent" component={Rent} />
        <AuthRoute path="/rent/add" component={RentAdd} />
        <AuthRoute path="/rent/search" component={RentSearch} />
      </div>
      {/* </Router> */}
    </HashRouter>
  )
}

export default App
