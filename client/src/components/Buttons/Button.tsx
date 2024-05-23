import React from "react";

type Props = {
  title?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  const { title } = props;

  return (
    <button className="border border-black bg-slate-300 p-2 rounded" {...props}>
      {title ?? "Click"}
    </button>
  );
};

export default Button;
