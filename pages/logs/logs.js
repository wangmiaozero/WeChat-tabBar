//logs.js
const util = require('../../utils/util.js')
var template = require('../../template/template')
Page({
  data: {
    logs: []
  },
  onLoad: function() {
    template.tabbar('tabBar', 1, this) //0表示第一个tabbar
    // this.getData()
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function() {}
})
