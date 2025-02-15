import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    content: "These indicators have completely transformed my trading strategy. The accuracy is remarkable.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
  },
  {
    name: "Michael Chen",
    role: "Day Trader",
    content: "The best technical analysis tools I've used. The support team is also incredibly helpful.",
    image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716"
  },
  {
    name: "David Wilson",
    role: "Forex Trader",
    content: "Worth every penny. The multi-timeframe analysis has given me a huge edge in the markets.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Trusted by Traders</h2>
          <p className="text-muted-foreground">See what our customers have to say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
