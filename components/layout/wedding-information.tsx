import { Calendar } from "./calendar";
import { Faustina } from "next/font/google";

const faustina = Faustina({ subsets: ["latin"], weight: "400" });

export function WeddingInformation() {
  return (
    <section className="py-10 px-2 bg-[rgb(250,240,230)]">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 scroll-animate space-y-2 ${faustina.className}`}>
          <h2 className="text-3xl text-gray-800 mb-4 font-serif font-bold underline">
            Trân Trọng Kính Mời
          </h2>
          {/* <p>Bạn Cùng Người Thương</p> */}
          {/* <div className="w-24 h-px bg-rose-400 mx-auto"></div> */}
          <h3 className={`uppercase`}>Đến dự buổi tiệc chung vui</h3>
          <h3 className="uppercase">cùng gia đình chúng tôi</h3>
          <h3 className="">Vào Lúc: <span className="font-bold">18h00</span></h3>
          <h3 className="uppercase font-bold">Chủ Nhật</h3>

          <div className="flex justify-around items-center font-bold">
            <h2>Tháng 12</h2>

            <div className="border border-black h-14"></div>
            <h2 className="text-4xl">14</h2>
            <div className="border border-black h-14"></div>
            <h2>2025</h2>
          </div>

          <h3 className="">(Nhằm ngày 25 tháng 10 năm Ất Tỵ)</h3>
          <Calendar />
          <h3 className="uppercase text-2xl underline font-serif">Địa điểm</h3>
          <h3 className="">Trung tâm hội nghị & tiệc cưới</h3>
          <h3 className="uppercase font-bold">The Adora Luxury</h3>
          <h3 className="font-bold">Tầng 2 - Sảnh Grand Sapphire</h3>
          <h3 className="font-bold">198 Hoàng Văn Thụ, phường Đức Nhuận, TPHCM</h3>
          {/* <MapEmbed /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.147996449881!2d106.6707076748052!3d10.799974889350237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292369c3cd47%3A0x646c4b318d59a06b!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgJiBUaeG7h2MgQ8aw4bubaSBUSEUgQURPUkEgTFVYVVJZ!5e0!3m2!1svi!2s!4v1757769746002!5m2!1svi!2s" 
          // width="600" height="450"
          className="mx-auto border w-full h-[450px]"
          // allowfullscreen="" 
          loading="lazy" 
          // referrerpolicy="no-referrer-when-downgrade"
          >

          </iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-8"></div>
      </div>
    </section>
  );
}
