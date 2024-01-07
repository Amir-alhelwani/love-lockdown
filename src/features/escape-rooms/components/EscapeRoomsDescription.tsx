import EscapeImage from "@/assets/images/final 111-08.webp";
import { buttonVariants } from "@/components/ui/button";
const EscapeRoomsDescription = () => {
  return (
    <section className="max-w-7xl px-4 mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 w-full">
          <div>
            <h1 className="text-5xl mb-12 md:hidden text-center block">
              Escape Room
            </h1>
            <img
              src={EscapeImage}
              className="w-full md:w-3/4"
              alt="Escape Image"
            />
          </div>
        </div>
        <div className="flex-1 w-full">
          <h1 className="text-5xl mb-12 hidden md:block">Escape Room</h1>
          <p className="text-lg pt-8 md:pt-0 xl:leading-8">
            We proudly collaborate with various exciting escape rooms across
            Belgium, forging partnerships with renowned names such as Gouden
            Kooi, Exit Game, Koezio, and Antwerp Clue. Together, we create
            unforgettable experiences that challenge and captivate, promising
            adventure seekers a thrilling escape into a world of mystery and
            excitement. Join us as we venture beyond the ordinary, unlocking the
            secrets of immersive entertainment with our esteemed partners.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-5xl text-center uppercase">available on</h2>
        <div className="mt-8 flex justify-start sm:justify-center flex-wrap items-start gap-5">
          <a
            href="https://degoudenkooi.be/"
            target="_blank"
            className={buttonVariants({
              className: "!px-10 max-sm:!flex-1 !text-xl !py-6 capitalize font-title-font font-normal",
            })}
          >
            De gouden Kooi
          </a>
          <a
            href="https://koezio.co/nl/bruxelles/landing/elite-agents-missie-bij-koezio-brussel/"
            target="_blank"
            className={buttonVariants({
              className: "!px-10 max-sm:!flex-1 !text-xl !py-6 capitalize font-title-font font-normal",
            })}
          >
            Koezio Brussel
          </a>
          <a
            href="https://www.exitgamesbelgium.be/escape-room-antwerpen"
            target="_blank"
            className={buttonVariants({
              className: "!px-10 max-sm:!flex-1 !text-xl !py-6 capitalize font-title-font font-normal",
            })}
          >
            The Exit Game
          </a>
        </div>
      </div>
    </section>
  );
};

export default EscapeRoomsDescription;
