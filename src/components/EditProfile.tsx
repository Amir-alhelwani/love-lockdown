import { Button } from "@/components/ui/button";
import editProfile from "@/features/auth/services/editProfile";
import useUserStore from "@/features/auth/useUserStore";
import useToast from "@/hooks/useToast";
import editProfileSchema from "@/schema/editProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import LoadingButton from "./ui/LoadingButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
const EditProfile = () => {
  const user = useUserStore((state) => state.user);
  const toast = useToast();
  const setUser = useUserStore((state) => state.setUser);

  const form = useForm<editProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      email: user?.email || "",
      Name: user?.name || "",
      PhoneNumber: user?.phoneNumber || "",
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: editProfileSchema) => editProfile(data),
    onSuccess: (data) => {
      setUser(data);
      toast("You have been logged in successfully", "success");
    },
    onError: (error: AxiosError<Record<string, string>>) => {
      if (!error.response) toast("An error occurred, please try again later");
      else {
        toast(error.response.data.message);
      }
    },
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit Profile</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[425px]">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription className="text-black">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data: editProfileSchema) =>
              mutate(data)
            )}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name={"email"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"Name"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"PhoneNumber"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter>
              <SheetClose>
                <Button type="submit">
                  {isPending ? <LoadingButton /> : " Save Changes"}
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfile;
