import ExpandableCardsSection from "../components/expandable-cards-section";

export default function Work() {
  return (
    <main className="min-h-screen">

      {/* Work Process Section */}
      <section className="text-center flex my-12 items-center justify-center">
      <div className="max-w-[800px] w-full flex flex-col items-center justify-center px-[20px] gap-[5px]">
          <div className=" h-[33px] gap-1 rounded-[25px] bg-[#f5f7f9] flex justify-between items-center pt-[2px] pb-[2px] pr-[10px] pl-[2px]">
          <div className="size-[32px]   rounded-full flex items-center justify-center p-[9px]"
            style={{
                background: "linear-gradient(119deg, #7988E7 -10.33%, #667DE7 17.78%, #2A59E3 100%)"
            }}
            >
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.2112 7.81994L12.5112 12.2799C12.2012 12.4599 11.8112 12.4599 11.4912 12.2799L3.79119 7.81994C3.24119 7.49994 3.10119 6.74994 3.52119 6.27994C3.81119 5.94994 4.14119 5.67994 4.49119 5.48994L9.91119 2.48994C11.0712 1.83994 12.9512 1.83994 14.1112 2.48994L19.5312 5.48994C19.8812 5.67994 20.2112 5.95994 20.5012 6.27994C20.9012 6.74994 20.7612 7.49994 20.2112 7.81994Z" fill="white"/>
  <path d="M11.431 14.14V20.96C11.431 21.72 10.661 22.22 9.98096 21.89C7.92096 20.88 4.45096 18.99 4.45096 18.99C3.23096 18.3 2.23096 16.56 2.23096 15.13V9.97C2.23096 9.18 3.06096 8.68 3.74096 9.07L10.931 13.24C11.231 13.43 11.431 13.77 11.431 14.14Z" fill="white"/>
  <path d="M12.5708 14.14V20.96C12.5708 21.72 13.3408 22.22 14.0208 21.89C16.0808 20.88 19.5508 18.99 19.5508 18.99C20.7708 18.3 21.7708 16.56 21.7708 15.13V9.97C21.7708 9.18 20.9408 8.68 20.2608 9.07L13.0708 13.24C12.7708 13.43 12.5708 13.77 12.5708 14.14Z" fill="white"/>
</svg>
            </div>
            <div className="section-tag text-nowrap">
            Work Process
            </div>
          </div>

          <div className="max-w-[760px] w-full">
            <h2 className="section-heading mt-2 text-center">
                Uncover the Stories Behind Our Most Innovative and Game-Changing Projects.
            </h2>
          </div>
        </div>


      </section>

      <ExpandableCardsSection />
    </main>
  );
}
