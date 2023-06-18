"use client";

import CustomImage from "../CustomImage/CustomImageComponent";
import DateComponent from "../Date/DateComponent";
import Link from "next/link";


interface BlogPostProps {
  title: string;
  description: string;
  href: "";
  blogImage: string;
  author:string,
  postDate: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  href,
  blogImage,
  author,
  postDate,
}) => {
  // const myDate = new Date();

  return (
    <>
      <div className="rounded-md shadow-md p-4 text-black">
        <Link href="">
          <h2 className="text-2xl text-green-400 font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <p>date</p>
          <CustomImage
            src={blogImage}
            alt={title}
            className="mb-2"
            width={600}
            height={400}
          />
          <DateComponent date={postDate} />
          <p>{author}</p>
        </Link>
      </div>
    </>
  );
};

export default BlogPost;


// interface BlogCardProps {
//   title: string;
//   description: string;
//   postDate: string;
//   author: string;
//   image: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({
//   title,
//   description,
//   postDate,
//   author,
//   image,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <img src={image} alt={title} className="w-full h-auto mb-4 rounded-lg" />
//       <h2 className="text-2xl font-semibold mb-2">{title}</h2>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       <div className="flex items-center justify-between">
//         <p className="text-gray-500 text-sm">
//           {" "}
//           Posted on
//           <DateComponent date={postDate} />
//         </p>

//         <p className="text-gray-500 text-sm">By {author}</p>
//       </div>
//       <div className="mt-4">
//         <a
//           href="#"
//           className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
//         >
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
