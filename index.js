/*global $*/

$(function(){
    //********************************************
    //  ナビゲーションバー  
    //********************************************
    $(".navigation").hover(function(){
        $(this).children("ol").slideDown(100);
        $(this).children("ol").css("display","block");
    },function(){
        $(this).children("ol").css("display","none"); 
    });

    //********************************************
    //  pagetopボタン
    //********************************************
    var pagetopBtn = $('.fa-arrow-circle-up');

    //pageTopボタンクリックでドキュメント最上位に移動
    pagetopBtn.click(function(){
        $("html,body").animate({
            "scrollTop":0
        },"fast");
    });

    //画面をスクロールしてからpageTopボタンを表示する
    var appear = false;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //100pxスクロールしたら
            if (appear == false) {
                appear = true;
                pagetopBtn.stop().animate({
                    'right': '30px'
                }, 200); //右から30pxの位置に200msecかけて表示する
            }
        } else {
            if (appear == true) {
                appear = false;
                pagetopBtn.stop().animate({
                    'right': '-60px'
                }, 200); //右から-60pxの位置に200msecかけて隠す
            }
        }
        
        //pageTopボタンをフッター手前で停止する(フッター領域に侵入しないようにする)
        var hDoc = $(document).height();                            //ドキュメント全体の高さ
        var hPosNow = $(window).height() + $(window).scrollTop();   //ページトップから現在位置
        var hFooter = $("footer").innerHeight();                    //フッターの高さ
        
        if (hDoc - hPosNow <= hFooter) {    //画面の下部がフッターの高さ以下になったら
            pagetopBtn.css({
                'position' : 'absolute',
                'bottom' : '30px'   //.main-wrapperの下から30pxに固定する(フッター領域に侵入しない)
            });
        } else {
            pagetopBtn.css({
                'position' : 'fixed',
                'bottom' : '30px'   //画面上の下から30pxに固定する
            });
        }

    });
    





});