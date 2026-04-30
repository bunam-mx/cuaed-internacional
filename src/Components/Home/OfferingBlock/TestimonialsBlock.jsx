import TestimonialBlock from "../../TestimonialBlock/TestimonialBlock";

const testimonialsArray = [
  {
    id: 1,
    url: "https://youtu.be/j-9EtCXw-bo",
    title: "Consejería en línea",
    image: "anabel-delarosa.jpg",
    description: "La Dra. Anabel de la Rosa Gómez relata su experiencia con la Universidad de Autónoma de Honduras en la impartición del curso Consejería en Línea.",
    date: "6 de agosto 2024",
    length: "3 minutos"
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=9_dsT6Guxc0",
    title: "COIL Electroscopia entre la FES Cuautitlán y la Universidad del Salvador",
    image: "benjamin-velasco.jpg",
    description: "El Dr. Benjamín Velasco Bejarano de la FES Cuautitlán (UNAM) nos cuenta su experiencia al implementar un proyecto COIL (Collaborative Online International Learning) con el Dr. David Francisco Torres Romero de la Universidad del Salvador.",
    date: "20 de febrero 2025",
    length: "4 minutos"
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=aZDmbMDWdMI",
    title: "COIL Panorama de las lenguas indígenas",
    image: "david-chavez.jpg",
    description: "El Dr. David Chávez nos habla del proyecto COIL (Collaborative Online International Learning) que lideró junto a la profesora Nolvia López de Honduras.",
    date: "10 abril 2025",
    length: "2 minutos"
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=MJzTN0ygHis",
    title: "Utilización de la historieta para la sensibilización de temas entre jóvenes",
    image: "jorge-anaya.jpg",
    description: "El Dr. Jorge Salvador Anaya Martínez de la UNAM nos comparte su experiencia en un proyecto COIL con la Universidad Tecnológica del Estado Metropolitano de Chile.",
    date: "20 de agosto 2025",
    length: "3 minutos"
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=B8ACYITQb_Y",
    title: "Tríada CORNADA - COIL",
    image: "francisco-pino.jpg",
    description: "El Dr. Francisco Pino nos habla de su experiencia con la Tríada CORNADA, un proyecto para fomentar la colaboración internacional en línea.",
    date: "26 de noviembre 2025",
    length: "14 minutos"
  }
];

const TestimonialsBlock = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-end">
      {testimonialsArray.map((testimonial) => (
        <TestimonialBlock key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsBlock;
