// import { useState } from "react";
import HeaderView from "../components/Header";
import { Button } from "antd";
import img1 from "../assets/Maskgroup.svg";
import alatberat1 from "../assets/alatberat1.jpeg";
import alatberat3 from "../assets/alatberat3.jpeg";
import alatberat4 from "../assets/alatberat4.jpeg";
import alatberat5 from "../assets/alatberat5.jpeg";
import img2 from "../assets/Maskgroup2.svg";
// import img3 from "../assets/Sectionlast.jpg";
// import alat1 from "../assets/gambar1.svg";
import Slider from "react-slick";
import Footer from "../components/Footer";
import alat from "../assets/Rectangle2.svg";
import client1 from "../assets/PT.svg";
import client2 from "../assets/conf_image 160.svg";
import client3 from "../assets/Adhi_Karya.svg";
import client4 from "../assets/tatamulia_nusantara_indah_pt.svg";
import client5 from "../assets/20200224151642_55712.svg";
import client6 from "../assets/logo200.svg";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <HeaderView />
      <div className="max-h-[699px] bg-[url('/Hero.jpg')] pt-[40px] md:pt-[100px] bg-cover h-[auto] md:h-[609px]">
        <div className="w-[100%] md:w-[90%] block m-auto ">
          <p className="pb-[16px] text-[#1D1D1D] text-[28px] md:text-[36px] font-bold text-center capitalize">
            Reliable Solution for Your Project
          </p>
          <p className="pb-[40px] text-[#494949] text-[16px] md:text-[20px] font-normal text-center capitalize">
            Plan for a resilient future with our heavy construction equipment.
            <br />
            We present the best quality to fulfill your big projects
          </p>
          <div className="flex flex-row justify-center pb-[100px]">
            <a href="https://wa.me/+6281321130071" target="_blank">
              <Button
                type="primary"
                className="px-[25px] md:px-[32px] py-[12px] rounded-[999px] bg-[black] h-auto  mr-[24px] font-semibold text-[14px] md:text-[16px]"
              >
                Hubungi Kami
              </Button>
            </a>
            <Button
              className="bg-[white] px-[25px] md:px-[32px] py-[12px] rounded-[999px] bg-[black] h-auto  mr-[24px] font-semibold text-[14px] md:text-[16px]"
              onClick={() => navigate("/alat-berat")}
            >
              Lihat Alat Berat
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="h-[448px] bg-[#FFFFF7] pl-[87px] flex flex-row ">
          <div className="flex justify-end absolute z-1 right-0 max-w-[668px] max-h-[469px]">
            <img src={img1} className="flex justify-end w-[100%]" />
          </div>
          <div className="pt-[101px]">
            <p className="text-[#1D1D1D] text-[36px] font-semibold font-[Poppins] pb-[32px]">
              Mengapa Memilih Kami?
            </p>
            <p className="text-[#1D1D1D] text-[16px] font-normal font-[Poppins]  pb-[32px] w-[70%] md:w-[50%]">
              Kami bertujuan menjadi pilihan dalam industri persewaan alat berat
              dan menyediakan solusi terpadu terbaik dalam kelasnya untuk
              memenuhi kebutuhan pelanggan, mulai dari layanan hingga produk.
            </p>
            <Button
              onClick={() => navigate("/about-us")}
              className="bg-[#FFFFF7] px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[14px] border-solid border-1 border-[black]"
            >
              Baca Selengkapnya
            </Button>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="bg-[url('Maskgroup.svg')]">
          <div className="py-[40px] pl-[20px]">
            <p className="text-[#1D1D1D] text-[26px] font-semibold font-[Poppins] pb-[32px]">
              Mengapa Memilih Kami?
            </p>
            <p className="text-[#1D1D1D] text-[16px] font-normal font-[Poppins]  pb-[32px]">
              Kami bertujuan menjadi pilihan dalam industri persewaan alat berat
              dan menyediakan solusi terpadu terbaik dalam kelasnya untuk
              memenuhi kebutuhan pelanggan, mulai dari layanan hingga produk.
            </p>
            <Button className="bg-[#FFFFF7] px-[25px] md:px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[14px] md:text-[16px] border-solid border-1 border-[black]">
              Baca Selengkapnya
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="h-[448px] bg-[#F4FBFF] flex flex-row ">
          <div className="flex justify-start absolute z-1 left-0 max-w-[668px] max-h-[446px]">
            <img src={img2} className="flex justify-start w-[100%]" />
          </div>
          <div className="pt-[53px] text-right flex">
            <div className="justify-end absolute right-0 max-w-[845px] pr-[80px] ">
              <p className="text-[#1D1D1D] text-[36px] font-semibold font-[Poppins] pb-[32px] text-right">
                General Contractor
              </p>
              <p className="text-[#1D1D1D] text-[16px] font-normal font-[Poppins] pb-[32px] text-right">
                General Contractor merupakan layanan utama yang kami berikan
                kepada klien kami. Tim kami bertanggung jawab dalam setiap
                proses pelaksanaan konstruksi dari tahap perencanaan hingga
                pelaksanaan setiap proyek yang dipercayakan oleh para klien
                kepada kami. Kami ingin memberikan pengalaman konstruksi terbaik
                dengan hasil yang memuaskan, memastikan terjalinnya kemitraan
                jangka panjang dengan setiap klien kami.
              </p>
              <a href="https://wa.me/+6281321130071" target="_blank">
                <Button className="bg-[#F4FBFF] px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[16px] border-solid border-1 border-[black] justify-end">
                  Hubungi Kami
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="bg-[url('orang.png')] bg-cover">
          <div className="py-[40px] px-[20px]">
            <p className="text-[#1D1D1D] text-[26px] font-semibold font-[Poppins] pb-[32px]">
              General Contractor
            </p>
            <p className="text-[#1D1D1D] text-[16px] font-normal font-[Poppins]  pb-[32px]">
              General Contractor merupakan layanan utama yang kami berikan
              kepada klien kami. Tim kami bertanggung jawab dalam setiap proses
              pelaksanaan konstruksi dari tahap perencanaan hingga pelaksanaan
              setiap proyek yang dipercayakan oleh para klien kepada kami. Kami
              ingin memberikan pengalaman konstruksi terbaik dengan hasil yang
              memuaskan, memastikan terjalinnya kemitraan jangka panjang dengan
              setiap klien kami.
            </p>
            <a href="https://wa.me/+6281321130071" target="_blank">
              <Button className="bg-[#FFFFF7] px-[25px] md:px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[14px] md:text-[20px] border-solid border-1 border-[black]">
                Hubungi Kami
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="py-[40px] md:py-[80px] bg-[#F8F8F8]">
        <p className="text-[#1D1D1D] text-[32px] md:text-[40px] font-semibold font-[Poppins] pb-[32px] text-center">
          Alat Berat Kami
        </p>
        <div className="">
          <div className="w-[80%] md:w-[95%] bloc m-auto ">
            <Slider {...settings}>
              <div>
                <img
                  src={alatberat1}
                  className="max-w-[302px] bw-full lock m-[auto] block  h-[300px]"
                />
              </div>
              <div>
                <img
                  src={alat}
                  className="w-full max-w-[302px] block m-[auto] h-[300px]"
                />
              </div>
              <div>
                <img
                  src={alatberat3}
                  className="w-full max-w-[302px] block m-[auto] h-[300px]"
                />
              </div>
              <div>
                <img
                  src={alatberat4}
                  className="w-full max-w-[302px] block m-[auto] h-[300px]"
                />
              </div>
              <div>
                <img
                  src={alatberat5}
                  className="w-full max-w-[302px] block m-[auto] h-[300px]"
                />
              </div>
            </Slider>
          </div>
        </div>
        <Button
          onClick={() => navigate("/alat-berat")}
          className="mt-[80px] m-auto block bg-[#FFFFF7] px-[25px] md:px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[12px] md:text-[16px] border-solid border-1 border-[black]"
        >
          Lihat Semua
        </Button>
      </div>
      <div className="w-[white] px-[80px]">
        <div className="block md:flex flex-row m-auto">
          <p className="text-center md:text-left text-[#1D1D1D] pt-[80px] text-[26px] md:text-[36px] font-semibold leading-[32px] font-[Poppins]">
            Klien Kami
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 py-[80px]">
          <div>
            <img src={client1} className="m-auto block mt-[10px] md:mt-[2px]" />
          </div>

          <div>
            <img src={client5} className="m-auto block mt-[10px] md:mt-[2px]" />
          </div>
          <div>
            <img src={client4} className="m-auto block mt-[10px] md:mt-[2px]" />
          </div>
          <div>
            <img src={client2} className="m-auto block mt-[10px] md:mt-[2px]" />
          </div>
          <div>
            <img src={client3} className="m-auto block mt-[10px] md:mt-[2px]" />
          </div>

          <div>
            <img src={client6} className="m-auto block mt-[10px] md:mt-[2px]" />
          </div>
        </div>
      </div>
      {/* <div className="h-[448px] bg-[#F4FBFF] pl-[87px] flex flex-row ">
        <div className="flex justify-end absolute z-[1] right-0 max-w-[668px] max-h-[469px]">
          <img src={img3} className="flex justify-end w-[100%] z-[1]" />
        </div>
        <div className="pt-[101px] relative z-999">
          <p className="text-[#1D1D1D] text-[40px] font-semibold font-[Poppins] pb-[32px]">
            Mengapa Memilih Kami?
          </p>
          <p className="text-[#1D1D1D] text-[20px] font-normal font-[Poppins]  pb-[32px]">
            Kami bertujuan menjadi pilihan dalam industri persewaan alat berat
            dan menyediakan solusi terpadu terbaik dalam kelasnya untuk memenuhi
            kebutuhan pelanggan, mulai dari layanan hingga produk.
          </p>
          <Button className="g-[#F4FBFF px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[20px] border-solid border-1 border-[black]">
            Baca Selengkapnya
          </Button>
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default App;
