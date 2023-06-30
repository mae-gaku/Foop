//地図を表示するdiv要素のidを設定
var map = L.map('mapcontainer', {
  // zoomControl: false

  });
  
  // オープンストリートマップ
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
  attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);
  
  
  // 現在地
  function onLocationFound(e) {
            L.marker(e.latlng).addTo(map).bindPopup("現在地").openPopup();
        }
   
        function onLocationError(e) {
            // alert("現在地を取得できませんでした。" + e.message);
            map.setView([35.68577181453851, 139.75296267059886], 13);
        }
   
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
   
        map.locate({setView: true, maxZoom: 16, timeout: 20000});
  
  
  // map.setView([35.664132351461916, 139.39910712138112], 13);
  
  
  var markerIcon = L.icon({
      iconUrl: 'http://www.nowhere.co.jp/blog/wp-content/uploads/2018/07/marker.png', // アイコン画像のURL
   
      iconSize:     [32, 32], // アイコンの大きさ
      iconAnchor:   [16, 32], // 画像内でマーカーの位置を指し示す点の位置
      popupAnchor:  [0, -32]  // ポップアップが出現する位置（iconAnchorからの相対位置）
  });
  
  
  //あらかじめMakerを宣言しておく
  // let markerTokyo = L.marker([35.64657202674009, 139.35461963407397], {icon: markerIcon}).addTo(map);

  
  function tokyo() {
    //チェックボックスの状態を取得して表示制御
    let check = document.getElementsByName("checkTokyo")[0];
    if(check.checked) {
      // markerTokyo.bindPopup("子ども食堂 カフェ北野").addTo(map);
  
    } else {
      // markerTokyo.removeFrom(map);
 
    }
  }
  
  let markerKanagawa = null;
  
  function kanagawa(value) {
    //チェックボックスのonchangeでチェックボックスの選択状態を渡す
    if(value) {
      //addToの戻り値がLayer自体なので、それを変数に格納する
      markerKanagawa = L.marker([35.64657202674009, 139.35461963407397],{icon: markerIcon}).bindPopup("子ども食堂 カフェ北野").addTo(map);
      markerKanagawa1 = L.marker([35.66520192391016, 139.3206137001747],{icon: markerIcon}).bindPopup("ほっこり食堂").addTo(map);
      markerKanagawa2 = L.marker([35.66365005985644, 139.3334286643129],{icon: markerIcon}).bindPopup("dattochi home").addTo(map);
      markerKanagawa3 = L.marker([35.67153612069159, 139.3078000561975],{icon: markerIcon}).bindPopup("フードバンク八王子えがお").addTo(map);
      markerKanagawa4 = L.marker([35.66167883366318, 139.33706436980216],{icon: markerIcon}).bindPopup("フードバンク 八王子ワークス").addTo(map);
      markerKanagawa5 = L.marker([35.674930606675794, 139.43883370354476],{icon: markerIcon}).bindPopup("子ども食堂 にっころ食堂").addTo(map);
      markerKanagawa6 = L.marker([35.68232705420914, 139.45251510111612],{icon: markerIcon}).bindPopup("子ども食堂 いっちゃん家わくわく子ども食堂").addTo(map);
      markerKanagawa7 = L.marker([35.671758894034, 139.47311758239914],{icon: markerIcon}).bindPopup("子ども食堂 こどもの居場所作り＠府中").addTo(map);
      markerKanagawa8 = L.marker([35.67652455098171, 139.47408955611795],{icon: markerIcon}).bindPopup("子ども食堂 みんなの食堂").addTo(map);
      markerKanagawa9 = L.marker([35.679658743323984, 139.47995515051244],{icon: markerIcon}).bindPopup("子ども食堂 LA MENSA DEGLI ANGELI この指とーまれ").addTo(map);
      markerKanagawa10 = L.marker([35.6707835927195, 139.49346353388952],{icon: markerIcon}).bindPopup("子ども食堂 ひがしふちゅう駅前こども食堂").addTo(map);
      markerKanagawa11 = L.marker([35.783004730830434, 139.29829470972103],{icon: markerIcon}).bindPopup("こども食堂 しょうちゃん").addTo(map);
      markerKanagawa12 = L.marker([35.66811341665035, 139.50667820084325],{icon: markerIcon}).bindPopup("子ども食堂 グレイスキッチン").addTo(map);
      markerKanagawa13 = L.marker([35.69362404874701, 139.48943917091745],{icon: markerIcon}).bindPopup("子ども食堂 子どもカレー食堂").addTo(map);
      markerKanagawa14 = L.marker([35.55070139887671, 139.5126170217139],{icon: markerIcon}).bindPopup("ノヴィーニェこども食堂・こども寺子屋 青葉台").addTo(map);
      markerKanagawa15 = L.marker([35.75483595698992, 139.47274168021318],{icon: markerIcon}).bindPopup("ふれあい子供食堂").addTo(map);
      markerKanagawa16 = L.marker([35.76245549544801, 139.61061304869608],{icon: markerIcon}).bindPopup("キラキラこども食堂").addTo(map);
      markerKanagawa17 = L.marker([35.66811341665035, 139.50667820084325],{icon: markerIcon}).bindPopup("子ども食堂 グレイスキッチン").addTo(map);
      markerKanagawa18 = L.marker([35.75246674068006, 139.64839452986863],{icon: markerIcon}).bindPopup("てへっ！こども食堂").addTo(map);
      markerKanagawa19 = L.marker([35.70929152404388, 139.63004223694745],{icon: markerIcon}).bindPopup("こどもプロジェクト（ＮＰＯ法人）").addTo(map);
      markerKanagawa20 = L.marker([35.71779577621917, 139.6783187226768],{icon: markerIcon}).bindPopup("子ども食堂「上高田みんなの食堂」").addTo(map);
      markerKanagawa21 = L.marker([35.693458703274345, 139.69258043629304],{icon: markerIcon}).bindPopup("特定非営利活動法人全国こども食堂支援センター・むすびえ").addTo(map);
      markerKanagawa22 = L.marker([35.75335106785425, 139.70847905451558],{icon: markerIcon}).bindPopup("子どもの居場所").addTo(map);
      markerKanagawa23 = L.marker([35.77706718401124, 139.69236704123242],{icon: markerIcon}).bindPopup("前野町子ども食堂 わくわくランド").addTo(map);
      markerKanagawa24 = L.marker([35.679658743323984, 139.47995515051244],{icon: markerIcon}).bindPopup("子ども食堂 LA MENSA DEGLI ANGELI この指とーまれ").addTo(map);
      markerKanagawa25 = L.marker([35.65382877011835, 139.62223739153237],{icon: markerIcon}).bindPopup("こども食堂 たかぎのごはん").addTo(map);
      markerKanagawa26 = L.marker([35.635405200803994, 139.6297660665695],{icon: markerIcon}).bindPopup("子供食堂").addTo(map);
      markerKanagawa27 = L.marker([35.652711608023615, 139.71085775879195],{icon: markerIcon}).bindPopup("恵比寿じもと食堂").addTo(map);
      markerKanagawa28 = L.marker([35.77706718401124, 139.69236704123242],{icon: markerIcon}).bindPopup("前野町子ども食堂 わくわくランド").addTo(map);
      markerKanagawa29 = L.marker([35.62006328297435, 139.7008457297261],{icon: markerIcon}).bindPopup("てしおこども食堂").addTo(map);
      markerKanagawa30 = L.marker([35.59242609104434, 139.70492695666218],{icon: markerIcon}).bindPopup("れんげの会 子ども食堂 With おとな").addTo(map);
      markerKanagawa31 = L.marker([35.577698568465095, 139.6960182992153],{icon: markerIcon}).bindPopup("こあら村").addTo(map);
      markerKanagawa32 = L.marker([35.568190490894, 139.7155808558779],{icon: markerIcon}).bindPopup("感動こども食堂").addTo(map);
      markerKanagawa33 = L.marker([35.62341587202945, 139.74091655878155],{icon: markerIcon}).bindPopup("クロモンこども食堂").addTo(map);
      markerKanagawa34 = L.marker([35.64296854004086, 139.66640397374036],{icon: markerIcon}).bindPopup("上馬塩田ふれあいの家").addTo(map);
      markerKanagawa35 = L.marker([35.65904533243547, 139.7426255329346],{icon: markerIcon}).bindPopup("みなと子ども食堂").addTo(map);
      markerKanagawa36 = L.marker([35.709661514019636, 139.63428500932815],{icon: markerIcon}).bindPopup("こどもプロジェクト（ＮＰＯ法人）").addTo(map);
      markerKanagawa37 = L.marker([35.75186211032483, 139.64705944061222],{icon: markerIcon}).bindPopup("てへっ！こども食堂").addTo(map);
      markerKanagawa38 = L.marker([35.75172764687945, 139.6247100893389],{icon: markerIcon}).bindPopup("ねりまこども食堂").addTo(map);
      markerKanagawa39 = L.marker([35.75342798117575, 139.71070953505793],{icon: markerIcon}).bindPopup("子どもの居場所").addTo(map);
      markerKanagawa40 = L.marker([35.753154823169, 139.73176749074466],{icon: markerIcon}).bindPopup("滝野川子ども食堂（COCOROごはん）").addTo(map);
      markerKanagawa41 = L.marker([35.73659010218063, 139.73596100270152],{icon: markerIcon}).bindPopup("ぶどうの枝").addTo(map);
      markerKanagawa42 = L.marker([35.74633586324652, 139.60885147366776],{icon: markerIcon}).bindPopup("石神井ゆうやけこども食堂").addTo(map);
      markerKanagawa43 = L.marker([35.71532081253524, 139.67359936302532],{icon: markerIcon}).bindPopup("こども食堂&ゲストハウス Annekaffeekanne").addTo(map);
      markerKanagawa44 = L.marker([35.679658743323984, 139.47995515051244],{icon: markerIcon}).bindPopup("子ども食堂 LA MENSA DEGLI ANGELI この指とーまれ").addTo(map);
      markerKanagawa45 = L.marker([35.69218656696821, 139.71277072939708],{icon: markerIcon}).bindPopup("NPO法人 Learning for All オフィス").addTo(map);
      markerKanagawa46 = L.marker([35.68406668995372, 139.77891149589942],{icon: markerIcon}).bindPopup("認定特定非営利活動法人 Living in Peace").addTo(map);
      markerKanagawa47 = L.marker([35.652711608023615, 139.71085775879195],{icon: markerIcon}).bindPopup("恵比寿じもと食堂").addTo(map);
      markerKanagawa48 = L.marker([35.694062943446745, 139.77713622159808],{icon: markerIcon}).bindPopup("特定非営利活動法人ピースプロジェクト").addTo(map);
      markerKanagawa49 = L.marker([35.68347443391618, 139.9079022897171],{icon: markerIcon}).bindPopup("サニー子ども食堂").addTo(map);
      markerKanagawa50 = L.marker([35.69695605602166, 139.89706571783518],{icon: markerIcon}).bindPopup("こども食堂inたんたん").addTo(map);
      markerKanagawa51 = L.marker([35.734988760816634, 139.8808500875208],{icon: markerIcon}).bindPopup("こども食堂 モンレーヴ").addTo(map);
      markerKanagawa52 = L.marker([35.750200546593945, 139.85506670307203],{icon: markerIcon}).bindPopup("よみかき宿題こどもカフェ@なぎ").addTo(map);
      markerKanagawa53 = L.marker([35.749090182255046, 139.8523296919525],{icon: markerIcon}).bindPopup("あおとこども食堂").addTo(map);
      markerKanagawa54 = L.marker([35.747638175448884, 139.8462244198907],{icon: markerIcon}).bindPopup("パルこども食堂").addTo(map);
      markerKanagawa55 = L.marker([35.72544668449276, 139.8033629415479],{icon: markerIcon}).bindPopup("こども極楽堂").addTo(map);
      markerKanagawa56 = L.marker([35.752671340496576, 139.7280451803163],{icon: markerIcon}).bindPopup("子どもの居場所 ピノッキオ").addTo(map);
      markerKanagawa57 = L.marker([35.675867640227764, 139.5134782298866],{icon: markerIcon}).bindPopup("あおばこどもの居場所").addTo(map);
      markerKanagawa58 = L.marker([35.53506970131787, 139.4373597063065],{icon: markerIcon}).bindPopup("てらこや食堂ラッキーズ").addTo(map);
      markerKanagawa59 = L.marker([35.79471798366416, 139.65633246783],{icon: markerIcon}).bindPopup("まいにちおいで子ども食堂").addTo(map);
      markerKanagawa60 = L.marker([35.77962647512812, 139.72485574934302],{icon: markerIcon}).bindPopup("子ども食堂あゆみ").addTo(map);
      
    
  
  
    } else {
      markerKanagawa.removeFrom(map);
      markerKanagawa1.removeFrom(map);
      markerKanagawa2.removeFrom(map);
      markerKanagawa3.removeFrom(map);
      markerKanagawa4.removeFrom(map);
      markerKanagawa5.removeFrom(map);
      markerKanagawa6.removeFrom(map);
      markerKanagawa7.removeFrom(map);
      markerKanagawa8.removeFrom(map);
      markerKanagawa9.removeFrom(map);
      markerKanagawa10.removeFrom(map);
      markerKanagawa11.removeFrom(map);
      markerKanagawa12.removeFrom(map);
      markerKanagawa.removeFrom(map);
      markerKanagawa1.removeFrom(map);
      markerKanagawa2.removeFrom(map);
      markerKanagawa3.removeFrom(map);
      markerKanagawa4.removeFrom(map);
      markerKanagawa5.removeFrom(map);
      markerKanagawa6.removeFrom(map);
      markerKanagawa7.removeFrom(map);
      markerKanagawa8.removeFrom(map);
      markerKanagawa9.removeFrom(map);
      markerKanagawa10.removeFrom(map);
      markerKanagawa11.removeFrom(map);
      markerKanagawa12.removeFrom(map);
      markerKanagawa13.removeFrom(map);
      markerKanagawa14.removeFrom(map);
      markerKanagawa15.removeFrom(map);
      markerKanagawa16.removeFrom(map);
      markerKanagawa17.removeFrom(map);
      markerKanagawa18.removeFrom(map);
      markerKanagawa19.removeFrom(map);
      markerKanagawa20.removeFrom(map);
      markerKanagawa21.removeFrom(map);
      markerKanagawa22.removeFrom(map);
      markerKanagawa23.removeFrom(map);
      markerKanagawa24.removeFrom(map);
      markerKanagawa25.removeFrom(map);
      markerKanagawa26.removeFrom(map);
      markerKanagawa27.removeFrom(map);
      markerKanagawa28.removeFrom(map);
      markerKanagawa29.removeFrom(map);
      markerKanagawa30.removeFrom(map);
      markerKanagawa31.removeFrom(map);
      markerKanagawa32.removeFrom(map);
      markerKanagawa33.removeFrom(map);
      markerKanagawa34.removeFrom(map);
      markerKanagawa35.removeFrom(map);
      markerKanagawa36.removeFrom(map);
      markerKanagawa37.removeFrom(map);
      markerKanagawa38.removeFrom(map);
      markerKanagawa39.removeFrom(map);
      markerKanagawa40.removeFrom(map);
      markerKanagawa41.removeFrom(map);
      markerKanagawa42.removeFrom(map);
      markerKanagawa43.removeFrom(map);
      markerKanagawa44.removeFrom(map);
      markerKanagawa45.removeFrom(map);
      markerKanagawa46.removeFrom(map);
      markerKanagawa47.removeFrom(map);
      markerKanagawa48.removeFrom(map);
      markerKanagawa49.removeFrom(map);
      markerKanagawa50.removeFrom(map);
      markerKanagawa51.removeFrom(map);
      markerKanagawa52.removeFrom(map);
      markerKanagawa53.removeFrom(map);
      markerKanagawa54.removeFrom(map);
      markerKanagawa55.removeFrom(map);
      markerKanagawa56.removeFrom(map);
      markerKanagawa57.removeFrom(map);
      markerKanagawa58.removeFrom(map);
      markerKanagawa59.removeFrom(map);
      markerKanagawa60.removeFrom(map);
  
    }
  }
  
  let markerchiba = null;
  
  function chiba(values) {
    //チェックボックスのonchangeでチェックボックスの選択状態を渡す
    if(values) {
      //addToの戻り値がLayer自体なので、それを変数に格納する
      markerchiba = L.marker([35.707546,139.663818],{icon: markerIcon}).bindPopup("中野満点食堂").addTo(map);
      markerchiba1 = L.marker([35.70853,139.666061],{icon: markerIcon}).bindPopup("中野洋食酒場カラフル").addTo(map);
      markerchiba2 = L.marker([35.723747,139.66246],{icon: markerIcon}).bindPopup("奏食堂").addTo(map);
      markerchiba3 = L.marker([35.706779,139.685944],{icon: markerIcon}).bindPopup("マ・ヤン").addTo(map);
      markerchiba4 = L.marker([35.706581,139.685791],{icon: markerIcon}).bindPopup("喜美子").addTo(map);
      markerchiba5 = L.marker([35.708858,139.66452],{icon: markerIcon}).bindPopup("ヨークフーズ中野店").addTo(map);
      markerchiba6 = L.marker([35.722916,139.662704],{icon: markerIcon}).bindPopup("nina'sdeli").addTo(map);
      markerchiba7 = L.marker([35.696613,139.685791],{icon: markerIcon}).bindPopup("デニーズ中野坂上店").addTo(map);
      markerchiba8 = L.marker([35.723839,139.648972],{icon: markerIcon}).bindPopup("デニーズ野方店").addTo(map);
      markerchiba9 = L.marker([35.694107,139.668015],{icon: markerIcon}).bindPopup("健康食堂新中野店").addTo(map);
      markerchiba10 = L.marker([35.709999,139.670303],{icon: markerIcon}).bindPopup("n.AWINEBISTROANDBAR").addTo(map);
      markerchiba11 = L.marker([35.715961,139.668381],{icon: markerIcon}).bindPopup("奄美ふくらしゃ").addTo(map);
      markerchiba12 = L.marker([35.709591,139.666733],{icon: markerIcon}).bindPopup("スナックガーネット").addTo(map);
      markerchiba13 = L.marker([35.687984,139.673065],{icon: markerIcon}).bindPopup("大石製麺店").addTo(map);
      markerchiba14 = L.marker([35.709358,139.68782],{icon: markerIcon}).bindPopup("海鮮・かき・沖縄料理わ").addTo(map);
      markerchiba15 = L.marker([35.698704,139.667633],{icon: markerIcon}).bindPopup("アジアン酒場ベニハナ").addTo(map);
      markerchiba16 = L.marker([35.706795,139.685959],{icon: markerIcon}).bindPopup("大政小政").addTo(map);
      markerchiba17 = L.marker([35.70116,139.67009],{icon: markerIcon}).bindPopup("ゆずのたね").addTo(map);
      markerchiba18 = L.marker([35.683392,139.667465],{icon: markerIcon}).bindPopup("cafeてぃ～えむ").addTo(map);
      markerchiba19 = L.marker([35.688625,139.675812],{icon: markerIcon}).bindPopup("T-Label").addTo(map);
      markerchiba20 = L.marker([35.711483,139.667313],{icon: markerIcon}).bindPopup("南印度ダイニング").addTo(map);
      markerchiba21 = L.marker([35.719147,139.651825],{icon: markerIcon}).bindPopup("ダバカ・モモ・ハウス").addTo(map);
      markerchiba22 = L.marker([35.724148,139.649384],{icon: markerIcon}).bindPopup("オルセット").addTo(map);
      markerchiba23 = L.marker([35.69669,139.684784],{icon: markerIcon}).bindPopup("中野坂上縁").addTo(map);
      markerchiba24 = L.marker([35.72274,139.644165],{icon: markerIcon}).bindPopup("サンフルール").addTo(map);
      markerchiba25 = L.marker([35.698074,139.670059],{icon: markerIcon}).bindPopup("居酒屋もんし").addTo(map);
      markerchiba26 = L.marker([35.690956,139.669662],{icon: markerIcon}).bindPopup("らーめん麺好").addTo(map);
      markerchiba27 = L.marker([35.710793,139.667038],{icon: markerIcon}).bindPopup("佐藤精肉店").addTo(map);
      markerchiba28 = L.marker([35.721035,139.662613],{icon: markerIcon}).bindPopup("鮨、中乃見家").addTo(map);
      markerchiba29 = L.marker([35.697567,139.668228],{icon: markerIcon}).bindPopup("志喜千庵").addTo(map);
      markerchiba30 = L.marker([35.721375,139.644608],{icon: markerIcon}).bindPopup("レストランピアノピアノ").addTo(map);
      markerchiba31 = L.marker([35.694038,139.674683],{icon: markerIcon}).bindPopup("焼鳥なべちゃん").addTo(map);
      markerchiba32 = L.marker([35.705063,139.664581],{icon: markerIcon}).bindPopup("日本酒バル中野青二才").addTo(map);
      markerchiba33 = L.marker([35.708973,139.666718],{icon: markerIcon}).bindPopup("カフェアンドバーミートコ").addTo(map);
      markerchiba34 = L.marker([35.6973,139.664871],{icon: markerIcon}).bindPopup("岡埜栄泉").addTo(map);
      markerchiba35 = L.marker([35.709198,139.684464],{icon: markerIcon}).bindPopup("葵禅カフェ＆バー").addTo(map);
      markerchiba36 = L.marker([35.706451,139.684891],{icon: markerIcon}).bindPopup("けむっ亭）").addTo(map);
      markerchiba37 = L.marker([35.697735,139.671524],{icon: markerIcon}).bindPopup("和ダイニング縁慈").addTo(map);
      markerchiba38 = L.marker([35.715256,139.672485],{icon: markerIcon}).bindPopup("イエローフィッシュ").addTo(map);
      markerchiba39 = L.marker([35.688316,139.675629],{icon: markerIcon}).bindPopup("坂入商店").addTo(map);
      markerchiba40 = L.marker([35.69735,139.68335],{icon: markerIcon}).bindPopup("すし割烹悠水").addTo(map);
      markerchiba41 = L.marker([35.706459,139.685059],{icon: markerIcon}).bindPopup("中国料理新楽園").addTo(map);
      markerchiba42 = L.marker([35.706436,139.670853],{icon: markerIcon}).bindPopup("南の風さくら").addTo(map);
      markerchiba43 = L.marker([35.697773,139.686462],{icon: markerIcon}).bindPopup("RINGO'SSALOON").addTo(map);
      markerchiba44 = L.marker([35.701057,139.682419],{icon: markerIcon}).bindPopup("セブンイレブン東中野2丁目店").addTo(map);
      markerchiba45 = L.marker([35.721676,139.652374],{icon: markerIcon}).bindPopup("セブンイレブン野方駅北口店").addTo(map);
      markerchiba46 = L.marker([35.706703,139.686356],{icon: markerIcon}).bindPopup("焼肉慶州").addTo(map);
      markerchiba47 = L.marker([35.698524,139.675659],{icon: markerIcon}).bindPopup("太陽飯店").addTo(map);
      markerchiba48 = L.marker([35.706757,139.6721],{icon: markerIcon}).bindPopup("フリーダム").addTo(map);
      markerchiba49 = L.marker([35.719223,139.651566],{icon: markerIcon}).bindPopup("支那そばあまちゃん").addTo(map);
      markerchiba50 = L.marker([35.723034,139.652618],{icon: markerIcon}).bindPopup("三宝丼丸野方店").addTo(map);
      markerchiba51 = L.marker([35.698189,139.669968],{icon: markerIcon}).bindPopup("睦").addTo(map);
      markerchiba52 = L.marker([35.724598,139.664551],{icon: markerIcon}).bindPopup("ちめんかのや").addTo(map);
      markerchiba53 = L.marker([35.708912,139.666473],{icon: markerIcon}).bindPopup("レストランパブスカーレット").addTo(map);
      markerchiba54 = L.marker([35.683521,139.670456],{icon: markerIcon}).bindPopup("居酒屋とみQ").addTo(map);
      markerchiba55 = L.marker([35.697296,139.665268],{icon: markerIcon}).bindPopup("R越後へぎそば桂屋").addTo(map);
      markerchiba56 = L.marker([35.725361,139.638306],{icon: markerIcon}).bindPopup("伊勢勇").addTo(map);
      markerchiba57 = L.marker([35.685585,139.669067],{icon: markerIcon}).bindPopup("すし屋の久").addTo(map);
      markerchiba58 = L.marker([35.70929,139.666748],{icon: markerIcon}).bindPopup("信濃路").addTo(map);
      markerchiba59 = L.marker([35.723751,139.63768],{icon: markerIcon}).bindPopup("ふくふく").addTo(map);
      markerchiba60 = L.marker([35.725998,139.651978],{icon: markerIcon}).bindPopup("ベーカリーオリーブ").addTo(map);
      markerchiba61 = L.marker([35.722569,139.644394],{icon: markerIcon}).bindPopup("珈琲館都立家政店").addTo(map);
      markerchiba62 = L.marker([35.707546,139.663818],{icon: markerIcon}).bindPopup("ローソン中野区役所店").addTo(map);
      markerchiba63 = L.marker([35.690819,139.669235],{icon: markerIcon}).bindPopup("stanotte").addTo(map);
  
      
      
    
  
  
    } else {
      markerchiba.removeFrom(map);
      markerchiba1.removeFrom(map);
      markerchiba2.removeFrom(map);
      markerchiba3.removeFrom(map);
      markerchiba4.removeFrom(map);
      markerchiba5.removeFrom(map);
      markerchiba6.removeFrom(map);
      markerchiba7.removeFrom(map);
      markerchiba8.removeFrom(map);
      markerchiba9.removeFrom(map);
      markerchiba10.removeFrom(map);
      markerchiba11.removeFrom(map);
      markerchiba12.removeFrom(map);
      markerchiba13.removeFrom(map);
      markerchiba14.removeFrom(map);
      markerchiba15.removeFrom(map);
      markerchiba16.removeFrom(map);
      markerchiba17.removeFrom(map);
      markerchiba18.removeFrom(map);
      markerchiba19.removeFrom(map);
      markerchiba20.removeFrom(map);
      markerchiba21.removeFrom(map);
      markerchiba22.removeFrom(map);
      markerchiba23.removeFrom(map);
      markerchiba24.removeFrom(map);
      markerchiba25.removeFrom(map);
      markerchiba26.removeFrom(map);
      markerchiba27.removeFrom(map);
      markerchiba28.removeFrom(map);
      markerchiba29.removeFrom(map);
      markerchiba30.removeFrom(map);
      markerchiba31.removeFrom(map);
      markerchiba32.removeFrom(map);
      markerchiba33.removeFrom(map);
      markerchiba34.removeFrom(map);
      markerchiba35.removeFrom(map);
      markerchiba36.removeFrom(map);
      markerchiba37.removeFrom(map);
      markerchiba38.removeFrom(map);
      markerchiba39.removeFrom(map);
      markerchiba40.removeFrom(map);
      markerchiba41.removeFrom(map);
      markerchiba42.removeFrom(map);
      markerchiba43.removeFrom(map);
      markerchiba44.removeFrom(map);
      markerchiba45.removeFrom(map);
      markerchiba46.removeFrom(map);
      markerchiba47.removeFrom(map);
      markerchiba48.removeFrom(map);
      markerchiba49.removeFrom(map);
      markerchiba50.removeFrom(map);
      markerchiba51.removeFrom(map);
      markerchiba52.removeFrom(map);
      markerchiba53.removeFrom(map);
      markerchiba54.removeFrom(map);
      markerchiba55.removeFrom(map);
      markerchiba56.removeFrom(map);
      markerchiba57.removeFrom(map);
      markerchiba58.removeFrom(map);
      markerchiba59.removeFrom(map);
      markerchiba60.removeFrom(map);
      markerchiba61.removeFrom(map);
      markerchiba62.removeFrom(map);
      markerchiba63.removeFrom(map);
  
    }
  }
  // function chiba() {
    
  //   let found = false;
  //   map.eachLayer(function(layer) {
  //     if (layer instanceof L.Marker) {
  //       if(layer.getLatLng().equals(L.latLng(35.335416, 140.183252))) {
  //         found = true;
  //         layer.removeFrom(map);
  //       }
  //     }
  //   });
 
  //   if(!found) {
  //     L.marker([35.335416, 140.183252]).bindPopup("千葉").addTo(map);
  //   }
  // }

  //変数定義
  var navigationOpenFlag = false;
  var navButtonFlag = true;
  var focusFlag = false;
   
  //ハンバーガーメニュー
      $(function(){
   
        $(document).on('click','.el_humburger',function(){
          if(navButtonFlag){
            spNavInOut.switch();
            //一時的にボタンを押せなくする
            setTimeout(function(){
              navButtonFlag = true;
            },200);
            navButtonFlag = false;
          }
        });
        $(document).on('click touchend', function(event) {
          if (!$(event.target).closest('.navi,.el_humburger').length && $('body').hasClass('js_humburgerOpen') && focusFlag) {
            focusFlag = false;
            //scrollBlocker(false);
            spNavInOut.switch();
          }
        });
      });
   
  //ナビ開く処理
  function spNavIn(){
    $('body').removeClass('js_humburgerClose');
    $('body').addClass('js_humburgerOpen');
    setTimeout(function(){
      focusFlag = true;
    },200);
    setTimeout(function(){
      navigationOpenFlag = true;
    },200);
  }
   
  //ナビ閉じる処理
  function spNavOut(){
    $('body').removeClass('js_humburgerOpen');
    $('body').addClass('js_humburgerClose');
    setTimeout(function(){
      $(".uq_spNavi").removeClass("js_appear");
      focusFlag = false;
    },200);
    navigationOpenFlag = false;
  }
   
  //ナビ開閉コントロール
  var spNavInOut = {
    switch:function(){
      if($('body.spNavFreez').length){
        return false;
      }
      if($('body').hasClass('js_humburgerOpen')){
       spNavOut();
      } else {
       spNavIn();
      }
    }
  };



