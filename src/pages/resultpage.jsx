import { useEffect } from "react";
import Compare from "../components/compare/compare";
import Celebrity from "../components/Celebrity/Celebrity";


const Resultpage = ({person,userUrl}) => {

  useEffect(() => {
    // axios call 
    console.log(person)

  }, [])


  return (
    <>
    {/* <div>
      name: {person.name}
      value: {person.value}
      </div> */}
    <Compare person={person} />
    <Celebrity gotName={person.name} userUrl={userUrl}/>
    </>
  );
};

export default Resultpage;
