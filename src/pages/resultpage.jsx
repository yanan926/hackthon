import Compare from "../components/compare/compare";
import Celebrity from "../components/Celebrity/Celebrity";
import '../App.scss'

const Resultpage = ({ person, userUrl }) => {
  return (
    <div>
      {person ? (
        <>
          <Compare person={person} />
          <Celebrity gotName={person.name} userUrl={userUrl} />
        </>
      ) : (
        <h1 className="warning">Sorry, the url link format you provided is not acceptable</h1>
      )}
    </div>
  );
};

export default Resultpage;
