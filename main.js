<!-- index.html remains the same, just update main.js with this -->

<script>
const coins = ["ORCAUSDT", "HIGHUSDT", "LINAUSDT"]; // 336 coins ka array yahan aayega
const root = document.getElementById("root");

function createSignalCard(signal) {
  return `
    <div style="background:#fff;border:1px solid #ccc;border-radius:10px;padding:15px;margin-bottom:10px;box-shadow:0 2px 5px rgba(0,0,0,0.1)">
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

  for (const coin of coins) {
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
    root.innerHTML = "<p>❌ No signals found.</p>";
  } else {
    root.innerHTML = `
      <button onclick="fetchSignals()" style="padding:10px 20px;margin-bottom:15px;background:green;color:white;border:none;border-radius:5px">🔄 Refresh Signals</button>
      ${results.map(createSignalCard).join("")}
    `;
  }
}

window.onload = () => {
  root.innerHTML = `
    <button onclick="fetchSignals()" style="padding:10px 20px;margin-bottom:15px;background:green;color:white;border:none;border-radius:5px">🔄 Refresh Signals</button>
    <p>📡 Click the button to load signals.</p>
  `;
};
</script>
