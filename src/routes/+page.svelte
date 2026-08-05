<script lang="ts">
  import { base } from '$app/paths';
</script>

<!-- Hero Section con Foto de Portada -->
<section class="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('{base}/portada.jpg');">
  <!-- Content overlay -->
  <div class="relative z-10 flex items-center justify-center min-h-screen bg-transparent pointer-events-none">
    <div class="text-center text-white px-6 max-w-4xl pointer-events-auto pt-8">
      
      <!-- Tira de Logotipos Institucionales en la parte superior -->
      <div class="flex items-center justify-center gap-8 mb-6 bg-transparent max-w-xl mx-auto">        <img src="{base}/unam-logo.png" alt="UNAM" class="h-16 w-auto object-contain drop-shadow" />
        <img src="{base}/iia-logo.png" alt="IIA UNAM" class="h-16 w-auto object-contain drop-shadow" />
        <img src="{base}/seminario-logo.jpeg" alt="Seminario Universitario de Estudios Rurales" class="h-14 w-auto object-contain drop-shadow" />
      </div>

      <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
        Proyecto Tlaxcala-Puebla
      </h1>
      
      <p class="text-xl md:text-2xl mb-8 leading-relaxed academic-text text-gray-900 font-semibold drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
        Investigación y reflexiones sobre los cambios socioambientales, económicos y políticos en la región
      </p>

      <!-- Botones de las 6 áreas principales (Cuadrícula 3x2) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mt-6 max-w-4xl mx-auto">
        <a href="#about" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic shadow-lg text-center">
          ¿Quiénes somos?
        </a>
        <a href="#research" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic shadow-lg text-center">
          Investigación
        </a>
        <a href="#formacion" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic shadow-lg text-center">
          Formación y fortalecimiento académico
        </a>
        <a href="#difusion" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic shadow-lg text-center">
          Difusión
        </a>
        <a href="#acervo" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic shadow-lg text-center">
          Acervo
        </a>
        <a href="#vinculacion" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic shadow-lg text-center">
          Vinculación
        </a>
      </div>

    </div>
  </div>
</section>
<!-- About Section -->
<!-- About Section -->
<section id="about" class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">¿Quiénes somos?</h2>
      <div class="w-24 h-1 bg-teal-600 mx-auto"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="prose prose-lg max-w-none">
  <p class="text-gray-700 leading-relaxed academic-text mb-4">
    El Proyecto Tlaxcala-Puebla es una iniciativa del <strong>Instituto de Investigaciones Antropológicas (IIA)</strong> de la UNAM. Durante <strong>más de 15 años</strong>, este proyecto ha documentado los cambios ambientales, políticos, económicos y culturales en regiones rurales y semiurbanas del centro de México.
  </p>
  
  <p class="text-gray-700 leading-relaxed academic-text mb-4">
    A través de metodologías etnográficas, trabajo de campo y análisis socioambiental, la iniciativa aborda de manera integral tres ejes fundamentales en todo el territorio de estudio:
  </p>

  <ul class="space-y-3 mb-6 text-gray-700 academic-text pl-5 list-disc">
    <li class="leading-relaxed">
      <strong>Hidropolítica, gestión ambiental y luchas por el agua:</strong> Análisis de la crisis hídrica, la contaminación, la sobreexplotación y las respuestas comunitarias en defensa de los recursos naturales.
    </li>
    <li class="leading-relaxed">
      <strong>Transformaciones en la vida rural y resiliencia comunitaria:</strong> Estudio de las dinámicas de adaptación, las reconfiguraciones económicas y las estrategias locales ante crisis globales, como la pandemia de COVID-19.
    </li>
    <li class="leading-relaxed">
      <strong>Ecoturismo, conservación y producción social de la naturaleza:</strong> Exploración de cómo la conservación, la economía rural y las actividades de turismo sustentable transforman la organización comunitaria y la relación con el entorno.
    </li>
  </ul>

  <p class="text-gray-700 leading-relaxed academic-text">
    A través de este enfoque transversal, el proyecto construye un panorama completo sobre la resistencia, la identidad territorial y la reconfiguración sociocultural de las comunidades en Tlaxcala y Puebla.
  </p>
