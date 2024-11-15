import { User } from "../types/user";

export type GetUsersFilters = {
  name?: string;
  limit?: number;
};
let users: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

export async function getUsers(filters?: GetUsersFilters) {
  let usersResponse = users;
  if (filters?.name) {
    usersResponse = users.filter((user) => filters?.name && user.name.includes(filters.name));
  }
  if (filters?.limit) {
    usersResponse = users.slice(0, filters.limit);
  }
  
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return usersResponse as User[];
}

export async function getUsersGoneWrong() {
  throw new Error("Failed to fetch users");
}
