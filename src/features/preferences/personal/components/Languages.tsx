import MotionSlide from "@/components/MotionSlide";
import LoadingButton from "@/components/ui/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import personalPreferencesSchema from "@/schema/personalPreferencesSchema";
import { useFieldArray, useFormContext } from "react-hook-form";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";

const Languages = ({ isPending }: { isPending: boolean }) => {
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const setDirection = usePersonalPreferencesStore(
    (state) => state.setDirection
  );
  const { control } = useFormContext<personalPreferencesSchema>();
  const { fields, append, remove } = useFieldArray({
    name: "languages",
    control,
  });
  return (
    <MotionSlide direction={direction} key={"languages"}>
      <h2 className="text-3xl text-center">languages</h2>
      <div className="w-3/4 px-1 mx-auto py-5">
        {fields.map((field, index) => (
          <div key={field.id} className="w-full mb-2">
            <FormField
              control={control}
              name={`languages.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Languages {index + 1}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2 my-5">
        <Button
          onClick={() => append({ value: "" })}
          className="text-xl"
          size="icon"
          type="button"
        >
          +
        </Button>
        <Button
          onClick={() => {
            if (fields.length > 1) remove(fields.length - 1);
          }}
          type="button"
          className="text-xl"
          size="icon"
        >
          -
        </Button>
      </div>
      <div className="flex px-1 justify-start items-center gap-2 my-5">
        <Button disabled={isPending} type="submit">
          {isPending ? <LoadingButton /> : "submit"}
        </Button>
        <Button
          type="button"
          onClick={() => {
            setDirection(-1);
            setContent("musicGenres");
          }}
        >
          previous
        </Button>
      </div>
    </MotionSlide>
  );
};

export default Languages;
