"use client";

import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "Tim yang profesional dan ramah membuat pengalaman saya sangat menyenangkan.",
    name: "John Doe",
  },
  {
    text: "Pelayanan sangat cepat dan hasilnya memuaskan. Terima kasih Bengkel Demits!",
    name: "Siti Aminah",
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
    name: "Dewi Lestari",
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
    <main className="flex h-full flex-col overflow-x-hidden">
      {/* Section 1 */}
      <section className="section-1 relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
        <NextImage
          alt="bg-image"
          width={1920}
          height={1080}
          src={"/bg-section.png"}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 h-full w-full bg-black opacity-75" />
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 bottom-4">
            <NextImage
              alt="bg-image"
              width={203}
              height={183}
              src={"/logo-demits.png"}
              className=""
            />
            <NextImage
              alt="bg-image"
              width={203}
              height={183}
              src={"/logo-services.png"}
              className=""
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Typography
              variant="h1"
              weight="bold"
              className="relative z-10 text-white"
            >
              SERVICES GRATIS 2025
            </Typography>
            <Typography variant="h4" className="relative z-10 text-white">
              BSO Bengkel DTMI ITS
            </Typography>
          </div>
          <div className="flex justify-center flex-col mt-6 w-fit">
            <Button className="bg-white border-0 hover:border-0 text-black mt-6 py-4 px-20 font-bold text-2xl hover:bg-red-700 hover:text-white mx-auto">
              Daftar Services Gratis Sekarang!
            </Button>
            <hr className="my-6 border-t-2 border-white opacity-50 w-full" />
            <div className="flex gap-4 w-full items-center justify-center">
              <Link className="bg-transparent flex gap-1" href="/daftar">
                <NextImage
                  alt="instagram-logo"
                  width={24}
                  height={24}
                  src={"/icon-instagram.png"}
                  className=""
                />
                @bengkeldemits
              </Link>
              <Link className="bg-transparent flex gap-1" href="/daftar">
                <NextImage
                  alt="tiktok-logo"
                  width={24}
                  height={24}
                  src={"/icon-tiktok.png"}
                  className=""
                />
                @bengkeldemits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col h-screen w-screen gap-10 items-center justify-center bg-white ">
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
              pembelajaran aplikatif yang memungkinkan mahasiswa untuk mengasah
              keterampilan teknis dan profesionalisme di bidang otomotif melalui
              pengalaman nyata di lapangan.
            </Typography>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <Typography variant="h5" weight="bold" className="text-black ">
            Testimoni Bengkel Demits
          </Typography>
        </div>

        {/* Marquee Testimoni */}
        <MarqueeTestimoni />
      </section>

      {/* Section 3 */}
      <div className="h-screen w-screen relative bg-white items-center flex flex-col justify-center">
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
      <div className="flex bg-white h-fit w-screen relative px-24 pt-32 pb-64 overflow-hidden">
        <div className="flex flex-col" data-aos="fade-up">
          <Typography variant="h2" weight="bold" className="">
            Syarat dan Ketentuan
          </Typography>
          <ul
            className="list-disc list-inside text-black ml-6 space-y-1 mt-4"
            data-aos="fade-up"
          >
            <li>
              Sepeda motor Honda (matic dan bebek) tahun produksi 2016-2025
            </li>
            <li>Mobil Toyota, Daihatsu, dan Honda tahun produksi 2010-2025</li>
            <li>Membawa invoice saat registrasi</li>
            <li>Wajib menunjukkan KTP dan STNK asli saat registrasi</li>
            <li>Peserta tercepat dapat layanan ganti oli gratis</li>
            <li>
              Suku cadang tersedia dengan harga transparan dan rekomendasi
              teknisi
            </li>
          </ul>
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

      <div className="bg-red-700 w-full overflow-x-hidden py-2">
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
              BENGKEL DEMITS 2025
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
    </main>
  );
}
