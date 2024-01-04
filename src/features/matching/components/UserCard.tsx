import { Button } from "@/components/ui/button";
import { User } from "@/features/auth/services/login";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserPlus } from "lucide-react";
import sendRequest from "../services/sendRequest";
import { Hourglass } from "lucide-react";
import { UserRoundCheck } from "lucide-react";
import { useState } from "react";
import useToast from "@/hooks/useToast";
const UserCard = ({ user, type }: { user: User; type: string[] }) => {
  const [status, setStatus] = useState(type);
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => sendRequest(user.id),
    onMutate: () => {
      setStatus((prev) => [...prev, "waiting"]);
    },
    onError: () => {
      setStatus((prev) => prev.slice(0, prev.length - 1));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users-ticket"],
      });
      toast("success", "success");
    },
  });
  return (
    <div className="w-[250px] shadow-md rounded-lg overflow-hidden border border-black flex flex-col justify-start items-start">
      <div className="w-full h-[200px] border-b border-black">
        <img
          src={user.imageUrl}
          className="object-cover w-full h-full"
          alt="random user"
        />
      </div>
      <div className="px-4 w-full pb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-center text-xl py-2">{user.name}</h2>
          {status.length === 0 ? (
            <Button onClick={() => mutate()} variant="link" size="icon">
              <UserPlus className="w-4 h-4" />
            </Button>
          ) : null}
          {status.includes("waiting") ? (
            <Hourglass className="w-4 h-4" />
          ) : type.includes("Accepted") ? (
            <UserRoundCheck className="w-4 h-4" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
