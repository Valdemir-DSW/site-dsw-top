import { ProjectItemDownload } from "./project-item";
export const ProjectsDownloads = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <h1 className="font-medium text-3xl text-center lg:text-4xl mb-10">
        Lista de Assets
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 mb-20">
        <ProjectItemDownload
          title="DSW BUTTON BOX PRO"
          updateHistory="Versão Firmware 1.41 — 26/08/2024: Correção de conflito nos analógicos 3 e 4. Caso encontre problemas, informe á ferramenta de relatório de bugs na aba 'Sobre'. A função wireless ainda está em desenvolvimento.."
          credits="2024 Valdemir do DSW"
          urlDownload="https://drive.usercontent.google.com/download?id=19LYOJu8YpEkC1aB4EFmfJIRspdoxR6GX&export=download&authuser=0"
        />

        <ProjectItemDownload
          title="DSW"
          updateHistory="Versão 1/8/2024: Ajuste de compatibilidade com Windows 11."
          credits="2023 Valdemir do DSW"
          urlDownload="https://drive.google.com/file/d/1YXFUSyRE2AWyxrU9cIi9hvI1CEAW8DYR/view?usp=sharing"
        />
        <ProjectItemDownload
          title="DSW hex to Arduino"
          updateHistory="N/A"
          credits="2024 Valdemir do DSW"
          urlDownload="https://drive.google.com/uc?export=download&id=1FM6WTYsfnZAgtsX0peS9I7DZ-0QMbzWv"
        />

        <ProjectItemDownload
          title="DSW Lite"
          updateHistory="Versão 1/8/2024: Ajuste de compatibilidade com windows 11."
          credits="2022 Valdemir do DSW"
          urlDownload="https://www.mediafire.com/file/liphk6nk52j5zv0/DSW_lite_V5.zip/file"
        />

        <ProjectItemDownload
          title="EMC lite"
          updateHistory="N/A"
          credits="EMC Development"
          urlDownload="https://drive.google.com/drive/folders/1_bqvdywVJx2uescXi4YgN1H_9-k0qUPQ"
        />

        <ProjectItemDownload
          title="Fedit"
          updateHistory="N/A"
          credits="1999Microsoft"
          urlDownload="https://drive.google.com/uc?export=download&id=1lfnVPUbXxLOgoSSfZWfEtef8UX4uZrBu"
        />

        <ProjectItemDownload
          title="Wheel Check"
          updateHistory="N/A"
          credits="Desconhecido"
          urlDownload="https://drive.google.com/uc?export=download&id=11N7InqSofK3GbgqR1T1nZJ99MwxX9yit"
        />
          <ProjectItemDownload
          title="DI View"
          updateHistory="N/A"
          credits="2004 logitech"
          urlDownload="https://drive.google.com/file/d/1pI5-aUEYOS0FNJ9ZHuAyVqFT8vWK4TdG/view?usp=sharing"
        />
         <ProjectItemDownload
          title="DX Tweak 2"
          updateHistory="N/A"
          credits="2004 logitech"
          urlDownload="https://drive.google.com/file/d/1NliW-I78wInlkKsnmFG_7_RDtJoQxj1H/view?usp=sharing"
        />
        
        <ProjectItemDownload
          title="DSW button box"
          updateHistory="N/A"
          credits="2022 Valdemir do DSW"
          urlDownload="https://www.mediafire.com/file/gvf8hbtkxcdls28/Button_box.zip/file"
        />
      </div>
    </div>
  );
};
