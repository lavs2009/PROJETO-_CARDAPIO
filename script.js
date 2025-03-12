/*
<h2>Cardápio do dia</h2>
<h3>Segunda-feira</h3>
<section>

    <ul>
        <li>Arroz</li>
        <li>Feijoada</li>
        <li>Farofa</li>
        <li>Couve</li>
        <li>Laranja</li>
    </ul>
    <figure class="comida">
        <img src="img/image 2.png" alt="comida">
    </figure>
</section>
*/
const main=document.querySelector('main');//selecionar a tag main
main.innerHTML="<h2>Cardápio do dia</h2>";
// a lista no js começa no zero 
const diaDaSemana=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado-letivo']
const hoje=new Date().getDay();
//Date informa a data e a getDay() informa qual dos 7(0-6)
const diaAtual=diaDaSemana[hoje]
alert(diaAtual)