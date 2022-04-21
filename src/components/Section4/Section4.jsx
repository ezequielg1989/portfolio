import React from 'react';
import './Section4.css'

export const Section4 = () => {
    return (
        <div>
            <div className="row justify-content-center footer-contain">
                <div className="">
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
                    <span className='footer-name'><i className="bi bi-at"></i>Ezequiel Ganzero</span>
                </div>
            </div>
        </div>
    )
}
