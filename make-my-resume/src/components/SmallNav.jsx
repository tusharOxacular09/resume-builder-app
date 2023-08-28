import { Link } from "react-router-dom";

const SmallNav = () => {
  return (
    <div className="lg:hidden mb-4 flex flex-col justify-center transition delay-150 mt-20">
      <Link
        to={"/"}
        className="cursor-pointer px-6 py-2 text-base font-bold transition delay-150 hover:bg-amber-500 hover:text-white duration-300"
      >
        Home
      </Link>
      <hr />
      <Link
        to={"/build"}
        className="cursor-pointer px-6 py-2 text-base font-bold transition delay-150 hover:bg-amber-500 hover:text-white duration-300"
      >
        Build
      </Link>
      <hr />
      <Link
        to={"/history"}
        className="cursor-pointer px-6 py-2 text-base font-bold transition delay-150 hover:bg-amber-500 hover:text-white duration-300"
      >
        History
      </Link>
      <hr />
    </div>
  );
};

export default SmallNav;
