import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from "next/router";

function Portfolio() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <BaseLayout>
      I'm dynamic page
      <h1>{router.query.id}</h1>
    </BaseLayout>
  );
}

export default Portfolio;
