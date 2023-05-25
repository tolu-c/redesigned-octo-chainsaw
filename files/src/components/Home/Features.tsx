import { FC } from "react";

export const Features = () => {
  return (
    <div className="pt-24 w-full flex flex-col gap-10 md:gap-14 items-center">
      <h2 className="text-4xl md:text-6xl text-slate-800 font-bold text-center">
        What we offer
      </h2>
      <p className="text-center w-5/6 md:w-3/4 text-lg md:text-xl text-slate-700">
        Get started today and experience the peace of mind that comes with
        knowing your important files are safe and easily accessible.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-5/6 md:w-3/4">
        <FeatureCard
          title="Private and Secure"
          description="Your files are encrypted and stored securely to ensure maximum privacy and protection."
        />
        <FeatureCard
          title="Easy File Management"
          description="Organize your files into folders and access them anytime, anywhere."
        />
        <FeatureCard
          title="Quick Sharing"
          description="Share files securely with selected individuals or teams"
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}
export const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-12 px-8 border rounded hover:border-slate-900 hover:border-2">
      <h4 className="text-2xl text-slate-800 font-semibold text-center">
        {title}
      </h4>
      <p className="text-center w-3/4 md:w-full">{description}</p>
    </div>
  );
};
