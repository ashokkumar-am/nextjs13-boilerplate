import ClientComponent from "@/components/common/Clients/ClientComponent";
import CustomImage from "@/components/common/CustomImage/CustomImageComponent";
import Hero from "@/components/common/Hero/Hero";


const page = () => {
  const clientData = {
    name: 'John Doe',
    companyName: 'Example Company',
    logo: '/banner1.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };
  return (
    <div className="h-80 min-h-screen">
      <div className="hero h-80">
        <h1 className="green_gradient text-5xl">Welcome to About Page</h1>
        <h1 className="blue_purple_pink text-4xl ">SARAH DEEKSHA </h1>
        <h1 className="indigo_sky_green text-2xl">ASHOK KUMAR A M</h1>
        
      </div>
      <Hero
        title="Welcome to My Hero App" image={"/banner2.jpeg"}
      />
      <ClientComponent client={clientData} />
    </div>
  );
};

export default page;
