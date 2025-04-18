import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-full font-sans">
      <div className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow">
        <div className="flex flex-row justify-evenly items-center">
          <img src="/tokilogo.png" className="h-12" />
          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
          <div
          className={`flex flex-col space-x-6 sm:flex-row sm:justify-evenly items-center text-black text-sm sm:text-base mt-2 sm:mt-0 space-y-2 sm:space-y-0 ${
            menuOpen ? "flex flex-row" : "hidden sm:flex"
          }`}
        >
          <p>Үйлчилгээ</p>
          <p>Давуу тал</p>
          <p>Мэдээ</p>
          <p>Хамтран ажиллах</p>
        </div>
        </div>
      </div>

      <div className="pt-24">
        <div className="w-full bg-[#fff2d7] py-12 flex flex-col items-center text-center space-y-6 px-4">
          <p className="text-2xl sm:text-3xl font-medium text-black">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
          <img src="/toki1.png" className="h-60 sm:h-80" />
          <div className="flex space-x-4">
            <img src="/appstore.png" className="h-12" />
            <img src="/google play.png" className="h-12" />
          </div>
        </div>

        <div className="bg-gray-100 w-full flex flex-col md:flex-row items-center justify-center py-12 px-6 gap-8">
          <img src="/toki2.png" className="h-60 sm:h-80" />
          <div className="max-w-xl text-left space-y-5">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#ffc63d]">Toki Service</h2>
            <p className="text-base sm:text-lg text-black">
              Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.
            </p>
          </div>
        </div>

        <div className="bg-[#fff2d7] w-full flex flex-col-reverse md:flex-row items-center justify-center py-12 px-6 gap-8">
          <div className="max-w-xl text-right space-y-5">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#ffc63d]">Toki Pay</h2>
            <p className="text-base sm:text-lg text-black">
              Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.
            </p>
          </div>
          <img src="/toki3.png" className="h-60 sm:h-80" />
        </div>

        <div className="bg-gray-100 w-full flex flex-col md:flex-row items-center justify-center py-12 px-6 gap-8">
          <img src="/toki4.png" className="h-60 sm:h-80" />
          <div className="max-w-xl text-left space-y-5">
            <h2 className="font-bold text-2xl sm:text-3xl text-[#ffc63d]">Toki Shop</h2>
            <p className="text-base sm:text-lg text-black">
              Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.
            </p>
          </div>
        </div>

        <div className="bg-white text-black flex flex-col items-center py-16 space-y-6 px-4 text-center">
          <h2 className="font-bold text-2xl sm:text-3xl text-[#ffc63d]">Toki апп өдөр бүр танд тусална</h2>
          <p className="text-base sm:text-lg max-w-2xl">
            Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.
          </p>
        </div>

        <div className="bg-[#fff2d7] flex justify-center py-8">
          <button className="bg-[#ffc63d] text-white px-8 py-3 rounded-full text-lg font-medium shadow-md">ДАВУУ ТАЛ</button>
        </div>

        <div className="h-50 bg-black text-gray-400 py-10 px-6 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <img src="/tokilogo.png" className="h-10" />
          <div className="space-y-4">
            <p className="text-sm">Түгээмэл асуулт</p>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25..." />
                </svg>
                <p>77074474</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="..." />
                </svg>
                <p>info@toki.mn</p>
              </div>
            </div>
            <p className="text-xs pt-4">© 2022 | Toki.mn</p>
          </div>

          <div className="flex space-x-4">
            <span className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" className="h-6 w-6">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8..." />
              </svg>
            </span>
            <span className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="h-6 w-6">
                <path d="M224.1 141c-63.6 0-114.9 51.3..." />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
