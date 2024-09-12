import User from "./User";
import UserGetAllUsers from "../../context/userGetAllUsers";

function Users() {
  const [allUsers, loading, error] = UserGetAllUsers();
  console.log(allUsers);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!allUsers) {
    return <div>No users found</div>;
  }

  return (
    <div
      className="flex-auto py-2 overflow-y-auto"
      style={{ maxHeight: "calc(84vh - 1vh)" }}
    >
      {allUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}

export default Users;