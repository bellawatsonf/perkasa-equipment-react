import { Card, List, Space } from "antd";
import HeaderView from "../components/Header";
import Footer from "../components/Footer";
import alat1 from "../assets/Rectangle2.svg";

export default function AlatBerat() {
  let data = [
    {
      name: "",
      weight: "",
      apacity: "",
      rated: "",
    },
    {
      name: "",
      weight: "4950kg ",
      apacity: "0.16m3",
      model: "Kubota V2203-M-E3-BM-SG1",
      rated: "28.8 (39.2) @2250",
    },
    {
      name: "U50-5",
      weight: "4950kg ",
      apacity: "0.16m3",
      model: "Kubota V2203-M-E3-BM-SG1",
      rated: "28.8 (39.2) @2250",
    },
    {
      name: "U50-5",
      weight: "4950kg ",
      apacity: "0.16m3",
      model: "Kubota V2203-M-E3-BM-SG1",
      rated: "28.8 (39.2) @2250",
    },
    {
      name: "U50-5",
      weight: "4950kg ",
      apacity: "0.16m3",
      model: "Kubota V2203-M-E3-BM-SG1",
      rated: "28.8 (39.2) @2250",
    },
    {
      name: "U50-5",
      weight: "4950kg ",
      apacity: "0.16m3",
      model: "Kubota V2203-M-E3-BM-SG1",
      rated: "28.8 (39.2) @2250",
    },
  ];
  return (
    <>
      <HeaderView />
      <div className="bg-[url('/public/imgaboutus.jpg')] h-[auto] md:h-[412px] px-[80px] pt-[70px] md:pt-[186px] bg-cover">
        <p className="text-[#1D1D1D] text-[32px] md:text-[40px] font-semibold font-[Poppins] pb-[32px]">
          ALAT BERAT
        </p>
      </div>

      <div className="px-[40px] md:px-[80px] pt-[80px]  bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="max-w-[626px]">
            <img src={alat1} className="w-[100%]" />
            <div className="mt-[23px] md:mt-[43px]">
              <p className="text-[#1D1D1D] text-[24px] md:text-[32px] font-bold leading-[40px] uppercase">
                MODEL : U50-5{" "}
              </p>
              <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 4950kg{" "}
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 0.16m3
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : Kubota V2203-M-E3-BM-SG1
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 28.8 (39.2) @2250
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alat1} className="w-[100%]" />
            <div className="mt-[23px] md:mt-[43px]">
              <p className="text-[#1D1D1D] text-[24px] md:text-[32px] font-bold leading-[40px] uppercase">
                MODEL : U50-5{" "}
              </p>
              <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 4950kg{" "}
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 0.16m3
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : Kubota V2203-M-E3-BM-SG1
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 28.8 (39.2) @2250
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alat1} className="w-[100%]" />
            <div className="mt-[23px] md:mt-[43px]">
              <p className="text-[#1D1D1D] text-[24px] md:text-[32px] font-bold leading-[40px] uppercase">
                MODEL : U50-5{" "}
              </p>
              <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 4950kg{" "}
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 0.16m3
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : Kubota V2203-M-E3-BM-SG1
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 28.8 (39.2) @2250
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alat1} className="w-[100%]" />
            <div className="mt-[23px] md:mt-[43px]">
              <p className="text-[#1D1D1D] text-[24px] md:text-[32px] font-bold leading-[40px] uppercase">
                MODEL : U50-5{" "}
              </p>
              <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 4950kg{" "}
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 0.16m3
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : Kubota V2203-M-E3-BM-SG1
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 28.8 (39.2) @2250
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[626px]">
            <img src={alat1} className="w-[100%]" />
            <div className="mt-[23px] md:mt-[43px]">
              <p className="text-[#1D1D1D] text-[24px] md:text-[32px] font-bold leading-[40px] uppercase">
                MODEL : U50-5{" "}
              </p>
              <div className="flex flex-row">
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Operating Weight
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Bucket Capacity
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Engine Model
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    Rated Output kW (HP) @rpm
                  </p>
                </div>
                <div>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 4950kg{" "}
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 0.16m3
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : Kubota V2203-M-E3-BM-SG1
                  </p>
                  <p className="text-[#2F2F2F] text-[14px] md:text-[20px] font-medium leading-[30px] font-[Poppins]">
                    : 28.8 (39.2) @2250
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
