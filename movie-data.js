// ==========================================================
// COMPASS 共通データファイル
// トップページ(index.html)と詳細ページ(detail.html)の
// 両方からこのファイルを読み込んで、同じ映画データを使います。
// ==========================================================

// このDEFAULT_MOVIESは、スプレッドシートが未設定/読込失敗のときのフォールバックです
const DEFAULT_MOVIES = [
  { title:"千と千尋の神隠し", year:2001, rating:4.8, genre:"アニメーション", genreCode:"anime",
    moods:["think","warm","nostalgic"], pace:"light", companion:["family","solo"], era:"classic",
    gradient:"linear-gradient(160deg,#3E4A2E,#1B2016)",
    reason:"迷いながらも一歩ずつ前に進む千尋の姿は、答えを急がなくていい夜にそっと寄り添ってくれます。",
    synopsis:"引っ越しの途中で不思議な町に迷い込んだ少女・千尋が、豚に変えられた両親を救うため、湯屋で働きながら成長していく物語。名前を奪われることの意味や、働くこと・思い出すことの大切さが静かに描かれます。",
    sections:["ranking"], rank:1, platforms:[] },
  { title:"ショーシャンクの空に", year:1994, rating:4.9, genre:"ドラマ", genreCode:"drama",
    moods:["think","energy"], pace:"heavy", companion:["solo"], era:"classic",
    gradient:"linear-gradient(160deg,#2B2E3D,#12141C)",
    reason:"長い時間をかけて積み上げられる希望の物語。じっくり向き合いたい夜にこそ効いてきます。",
    synopsis:"無実の罪で刑務所に送られた銀行員アンディが、絶望的な環境の中でも希望を捨てず、独房で長い年月をかけてある計画を進めていく。友情と忍耐、そして自由の意味を問いかける不朽の名作です。",
    sections:["ranking"], rank:2, platforms:[] },
  { title:"インターステラー", year:2014, rating:4.7, genre:"SF", genreCode:"sf",
    moods:["think","thrill"], pace:"heavy", companion:["family","partner"], era:"recent",
    gradient:"linear-gradient(160deg,#2A2320,#100D0B)",
    reason:"壮大なスケールに没入できる一本。腰を据えて観るほど、その凄みが増していきます。",
    synopsis:"環境が悪化した地球を救うため、元パイロットの父親が新たな居住可能惑星を探す宇宙探査に旅立つ。時間の流れが異なる惑星や重力理論を絡めながら、離れて暮らす家族への愛が物語の軸になっています。",
    sections:["ranking"], rank:3, platforms:[] },
  { title:"コララインとボタンの魔女", year:2009, rating:4.3, genre:"ヒューマン", genreCode:"human",
    moods:["cry","scary"], pace:"light", companion:["family","solo"], era:"classic",
    gradient:"linear-gradient(160deg,#3A2A33,#160F13)",
    reason:"少し不思議で、少し切ない読後感。涙腺がゆるむきっかけを探しているならこれを。",
    synopsis:"新しい家に引っ越した少女コララインが、壁の向こうに見つけた「もう一つの家」で、優しいけれど何かがおかしい“もう一人の両親”と出会う。可愛らしい見た目とは裏腹に、ぞくりとする展開が続く人形アニメです。",
    sections:["ranking"], rank:4, platforms:[] },
  { title:"グランド・ブダペスト・ホテル", year:2014, rating:4.5, genre:"コメディ", genreCode:"comedy",
    moods:["laugh","warm"], pace:"light", companion:["partner","solo"], era:"recent",
    gradient:"linear-gradient(160deg,#3D3420,#171208)",
    reason:"軽やかなテンポと洒落た会話劇。肩の力を抜いて楽しみたい夜にぴったりです。",
    synopsis:"戦間期のヨーロッパを舞台に、伝説的なホテルのコンシェルジュと若きベルボーイが、資産家夫人の遺言をめぐる騒動に巻き込まれていく。左右対称の美しい映像美と小気味よい会話劇が魅力です。",
    sections:["ranking"], rank:5, platforms:[] },
  { title:"パラサイト 半地下の家族", year:2019, rating:4.6, genre:"サスペンス", genreCode:"mystery",
    moods:["thrill","think"], pace:"heavy", companion:["partner"], era:"recent",
    gradient:"linear-gradient(160deg,#221E2E,#0D0B12)",
    reason:"予測できない展開に最後まで目が離せません。集中して観たい夜向けの一本です。",
    synopsis:"半地下に暮らす貧しい一家が、富裕層の家庭に次々と偽の身分で入り込み、生活を共にしていく。格差社会への痛烈な視点とジャンルを横断する展開で、観るたびに新しい発見がある一本です。",
    sections:["ranking"], rank:6, platforms:[] },
  { title:"リトル・ミス・サンシャイン", year:2006, rating:4.4, genre:"ヒューマン", genreCode:"human",
    moods:["laugh","warm","energy"], pace:"light", companion:["family"], era:"classic",
    gradient:"linear-gradient(160deg,#33323F,#131218)",
    reason:"不器用な家族の旅は、笑いながらもどこか温かい気持ちにさせてくれます。",
    synopsis:"それぞれ悩みを抱えたバラバラな家族が、幼い娘の美少女コンテスト出場のため、ポンコツのワゴン車で長距離ドライブに出る。トラブル続きの旅を通して、家族としての形を見つけ直していきます。",
    sections:["cry_night"], platforms:[] },
  { title:"マンチェスター・バイ・ザ・シー", year:2016, rating:4.5, genre:"ドラマ", genreCode:"drama",
    moods:["cry","think"], pace:"heavy", companion:["solo"], era:"recent",
    gradient:"linear-gradient(160deg,#2E3A38,#101715)",
    reason:"悲しみとどう付き合うかを静かに描く一本。しっかり向き合いたい夜に。",
    synopsis:"兄の死をきっかけに故郷の町へ戻った男が、甥の後見人を任されることになる。過去に抱えた深い喪失と向き合いながら、簡単には癒えない悲しみのリアルな時間が丁寧に描かれます。",
    sections:["cry_night"], platforms:[] },
  { title:"思い出のマーニー", year:2014, rating:4.3, genre:"アニメーション", genreCode:"anime",
    moods:["cry","warm","nostalgic"], pace:"light", companion:["solo","family"], era:"recent",
    gradient:"linear-gradient(160deg,#3B2E2E,#171010)",
    reason:"優しい絵と切ない記憶の物語。心が疲れている夜にそっと効きます。",
    synopsis:"心を閉ざしがちな少女アンナが療養のため訪れた海辺の町で、湿地の館に住む謎の少女マーニーと出会う。二人の交流を通じて明かされていく過去の記憶と、自分自身を受け入れていく過程が描かれます。",
    sections:["cry_night"], platforms:[] },
  { title:"her/世界でひとつの彼女", year:2013, rating:4.3, genre:"SF", genreCode:"sf",
    moods:["think","warm"], pace:"light", companion:["solo"], era:"recent",
    gradient:"linear-gradient(160deg,#26323D,#0E1418)",
    reason:"孤独と繋がりについて、静かに考えさせられる一本。ひとりの夜に向いています。",
    synopsis:"離婚を控え孤独を抱える男性セオドアが、人工知能型OSのサマンサと会話するうちに心を惹かれていく。テクノロジーが日常に溶け込んだ近未来を舞台に、愛や繋がりの本質を静かに問いかけます。",
    sections:["hidden_gem"], platforms:[] },
  { title:"プリズナーズ", year:2013, rating:4.4, genre:"ミステリー", genreCode:"mystery",
    moods:["thrill","scary"], pace:"heavy", companion:["partner"], era:"recent",
    gradient:"linear-gradient(160deg,#332438,#120D15)",
    reason:"重く張り詰めた展開が続きます。腰を据えてどっぷり浸りたい夜に。",
    synopsis:"感謝祭の日に娘が突然姿を消し、有力な容疑者は釈放されてしまう。娘を取り戻したい一心の父親と、事件を追う刑事、それぞれの視点から描かれる誘拐サスペンスは最後まで緊張感が途切れません。",
    sections:["hidden_gem"], platforms:[] },
  { title:"パターソン", year:2016, rating:4.1, genre:"ドラマ", genreCode:"drama",
    moods:["think","warm"], pace:"light", companion:["solo"], era:"recent",
    gradient:"linear-gradient(160deg,#3D3325,#171207)",
    reason:"何でもない毎日を、静かに肯定してくれる一本。ひとりの夜によく合います。",
    synopsis:"パターソンという名の街に住む、パターソンという名のバス運転手の一週間を描く物語。決まった日課の中で詩を書き続ける彼の暮らしを通して、何気ない日常の豊かさが静かに浮かび上がります。",
    sections:["hidden_gem"], platforms:[] },
  { title:"君の名は。", year:2016, rating:4.6, genre:"アニメーション", genreCode:"anime",
    moods:["cry","warm","energy"], pace:"light", companion:["partner","family"], era:"recent",
    gradient:"linear-gradient(160deg,#243044,#0D121C)",
    reason:"切なさと高揚感が同時に押し寄せる一本。誰かと感想を語りたくなります。",
    synopsis:"田舎町に暮らす少女・三葉と東京の少年・瀧が、ある日突然、夢の中で体が入れ替わる不思議な現象に見舞われる。時間と場所を超えた二人の運命が絡み合っていく、切なくも壮大な青春ファンタジーです。",
    sections:[], platforms:[] },
  { title:"アメリ", year:2001, rating:4.5, genre:"コメディ", genreCode:"comedy",
    moods:["laugh","warm","energy"], pace:"light", companion:["solo","partner"], era:"classic",
    gradient:"linear-gradient(160deg,#3D2B1F,#160E08)",
    reason:"世界の小さな幸せを拾い集めるような一本。観終わったあと少し優しくなれます。",
    synopsis:"パリのモンマルトルでカフェ勤めをする空想好きな女性アメリが、周囲の人々にひそかな親切をしかけていく。色彩豊かな映像と独特のユーモアで、日常の小さな幸せに気づかせてくれる一本です。",
    sections:[], platforms:[] },
  { title:"セブン", year:1995, rating:4.4, genre:"ミステリー", genreCode:"mystery",
    moods:["scary","thrill"], pace:"heavy", companion:["partner"], era:"classic",
    gradient:"linear-gradient(160deg,#1E1E1E,#0A0A0A)",
    reason:"重苦しい緊張感が最後まで続きます。覚悟して向き合いたい夜に。",
    synopsis:"キリスト教の七つの大罪になぞらえた猟奇殺人事件を追う、ベテランと新米の刑事コンビ。じめじめとした都市の空気の中、事件は二人が予想もしなかった結末へと向かっていきます。",
    sections:[], platforms:[] },
  { title:"バードマン あるいは(無知がもたらす予期せぬ奇跡)", year:2014, rating:4.2, genre:"ドラマ", genreCode:"drama",
    moods:["think","energy"], pace:"heavy", companion:["solo","partner"], era:"recent",
    gradient:"linear-gradient(160deg,#402A2A,#170F0F)",
    reason:"疾走感のあるカメラワークで、観るほどにアドレナリンが出てくる一本。",
    synopsis:"かつてヒーロー映画で名を馳せた俳優が、再起をかけてブロードウェイの舞台に挑む。長回しで撮られたかのような映像と生演奏のドラムが緊張感を高め、自意識との闘いをスリリングに描きます。",
    sections:[], platforms:[] },
  { title:"かいじゅうたちのいるところ", year:2009, rating:4.0, genre:"ヒューマン", genreCode:"human",
    moods:["nostalgic","warm"], pace:"light", companion:["family","solo"], era:"classic",
    gradient:"linear-gradient(160deg,#2F3D2A,#101710)",
    reason:"子どもの頃の感情がそのまま蘇るような一本。懐かしさに浸りたい夜に。",
    synopsis:"家族に不満を抱えた少年マックスが、空想の中で怪獣たちが暮らす島にたどり着き、彼らの王になる。子どもの持つ孤独や怒り、寂しさをまっすぐに描いた、大人にこそ刺さる不思議な冒険譚です。",
    sections:[], platforms:[] },
  { title:"フロリダ・プロジェクト 真夏の魔法", year:2017, rating:4.2, genre:"ドラマ", genreCode:"drama",
    moods:["cry","think"], pace:"heavy", companion:["solo"], era:"recent",
    gradient:"linear-gradient(160deg,#26323D,#0E1418)",
    reason:"眩しい夏の光と切ない現実が同居する一本。じっくり向き合いたい夜に。",
    synopsis:"ディズニーワールドのすぐそばにある安モーテルで、貧困の中たくましく夏を過ごす6歳の少女ムーニーと母親の日々を描く。子どもの目線で見る世界の眩しさと、その裏にある厳しい現実が静かに胸に残ります。",
    sections:["cry_night"], platforms:[] },
];

