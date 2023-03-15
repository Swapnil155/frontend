import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = (props) => {
  const pathname = useLocation()
    .pathname.split("/")
    .filter((x) => x);
  return (
    <section className="pt-3 container">
      <ol className="breadcrumb text-white justify-content-center no-border mb-0">
        {pathname.length > 0 ? (
          <li className="breadcrumb-item">
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
        ) : (
          <li className="breadcrumb-item active">Home</li>
        )}
        {pathname.map((name, index) => {
          const routeTo = `/${pathname.slice(0, index + 1).join("/")}`;
          const isLast = index === pathname.length - 1;
          console.log(routeTo);
          return isLast ? (
            <li className="breadcrumb-item active">{name} </li>
          ) : (
            <Link className="breadcrumb-item Link" to={routeTo}>
              {name}
            </Link>
          );
        })}
      </ol>
    </section>
  );
};

export default BreadCrumb;
