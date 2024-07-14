// import { List } from "antd";
import HeaderView from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
export default function ContactUs() {
  return (
    <>
      <HeaderView />
      <div className="bg-[url('/imgaboutus.jpg')] h-[auto] md:h-[412px] px-[80px] pt-[70px] md:pt-[186px] bg-cover">
        <p className="text-[#1D1D1D] text-[32px] md:text-[40px] font-semibold font-[Poppins] pb-[32px]">
          HUBUNGI KAMI
        </p>
      </div>

      <div className="px-[20px] md:px-[80px] pt-[10px] md:pt-[80px] bg-[#F8F8F8]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" pb-[32px] px-[24px] pt-[10%] md:pt-[30%]">
            <img src={logo} className="hidden md:block" />
            <p className="text-[#1D1D1D] text-[24px] font-bold font-[Poppins] py-[12px] md:py-[24px]">
              CV PERKASA HEAVY EQUIPMENT
            </p>
            <p className="text-[#1D1D1D] text-[20px] font-medium font-[Poppins] ">
              Jl. Mustikasari Raya No. 12 Bekasi
            </p>
          </div>

          <div className="py-[32px] px-[10px] md:px-[24px]">
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?q=Jl.%20Pondasi%20No.28,%20RT.2/RW.2,%20Kayu%20Putih,%20Kec.%20Pulo%20Gadung,%20Kota%20Jakarta%20Timur,%20Daerah%20Khusus%20Ibukota%20Jakarta%2013210,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
