const ORIGIN = 'https://raw.githubusercontent.com/hormatias/ComoVivirMejor/main/';
const CACHE_CONTROL = 'public, max-age=300, s-maxage=3600';

function publicPath(pathname) {
  if (pathname === '/' || pathname === '/index.html') return 'index.html';
  if (/^\/(README\.md|og\.png|robots\.txt|sitemap\.xml)$/.test(pathname)) {
    return pathname.slice(1);
  }
  if (/^\/book\/[\w\u0080-\uffff ._-]+\.md$/.test(pathname)) {
    return pathname.slice(1);
  }
  return null;
}

async function handle(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'GET, HEAD' },
    });
  }

  const url = new URL(request.url);
  const file = publicPath(decodeURIComponent(url.pathname));
  if (!file) return new Response('Not Found', { status: 404 });

  const upstream = await fetch(ORIGIN + file, {
    method: request.method,
    headers: { Accept: '*/*' },
    redirect: 'manual',
  });
  if (!upstream.ok) return new Response('Not Found', { status: upstream.status });

  const headers = new Headers(upstream.headers);
  headers.set('Cache-Control', CACHE_CONTROL);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; base-uri 'self'; frame-ancestors 'self'",
  );
  return new Response(upstream.body, { status: upstream.status, headers });
}

addEventListener('fetch', (event) => {
  event.respondWith(handle(event.request));
});
