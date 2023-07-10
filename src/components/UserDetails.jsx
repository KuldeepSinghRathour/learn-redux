import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";

const UserDetails = () => {
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button>Add new user</button>
        </div>
        <ul>
            <li>hello1</li>
            <li>hello2</li>
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </>
  );
};

export default UserDetails;
