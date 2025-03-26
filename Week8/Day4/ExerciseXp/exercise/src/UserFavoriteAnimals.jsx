const UserFavoriteAnimals = (props) => {
  const { arr } = props;
  return (
    <>
      {arr.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
    </>
  );
};

export default UserFavoriteAnimals;
