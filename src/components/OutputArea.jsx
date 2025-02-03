function OutputArea({ list }) {
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default OutputArea;

//outfut area function
//list is passed in
//an unordered list is returned
//inside this each list item is created inside squigs using .map, passing an index to .map and mapping out new list items
