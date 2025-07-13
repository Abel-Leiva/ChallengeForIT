import { NavLink } from "react-router";

export function NavBar() {
  return (
    <nav className="bg-black py-4 flex justify-center items-center gap-x-10">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `font-semibold px-6 py-3 rounded-md transition-colors ${isActive ? "bg-cyan-700 text-white" : "text-white hover:bg-cyan-700"
          }`
        }
      >
        Tareas
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) =>
          `font-semibold px-6 py-3 rounded-md transition-colors ${isActive ? "bg-cyan-700 text-white" : "text-white hover:bg-cyan-700"
          }`
        }
      >
        Crear tareas
      </NavLink>
    </nav>
  );
}
