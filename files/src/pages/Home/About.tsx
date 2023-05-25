import { FeatureCard } from "../../components/Home/Features";

const AboutPage = () => {
  return (
    <div className="w-full pt-16 p-8 flex flex-col gap-6 items-center">
      <h1 className="text-4xl md:text-6xl text-slate-950 font-bold text-center">
        About SecureFileVault
      </h1>
      <p className="text-center w-full md:w-3/4 text-lg md:text-xl text-slate-600">
        At SecureFileVault, we believe in the importance of data privacy and
        file security. Our mission is to provide individuals and businesses with
        a secure platform to store and manage their important files.
      </p>
      <div className="w-full flex flex-col gap-5 items-center mt-16 md:mt-20">
        <h4 className="text-2xl md:text-4xl text-slate-950 font-bold text-center">
          Why Choose SecureFileVault?
        </h4>
        <p className="text-center w-full md:w-3/4 text-lg md:text-xl text-slate-600">
          Join thousands of satisfied users who trust SecureFileVault for their
          file storage needs. Protect your valuable files with us today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-5/6 md:w-3/4">
          <FeatureCard
            title="Advanced Encryption:"
            description="We employ industry-standard encryption algorithms to ensure the confidentiality of your files."
          />
          <FeatureCard
            title="User-Friendly Interface"
            description="Our intuitive interface makes it easy for users to upload, organize, and retrieve their files."
          />
          <FeatureCard
            title="Reliable and Scalable"
            description="We have a robust infrastructure that guarantees high availability and scalability to meet your growing storage needs."
          />
          <FeatureCard
            title="Dedicated Customer Support"
            description="Our team is here to assist you and address any queries or concerns you may have."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
