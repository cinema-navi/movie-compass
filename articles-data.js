// ==========================================================
// COMPASS 記事データファイル
// 「おすすめ映画記事」コーナー用。articles.html(一覧)と
// article.html(詳細)の両方からこのファイルを読み込みます。
// parseCSV / PALETTE は movie-data.js のものを再利用するので、
// 各HTMLでは必ず movie-data.js → articles-data.js の順で読み込んでください。
// ==========================================================

// ==========================================================
// 記事用スプレッドシート連携設定
// 記事専用のGoogleスプレッドシート(またはタブ)を作り、
// 「ウェブに公開」のCSV URLをここに貼ってください。
// 空のままだと記事は0件として扱われます。
// ==========================================================
const ARTICLES_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRp9sLgaziQQ4HKLvxhJMNy0IzCEbzI2KfP92MabyZU-eQnd7cSHd6CkZ1yw05ln1iiXiOyffCY95I7/pub?gid=1396844374&single=true&output=csv;

let articlesData = [];

function csvRowsToArticles(rows){
  const header = rows[0].map(h => h.trim());
  const idx = name => header.indexOf(name);
  return rows.slice(1).map((r, i) => ({
    slug: (r[idx('slug')] || '').trim(),
    title: r[idx('title')] || '',
    excerpt: r[idx('excerpt')] || '',
    // 本文は「1行 = 1段落」として扱います。改行(Enter)を入れた分だけ段落が分かれます。
    body: r[idx('body')] || '',
    // 関連づけたい映画のタイトル(movie-data.jsのtitleと完全一致させると
    // 記事内に「この作品を観る」ボタンが自動で付きます。空欄でもOK)
    relatedMovie: r[idx('relatedMovie')] || '',
    publishedDate: r[idx('publishedDate')] || '',
    // 予告動画のYouTube URL。動画ページのURLをそのまま貼ればOK(空欄なら表示されません)
    youtubeUrl: idx('youtubeUrl') >= 0 ? (r[idx('youtubeUrl')] || '') : '',
    gradient: PALETTE[i % PALETTE.length],
  })).filter(a => a.slug && a.title);
}

// YouTubeのいろんな形のURL(共有URL/短縮URL/埋め込みURL)から動画IDだけを取り出す
function extractYoutubeId(url){
  if (!url) return '';
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/embed\/)([^?&]+)/,
    /(?:youtube\.com\/shorts\/)([^?&]+)/,
  ];
  for (const p of patterns){
    const m = url.match(p);
    if (m) return m[1];
  }
  return '';
}

// レスポンシブな16:9埋め込みプレイヤーのHTMLを作る
function youtubeEmbedHTML(url){
  const id = extractYoutubeId(url);
  if (!id) return '';
  return `
    <div style="position:relative;width:100%;padding-top:56.25%;border-radius:10px;overflow:hidden;margin-bottom:22px;">
      <iframe
        src="https://www.youtube.com/embed/${id}"
        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
        title="予告動画"
      ></iframe>
    </div>`;
}

async function loadArticles(){
  if (!ARTICLES_CSV_URL){
    articlesData = [];
    return;
  }
  try {
    const res = await fetch(ARTICLES_CSV_URL);
    if (!res.ok) throw new Error('fetch failed');
    const text = await res.text();
    articlesData = csvRowsToArticles(parseCSV(text));
  } catch (err){
    console.warn('記事データの読込に失敗しました', err);
    articlesData = [];
  }
}

function findArticleBySlug(slug){
  return articlesData.find(a => a.slug === slug);
}

// 本文テキストを段落(<p>)ごとのHTMLに変換
function renderArticleBody(body){
  return (body || '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `<p>${line}</p>`)
    .join('');
}
