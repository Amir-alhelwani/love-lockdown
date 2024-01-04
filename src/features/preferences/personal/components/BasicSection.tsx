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
import personalPreferencesSchema from "@/schema/personalPreferencesSchema";
import { useFormContext } from "react-hook-form";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";

const BasicSection = () => {
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const setDirection = usePersonalPreferencesStore(
    (state) => state.setDirection
  );
  const { trigger, control } = useFormContext<personalPreferencesSchema>();

  return (
    <MotionSlide direction={direction} key={"basic"}>
      <div className="p-1">
        <h2 className="text-3xl">Personal Information</h2>
        <div className="flex-col sm:flex-row flex justify-center items-center gap-3 mt-5">
          <div className="w-full">
            <FormField
              control={control}
              name={"age"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
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
              name={"height"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height</FormLabel>
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
        <div className="flex-col sm:flex-row flex justify-center items-start gap-3 mt-5">
          <div className="w-full">
            <FormField
              control={control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className="capitalize" value="male">
                          male
                        </SelectItem>
                        <SelectItem className="capitalize" value="female">
                          female
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
          <div className="w-full">
            <FormField
              control={control}
              name="sexualPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sexual Preference</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Sexual Preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className="capitalize" value="men">
                          men
                        </SelectItem>
                        <SelectItem className="capitalize" value="women">
                          women
                        </SelectItem>
                        <SelectItem className="capitalize" value="men + women">
                          men + women
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
        <div className="flex justify-start items-center mt-5">
          <Button
            type="button"
            onClick={async () => {
              const isValid = await trigger([
                "sexualPreference",
                "bodyType",
                "favoriteHolidayDestination",
                "commitmentLevel",
                "pet",
                "age",
                "height",
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
