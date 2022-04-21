import React from 'react'
import './Section1.css'

export const Section1 = () => {
    return (
        <div>
            <div className="container animate__animated animate__fadeInUp">
                <div className="row col justify-content-center mt-5 align-items-start">
                    <div className=" col ">
                        <div className="container col text-center mt-3">
                            <img className='img-per col ' src="https://firebasestorage.googleapis.com/v0/b/mobile-react-app.appspot.com/o/IMG-20191020-WA0016.jpg?alt=media&token=4b65e10c-ee43-4222-b4e7-e8654d45f3ce" alt="" />
                        </div>
                    </div>
                    <div className=" col-8 descripcion mt-3 ">
                        <div className="container col text-center">
                            <h4>Soy una persona muy curiosa, apasionada por la tecnología. Me considero una persona proactiva, comunicativa y responsable. Estoy muy motivado para mejorar mis habilidades, ganar experiencia en esta área y crecer profesionalmente.</h4>
                        </div>
                        <div className="row mt-5">
                            <div className="col box-exp">
                                <div className="container col text-center mt-5">
                                <i className="bi bi-folder2-open icons-exp"></i>
                                <h5 className="mt-3">Proyectos</h5>
                                <span className=''>3 proyectos finalizados</span>
                                </div>
                            </div>
                            <div className="col box-exp">
                                <div className="container col text-center mt-5">
                                    <i className="bi bi-award-fill icons-exp"></i>
                                    <h5 className="mt-3">Experiencia</h5>
                                    <span className=''>8+ meses programando</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