// ==========================================================
// スプレッドシート連携設定
// ここにGoogleスプレッドシートの「ウェブに公開」CSV URLを貼ると、
// コードを書き換えずにランキングやデータを更新できるようになります。
// 空のままなら上のDEFAULT_MOVIESがそのまま使われます。
// ==========================================================
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRp9sLgaziQQ4HKLvxhJMNy0IzCEbzI2KfP92MabyZU-eQnd7cSHd6CkZ1yw05ln1iiXiOyffCY95I7/pub?gid=1236596522&single=true&output=csv";

// 各セクション(棚)の見出しと表示順。新しい棚を増やしたいときはここに追加し、
// スプレッドシートのsections列に同じキーを入れるだけで反映されます。
const SECTION_META = [
  { key:"ranking",   title:"総合ランキング TOP10",        showRank:true  },
  { key:"cry_night", title:"静かに泣ける、夜向けの一本",     showRank:false },
  { key:"hidden_gem",title:"あまり知られていない、でも良い", showRank:false },
];

const PALETTE = [
  "linear-gradient(160deg,#3E4A2E,#1B2016)", "linear-gradient(160deg,#2B2E3D,#12141C)",
  "linear-gradient(160deg,#2A2320,#100D0B)", "linear-gradient(160deg,#3A2A33,#160F13)",
  "linear-gradient(160deg,#3D3420,#171208)", "linear-gradient(160deg,#221E2E,#0D0B12)",
  "linear-gradient(160deg,#33323F,#131218)", "linear-gradient(160deg,#2E3A38,#101715)",
  "linear-gradient(160deg,#3B2E2E,#171010)", "linear-gradient(160deg,#26323D,#0E1418)",
];

