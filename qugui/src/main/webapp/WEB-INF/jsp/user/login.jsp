<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../../css/libs/bootstrap/bootstrap.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="../../js/libs/html5shiv.min.js"></script>
    <script src="../../js/libs/respond.min.js"></script>
    <!--<![endif]&ndash;&gt;-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="../../js/libs/jq/jquery-3.1.1.min.js"></script>
    <script src="../../js/jquery.leoweather.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../../js/libs/bootstrap/bootstrap.min.js"></script>

    <script src="../../js/qugui/user/login.js"></script>
    <link href="../../css/qugui/quguiStyle.css" rel="stylesheet">
    <link href="../../css/qugui/user/login.css" rel="stylesheet">
    <title>登录</title>
</head>
<body>
<div class="QuGuiFullScreenContainer">
    <div class="topBox">
        <div id="weather">
            <script>
                $('#weather').leoweather(
                        {
                            format:'<i class="icon-{图标}">{气温}℃</i>'
                        });
            </script>
        </div>
        <span class="vline QuGuiMarginLeft30"></span>
        <div class="introduction QuGuiMarginLeft30">
            <p class="text-center QuGuiTextSize66">去归</p>
            <p class="lead text-center">
                你的个性化旅行分享平台
            </p>
        </div>
    </div>
    <div class="bottomBox">
        <div class="loginBox">
            <input placeholder="用户名/邮箱/手机号" type="text" class="QuGuiTextInput QuGuiSizeLarge QuGuiMarginTop30" />
            <input placeholder="密码" type="password" class="QuGuiTextInput QuGuiMarginTop10 QuGuiSizeLarge" />
            <button class="QuGuiBtn QuGuiBlackBtnStyle QuGuiMarginTop10 QuGuiSizeLarge QuGuiTextSize30" onclick="login()">登录</button>
            <div class="QuGuiSizeLarge registerAndForgotPassword QuGuiMarginTop5">
                <p class="QuGuiPointerCursor QuGuiTextSize25 QuGuiTextColorLinkBlack QuGuiTextBold QuGuiTextSelectionStyleChinaRed QuGuiTextOpacity07">忘记密码</p>
                <p class="QuGuiPointerCursor QuGuiTextSize25 QuGuiTextColorLinkBlack QuGuiTextBold QuGuiTextSelectionStyleChinaRed QuGuiTextOpacity07" onclick="window.location.href = 'register.html'">免费注册</p>
            </div>

            <div class="footer QuGuiTextSize12">
                关于去归 | 诚征英才 | 联系我们 | International Business | About QuGui<br>
                去归版权所有 2013-2017 蜀IPC备15025050
            </div>
        </div>
    </div>
</div>
</body>
</html>