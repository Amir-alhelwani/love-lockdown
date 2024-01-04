import { Button } from "@/components/ui/button";
import { SmartTicket } from "@/types/ticket";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Hourglass, UserPlus, UserRoundCheck } from "lucide-react";
import { useState } from "react";
import sendRequest from "../services/sendRequest";
import PersonalPreferencesModal from "./PersonalPreferencesModal";
import PotentialPartnerPreferencesModal from "./PotentialPartnerPreferencesModal";
import useToast from "@/hooks/useToast";

const SmartCard = ({ user, type }: { user: SmartTicket; type: string[] }) => {
  const [status, setStatus] = useState(type);
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => sendRequest(user.user.id),
    onMutate: () => {
      setStatus((prev) => [...prev, "waiting"]);
      toast("success", "success");
    },
    onError: () => {
      setStatus((prev) => prev.slice(0, prev.length - 1));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users-ticket"],
      });
    },
  });
  return (
    <div className="w-[250px] shadow-md rounded-lg overflow-hidden border border-black flex flex-col justify-start items-start">
      <div className="w-full h-[200px]">
        <img
          src={user.user.imageUrl}
          className="object-cover w-full h-full"
          alt="random user"
        />
      </div>
      <div className="px-4 w-full pb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-center text-xl py-2">{user.user.name}</h2>
          {status.length === 0 ? (
            <Button onClick={() => mutate()} variant="link" size="icon">
              <UserPlus className="w-4 h-4" />
            </Button>
          ) : null}
          {status.includes("waiting") ? (
            <Hourglass className="w-4 h-4" />
          ) : type.includes("Accepted") || type.includes("accepted") ? (
            <UserRoundCheck className="w-4 h-4" />
          ) : null}
        </div>
        <p>similarityScore: {parseFloat(user.similarityScore.toFixed(1)) * 100}%</p>
      </div>
      <div className="border-t border-black w-full px-4 flex justify-start items-center gap-2">
        <PersonalPreferencesModal data={user.personalPreferences} />
        <PotentialPartnerPreferencesModal
          data={user.potentialPartnerPreferences}
        />
      </div>
    </div>
  );
};

export default SmartCard;
