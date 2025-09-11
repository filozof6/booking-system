import { getAllUsers, sendToBackend } from "./actions";

export default async function ExamplePage() {
  // const res = await sendToBackend({
  //   fullName: "ata deniz",
  //   phoneNumber: "42020202020+",
  // });
  const users = await getAllUsers();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.fullName} {user.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}
