import React, { ReactNode } from "react";

interface UserCardProps {
  name?: string;
  age?: number;
  role?: ReactNode; 
}

const UserCard: React.FC<UserCardProps> = ({
  name = "Anonymous",
  age = 18,
  role = <span style={{ color: "gray" }}>Guest</span>, //
}) => {
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </>
  );
};

export default UserCard;
