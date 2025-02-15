import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TradingCharts() {
  const charts = [
    {
      symbol: "BTCUSD",
      title: "Bitcoin Breakout Strategy",
      description: "Multiple profitable signals on the 4H timeframe",
    },
    {
      symbol: "EURUSD",
      title: "Forex Trend Detection",
      description: "High-probability forex setups with our indicators",
    },
    {
      symbol: "SPY",
      title: "Stock Market Scanner",
      description: "Real-time alerts for stock market opportunities",
    },
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Live Trading Signals</h2>
          <p className="text-muted-foreground">
            See our indicators in action with real market examples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {charts.map((chart, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{chart.title}</h3>
                  <p className="text-muted-foreground mb-4">{chart.description}</p>
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      key={chart.symbol}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${index}&symbol=${chart.symbol}&interval=240&hidesidetoolbar=1&hideplotborder=1&hidevolume=1&theme=dark`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
