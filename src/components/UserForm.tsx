import React, { useState, useEffect } from "react";
import { UserFormProps, User } from "../types";

const UserForm: React.FC<UserFormProps> = ({
  selectedUser,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setSurname(selectedUser.surname);
      setNationalId(selectedUser.nationalId);
    } else {
      setName("");
      setSurname("");
      setNationalId("");
    }
  }, [selectedUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = {
      id: selectedUser ? selectedUser.id : Date.now(),
      name,
      surname,
      nationalId,
    };
    onSave(user);
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {selectedUser ? "Edit User" : "Create User"}
            </h5>
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Surname</label>
                <input
                  type="text"
                  className="form-control"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>National Id</label>
                <input
                  type="text"
                  className="form-control"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {selectedUser ? "Save Changes" : "Create User"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
