import React from 'react'
import { connect } from 'dva'
import { Route, Redirect } from 'dva/router'

import MainHeader from '../components/main-header'
import MainFooter from '../components/main-footer'
import Index from './index/index'
import Book from './book/index'
import About from './about/index'
// import User from './user/index'
import Details from './details/index'

import './IndexPage.css'

function IndexPage() {
  return (
    <div>
      <MainHeader />
      <div className="main">
        <Route path="/" exact render={() => <Redirect to="/index" />}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/book" component={Book}></Route>
        <Route path="/about" component={About}></Route>
        {/*<Route path="/user" component={User}></Route>*/}
        <Route path="/details/:id" component={Details}></Route>
      </div>
      <MainFooter />
    </div>
  )
}

export default connect()(IndexPage)
