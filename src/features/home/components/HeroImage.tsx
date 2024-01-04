import heroImage from "@/assets/images/final 111-04.webp";
const HeroImage = () => {
  return (
    <section className="max-w-7xl px-4 mx-auto py-12 flex justify-center items-center">
      <img className="w-full object-contain" src={heroImage} alt="hero image" />
    </section>
  );
};

export default HeroImage;
