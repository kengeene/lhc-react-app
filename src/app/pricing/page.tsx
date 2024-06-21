import React from "react";

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  buttonText,
  isPopular,
  accentColor,
}: {
  title: string;
  subtitle: string;
  price: string;
  features: Array<{
    included: boolean;
    text: string;
  }>;
  buttonText: string;
  isPopular?: boolean;
  accentColor: string;
}) => (
  <div
    className={`bg-gray-900 rounded-lg p-6 flex flex-col ${
      isPopular ? "border-2 border-purple-600" : ""
    }`}
  >
    {isPopular && (
      <div className="bg-purple-600 text-white text-center py-1 px-4 rounded-full self-start mb-4">
        Popular
      </div>
    )}
    <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{subtitle}</p>
    <p className="text-white text-3xl font-bold mb-6">{price}</p>
    <ul className="space-y-2 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          {feature.included ? (
            <svg
              className={`w-5 h-5 ${accentColor} mr-2`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {feature.text}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 rounded ${
        isPopular
          ? "bg-purple-600 text-white"
          : "bg-transparent border border-gray-600 text-gray-300"
      }`}
    >
      {buttonText}
    </button>
  </div>
);

export default function Page(){
  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2">Pricing</h1>
      <p className="text-gray-400 text-center mb-8">
        Officia exercitation quis voluptate elit consequat nostrud
      </p>

      <div className="flex justify-center mb-8">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full mr-4">
          Monthly
        </button>
        {/* <button className="text-purple-400">Yearly</button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <PricingCard
          title="Free Plan"
          subtitle="I want problems"
          price="Free"
          features={[
            { included: true, text: "Random daily recommended recipes" },
            { included: true, text: "Pantry grocery tracker" },
            { included: false, text: "Unlimited AI generated recipes" },
          ]}
          buttonText="Subscribe"
          accentColor="text-blue-400"
        />
        <PricingCard
          title="Let Me Cook"
          subtitle="Make my life convenient"
          price="$3/month"
          features={[
            {
              included: true,
              text: "Curated recommended recipes(Based on pantry and preferences)",
            },
            { included: true, text: "Unlimited AI generated recipes" },
            { included: true, text: "Pantry grocery tracker" },
          ]}
          buttonText="Subscribe"
          //   isPopular={true}
          accentColor="text-purple-400"
        />
      </div>
    </div>
  );
};
