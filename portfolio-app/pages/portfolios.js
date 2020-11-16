import BaseLayout from "../components/layouts/BaseLayout";
import Axios from "axios";

export default function Portfolios({ posts }) {
  return (
    <BaseLayout>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id}</li>
        ))}
      </ul>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  let posts = [];
  try {
    let res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      posts: posts.slice(0, 10),
    },
  };
}
