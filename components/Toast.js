const Toast = ({msg, handleShow, bgColor}) => {

   
   
  return(
      <div className={`toast  position-fixed text-light ${bgColor} show` }
      style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '280px' }} >

          <div className={`toast-header ${bgColor} text-light`}>
              <strong className="mr-auto text-light">{msg.title}</strong>

              <button type="button" className="ml-2 mb-1 close text-light" 
              data-dismiss="toast" style={{ background: 'none',border: 'none',outline: 'none', right:'0', position:"absolute"}} 
              onClick={handleShow}>X</button>
          </div>

          <div className="toast-body">{msg.msg}</div>

      </div>
  )
}

export default Toast