const ORIGIN = 'https://raw.githubusercontent.com/hormatias/ComoVivirMejor/main/';
const CACHE_CONTROL = 'public, max-age=300, s-maxage=3600';

function publicPath(pathname) {
  if (pathname === '/' || pathname === '/index.html' || pathname === '/readme' || pathname === '/readme/') return 'index.html';
  if (/^\/(README\.md|AGENTS\.md|LICENSE|og\.png|robots\.txt|sitemap\.xml)$/.test(pathname)) {
    return pathname.slice(1);
  }
  if (/^\/book\/[\w\u0080-\uffff ._-]+\.md$/.test(pathname) || /^\/docs\/[\w\u0080-\uffff ._-]+\.md$/.test(pathname)) {
    return pathname.slice(1);
  }
  return null;
}

function contentType(file) {
  if (file === 'index.html') return 'text/html; charset=UTF-8';
  if (file === 'og.png') return 'image/png';
  if (file === 'sitemap.xml') return 'application/xml; charset=UTF-8';
  if (file.endsWith('.md')) return 'text/markdown; charset=UTF-8';
  return 'text/plain; charset=UTF-8';
}

async function handle(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { Allow: 'GET, HEAD' },
    });
  }

  const url = new URL(request.url);
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(url.pathname);
  } catch {
    return new Response('Bad Request', { status: 400 });
  }
  const file = publicPath(decodedPath);
  if (!file) return new Response('Not Found', { status: 404 });

  const upstream = await fetch(ORIGIN + encodeURI(file), {
    method: request.method,
    headers: { Accept: '*/*' },
    redirect: 'manual',
  });
  if (!upstream.ok) return new Response('Not Found', { status: upstream.status });

  const headers = new Headers(upstream.headers);
  headers.set('Content-Type', contentType(file));
  headers.set('Cache-Control', CACHE_CONTROL);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; base-uri 'self'; frame-ancestors 'self'",
  );
  return new Response(upstream.body, { status: upstream.status, headers });
}

addEventListener('fetch', (event) => {
  event.respondWith(handle(event.request));
});
