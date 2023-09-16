
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'
import { change } from '../redux/features/theme/themeSlice'
function Switch() {
    const answer = useSelector((state: RootState) => state.theme.value)
    const dispatch = useDispatch()

  return (
    <div className="">
        { answer ? (

            <button onClick={()=>dispatch(change())} type='button'>

                <img
                    src="/svg/icon-moon.svg"
                    alt='moon'
                    className=""
                />
            </button>
        ) :(

            <button onClick={()=>dispatch(change())} type="button">

                <img
                    src="/svg/icon-sun.svg"
                    alt='moon'
                    className=""
                />
            </button>
        ) }

    </div>
  )
}

export default Switch