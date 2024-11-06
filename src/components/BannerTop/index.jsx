import { Carousel } from 'bootstrap'
import './style.css'

function BannerTop () {
    return (
        <div className='bannerTop fixed-top'>
            <div id="BannerTop" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                    <p>Enviamos para todo o Brasil</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <p>Cupom de Primeira Compra: HELLO</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <p>Desconto Progressivo Compre 2 leve 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerTop