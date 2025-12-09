import NavLink from "./NavLink";

interface NavLinkCardProps {
  to: string;
  title: string;
  description: string;
}

const NavLinkCard = ({
  to,
  title,
  description,
}: NavLinkCardProps) => {
  return (
    <NavLink
      to={to}
      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 transition-colors">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          {description}
        </p>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-100 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
    </NavLink>
  );
};

export default NavLinkCard;