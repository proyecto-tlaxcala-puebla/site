<script lang="ts">
  import { base } from '$app/paths';

  // Handle navigation errors gracefully
  function handleNavError(event: MouseEvent) {
    if (event?.target && 'href' in event.target) {
      console.log('Navigation to:', (event.target as HTMLAnchorElement).href);
    }
  }
</script>

<svelte:head>
  <title>Publicaciones - Proyecto Tlaxcala-Puebla</title>
  <meta name="description" content="Artículos académicos, publicaciones y material de divulgación del Proyecto Tlaxcala-Puebla sobre investigaciones socioambientales en la región." />
</svelte:head>

<!-- Header -->
<section class="bg-teal-800 py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
        📖 Publicaciones
      </h1>
      <div class="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
      <p class="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
        En este espacio encontrarás los textos académicos y de divulgación sobre investigaciones del equipo.
      </p>
    </div>
  </div>
</section>

<!-- Featured Research Articles -->
<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Investigaciones Destacadas</h2>
      <div class="w-24 h-1 bg-teal-600 mx-auto"></div>
    </div>
    
    <div class="space-y-8">
      <!-- Article 1 -->
      <div class="bg-gray-50 rounded-lg p-8 research-card hover:shadow-lg transition-shadow">
        <div class="flex items-start gap-4">
          <div class="text-4xl">📄</div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              La pandemia de COVID-19: significados y consecuencias en los modos de vida en Tlahuapan, Puebla
            </h3>
            <p class="text-gray-600 mb-3">
              <strong>Autores:</strong> Hernán Salas Quintanal, Paola Velasco Santos, Alejandra González Nava y Celia López Miguel.
            </p>
            <p class="text-gray-700 mb-4 academic-text leading-relaxed">
              <strong>Resumen:</strong> Análisis de las estrategias de adaptación de comunidades rurales durante la pandemia y los significados socioculturales atribuidos al virus.
            </p>
            <a 
              href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0188-25032021000600159" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors inline-block btn-academic"
              on:click={handleNavError}
            >
              Leer artículo →
            </a>
          </div>
        </div>
      </div>
      
      <!-- Article 2 -->
      <div class="bg-gray-50 rounded-lg p-8 research-card hover:shadow-lg transition-shadow">
        <div class="flex items-start gap-4">
          <div class="text-4xl">🌟</div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              La luz del ecoturismo: la producción social de las luciérnagas y las trampas de la fe neoliberal
            </h3>
            <p class="text-gray-600 mb-3">
              <strong>Autores:</strong> Paola Velasco Santos y Alejandra González Nava.
            </p>
            <p class="text-gray-700 mb-4 academic-text leading-relaxed">
              <strong>Resumen:</strong> Exploración del impacto del turismo de avistamiento de luciérnagas en la Sierra Nevada, Puebla, y sus implicaciones en la conservación ambiental y la economía local.
            </p>
            <a 
              href="https://journals.unam.mx/index.php/antropologia/article/view/85391" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block btn-academic"
              on:click={handleNavError}
            >
              Leer artículo →
            </a>
          </div>
        </div>
      </div>
      
      <!-- Article 3 -->
      <div class="bg-gray-50 rounded-lg p-8 research-card hover:shadow-lg transition-shadow">
        <div class="flex items-start gap-4">
          <div class="text-4xl">💧</div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">
              Recordar el agua para luchar por la vida
            </h3>
            <p class="text-gray-600 mb-3">
              <strong>Autora:</strong> Paola Velasco Santos.
            </p>
            <p class="text-gray-700 mb-4 academic-text leading-relaxed">
              <strong>Resumen:</strong> Reflexión sobre la transformación de los ríos Atoyac y Zahuapan en Tlaxcala y la memoria histórica como herramienta para la defensa del territorio.
            </p>
            <a 
              href="https://www.jornada.com.mx/2023/03/18/delcampo/articulos/recordar-agua.html" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block btn-academic"
              on:click={handleNavError}
            >
              Leer artículo →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Books and Chapters -->
<section class="py-16 bg-teal-50">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">📚 Libros y Capítulos de Libros</h2>
      <div class="w-24 h-1 bg-emerald-600 mx-auto"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Book 1 -->
      <div class="bg-white rounded-lg p-8 research-card hover:shadow-lg transition-shadow">
        <div class="text-center mb-6">
          <div class="text-6xl mb-4">📖</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Ríos de Contradicción. Contaminación, ecología política y sujetos rurales en Natívitas, Tlaxcala
          </h3>
          <p class="text-gray-600 mb-4">
            <strong>Autora:</strong> Paola Velasco Santos
          </p>
          <div class="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg mb-4 inline-block">
            <strong>🏆 Premio INAH Fray Bernardino de Sahagún</strong><br>
            <span class="text-sm">Mejor investigación en antropología social y etnología (2018)</span>
          </div>
        </div>
        <div class="text-center">
          <a 
            href="https://www.libros.unam.mx/rios-de-contradiccion-contaminacion-ecologia-politica-y-sujetos-rurales-en-nativitas-tlaxcala-9786073074032-ebook.html" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors inline-block btn-academic"
            on:click={handleNavError}
          >
            Más información →
          </a>
        </div>
      </div>
      
      <!-- Book 2 -->
      <div class="bg-white rounded-lg p-8 research-card hover:shadow-lg transition-shadow">
        <div class="text-center mb-6">
          <div class="text-6xl mb-4">📚</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Nativitas, Tlaxcala. La construcción en el tiempo de un territorio rural
          </h3>
          <p class="text-gray-600 mb-6">
            <strong>Autores:</strong> Hernán Salas y Ma. Leticia Rivermar
          </p>
        </div>
        <div class="text-center">
          <a 
            href="https://librosoa.unam.mx/handle/123456789/1598" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors inline-block btn-academic"
            on:click={handleNavError}
          >
            Más información →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Navigation -->
<section class="py-12 bg-teal-800">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h3 class="text-2xl font-semibold text-white mb-6">Explora Más Contenido</h3>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="{base}/" class="bg-white text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-academic">
        ← Inicio
      </a>
      <a href="{base}/equipo" class="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors btn-academic">
        Conoce al Equipo
      </a>
      <a href="#maps" class="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors btn-academic">
        Mapas Interactivos
      </a>
    </div>
  </div>
</section>

<style>
  .research-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  
  .research-card:hover {
    transform: translateY(-2px);
  }
</style>