import React from "react";
import { UserTableProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { convertToPersianNumbers } from "../utilities/utils";

const UserTable: React.FC<UserTableProps> = ({
  users,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <table dir="rtl" className="table table-bordered text-center w-75">
      <thead>
        <tr>
          <th>ردیف</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>کد ملی</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{convertToPersianNumbers(index + 1)}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{convertToPersianNumbers(user.nationalId)}</td>
            <td>
              <button className="btn btn-info" onClick={() => onView(user)}>
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button
                className="btn btn-primary mr-2 mx-1"
                onClick={() => onEdit(user)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="btn btn-danger mr-2"
                onClick={() => onDelete(user.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
