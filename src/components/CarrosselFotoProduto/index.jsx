import fotoPrincipal1 from '../../components/img/1.png'
import fotoPrincipal2 from '../../components/img/2.jpg'
import fotoPrincipal3 from '../../components/img/3.jpg'
import fotoPrincipal4 from '../../components/img/4.png'
import fotoPrincipal5 from '../../components/img/5.jpg'
import fotoPrincipal6 from '../../components/img/6.png'

import './style.css'

function FotosProduto () {
    return (
        <div className="container-fluid container_fotos d-flex w-100">
            <div id="bannerProduto" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className='d-flex'>
                            <img src={fotoPrincipal1} className="d-block w-50" alt="..." />
                            <img src={fotoPrincipal2} className="d-block w-50" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <div className='d-flex'>
                            <img src={fotoPrincipal3} className="d-block w-50" alt="..." />
                            <img src={fotoPrincipal4} className="d-block w-50" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <div className='d-flex'>
                            <img src={fotoPrincipal5} className="d-block w-50" alt="..." />
                            <img src={fotoPrincipal6} className="d-block w-50" alt="..." />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bannerProduto" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerProduto" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default FotosProduto