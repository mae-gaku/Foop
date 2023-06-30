var mymap = L.map('map');

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
}).addTo(mymap);

mymap.setView([35.6413874,139.3308277], 13);


var markerIcon = L.icon({
    iconUrl: 'http://www.nowhere.co.jp/blog/wp-content/uploads/2018/07/marker.png', // アイコン画像のURL
 
    iconSize:     [32, 32], // アイコンの大きさ
    iconAnchor:   [16, 32], // 画像内でマーカーの位置を指し示す点の位置
    popupAnchor:  [0, -32]  // ポップアップが出現する位置（iconAnchorからの相対位置）
});

var marker01 = L.marker([35.6254843,139.3422809], {icon: markerIcon}).addTo(mymap);
var marker02 = L.marker([35.6556157,139.3388529], {icon: markerIcon}).addTo(mymap);

marker01.bindPopup("八王子キャンパス");
marker02.bindPopup("八王子駅");

var route = L.polyline([
    [35.6254843,139.3422809],
    [35.6556157,139.3388529],
], {color: "blue", weight: 6}).addTo(mymap);

route.bindPopup("八王子キャンパスから八王子駅までの経路");
