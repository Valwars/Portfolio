import { useCallback } from 'react'
import React, {useState,useEffect} from 'react'
import './toast.css';


const Toast = ({ toastlist, position, setList }) => {

    const deleteToast = useCallback(id => {
      const toastListItem = toastlist.filter(e => e.id !== id);
      setList(toastListItem);
    }, [toastlist, setList]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if(toastlist.length) {

          console.log(toastlist[0])

          document.getElementById(toastlist[0].id).classList.add("slide_left")

          window.setTimeout(() => {
            document.getElementById(toastlist[0].id).classList.remove("slide_left")

            deleteToast(toastlist[0].id);

          }, 600)
       
        }
      }, 3000);
  
      return () => {
        clearInterval(interval);
      }
    }, [toastlist, deleteToast]);
  
    return (
      <div className={'container buttom-right'}>
        {
          toastlist.map((toast, i) => (
            <div
              id = {toast.id}
              key={i}
              className={"notification toast buttom-right"}
              style={{ backgroundColor: toast.backgroundColor }}
            >
              <button onClick={() => deleteToast(toast.id)}>X</button>
              <div>
                <p className='title'  style={{color:toast.textColor}}>{toast.title}</p>
                <p className={'text_toast'} >{toast.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  
  export default Toast