// import { List } from "antd";
import HeaderView from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <HeaderView />
      <div className="bg-[url('/imgaboutus.jpg')] h-[auto] md:h-[412px] px-[40px] md:px-[80px] pt-[70px] md:pt-[186px] bg-cover">
        <p className="text-[#1D1D1D] text-[32px] md:text-[40px] font-semibold font-[Poppins] pb-[32px]">
          TENTANG KAMI
        </p>
      </div>
      <div className="p-[40px] md:p-[80px] bg-[#FFFFF7]">
        <h1 className="text-[#1D1D1D] text-center text-[32px] md:text-[40px] font-semibold font-[Poppins] pb-[32px]">
          CV. Perkasa Heavy Equipment
        </h1>
        <p className="text-[#494949] text-justify md:text-center text-[18px] md:text-[20px] font-base font-[Poppins] leading-[32px]">
          didirikan oleh Bapak Safrudin Said pada tanggal 9 Januari 2002 di
          Bekasi. Merupakan perusahaan kontraktor umum dan sewa alat berat di
          Indonesia, CV. Perkasa Heavy Equipment telah berpengalaman lebih dari
          20 tahun. Spesialisasi kami adalah menyediakan solusi sewa untuk
          konstruksi, industri, pertambangan dan pasar pemilik rumah. Kami
          bertujuan untuk menjadi perusahaan persewaan alat berat terkemuka dan
          menyediakan layanan satu atap untuk memberikan layanan, produk, dan
          solusi terintegrasi terbaik di kelasnya untuk memenuhi kebutuhan
          pelanggan.
        </p>
      </div>
      <div className="p-[40px] md:p-[80px] bg-[#F8F8F8] ">
        <h1 className="text-[#1D1D1D] text-center text-[32px] md:text-[40px] font-semibold font-[Poppins] pb-[32px]">
          Visi & Misi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-[12px] bg-[white] py-[32px] px-[24px]">
            <p className="text-[#1D1D1D] text-[24px] md:text-[32px] font-semibold font-[Poppins] pb-[32px]">
              Visi
            </p>

            <ul className="text-[#1D1D1D] text-[18px] md:text-[20px] font-base font-[Poppins] pb-[32px] list-disc">
              <li>
                CV. Perkasa Heavy Equipment, akan menjadi perusahaan yang
                dikenal luas dan menjadi yang terdepan dengan memberikan jasa
                dan pelayanan dengan kualitas yang baik bagi keuntungan konsumen
              </li>
              <li>Bekerja secara profesional dan tepat waktu</li>
              <li>
                Mengutamakan Keselamatan kerja dan meningkatkan kualitas pekerja
                dengan cara memberikan pelatihan secara berkala
              </li>
            </ul>
          </div>

          <div className="rounded-[12px] bg-[white] py-[32px] px-[24px]">
            <p className="text-[#1D1D1D] text-[32px] font-semibold font-[Poppins] pb-[32px]">
              Misi
            </p>

            <ul className="text-[#1D1D1D] text-[20px] font-base font-[Poppins] pb-[32px] list-disc">
              <li>
                Menjadi perusahaan jasa konstruksi dan sewa alat berat yang
                kompeten, profesional, dan dapat dipercaya.
              </li>
              <li>
                Menjadi perusahaan yang fokus pada jasa konstruksi dan sewa alat
                berat yang mampu berdaya saing global dan mendapat apresiasi
                secara internasional.
              </li>
              <li>
                Berkomitmen memberikan kepuasan pelanggan dengan menjaga
                kualitas, harga, dan waktu pengerjaan.
              </li>
              <li>
                Berkomitmen memberikan kepuasan pelanggan dengan menjaga
                kualitas, harga, dan waktu pengerjaan. Memberikan kesempatan
                lapangan pekerjaan pada SDM potensial.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
