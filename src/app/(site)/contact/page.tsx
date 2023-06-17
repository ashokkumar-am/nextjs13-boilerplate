import ContactForm from "@/components/common/Contact/ContactForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex items-center justify-center bg-blue-50">
          <ContactForm/>
        </div>
        <div className="flex items-center justify-center bg-red-50">
          Half Screen
        </div>
      </div>
    </>
  );
};

export default page;
