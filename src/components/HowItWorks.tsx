import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "We design solutions that are inclusive and easy for everyone to navigate.",
  },
  {
    icon: <MapIcon />,
    title: "Stronger Together",
    description:
      "Enabling businesses with seamless connectivity and collaborative technology solutions.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalable Solutions",
    description:
      "Designed for flexibility, our solutions evolve alongside your business and tech requirements.",
  },
  {
    icon: <GiftIcon />,
    title: "Interactive Experiences",
    description:
      "Boosting user interaction through innovative, technology-driven solutions.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How We{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Work :{" "}
        </span>
        A Clear and Simple Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        We guide you through each phase with expertise, delivering tailored IT
        solutions that meet your unique business needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
