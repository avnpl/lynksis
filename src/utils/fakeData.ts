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
          id: "chill-youtube",
        },
        {
          title: "Netflix",
          link: "https://www.netflix.com",
          id: "chill-netflix",
        },
      ],
    },
    {
      name: "Study",
      lynks: [
        {
          title: "Youtube",
          link: "https://www.youtube.com/",
          id: "study-youtube",
        },
        {
          title: "GFG",
          link: "https://www.geeksforgeeks.com",
          id: "study-gfg",
        },
      ],
    },
  ],
};

export const getData = () => {
  return fakeData;
};
