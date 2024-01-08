import MotionSlide from "@/components/MotionSlide";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import personalPreferencesSchema from "@/schema/personalPreferencesSchema";
import { useFormContext } from "react-hook-form";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";

const items = [
  {
    label: "sport",
  },
  {
    label: "film",
  },
  {
    label: "books",
  },
  {
    label: "gaming",
  },
  {
    label: "social gathering",
  },
  {
    label: "shopping",
  },
  {
    label: "chilling at home",
  },
  {
    label: "chatting",
  },
  {
    label: "festivals",
  },
  {
    label: "arts",
  },
  {
    label: "adventures",
  },
];

const FreeTime = () => {
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const setDirection = usePersonalPreferencesStore(
    (state) => state.setDirection
  );
  const { control, trigger } = useFormContext<personalPreferencesSchema>();
  return (
    <MotionSlide direction={direction} key={"freeTime"}>
      <h2 className="text-3xl text-center">Free Time</h2>
      <div className="px-1 mx-auto py-5">
        <FormField
          control={control}
          name="freeTime"
          render={() => (
            <FormItem>
              {items.map((item) => (
                <FormField
                  key={item.label}
                  control={control}
                  name="freeTime"
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
            const isValid = await trigger(["freeTime"]);
            if (isValid) {
              setDirection(1);
              setContent("musicGenres");
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
            setContent("personalValues");
          }}
        >
          previous
        </Button>
      </div>
    </MotionSlide>
  );
};

export default FreeTime;
