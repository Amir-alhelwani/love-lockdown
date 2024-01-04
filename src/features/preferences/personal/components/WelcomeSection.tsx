import MotionSlide from "@/components/MotionSlide";
import { Button } from "@/components/ui/button";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";

const WelcomeSection = () => {
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const setDirection = usePersonalPreferencesStore(
    (state) => state.setDirection
  );
  return (
    <MotionSlide direction={direction} key={"welcome"}>
      <h1 className="text-center text-4xl">Personal Preferences</h1>
      <p className="sm:max-w-[60%] mx-auto py-4 text-center text-xl">
        Kindly complete your personal preferences to ensure we find you
        the perfect match.
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
