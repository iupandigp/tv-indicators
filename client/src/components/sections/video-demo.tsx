import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function VideoDemo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
          <p className="text-muted-foreground">
            Watch how our indicators help you find profitable trades
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                {/* Replace the src with your actual video URL */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Trading Indicator Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-medium">
                  Watch our complete video guide to see how our indicators can transform your trading
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
