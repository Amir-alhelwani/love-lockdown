import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroContent from "@/constants/home/hero";

const Hero = () => {
  return (
    <section className="max-w-7xl px-4 mx-auto py-12 flex flex-col md:flex-row justify-start items-start gap-6 md:gap-8 lg:gap-12">
      <div className="flex-1 w-full">
        <h2 className="w-full capitalize mx-auto text-5xl md:text-6xl lg:text-8xl">
          {heroContent.title}
        </h2>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl capitalize mb-4">{heroContent.subtitle}</h3>
        <p className="text-base lg:text-lg font-normal mb-4 leading-6">
          {heroContent.text}
        </p>
        <div className="mt-6 sm:mt-8">
          <Link
            to="/escape-rooms"
            className={buttonVariants({
              variant: "secondary",
              size: "full",
              className: "uppercase md:!w-10/12 !justify-start py-5 text-3xl",
            })}
          >
            {heroContent.button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
