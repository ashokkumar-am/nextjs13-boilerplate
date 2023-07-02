import AboutTailwind from "@/components/common/About/About-Tailwind";
import About1Tailwind from "@/components/common/About/About1-Tailwind";
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
   <>
   {/* <About1Tailwind/> */}
   <AboutTailwind/>
   </>
  );
};

export default page;
