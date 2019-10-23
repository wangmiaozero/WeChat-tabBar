// template/template.js
//初始化数据
function tabbarinit() {
  return [
    {
      current: 0,
      pagePath: '/pages/index/index',
      iconPath: '/images/goback.png',
      selectedIconPath: '/images/goback1.png',
      text: '返回商城'
    },
    {
      current: 0,
      pagePath: '/pages/logs/logs',
      iconPath: '/images/collage1.png',
      selectedIconPath: '/images/collage.png',
      text: '拼团首页'
    },
    {
      current: 0,
      selectedIconPath: '/images/list.png',
      iconPath: '/images/list1.png',
      pagePath: '/pages/collage-list/index',
      text: '活动列表'
    },
    {
      current: 0,
      selectedIconPath: '/images/collage-order.png',
      iconPath: '/images/collage-order1.png',
      pagePath: '/pages/collage-order/index',
      text: '我的订单'
    },
    {
      current: 0,
      selectedIconPath: '/images/group.png',
      iconPath: '/images/group1.png',
      pagePath: '/pages/group/index',
      text: '我的团'
    }
  ]
}
//tabbar 主入口
function tabbarmain(bindName = 'tabdata', id, target) {
  var that = target
  var bindData = {}
  var otabbar = tabbarinit()
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
  otabbar[id]['current'] = 1
  bindData[bindName] = otabbar
  that.setData({ bindData })
}
module.exports = {
  tabbar: tabbarmain
}
