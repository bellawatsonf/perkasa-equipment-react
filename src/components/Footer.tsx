import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import logo from "../assets/logowhite.svg";
import { Button } from "antd";

export default function Footer() {
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-[url('/Sectionlast.jpg')] bg-cover h-[448px] w-[100%] pl-[87px]">
          <div className="pt-[101px] relative z-999 max-w-[70%]">
            <p className="text-[#1D1D1D] text-[40px] font-semibold font-[Poppins] pb-[32px]">
              Tertarik untuk Bekerja Sama?
            </p>
            <p className="text-[#1D1D1D] text-[20px] font-normal font-[Poppins]  pb-[32px]">
              Ayo bersama-sama membangun masa depan yang lebih kuat! Temukan
              solusi terbaik untuk proyek Anda dengan bekerja sama dengan
              perusahaan kami.
            </p>
            <a href="https://wa.me/+6281321130071" target="_blank">
              <Button className="bg-[#F4FBFF] px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[20px] border-solid border-1 border-[black]">
                Hubungi Kami
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="bg-[url('/Sectionlast.jpg'')] bg-cover">
          <div className="py-[40px] px-[20px]">
            <p className="text-[#1D1D1D] text-[32px] font-semibold font-[Poppins] pb-[32px]">
              Tertarik untuk Bekerja Sama?
            </p>
            <p className="text-[#1D1D1D] text-[18px] font-normal font-[Poppins]  pb-[32px]">
              Ayo bersama-sama membangun masa depan yang lebih kuat! Temukan
              solusi terbaik untuk proyek Anda dengan bekerja sama dengan
              perusahaan kami.
            </p>
            <a href="https://wa.me/+6281321130071" target="_blank">
              <Button className="bg-[#FFFFF7] px-[25px] md:px-[32px] py-[12px] rounded-[999px] text-[black] h-auto text-[14px] md:text-[20px] border-solid border-1 border-[black]">
                Hubungi Kami
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[url('/Footer.png')] bg-cover bg-no-repeat">
        <div className="grid grid-cols-1 md:grid-cols-2 px-[20px] md:px-[80px]">
          <div className="flex justify-start pt-[20px] md:py-[60px]">
            <div className="h-[auto]">
              <img src={logo} className="max-w-[120px]" />
              <p className=" text-[white] text-[16px] md:text-[24px] font-bold font-[Poppins] py-[24px] text-left ">
                CV PERKASA HEAVY EQUIPMENT
              </p>
              <p className=" text-[white] text-[14px] md:text-[20px] font-normal font-[Poppins]  text-left ">
                Jl. Mustikasari Raya No. 12 Bekasi
              </p>
            </div>
          </div>

          <div className="flex justify-start md:justify-end pt-[20px] md:pt-[80px]">
            <div>
              <div className="flex flex-row items-center">
                <MailOutlined className="text-[white] text-[20px] md:text-[24px] font-bold font-[Poppins] pt-[20px] md: pt-[90px] pb-[24px] text-left pr-[16px]" />
                <a href="mailto:perkasa.phe@gmail.com" target="_blank">
                  <p className="text-[white] text-[16px] md:text-[24px] font-bold font-[Poppins] pt-[20px] md: pt-[90px] pb-[24px]  text-left ">
                    perkasa.phe@gmail.com
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center">
                <PhoneOutlined className="text-[white] text-[20px] md:text-[24px] font-bold font-[Poppins]  pb-[24px] text-left pr-[16px]" />
                <a href="https://wa.me/+6281321130071" target="_blank">
                  <p className="hover:cursor-pointer text-[white] text-[16px] md:text-[24px] font-bold font-[Poppins] pb-[24px] text-left ">
                    0813-2113-0071
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFE500] text-[#201E81] text-[12px] md:text-[16px] font-bold font-[Poppins] py-[5px] text-center">
          Copyright © 2020 All Rights Reserved by CV Perkasa Heavy Equipment
        </div>
      </div>
    </>
  );
}
