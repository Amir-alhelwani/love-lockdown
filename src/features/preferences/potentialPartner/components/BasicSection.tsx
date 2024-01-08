import MotionSlide from "@/components/MotionSlide";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import partnerPreferencesSchema from "@/schema/partnerPreferencesSchema";
import { useFormContext } from "react-hook-form";
import usePartnerPreferencesStore from "../usePartnerPreferencesStore";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
  {
    label: "male",
  },
  {
    label: "female",
  },
  {
    label: "other",
  },
];

const BasicSection = () => {
  const direction = usePartnerPreferencesStore((state) => state.direction);
  const setContent = usePartnerPreferencesStore((state) => state.setContent);
  const setDirection = usePartnerPreferencesStore(
    (state) => state.setDirection
  );
  const { control, trigger } = useFormContext<partnerPreferencesSchema>();

  return (
    <MotionSlide direction={direction} key={"basic"}>
      <div className="p-1">
        <h2 className="text-3xl">partner information</h2>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-3 mt-5">
          <div className="w-full">
            <FormField
              control={control}
              name="favoriteHolidayDestination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorite Holiday Destination</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Favorite Holiday Destination" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem
                          className="capitalize"
                          value="adventure holiday"
                        >
                          adventure holiday
                        </SelectItem>
                        <SelectItem
                          className="capitalize"
                          value="relaxing on a tropical island"
                        >
                          relaxing on a tropical island
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={control}
              name="bodyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Body Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className="capitalize" value="slim">
                          slim
                        </SelectItem>
                        <SelectItem className="capitalize" value="average">
                          average
                        </SelectItem>
                        <SelectItem className="capitalize" value="curvy">
                          curvy
                        </SelectItem>
                        <SelectItem className="capitalize" value="full figured">
                          full figured
                        </SelectItem>
                        <SelectItem className="capitalize" value="athletic">
                          athletic
                        </SelectItem>
                        <SelectItem
                          className="capitalize"
                          value="any_preference"
                        >
                          any preference
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-3 mt-5">
          <div className="w-full">
            <FormField
              control={control}
              name="commitmentLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commitment Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Commitment Level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className="capitalize" value="long term">
                          long term
                        </SelectItem>
                        <SelectItem className="capitalize" value="short term">
                          short term
                        </SelectItem>
                        <SelectItem className="capitalize" value="just for fun">
                          just for fun
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={control}
              name="pet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="pet" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className="capitalize" value="dog">
                          dog
                        </SelectItem>
                        <SelectItem className="capitalize" value="cat">
                          cat
                        </SelectItem>
                        <SelectItem className="capitalize" value="none">
                          none
                        </SelectItem>
                        <SelectItem className="capitalize" value="other">
                          other
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-3 mt-5">
          <div className="w-full">
            <FormField
              control={control}
              name={"minAge"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Min Age</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full">
            <FormField
              control={control}
              name={"maxAge"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Age</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-3 mt-5">
          <div className="px-1 w-full">
            <h2 className="text-xl mb-3 font-medium">gender</h2>
            <FormField
              control={control}
              name="gender"
              render={() => (
                <FormItem>
                  {items.map((item) => (
                    <FormField
                      key={item.label}
                      control={control}
                      name="gender"
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
                                    ? field.onChange([
                                        ...field.value,
                                        item.label,
                                      ])
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
        </div>
        <div className="flex justify-start items-center mt-5">
          <Button
            type="button"
            onClick={async () => {
              const isValid = await trigger([
                "favoriteHolidayDestination",
                "minAge",
                "maxAge",
                "commitmentLevel",
                "pet",
                "bodyType",
                "gender",
              ]);
              if (isValid) {
                setDirection(1);
                setContent("personalBelieves");
              }
            }}
            size="lg"
            className="text-lg"
          >
            Next
          </Button>
        </div>
      </div>
    </MotionSlide>
  );
};

export default BasicSection;
