import React from 'react';
import banner from '../Images/banner2.jpeg';
import icon from "../Images/img2.jpeg";

function About() {
  const aboutList = [
    { name: 'Beatriz', presentation: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem at aspernatur eius laborum asperiores. Atque libero repellendus qui eveniet aperiam beatae, magnam nam similique nihil. Fugiat mollitia voluptate culpa magnam?', role: 'Dev FullStack' },
    { name: 'Isabela', presentation: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem at aspernatur eius laborum asperiores. Atque libero repellendus qui eveniet aperiam beatae, magnam nam similique nihil. Fugiat mollitia voluptate culpa magnam?', role: 'Dev Front End' },
    { name: 'Giovanna', presentation: 'Oie! Sou uma estudante entusiasmada em Engenharia de Software na FIAP. Apesar de ainda estar em fase de aprendizado, estou desenvolvendo habilidades em Python, JavaScript, Front End e Web Development, além de Gestão Ágil, buscando constantemente novos desafios para aplicar meus conhecimentos. Estou empolgada para colaborar em projetos e adquirir experiência prática, contribuindo com ideias inéditas e energia para alcançar objetivos. ', role: 'Dev Front End' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 mb-[50px]">
      <div className="mt-8 mb-12">
        <img src={banner} alt="Banner" className="w-full rounded-lg shadow-lg" />
      </div>
      <hr className="my-8 border-t-4 border-customRose" />
      <div className="text-center">
        <h2 className="text-3xl font-black text-PinkTitle mb-4">About Us</h2>
        {aboutList.map((person, index) => (
          <div key={index} className="flex flex-col items-center md:flex-row mb-8">
            <div className="text-center md:text-left md:mr-4 mb-4">
              <h4 className="text-base font-bold text-gray-700 mb-1">{person.role}</h4>
              <h3 className="text-2xl font-bold text-rose-500 mb-1">{person.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{person.presentation}</p>
            </div>
            <img className='rounded-full w-40 h-40' src={icon} alt="Icon" />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default About;
