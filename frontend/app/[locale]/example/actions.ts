"use server";

type UserData = {
  fullName: string;
  phoneNumber: string;
};
type User = {
  id: number;
  fullName: string;
  phoneNumber: string;
};

export async function sendToBackend(userData: UserData) {
  const res = await fetch("http://localhost:3001/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to send user data: ${res.statusText}`);
  }

  return await res.text();
}

export async function getAllUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3001/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to get user data: ${res.statusText}`);
  }

  return await res.json();
}
