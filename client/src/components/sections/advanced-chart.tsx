import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ChartConfig {
  symbol: string;
  interval: string;
}

let tvScriptLoadingPromise: Promise<void>;

export default function AdvancedChart() {
  const onLoadScriptRef = useRef<(() => void) | null>(null);
  const [config, setConfig] = useState<ChartConfig>({
    symbol: "BTCUSD",
    interval: "240",
  });

  const chartSymbols = [
    { name: "Bitcoin", symbol: "BTCUSD" },
    { name: "Ethereum", symbol: "ETHUSD" },
    { name: "S&P 500", symbol: "SPX" },
    { name: "EUR/USD", symbol: "EURUSD" },
  ];

  const intervals = [
    { name: "5m", value: "5" },
    { name: "15m", value: "15" },
    { name: "1h", value: "60" },
    { name: "4h", value: "240" },
    { name: "1d", value: "D" },
  ];

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => {
      onLoadScriptRef.current = null;
    };
  }, [config]);

  function createWidget() {
    if (
      document.getElementById("tradingview-widget") &&
      "TradingView" in window
    ) {
      new (window as any).TradingView.widget({
        container_id: "tradingview-widget",
        width: "100%",
        height: "600",
        symbol: config.symbol,
        interval: config.interval,
        timezone: "exchange",
        theme: "dark",
        style: "1",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        save_image: false,
        studies: [
          "RSI@tv-basicstudies",
          "MASimple@tv-basicstudies",
          "MACD@tv-basicstudies",
        ],
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        locale: "en",
      });
    }
  }

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Live Trading Analysis</h2>
          <p className="text-muted-foreground mb-8">
            Interactive charts with real-time market data and technical analysis
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <div className="space-x-2">
              {chartSymbols.map((item) => (
                <Button
                  key={item.symbol}
                  variant={config.symbol === item.symbol ? "default" : "outline"}
                  onClick={() => setConfig({ ...config, symbol: item.symbol })}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <div className="space-x-2">
              {intervals.map((item) => (
                <Button
                  key={item.value}
                  variant={config.interval === item.value ? "default" : "outline"}
                  onClick={() => setConfig({ ...config, interval: item.value })}
                  size="sm"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="w-full" style={{ height: "600px" }}>
                <div id="tradingview-widget" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
