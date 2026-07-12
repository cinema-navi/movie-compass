// ==========================================================
// Google Analytics(GA4)設定
// ==========================================================
// 1. https://analytics.google.com/ でプロパティを作成
// 2. 発行された測定ID(G-から始まる文字列)を、下の "" の中に貼り付ける
// これだけで、このファイルを読み込んでいる全ページのアクセスが計測されます。
(function(){
  var GA_MEASUREMENT_ID = "G-XE3PYH0N9V";
  if (!GA_MEASUREMENT_ID) return; // IDが未設定の間は何もしない

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
