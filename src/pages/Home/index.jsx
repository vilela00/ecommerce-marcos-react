import AvaliacoesHome from "../../components/AvaliacoesHome"
import BannerFaixa from "../../components/BannerFaixa"
import BannerHome from "../../components/BannerHome"
import ListaProdutos from "../ItemListContainer"

function Home () {
    return (
        <div>
            <BannerHome />

            <BannerFaixa />

            <ListaProdutos />

            <AvaliacoesHome />
        </div>
    )
}

export default Home