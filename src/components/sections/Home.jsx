import React, { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import TextRotator from "../common/buttons/TextRotator";

export const Home = () => {
  const rotatorRef = useRef(null);

  const [dateLife, setDateLife] = useState("");
  const [dateLifeAlone, setDateLifeAlone] = useState(0);
  const [displayDateLifeAloneExtense, setDisplayDateLifeAloneExtense] = useState("");

  useEffect(() => {
    const startUTC = Date.UTC(2003, 3, 15);
    const today = new Date();
    const todayUTC = Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    );
    const msPerDay = 1000 * 60 * 60 * 24;
    setDateLife(Math.floor((todayUTC - startUTC) / msPerDay));

    const startAloneY = 2022;
    const startAloneM = 11;
    const startAloneD = 7;

    const startAloneUTC = Date.UTC(startAloneY, startAloneM, startAloneD);
    const totalDaysAlone = Math.floor((todayUTC - startAloneUTC) / msPerDay);
    setDateLifeAlone(totalDaysAlone);

    const currY = today.getUTCFullYear();
    const currM = today.getUTCMonth();
    const currD = today.getUTCDate();

    let years = currY - startAloneY;
    let months = currM - startAloneM;
    let days = currD - startAloneD;

    if (days < 0) {
      const daysInPrevMonth = new Date(Date.UTC(currY, currM, 0)).getUTCDate();
      days += daysInPrevMonth;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const yLabel = `${years} ano${years !== 1 ? "s" : ""}`;
    const mLabel = `${months} mês${months !== 1 ? "es" : ""}`;
    const dLabel = `${days} dia${days !== 1 ? "s" : ""}`;

    setDisplayDateLifeAloneExtense(`${yLabel}, ${mLabel} e ${dLabel}`);
  }, []);

  const whatsappPhone = "5521964392099";

  const handleYes = () => {
    const url = `https://wa.me/${whatsappPhone}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNo = () => {
    const r = rotatorRef.current;
    if (r && typeof r.next === "function") {
      r.next(); 
      return;
    }

    try {
      const root = document.querySelector(".text-rotator-draggable");
      if (!root) return;
      const btn = root.querySelector(
        'button[aria-label="Próxima"], button[aria-label="Próximo"], button[aria-label="Next"], button.next, .next-btn'
      );
      if (btn && !btn.disabled) btn.click();
    } catch (err) {
      // 
    }
  };

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
    { text: "O evento em si foi muito bom, o culto, os louvores, o pessoal lá, tudo incrivel e uma paz indescritível",
      extras: (
        <img
          src="/one-history/img/unjadimo_all.jpg"
          alt="Linda Moça"
          className=" h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Mas ele só foi maravilhoso..."
    },
    { text: "Por que você estava lá",
      extras: (
        <img
          src="/one-history/img/th_event.jpg"
          alt="Linda Moça"
          className="w-40 h-auto rounded-md shadow-md"
        />
      ),
    },
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
    { text: "Dias depois conversamos sobre o ocorrido... e como eu já sabia você tava com raiva... chateada, decepcionada e desanimada cmg"},
    { text: "Mal queria falar comigo e voltou a me tratar com indiferença. Tentei conversar, explicar o porquê, te fazer entender o que eu senti e o que eu sinto"},
    { text: "Mas era tudo em vão... isso não é algo que você queria... nós... não é algo que você quer... eu... não sou o que você quer, eu sabia que não importava o que eu falasse, nada iria mudar"},
    { text: "A minima esperança que eu tinha de conseguir você, já tinha ido faz tempo. Todas as investidas, tentativas de te trazer... eu só estava correndo atrás de algo impossivel"},
    { text: "Correndo atrás de algo que não existe mais, uma possibilidade de algo que não tinha chance de acontecer... mas ainda sim..."},
    { text: "Eu tentava... se houvesse nem que fosse 1% de chance de conseguir você, eu estava mais do que disposto a tentar, disposto a lutar por algo que valhe a pena"},
    { text: "Por que você valhe a pena..."},
    { text: "Pra mim você é incrível, uma pessoa maravilhosa e extraordinária pra mim"},
    { text: "Não é perfeita, nem de longe, mas mesmo com todos os problemas, mesmo com todas as adversidades..."},
    { text: "Eu ainda te amo..."},
    { text: "Amo o seu jeito, Amo a maneira que fica quando ta estressada, Amo que sempre tenta ajudar os outros, Amo que você sempre ta lá por quem você se importa, não importa o que aconteça"},
    { text: "Amo como você guarda as coisas com carinho, Amo o jeito que fica comendo algo gostoso, Amo quando fica dançando do nada, Amo quando fica sem graça"},
    { text: "Amo seu sorriso lindo, Amo seus olhos escuros como o espaço, Amo seu cabelo cheiroso e bonito"},
    { text: "Amo tudo de bom e ruim em você"},
    { text: "Me sinto bem só de simplesmente estar perto de você, fico feliz só de olhar pra você, fico em paz com uma simples mensagem sua"},
    { text: "Mas... eu não sou o que você quer... e não adianta o quanto eu te queira, você não me quer, e nisso eu não posso fazer nada"},
    { text: "Só posso aceitar... seguir em frente e continuar vivendo minha vida, como eu tava fazendo~. Começar a vizualisar uma vida sem você ao meu lado"},
    { text: "Só posso aceitar... seguir em frente e continuar vivendo minha vida, como eu tava fazendo~. Vizualisar uma vida sem você ao meu lado, sem a pessoa que eu mais quero ao meu lado..."},
    { text: "Mas achei... que a gente poderia manter contato, continuar vendo as series, conversando sobre o dia a dia, mas isso também você não queria mais..."},
    { text: "Desde antes do evento já mal tava falando comigo, parou de mandar as fotos do seu dia, me respondia poucas vezes ao dia, eu sabia que tava esfriando... só não sabia o pq"},
    { text: "E depois da conversa piorou, me respondia uma vez no dia, as vezes nem me respondia, parecia que eu tava forçando algo que você não queria"},
    { text: "E pra surpresa de ninguem... você realmente não queria, não queria mais falar cmg, ter qlqr contato cmg, o que eu já recebia pouco... virou nada"},
    { text: "Parei de mandar msg pra ver se você mandaria, pensei 'se ela gosta de mim, se ela quer ter oq quer q seja cmg, ela vai me mandar uma msg, vai vir atrás de mim'"},
    { text: "Mas você não veio... esperei por um contato seu, um sinal, rezei por qlqr coisa sua, mas mesmo assim nada adiantava"},
    { text: "Eu sabia que era feio, me prender tanto a um amor impossivel, me humilhar tanto por algo que eu sei que não vai acontecer, não importa o que eu fizesse"},
    { text: "Por isso eu sigo minha vida, fazendo minhas coisas, me tornando o melhor de mim por mim, e não por alguem"},
    { text: "Vivo minha vida um dia de cada vez, me colocando em primeiro lugar sempre e fazendo tudo que for possível pras pessoas com quem eu me importo"},
    { text: "Por que essas poucas pessoas... ainda se importam comigo, lembram de mim, por mais ruins e otárias que elas possam ser as vezes, elas não me abandonam quando preciso delas"},
    { text: "Pessoas me deixaram de lado quando precisei, pararam de falar comigo e até foram atrás do que eu queria pra mim, mas essas pessoas com quem realmente se importam comigo... são especiais"},
    { text: "Por elas eu faria de tudo, e faço tudo que me cabe para ajuda-las, e estar lá por elas"},
    { text: "Só que..."},
    { text: "Ainda sinto sua falta..."},
    { text: "Uma parte de mim, que é incapaz de te esquecer, ainda sente sua falta"},
    { text: "Todos os dias você é a primeira pessoa que me vem a mente, e a ultima que eu penso quando vou dormir"},
    { text: "Aparece em todos os meus sonhos, e sempre penso em você em qualquer coisa que acontece comigo"},
    { text: "Sinto falta de você do meu lado, do jeito que me olhava apaixonada, do jeito que ria quando tava comigo, de como lutava pelo melhor da gente"},
    { text: "Falta de como ficava quando eu te dava presentes, de como você ficava comprando um hamburguer pra mim, de como dizia com dificuldade que me amava..."},
    { text: "De como ficava boba comigo tentando achar os versículos, de como me incentivava a me tornar o melhor de mim... o melhor de mim pra mim e pra nós"},
    { text: "Sinto falta de algo que não existe mais... mas eu amo quem você é, por que eu amo você"},
    { text: "Amo você por você ser você",
      extras: (
        <img
          src="/one-history/img/thsozrave.jpeg"
          alt="Linda Moça"
          className="h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: `Foram 245 dias inesquecíveis com você... os melhores 245 dias de todos os ${dateLife} dias da minha vida`,
      extras: (
        <img
          src="/one-history/img/hands_to_horizon.jpg"
          alt="Linda Moça"
          className="w-60 h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: `E agora fazem ${displayDateLifeAloneExtense} sem você... ${dateLifeAlone} dias sem o amor da minha vida ao meu lado... ${dateLifeAlone} dias rezando pra ter você de volta`},
    { text: "Mas ainda sim... quero você"},
    { text: "Quero você comigo"},
    { text: "Quero você pra mim"},
    { text: "Quero poder construir uma vida com você, aproveitar cada segundo que tenho por nós, e por você"},
    { text: "Quero estar com você, e quero sentir que você quer estar comigo também..."},
    { text: "Eu te amo",
      extras: (
        <img
          src="/one-history/img/kiss_on_beach.jpg"
          alt="Linda Moça"
          className="h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Sempre amei",
      extras: (
        <img
          src="/one-history/img/laughing_at_beach.jpg"
          alt="Linda Moça"
          className="h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "E sempre vou amar",
      extras: (
        <img
          src="/one-history/img/hug_while_sitting.jpg"
          alt="Linda Moça"
          className="h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Por isso to aqui... esperando uma mensagem sua... um sinal seu..."},
    { text: "Pra voltarmos a ser eu e você",
      extras: (
        <img
          src="/one-history/img/two_faces.jpg"
          alt="Linda Moça"
          className="h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Provavelmente esqueci de dizer algo nisso tudo... sabe como eu sou kkkkk..."},
    { text: "Mas acho que consegui passar o que eu queria"},
    { text: "Não precisa responder isso se não quiser, pode só ignorar e fingir que não viu isso aqui"},
    { text: "Mas..."},
    { text: "Pensa nisso... sei que você pensa em tudo kkkk, então pensa nisso aqui também"},
    { text: "Quero você!!!"},
    { text: "Quero voltar com você!!!"},
    { text: "Mas quero que me queira também..."},
    { text: "Quero que queira a gente de novo"},
    { text: "Por que eu te quero"},
    { text: "E to disposto a tudo por você"},
    { text: "E quero saber se também está disposta a isso"},
    { text: "Eu sei que não demos certo uma vez... mas por que não arriscarmos de novo?"},
    { text: "Se não arriscar plantar... nunca vai poder colher os frutos que podem dar"},
    { text: "Sim, a planta pode pegar chuva, podem pisar nela, muitas coisas podem acontecer pra planta não vingar"},
    { text: "Mas... se estivermos dispostos a ajuda-la a crescer, a cuidar dela, ela vai poder crescer e se tornar algo lindo"},
    { text: "E o que eu sinto por você é verdadeiro, desde o dia em que me deu aquele papel naquele ônibus... é você quem eu quero pra mim"},
    { text: "Só me arrependo de ter deixado acabar... de não ter lutado mais pela gente, por você"},
    { text: "Mas dou graças a Deus todos os dias por ele ter me apresentado você, a pessoa mais incrível que eu poderia ter encontrado na minha vida"},
    { text: "A pessoa por quem eu trocaria tudo pra ter de volta, por quem eu faria de tudo pra ter uma vida juntos",
      extras: (
        <img
          src="/one-history/img/hands_to_horizon.jpg"
          alt="Linda Moça"
          className="w-60 h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Se eu pudesse voltar no passado... ainda sim te escolheria, escolheria a melhor decisão da minha vida"},
    { text: "Se eu tivesse 5 vidas, eu renasceria em 5 cidades diferentes, teria 5 empregos diferentes, comeria 5 coisas deliciosas em cada uma, e em todas elas me apaixonaria pela mesma pessoa"},
    { text: "Me apaixonaria por você, e sempre por você",
      extras: (
        <img
          src="/one-history/img/us_couch.jpg"
          alt="Linda Moça"
          className="w-60 h-auto rounded-md shadow-md"
        />
      ),
    },
    { text: "Você é o meu amor eterno, a pessoa que meu coração escolheu, por quem eu aguardo até hoje"},
    { text: "Então eu quero te perguntar... te pedir pra me escolher, escolher a gente... então..."},
    { text: "Volta comigo?",
      extras: (
        <div className="flex gap-4">
          <button
            onClick={handleYes}
            className="border-green-300 rounded px-6 py-4 bg-green-500 text-red"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
          </button>
          <button
            onClick={handleNo}
            className="border-red-300 rounded px-6 py-4 bg-red-500 text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heartbreak-fill" viewBox="0 0 16 16">
              <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
            </svg>
          </button>
        </div>
      ),
    },
    { text: "Entendi..."},
    { text: "Tudo bem... é a sua escolha, não tem nada de errado"},
    { text: "O que eu quero é apenas um sonho egoista"},
    { text: "Um sonho incrível que não tem como virar realidade..."},
    { text: "Mas mesmo sem você... você continua sendo a pessoa mais incrivel e maravilhosa que eu conheço"},
    { text: "A pessoa que veio do nada, e tomou um espaço no meu coração e está nele até mesmo hoje em dia"},
    { text: "Eu te amo"},
    { text: "Continuarei te amando, não importa quanto tempo passe, não importa o que falem sobre, não importa o que aconteça"},
    { text: "Será você no meu coração"},
    { text: "Daqui até o infinito..."},
    { text: "E além... 🚀"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const countdownRef = useRef(null);

  const handleIndexChange = (idx) => {
    setCurrentIndex(idx);
    const isLast = groups.length > 0 && idx === groups.length - 1;
    if (isLast) {
      setControlsVisible(false);
      startCountdown();
    } else {
      stopCountdown();
      setControlsVisible(true);
    }
  };

  function startCountdown() {
    stopCountdown();
    setCountdown(10);
    setShowTimer(true);

    countdownRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
          setShowTimer(false);

          try {
            window.close();
          } catch (err) {}

          setTimeout(() => {
            try {
              if (!window.closed) {
                window.location.href = "/";
              }
            } catch (err) {}
          }, 300);

          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }

  function stopCountdown() {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    setShowTimer(false);
    setCountdown(10);
  }

  useEffect(() => {
    return () => {
      stopCountdown();
    };
  }, []);

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
              showControls={controlsVisible}
              mobileBreakpoint={768}
              onIndexChange={handleIndexChange}
              isLocked={showTimer}
            />
          </div>

          {showTimer && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <img
                src="/one-history/wired-outline-45-clock-time-hover-pinch.gif"
                alt="Relógio animado"
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <div className="text-xl font-bold">
                <span className="ml-1 text-2xl">{countdown}</span>{" "}
                segundo{countdown !== 1 ? "s" : ""}...
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
