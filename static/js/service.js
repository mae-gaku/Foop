$.scrollify({
    section : ".box",//1ページスクロールさせたいエリアクラス名
    scrollbars:"false",//スクロールバー表示・非表示設定
    interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
      scrollSpeed: 300, // スクロール時の速度
    
    //以下、ページネーション設定
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
        pagination += "</ul>";
  
        $("#box1").append(pagination);//はじめのエリアにページネーションを表示
        $(".pagination a").on("click",$.scrollify.move);
      }
  
    });



      
      
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


  
      
  
   