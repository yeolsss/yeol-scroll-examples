import { Link } from "react-router";

const MainHeader = () => {
  return (
    <header className="text-4xl font-bold px-5 mt-5">
      <Link className="cursor-pointer" to="/">
        Yeol UI Project
      </Link>
    </header>
  );
};

export default MainHeader;
