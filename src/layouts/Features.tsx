import { FeaturesContent } from "@/constants/data";

interface FeatureCardProps {
  featureImage: string;
  featureDescription: string
}

const FeatureCard = ({ featureImage, featureDescription }: FeatureCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6">
      <img className="align-middle" src={featureImage} alt={featureDescription} />
      <p className=" font-heading font-semibold text-lg">{featureDescription}</p>
    </div>
  )
}

const Features = () => {
  return (
    <section className="px-default py-8">
      <div className="flex gap-y-9 gap-x-4 flex-wrap justify-evenly items-start">
        {
          FeaturesContent.map(featureItem => (
            <FeatureCard 
              key={featureItem.id}
              featureImage={featureItem.icon}
              featureDescription={featureItem.description}
            />
          ))
        }
      </div>

    </section>
  )
}

export default Features