import { useRouter } from "next/router";

export default function PostDetail() {
  const router = useRouter();
  return (
    <div>
      <h1>Post Detail {router.query.id}</h1>
    </div>
  );
}
