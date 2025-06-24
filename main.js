const coins = [
  "ORCAUSDT", "HIGHUSDT", "LINAUSDT", "SOLUSDT", "BTCUSDT", "ETHUSDT",
  "XRPUSDT", "DOGEUSDT", "MATICUSDT", "ADAUSDT", "BNBUSDT"
  // Yahan aap 336 coins ki full list paste kar sakti hain
];

const root = document.getElementById("root");

function createSignalCard(signal) {
  return `
    <div class="card">
      <h3>🚀 ${signal.symbol}</h3>
      <p><strong>Entry:</strong> ${signal.entry}</p>
      <p><strong>Target:</strong> ${signal.target}</p>
      <p><strong>Stoploss:</strong> ${signal.sl}</p>
      <p><strong>Type:</strong> ${signal.type}</p>
      <p><strong>Strength:</strong> ${'★'.repeat(signal.strength)}${'☆'.repeat(5 - signal.strength)}</p>
    </div>
  `;
}

async function fetchSignals() {
  root.innerHTML = `<p>⏳ Signals loading...</p>`;
  const results = [];
  const maxCoins = 20; // Batch limit (20 coins fetch at a time)

  for (let i = 0; i < coins.length && i < maxCoins; i++) {
    const coin = coins[i];
    try {
      const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}`);
      const data = await res.json();
      const price = parseFloat(data.lastPrice);
      const change = parseFloat(data.priceChangePercent);

      let type = "Intraday Signal";
      let strength = 3;
      if (change > 10) {
        type = "Top Gainer";
        strength = 5;
      } else if (change < -8) {
        type = "Reversal Watch";
        strength = 4;
      }

      const entry = price.toFixed(4);
      const target = (price * 1.08).toFixed(4);
      const sl = (price * 0.94).toFixed(4);

      results.push({ symbol: coin.replace("USDT", ""), entry, target, sl, type, strength });
    } catch (err) {
      console.error(`Error fetching ${coin}:`, err);
    }
  }

  if (results.length === 0) {
    root.innerHTML = "<p>❌ No signals found. Check internet or API access.</p>";
  } else {
    root.innerHTML = `
      <button onclick="fetchSignals()">🔄 Refresh Signals</button>
      ${results.map(createSignalCard).join("")}
    `;
  }
}

window.onload = () => {
  root.innerHTML = `
    <button onclick="fetchSignals()">🔄 Refresh Signals</button>
    <p>📡 Click the button to load signals.</p>
  `;
};
