// Below code is only using for example

import { useAppSelector } from '@/app/hooks';
import { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation } from '../user-api';
import { selectUsers } from '../user-slice';
import { User } from '@/types/User';

import { Button } from "@/components/ui/button";

const UserComponent = () => {
  const { isLoading, error } = useGetUsersQuery();
  const users = useAppSelector(selectUsers);
  const [createUser] = useCreateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleAddUser = async () => {
    await createUser({ name: "New User", email: "newuser@example.com" });
  };

  const handleDeleteUser = async (id: string) => {
    await deleteUser(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <Button onClick={handleAddUser}>Add User</Button>
      <ul>
        {users?.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
