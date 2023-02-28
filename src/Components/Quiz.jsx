
// import { QuizContext } from '../Context/QuizHolder';

// export default function Quiz() {
//     const [current, setCurrent] = useState(0);
//     return (
//         <div className='w-full h-screen flex justify-center items-center'>
//             <Box current={current} next={setCurrent} />
//         </div>
//     )
// }










// const Box = ({ current, next }) => {
//     const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
//     const [ans, setAns] = useState("");

//     // //
//     // const [seconds, setSeconds] = useState(30);
//     // React.useEffect(() => {
//     //     if (seconds > 0) {
//     //         setTimeout(() => setSeconds(seconds - 1), 1000);
//     //     } else {
//     //         if ((current + 1) === quizzes.length) {
//     //             setExit(true)
//     //         }
//     //     }
//     // });
//     const saveHandler = () => {
//         if (quizzes[current].correct === ans) {
//             setCorrect(correct + 1);
//         }
//         setAns("");
//         if ((current + 1) === quizzes.length) {
//             setExit(true)
//         } else {
//             next(current + 1);
//         }
//     }
//     return (
//         <div>
//             <p>Time left: {timeLeft}</p>
//         <div className='w-[40%] border shadow-lg rounded-md overflow-hidden'>
//             <div className='p-2 text-3xl'> {current + 1}) {quizzes[current].question}</div>
//             <div className='grid grid-cols-2 mt-3'>
//                 <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
//                 <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
//                 <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
//                 <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
//             </div>
//             <div className='flex justify-between'>
//                 <div className='cursor-pointer h-[30px] px-3  bg-orange-500 text-white' onClick={() => setAns("")}>Reset</div>
//                 <div className='cursor-pointer h-[30px] px-3 bg-green-500 text-white' onClick={saveHandler}>Save & Next</div>
//                 <div className='cursor-pointer h-[30px] px-3 bg-red-500 text-white' onClick={() => setExit(true)}>Exit</div>
//             </div>
//         </div>
//         </div>
//     )
// }

// }

import React, { useContext,useEffect, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';



export default function Quiz() {
  
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}


const Box = ({ current, next }) => {
   
    const TIMEOUT_IN_SECONDS = 50;
   const {timeLeft,setTimeLeft}=useContext(QuizContext)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        }else if(timeLeft ==0){
             saveHandler()
             setTimeLeft(TIMEOUT_IN_SECONDS);
        }
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [timeLeft]);


    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
        setTimeLeft(TIMEOUT_IN_SECONDS);
    }
    return (
        <>
        <div className='w-[40%] border shadow-lg rounded-md overflow-hidden'>
            <div className='p-2 text-3xl'> {current + 1} {quizzes[current].question}</div>
            <div className='grid grid-cols-2 mt-3'>
                <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
                <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
                <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
                <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
            </div>
            <div className='flex justify-between'>
                <div className='cursor-pointer h-[30px] px-3  bg-orange-500 text-white' onClick={() => setAns("")}>Reset</div>
                <div className='cursor-pointer h-[30px] px-3 bg-green-500 text-white' onClick={saveHandler}>Save & Next</div>
                <div className='cursor-pointer h-[30px] px-3 bg-red-500 text-white' onClick={() => setExit(true)}>Exit</div>
            </div>
        </div>
        </>
    )
}