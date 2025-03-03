/**
 * Created by Nandem on 2017-05-07.
 */
function redirectReplace(id) {
    var $objContainHref = $("#" + id);
    window.location.replace($objContainHref.attr("href"));
}
function redirectLink(id) {
    var $objContainHref = $("#" + id);
    window.location.href = $objContainHref.attr("href");
}
function redirectOpen(id) {
    var $objContainHref = $("#" + id);
    window.open($objContainHref.attr("href"));
}
function redirectOpenNewWindow(url) {
    // var $objContainHref = $("#" + id);
    window.open(url);
}

function getWebRootPath() {
    var webRoot = document.location.href;
    webRoot = webRoot.substring(webRoot.indexOf('//') + 2, webRoot.length);
    webRoot = webRoot.substring(webRoot.indexOf('/') + 1, webRoot.length);
    webRoot = webRoot.substring(0, webRoot.indexOf('/'));
    return "/" + webRoot;
}

function debounce(func, wait, immediate) {
    // immediate默认为false
    var timeout, args, context, timestamp, result;

    var later = function () {
        // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
        var last = _.now() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = _.now();
        // 第一次调用该方法时，且immediate为true，则调用func函数
        var callNow = immediate && !timeout;
        // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
}

function post(url, args)
{
    var body = $(document.body),
        form = $("<form method='post'></form>"),
        input;
    form.attr({"action": url});
    $.each(args, function (key, value)
    {
        input = $("<input type='hidden'>");
        input.attr({"name": key});
        input.val(value);
        form.append(input);
    });

    form.appendTo(document.body);
    form.submit();
    document.body.removeChild(form[0]);
}