let movieData = DEFAULT_MOVIES;

// シンプルなCSVパーサー(ダブルクォート・改行入りセルに対応)
function parseCSV(text){
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++){
    const c = text[i];
    if (inQuotes){
      if (c === '"' && text[i+1] === '"'){ field += '"'; i++; }
      else if (c === '"'){ inQuotes = false; }
      else { field += c; }
    } else {
      if (c === '"'){ inQuotes = true; }
      else if (c === ','){ row.push(field); field = ''; }
      else if (c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r'){ /* skip */ }
      else { field += c; }
    }
  }
  if (field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r => r.some(v => v.trim() !== ''));
}

// 「a|b|c」形式のセルを配列に変換(空欄は空配列)
function splitMulti(v){
  return (v || '').split('|').map(s => s.trim()).filter(Boolean);
}

// 「サービス名::URL|サービス名::URL」形式を配列に変換
function parsePlatforms(v){
  return splitMulti(v).map(entry => {
    const [name, url] = entry.split('::').map(s => (s || '').trim());
    return { name, url };
  }).filter(p => p.name && p.url);
}

function csvRowsToMovies(rows){
  const header = rows[0].map(h => h.trim());
  const idx = name => header.indexOf(name);
  return rows.slice(1).map((r, i) => ({
    title: r[idx('title')] || '',
    year: Number(r[idx('year')]) || '',
    rating: Number(r[idx('rating')]) || 0,
    genre: r[idx('genre')] || '',
    genreCode: r[idx('genreCode')] || '',
    moods: splitMulti(r[idx('moods')]),
    pace: r[idx('pace')] || 'any',
    companion: splitMulti(r[idx('companion')]),
    era: r[idx('era')] || 'any',
    reason: r[idx('reason')] || '',
    synopsis: r[idx('synopsis')] || '',
    sections: splitMulti(r[idx('sections')]),
    rank: r[idx('rank')] ? Number(r[idx('rank')]) : null,
    platforms: idx('platforms') >= 0 ? parsePlatforms(r[idx('platforms')]) : [],
    // 審査が通ったASPから正式な画像URLをもらえたら、この列に貼るだけで実画像に切り替わります。
    // 空欄のままなら、今まで通りグラデーションデザインで表示されます。
    posterUrl: idx('posterUrl') >= 0 ? (r[idx('posterUrl')] || '') : '',
    // OMDb検索専用の英語タイトル(空欄なら通常のtitleで検索する)
    omdbTitle: idx('omdbTitle') >= 0 ? (r[idx('omdbTitle')] || '') : '',
    gradient: PALETTE[i % PALETTE.length],
  })).filter(m => m.title);
}

