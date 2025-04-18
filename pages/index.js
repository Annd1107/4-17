import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-evenly bg-white p-5 fixed top-0 left-0 w-full">
        <img src="/tokilogo.png" className="h-13"/>
        <div className="w-140 flex flex-row justify-evenly text-black items-center">
          <p>Үйлчилгээ</p>
          <p>Давуу тал</p>
          <p>Мэдээ</p>
          <p>Хамтран ажиллах</p>
        </div>
      </div>
      <div className="mt-22">
        <div className="h-200 flex flex-col items-center pt-15 bg-[#fff2d7]">
          <p className="text-3xl text-black">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
          <img src="/toki1.png" className="h-150"/>
          <div className="w-140 flex flex-row justify-evenly text-black items-center">
            <img src="/appstore.png" className="h-15"/>
            <img src="/google play.png" className="h-15"/>
          </div>
        </div>


        <div className="h-200 flex flex-row items-center bg-gray-100 justify-center">
        <img src="/toki2.png" className="h-150"/>
          <div className="w-140 flex flex-col justify-evenly space-y-7 text-black items-left">
            <h2 className="font-bold text-3xl text-[#ffc63d]">Toki Service</h2>
            <p className="text-xl">Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.</p>
          </div>
        </div>


        <div className="h-200 flex flex-row items-center bg-[#fff2d7] justify-center">
          <div className="w-140 flex flex-col justify-evenly text-black space-y-7 text-end">
            <h2 className=" font-bold text-3xl text-[#ffc63d]">Toki Pay</h2>
            <p className="text-lg">Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай.</p>
          </div>
          <img src="/toki3.png" className="h-150"/>
        </div>


        <div className="h-200 flex flex-row items-center bg-gray-100 justify-center">
        <img src="/toki4.png" className="h-150"/>
          <div className="w-140 flex flex-col justify-evenly text-black space-y-7 items-left">
            <h2 className="font-bold text-3xl text-[#ffc63d]">Toki Shop</h2>
            <p className="text-xl">Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.</p>
          </div>
        </div>
        
        <div className="h-200 flex flex-col text-black items-center bg-white space-y-7 justify-center">
            <h2 className="font-bold text-3xl text-[#ffc63d]">Toki апп өдөр бүр танд тусална</h2>
            <p className="text-xl w-200 text-center ">Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.</p>
        </div>

        <div className="h-45 flex flex-col p-5 items-center bg-[#fff2d7] justify-start ">
          <button className="text-white h-5nitems-center w-50 border-circular p-5 bg-[#ffc63d] rounded-4xl">ДАВУУ ТАЛ</button>
        </div>

        <div className="h-50 p-10 flex flex-row bg-black text-gray-400 justify-evenly items-center">
           <img src="/tokilogo.png" className="h-11"></img>
           <div className="flex flex-col justify-evenly h-50 text-xs">
            <p>Түгээмэл асуулт</p>
            <div>
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p>Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
            </div>


            <div className="flex flex-row justify-between w-50">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

              <p>77074474</p>
            </div>
            <div className="flex flex-row items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <             path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              <p>info@toki.mn</p>
            </div>
            </div>
            
            </div>
            <p>
              Copyright @ 2022 | Toki.mn
            </p>
            
           </div>

           <div className="flex flex-row justify-between w-15 ">
           <span class="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 320 512">

    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>
<span class="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512">
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
</span>
           </div>
        </div>

      </div>
    </div>
  );
}
