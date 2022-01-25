import { CategoryInterface } from "./models";

type State = {
  arrOfCats: CategoryInterface[];
};

const fakeData: State = {
  arrOfCats: [
    {
      name: "Chill",
      lynks: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
          id: "yt1",
        },
        {
          title: "Netflix",
          link: "https://www.netflix.com",
          id: "yt2",
        },
      ],
    },
    {
      name: "Study",
      lynks: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
          id: "yt2",
        },
        {
          title: "GFG",
          link: "https://www.geeksforgeeks.com",
          id: "g1",
        },
      ],
    },
  ],
};

export const getData = () => {
  return fakeData;
};
