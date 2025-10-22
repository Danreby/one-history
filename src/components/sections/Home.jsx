import React, { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TextRotator from "../common/buttons/TextRotator";

export const Home = () => {
  const rotatorRef = useRef(null);

  const groups = [
    { text: "Oi..." },
    { text: "Nunca fiz algo do tipo, mas achei q seria uma boa ideia" },
    { text: "Só separa um tempo pra ler pq ta grande... kkkkk" },
    { text: "Não esperava acabar escrevendo tanta coisa" },
    { text: "Isso se quiser ler tudo isso, tem bastaaaante coisa pra ler kkkk" },
    { text: "Pode colocar o numero da pagina se quiser ler depois e voltar nela... só tem q lembrar o numero da pagina kkkk" },
    { text: "Se não quiser ler não tem problema, de vdd" },
    { text: "Mas se quiser ler... obrigado por isso" },
    { text: "Pensei em fazer algo para te dizer o que eu sinto, nunca consigo achar as palavras certas kkkk" },
    { text: "E provavelmente vão faltar palavras aqui, quando se trata de você nem todas as palavras do mundo são suficientes" },
    { text: "Sempre que penso em você meu peito se enche de alegria... minha mente fica nas nuvens de tão avoado" },
    { text: "Meu coração sempre se aquece quando vejo uma foto sua... e quando te vejo pessoalmente só falta ele pular pela minha boca" },
    { text: "Todo esse tempo sem você foi dificil... você tinha vindo do nada e de repente... tive de aprender a viver sem você comigo..."},
    { text: "Não sabia nem quem era pra eu ser... como eu poderia querer ter você comigo?"},
    { text: "Eu não sabia o que fazer, nem quem eu deveria ser... e assim foi o primeiro ano sem você"},
    { text: "Implorando pra te ter de volta, tentando fazer o que eu achava que você gostaria, pensei que assim eu conseguiria te ter de volta"}, 
    { text: "Fiz as coisas que meu eu 'juvenil' achava que faria efeito... o que você acharia legal e faria me querer dnv... mas nada adiantou..."},
    { text: "E nunca iria funcionar, eu não entendia de verdade o que você queria, o que era importante pra você e o que você realmente queria"},
    { text: "Eu achava que se eu falasse o que achava que você queria ouvir você voltaria... e mesmo tentando entender realmente nada adiantava"},
    { text: "Minha mente entrava em parafuso... passsava os dias tentando entender o que eu tinha feito de errado, e em como corrigir isso pra te ter cmg"},
    { text: "Eu fazia investidas, e você se incomodava com isso... não gostava mais de mim como antes, mas pra mim você era a pessoa mais importante pra mim"},
    { text: "Você até tentou manter uma certa relação de amizade, veio em meu aniversário, voltava da faculdade cmg"},
    { text: "Mas você tava ficando mais distante... não me respondia direito, parou de voltar da faculdade cmg, tava cada vez mais distante..."},
    { text: "Você dizia que as pessoas te falavam coisas... que você ficava sabendo de coisas que você não queria saber, que não era sua responsábilidade"},
    { text: "Você ouvia elas e não me deixava nem falar sobre, dizia q sabia q eu ia negar ou tentar me justificar, mas então... o que eu deveria fazer?"},
    { text: "O que eu deveria falar pra você pra ficar melhor com você? as pessoas falavam coisas das quais eu não fazia ideia sobre o que eram"},
    { text: "Eu ficava pensando sobre o que deveria ser, sobre o que eu poderia ter feito de errado... mas nada vinha a mente"},
    { text: "Minha mente entrava cada vez mais em colapso, sem saber o que fazer pra resolver as coisas, mas depois eu entendi..."},
    { text: "Eu não podia fazer nada, mesmo você sendo compreensiva cmg, chegou um momento que você não queria me ouvir mais"},
    { text: "E novamente eu continuava pensando no pq, o que eu tinha feito que tinha deixado as coisas chegarem ali, o que eu poderia ter feito"},
    { text: "Se eu tivesse te abraçado naquele estacionamento?.. Se eu tivesse descido no seu ponto aquela vez?... Se eu tivesse falado algo especifico?.."},
    { text: "Será q eu teria conseguido você de volta?"},
    { text: "Depois vi q não... não sabia o que te falavam nem o que fazer pra você"},
    { text: "Mas mesmo assim continuei tentando... indo atrás de você, tentando te convencer de que daria certo, implorando pra te ter"},
    { text: "Até que chegou o momento que você se cansou... cansou de mim atrás de você o tempo todo, pediu pra eu te esquecer, fingir q não existia..."},
    { text: "Mas com esquecer o amor da minha vida? a pessoa q iluminava meu dia? que me deixava alegre só de simplesmente olhar pra mim?"},
    { text: "E então... mesmo contra minha vontade... de deixei em paz... parei de mandar msg, de procurar, de correr atrás por um amor impossivel"},
    { text: "Mas eu passava meus dias nessa esperança, que chegasse uma mensagem sua, que chegasse um sinal seu..."},
    { text: "Que fosse você falando sobre qlqr coisa, sobre seu dia, como a faculdade é complicada, ou sobre como sua rotina é cansativa"},
    { text: "Desde q fosse você..."},
    { text: "Toda vez q meu celular apitava eu esperava q fosse uma mensagem sua, e sinceramente até hoje em dia uma parte de mim espera por isso..."},
    { text: "Mas eu sabia que você não aparareceria... que você não estava mais la..."},
    { text: "E mesmo dificil só restava focar em mim... estudar, procurar um emprego, sair com meus amigos, fazer as coisas pra mim..."},
    { text: "E foi bem, consegui um emprego, arranjei os dois melhores amigos que eu poderia pedir, fui até pros EUA kkkkk"},
    { text: "Vi muita coisa por lá, tanta coisa que eu queria te contar, tanta coisa que eu queria ter te mostrado na hora"},
    { text: "Mas novamente... quando eu puxava o telefone eu lembrava que você não tava mais la, lembrava que eu não podia mais mandar mensagem"},
    { text: "Tantas coisas aconteceram, conforme o tempo passava eu consegui aprender a viver sem você, sua falta não me afetava mais"},
    { text: "Eu conseguia aproveitar meus dias, tranquilo e rindo normalmente, não sabia de você e nem me importava em saber, mas..."},
    { text: "Ainda sim eu esperava um sinal seu, pelo natal quando eu sei q me mandaria msg, pelo seu aniversário quando eu poderia te mandar msg"},
    { text: "E nessas poucas ocasiões eu torcia pra render uma conversa, pra gente voltar a se falar, pra gente voltar a estar próximos"},
    { text: "Mas isso não acontecia... e com o passar do tempo eu também deixei de ficar ansioso por esses momentos"},
    { text: "Quando davy me falava de você ja não tinha mais tanto impacto, pra mim era indiferente"},
    { text: "O que antes bastava ouvir seu nome pra esfaquear meu peito... pra mim já era irrelevante saber de você ou não"},
    { text: "E então veio meu aniversário de 22 anos, você me mandou mensagem... e uma conversa saiu dali"},
    { text: "Pra mim sinceramente tanto faz como tanto fez, mas uma parte dentro de mim ficou feliz..."},
    { text: "Feliz em ver q ainda se lembrava de mim, que ainda se importava o suficiente pra me desejar feliz aniversário"},
    { text: "Sei que você não gostava de mim românticamente, gostava só da minha pessoa, e gostava de mim como amigo e nada além disso"},
    { text: "Então pensei... 'Tudo bem sermos só amigos, sei que não importa o que eu faça, ela não me vê desse jeito, e nunca mais vai ver...'"},
    { text: "O aniversário do davy tava chegando e não sei por que eu me arrumei tanto pra isso"},
    { text: "Era só um aniversário num rodizio, não tinha necessidade de me arrumar tanto, mas tinha uma coisa diferente do comum..."},
    { text: "Você ia ta lá... involuntariamente me arrumei pra você, tava ansioso pelo dia pois sabia q poderia ver você"},
    { text: "E então você entrou pela porta, deslumbrante como sempre, maravilhosa como sempre foi"},
    { text: "Não sentia mais a facada ao simplesmente ouvir seu nome, mas meu coração ficou alegre só de ver seu lindo rosto"},
    { text: "Então você se sentou, estava ali, tão perto de mim, mas mesmo assim tão longe..."},
    { text: "Tava ali te olhando, sem saber como chamar sua atenção, sem saber como falar com você"},
    { text: "Sempre que fico te encarando... é pq eu to pensando no que falar... pensando em como virar sua atenção pra mim"},
    { text: "Pensando num assunto que você se interessaria, pensando em fazer algo que a gente pudesse brincar sobre"},
    { text: "A noite passou tão rápido que quando vi... você ja estava indo embora... achei que acabaria por ai mas... não acabou"},
    { text: "A gente continuou conversando, falando sobre as coisas e falando sobre o nosso dia"},
    { text: "Então veio a bienal, fiquei me perguntando se eu deveria ir ou não... afinal não seria só você mas tambem o pessoal da faculdade"},
    { text: "O pessoal que se distanciou de mim... o pessoal que me deixou de lado quando nos separamos... sei que tinhamos combinado de ficar tranquilo perto deles"},
    { text: "Mas era dificil ter você tão perto e tão longe... parecia q tinha uma parede invisivel entre nós sempre que estavamos proximos"},
    { text: "E então eles começaram a preferir você... o que não necessariamente era um problema, mas me machucava ao ver que os amigos que eu tinha feito... tinham me trocado"},
    { text: "Uns deles começaram a dar em cima de você, e sempre que isso acontecia eu ficava com raiva e medo... medo de alguem tomar o lugar que ja foi meu..."},
    { text: "Medo de você não preferir a mim... raiva por aqueles que eu 'confiava' estarem me passando a perna... e incomodado por você não fazer nada contra..."},
    { text: "Cada vez q algo do tipo acontecia ficava mais dificil suportar, sem ninguem pra conversar sobre eu fazia o que eu achava melhor, mas só piorava"},
    { text: "Você tava se distanciando cmg, e com eles você deixava fazer o que quisessem... então decidi te esperar depois da faculdade, perto de sua casa"},
    { text: "Pensando se era uma boa ideia eu esperei, sem saber o que eu tava fazendo e o por que eu tava ali... então você chegou..."},
    { text: "Ao ver sua cara eu sabia q eu tinha feito besteira estando ali, tentei falar o que eu queria mas eu ja tinha pisado na bola, voltei pra casa chorando e doido aquele dia"},
    { text: "Mesmo com tudo isso pensei se seria bom pra mim ir na bienal, mas eu não podia deixar passar a oportunidade de te ver... de conseguir olhar pro seu rosto"},
    { text: "E foi bom, consegui ver você, passar um tempo com você, comprar coisinhas pra você, sempre gostei de te dar presente... só pra conseguir ver você feliz"},
    { text: "E mesmo depois da bienal a gente continuou se falando, conversando todo dia, falando sobre um monte de coisa"},
    { text: "A gente se falava o dia todo, até de madrugada, as vezes qnd via o sol ja tinha nascido"},
    { text: "A gente via series juntos, conversando sobre elas, eu ficava ansioso pra chegar o proximo dia, quando eu poderia estar um pouco mais proximo de você de novo"},
    { text: "Mesmo com 216KM de distância entre a gente, eu sentia você do meu lado... mas era óbvio q só eu me sentia assim..."},
    { text: "Eu tentava colocar na cabeça que a gente só era amigo, que não passaria disso, e que nem eu queria q fosse mais que isso"},
    { text: "Mas o que fiquei impressionado... era que todo mundo tava falando q a gente ficaria junto dnv"},
    { text: "Eu que deveria sentir isso não sentia, pra mim bastava ser seu amigo e só"},
    { text: "Mas todo mundo falava o contrario, o recanto falava q a gente tava junto, minha mãe colocou seu nome na festa de XV da minha irmã, minha psicóloga falava pra eu investir em você"},
    { text: "Até davy q sempre é contra eu falar com você tava achando q a gente voltaria"},
    { text: "E eu me perguntava se era isso mesmo... você parecia feliz falando cmg dnv, me mandava fotos lindas sua mandando beijinhos, mandava foto a qlqr momento sobre o q tava fazendo"},
    { text: "Até perguntou sobre a possibilidade da gente voltar... e eu novamente pensei em responder o que eu achava que você queria ouvir, mas não..."},
    { text: "Achei melhor falar o que era de verdade, não importanto se você acreditaria em mim ou não, falei o que eu sentia e como as coisas estão pra mim"},
    { text: "Você só falou um 'Entendi', por mais q eu não soubesse o que tirar daquilo, só aceitei, e deixei passar"},
    { text: "Os dias continuaram a passar, e sinceramente tinha vezes que a gente parecia ser um casal de novo, e vezes que a gente parecia dois estranhos..."},
    { text: "Ainda sim a gente tava se falando, se divertindo, aproveitando um ao outro"},
    { text: "Então você me chamou pra unjadimo (sim, você que me chamou)... você não tem noção de como aquilo me deixou feliz"},
    { text: "Você me convidando para o evento mais importânte do ano pra você? eu obviamente não podia deixar essa passar"},
    { text: "Seriamos só eu e você, pensei em 1.000.000 cenários na minha cabeça sobre as coisas que aconteceriam, sobre como seriam"},
    { text: "Mas eu só conseguia pensar em você, em te ver, em passar um tempo bom com você"},
    { text: "E você tinha dito que queria a minha pessoa la com você, especificamente a minha pessoa, de novo... você não tem noção de como aquilo me deixou feliz"},
    { text: "Se deu o trabalho de arranjar uma vaga pra mim, gravou a reunião toda pra eu ouvir, e até me convidou pra dormir na sua casa!?"},
    { text: "Nem qnd a gente tava junto eu dormi na sua casa, então tudo que eu pensava era em te agradar (e aproveitar o evento obviamente)"},
    { text: "Queria deixar você feliz e contente de ter a minha presença lá, agradar você e cuidar de você com o que eu pudesse fazer"},
    { text: "Comprei pizzas pq é sua comida favorita... peguei de vários sabores pq sei dos q você gosta, até sem carne pois tinha dito q não queria mais carne"},
    { text: "A gente viu mais serie, você tava conversando empolgada comigo, sua mãe também parecia feliz comigo lá"},
    { text: "Então, depois de conversar um monte, chegou a hora de dormir, e olha só... não dormi kkkk"},
    { text: "Eu tava no seu quarto, sua cama, usando seu travesseiro, tudo que eu pensava era 'o que eu to fazendo aqui? como eu vim pra cá?'"},
    { text: "Sinceramente, estar na sua casa novamente com você parecia um sonho pra mim"},
    { text: "Eu tava com medo de acabar acordando e ver que tudo não passava de um sonho, mas graças a Deus não era, era real, eu estava lá de verdade"},
    { text: "Acordamos, comemos, nos arrumamos, e fomos... eu tava lá, com você... do seu lado, tendo você comigo por um dia inteiro"},
    { text: "O que seria isso se não um sonho? a garota que eu amo comigo novamente, não em um evento de alguma pessoa em comum... mas sim por que ela me queria por perto"},
    { text: "Fomos pro evento, e ele foi incrível de tantas maneiras, o local, as pessoas, o clima, o evento... você... tudo perfeito e maravilhoso"},
    { text: "Por mais que você não tivesse gostado da parte da tarde, pra mim foi tudo incrível... por que você tava lá..."},
    { text: "O evento em si foi muito bom, o culto, os louvores, mas ele só foi maravilhoso por que você estava lá"},
    { text: "Passar um dia com você... mágico e perfeito... mas ainda tinha dúvidas... por quê me chamou? por quê me queria lá? sei que não queria mais nada entre a gente então..."},
    { text: "Por quê me convidou? até mesmo pra dormir na sua casa... mas eu sabia o por quê... você só queria que eu fosse, nada além disso, eu era só mais um amigo te acompanhando"},
    { text: "Então pensei em dizer o que eu sentia... novamente conversar sobre a possibilidade"},
    { text: "Mas preferi só tentar fazer algo, ao invés de conversar pensei em tomar um atitude, tomar a frente"},
    { text: "Ensaiei o cenário 1.000 vezes na minha mente, e quando chegamos na sua casa tentei colocar em prática"},
    { text: "Mas... na hora de agir... eu travei, como na primeira vez q saímos, mas dessa vez você, não iria vir pra mim como naquela vez... naquela sala de cinema"},
    { text: "Eu sabia que eu tinha que fazer algo, então com calma fui fazendo o que eu tinha pensado, ensaiado em minha mente"},
    { text: "Puxei você pra um abraço, fiz carinho em você... e me surpreendeu você me abraçar também"},
    { text: "Não um abraço com medo e recuada... como da ultima vez, mas sim um abraço bom e caloroso... um abraço que eu não queria sair nunca mais"},
    { text: "Então tentei continuar... quando você tentou sair queria puxar seu rosto, olhar nos seus lindos olhos, esperar a deixa e tomar a atitute"},
    { text: "Mas..."},
    { text: "Tudo deu errado"},
    { text: "Você não quis, até colocou sua mão entre a gente kkk... voltamos pra sala e ficou um clima entre nós, dava pra sentir que tava me evitando, que tava com raiva"},
    { text: "Tentei te chamar pra conversar, dizer o que eu sentia e que eu queria você, mas sempre que eu vejo seu lindo rosto... as palavras me fogem da mente"},
    { text: "Tentei falar o que tava minha mente, por mais embolado e confuso que tava... mas nada adiantou... e ali eu sabia q tinha pisado na bola dnv..."},
    { text: "Sabia que ali eu tinha cruzado uma linha, uma linha que você não queria cruzar e eu sabia que você não queria nada além disso"},
    { text: "E eu sabia que você não iria querer manter contato depois daquilo, você só queria que eu fosse embora..."},
    { text: "Dias depois conversamos sobre o ocorrido"},
    {
      text: "Aqui aparece uma imagem apenas nesta frase.",
      extras: (
        <img
          src="/one-history/img/linda_menina.png"
          alt="Linda Moça"
          className="w-40 h-auto rounded-md shadow-md"
        />
      ),
    },
  ];


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <TextRotator
              ref={rotatorRef}
              groups={groups}
              letterDelay={50}
              transitionDuration={500}
              showControls={true}
              mobileBreakpoint={768}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
