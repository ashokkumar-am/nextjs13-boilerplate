import BlogCard from "@/components/common/Blog/blogcard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <div>
        Blog page
        <BlogCard
          title={"welcome"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
          }
          postDate={"2023-03-01"}
          author={"test author"}
          blogImage={"http://via.placeholder.com/640x360"}
          href={""}
        />
      </div>
    </div>
  );
};

export default page;
