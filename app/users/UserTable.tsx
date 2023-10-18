import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  let users: User[] = await res.json();
  if (sortOrder == "email") {
    users = sort(users).asc((u) => u.email);
  } else {
    users = sort(users).asc((u) => u.name);
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>
              <Link href="/users?sortOrder=name">Name</Link>
            </td>
            <td>
              <Link href="/users?sortOrder=email">Email</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
