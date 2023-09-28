import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "users",
      link: "/users",
    },
    {
      id: 3,
      text: "all-product",
      link: "/all-product",
    },
    {
      id: 5,
      text: "Add Product",
      link: "/add-product",
    }
  ];
  return (
    <div className="flex justify-around bg-green-400">
      <div className="flex gap-6 p-2 text-lg">
        {NavLinks.map((el) => {
          return (
            <NavLink className="hover:text-blue-500" key={el.id} to={el.link}>
              {el.text}
            </NavLink>
          );
        })}
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
