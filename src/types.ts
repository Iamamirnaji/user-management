export interface User {
  id: number;
  name: string;
  surname: string;
  nationalId: string;
}

export interface UserFormProps {
  selectedUser: User | null;
  onSave: (user: User) => void;
  onClose: () => void;
}

export interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  onView: (user: User) => void;
}
