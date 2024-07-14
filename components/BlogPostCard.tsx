import Link from "next/link";

type PostCardInfo = { title: string; slug: {current: string}; publishedAt: string; mainImage: {
    asset: {
        url : string;
    }
} };

export const BlogPostCard = ({ post }: {post: PostCardInfo}) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src={post.mainImage?.asset.url}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500"> {post.publishedAt} </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            {post.title}
          </h3>
        </a>

        <Link href={'/blog-posts/'+ post.slug.current} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
        
      </div>
    </article>
  );
};
