import VitrineComplementar from '../../components/VitrineComplementar';

import './style.css'

import FotosProduto from '../../components/CarrosselFotoProduto';
import ContainerInfoProduto from '../../components/ContainerInfoProduto';

function DetalheProduto () {

    return (
        <div>
            <div className="container_produto container-fluid w-100 d-flex">
                <div className='container_fotos_produto'>
                    <FotosProduto />
                </div>
                <div className='container_info_produto'>
                    <ContainerInfoProduto />
                </div>
            </div>
            <div>
                <VitrineComplementar />
            </div>
        </div>
    )
}

export default DetalheProduto