// ==========================================================
// ポスター画像の自動取得(楽天ブックスDVD/Blu-ray検索API)
// ==========================================================
// posterUrl列が空欄の作品だけ、タイトルをキーに楽天ブックスへ自動検索をかけて
// DVD/Blu-rayのパッケージ画像を表示します。posterUrl列に自分でURLを
// 入れている作品は、そちらが優先されます。
//
// このAPIは楽天が「アフィリエイト用途での利用」を前提に公式提供しているため、
// TMDb/OMDbと違って商用利用の規約上の懸念はありません。
//
// 注意: DVD/Blu-rayとして発売されていない作品(公開間もない新作等)は
// 見つからないことがあります。その場合はposterUrl列に手動で貼ってください。
const RAKUTEN_APP_ID = "d3eaa46b-a17b-4200-9bd7-13d55713dd06";
// 楽天アフィリエイトID。これを設定すると、APIが返す商品リンクに
// 自動的にアフィリエイトの成果測定タグが付いた状態で取得できます。
const RAKUTEN_AFFILIATE_ID = "55b2aecd.814eb4fd.55b2aece.f8ec8188";
const RAKUTEN_ACCESS_KEY = "pk_Di2pCK0UIV1XqGMeOtVXNkv7pVPdEgtjoVu8mJtbPPr";

