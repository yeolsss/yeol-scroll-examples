import NavLink from "./components/NavLink.tsx";

const App = () => {
  return (
    <section className="flex flex-col gap-5 text-2xl font-bold">
      <ul>
        <li>
          <NavLink to="/scroll-snap">ScrollSnapPage</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default App;
