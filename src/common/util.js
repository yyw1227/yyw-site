//缩放页面
export function initSize () {
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;
    if (browserWidth >= 1920) {
        document.querySelector("body").style.width = browserWidth + 'px';
        document.querySelector("body").style.height = browserHeight + 'px';
    } else {
        let ratio = browserWidth / 1920;
        document.querySelector("body").setAttribute('style', 'width:1920px; transform: scale(' + ratio + '); transform-origin: left top;background-size: 100%; margin-bottom: -50%')
    }
    document.querySelector("head").append('<meta name="viewport" content="width=' + browserWidth + '"/>')
}

//rem适配
export function remInitSize (designWidth, maxWidth) {

    let doc = document,
        win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style"),
        tid;

    function refreshRem () {
        var width = docEl.getBoundingClientRect().width;
        maxWidth = maxWidth || 750;
        width > maxWidth && (width = maxWidth);
        var rem = width * 100 / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();

    win.addEventListener("resize", function () {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function (e) {
            doc.body.style.fontSize = "16px";
        }, false);
    }
}