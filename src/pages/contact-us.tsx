// import { List } from "antd";
import HeaderView from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
export default function ContactUs() {
  return (
    <>
      <HeaderView />
      <div className="bg-[url('/imgaboutus.jpg')] h-[auto] md:h-[412px] px-[80px] pt-[70px] md:pt-[186px] bg-cover">
        <p className="text-[#1D1D1D] text-[26px] md:text-[36px] font-semibold font-[Poppins] pb-[32px]">
          HUBUNGI KAMI
        </p>
      </div>

      <div className="px-[20px] md:px-[80px] pt-[10px] md:pt-[50px] bg-[#F8F8F8]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" pb-[32px] px-[24px] pt-[5%] md:pt-[20%]">
            <img src={logo} className="hidden md:block" />
            <p className="text-[#1D1D1D] text-[20px] font-bold font-[Poppins] py-[12px] md:py-[24px]">
              CV PERKASA HEAVY EQUIPMENT
            </p>
            <p className="text-[#1D1D1D] text-[16px] font-medium font-[Poppins] ">
              Jl. Mustikasari Raya No. 12 Bekasi
            </p>
          </div>

          <div className="py-[32px] px-[10px] md:px-[24px]">
            <iframe
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.%20Raya%20Mustikasari%20No.12+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
