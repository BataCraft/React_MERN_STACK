import First from "./components/firstcomp";

function App() {
  return (
    <>
    <h1 className="text-center font-bold text-4xl">Hello React JS</h1>
    <hr />
     <First />
    <hr />
    
    </>
  );
}

export default App;

// Class componets are State full,
// function components are state less,

// State Full: can change data (For example: facebook like system) but we can't change data in functional components.
