/**
 * @author Nandem on 2017-03-19.
 */

var screenWidth = window.screen.width;

$().ready(function () {
    initZoomEvent();
    initTabEvent();
});

/*^_^*-------------tab event---------------*^_^*/
function initTabEvent() {

    var btnArray = [];
    var bodyArray = [];
    var imgArray = [];
    for (var i = 0; i < 6; i++) {
        btnArray[i] = $("#" + (i + 1) + "NavBtn");
        bodyArray[i] = $("#" + (i + 1) + "NavBody");
        imgArray[i] = $("#" + (i + 1) + "Img");
        bodyArray[i].hide();
        // bodyArray[i].mCustomScrollbar(
        // {
        //     setWidth: true,
        //     setHeight: true,
        //     theme:"dark"
        // });
    }

    bodyArray[0].show();

    btnArray.forEach(function (item, index) {
        item.click(function () {
            hideAllBtnSelectedStat(btnArray);
            hideAllElements(bodyArray);
            hideAllImg(imgArray);
            bodyArray[index].show();
            $(btnArray[index]).addClass("navBtnSelected");
            $(imgArray[index]).removeClass("QuGuiHide");

        })
    });
}

function hideAllImg(imgArray)
{
    imgArray.forEach(function (item)
    {
        $(item).addClass("QuGuiHide") ;
    });
}

function hideAllBtnSelectedStat(btnArray)
{
    btnArray.forEach(function (item)
    {
       $(item).removeClass("navBtnSelected") ;
    });
}

function hideAllElements(bodyArray) {
    bodyArray.forEach(function (item) {
        item.hide();
        // $(btnArray[1]).removeClass("navBtnSelected");
    })
}
/*^_^*-------------zoom event---------------*^_^*/
function initZoomEvent() {
    var $navBtnZoomIn = $("#navBtnZoomIn");
    var $navBtnZoomOut = $("#navBtnZoomOut");
    var $leftBox = $("#leftBox");
    var $rightBox = $("#rightBox");
    var $info = $("#info");
    var $article = $("#article");
    var $articleContent = $("#articleContent");

    $navBtnZoomIn.click(function () {
        zoom($rightBox, $leftBox);
        $info.animate({opacity: 0}, 500, function () {
            $info.hide();
            $article.css({opacity: 1}, 300);
            $article.fadeIn(300);
            var temId = setInterval(function () {
                $articleContent.animate({opacity: 1}, 300);
                clearInterval(temId);
            }, 100);
        })
    });

    $navBtnZoomOut.click(function () {

        zoom($leftBox, $rightBox);
        $articleContent.animate({opacity: 0}, 200, function () {

            $article.animate({opacity: 0}, 500, function () {
                $article.hide();
                $info.css({opacity: 1});
                $info.fadeIn(300);
            })
        });
    })
}

function zoom($sthToBeZoomIn, $sthToBeZoomOut) {
    var temRightWidth = $sthToBeZoomOut.width();
    var temLeftWidth = $sthToBeZoomIn.width();
    $sthToBeZoomOut.animate({width: temLeftWidth - screenWidth * 0.005 + "px"}, 800);
    $sthToBeZoomIn.animate({width: temRightWidth + screenWidth * 0.005 + "px"}, 800);
}
