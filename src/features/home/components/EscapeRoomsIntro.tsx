import EscapeRoomsIntroSvg from "@/components/EscapeRoomsIntroSvg";
import escapeRoomsIntro from "@/constants/home/escapeRoomsIntro";
const EscapeRoomsIntro = () => {
  return (
    <section className="bg-lavender-gray">
      <div className="px-4 pt-12 flex justify-center items-center flex-col">
        <div className="w-full py-4 flex justify-center items-center relative">
          <div className="w-11/12 sm:w-full md:mt-24 lg:mt-36 gap-8 relative z-1 mx-auto flex flex-col justify-between items-center">
            <div className="flex justify-start items-center w-full">
              <div className="p-4 bg-lavender-gray rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl capitalize">
                  {escapeRoomsIntro.title}
                </h3>
                <h4 className="md:mt-6 text-lg md:text-xl lg:text-2xl capitalize">
                  {escapeRoomsIntro.subtitle}
                </h4>
              </div>
            </div>
            <div className="flex justify-end w-full items-center">
              <div className="rounded-xl w-1/2 sm:w-1/4 shadow-lg">
                <div className="bg-black">
                  <img src={escapeRoomsIntro.image} alt="" />
                </div>
                <p className="bg-lavender-gray p-1 sm:p-4 text-xs sm:text-base font-thin first-letter:uppercase">
                  {escapeRoomsIntro.text}
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto w-9/12 sm:w-1/2 z-0 absolute inset-0">
            <img
              className="w-full h-full object-contain"
              src={escapeRoomsIntro.backgroundImage}
              alt="escape Rooms Image"
            />
          </div>
        </div>
      </div>
      <EscapeRoomsIntroSvg />
    </section>
  );
};

export default EscapeRoomsIntro;
