import React from 'react'
import {NavLink} from "react-router-dom"

const menus = [
  {
    id: 1,
    name: '全部'
  },
  {
    id: 2,
    name: '待付款'
  },
  {
    id: 3,
    name: '待发货'
  },
  {
    id: 4,
    name: '待收货'
  },
  {
    id: 5,
    name: '待评价'
  }
]

class NavBar extends React.Component {
  render () {
    const {active, change} = this.props
    return (
      <div className="orders-navbar">
        <ul>
          {menus.map((item, index)=>
            <li key={item.id}>
              <NavLink replace to={'/orders/' + index} exact activeClassName='active'>{item.name}</NavLink>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default NavBar