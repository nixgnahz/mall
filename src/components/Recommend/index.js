import React from 'react'

import Icon from '../common/Icon'

import './index.scss'

const recommendArr = [
  {
    id: 1,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 2,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 3,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 4,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 5,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  },
  {
    id: 6,
    cover: 'http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/c/4/6/6/5b3de734c20e0.jpeg',
    title: '抹茶酵素梅 快速减肚腩 通便排毒 减肥瘦身 月月瘦200g',
    price: '39.9',
    sales: '53'
  }
]

class Recommend extends React.Component {
  render () {
    return (
      <section className="recommend">
        <p className="recommend-title">
          <Icon icon='recommend' size='middle'/>
          <span>精选推荐</span>
        </p>
        <ul>
          {recommendArr.map((item)=>
              <ListItem key={item.id} item={item}/>
          )}
        </ul>
      </section>
    )
  }
}

const ListItem = (data) => {
  const {item} = data
  return (
    <li>
      <div className="cover" style={{backgroundImage: 'url(' + item.cover + ')'}}></div>
      <p className="title">{item.title}</p>
      <div className="param">
        <p className="price">¥<span>{item.price}</span></p>
        <p className="sales">已售{item.sales}件</p>
      </div>
    </li>
  )
}

export default Recommend