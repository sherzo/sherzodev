import { type } from "os";
import React from "react";

type PostItemProps = {
  title: string;
  extract: string;
};

const PostItem: React.FC<PostItemProps> = ({ title, extract }) => (
  <div className="mb-7">
    <a>
      <h3 className="mt-7 mb-1 text-xl font-semibold">{title}</h3>
    </a>
    <p className="text-lg mb-1 text-gray-500">
      <em>{extract}</em>
    </p>
    <a className="link text-lg">Read ➡</a>
  </div>
);

type PostListProps = {
  listTitle?: string;
};

const PostList: React.FC<PostListProps> = ({ listTitle }) => {
  return (
    <div className="p-5 bg-white rounded-md -mt-4 lg:max-w-800 m-auto lg:px-16 relative">
      <h2>{listTitle}</h2>
      <PostItem
        title="Lorem ipsum dolor sit amet consectetur adipiscing elit fusce ac ornare"
        extract="Habitant rhoncus torquent id eleifend mi mollis ultrices massa pellentesque"
      />
      <PostItem
        title="Dapibus duis montes morbi facilisis nostra augue nisi euismod"
        extract="Lorem ipsum dolor sit amet consectetur adipiscing elit arcu pulvinar tempor facilisi, malesuada laoreet ultricies facilisis vitae sociosqu luctus mi netus odio."
      />
      <PostItem
        title="Natoque lectus diam dictumst ultrices cum mollis fusce"
        extract="Eget cubilia vestibulum lobortis justo enim, venenatis ridiculus primis class"
      />
      <PostItem
        title="Nec dignissim maecenas id ullamcorper cum risus sociosqu mauris"
        extract="Rhoncus nibh vestibulum nulla senectus purus volutpat auctor risus fringilla per porta feugiat pulvinar"
      />
      <PostItem
        title="Faucibus eu risus neque pulvinar euismod accumsan mollis"
        extract="Nec dignissim maecenas id ullamcorper cum risus sociosqu mauris, facilisis pharetra nostra quis bibendum magnis morbi, himenaeos libero dis ornare auctor duis penatibus"
      />
      <a className="link text-lg">View all</a>
    </div>
  );
};

export default PostList;
