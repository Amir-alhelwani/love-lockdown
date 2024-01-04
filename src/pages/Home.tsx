import EscapeRoomsIntro from "@/features/home/components/EscapeRoomsIntro";
import Hero from "@/features/home/components/Hero";
import HeroImage from "@/features/home/components/HeroImage";
// import FollowUs from "@/features/home/components/FollowUs";
import Subscribe from "@/features/home/components/Subscribe";
import TicketsTypes from "@/features/home/components/TicketsTypes";
import { Fragment } from "react";

const Home = () => {
  // const { mutate } = useMutation({
  //   mutationFn: async (body: string) => {
  //     await axios.post(`https://localhost:7096/api/Emails`, {
  //       email: "aaaamir66@gmail.com",
  //       subj: "dddddd",
  //       body,
  //     });
  //   },
  // });
  return (
    <Fragment>
      <Hero />
      <HeroImage />
      <EscapeRoomsIntro />
      <TicketsTypes />
      {/* <FollowUs /> */}
      <Subscribe />
      {/* <Button
        onClick={() =>
          mutate(`
      <div style="width: 100%;padding: 30px 0px;background-color: #FFE2C1;">
      <div>
      <h1 style="text-align: center;font-size:1.8rem;text-transform: capitalize">title</h1>
      <p style="text-align: center;font-size:1.1rem;text-transform: capitalize;padding:0px 10px">text</p>
      </div>
      </div>`)
        }
      >
        send
      </Button> */}
    </Fragment>
  );
};

export default Home;
