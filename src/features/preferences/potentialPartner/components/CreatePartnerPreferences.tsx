import { Form } from "@/components/ui/form";
import useToast from "@/hooks/useToast";
import partnerPreferencesSchema from "@/schema/partnerPreferencesSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import createPartnerPreferences from "../services/createPartnerPreferences";
import usePartnerPreferencesStore from "../usePartnerPreferencesStore";
import BasicSection from "./BasicSection";
import FreeTime from "./FreeTime";
import MusicGenres from "./MusicGenres";
import PersonalBelieves from "./PersonalBelieves";
import WelcomeSection from "./WelcomeSection";

const CreatePartnerPreferences = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const formHook = useForm<partnerPreferencesSchema>({
    resolver: zodResolver(partnerPreferencesSchema),
    defaultValues: {
      bodyType: "",
      commitmentLevel: "",
      favoriteHolidayDestination: "",
      gender: [],
      maxAge: "",
      minAge: "",
      pet: "",
      personalBelieves: [],
      freeTime: [],
      musicGenres: [],
    },
  });
  const direction = usePartnerPreferencesStore((state) => state.direction);
  const setContent = usePartnerPreferencesStore((state) => state.setContent);
  const content = usePartnerPreferencesStore((state) => state.content);
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: partnerPreferencesSchema) => {
      await createPartnerPreferences(data);
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
              ) : content === "freeTime" ? (
                <FreeTime />
              ) : content === "musicGenres" ? (
                <MusicGenres isPending={isPending} />
              ) : null}
            </form>
          </Form>
        </FormProvider>
      </AnimatePresence>
    </section>
  );
};

export default CreatePartnerPreferences;
