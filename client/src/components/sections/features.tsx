import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LineChart, BarChart, PieChart, Layers } from "lucide-react";

const features = [
  {
    title: "Advanced Technical Analysis",
    description: "Multiple timeframe analysis with custom algorithms",
    icon: LineChart
  },
  {
    title: "Market Scanner",
    description: "Scan multiple markets for trading opportunities",
    icon: BarChart
  },
  {
    title: "Risk Management",
    description: "Built-in position sizing and risk calculation",
    icon: PieChart
  },
  {
    title: "Multi-Asset Support",
    description: "Works with stocks, crypto, forex and commodities",
    icon: Layers
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">Everything you need for professional trading</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
