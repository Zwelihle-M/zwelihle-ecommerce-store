import ZwelihleMockup from "@/public/iPhone14Pro.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" top-0 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-8 text-center md:text-center">
        <div className="my-8 flex md:flex-row flex-col py-6">
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full ">
              <h1 className="flex-1 text-4xl md:text-8xl text-left">
                Zwelihle <br className="sm:block hidden" />
                {""}
                Ecommerce
                <span className="mr-2"></span>
                {""}
                <br className="sm:block hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryYellow to-secondaryYellow">
                  Store
                </span>
              </h1>
            </div>
            <p className="max-w-[470px] mt-5 text-left text-lg">
              Welcome to Zwelihle Ecommerce Browse the latest tech
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center md:my-0 my-10 ">
            <Image
              src={ZwelihleMockup}
              alt="Fortnite Hero Image"
              width={320}
              height={200}
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
