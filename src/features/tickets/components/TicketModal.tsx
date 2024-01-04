import LoadingButton from "@/components/ui/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import useToast from "@/hooks/useToast";
import ticketSchema from "@/schema/ticketSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import createTicket from "../services/createTicket";
import useTicketStore from "../useTicketStore";
const TicketModal = () => {
  const { id } = useParams();
  const openModal = useTicketStore((state) => state.openModal);
  const type = useTicketStore((state) => state.type);
  const setOpenModal = useTicketStore((state) => state.setOpenModal);
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
        roomId: parseInt(id!),
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
    },
  });

  return (
    <Dialog open={openModal}>
      <DialogContent
        onEscapeKeyDown={() => setOpenModal(false)}
        onPointerDownOutside={() => setOpenModal(false)}
        className="sm:max-w-[425px] overflow-hidden"
      >
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
      </DialogContent>
    </Dialog>
  );
};

export default TicketModal;
