import './Exercise.css'
const Exercise = () => {
        const myStyle={
                backgroundColor: "lightgray",
                color: "blue",
                textAlign: "center",

        }
  return (
    <>
      <h1 style={style_header}></h1>
      <p className='para'>Pagagrap</p>
      <a href="">link</a>
      <form >
        <label htmlFor="">
                Enter some :
                <input type="text" />
        </label>
      </form>
      <img src="https://robohash.org/8" alt="" />
      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </>
  );
};
const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

export default Exercise;
