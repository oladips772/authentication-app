/** @format */
import { NavLink } from "react-router-dom";

function ProfileNav() {
  return (
    <div>
      <div>
        <NavLink
          to="/profile_plans"
          className="text-gray-600 hover:text-gray-800"
        >
          Plans
        </NavLink>
        <NavLink
          to="/profile_plans"
          className="text-gray-600 hover:text-gray-800"
        >
          Plans
        </NavLink>
      </div>
    </div>
  );
}

export default ProfileNav;
