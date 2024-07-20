// import { Card, List, Space } from "antd";
import HeaderView from "../components/Header";
import Footer from "../components/Footer";

import alat from "../assets/Rectangle2.svg";
import alatberat1 from "../assets/alatberat1.jpeg";
import alatberat3 from "../assets/alatberat3.jpeg";
import alatberat4 from "../assets/alatberat4.jpeg";
import alatberat5 from "../assets/alatberat5.jpeg";

export default function AlatBerat() {
  // let data = [
  //   {
  //     name: "",
  //     weight: "",
  //     apacity: "",
  //     rated: "",
  //   },
  //   {
  //     name: "",
  //     weight: "4950kg ",
  //     apacity: "0.16m3",
  //     model: "Kubota V2203-M-E3-BM-SG1",
  //     rated: "28.8 (39.2) @2250",
  //   },
  //   {
  //     name: "U50-5",
  //     weight: "4950kg ",
  //     apacity: "0.16m3",
  //     model: "Kubota V2203-M-E3-BM-SG1",
  //     rated: "28.8 (39.2) @2250",
  //   },
  //   {
  //     name: "U50-5",
  //     weight: "4950kg ",
  //     apacity: "0.16m3",
  //     model: "Kubota V2203-M-E3-BM-SG1",
  //     rated: "28.8 (39.2) @2250",
  //   },
  //   {
  //     name: "U50-5",
  //     weight: "4950kg ",
  //     apacity: "0.16m3",
  //     model: "Kubota V2203-M-E3-BM-SG1",
  //     rated: "28.8 (39.2) @2250",
  //   },
  //   {
  //     name: "U50-5",
  //     weight: "4950kg ",
  //     apacity: "0.16m3",
  //     model: "Kubota V2203-M-E3-BM-SG1",
  //     rated: "28.8 (39.2) @2250",
  //   },
  // ];
  return (
    <>
      <HeaderView />
      <div className="bg-[url('/imgaboutus.jpg')] h-[auto] md:h-[412px] px-[80px] pt-[70px] md:pt-[186px] bg-cover">
        <p className="text-[#1D1D1D] text-[26px] md:text-[36px] font-semibold font-[Poppins] pb-[32px]">
          ALAT BERAT
        </p>
      </div>

      <div className="px-[40px] md:px-[80px] pt-[80px]  bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
          <div className="max-w-[626px]">
            <img src={alatberat1} className="w-[100%] h-[330px]" />
            <div className="mt-[23px] md:mt-[20px]">
              <p className="text-[#1D1D1D] text-[18px] md:text-[20px] font-bold leading-[32px] uppercase">
                SANY SY55C Hydraulic Excavato
              </p>
              {/* <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 5.780 kg / 12.742 lbs
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 0,21 m³ / 0,27 yd³
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : -
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 48HP/36kW 2.100 rpm
                  </p>
                </div>
              </div> */}
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    5.780 kg / 12.742 lbs
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    0,21 m³ / 0,27 yd³
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    -
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    48HP/36kW 2.100 rpm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alat} className="w-[100%] h-[330px]" />
            <div className="mt-[23px] md:mt-[20px]">
              <p className="text-[#1D1D1D] text-[18px] md:text-[20px] font-bold leading-[40px] uppercase">
                U50-5{" "}
              </p>
              {/* <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 4.950kg{" "}
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 0.16m³
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : Kubota V2203-M-E3-BM-SG1
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 28.8 (39.2) @2250
                  </p>
                </div>
              </div> */}
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    4.950kg
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    0.16m³
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Kubota V2203-M-E3-BM-SG1
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-350px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    28.8 (39.2) @2250
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alatberat3} className="w-[100%]" />
            <div className="mt-[23px] md:mt-[20px] h-[330px]">
              <p className="text-[#1D1D1D] text-[18px] md:text-[20px] font-bold leading-[40px] uppercase">
                Komatsu
              </p>
              {/* <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : -
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 0.44 m³
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : PC100-6
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 60.36 kW (82.12 HP)
                  </p>
                </div>
              </div> */}
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    -
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    0.44 m³
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    PC100-6
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    60.36 kW (82.12 HP)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alatberat4} className="w-[100%] h-[330px]" />
            <div className="mt-[23px] md:mt-[20px]">
              <p className="text-[#1D1D1D] text-[18px] md:text-[20px] font-bold leading-[40px] uppercase">
                -
              </p>
              {/* <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 5.56 ton
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 0.18 m³
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : -
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 48.5hp/2200rpm
                  </p>
                </div>
              </div> */}
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    5.56 ton
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    0.18 m³
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    -
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[350px]">
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    48.5hp/2200rpm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alatberat5} className="w-[100%] h-[330px]" />
            <div className="mt-[23px] md:mt-[20px]">
              <p className="text-[#1D1D1D] text-[18px] md:text-[20px] font-bold leading-[40px] uppercase">
                -
              </p>
              {/* <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 5.900 kg
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 0.21 m³
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : -
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    : 36.2 kW (49 hp / 49 ps) @ 2,100 rpm28.8 (39.2) @2250
                  </p>
                </div>
              </div> */}
              <div className="flex flex-row">
                <div className="w-[120px]">
                  {" "}
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    5.900 kg
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    0.21 m³
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[120px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    -
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[350px]">
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    :
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[16px] font-medium leading-[30px] font-[Poppins]">
                    36.2 kW (49 hp / 49 ps) @ 2,100 rpm28.8 (39.2) @2250
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
