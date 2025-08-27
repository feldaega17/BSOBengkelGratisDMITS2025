"use client";

import NextImage from "@/components/NextImage";
import Button from "@/components/buttons/Button";

export default function BengkelPage() {
  return (
    <main className="flex h-full flex-col overflow-x-hidden">
      {/* Section 1 */}
      <section className="section-1 relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
        <NextImage
          alt="bg-image"
          width={1920}
          height={1080}
          src={"/bg-section-2.png"}
          className="absolute -z-10"
        />
        <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-75" />
        <div className="flex flex-col items-center">
          <div className="">
            <NextImage
              alt="bg-image"
              width={403}
              height={383}
              src={"/sticker-bengkel-demits.png"}
              className="w-full max-lg:w-24"
            />
          </div>

          <div className="flex justify-center flex-col mt-6 w-fit ">
            <Button 
              onClick={() => {
                window.location.href = "https://linktr.ee/BSO_BENGKEL_HMDMITS?fbclid=PAZXh0bgNhZW0CMTEAAaf7-SnyExActRG1JLes26GLgbJMVkclJ_4fcsK9LHNLfIMSLUAzrsxibL2wVg_aem_1OWAVQR29J34_Nhx6L3LOw";
              }}
              className="bg-white border-0 hover:border-0 text-black mt-6 py-4 px-20 max-lg:px-5 font-bold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white "
            >
              Servis Harian Bengkel
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/";
              }}
              className="bg-white border-0 hover:border-0 text-black mt-6 py-4 px-20 max-lg:px-5 font-bold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white "
            >
              Servis Gratis
            </Button>
            <hr className="my-6 border-t-2 border-white opacity-50 w-full" />
            <div className="flex gap-4 w-full items-center justify-center max-lg:flex-col">
              <Button 
                 onClick={() => {
                window.location.href = "https://www.instagram.com/bengkeldemits/";
              }}
                className="border-white bg-transparent text-white  py-3 px-10 max-lg:px-5 gap-2 justify-center items-center font-semibold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white mx-auto"
                >
                <NextImage
                  alt="bengkeldemits-logo"
                  width={24}
                  height={24}
                  src={"/icon-instagram.png"}
                  className=""
                />
                @bengkeldemits
              </Button>
              <Button 
                onClick={() => {
                window.location.href = "https://www.tiktok.com/@bengkeldemits";
              }}
                className="border-white bg-transparent text-white  py-3 px-10 max-lg:px-5 gap-2 justify-center items-center font-semibold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white mx-auto"
                >
                <NextImage
                  alt="bengkeldemits-logo"
                  width={24}
                  height={24}
                  src={"/icon-tiktok.png"}
                  className=""
                />
                @bengkeldemits
              </Button>
              <Button 
                 onClick={() => {
                window.location.href = "https://wa.me/6285194924517";
                }}
                className="border-white bg-transparent text-white  py-3 px-10 max-lg:px-5 gap-2 justify-center items-center font-semibold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white mx-auto">
                <NextImage
                  alt="bengkeldemits-logo"
                  width={24}
                  height={24}
                  src={"/icon-whatsapp.png"}
                  className=""
                />
                CP Bengkel DMITS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
