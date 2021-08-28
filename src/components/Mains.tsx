import React, { useState } from "react";
import { Category } from "../models";
import Categories from "./Categories";

interface State {
  lynks: Category[];
}

const testData: State = {
  lynks: [
    {
      name: "TimePass",
      items: [
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
      items: [
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

export const Mains: React.FC = () => {
  const [data, setData] = useState<State>({ lynks: testData.lynks });

  return (
    <div>
      <Categories lynks={data.lynks} />
    </div>
  );
};

export default Mains;
