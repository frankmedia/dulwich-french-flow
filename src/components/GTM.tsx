import { Helmet } from "react-helmet-async";

const GTM = () => {
  const enabled = import.meta.env.VITE_ENABLE_GTM === 'true';
  const gtmId = import.meta.env.VITE_GTM_ID as string | undefined;
  if (!enabled || !gtmId) return null;

  const consentDefault = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
    try {
      var pref = (localStorage.getItem('cookie_consent')||'').toLowerCase();
      if (pref === 'granted') {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        });
      }
      // Expose helper to update later from a banner
      // window.setGTMConsent('granted'|'denied')
      (window as any).setGTMConsent = function(state){
        var s = (state||'').toLowerCase();
        localStorage.setItem('cookie_consent', s);
        gtag('consent','update', s==='granted' ? {
          ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted'
        } : {
          ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
        });
      };
    } catch(e) {}
  `;

  const gtmLoader = `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;

  return (
    <>
      <Helmet>
        <script>{consentDefault}</script>
        <script>{gtmLoader}</script>
      </Helmet>
      {/* noscript for GTM */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};

export default GTM;


