import { NavLink } from "react-router";

function Header() {
    return(
     <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Koda-React</h1>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
            Home
          </NavLink>
          <NavLink to="/minitask1" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
            Minitask1
          </NavLink>
          <NavLink to="/minitask2" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
            Minitask2
          </NavLink>
          <NavLink to="/minitask3" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
            Minitask3
          </NavLink>
          <NavLink to="/minitask5" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>
            Minitask5
          </NavLink>
        </div>
      </div>
    </nav>
    );
}

export default Header;