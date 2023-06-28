import ContactForm from "@/components/common/Contact/ContactForm";
import RGoogleMap from "@/components/common/GoogleMap/GoogleMap";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex items-center justify-center bg-blue-50">
          <ContactForm />
        </div>
        <div className="flex items-center justify-center bg-red-50">
          <RGoogleMap
            center={{
              lat: 0,
              lng: 0,
            }}
            zoom={0}
            markers={[]}
          />
        </div>
      </div>
    </>
  );
};

export default page;
