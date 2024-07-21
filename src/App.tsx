import React, { useState } from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import { User } from "./types";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveUser = (user: User) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, user]);
    }
    setIsFormOpen(false);
    setSelectedUser(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mt-5">
      <h1>User Management</h1>
      <button className="btn btn-primary mb-3" onClick={handleCreateUser}>
        Add User
      </button>
      <UserTable
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      {isFormOpen && (
        <UserForm
          selectedUser={selectedUser}
          onSave={handleSaveUser}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default App;
