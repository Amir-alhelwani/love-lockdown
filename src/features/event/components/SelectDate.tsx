import useEventStore from "../services/useEventStore";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ticketSchema from "@/schema/ticketSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import createTicket from "@/features/tickets/services/createTicket";
import { format } from "date-fns";
import { AxiosError } from "axios";
import useToast from "@/hooks/useToast";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/ui/LoadingButton";

const SelectDate = () => {
  const roomId = useEventStore((state) => state.roomId);
  const type = useEventStore((state) => state.type);
  const setOpenModal = useEventStore((state) => state.setOpenModal);
  const setRoomId = useEventStore((state) => state.setRoomId);
  const setContent = useEventStore((state) => state.setContent);
  const toast = useToast();
  const navigate = useNavigate();
  const form = useForm<ticketSchema>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      bookingDate: "",
    },
  });
  const { isPending, mutate } = useMutation({
    mutationFn: (data: ticketSchema) =>
      createTicket({
        bookingDate: format(new Date(data.bookingDate), "yyyy-MM-dd hhaa"),
        roomId: roomId,
        type,
      }),
    onError: (error: AxiosError<Record<string, string>>) => {
      if (!error.response) {
        toast("An error occurred, please try again later");
      } else {
        toast(error.response.data.message);
    }
    },
    onSuccess: () => {
      toast("The card has been reserved successfully", "success");
      navigate("/");
    },
    onSettled: () => {
      setOpenModal(false);
      setContent("room");
      setRoomId(-1);
    },
  });
  return (
    <>
      <DialogHeader>
        <DialogTitle className="capitalize font-bold text-3xl">
          ticket date
        </DialogTitle>
        <DialogDescription className="capitalize">
          please select a suitable date for your ticket
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutate(data))}>
          <FormField
            control={form.control}
            name={"bookingDate"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex justify-center items-center mt-4">
            <Button
              disabled={isPending}
              size="full"
              className="capitalize"
              type="submit"
            >
              {isPending ? <LoadingButton /> : "submit"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
};

export default SelectDate;
