import useToast from "@/hooks/useToast";
import partnerPreferencesSchema from "@/schema/partnerPreferencesSchema";
import { PartnerPreferences } from "@/types/partnerPreferences";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import updatePartnerPreferences from "../services/updatePartnerPreferences";
import usePartnerPreferencesStore from "../usePartnerPreferencesStore";
import BasicSection from "./BasicSection";
import FreeTime from "./FreeTime";
import MusicGenres from "./MusicGenres";
import PersonalBelieves from "./PersonalBelieves";
import WelcomeSection from "./WelcomeSection";

type PropsType = {
  data: PartnerPreferences;
};

const UpdatePartnerPreferences: FC<PropsType> = ({ data }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const formHook = useForm<partnerPreferencesSchema>({
    resolver: zodResolver(partnerPreferencesSchema),
    defaultValues: {
      bodyType: data.bodyType,
      freeTime: data.freeTime,
      gender: data.gender,
      maxAge: data.maxAge.toString(),
      minAge: data.minAge.toString(),
      musicGenres: data.musicGenres,
      personalBelieves: data.personalBelieves,
      commitmentLevel: data.commitmentLevel,
      favoriteHolidayDestination: data.favoriteHolidayDestination,
      pet: data.pet,
    },
  });
  useEffect(() => {
    if (data) {
      formHook.setValue("bodyType", data.bodyType);
      formHook.setValue("freeTime", data.freeTime);
      formHook.setValue("gender", data.gender);
      formHook.setValue("musicGenres", data.musicGenres);
      formHook.setValue("personalBelieves", data.personalBelieves);
      formHook.setValue("commitmentLevel", data.commitmentLevel);
      formHook.setValue(
        "favoriteHolidayDestination",
        data.favoriteHolidayDestination
      );
      formHook.setValue("pet", data.pet);
      formHook.setValue("maxAge", data.maxAge.toString());
      formHook.setValue("minAge", data.minAge.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const direction = usePartnerPreferencesStore((state) => state.direction);
  const content = usePartnerPreferencesStore((state) => state.content);
  const setContent = usePartnerPreferencesStore((state) => state.setContent);
  const { isPending, mutate } = useMutation({
    mutationFn: async (data: partnerPreferencesSchema) => {
      await updatePartnerPreferences(data);
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
        </FormProvider>
      </AnimatePresence>
    </section>
  );
};

export default UpdatePartnerPreferences;
