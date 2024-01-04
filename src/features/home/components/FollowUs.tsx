import SliderButton from "@/components/ui/SliderButton";
import followList from "@/constants/followList";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider, { Settings } from "react-slick";

const FollowUs = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className:
      "w-12/12 mx-auto gap-4 flex justify-center items-center [&_div]:flex [&_div]:gap-5",
    nextArrow: <SliderButton Icon={FaChevronRight} />,
    prevArrow: <SliderButton Icon={FaChevronLeft} />,
  };
  return (
    <section className="max-w-7xl px-4 mx-auto">
      <h2 className="capitalize text-center text-3xl mt-16">follow us</h2>
      <h3 className="text-center text-5xl mb-16">@LOVELOCKDOWN</h3>
      <Slider {...settings}>
        {followList.map((item) => (
          <div
            key={item.id}
            className="w-full h-[250px] rounded-xl relative overflow-hidden group flex justify-center items-center"
          >
            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-105 duration-200"
              alt=""
            />
            <a
              href="#"
              target="_blank"
              className="absolute inset-0 bg-black/50 flex justify-center hover:text-white items-center text-white text-2xl font-medium opacity-0 group-hover:opacity-100 duration-200"
            >
              @kjojojojo
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FollowUs;
