const coins = [
  "1INCHUSDT",  "ACAUSDT", "ACHUSDT", "ACMUSDT", "ADAUSDT", "ADXUSDT", "AEVOUSDT",
  "AGIXUSDT", "AGLDUSDT", "AIOZUSDT", "AIRUSDT", "AKROUSDT", "ALCXUSDT", "ALGOUSDT", "ALICEUSDT",
  "ALPACAUSDT", "ALPHAUSDT", "ALPINEUSDT", "AMBUSDT", "ANKRUSDT", "ANTUSDT", "APEUSDT", "API3USDT",
  "APXUSDT", "ARBUSDT", "ARDRUSDT", "ARKMUSDT", "ARKUSDT", "ARPAUSDT", "ASRUSDT", "ASTRUSDT",
  "ASTUSDT", "ATAUSDT", "ATMUSDT", "ATOMUSDT", "AUCTIONUSDT", "AUDIOUSDT", "AURORAUSDT", "AUTOUSDT",
  "AVAXUSDT", "AXLUSDT", "AXSUSDT", "AZEROUSDT", "BADGERUSDT", "BAKEUSDT", "BALUSDT", "BANDUSDT",
  "BARUSDT", "BATUSDT", "BCHUSDT", "BELUSDT", "BETAUSDT", "BICOUSDT", "BIGTIMEUSDT", "BIFIUSDT",
  "BLURUSDT", "BLZUSDT", "BNBUSDT", "BNTUSDT", "BNXUSDT", "BONDUSDT", "BSWUSDT", "BTCUSDT",
  "BTGUSDT", "BTSUSDT", "BTTUSDT", "BURGERUSDT", "C98USDT", "CAKEUSDT", "CELOUSDT", "CELRUSDT",
  "CFXUSDT", "CHRUSDT", "CHZUSDT", "CKBUSDT", "CLVUSDT", "COMBOUSDT", "COMPUSDT", "COREUSDT",
  "COTIUSDT", "CRVUSDT", "CTKUSDT", "CTSIUSDT", "CVCUSDT", "CVPUSDT", "CVXUSDT", "CYBERUSDT",
  "DARUSDT", "DASHUSDT", "DATAUSDT", "DENTUSDT", "DEXEUSDT", "DFUSDT", "DGBUSDT", "DIAUSDT",
  "DOCKUSDT", "DODOUSDT", "DOGEUSDT", "DOTUSDT", "DREPUSDT", "DUSKUSDT", "DYDXUSDT", "EDUUSDT",
  "EGLDUSDT", "ELFUSDT", "ENJUSDT", "ENSUSDT", "EPXUSDT", "ERNUSDT", "ETCUSDT", "ETHUSDT",
  "FETUSDT", "FIDAUSDT", "FILUSDT", "FISUSDT", "FLMUSDT", "FLOWUSDT", "FLUXUSDT", "FORTHUSDT",
  "FRONTUSDT", "FTMUSDT", "FTTUSDT", "FXSUSDT", "GALUSDT", "GALAUSDT", "GASUSDT", "GLMRUSDT",
  "GLMUSDT", "GMTUSDT", "GMXUSDT", "GRTUSDT", "GTCUSDT", "HBARUSDT", "HFTUSDT", "HIGHUSDT",
  "HNTUSDT", "HOOKUSDT", "HOTUSDT", "ICPUSDT", "ICXUSDT", "IDEXUSDT", "IDUSDT", "IMXUSDT",
  "INJUSDT", "IOSTUSDT", "IOTAUSDT", "IOTXUSDT", "IQUSDT", "IRISUSDT", "JASMYUSDT", "JOEUSDT",
  "JSTUSDT", "JTOUSDT", "KAVAUSDT", "KDAUSDT", "KEYUSDT", "KLAYUSDT", "KNCUSDT", "KSMUSDT",
  "LAZIOUSDT", "LDOUSDT", "LEVERUSDT", "LINAUSDT", "LITUSDT", "LOOMUSDT", "LPTUSDT", "LQTYUSDT",
  "LRCUSDT", "LSKUSDT", "LTCUSDT", "LTOUSDT", "LUNAUSDT", "MAGICUSDT", "MANAUSDT", "MASKUSDT",
  "MATICUSDT", "MBLUSDT", "MCUSDT", "MDTUSDT", "MDXUSDT", "MINAUSDT", "MKRUSDT", "MOVRUSDT",
  "MTLUSDT", "MULTIUSDT", "NEARUSDT", "NEOUSDT", "NKNUSDT", "NMRUSDT", "NULSUSDT", "OCEANUSDT",
  "OGNUSDT", "OGUSDT", "OMUSDT", "OMGUSDT", "ONEUSDT", "ONGUSDT", "ONTUSDT", "OPUSDT",
  "ORBSUSDT", "ORCAUSDT", "ORDIUSDT", "OXTUSDT", "PENDLEUSDT", "PEOPLEUSDT", "PERLUSDT", "PERPUSDT",
  "PHAUSDT", "PHBUSDT", "PIVXUSDT", "PIXELUSDT", "PLAUSDT", "PNTUSDT", "POLSUSDT", "POLYXUSDT",
  "PORTOUSDT", "POWRUSDT", "PROMUSDT", "PROSUSDT", "PRQUSDT", "PUNDIXUSDT", "PYRUSDT", "QKCUSDT",
  "QNTUSDT", "QRDOUSDT", "QTUMUSDT", "QUICKUSDT", "RADUSDT", "RAYUSDT", "RBNUSDT", "RDNTUSDT",
  "REEFUSDT", "REIUSDT", "RENUSDT", "REQUSDT", "RIFUSDT", "RLCUSDT", "RNDRUSDT", "ROSEUSDT",
  "RSRUSDT", "RSS3USDT", "RUNEUSDT", "RVNUSDT", "SANDUSDT", "SFPUSDT", "SHIBUSDT", "SKLUSDT",
  "SLPUSDT", "SNXUSDT", "SOLUSDT", "SPELLUSDT", "SSVUSDT", "STEEMUSDT", "STGUSDT", "STMXUSDT",
  "STORJUSDT", "STPTUSDT", "STRAXUSDT", "STRKUSDT", "STXUSDT", "SUIUSDT", "SUNUSDT", "SUPERUSDT",
  "SUSHIUSDT", "SWEATUSDT", "SXPUSDT", "SYSUSDT", "TCTUSDT", "TFUELUSDT", "THETAUSDT", "TLMUSDT",
  "TOMOUSDT", "TRBUSDT", "TROYUSDT", "TRUUSDT", "TRXUSDT", "TUSDT", "TWTUSDT", "UMAUSDT",
  "UNFIUSDT", "UNIUSDT", "USDCUSDT", "USTCUSDT", "UTKUSDT", "VETUSDT", "VGXUSDT", "VIDTUSDT",
  "VITEUSDT", "VOXELUSDT", "VTHOUSDT", "WANUSDT", "WAVESUSDT", "WAXPUSDT", "WIFUSDT", "WILDUSDT",
  "WINGUSDT", "WINUSDT", "WNXMUSDT", "WOOUSDT", "WRXUSDT", "WTCUSDT", "XEMUSDT", "XLMUSDT",
  "XMRUSDT", "XNOUSDT", "XRPUSDT", "XTZUSDT", "XVSUSDT", "YFIUSDT", "YFIIUSDT", "ZECUSDT",
  "ZENUSDT", "ZILUSDT", "ZRXUSDT"
];