// ポスター画像と、DVD/Blu-ray商品ページへの直接リンク(アフィリエイトID付き)を
// まとめて取得・キャッシュする。同じキャッシュを両方の用途で使い回すので、
// 同じ作品について2回APIを叩くことはない。
async function fetchRakutenData(title, year){
  if (!RAKUTEN_APP_ID) return null;

  const cacheKey = `compass_rakuten_${title}_${year || ''}`;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached !== null) return cached === 'null' ? null : JSON.parse(cached);
  } catch (e) { /* localStorageが使えない環境でも動くよう無視 */ }

  try {
    const params = new URLSearchParams({
      applicationId: RAKUTEN_APP_ID,
      accessKey: RAKUTEN_ACCESS_KEY,
      title: title,
      hits: '1',
      formatVersion: '2',
    });
    if (RAKUTEN_AFFILIATE_ID) params.set('affiliateId', RAKUTEN_AFFILIATE_ID);
    const res = await fetch(`https://openapi.rakuten.co.jp/services/api/BooksDVD/Search/20170404?${params.toString()}`);
    if (!res.ok) throw new Error(`楽天ブックス検索に失敗しました (status: ${res.status})`);
    const data = await res.json();
    const items = data.Items || data.items || [];
    const first = items[0] ? (items[0].Item || items[0].item || items[0]) : null;
    const info = first ? {
      posterUrl: first.largeImageUrl || first.mediumImageUrl || null,
      // affiliateUrlがあればアフィリエイトID付きの商品リンク、無ければ通常の商品リンク
      itemUrl: first.affiliateUrl || first.itemUrl || null,
    } : null;
    try { localStorage.setItem(cacheKey, JSON.stringify(info)); } catch (e) {}
    return info;
  } catch (e) {
    console.warn('楽天ブックスのデータ取得に失敗しました:', title, e);
    return null;
  }
}

