
import { ProjectItemHome } from "./project-item";

export const ProjectsHome = () => {
  return (
    <div className="mt-10 lg:mt-36 flex flex-col items-center justify-center w-ful mb-10">
      <h1 className="font-medium text-3xl text-center lg:text-4xl mb-10">
        Projetos Ativos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
       <ProjectItemHome
          title="DSW Gamepad Test"
          description="Teste seu volante ou gamepad. Agora e online!"
          url="/gamepad-test"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="Calculadora de Torque"
          description="Calcule o torque, energia e polias de seu volante para obter uma melhor experiência.Agora e online!"
          url="/calculadora-torque"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="DSW"
          description="Programa de desenvolvimento de volantes caseiros com force feedback no Arduino Leonardo."
          url="/downloads"
          status="FINALIZADO"
        />
        <ProjectItemHome
          title="DSW Button Box Pro"
          description="Atualização otimizada de seu antecessor, com melhor interface e sem travamentos, ainda gratuito."
          url="/downloads"
          status="FINALIZADO"
        />
        
        <ProjectItemHome
          title="DSW Painel Pro"
          description="Programa completo para extração de telemetria de jogos de corrida, com suporte para Arduinos e plataformas de movimento."
          url="/downloads"
          status="NAO LANCADO"
        />
        <ProjectItemHome
          title="DSW Pro"
          description="Programa gratuito para desenvolver volantes com force feedback na STM32."
          url="/downloads"
          status="NAO LANCADO"
        />
        
        <ProjectItemHome
          title="DSW Hex to Arduino"
          description="Perfeito para enviar para arduino scripts.hex, funciona com placas de arduino de terceira geração, R3."
          url="https://youtu.be/viEYCyZ__qM?si=cXhwvUY-G_WQYc1p"
          status="FINALIZADO"
        />
       
        <ProjectItemHome
          title="DSW Button Box"
          description="Programa para fazer button box com Arduino Leonardo."
          url="/downloads"
          status="PARADO"
        />
      </div>
    </div>
  );
};
