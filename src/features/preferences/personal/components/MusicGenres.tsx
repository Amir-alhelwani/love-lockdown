import MotionSlide from "@/components/MotionSlide";
import { Button } from "@/components/ui/button";
import personalPreferencesSchema from "@/schema/personalPreferencesSchema";
import { useFormContext } from "react-hook-form";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
  {
    label: "pop",
  },
  {
    label: "jazz",
  },
  {
    label: "techno",
  },
  {
    label: "classic",
  },
  {
    label: "rock ‘n roll",
  },
  {
    label: "hip hop",
  },
  {
    label: "rap",
  },
  {
    label: "metal",
  },
];

const MusicGenres = () => {
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const setDirection = usePersonalPreferencesStore(
    (state) => state.setDirection
  );
  const { control, trigger } = useFormContext<personalPreferencesSchema>();
  return (
    <MotionSlide direction={direction} key={"musicGenres"}>
      <h2 className="text-3xl text-center">Music Genres</h2>
      <div className="px-1 mx-auto py-5">
        <FormField
          control={control}
          name="musicGenres"
          render={() => (
            <FormItem>
              {items.map((item) => (
                <FormField
                  key={item.label}
                  control={control}
                  name="musicGenres"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.label}
                        className="flex flex-row items-baseline space-x-3 space-y-0 capitalize"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.label)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.label])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.label
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-lg">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex px-1 justify-start items-center gap-2 my-5">
        <Button
          type="button"
          className="capitalize"
          onClick={async () => {
            const isValid = await trigger(["musicGenres"]);
            if (isValid) {
              setDirection(1);
              setContent("languages");
            }
          }}
        >
          next
        </Button>
        <Button
          type="button"
          className="capitalize"
          onClick={() => {
            setDirection(-1);
            setContent("freeTime");
          }}
        >
          previous
        </Button>
      </div>
    </MotionSlide>
  );
};

export default MusicGenres;
