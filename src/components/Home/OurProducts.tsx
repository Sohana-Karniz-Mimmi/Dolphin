import React from "react";
import products from "@/mock/product";
import Button from "@/ui/Button";
import ProductCard from "@/ui/ProductCard";

const OurProducts = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1236px] mx-auto">
        {/* Title */}
        <h2 className="text-gray-1 text-center text-[30px] md:text-[40px] font-bold leading-[120%] capitalize">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32] justify-center py-[20px] md:py-[32px]">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button className="max-w-[245px] h-[48px] bg-white !text-primary font-semibold leading-[150%] border border-primary">
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;








// import React from "react";
// import Image from "next/image";
// import products from "@/mock/product";
// import Button from "@/ui/Button";
// import { ShareIcon } from "@/ui/icons/ShareIcon";
// import { CompareIcon } from "@/ui/icons/CompareIcon";
// import { LikeIcon } from "@/ui/icons/LikeIcon";
// import { generateProductBadge } from "@/utils/price";

// const OurProducts = () => {
//   return (
//     <section className="w-full">
//       <div className="w-full max-w-[1236px] mx-auto">
//         {/* Title */}
//         <h2 className="text-gray-1 text-center text-[30px] md:text-[40px] font-bold leading-[120%] capitalize">
//           Our Products
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[32] justify-center py-[20px] md:py-[32px]">
//           {products.slice(0, 8).map((product) => {
//             const badge = generateProductBadge(product);

//             return (
//               <div
//                 key={product._id}
//                 className="w-full md:max-w-[285px] mx-auto h-[446px] flex flex-col  group relative"
//               >
//                 {/* Image */}
//                 <div className="relative w-full h-[301px] shrink-0">
//                   <Image
//                     src={product.mainImage}
//                     alt={product.name}
//                     fill
//                     className="object-cover"
//                   />

//                   {/* Badge */}
//                   {badge && (
//                     <div
//                       className={`absolute top-3 right-3 w-[48px] h-[48px] rounded-full flex items-center justify-center text-[16px] font-medium leading-[150%]
//                      ${badge.color === "red" ? "bg-[#E97171] text-white" : ""}
//                      ${
//                        badge.color === "green" ? "bg-[#2EC1AC] text-white" : ""
//                      }`}
//                     >
//                       <span className="font-semibold text-[14px]">
//                         {badge.text}
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Info */}
//                 <div className="bg-[#F4F5F7] flex-grow pt-[16px] pr-[20px] pb-[30px] pl-[16px]">
//                   <h3 className="text-gray-1 text-[24px] font-semibold leading-[120%]">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-3 text-[16px] font-medium leading-[150%] my-[8px]">
//                     {product.subTitle}
//                   </p>

//                   {/* Price */}
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-1 text-[20px] font-semibold leading-[150%]">
//                       Rp {product.price.currentPrice.toLocaleString("id-ID")}
//                     </span>
//                     {product.price.originalPrice >
//                       product.price.currentPrice && (
//                       <span className="text-gray-4 text-[16px] font-normal leading-[150%] line-through">
//                         Rp {product.price.originalPrice.toLocaleString("id-ID")}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
//                   {/* Background layer */}
//                   <div className="absolute inset-0 bg-gray-1 opacity-[0.72]"></div>
//                   <div className="relative z-10 w-full flex flex-col items-center gap-[24px]">
//                     {/* Add to Cart Button */}
//                     <Button className="max-w-[202px] h-[48px] bg-white !text-primary font-semibold leading-[150%]">
//                       Add to Cart
//                     </Button>

//                     {/* Action Buttons */}
//                     <div className="flex items-center gap-[20px] text-white">
//                       {/* Share */}
//                       <button className="flex items-center gap-[2px] font-poppins font-semibold leading-[150%] text-[15px] sm:text-[16px] cursor-pointer">
//                         <ShareIcon />
//                         Share
//                       </button>

//                       {/* Compare */}
//                       <button className="flex items-center gap-[2px] font-poppins font-semibold leading-[150%] text-[15px] sm:text-[16px] cursor-pointer">
//                         <CompareIcon />
//                         Compare
//                       </button>

//                       {/* Like */}
//                       <button className="flex items-center gap-[2px] font-poppins font-semibold leading-[150%] text-[15px] sm:text-[16px] cursor-pointer">
//                         <LikeIcon />
//                         Like
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex justify-center">
//           <Button className="max-w-[245px] h-[48px] bg-white !text-primary font-semibold leading-[150%] border border-primary">
//             {" "}
//             Show More{" "}
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProducts;
