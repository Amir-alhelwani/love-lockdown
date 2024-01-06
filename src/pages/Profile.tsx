import EditProfile from "@/components/EditProfile";
import useUserStore from "@/features/auth/useUserStore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  if (!user) navigate("/");
  return (
    <section className="max-w-7xl px-4 mx-auto min-h-100vh flex justify-center items-start">
      <div className="border border-black rounded-xl mt-12 max-w-[75%] mx-auto w-full p-4 flex flex-col justify-start items-start my-8">
        <div className="w-[250px] mb-5 h-[250px] mx-auto">
          <img
            className="w-full mx-auto rounded-full shadow-lg h-full object-cover"
            src={user?.imageUrl}
            alt=""
          />
        </div>
        <h1 className="text-2xl w-full text-center">{user?.name}</h1>
        <div className="space-y-4 w-full mt-5">
          <div className="flex w-full justify-between items-center">
            <p className="flex-1 text-xl w-full">Email:</p>
            <p className="flex-1 text-xl w-full">{user?.email}</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="flex-1 text-xl w-full">phone number:</p>
            <p className="flex-1 text-xl w-full">{user?.phoneNumber}</p>
          </div>
          <div className="mt-2 flex justify-start items-center gap-4">
            <EditProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
