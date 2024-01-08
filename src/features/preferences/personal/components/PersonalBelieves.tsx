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
    label: "communication is key",
  },
  {
    label: "continuous personal growth",
  },
  {
    label: "importance of family",
  },
  {
    label: "work-life balance",
  },
  {
    label: "shared values on health",
  },
  {
    label: "spirituality or philosophical beliefs",
  },
  {
    label: "respect for differences",
  },
  {
    label: "adventure and exploration",
  },
  {
    label: "other",
  },
];

const PersonalBelieves = () => {
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const setDirection = usePersonalPreferencesStore(
    (state) => state.setDirection
  );
  const { control, trigger } = useFormContext<personalPreferencesSchema>();
  return (
    <MotionSlide direction={direction} key={"PersonalBelieves"}>
      <h2 className="text-3xl">Personal Believes</h2>
      <div className="px-1 mx-auto py-5">
        <FormField
          control={control}
          name="personalBelieves"
          render={() => (
            <FormItem>
              {items.map((item) => (
                <FormField
                  key={item.label}
                  control={control}
                  name="personalBelieves"
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
            const isValid = await trigger(["personalBelieves"]);
            if (isValid) {
              setDirection(1);
              setContent("personalValues");
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
            setContent("basic");
          }}
        >
          previous
        </Button>
      </div>
    </MotionSlide>
  );
};

export default PersonalBelieves;
