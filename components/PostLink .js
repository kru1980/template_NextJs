import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/todo?title=${props.title}`}>
      <a>more</a>
    </Link>
  </li>
);

export default PostLink;
