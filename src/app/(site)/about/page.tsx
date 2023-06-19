import ClientComponent from "@/components/common/Clients/ClientComponent";
import Hero from "@/components/common/HeroBanner/Hero";

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
        <Hero backgroundImage="/banner1.jpeg">
          <h2>Discover amazing content.</h2>
          <button>Get Started</button>
        </Hero>
      </div>
      <ClientComponent client={clientData} />
    </div>
  );
};

export default page;
