import { Link } from "react-router";
import type { ComponentProps, ReactNode } from "react";

interface NavLinkProps extends ComponentProps<typeof Link> {
  children: ReactNode;
}

const NavLink = ({ children, className = "", ...props }: NavLinkProps) => {
  const defaultClasses = "hover:text-blue-600 transition-colors duration-200";
  const combinedClasses = `${defaultClasses} ${className}`;

  return (
    <Link className={combinedClasses} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
