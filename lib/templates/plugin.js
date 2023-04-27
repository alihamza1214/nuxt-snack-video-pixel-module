/**
 * @class Snack
 */
class Snack {
  constructor (options) {
    this.options = options
  }

  /**
   * @method enable
   */
  enable () {
    _setUp(this.options);
  }
  track(event, data, options = {}) {
    if (!event) {
      log(`please specify an event name`);
    }
    const kwaiq = getLibrary();
    kwaiq.instance(this.options.pixel).track(event, data, options);
  }
}

export default (ctx, inject) => {
  const instance = new Snack(<%= JSON.stringify(options) %>);
  if (!instance.options.disabled) {
    instance.enable()
  }
  /* eslint-enable */
  ctx.$kwaiq = instance
  inject('kwaiq', instance)
}

function _setUp(options) {
  /* eslint-disable */
  if (typeof window !== 'undefined' && options.pixel) {
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
          ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
            }
          };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e
      }, ttq.load = function (e, n) {
        var i = "https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js";
        ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
        var o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o, a)
      };
      ttq.load(options.pixel);
      ttq.page();
    }(window, document, 'kwaiq');
  }
}
const getLibrary = () => {
  return window.kwaiq;
};

