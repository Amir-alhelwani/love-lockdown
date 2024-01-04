import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import signUp from "@/features/auth/services/register";
import useAuthStore from "@/features/auth/useAuthStore";
import useUserStore from "@/features/auth/useUserStore";
import useToast from "@/hooks/useToast";
import registerSchema from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import MotionSlide from "./MotionSlide";
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

const Register = () => {
  const toast = useToast();
  const direction = useAuthStore((state) => state.direction);
  const setDirection = useAuthStore((state) => state.setDirection);
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const setOpenModal = useAuthStore((state) => state.setOpenModal);
  const setContent = useAuthStore((state) => state.setContent);
  const form = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      image: new File([], ""),
      email: "",
      Name: "",
      password: "",
      PhoneNumber: "",
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: registerSchema) => signUp(data),
    onSuccess: (data) => {
      Cookies.set("token", data.token, {
        expires: 300,
        path: "/",
      });
      setUser(data.user);
      setToken(data.token);
      setOpenModal(false);
      toast("Account successfully created", "success");
    },
    onError: (error: AxiosError<Record<string, string>>) => {
      if (!error.response) toast("An error occurred, please try again later");
      else {
        toast(error.response.data.message);
      }
    },
  });
  return (
    <MotionSlide direction={direction} key={"register"}>
      <DialogHeader>
        <DialogTitle className="text-center font-bold text-3xl">
          Register
        </DialogTitle>
        <DialogDescription className="text-center text-xl">
        Already a member{" "}
          <Button
            variant="link"
            onClick={() => {
              setContent("login");
              setDirection(-1);
            }}
          >
            Login
          </Button>
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data: registerSchema) => mutate(data))}
          className="grid gap-1 px-1"
        >
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
          <FormField
            control={form.control}
            name={"image"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                    type="file"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"password"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex pt-3 justify-center items-center">
            <Button size="full" className="capitalize" type="submit">
              {isPending ? <LoadingButton /> : "Register"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </MotionSlide>
  );
};

export default Register;
