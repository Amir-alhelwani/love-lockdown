import MotionSlide from "@/components/MotionSlide";
import { Button } from "@/components/ui/button";
import usePartnerPreferencesStore from "../usePartnerPreferencesStore";

const WelcomeSection = () => {
  const direction = usePartnerPreferencesStore((state) => state.direction);
  const setContent = usePartnerPreferencesStore((state) => state.setContent);
  const setDirection = usePartnerPreferencesStore(
    (state) => state.setDirection
  );
  return (
    <MotionSlide direction={direction} key={"welcome"}>
      <h1 className="text-center text-4xl">partner Preferences</h1>
      <p className="sm:max-w-[60%] mx-auto py-4 text-justify text-xl">
        Kindly complete your partner preferences to ensure we find you the
        perfect match.
      </p>
      <div className="w-full text-center">
        <Button
          onClick={() => {
            setContent("basic");
            setDirection(1);
          }}
          size="lg"
          className="capitalize text-xl"
        >
          start
        </Button>
      </div>
    </MotionSlide>
  );
};

export default WelcomeSection;
