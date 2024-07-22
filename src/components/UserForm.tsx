import React, { useState, useEffect } from "react";
import { User } from "../types";

interface UserFormProps {
  selectedUser: User | null;
  onSave: (user: User) => void;
  onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  selectedUser,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");

  const [errors, setErrors] = useState<{
    name?: string;
    surname?: string;
    nationalId?: string;
  }>({});

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setSurname(selectedUser.surname);
      setNationalId(selectedUser.nationalId);
    }
  }, [selectedUser]);

  const validateForm = () => {
    const newErrors: { name?: string; surname?: string; nationalId?: string } =
      {};
    if (!name.trim()) newErrors.name = "نام الزامی است";
    if (!surname.trim()) newErrors.surname = "نام خانوادگی الزامی است";
    if (!nationalId.trim()) newErrors.nationalId = "کد ملی الزامی است";
    else if (!/^\d{10}$/.test(nationalId))
      newErrors.nationalId = "کد ملی باید ۱۰ رقمی باشد";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      onSave({
        id: selectedUser ? selectedUser.id : Date.now(),
        name,
        surname,
        nationalId,
      });
      setName("");
      setSurname("");
      setNationalId("");
    }
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {selectedUser ? "ویرایش کاربر" : "افزودن کاربر"}
            </h5>
            <button type="button" className="close me-auto" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  نام
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                {errors.surname && (
                  <div className="text-danger">{errors.surname}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="nationalId" className="form-label">
                  کد ملی
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nationalId"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                />
                {errors.nationalId && (
                  <div className="text-danger">{errors.nationalId}</div>
                )}
              </div>
            </div>
            <div className="modal-footer d-inline">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                بستن
              </button>
              <button type="submit" className="btn btn-primary">
                ذخیره
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