// 既存のposterUrl取得用(index.html等はこの関数名で呼んでいるので互換性を維持)
async function fetchPosterUrl(title, year){
  const data = await fetchRakutenData(title, year);
  return data ? data.posterUrl : null;
}

// DVD/Blu-ray商品ページへの直接リンク(アフィリエイトID付き)を取得する
async function fetchRakutenItemUrl(title, year){
  const data = await fetchRakutenData(title, year);
  return data ? data.itemUrl : null;
}

function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

// posterUrlが空の作品だけ、後から楽天ブックスで探せるように目印(data属性)をつける
function posterAttrs(m){
  if (m.posterUrl) return '';
  return `data-title="${m.title}" data-year="${m.year || ''}"`;
}

// キャッシュ済みかどうかだけを、APIを呼ばずに確認する(レート制限回避のため)
function peekRakutenCache(title, year){
  const cacheKey = `compass_rakuten_${title}_${year || ''}`;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached !== null) return { hit: true, value: cached === 'null' ? null : JSON.parse(cached) };
  } catch (e) { /* localStorageが使えない環境でも動くよう無視 */ }
  return { hit: false, value: null };
}

// ページ内の .poster[data-title] 要素(=posterUrlが空だった作品)に、
// 取得できた楽天ブックスのパッケージ画像を反映する。
// 楽天API側のレート制限にかからないよう、キャッシュ済みのものは即時反映しつつ、
// 実際にAPIへ問い合わせが必要なものだけ、1件ずつ間隔を空けて順番に処理する。
async function hydratePosterImages(){
  if (!RAKUTEN_APP_ID) return;
  const targets = Array.from(document.querySelectorAll(
    '.poster[data-title], .detail-poster[data-title], .related-poster[data-title], .poster-sm[data-title], .article-thumb[data-title]'
  ));
  if (!targets.length) return;

  const applyImage = (el, posterUrl) => {
    if (!posterUrl) return;
    el.style.backgroundImage = `url('${posterUrl}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  };

  // まずキャッシュ済みのものは、APIを呼ばずに即座に反映する(待ち時間なし)
  const pending = [];
  targets.forEach(el => {
    const cached = peekRakutenCache(el.dataset.title, el.dataset.year);
    if (cached.hit){
      applyImage(el, cached.value ? cached.value.posterUrl : null);
    } else {
      pending.push(el);
    }
  });
  if (!pending.length) return;

  // キャッシュに無いものだけ、1件ずつ順番に取得するキュー。
  // 楽天APIの公式ルール「1つのアプリIDにつき、1秒に1回以下のリクエスト」を守るため、
  // 取得の間隔は1秒以上空ける(ここを詰めるとAPIが一時停止するリスクがあるため不可)。
  const queue = [];
  const queued = new Set();
  let processing = false;

  async function processQueue(){
    if (processing) return;
    processing = true;
    while (queue.length){
      const el = queue.shift();
      const data = await fetchRakutenData(el.dataset.title, el.dataset.year);
      applyImage(el, data ? data.posterUrl : null);
      if (queue.length) await wait(1100);
    }
    processing = false;
  }

  function enqueue(el){
    if (queued.has(el)) return;
    queued.add(el);
    queue.push(el);
    processQueue();
  }

  // 画面に映っている(または、もうすぐ映る)カードから優先的に取得する。
  // これにより、ユーザーが実際に見ている部分はすぐ表示され、
  // スクロールして初めて見える部分は後回しになるので体感速度が上がる。
  if ('IntersectionObserver' in window){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          enqueue(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '400px 0px' });
    pending.forEach(el => observer.observe(el));
  } else {
    // IntersectionObserver非対応の環境では、従来通り上から順番に取得する
    pending.forEach(enqueue);
  }
}

// ポスター欄のCSS style文字列を作る(画像URLがあれば実画像、無ければ従来のグラデーション)
function posterStyle(m){
  return m.posterUrl
    ? `background-image:url('${m.posterUrl}');background-size:cover;background-position:center;`
    : `background:${m.gradient};`;
}

// platformsの中に「Amazon Prime Video」を含む作品かどうか判定
function isPrimeVideo(m){
  return (m.platforms || []).some(p => /prime/i.test(p.name));
}

async function loadMovies(){
  if (!SHEET_CSV_URL){
    movieData = DEFAULT_MOVIES;
    return;
  }
  try {
    const res = await fetch(SHEET_CSV_URL);
    if (!res.ok) throw new Error('fetch failed');
    const text = await res.text();
    const parsed = csvRowsToMovies(parseCSV(text));
    movieData = parsed.length ? parsed : DEFAULT_MOVIES;
  } catch (err){
    console.warn('スプレッドシートの読込に失敗したため、既定データを使用します', err);
    movieData = DEFAULT_MOVIES;
  }
}

function findMovieByTitle(title){
  return movieData.find(m => m.title === title);
}

// ==========================================================
// お気に入り(♡)の永続化
// ブラウザのlocalStorageに保存するので、リロードしても消えません。
// index.html と detail.html の両方からこの関数を使います。
// ==========================================================
const FAVORITES_KEY = 'compass_favorites';

function loadFavorites(){
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e){
    console.warn('お気に入りの読み込みに失敗しました', e);
    return new Set();
  }
}

function saveFavorites(favSet){
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favSet)));
  } catch (e){
    console.warn('お気に入りの保存に失敗しました', e);
  }
}

// TODO: Amazonアソシエイト等の審査が通ったら、URLの末尾に &tag=あなたのID を追加してください
function amazonSearchUrl(title){
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(title)}`;
}

// TODO: 楽天アフィリエイトのリンク発行が完了したら、専用の追跡リンクに差し替えてください。
// 今は仮として、楽天ブックスの通常検索結果に飛ぶだけのリンクにしています。
function rakutenSearchUrl(title){
  return `https://books.rakuten.co.jp/search/?g=001&sitem=${encodeURIComponent(title)}`;
}

// ==========================================================
// 配信サービスの「探すボタン」(URLパターンによる横断対応)
// ==========================================================
// 「今、どのサービスで配信中か」をリアルタイムに判定するAPIは
// 規約上使えないため(過去に確認済み)、代わりに各サービスのサイト内を
// Google検索で絞り込むリンクを生成します。内部の検索パラメータ名を
// 推測で組み立てるより、この方式の方が確実にリンク切れせず動作します。
const GENERIC_STREAMING_SERVICES = [
  { name: "U-NEXT",   domain: "video.unext.jp" },
  { name: "DMM TV",   domain: "tv.dmm.com" },
  { name: "Hulu",     domain: "www.hulu.jp" },
  { name: "Netflix",  domain: "www.netflix.com" },
  { name: "Disney+",  domain: "www.disneyplus.com" },
];

function serviceSiteSearchUrl(domain, title){
  return `https://www.google.com/search?q=${encodeURIComponent(`site:${domain} ${title}`)}`;
}

// GENERIC_STREAMING_SERVICESの内容から、探すボタン用のデータ配列を作る
function buildGenericStreamingLinks(title){
  return GENERIC_STREAMING_SERVICES.map(s => ({
    name: s.name,
    url: serviceSiteSearchUrl(s.domain, title),
  }));
}
