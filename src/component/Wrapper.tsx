import React from "react";
interface ChildProp {
  children: React.ReactNode;
}
const Wrapper = ({ children }: ChildProp) => {
  return <div className="max-w-[1200px] mx-auto ">{children}</div>;
};

export default Wrapper;
