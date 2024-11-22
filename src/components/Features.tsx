import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Adaptive Layout",
    description:
      "Optimized for all devices, ensuring seamless user experience across platforms.",
    image: image,
  },
  {
    title: "User-friendly interface ",
    description:
      "Experience seamless navigation with our easy-to-use interface, designed to enhance productivity and simplify your digital journey.",
    image: image3,
  },
  {
    title: "Intelligent Analytics",
    description:
      "Harness the power of advanced analytics to drive smarter decisions and enhance operational efficiency.",
    image: image4,
  },
];

const featureList: string[] = [
  // "Dark/Light theme",
  // "Reviews",
  // "Features",
  // "Pricing",
  // "Contact form",
  // "Our team",
  // "Responsive design",
  // "Newsletter",
  // "Minimalist",
  "Customizable Interface",
  "Customer Testimonials",
  // "Flexible Pricing Plans",
  "Get in Touch",
  "Meet Our Experts",
  "Adaptive User Experience",
  "Stay Updated",
  "Sleek and Simple Design",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Packed with Powerful Features for Seamless{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Technology Solutions
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
