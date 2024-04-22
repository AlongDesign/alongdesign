/*  触发 id="defaultOpen" click 事件 */ 
document.getElementById("defaultOpen").click();

/* 当网页向下滑动 20px 出现"返回顶部" 按钮 */
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
 
/* 点击按钮，返回顶部 */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*  选项卡 */
 function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    // 触发 id="defaultOpen" click 事件
    document.getElementById("defaultOpen").click();



/* 采集经纬度 */
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `纬度：${latitude} °，经度：${longitude} °`;
  }

  function error() {
    status.textContent = "无法获取你的位置";
  }

  if (!navigator.geolocation) {
    status.textContent = "你的浏览器不支持地理位置";
  } else {
    status.textContent = "定位中……";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);


/* 响应式布局 -屏幕尺寸小于 400px 时，导航等布局改为上下布局 未写完*/
 const show = () =>{
        let navs = document.getElementById("navs");
        if(navs.style.display === "none"){
            navs.style.display = "flex";
        }else{
            navs.style.display = "none";
        }
    }


/* 
    需求：当页面滚动大于300像素，就显示回到顶部按钮
    */
    // 获取回到顶部元素
    const backTop = document.querySelector('#backTop')
    // L2 事件监听
    // 给页面添加 滚动事件
    window.addEventListener('scroll', function () {
      // 检测页面滚动的头部距离属性
      const n = document.documentElement.scrollTop
       // 三元运算符 简写判断
      backTop.style.opacity = n >= 300 ? 1 : 0
    })
    // 需求：点击返回按钮，页面会返回顶部
    // 给回到顶部元素添加 点击事件
    backTop.addEventListener('click',function () {
      document.documentElement.scrollTop = 0
    })
