import { Navigate, useParams } from "react-router-dom";
import image1 from "@/assets/images/final 111-07.webp";
import image2 from "@/assets/images/final 111-06.webp";
const Article = () => {
  const { id } = useParams();

  if (id !== "1" && id !== "2") return <Navigate to="/not-found" />;
  return (
    <section className="max-w-[1440px] w-full py-8 mx-auto px-4">
      {id === "1" ? (
        <div className="w-9/12 bg-lavender-gray border-2 border-black py-8 px-16 mx-auto">
          <div className="flex justify-start items-center gap-5 mb-8">
            <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex justify-center items-center">
              L I
            </div>
            <div className="text-sm flex gap-2">
              <p>Loujain Idelbi</p>
              <p>.</p>
              <p>Dec 11, 2023 . 1 min</p>
            </div>
          </div>
          <h1 className="text-5xl mb-6">
            Love Lockdown Launch: Hilarity and Success at Escape Room Exit Game
          </h1>
          <p className="text-lg font-light mb-6">Updated: Dec 12, 2023</p>
          <p className="text-lg font-light mb-6">
            Love Lockdown's first event at Escape Room Exit Game was a riot of
            laughter and triumph. Couples, randomly matched or precisely paired,
            tackled challenging puzzles and emerged victorious, with smiles that
            spoke of shared joy and accomplishment.
          </p>
          <h2 className="text-3xl mb-3">The Perfect Setting</h2>
          <p className="text-lg font-light mb-6">
            Held at the renowned Escape Room Exit Game, Love Lockdown's debut
            was a blend of mystery, collaboration, and fun. The venue's
            immersive escaperoom experiences provided the ideal backdrop for
            this unconventional dating adventure.
          </p>
          <h2 className="text-3xl mb-3">Laughter-Filled Escapades</h2>
          <p className="text-lg font-light mb-6">
            Regular Ticket holders embraced the unknown, resulting in hilarious
            escapades as couples navigated through the escape room challenges.
            Smart Ticket pairs, carefully matched through advanced AI
            technology, experienced seamless connections amidst the puzzles.
          </p>
          <div className="mb-5">
            <img className="w-full object-contain" src={image1} alt="" />
          </div>
          <h2 className="text-3xl mb-3">Premium Ticket Joy</h2>
          <p className="text-lg font-light mb-6">
            Premium Ticket duos, bringing friends along, added an extra layer of
            joy to the event. The camaraderie and familiarity enhanced the
            shared experience, proving that the best adventures are those
            enjoyed with loved ones.
          </p>
          <h2 className="text-3xl mb-3">Triumph and Smiles</h2>
          <p className="text-lg font-light mb-6">
            As escaperoom clocks ticked down, successful couples reveled in
            their triumphs, each leaving with a sense of accomplishment. The
            evening concluded with laughter-filled stories and unexpected
            connections formed during the challenges.
          </p>
          <h2 className="text-3xl mb-3">Love Lockdown's Winning Formula</h2>
          <p className="text-lg font-light mb-6">
            The event at Escape Room Exit Game showcased Love Lockdown's success
            in redefining dating. It was a night of shared experiences,
            laughter, and the forging of connections in a novel and exciting
            way.
          </p>
          <h2 className="text-3xl mb-3">What's Next?</h2>
          <p className="text-lg font-light mb-6">
            As Love Lockdown continues its weekly escapades with changing
            themes, the anticipation for more laughter, surprises, and magic
            grows. The inaugural event was just a glimpse of what Love Lockdown
            has in store for redefining the dating game—one escaperoom adventure
            at a time. Stay tuned for more fun and excitement!
          </p>
        </div>
      ) : (
        <div className="w-9/12 bg-lavender-gray border-2 border-black py-8 px-16 mx-auto">
          <div className="flex justify-start items-center gap-5 mb-8">
            <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex justify-center items-center">
              L I
            </div>
            <div className="text-sm flex gap-2">
              <p>Loujain Idelbi</p>
              <p>.</p>
              <p>Dec 11, 2023 . 2 min</p>
            </div>
          </div>
          <h1 className="text-5xl mb-20">
            Embrace the Magic: Welcome to Love Lockdown!
          </h1>
          <h2 className="text-3xl mb-6">
            Welcome to our innovative Dating Concept
          </h2>
          <p className="text-lg font-light mb-6">
            Hello, lovely readers and adventurers! 🌟
          </p>
          <p className="text-lg font-light mb-6">
            We're absolutely thrilled to welcome you to Love Lockdown, where the
            ordinary transforms into extraordinary, and the traditional notion
            of dating takes on a whole new, exhilarating meaning. Are you ready
            to embark on a journey that blends mystery, laughter, and the
            promise of genuine connections?
          </p>
          <div className="mb-5">
            <img className="w-full object-contain" src={image2} alt="" />
          </div>
          <h2 className="text-3xl mb-3">What is Love Lockdown?</h2>
          <p className="text-lg font-light mb-6">
            Love Lockdown is not just an event; it's an experience designed to
            inject a dose of fun and unpredictability into your dating life.
            Picture this: escaperoom adventures combined with the excitement of
            meeting new people or sharing the thrill with someone you already
            know. Intrigued? You should be!
          </p>
          <h2 className="text-3xl mb-3">How It Works: A Quick Overview</h2>
          <ul className="pl-8 list-decimal">
            <li className="text-xl mb-5">
              <span className="font-title-font">Get Your Ticket:</span> Choose
              from Regular, Smart, or Premium tickets based on your preference
              for surprise, tailored matchmaking, or bringing a friend along.
            </li>
            <li className="text-xl mb-5">
              <span className="font-title-font">Craft Your Profile:</span> Share
              a bit about yourself and your interests on our user-friendly
              website to help us create the perfect match or surprise for you.
            </li>
            <li className="text-xl mb-5">
              <span className="font-title-font">The Escaperoom Adventure:</span>{" "}
              Imagine collaborating with someone in an escaperoom setting,
              solving puzzles, and overcoming challenges. It's not just an
              activity; it's an opportunity for shared laughter and connection.
            </li>
            <li className="text-xl mb-5">
              <span className="font-title-font">Post-Escaperoom Delight:</span>{" "}
              Successful couples may receive an invitation for a second date at
              a unique location with special activities. Plus, everyone gets
              rewarded with vouchers for snacks and drinks based on their
              escaperoom journey.
            </li>
          </ul>
          <h2 className="text-3xl mb-3">Why Love Lockdown?</h2>
          <ul>
            <li className="text-xl mb-5">
              <span className="font-title-font">Unique Experience:</span> Love
              Lockdown is not your run-of-the-mill dating event. It's an
              experience designed to break the monotony and add a dash of
              excitement to your life.
            </li>
            <li className="text-xl mb-5">
              <span className="font-title-font">Laughter and Connection:</span>{" "}
              We believe that shared laughter is the foundation of any great
              connection. Love Lockdown combines the thrill of escaperooms with
              the joy of forming meaningful connections.
            </li>
            <li className="text-xl mb-5">
              <span className="font-title-font">Versatility for Everyone:</span>{" "}
              With different ticket options, age themes, and changing escaperoom
              experiences, Love Lockdown provides a versatile space for people
              of all generations to come together, laugh, and create lasting
              connections.
            </li>
          </ul>
          <h2 className="text-3xl mb-3">Join Us on This Adventure!</h2>
          <p className="text-lg font-light mb-6">
            We invite you to join us at Love Lockdown and be a part of something
            truly special. Whether you're single, in a relationship, or just
            curious, there's a place for you in our escaperoom adventure. Let's
            break the ice, solve puzzles, and create memories together. Ready to
            unlock the magic? Grab your ticket, create your profile, and get
            ready for a dating experience like no other. Welcome to Love
            Lockdown—where the extraordinary awaits you! See you on the other
            side of the escaperoom door! With love and excitement, The Love
            Lockdown Team 💖✨.
          </p>
          <h2 className="text-xl mb-3">Buy Now or Subscribe.</h2>
        </div>
      )}
    </section>
  );
};

export default Article;
