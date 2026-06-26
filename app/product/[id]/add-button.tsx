"use client";
const AddButton = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default AddButton;
