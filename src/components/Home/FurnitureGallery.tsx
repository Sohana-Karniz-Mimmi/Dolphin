import Image from "next/image";
const FurnitureGallery = () => {
  return (
    <section className="w-full">
      <h3 className="mb-[8px] text-center text-[20px] leading-[150%] font-semibold text-gray-2">
        Share your setup with
      </h3>
      <h2 className="text-center text-[30px] leading-[120%] font-bold text-gray-1 md:text-[40px]">
        #DolphinFurniture
      </h2>

      <div className="mt-[40px] xl:-mt-[30px] flex flex-col items-center gap-[16px] lg:flex-row">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-end gap-[16px]">
            <Image
              src="/images/share-your-setup/share-your-setup-1.png"
              width={400}
              height={500}
              alt="bedroom"
              className="h-[382px] w-[274px] object-cover object-right xl:w-[78px]"
            />
            <div>
              <Image
                src="/images/share-your-setup/share-your-setup-2.png"
                width={500}
                height={400}
                alt="bedroom"
                className="h-[312px] w-[451px] object-cover object-center"
              />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <Image
              src="/images/share-your-setup/share-your-setup-3.png"
              width={400}
              height={500}
              alt="bedroom"
              className="h-[323px] w-[381px] object-cover object-right xl:w-[186px]"
            />
            <Image
              src="/images/share-your-setup/share-your-setup-4.png"
              width={450}
              height={300}
              alt="bedroom"
              className="h-[242px] w-[344px] object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full sm:max-w-[295px] xl:-mt-[14px]">
          <Image
            src="/images/share-your-setup/share-your-setup-5.png"
            width={400}
            height={500}
            alt="bedroom"
            className="h-[392px] w-full object-cover object-center sm:w-[295px]"
          />
        </div>
        <div className="flex w-full flex-col gap-[16px] xl:max-w-[570px]">
          <div className="flex items-end gap-[16px]">
            <Image
              src="/images/share-your-setup/share-your-setup-6.png"
              width={400}
              height={500}
              alt="bedroom"
              className="h-[348px] w-[290px] object-cover object-center"
            />
            <Image
              src="/images/share-your-setup/share-your-setup-8.png"
              width={450}
              height={500}
              alt="galley-like-img-drawing-room"
              className="h-[433px] w-[425px] object-cover object-center"
            />
          </div>

          <div className="flex gap-[16px]">
            <Image
              src="/images/share-your-setup/share-your-setup-7.png"
              width={200}
              height={300}
              alt="bedroom"
              className="h-[242px] w-[178px] object-cover object-center"
            />
            <Image
              src="/images/share-your-setup/share-your-setup-9.png"
              width={400}
              height={300}
              alt="galley-like-img-drawing-room"
              className="h-[196px] w-[258px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureGallery;
