import NewsletterForm from "@/components/common/Newsletter/NewsletterForm";
import PricingTag from "@/components/common/Pricing/PricingTag";

export default function Home() {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h2 className="orange_gradient text-center">AI-Powered Prompts</h2>
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <h1 className="blue_gradient text-left">Green Gradient</h1>
          <h1 className="green_gradient text-left">Green Gradient</h1>
          <h1 className="glassmorphism">GLASSSSSSSSSS</h1>
        </h1>

        <p className="desc text-center">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
        <input className="search_input" type="search" />

        {/* <Feed /> */}
      </section>
      <NewsletterForm />
      {/* Pricing Tag */}
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-3 gap-8">
          <PricingTag
            title="Basic"
            price="19"
            monthlyPrice="19"
            annualPrice="190"
            details={["Feature 1", "Feature 2", "Feature 3"]}
          />
          <PricingTag
            title="Pro"
            price="39"
            monthlyPrice="39"
            annualPrice="390"
            details={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
          />
          <PricingTag
            title="Premium"
            price="99"
            monthlyPrice="99"
            annualPrice="990"
            details={[
              "Feature 1",
              "Feature 2",
              "Feature 3",
              "Feature 4",
              "Feature 5",
            ]}
          />
        </div>
      </div>

      <div className="prompt-card border border-slate-700">
        <div className="flex justify-between items-start w-full gap-5">
          <p className="my-4 font-satoshi text-sm text-gray-700 break-words">
            testing
          </p>
          <h1>Prompt Card</h1>
        </div>
      </div>
    </>
  );
}
