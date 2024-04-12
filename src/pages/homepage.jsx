
import Head from "../components/header/header"
import InputForm from "../components/InputForm/InputForm";
const Homepage=({setPerson, setUserUrl})=>{
    return (
        <>
         <Head/>
    <InputForm setPerson={setPerson} setUserUrl={setUserUrl}/>
    
        </>
    )
}

export default Homepage;