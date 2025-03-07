"use client";

import { ItemPost } from "./project-item";

export const ProjectsArchives = () => {
  const articles = [
    
    {
      title:
        "Esquema de ligação do drive bts 7960 emc-lite , DSW lite e DSW Wheel",
      description:
        "Veja a maneira mais simples de ligar o Driver BTS no emc lite ,dswlite e DSW",
      urlArchive:
        "Esquema de ligação do drive bts 7960 emc-lite , DSW lite e DSW Wheel.pdf",
    }
    ,
    {
      title: "Porta USB caida no Arduino",
      description:
        "Uma possível solução para salvar sua placa que pode funcionar muito bem",
      urlArchive:
        "Porta USB caída no  arduíno.pdf",
    },
    {
      title: "Esquema chave de luz Volkswagen",
      description:
        " esquema da chave de luz Volkswagen mencionado no vídeo no YouTube",
      urlArchive:
        "chave_luz_vw.pdf",
    },    {
      title: "Qual STM escolher",
      description:
        "Nosso posicionamento de como escolher a STM32",
      urlArchive:
        "Qual STM escolher  (1).pdf",
    },
    {
      title: "Como utilizar x loader e como resolver travamento do arduíno",
      description:
        "Veja a maneira mais simples de Como utilizar x loader e como resolver travamento do arduíno",
      urlArchive:
        "Como utilizar x loader e como resolver travamento do arduíno.pdf",
    },
    {
      title: "Especificações superficiais dos motores RS 555 775 895 997",
      description:
        "Parâmetros como torque e energia",
      urlArchive:
        "895 low speed.pdf",
    },
    {
      title: "Como fazer um volante com Encoder e ffb ou sem",
      description: "neste artigo você irá aprender a fazer um ótimo volante",
      urlArchive: "Como fazer um volante com Encoder e ffb ou sem.pdf",
    },
    {
      title: "Sensor hall Analógico",
      description:
        "Veja um artigo completo de sensores hall analógicos Focando na ligação elétrica E como montar o imã",
      urlArchive: "Sensor hall Analógico.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="font-medium text-3xl text-center lg:text-4xl mb-10">
          Nossos artigos PDF
        </h1>
        <div className="flex flex-col gap-6 lg:w-3/4 w-full">
          {articles.map((article, index) => (
            <ItemPost
              key={index}
              title={article.title}
              description={article.description}
              urlArchive={article.urlArchive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
