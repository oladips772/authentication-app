/** @format */
import { NavLink } from "react-router-dom";

function ProfileNav() {
  return (
    <div>
      <div>
        <NavLink
          to="/my_profile"
          className="text-gray-600 hover:text-gray-800 p-[6px] rounded-[2px] mr-4 font-[600]"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "rgb(37 99 235)" : "white",
            };
          }}
        >
          My Plans
        </NavLink>
        <NavLink
          to="/my_profile_withdrawals"
          className="text-gray-600 hover:text-gray-800 p-[6px] rounded-[2px] ml-2 font-[600]"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "black",
              backgroundColor: isActive ? "rgb(37 99 235)" : "white",
            };
          }}
        >
          My Withdrawals
        </NavLink>
      </div>
    </div>
  );
}

export default ProfileNav;
