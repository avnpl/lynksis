import { CategoryInterface } from "./models";

export const updateDBData = async (
  categories: CategoryInterface[],
  token: string
) => {
  const url = `${process.env.REACT_APP_DEV_URL}/user`;
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
