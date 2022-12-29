import React from "react";

type Props = {
  name: string;
  age: number;
  onClick: () => void;
};

export const MyComponent: React.FC<Props> = props => {
  // Use the "name" and "age" props in your component
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};
