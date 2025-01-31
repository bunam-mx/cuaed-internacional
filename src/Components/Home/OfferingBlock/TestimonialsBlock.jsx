const TestimonialsBlock = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-end">
      <div className="hidden md:block">&nbsp;</div>
      <div className="hidden lg:block">&nbsp;</div>
      <div>
        <a
          href="https://youtu.be/j-9EtCXw-bo"
          target="_blank"
          className="testimonial"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-cuaed_blue sm:text-xl">
                Consejería en línea
              </h3>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt=""
                src="images/testimonials/anabel-delarosa.jpg"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              La Dra. Anabel de la Rosa Gómez relata su experiencia con la
              Universidad de Autónoma de Honduras en la impartición del curso
              Consejería en Línea.
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Publicación</dt>
              <dd className="text-xs text-gray-500">6 de agosto 2024</dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Duración</dt>
              <dd className="text-xs text-gray-500">3 minutos</dd>
            </div>
          </dl>
        </a>
      </div>
    </div>
  );
};

export default TestimonialsBlock;
