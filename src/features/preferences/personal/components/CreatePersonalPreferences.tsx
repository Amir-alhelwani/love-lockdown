import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import WelcomeSection from "./WelcomeSection";
import BasicSection from "./BasicSection";
import PersonalBelieves from "./PersonalBelieves";
import PersonalValues from "./PersonalValues";
import FreeTime from "./FreeTime";
import MusicGenres from "./MusicGenres";
import usePersonalPreferencesStore from "../usePersonalPreferencesStore";
import { useMutation } from "@tanstack/react-query";
import personalPreferencesSchema from "@/schema/personalPreferencesSchema";
import createPersonalPreferences from "../services/createPersonalPreferences";
import { zodResolver } from "@hookform/resolvers/zod";
import Languages from "./Languages";
import { Form } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import useToast from "@/hooks/useToast";

const CreatePersonalPreferences = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const formHook = useForm<personalPreferencesSchema>({
    resolver: zodResolver(personalPreferencesSchema),
    defaultValues: {
      age: "",
      bodyType: "",
      commitmentLevel: "",
      favoriteHolidayDestination: "",
      gender: "",
      height: "",
      pet: "",
      sexualPreference: "",
      personalBelieves: [],
      personalValues: [],
      freeTime: [],
      musicGenres: [],
      languages: [{ value: "" }],
    },
  });
  const direction = usePersonalPreferencesStore((state) => state.direction);
  const setContent = usePersonalPreferencesStore((state) => state.setContent);
  const content = usePersonalPreferencesStore((state) => state.content);
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: personalPreferencesSchema) => {
      const body = {
        ...data,
        languages: data.languages.map((item) => item.value),
      };
      await createPersonalPreferences(body);
    },
    onSuccess: () => {
      navigate("/");
      toast("success", "success");
      setContent("start");
    },
  });
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

export default CreatePersonalPreferences;
