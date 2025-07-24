(window._iconfont_svg_string_4981526 =
  '<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M764.352 809.6a424 424 0 1 1 45.184-45.184l139.456 139.392a32 32 0 0 1-45.184 45.184l-139.456-139.456z m83.648-321.6a360 360 0 1 0-720 0 360 360 0 0 0 720 0z" fill="#303133" ></path></symbol><symbol id="icon-zhankaicebianlan" viewBox="0 0 1024 1024"><path d="M96 192a32 32 0 0 1 32-32h768a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32z m0 320a32 32 0 0 1 32-32h528a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32z m0 320a32 32 0 0 1 32-32h768a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32z m715.392-216.768a24 24 0 0 1-39.36-18.496V439.168c0-20.352 23.68-31.488 39.36-18.432l94.528 78.784c11.52 9.6 11.52 27.264 0 36.864l-94.528 78.848z" fill="#303133" ></path></symbol></svg>'),
  ((n) => {
    var t = (e = (e = document.getElementsByTagName("script"))[
        e.length - 1
      ]).getAttribute("data-injectcss"),
      e = e.getAttribute("data-disable-injectsvg");
    if (!e) {
      var o,
        i,
        a,
        c,
        d,
        s = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (t && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (o = function () {
        var t,
          e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_4981526),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? s(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((a = o),
            (c = n.document),
            (d = !1),
            r(),
            (c.onreadystatechange = function () {
              "complete" == c.readyState &&
                ((c.onreadystatechange = null), l());
            }));
    }
    function l() {
      d || ((d = !0), a());
    }
    function r() {
      try {
        c.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
