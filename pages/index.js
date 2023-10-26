import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link className="border m-4" href={`/demo`}>
        Demo Components{" "}
      </Link>
    </>
  );
};

export default Home;
