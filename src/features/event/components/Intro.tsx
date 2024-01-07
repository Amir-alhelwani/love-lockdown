import event from "@/assets/images/event.webp";
import { buttonVariants } from "@/components/ui/button";
const Intro = () => {
  return (
    <section>
      <div className="bg-black/10">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex flex-col justify-center gap-6 items-center w-11/12 sm:w-1/2 mx-auto text-center">
            <p>Thu, 02 May  |  Antwerp</p>
            <h1 className="text-6xl">Love Lockdown</h1>
            <p className="text-base">
              Love Lockdown is an innovative dating concept that transforms the
              typical dating experience into an exciting escape room adventure
            </p>
            <a
              className={buttonVariants({
                className:
                  "rounded-none font-text-font text-lg px-8 py-4 cursor-pointer hover:!bg-black/75 hover:!text-papaya-whip",
              })}
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl px-4 mx-auto relative">
        <div className="absolute top-0 -left-1/2 w-[calc(200%_+_4rem)] h-1/2 bg-black/10 -z-1" />
        <img
          className="w-full max-h-[500px] object-contain mx-auto"
          src={event}
          alt="event"
        />
      </div>
    </section>
  );
};

export default Intro;
