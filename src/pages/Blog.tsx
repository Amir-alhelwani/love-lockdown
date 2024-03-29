import BlogImage from "@/assets/images/blog.webp";
import { blogs } from "@/constants/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="max-w-7xl px-4 mx-auto py-10">
        <div className="flex w-full flex-col sm:flex-row justify-center items-center">
          <div className="flex-1 w-full">
          <h1 className="text-3xl uppercase sm:hidden block mb-4 leading-[4.5rem]">
              THE Love Lockdown BLOG
            </h1>
            <div className="rounded-xl overflow-hidden">
              <img
                src={BlogImage}
                className="w-full sm:w-3/4 border-2 border-black rounded-xl"
                alt="Escape Image"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-7xl uppercase hidden sm:block mb-4 max-w-[60%] leading-[5.5rem]">
              THE Love Lockdown BLOG
            </h1>
            <h2 className="text-2xl pb-4 max-sm:pt-3">New post every week</h2>
            <p className="max-w-[75%] text-lg">
              Welcome to our blog hub! Get ready for awesome stories about our
              concept, Love Lockdown. It's all about love, fun dates, and cool
              tips. Dive in and join the adventure with us every week!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-lavender-gray">
        <div className="max-w-7xl px-2 sm:px-4 py-10 mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                to={blog.id.toString()}
                className="w-full sm:w-[500px] border-2 border-black"
              >
                <div className="bg-black w-full h-[250] sm:h-[400px]">
                  <img
                    className="w-full h-full object-cover"
                    src={blog.image}
                    alt=""
                  />
                </div>
                <div className="bg-papaya-whip p-3 sm:p-6">
                  <div className="flex justify-start items-center gap-5 mb-3">
                    <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex justify-center items-center">
                      L I
                    </div>
                    <div className="text-sm">
                      <p>Loujain Idelbi</p>
                      <p>Dec 11 . {blog.readTime} min</p>
                    </div>
                  </div>
                  <h3 className="pb-3 max-w-[95%] text-xl sm:text-2xl">{blog.title}</h3>
                  <p className="line-clamp-2 sm:mt-4 mb-6">{blog.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
