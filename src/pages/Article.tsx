import LoadingPage from "@/components/ui/LoadingPage";
import getBlog from "@/features/blog/services/getBlog";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [content, setContent] = useState<Blog | undefined>();
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlog,
  });

  useEffect(() => {
    if (isSuccess) {
      setContent(data.find((article) => article.id.toString() === id));
    }
  }, [data, id, isSuccess]);

  if (isPending) return <LoadingPage />;
  if (isError) return <>error</>;
  if (!content) return <>error</>;

  return (
    <section className="max-w-[1440px] w-full py-8 mx-auto px-4">
      <div className="w-10/12 bg-lavender-gray border-2 border-black p-5 mx-auto">
        <h1 className="text-2xl mb-6">{content.title}</h1>
        <div>
          <img
            className="h-[300px] object-contain"
            src={content.image}
            alt=""
          />
        </div>
        <p className="text-lg my-6 whitespace-pre-line">
          {content.description}
        </p>
      </div>
    </section>
  );
};

export default Article;
