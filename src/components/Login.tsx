import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import login from "@/features/auth/services/login";
import useAuthStore from "@/features/auth/useAuthStore";
import useUserStore from "@/features/auth/useUserStore";
import useToast from "@/hooks/useToast";
import authSchema from "@/schema/authSchema";
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

const Login = () => {
  const toast = useToast();
  const direction = useAuthStore((state) => state.direction);
  const setDirection = useAuthStore((state) => state.setDirection);
  const setOpenModal = useAuthStore((state) => state.setOpenModal);
  const setContent = useAuthStore((state) => state.setContent);
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const form = useForm<authSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: authSchema) => login(data),
    onSuccess: (data) => {
      Cookies.set("token", data.token, {
        expires: 300,
        path: "/",
      });
      setUser(data.user);
      setToken(data.token);
      setOpenModal(false);
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
    <MotionSlide direction={direction} key={"login"}>
      <DialogHeader>
        <DialogTitle className="text-center font-bold text-3xl">
          Login
        </DialogTitle>
        <DialogDescription className="text-center text-xl">
          New to this site?{" "}
          <Button
            variant="link"
            onClick={() => {
              setContent("register");
              setDirection(1);
            }}
          >
            Sign Up
          </Button>
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data: authSchema) => mutate(data))}
          className="grid gap-4 px-1 py-4"
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
          <DialogFooter className="flex justify-center items-center">
            <Button
              disabled={isPending}
              size="full"
              className="capitalize"
              type="submit"
            >
              {isPending ? <LoadingButton /> : "login"}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </MotionSlide>
  );
};

export default Login;
