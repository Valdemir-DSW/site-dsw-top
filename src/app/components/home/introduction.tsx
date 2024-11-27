import Button from "../ui/button";
import Link from "next/link";

export const IntroductionHome = () => {
  return (
    <div className="flex mx-3 lg:mt-32 flex-col items-center justify-center gap-4 mt-5">
      <h1 className="font-medium text-3xl text-center lg:text-4xl">
        Bem-vindo ao DSW Simuladores
      </h1>
      <p className="text-center font-normal text-[--text-overshadowed] lg:w-3/6 lg:text-lg">
        O projeto DSW (DIY Steering Wheel) tem como objetivo desenvolver
        simuladores de direção de alta qualidade, acessíveis e de baixo custo.
        "Valdemir"Começando com a necessidade de softwares mais específicos e 
        versáteis para o meu simulador acabei criando um grupo para captar e
        compartilhar o conhecimento que obtive a galera acabou gostando e eu 
        continuei desenvolvendo softwares cada vez mais avançados e elegantes! 
        comecei fazendo o simples que funcionava mas que atende as necessidades
        mesmo que complicados de usar depois passando(desenvolvendo) para algo mais intuitivo.
        Esses simuladores são voltados para entusiastas de corridas virtuais que
        buscam uma experiência imersiva sem precisar investir em equipamentos
        caros. Nosso foco é tornar a simulação de corrida acessível a todos,
        promovendo a criatividade e o aprendizado dentro da comunidade de jogos
        de corrida.
        nosso oferecemos Total suporte no discord entre no botão abaixo
      </p>
      <div className="mt-5 lg:mt-7">
        <Link href="https://discord.gg/ecf7PGTVVg">
          <Button>DISCORD</Button>
        </Link>
        
      </div>
      <p className="text-center font-normal text-[--text-overshadowed] lg:w-3/6 lg:text-lg">
        também temos tutoriais no YouTube você pode conferir os links abaixo e conferir
        também nossos programas e ferramentas online olha a página!
      </p>
    </div>
  );
};
