import React, { useEffect, useReducer } from 'react'

function countReducer(state, { type }) {
  switch (type) {
    case 'Start':
      return {
        ...state,
        isTimerWorks: true,
      }
    case 'Stop':
      return {
        ...state,
        isTimerWorks: false,
      }
    case 'Reset':
      return {
        ...state,
        isTimerWorks: false,
        seconds: 0,
      }
    case 'Tick':
      return {
        ...state,
        seconds: state.seconds + 1,
      }

    default:
      break;
  }


  return state
}


function setDefaultValue() {
  let userSeconds = localStorage.getItem('timerSeconds')
  return userSeconds ? +userSeconds : 0
}

function Timer() {
  const [{ seconds, isTimerWorks }, dispatch] = useReducer(countReducer, { seconds: setDefaultValue(), isTimerWorks: false })

  const keyboardControl = (e) => {
    if (e.code === 'Space') {
      if (isTimerWorks) {
        dispatch({ type: 'Stop' })
      } else {
        dispatch({ type: 'Start' })
      }
    }

    if (e.code === 'Backspace') {
      dispatch({ type: 'Reset' })
    }
  }

  useEffect(() => {
    let timerId = null
    if (isTimerWorks) {
      timerId = setInterval(() => {
        dispatch({ type: 'Tick' })
      }, 1000)
    }

    return () => {
      clearInterval(timerId)
    }
  }, [isTimerWorks])

  useEffect(() => {
    localStorage.setItem('timerSeconds', seconds)

  }, [seconds])

  // Time format

  const humanReadable = (seconds) => {
    let pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }

  // Time format


  return (
    <section onKeyDown={(e) => keyboardControl(e)} className='Timer h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500' tabIndex="0">
      <div className='relative timer-wrapper flex flex-col items-center w-11/12 sm:w-9/12 h-3/5 min-w-max py-4 bg-stone-900 text-slate-50 rounded-3xl shadow-2xl shadow-black/50'>
        <h1 className='font-mono text-5xl tracking-wide text-inherit mt-2'>React Timer</h1>
        <div className='flex flex-col my-auto'>
          <span className='font-mono text-5xl my-5 text-inherit bg-blue-700 px-3 py-1 rounded-full shadow-sm shadow-blue-900'>{humanReadable(seconds)}</span>
          <div className='timer__buttons-wrapper w-full flex flex-row justify-center mt-4'>
            {isTimerWorks ?
              <button onClick={() => dispatch({ type: 'Stop' })} className='font-mono text-lg bg-blue-900 text-slate-100 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-blue-900/50 transition-all duration-150  ease-in hover:shadow-blue-900/80 hover:bg-blue-800 active:shadow-none'>
                Stop
              </button>
              :
              <button onClick={() => dispatch({ type: 'Start' })} className='font-mono text-lg bg-blue-800 text-slate-100 py-1 px-4 rounded-lg hover:rounded-xl shadow shadow-blue-800/50 transition-all duration-150  ease-in hover:shadow-blue-800/80 hover:bg-blue-700 active:shadow-none'>
                Start
              </button>
            }
            <button onClick={() => dispatch({ type: 'Reset' })} className='font-mono text-lg bg-indigo-50 text-black py-1 px-4 rounded-lg hover:rounded-xl ml-3 shadow shadow-indigo-50/50 transition-all duration-150 ease-in hover:shadow-indigo-100/80 hover:bg-white active:shadow-none'>
              Reset
            </button>
          </div>
        </div>
        <span
          onMouseEnter={(e) => e.target.innerHTML = 'Space = start/stop<br>Backspace = reset'}
          onMouseLeave={(e) => e.target.innerHTML = '?'}
          className='absolute top-6 right-7 rounded-full bg-white text-black px-2 hover:py-1 hover:rounded-xl'
        >?</span>
      </div>
    </section>
  )
}

export default Timer