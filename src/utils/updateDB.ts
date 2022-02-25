import { CategoryInterface } from "./interfaces";

export const updateDB = async (categories: CategoryInterface[]) => {
  const url = `${process.env.REACT_APP_DEV_URL}/user`;
  const token = localStorage.getItem("token") as string;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `Bearer ${token}`,
      },
      body: JSON.stringify({
        categories: categories,
      }),
    });
    const data = await response.json();
    return [...(data.categories as CategoryInterface[])];
  } catch (err) {
    return false;
  }
};
