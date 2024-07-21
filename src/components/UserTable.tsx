import React from "react";
import { UserTableProps } from "../types";

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Surname</th>
          <th>National Id</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.nationalId}</td>
            <td>
              <button
                className="btn btn-primary mr-2"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
