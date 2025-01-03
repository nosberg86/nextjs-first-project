import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-slate-900 p-2">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <h3 className="font-bold text-3xl"> NextCRUD</h3>
        </Link>

        <ul className="">
          <li>
            <Link href="/" className="mr-2">
              {" "}
              Home{" "}
            </Link>
            <Link href="/task/new" className="mr-2">
              {" "}
              New{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