let currentPage = 0;
const perPage = 10;

const root = document.getElementById("root");

function getPakistanTime() {
  const date = new Date();
  const pkTime = new Date(date.getTime() + 5 * 60 * 60 * 1000);
  return pkTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatPrice(p) {
  if (p > 1) return p.toFixed(4);
  if (p > 0.1) return p.toFixed(5);
  if (p > 0.01) return p.toFixed(6);
  return p.toFixed(8);
}

function createSignalCard(signal) {
  return `
    <div class="card">
      <h3>🚀 ${signal.symbol}</h3>
      <p><strong>Entry:</strong> ${signal.entry}</p>
      <p><strong>Target:</strong> ${signal.target}</p>
      <p><strong>Stoploss:</strong> ${signal.sl}</p>
      <p><strong>Type:</strong> ${signal.type}</p>
      <p><strong>Strength:</strong> ${"★".repeat(signal.strength)}${"☆".repeat(5 - signal.strength)}</p>
      <p><strong>🕒 Time:</strong> ${signal.time}</p>
    </div>
  `;
}

async function fetchSignals(page = 0) {
  root.innerHTML = `<p>⏳ Signals loading...</p>`;
  const prePump = [], gainers = [], losers = [], intraday = [];
  const now = getPakistanTime();

  const start = page * perPage;
  const end = start + perPage;
  const selectedCoins = coins.slice(start, end);

  for (const coin of selectedCoins) {
    try {
      const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}`);
      const data = await res.json();
      const price = parseFloat(data.lastPrice);
      const change = parseFloat(data.priceChangePercent);

      const entry = formatPrice(price);
      const target = formatPrice(price * 1.08);
      const sl = formatPrice(price * 0.94);
      const symbol = coin.replace("USDT", "");
      const strength = change > 10 ? 5 : change < -8 ? 4 : change > 3 ? 4 : 3;

      const signal = { symbol, entry, target, sl, strength, time: now };

      if (change > 10) {
        signal.type = "Top Gainer";
        gainers.push(signal);
      } else if (change < -8) {
        signal.type = "Reversal Watch";
        losers.push(signal);
      } else if (change > 3 && change <= 8) {
        signal.type = "Pre-Pump Alert";
        prePump.push(signal);
      } else {
        signal.type = "Intraday Signal";
        intraday.push(signal);
      }
    } catch (err) {
      console.error(`Error fetching ${coin}:`, err);
    }
  }

  root.innerHTML = `
    <button onclick="fetchSignals(currentPage)">🔄 Refresh Signals</button>
    <button onclick="previousPage()">⏪ Previous</button>
    <button onclick="nextPage()">Next ⏩</button>
    <p>📃 Page ${currentPage + 1} of ${Math.ceil(coins.length / perPage)}</p>
    <h2>🔍 Pre-Pump Alerts</h2>
    ${prePump.map(createSignalCard).join("") || "<p>None</p>"}
    <h2>🚀 Top Gainers</h2>
    ${gainers.map(createSignalCard).join("") || "<p>None</p>"}
    <h2>🔁 Reversal Watch</h2>
    ${losers.map(createSignalCard).join("") || "<p>None</p>"}
    <h2>⏳ Intraday Signals</h2>
    ${intraday.map(createSignalCard).join("") || "<p>None</p>"}
  `;
}

function nextPage() {
  if ((currentPage + 1) * perPage < coins.length) {
    currentPage++;
    fetchSignals(currentPage);
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    fetchSignals(currentPage);
  }
}

window.onload = () => {
  fetchSignals(currentPage);
};
