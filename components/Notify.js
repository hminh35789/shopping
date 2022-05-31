import {useContext} from 'react'
import {DataContext} from '../store/GlobalState'
import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
    const {state, dispatch} = useContext(DataContext)
    const { notify } = state
    const toast = ()=>{
        dispatch({ type: 'NOTIFY', payload: {} })
    }
    return(
        <> 
            {notify.loading && <Loading />}
            {notify.error && 
                <Toast
                    msg={{ msg: notify.error, title: "Error" }}
                    handleShow={toast}
                    bgColor="bg-danger"
                />
            }

            {notify.success && 
                <Toast
                    msg={{ msg: notify.success, title: "Success" }}
                    handleShow={toast}
                    bgColor="bg-success"
                />
            }
        </>
    )
}


export default Notify
