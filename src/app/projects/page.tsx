
// import { useEffect } from 'react';
// import styles from './Projects.module.css'; // Adjust the path as needed
// import Image from 'next/image';

// interface Project {
//   src: string;
//   alt: string;
// }

// export default function Projects() {
//   useEffect(() => {
//     const cards = document.querySelectorAll('.project-card');

//     cards.forEach((card, index) => {
//       setTimeout(() => {
//         const cardElement = card as HTMLElement;
//         cardElement.classList.add(index % 2 === 0 ? styles['fly-in-left'] : styles['fly-in-right']);
//       }, index * 200); // Stagger the delay for each card
//     });
//   }, []);

//   // Array of image file names and their respective alt texts
//   const projectImages: Project[] = [
//     { src: '/figma.png', alt: 'Figma Project',  },
//     { src: '/flamingo.jpg', alt: 'Flamingo Project' },
//     { src: '/project3.jpg', alt: 'Project 3' },
//     { src: '/project4.jpg', alt: 'Project 4' },
//     { src: '/project5.jpg', alt: 'Project 5' },
//     { src: '/project6.jpg', alt: 'Project 6' },
//     { src: '/project7.jpg', alt: 'Project 7' },
//     { src: '/project8.jpg', alt: 'Project 8' },
//     { src: '/project9.jpg', alt: 'Project 9' },
//     { src: '/project10.jpg', alt: 'Project 10' },
//     { src: '/project11.jpg', alt: 'Project 11' },
//     { src: '/project12.jpg', alt: 'Project 12' }
//   ];

//   return (
//     <section className="py-20 bg-gray-50" id="projects">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectImages.map((project, index) => (
//             <div
//               key={index}
//               className="project-card bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <Image
//                 src={project.src} // Use the specific image file
//                 alt={project.alt}
//                 className="w-full h-48 object-cover"
//                 height={400}
//                 width={500}
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">Project {index + 1} Title</h3>
//                 <p className="text-gray-600 mt-2">
//                   Description for Project {index + 1}. This project highlights key skills in design and development.
//                 </p>
//                 <button className="mt-4 px-6 py-2 bg-black text-white hover:bg-white hover:text-black hover:border-[1px] border-black rounded transition ease-in font-semibold">
//                   View Project
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import Navbar from '../components/navbar';

import { useEffect } from 'react';
import styles from './Projects.module.css'; // Adjust the path as needed
import Image from 'next/image';

interface Project {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string; // New property for the project link
}

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card, index) => {
      setTimeout(() => {
        const cardElement = card as HTMLElement;
        cardElement.classList.add(index % 2 === 0 ? styles['fly-in-left'] : styles['fly-in-right']);
      }, index * 200); // Stagger the delay for each card
    });
  }, []);

  // Array of image file names, alt texts, titles, descriptions, and links
  const projectImages: Project[] = [
    { src: '/figma.png', alt: 'Figma Project', title: 'Figma Perfect Pixel Design', description: 'Designed a Figma E-commerce Responsive Template with Nextjs and Tailwind css.', link: 'https://github.com/Aliza-Yaseen/figma' },


    { src: '/flamingo.jpg', alt: 'Flamingo Project', title: 'E-Commerce Website', description: 'Developed a responsive and user-friendly e-commerce site with a Great Effects. Responsive made in Nextsj and Tailwind Css', link: 'https://nextjs-falmingo.vercel.app/?vercelToolbarCode=pvtMtlYNeKOy1uu' },


    { src: '/fb.jpg', alt: 'Project Facebook clone ', title: 'FaceBook Clone', description: 'Created a Facebbok clone Fully Responsive in Html CSS .', link: 'https://protech-1a6f0.web.app/' },

    { src: '/portfolio.png', alt: 'My Personal Portfolio ', title: 'My Personal Portfolio', description: 'Developed a fully Responsive personal portfolio in html css js. .', link: 'https://aliza-yaseen.github.io/new-ortfolio001/' },

    { src: '/customport.jpg', alt: 'custom nextjs ', title: 'Portfolio in Custom Nextjs', description: 'Desinged a portfolio in Nextjs with custom Css fully Responsive.', link: 'https://ycustomnextjs3.vercel.app/' },

    { src: '/bot.jpg', alt: 'Botanical Plant ', title: 'Botanical  plant', description: 'Created an e-commerce Botanical template Fully Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/botanical' }, 

    { src: '/omexo.jpg', alt: 'omexo ', title: 'Omexo', description: 'developed an Omexo template Fully Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/my-omexo-project' }, 

    { src: '/keystroke.jpg', alt: 'keystroke ', title: 'Keystroke  ', description: 'Created a Keystroke template Fully Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/my_custom_project' }, 

    { src: '/moore.jpg', alt: 'moore ', title: 'Sophia moore', description: 'Developed an e-commerce sophia moore textile website template Fully Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/moore' }, 

    { src: '/pangopets.jpg', alt: 'pangopet ', title: 'Pangopets', description: 'Desinged a  pangopets template Fully Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/pengopets-custom' }, 

    { src: '/sh.jpg', alt: 'shield ', title: 'ShieldPro Cybersecurity', description: 'Create a  ShieldPro Cybersecurity template Fully Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/Sheild_pro_custom_project' }, 

    
    { src: '/ella.jpg', alt: 'ella ', title: 'ella static ecommerce', description: 'Developed an ella e-commerce static template Responsive in Html CSS .', link: 'https://github.com/Aliza-Yaseen/ella-static' }, 
    // Add more projects with individual links
  ];

  return (
    <div className="">
    <nav>
        <Navbar></Navbar>
    </nav>
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white shadow-md overflow-hidden mt-8"
            >
              <Image
                src={project.src}
                alt={project.alt}
                className="w-full h-48 object-cover"
                height={400}
                width={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-black text-white text-sm hover:bg-white hover:text-black hover:border-[1px] border-black rounded transition ease-in font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
