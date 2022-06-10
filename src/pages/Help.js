import '../App.css';
import { Link } from 'react-router-dom'

export default function Help() {
    return (
        <div className="row">
            <div className="weather__form row">
                <div className="col-md-12 weather__form-header">
                    <Link to="/">Voltar</Link>
                    <h1>Ajuda</h1>
                    <p>Para que a consulta seja realizada, é necessario criar uma chave gratuita em: <a href='https://hgbrasil.com/status/weather'>https://hgbrasil.com/status/weather</a></p>
                </div>
                <div className="col-md-12 row weather__form-header">
                    <h3 className='col-md-12'> Passo a passo:</h3>

                    <div className='col-md-12'>
                        <ol>
                            <li className='weather_help-list'> Acesse <a href='https://hgbrasil.com/status/weather'>https://hgbrasil.com/status/weather</a></li>
                            <li className='weather_help-list'> Clique em criar chave gratuita <img className="full" alt='site' src='images/help/site1.png' /></li>
                            <li className='weather_help-list'> Entre com sua conta ou crie uma <img className="full" alt='site' src='images/help/site2.png' /></li>
                            <li className='weather_help-list'> Após acessar, clique  no item "Chaves" do menu lateral<img className="full" alt='site' src='images/help/1.png' /></li>
                            <li className='weather_help-list'> Nesta tela estarão listadas todas as suas chaves e seus status. Nesta etapa, clique em "Criar Nova Chave" <img className="full" alt='site' src='images/help/2.png' /></li>
                            <li className='weather_help-list'> Escolha a opção gratuita para criar uma chave. Esta opção possui um limite de requisições, e dado este numero será necessario criar outra ou mudar para a versão paga. No nosso caso, a gratuita ja serve para o funcionamento <img className="full" alt='site' src='images/help/3.png' /></li>
                            <li className='weather_help-list'> Escolha um nome para sua chave, selecione o "Tipo de chave" como "uso exposto" e cole o link da aplicação no campo "Domínio". Em seguida, clique em "Criar chave"<img className="full" alt='site' src='images/help/4.png' /></li>
                            <li className='weather_help-list'> Pronto! Sua chave será exibida como na imagem. Copie ela para usar em nossa aplicação  <img className="full" alt='site' src='images/help/5.png' /></li>
                            <li className='weather_help-list'> De volta a aplicação, cole a chave no campo indicado juntamente com os outros dados de sua pesquisa. Clique em  "Procurar" e visualize o resultado!<img className="full" alt='site' src='images/help/6.png' /></li>


                        </ol>
                    </div>
                </div>
            </div>
        </div>


    );
}

