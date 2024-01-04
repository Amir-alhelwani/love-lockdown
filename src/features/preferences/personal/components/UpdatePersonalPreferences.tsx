import { Form } from "@/components/ui/form";
import useToast from "@/hooks/useToast";
import personalPreferencesSchema from "@/schema/personalPreferencesSchema";
import { PersonalPreferences } from "@/types/personalPreferences";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import updatePersonalPreferences from "../services/updatePersonalPreferences";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";
import BasicSection from "./BasicSection";
import FreeTime from "./FreeTime";
import Languages from "./Languages";
import MusicGenres from "./MusicGenres";
import PersonalBelieves from "./PersonalBelieves";
import PersonalValues from "./PersonalValues";
import WelcomeSection from "./WelcomeSection";

type PropsType = {
  data: PersonalPreferences;
};

const UpdatePersonalPreferences: FC<PropsType> = ({ data }) => {
  const formHook = useForm<personalPreferencesSchema>({
    resolver: zodResolver(personalPreferencesSchema),
    defaultValues: {
      age: data.age.toString(),
      bodyType: data.bodyType,
      commitmentLevel: data.commitmentLevel,
      favoriteHolidayDestination: data.favoriteHolidayDestination,
      gender: data.gender,
      height: data.height.toString(),
      pet: data.pet,
      sexualPreference: data.sexualPreference,
      personalBelieves: data.personalBelieves,
      personalValues: data.personalValues,
      freeTime: data.freeTime,
      musicGenres: data.musicGenres,
      languages: data.languages.map((item) => ({ value: item })),
    },
  });
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const content = usePersonalPreferencesStore((state) => state.content);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const navigate = useNavigate();
  const toast = useToast();
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: personalPreferencesSchema) => {
      const body = {
        ...data,
        languages: data.languages.map((item) => item.value),
      };
      await updatePersonalPreferences(body);
    },
    onSuccess: () => {
      toast("success", "success");
      navigate("/");
      setContent("start");
    },
  });
  useEffect(() => {
    if (data) {
      formHook.setValue("age", data.age.toString());
      formHook.setValue("bodyType", data.bodyType);
      formHook.setValue("commitmentLevel", data.commitmentLevel);
      formHook.setValue(
        "favoriteHolidayDestination",
        data.favoriteHolidayDestination
      );
      formHook.setValue("gender", data.gender);
      formHook.setValue("height", data.height.toString());
      formHook.setValue("pet", data.pet);
      formHook.setValue("sexualPreference", data.sexualPreference);
      formHook.setValue("personalBelieves", data.personalBelieves);
      formHook.setValue("personalValues", data.personalValues);
      formHook.setValue("freeTime", data.freeTime);
      formHook.setValue("musicGenres", data.musicGenres);
      formHook.setValue(
        "languages",
        data.languages.map((item) => ({ value: item }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <section className="container py-8">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <FormProvider {...formHook}>
          <Form {...formHook}>
            <form onSubmit={formHook.handleSubmit((data) => mutate(data))}>
              {content === "start" ? (
                <WelcomeSection />
              ) : content === "basic" ? (
                <BasicSection />
              ) : content === "personalBelieves" ? (
                <PersonalBelieves />
              ) : content === "personalValues" ? (
                <PersonalValues />
              ) : content === "freeTime" ? (
                <FreeTime />
              ) : content === "musicGenres" ? (
                <MusicGenres />
              ) : (
                <Languages isPending={isPending} />
              )}
            </form>
          </Form>
        </FormProvider>
      </AnimatePresence>
    </section>
  );
};

export default UpdatePersonalPreferences;
