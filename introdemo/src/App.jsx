const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} old.
      </p>
    </div>
  );
};

const Footer = () => {
  return <div>App created in 2025 as a part of a course.</div>;
};

const App = () => {
  const friends = [
    { name: "Peter", age: 30 },
    { name: "Maya", age: 33 },
  ];
  return (
    <div>
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </div>
  );
};

export default App;
