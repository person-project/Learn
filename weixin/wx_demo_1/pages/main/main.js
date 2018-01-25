//main.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: [{
      text: '留住时光',
      url: '../../static/1.png'
    }, {
      text: '留住时光',
      url: '../../static/3.png'
    }, {
      text: '留住时光',
      url: '../../static/1.png'
    }, {
      text: '留住时光',
      url: '../../static/3.png'
    }],
    autoplay: true,
    indictorDots: true,
    interval: 3000,
    duration: 1500,
    tabList: [{
      title: '杭州'
    }, {
      title: '莫干山'
    }, {
      title: '千岛湖'
    }, {
      title: '临安'
    }, {
      title: '大理'
    }],
    navIndex: 0,
    tabIndex: 0,
    imgheights: [100, 100, 100, 100, 100],
    screenWidth: 750
  },
  onLoad: function () {
    this.getScreenWidth();
  },
  changeNavTabs(event) {
    this.setData({
      navIndex: event.target.dataset.id
    })
  },
  changeTab(event) {
    console.log(event.target);
  },
  swiperChange(current, source) {
    console.log(current);
    this.setData({
      navIndex: current.detail.current
    })
  },
  imageLoad(e) {
    // console.log(e.target.dataset.id);
    let imgWidth = e.detail.width;
    let imgheight = e.detail.height;
    console.log(this.data.screenWidth/imgWidth*imgheight);
  },
  getScreenWidth() {
    this.setData({
      screenWidth: (wx.getSystemInfoSync()).windowWidth
    })
  }
})
