import React, { useState } from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import { User } from "./types";
import ConfirmationDialog from "./components/ConfirmationDialog";
import UserSearch from "./components/UserSearch";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "احمد", surname: "حسینی", nationalId: "1234567890" },
    { id: 2, name: "علی", surname: "مرادی", nationalId: "2345678901" },
    { id: 3, name: "سارا", surname: "محمدی", nationalId: "3456789012" },
    { id: 4, name: "فاطمه", surname: "قاسمی", nationalId: "4567890123" },
    { id: 5, name: "رضا", surname: "بهرامی", nationalId: "5678901234" }
  ]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [viewedUser, setViewedUser] = useState<User | null>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] =
    useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const [searchName, setSearchName] = useState<string>("");
  const [searchSurname, setSearchSurname] = useState<string>("");
  const [searchNationalId, setSearchNationalId] = useState<string>("");

  const filteredUsers = users.filter(user => 
    user.name.includes(searchName) &&
    user.surname.includes(searchSurname) &&
    user.nationalId.includes(searchNationalId)
  );

  const handleCreateUser = () => {
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setUserToDelete(id);
    setIsConfirmDialogOpen(true);
  };

  const confirmDeleteUser = () => {
    if (userToDelete !== null) {
      setUsers(users.filter((user) => user.id !== userToDelete));
      setUserToDelete(null);
    }
    setIsConfirmDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
    setIsConfirmDialogOpen(false);
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

  const handleViewUser = (user: User) => {
    setViewedUser(user);
  };

  return (
    <div dir="rtl" className="container mt-5">
      <h1>مدیریت کاربران</h1>
      <UserSearch
        searchName={searchName}
        searchSurname={searchSurname}
        searchNationalId={searchNationalId}
        setSearchName={setSearchName}
        setSearchSurname={setSearchSurname}
        setSearchNationalId={setSearchNationalId}
      />
      <button className="btn btn-primary my-2" onClick={handleCreateUser}>
        افزودن
      </button>
      <UserTable
        users={filteredUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onView={handleViewUser}
      />
      {isFormOpen && (
        <UserForm
          selectedUser={selectedUser}
          onSave={handleSaveUser}
          onClose={handleCloseForm}
        />
      )}
      {viewedUser && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">مشاهده</h5>
                <button
                  type="button"
                  className="close me-auto"
                  onClick={() => setViewedUser(null)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="card-text">نام: {viewedUser.name}</p>
                <p className="card-text">نام خانوادگی: {viewedUser.surname}</p>
                <p className="card-text">کد ملی: {viewedUser.nationalId}</p>
              </div>
              <button
                className="btn btn-secondary ms-auto me-3 mb-3"
                onClick={() => setViewedUser(null)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
      <ConfirmationDialog
        show={isConfirmDialogOpen}
        onConfirm={confirmDeleteUser}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default App;