</div>
      
      <div class="bg-gray-50 p-8 rounded-lg research-card">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Nuestro Equipo</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="research-bullet"></span>
            <div>
              <strong>Paola Velasco Santos</strong><br>
              <span class="institution">IIA-UNAM</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="research-bullet"></span>
            <div>
              <strong>Hernán Salas Quintanal</strong><br>
              <span class="institution">IIA-UNAM</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="research-bullet"></span>
            <div>
              <strong>Celia López Miguel</strong><br>
              <span class="institution">CRIM-UNAM</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="research-bullet"></span>
            <div>
              <strong>Alejandra González Nava</strong><br>
              <span class="institution">Estudiante de doctorado, IIA-UNAM</span>
            </div>
          </li>
          <li class="flex items-start">
            <span class="research-bullet"></span>
            <div>
              <strong>Rita Margarita Jiménez Sánchez</strong><br>
              <span class="institution">Labor Center-UCSB</span>
            </div>
          </li>
        </ul>
        <div class="mt-6 text-center">
          <a href="{base}/equipo" class="btn-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors btn-academic inline-block">
            Ver Equipo Completo →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <!-- Sección: Investigación -->
<section id="research" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
      Investigación
    </h2>
    <p class="text-gray-600">Próximamente contenido de los proyectos y líneas de investigación...</p>
  </div>
</section>

<!-- Sección: Formación y fortalecimiento académico -->
<section id="formacion" class="py-16 bg-gray-50 border-b">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
      Formación y fortalecimiento académico
    </h2>
    <p class="text-gray-600">Próximamente información de cursos, seminarios y tesis...</p>
  </div>
</section>

<!-- Sección: Difusión -->
<section id="difusion" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
      Difusión
    </h2>
    <p class="text-gray-600">Próximamente publicaciones, eventos y divulgación...</p>
  </div>
</section>

<!-- Sección: Acervo -->
<section id="acervo" class="py-16 bg-gray-50 border-b">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
      Acervo
    </h2>
    <p class="text-gray-600">Próximamente repositorio de documentos y mapas...</p>
  </div>
</section>

<!-- Sección: Vinculación -->
<section id="vinculacion" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
      Vinculación
    </h2>
    <p class="text-gray-600">Próximamente trabajo comunitario y colaboraciones...</p>
  </div>
</section>

<!-- Contact Section -->
<section class="py-16 bg-gray-50">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-gray-800 mb-4">Contacto</h2>
    <div class="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
    <p class="text-xl text-gray-600 mb-8">
      Si deseas más información o tienes alguna duda, contáctanos a través del correo electrónico:
    </p>
    <a href="mailto:proyecto.tlaxcala.puebla@unam.mx" class="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">
      proyecto.tlaxcala.puebla@unam.mx
    </a>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-8">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-4">Proyecto Tlaxcala-Puebla</h3>
        <p class="text-gray-300 mb-4">
          Instituto de Investigaciones Antropológicas (IIA) - UNAM<br>
          Centro Regional de Investigaciones Multidisciplinarias (CRIM) - UNAM
        </p>
        <p class="text-gray-400 text-sm">
          Visualización de fondo: <a href="https://apps.amandaghassaei.com/gpu-io/examples/fluid/" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 transition-colors">Fluid Simulation</a> por <a href="https://amandaghassaei.com/apps/" target="_blank" rel="noopener noreferrer" class="text-teal-400 hover:text-teal-300 transition-colors">Amanda Ghassaei</a>
        </p>
      </div>
      <div class="text-right">
        <p class="text-gray-300">
          © 2025 Proyecto Tlaxcala-Puebla. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </div>
</footer>
