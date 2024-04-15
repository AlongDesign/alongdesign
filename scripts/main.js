document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});
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
