import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useUserStore from "@/features/auth/useUserStore";
import answerRequest from "@/features/matching/services/answerRequest";
import getRequest from "@/features/matching/services/getRequest";
import useToast from "@/hooks/useToast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Check, Users, X } from "lucide-react";
import RedDot from "./ui/RedDot";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const TicketRequest = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const user = useUserStore((state) => state.user);

  const { data, isPending, isError } = useQuery({
    queryKey: ["requests", user?.id],
    queryFn: getRequest,
    initialData: [],
    refetchInterval: 3000,
  });
  const { mutate } = useMutation({
    mutationFn: ({
      requestId,
      answer,
    }: {
      requestId: number;
      answer: boolean;
    }) => answerRequest({ requestId, answer }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requests", user?.id] });
      toast("success", "success");
    },
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="relative hover:no-underline rounded-full border border-black"
        >
          <Users />
          {data?.length !== 0 ? <RedDot /> : null}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center text-2xl capitalize">
            ticket invitations
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {isPending ? (
            <>loading..</>
          ) : isError ? (
            <>error</>
          ) : data.length === 0 ? (
            <h3 className="text-center text-xl capitalize">
              no current invitations
            </h3>
          ) : (
            data.map((request) => (
              <div
                key={request.item1.id}
                className="w-full border overflow-hidden border-black rounded-xl flex justify-between items-center"
              >
                <div className="flex-1 p-2 flex justify-start gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      className="object-cover"
                      src={request.item2?.imageUrl}
                    />
                    <AvatarFallback className="uppercase">
                      {request.item2?.name
                        .split(" ")
                        .map((char) => char.charAt(0))
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p>{request.item2.name}</p>
                </div>
                <div className="flex justify-center items-center px-4 gap-3">
                  <button
                    onClick={() =>
                      mutate({ requestId: request.item1.id, answer: false })
                    }
                  >
                    <X />
                  </button>
                  <button
                    onClick={() =>
                      mutate({ requestId: request.item1.id, answer: true })
                    }
                  >
                    <Check />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TicketRequest;
