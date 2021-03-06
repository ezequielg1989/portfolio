
import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className="mt-5 animate__animated animate__fadeInUp">
      {/* <h4 className="font-header-top">Hola mi nombre es</h4> */}
      <h1 className="font-header mt-5">Ezequiel Ganzero</h1>
      <h4 className="font-header-low mt-3">Full stack developer</h4>
      <div className="d-md-flex justify-content-center mt-5">
       
          <button className="btn btn-outline-primary  col col-sm-4 col-md-2 " >
          <a href="https://firebasestorage.googleapis.com/v0/b/mobile-react-app.appspot.com/o/CV_Curr%C3%ADculum%20vitae.png?alt=media&token=1821fcc1-1c39-45fa-b195-0387cb64b429" target="_blank">Descargar CV</a>
          </button>
        
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col col-1 icons-redes">
            <a href="https://github.com/ezequielg1989" target="_blank"><i className="bi bi-github"></i></a>
          </div>
          <div className="col col-1 icons-redes">
              <a href="https://www.linkedin.com/in/ezequiel-ganzero-191a83197/" target="_blank"><i className="bi bi-linkedin" ></i></a>
          </div>
          <div className="col col-1 icons-redes">
            <a href="https://api.whatsapp.com/send/?phone=5492213645763&text&app_absent=0" target="_blank"><i className="bi bi-whatsapp" ></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
