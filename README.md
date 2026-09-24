# Stock

Drop a SKU export. Get a min, a max, and a safety stock a counter can actually run.

Zero and sporadic movers get almost nothing. Active parts get a min from lead-time demand plus safety stock, and a max at the cover cap. A carton only lands if the demand can eat it. Buy up to max only when the shelf is under min.

Same rules that kept a branch under 60 days of inventory. A sample CSV is in `public/`.

Runs on [geoffwalsh.xyz](https://geoffwalsh.xyz/tools/stock).

```bash
npm install
npm run dev
```
