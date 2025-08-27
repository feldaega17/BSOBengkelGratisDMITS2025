"use client";

import AOS from "aos";
import Link from "next/link";
import { useEffect } from "react";
import "aos/dist/aos.css";

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";

const testimonials = [
  {
    text: "Acara ini sangat bermanfaat. Semoga selalu konsisten.",
    name: "Wikan",
  },
  {
    text: "Sudah bagus, mungkin bisa menangani kerusakan major di event selanjutnya dan pembagian shift makan siang.",
    name: "Maya",
  },
  {
    text: "Saya sangat merekomendasikan acara ini untuk semua pemilik kendaraan di ITS.",
    name: "Budi Santoso",
  },
  {
    text: "Teknisi sangat berpengalaman dan ramah. Motor saya jadi lebih nyaman.",
    name: "Agus Prasetyo",
  },
  {
    text: "Acara yang sangat bermanfaat dan gratis! Semoga terus diadakan setiap tahun.",
    name: "Wirawan",
  },
];

function MarqueeTestimoni() {
  // Duplicate testimonials for seamless loop
  const marqueeTestimonials = [...testimonials, ...testimonials];
  return (
    <div className="w-full overflow-x-hidden pb-2" data-aos="fade-up">
      <div
        className="flex gap-6 animate-marquee"
        style={{ width: "max-content" }}
      >
        {marqueeTestimonials.map((item, idx) => (
          <div
            key={idx}
            className="w-96 h-40 flex flex-col justify-between bg-gray-200 px-6 py-4 rounded-lg shadow transition-all duration-500 shrink-0"
          >
            <Typography variant="p" className="text-gray-600 text-sm">
              "{item.text}"
            </Typography>
            <div className="mt-4">
              <Typography variant="p" className="text-black text-sm">
                - {item.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      {/* Tailwind custom animation: animate-marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya jalan sekali
    });
  }, []);
  return (
    <>
      <nav className="w-full fixed z-30 flex justify-between items-center py-4 px-6 bg-black">
        <div className="flex items-center justify-center">
          <NextImage
            alt="logo"
            width={40}
            height={40}
            src={"/logo-services.png"}
            className="mr-2"
          />
          <div className="text-white text-base">SERVICE GRATIS 2025</div>
        </div>
        <div className="flex items-center">
          <a
            href="#tentang"
            className="text-white mx-4 text-base cursor-pointer"
          >
            Tentang Acara
          </a>
          <a
            href="#pelayanan"
            className="text-white mx-4 text-base cursor-pointer"
          >
            Pelayanan
          </a>
          <a
            href="#syarat"
            className="text-white mx-4 text-base cursor-pointer"
          >
            Syarat
          </a>
          <a
            href="#informasi"
            className="text-white mx-4 text-base cursor-pointer"
          >
            Informasi Tambahan
          </a>
        </div>
        <Button className="border-white bg-transparent text-white  py-2 px-6 max-lg:px-5 gap-2 justify-center items-center font-semibold text-sm max-lg:text-sm hover:bg-red-700 hover:text-white ">
          <NextImage
            alt="bengkeldemits-logo"
            width={20}
            height={20}
            src={"/icon-whatsapp.png"}
            className="text-base"
          />
          Bengkel Demits
        </Button>
      </nav>
      <main className="flex h-full flex-col overflow-x-hidden">
        {/* Section 1 */}
        <section className="section-1 relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
          <NextImage
            alt="bg-image"
            width={1920}
            height={1080}
            src={"/bg-section.png"}
            // className="absolute inset-0 -z-10 h-full w-full object-cover  "
            className="absolute -z-10"
          />
          <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-75" />
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 bottom-4">
              <NextImage
                alt="bg-image"
                width={203}
                height={183}
                src={"/logo-demits.png"}
                className="w-full max-lg:w-24"
              />
              <NextImage
                alt="bg-image"
                width={203}
                height={183}
                src={"/logo-services.png"}
                className="w-full max-lg:w-24"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Typography
                variant="h1"
                weight="bold"
                className="relative z-10 text-white max-lg:text-2xl"
              >
                SERVICE GRATIS 2025
              </Typography>
              <Typography variant="h4" className="relative z-10 text-white">
                BSO Bengkel DTMI ITS
              </Typography>
            </div>
            <div className="flex justify-center flex-col mt-6 w-fit">
              <Button
                onClick={() => {
                  window.location.href =
                    "https://its.id/m/PENDAFTARAN_GRATIS2025";
                }}
                className="bg-white border-0 hover:border-0 text-black mt-6 py-4 px-20 max-lg:px-5 font-bold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white"
              >
                {" "}
                Daftar Servies Gratis Sekarang!
              </Button>

              <hr className="my-6 border-t-2 border-white opacity-50 w-full" />
              <div className="flex gap-4 w-full items-center justify-center">
                <Button
                  onClick={() => {
                    window.location.href = "https://wa.me/6285194924517";
                  }}
                  className="border-white bg-transparent text-white  py-3 px-6 max-lg:px-5 gap-2 justify-center items-center font-semibold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white mx-auto"
                >
                  <NextImage
                    alt="bengkeldemits-logo"
                    width={24}
                    height={24}
                    src={"/icon-whatsapp.png"}
                    className=""
                  />
                  CP BSO Bengkel Demits
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = "https://wa.me/6285606466522";
                  }}
                  className="border-white bg-transparent text-white  py-3 px-6 max-lg:px-5 gap-2 justify-center items-center font-semibold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white mx-auto"
                >
                  <NextImage
                    alt="bengkeldemits-logo"
                    width={24}
                    height={24}
                    src={"/icon-whatsapp.png"}
                    className=""
                  />
                  Erulia (Service Gratis)
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = "https://wa.me/6281261867562";
                  }}
                  className="border-white bg-transparent text-white  py-3 px-6 max-lg:px-5 gap-2 justify-center items-center font-semibold text-2xl max-lg:text-base hover:bg-red-700 hover:text-white mx-auto"
                >
                  <NextImage
                    alt="bengkeldemits-logo"
                    width={24}
                    height={24}
                    src={"/icon-whatsapp.png"}
                    className=""
                  />
                  Alfattah (Service Gratis)
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="tentang"
          className="flex flex-col h-screen w-screen gap-10 items-center justify-center bg-white max-lg:h-full "
        >
          <div className="flex w-3/4 gap-6 ">
            <NextImage
              alt="bg-image"
              width={460}
              height={410}
              src={"/tentang-image.png"}
              className=""
              data-aos="fade-right"
            />
            <div className="w-3/4 flex flex-col gap-2 " data-aos="fade-right">
              <Typography variant="h4" weight="bold" className="text-black">
                Tentang Acara
              </Typography>
              <Typography variant="p" className="text-gray-600">
                Service Gratis merupakan Big Event tahunan yang diselenggarakan
                oleh BSO Bengkel Himpunan Mahasiswa Departemen Teknik Mesin
                Industri ITS. Kegiatan ini menjadi perwujudan konkret dari
                pelaksanaan Tri Dharma Perguruan Tinggi, khususnya dalam aspek
                pengabdian kepada masyarakat. Melalui program ini, mahasiswa
                Teknik Mesin Industri ITS berkontribusi langsung dengan
                menyediakan layanan servis kendaraan bermotor secara gratis bagi
                masyarakat umum dan civitas akademika ITS. Selain memberikan
                manfaat sosial, kegiatan ini juga berfungsi sebagai media
                pembelajaran aplikatif yang memungkinkan mahasiswa untuk
                mengasah keterampilan teknis dan profesionalisme di bidang
                otomotif melalui pengalaman nyata di lapangan.
              </Typography>
            </div>
          </div>

          <div className="mt-6" data-aos="fade-up">
            <Typography variant="h5" weight="bold" className="text-black ">
              Kritik & Saran Service Gratis 2024
            </Typography>
          </div>

          {/* Marquee Testimoni */}
          <MarqueeTestimoni />
        </section>

        {/* Section 3 */}
        <div
          id="pelayanan"
          className="h-screen w-screen relative bg-white items-center flex flex-col justify-center max-lg:hidden"
        >
          <Typography
            variant="h3"
            weight="bold"
            className="text-black"
            data-aos="fade-left"
          >
            Pelayanan
          </Typography>
          <div className="flex mt-6 gap-6">
            {/* Services Mobil */}
            <div
              className="bg-red-600 h-[480px] flex gap-2 flex-col px-5 py-6 rounded-lg"
              data-aos="fade-up"
            >
              <NextImage
                alt="bg-image"
                width={388}
                height={236}
                src={"/services-mobil-image.png"}
                className="w-72"
              />
              <Typography variant="h5" className="text-white" weight="bold">
                Services Mobil
              </Typography>
              <ul className="list-disc list-inside text-white ml-2">
                <li>Tune-up Ringan</li>
                <li>Penggantian Oli</li>
                <li>Spooring & balancing</li>
                <li>Pemeriksaan AC</li>
              </ul>
              <Typography variant="p" className="text-white" weight="bold">
                Kuota: 20 Mobil
              </Typography>
            </div>
            {/* Services Motor */}
            <div
              className="bg-red-600 h-[480px] flex gap-2 flex-col px-5 py-6 rounded-lg"
              data-aos="fade-up"
            >
              <NextImage
                alt="bg-image"
                width={388}
                height={236}
                src={"/services-motor-image.png"}
                className="w-72"
              />
              <Typography variant="h5" className="text-white" weight="bold">
                Services Motor
              </Typography>
              <ul className="list-disc list-inside text-white ml-2">
                <li>Tune-up Ringan</li>
                <li>Penggantian Oli</li>
                <li>Pemeriksaan Rem</li>
                <li>Pemeriksaan Lampu</li>
              </ul>
              <Typography variant="p" className="text-white" weight="bold">
                Kuota: 100 Motor
              </Typography>
            </div>
            {/* Cuci Kendaraan */}
            <div
              className="bg-red-600 h-[480px] flex gap-2 flex-col px-5 py-6 rounded-lg"
              data-aos="fade-up"
            >
              <NextImage
                alt="bg-image"
                width={388}
                height={236}
                src={"/cuci-motor-image.png"}
                className="w-72"
              />
              <Typography variant="h5" className="text-white" weight="bold">
                Cuci Motor
              </Typography>
              <Typography variant="p" className="text-white" weight="medium">
                Layanan cuci motor
              </Typography>
              <Typography variant="p" className="text-white" weight="bold">
                Kuota: 100 Kendaraan
              </Typography>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div
          id="syarat"
          className="flex bg-white h-fit w-screen relative px-24 pt-32 pb-64 overflow-hidden max-lg:hidden"
        >
          <div className="flex flex-col" data-aos="fade-up">
            <Typography variant="h2" weight="bold" className="">
              Syarat dan Ketentuan
            </Typography>
            <ol
              className="list-decimal list-inside text-black ml-6 space-y-1 mt-4"
              data-aos="fade-up"
            >
              <li>
                Sepeda motor Honda (matic dan bebek) tahun produksi 2016-2025
              </li>
              <li>
                Mobil Toyota, Daihatsu, dan Honda tahun produksi 2010-2025
              </li>
              <li>Membawa invoice saat registrasi</li>
              <li>Wajib menunjukkan KTP dan STNK asli saat registrasi</li>
              <li>Peserta tercepat dapat layanan ganti oli gratis</li>
              <li>
                Suku cadang tersedia dengan harga transparan dan rekomendasi
                teknisi
              </li>
            </ol>
          </div>

          <NextImage
            className="absolute -bottom-16 right-0"
            width={630}
            height={412}
            alt="logo-demits"
            src={"/logo-demits-big.png"}
            data-aos="fade-left"
          />
        </div>

        <div className="bg-red-700 w-full overflow-x-hidden py-2 max-lg:hidden">
          <div
            className="flex items-center animate-banner-marquee whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {Array.from({ length: 8 }).map((_, idx) => (
              <Typography
                key={idx}
                variant="h3"
                weight="bold"
                className="text-white mx-8 inline-block"
              >
                SERVICE GRATIS 2025
              </Typography>
            ))}
          </div>
          <style>{`
          @keyframes banner-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-banner-marquee {
            animation: banner-marquee 18s linear infinite;
          }
        `}</style>
        </div>

        {/* Section 5 */}
        <div id="informasi" className="flex bg-white justify-center">
          <div className="flex flex-col items-center justify-center bg-white py-10 px-6 gap-4">
            <NextImage
              alt=""
              src={"/denah-image.png"}
              width={420}
              height={225}
              data-aos="fade-right"
            />
            <NextImage
              alt=""
              src={"/mobilisasi-image.png"}
              width={420}
              height={225}
              data-aos="fade-right"
            />
          </div>
          <div className="py-10 px-6 w-1/2">
            <Typography
              variant="h3"
              className="text-black"
              weight="bold"
              data-aos="fade-up"
            >
              Informasi Tambahan
            </Typography>
            <Typography
              variant="p"
              className="text-gray-600"
              weight="medium"
              data-aos="fade-up"
            >
              Acara Service Gratis BSO Bengkel HMDM ITS 2025 akan berlangsung
              selama dua hari penuh di area workshop bengkel Departemen Teknik
              Mesin Industri (DTMI) ITS dengan lokasi indoor yang nyaman dan
              aman dari cuaca. Seluruh layanan akan ditangani langsung oleh
              mahasiswa Teknik Mesin Industri berpengalaman, didampingi oleh
              dosen pembimbing ahli.
            </Typography>
            <div className="mt-8" data-aos="fade-up">
              <Typography variant="p" weight="medium">
                Pelaksanaan Acara
              </Typography>
              <Typography variant="h5" weight="bold">
                13 - 14 September 2025
              </Typography>
            </div>
            <div className="mt-6" data-aos="fade-up">
              <Typography variant="h5" weight="medium">
                Fasilitas Penunjang
              </Typography>
              <ul className="list-disc list-inside text-black ml-6 space-y-1 ">
                <li>Safety Riding</li>
                <li>Medical Check Up</li>
                <li>Tenda Tunggu Nyaman</li>
                <li>Tenant Makanan & Minuman</li>
                <li>Konsultasi Otomotif Langsung dengan Mekanik Bengkel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
          <Typography
            variant="h4"
            className="text-red-600"
            weight="bold"
            data-aos="fade-up"
          >
            BSO BENGKEL DMITS
          </Typography>
          <NextImage
            alt=""
            src={"/sticker-bengkel-demits.png"}
            width={484}
            height={161}
            data-aos="fade-up"
          />
          <Typography
            variant="p"
            className="text-gray-600 w-1/2 text-center mt-6"
            weight="medium"
            data-aos="fade-right"
          >
            BSO Bengkel DTMI ITS bukan hanya sekadar tempat servis motor tetapi
            pusat perawatan terbaik bagi pecinta roda dua. Di sini, kendaraan
            dirawat dengan sepenuh hati oleh tangan-tangan terampil yang
            berpengalaman.
          </Typography>
          <div
            className="w-1/2 flex justify-center items-center gap-4 my-6"
            data-aos="fade-up"
          >
            <hr className="border-black my-4 border-2 w-full" />
            <Typography
              variant="p"
              weight="semibold"
              className="text-nowrap text-center"
            >
              Social Media
            </Typography>
            <hr className="border-black my-4 border-2 w-full" />
          </div>
          <div className="flex gap-4 w-full items-center justify-center text-black">
            <Link
              className="bg-transparent flex gap-1"
              href="https://www.instagram.com/bengkeldemits"
              data-aos="fade-right"
            >
              <NextImage
                alt="instagram-logo"
                width={24}
                height={24}
                src={"/icon-instagram-white.png"}
                className="text-black"
              />
              @bengkeldemits
            </Link>
            <Link
              className="bg-transparent flex gap-1"
              href="https://www.tiktok.com/@bengkeldemits"
              data-aos="fade-right"
            >
              <NextImage
                alt="tiktok-logo"
                width={24}
                height={24}
                src={"/icon-tiktok-white.png"}
                className=""
              />
              @bengkeldemits
            </Link>
          </div>
        </div>

        <div className="bg-white px-8 pb-10">
          <hr className="border-gray-400 my-4 border-1 w-full" />
          <div className="text-sm text-black">
            © SERVICE GRATIS 2025. BSO BENGKEL DEMITS
          </div>
        </div>
      </main>
    </>
  );
}
