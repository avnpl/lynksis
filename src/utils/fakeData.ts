import { CategoryInterface } from "./models";

type State = {
  arrOfCategories: CategoryInterface[];
};

const fakeData: State = {
  arrOfCategories: [
    {
      name: "Chill",
      lynks: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
        },
        {
          title: "Netflix",
          link: "https://www.netflix.com",
        },
      ],
    },
    {
      name: "Study",
      lynks: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
        },
        {
          title: "GFG",
          link: "https://www.geeksforgeeks.com",
        },
      ],
    },
  ],
};

export const getData = () => {
  return fakeData;
};
