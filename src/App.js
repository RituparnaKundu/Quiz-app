import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
function App() {
  const { start, exit ,timeLeft } = useContext(QuizContext);
  const TIMEOUT_IN_SECONDS=50
  return (
    <>
         <div style={{width:(timeLeft/TIMEOUT_IN_SECONDS)*100+"vw",height:"10px",backgroundColor:"blue" }}></div>
       
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default App;
