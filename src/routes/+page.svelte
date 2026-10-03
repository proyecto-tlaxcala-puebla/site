<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" on:load={initMap}></script>
</svelte:head>

<script lang="ts">
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  function initMap() {
    if (typeof window !== 'undefined' && (window as any).L) {
      const L = (window as any).L;
      // Coordenadas del centro de Tlaxcala-Puebla
      const map = L.map('mapa-region').setView([19.25, -98.15], 9);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Marcador de Ejemplo: Tlahuapan
      const markerTlahuapan = L.marker([19.3333, -98.5833]).addTo(map);
      markerTlahuapan.bindPopup(`
        <div style="font-family: sans-serif; padding: 4px;">
          <h4 style="font-weight: bold; margin-bottom: 4px; color: #ea580c;">Tlahuapan, Puebla</h4>
          <p style="font-size: 12px; margin-bottom: 6px;">Investigación sobre gestión del agua, ecoturismo y Covid-19.</p>
          <a href="#difusion" style="font-size: 11px; color: #0d9488; font-weight: bold; text-decoration: none;">Ver publicaciones &rarr;</a>
        </div>
      `);
    }
  }

  onMount(() => {
    initMap();
  });
</script>

<!-- Hero Section con Foto de Portada -->
<section class="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat" style="background-image: url('{base}/portada.jpg');">
  <!-- Content overlay -->
  <div class="relative z-10 flex items-center justify-center min-h-screen bg-transparent pointer-events-none">
    <div class="text-center text-white px-6 max-w-4xl pointer-events-auto pt-8">
      
      <!-- Tira de Logotipos Institucionales en la parte superior -->
<div class="flex items-center justify-center gap-6 md:gap-8 mb-6 bg-transparent max-w-3xl mx-auto flex-wrap">
  <img src="{base}/unam-logo.png" alt="UNAM" class="h-14 md:h-16 w-auto object-contain drop-shadow" />
  <img src="{base}/iia-logo.png" alt="IIA UNAM" class="h-14 md:h-16 w-auto object-contain drop-shadow" />
  <img src="{base}/seminario-logo.jpeg" alt="Seminario Universitario de Estudios Rurales" class="h-12 md:h-14 w-auto object-contain drop-shadow" />
  <img src="{base}/logo_proyectovalle.jpg" alt="Proyecto Valle Tlaxcala-Puebla" class="h-12 md:h-14 w-auto object-contain drop-shadow rounded" />
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
  Difusión y Publicaciones
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
          El Proyecto Tlaxcala-Puebla es una iniciativa del <strong>Instituto de Investigaciones Antropológicas (IIA)</strong> de la UNAM desde el año 2009. Durante más de 15 años, este proyecto ha documentado los cambios ambientales, políticos, económicos y culturales en pueblos rurales y espacios semiurbanos del centro de México.
        </p>
        <p class="text-gray-700 leading-relaxed academic-text mb-4">
          A través de metodologías etnográficas, trabajo de campo y análisis socioambiental, la iniciativa aborda de manera integral tres ejes fundamentales en todo el territorio de estudio:
        </p>
        <ul class="space-y-3 mb-6 text-gray-700 academic-text pl-5 list-disc">
          <li class="leading-relaxed">
            <strong>Transformaciones en la población, en los territorios y en la vida rural:</strong> Estudio de las reconfiguraciones económicas y las estrategias locales ante crisis locales y globales, como la pandemia de COVID-19.
          </li>
          <li class="leading-relaxed">
            <strong>Hidropolítica, gestión ambiental y luchas por el agua:</strong> Análisis de los efectos de la crisis hídrica, la contaminación, la sobreexplotación y las respuestas de las poblaciones en defensa de los recursos naturales, los territorios y los modos de vida.
          </li>
          <li class="leading-relaxed">
            <strong>Ecoturismo, conservación y producción social de la naturaleza:</strong> Exploración de cómo la conservación, la economía rural y las actividades de turismo transforman la organización social y la relación con el entorno.
          </li>
        </ul>
        <p class="text-gray-700 leading-relaxed academic-text">
          A través de este enfoque transversal, en estos años el proyecto ha construido un panorama sobre la estructuración de las clases sociales, la identidad cultural, las transformaciones territoriales y la reconfiguración sociocultural de las localidades rurales en esta región de Tlaxcala y Puebla. Estos objetivos se han alcanzado con la colaboración permanente entre el equipo de investigación, las poblaciones y las autoridades civiles, políticas y religiosas.
        </p>
      </div>
      
      <!-- Lado derecho: Tarjeta de Nuestro Equipo -->
      <div class="bg-gray-50 p-8 rounded-lg research-card">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6">Investigadores que participan</h3>
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
              <span class="institution">FCPyS-UNAM</span>
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
            Ver semblanzas →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Sección: Seminario Permanente de Antropología, Poder y Ruralidades -->
<section id="seminario" class="py-16 bg-gray-50 border-b">
  <div class="max-w-6xl mx-auto px-6">
    
    <!-- Encabezado del Seminario -->
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Seminario Permanente de Antropología, Poder y Ruralidades
      </h2>
    </div>

    <!-- Foto de Portada / Banner de la Sección -->
    <div class="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-10">
      <img 
        src="{base}/foto_seminario.jpg" 
        alt="Vista aérea del territorio rural del Valle Tlaxcala-Puebla" 
        class="w-full h-full object-cover"
      />
      <!-- Pie de foto superpuesto -->
      <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs md:text-sm italic text-right">
        Vista panorámica del territorio y paisajes rurales en el Valle Tlaxcala-Puebla.
      </div>
    </div>

    <!-- Descripción del Seminario -->
    <div class="mb-12">
      <div class="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-4 text-gray-700 academic-text leading-relaxed">
        <p>
          El seminario es un lugar de encuentro para estudiantes de licenciatura y posgrado, así como para investigadores interesados en temas rurales. Con una perspectiva multidisciplinaria desde la antropología, sociología, geografía y estudios interculturales, se abordan problemáticas del mundo rural como el debilitamiento de las actividades agrícolas, la múltiple ocupación en trabajos precarios y flexibles, la migración laboral; los embates ocasionados por el avance de la frontera agroindustrial, industrial o urbana, que traen aparejados constantes despojos territoriales (a través de la minería, la construcción de infraestructura hidráulica o eólica, la instalación de aeropuertos, la apertura de carreteras, por ejemplo).
        </p>
        <p>
          De igual forma, se ocupa de analizar y discutir cómo los espacios rurales están siendo transformados de productivos a espacios de consumo y/o “contemplación” a través del turismo cultural, religioso o ecológico, o de la creación de áreas naturales protegidas; y el hecho de que la violencia generalizada, gestada por el Estado o la delincuencia, ya es una característica ineludible de la ruralidad en México.
        </p>
        <p>
          El interés del seminario es doble, ya que se ocupa de discutir tanto los procesos como el contexto en el que estas dinámicas toman forma y busca rastrear el papel que las relaciones desiguales de poder tienen en la construcción de los entramados sociales, políticos, económicos, ambientales y culturales. Es por eso que ponemos especial atención en discutir cómo estas problemáticas son experimentadas, negociadas, adaptadas o resistidas de múltiples y diversas maneras a nivel local.
        </p>
        <p>
          Los miembros del seminario realizan trabajo de campo en diferentes localidades rurales. El seminario se ha organized en 5 líneas temáticas generales:
        </p>

        <!-- 5 Líneas Temáticas Generales -->
        <ul class="space-y-2 pt-2 pl-6 list-disc font-semibold text-gray-800">
          <li>Estrategias de sobrevivencia y movilidad laboral (migraciones)</li>
          <li>Problemáticas socioambientales</li>
          <li>Producción y consumo</li>
          <li>Movimientos sociales y resistencias</li>
          <li>Cultura y subjetividades</li>
        </ul>
      </div>
    </div>

    <!-- Apartado de Coloquios y Eventos Académicos (Con los 10 Carteles Históricos) -->
    <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
      <div class="flex items-center justify-between mb-6 border-b pb-3">
        <h3 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span class="text-orange-600">🖼️</span> Coloquios y Eventos Académicos
        </h3>
        <span class="text-xs bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full">
          10 Carteles Históricos
        </span>
      </div>

      <!-- Grilla responsiva de los 10 carteles -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        <!-- Cartel 1 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/uno_coloq.jpg" alt="1er Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/uno_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">I Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 2 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/dos_coloq.jpg" alt="2do Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/dos_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">II Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 3 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/tres_coloq.jpg" alt="3er Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/tres_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">III Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 4 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/cuatro_coloq.jpg" alt="4to Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/cuatro_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">IV Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 5 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/cinco_coloq.jpg" alt="5to Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/cinco_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">V Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 6 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/seis_coloq.jpg" alt="6to Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/seis_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">VI Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 7 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/siete_coloq.jpg" alt="7mo Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/siete_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">VII Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 8 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/ocho_coloq.jpg" alt="8vo Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/ocho_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">VIII Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 9 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/nueve_coloq.jpg" alt="9no Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/nueve_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">IX Coloquio</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

        <!-- Cartel 10 -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div class="relative group overflow-hidden bg-gray-900">
            <img src="{base}/eventos/diez_coloq.jpg" alt="10mo Coloquio" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" />
            <a href="{base}/eventos/diez_coloq.jpg" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">🔍 Ver Cartel Completo</a>
          </div>
          <div class="p-3 text-center">
            <h4 class="font-bold text-gray-800 text-xs mb-1">X Coloquio (2025)</h4>
            <span class="text-[10px] text-gray-500 block">Investigaciones Rurales</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<!-- Sección: Investigación -->
<section id="research" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Proyectos de Investigación
      </h2>
      <p class="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
        Proyectos vigentes y concluidos en la región Tlaxcala-Puebla.
      </p>
    </div>

    <!-- Grilla de Tarjetas / 9 Proyectos de Investigación -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <!-- Proyecto 1 (2026-2028) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2026 - 2028</span>
          <span class="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">PAPIIT IN300426</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Estudio de la organización colectiva del agua potable en pueblos rurales del Valle Tlaxcala-Puebla
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Instituto de Investigaciones Antropológicas UNAM, financiamiento PAPIIT-DGAPA.
        </p>
      </div>

      <!-- Proyecto 2 (2025-2027) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2025 - 2027</span>
          <span class="text-[11px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded">SECIHTI IH-2025-I-257</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Gestión asociativa del agua potable en pueblos rurales del valle Tlaxcala-Puebla
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Financiamiento Proyectos de Humanidades SECIHTI (Secretaría de Ciencia, Humanidades, Tecnología e Innovación).
        </p>
      </div>

      <!-- Proyecto 3 (2022-2025) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2022 - 2025</span>
          <span class="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">PAPIIT IN303322</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Modo de vida en las ruralidades actuales: precariedad, fragmentación y desigualdad en Tlahuapan, Puebla
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Instituto de Investigaciones Antropológicas UNAM, financiamiento PAPIIT-DGAPA.
        </p>
      </div>

      <!-- Proyecto 4 (2022-2024 PRONACE-TÓXICOS) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2022 - 2024</span>
          <span class="text-[11px] bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded">CONACYT No 318962</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Sistema Comunitario de Vigilancia y Monitoreo Ambiental en la Cuenca Atoyac-Zahuapan
        </h3>
        <p class="text-gray-600 text-xs leading-relaxed mb-2">
          <strong>Proyecto específico IIA-UNAM:</strong> Estudio sociocultural sobre la relación entre localidades de la cuenca y uso de compuestos químicos: percepción de toxicidad y riesgo.
        </p>
        <p class="text-gray-500 text-[11px] leading-tight italic">
          PRONACE-TÓXICOS. En colaboración con IIB, IIA, FI UNAM, UATx, UACH, Centro Fray Julián Garcés y Coordinadora Atoyac con Vida.
        </p>
      </div>

      <!-- Proyecto 5 (2022-2024 PRONACE-AGUAS) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2022 - 2024</span>
          <span class="text-[11px] bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded">CONACYT No 318959</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Reapropiación socioambiental para el manejo integral de la cuenca Atoyac-Zahuapan
        </h3>
        <p class="text-gray-600 text-xs leading-relaxed mb-2">
          <strong>Trabajo específico:</strong> Con las localidades rurales de la cuenca del Alto Atoyac en el Valle Puebla-Tlaxcala.
        </p>
        <p class="text-gray-500 text-[11px] leading-tight italic">
          PRONACE-AGUAS. Coordinado desde la UATx en alianza interinstitucional y comunitaria.
        </p>
      </div>

      <!-- Proyecto 6 (2019-2021) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-gray-200 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2019 - 2021</span>
          <span class="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">PAPIIT IN303419</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Estudio etnográfico de pueblos rurales del sur de Tlaxcala especializados en actividades productivas no agrícolas
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Instituto de Investigaciones Antropológicas UNAM, financiamiento PAPIIT-DGAPA.
        </p>
      </div>

      <!-- Proyecto 7 (2015-2020) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-gray-200 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2015 - 2020</span>
          <span class="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">PAPIIT IN300115</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Ruralidades, sujetos sociales y respuestas locales en el valle Puebla-Tlaxcala
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Instituto de Investigaciones Antropológicas UNAM, financiamiento PAPIIT-DGAPA.
        </p>
      </div>

      <!-- Proyecto 8 (2009-2014) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-gray-200 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2009 - 2014</span>
          <span class="text-[11px] bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded">CONACYT CB-98651</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Repensar lo rural y el concepto de nueva ruralidad como propuesta para entender las transformaciones contemporáneas en el Valle Puebla Tlaxcala
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Instituto de Investigaciones Antropológicas UNAM, financiamiento CONACYT.
        </p>
      </div>

      <!-- Proyecto 9 (2009-2013) -->
      <div class="bg-gray-50 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="bg-gray-200 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2009 - 2013</span>
          <span class="text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">PAPIIT IN302709</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug">
          Continuidades y transformaciones socioeconómicas y culturales en el municipio de Nativitas, Tlaxcala ¿hacia la conformación de una nueva ruralidad?
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Instituto de Investigaciones Antropológicas UNAM, financiamiento PAPIIT-DGAPA.
        </p>
      </div>

    </div>
  </div>
</section>
<!-- Sección: Formación y fortalecimiento académico -->
<section id="formacion" class="py-16 bg-gray-50 border-b">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Formación y Fortalecimiento Académico
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Espacios de docencia, formación de estudiantes, tesis dirigidas y colaboraciones académicas institucionales.
      </p>
    </div>

    <!-- Grilla de las 3 Subáreas de Formación (3 columnas en pantallas medianas) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- 1. Docencia -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-2xl mb-4">
            🎓
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Docencia</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Cursos de licenciatura, posgrado y capacitaciones especializadas impartidas por integrantes del proyecto (UNAM, Instituto Mora, CRIM, IIA).
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-orange-600 font-semibold italic">Pendiente de catálogo de cursos</span>
          <span class="text-xs text-gray-400">Ver asignaturas &rarr;</span>
        </div>
      </div>

      <!-- 2. Tesis Dirigidas -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-2xl mb-4">
            📜
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Tesis Dirigidas</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Investigaciones de licenciatura, maestría y doctorado desarrolladas sobre las dinámicas territoriales, hídricas y socioambientales de Tlaxcala y Puebla.
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-teal-700 font-semibold italic">Pendiente de repositorio de tesis</span>
          <span class="text-xs text-gray-400">Ver títulos &rarr;</span>
        </div>
      </div>

      <!-- 3. Colaboraciones Académicas -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl mb-4">
            🤝
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Colaboraciones académicas</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Proyectos e intercambios con académicos, estancias y redes de trabajo de instituciones nacionales e internacionales.
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-emerald-700 font-semibold italic">Pendiente de padrón de colaboradores</span>
          <span class="text-xs text-gray-400">Ver perfiles &rarr;</span>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- Sección: Difusión y Publicaciones -->
<section id="difusion" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Difusión y Publicaciones
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Resultados de investigación, libros, capítulos, artículos científicos y eventos académicos del proyecto.
      </p>
    </div>

   <!-- SUBSECCIÓN 1: LIBROS Y CAPÍTULOS DE LIBRO -->
<div class="mb-14">
  <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
    <span class="text-orange-600">📚</span> Libros y Capítulos de Libro
  </h3>

  <!-- Contenedor de Libros y Capítulos -->
  <div class="space-y-4">

    <!-- LIBROS -->
    <!-- Libro 1 (2025) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2025</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Libro • Coordinación</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco, P. y Salas, H. (Coords.)</strong> (2025). <em>Glosario etnográfico de las ruralidades mexicanas</em>. Secretaría de Desarrollo Institucional UNAM, 320 pp.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-587-807-2</p>
      </div>
      <a href="https://estudiosrurales.sdi.unam.mx/index.php/es/component/sppagebuilder/page/45" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Libro</span> &rarr;
      </a>
    </div>

    <!-- Libro 2 (2017) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2017</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Libro • IIA-UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2017). <em>Ríos de contradicción. Contaminación, ecología política y sujetos rurales en Natívitas, Tlaxcala</em>. México: Instituto de Investigaciones Antropológicas, UNAM.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-02-9214-9</p>
      </div>
      <a href="https://editorialiia.unam.mx/omp/index.php/publicaciones/catalog/book/rios_contradiccion_tlaxcala" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Libro</span> &rarr;
      </a>
    </div>

    <!-- Libro 3 (2014) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2014</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Libro • IIA-UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y Rivermar, Ma. Leticia</strong> (2014). <em>Nativitas, Tlaxcala. La construcción en el tiempo de un territorio rural</em>. IIA-UNAM, 310 pp.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-02-5543-4</p>
      </div>
      <a href="https://www.iia.unam.mx/publicacion/nativitas-tlaxcala-la-construccion-en-el-tiempo-de-un-territorio-rural" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Publicación</span> &rarr;
      </a>
    </div>

    <!-- Libro 4 (2011) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2011</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Libro • Edición</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán, Rivermar, Ma. Leticia y Velasco, Paola (Eds.)</strong> (2011). <em>Nuevas ruralidades. Expresiones de la transformación social en México</em>. Ed. Juan Pablos, PAPIIT – DGAPA, IIA-UNAM, 221 pp.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-02-2393-8</p>
      </div>
      <a href="https://www.iia.unam.mx/publicacion/nuevas-ruralidades-expresiones-de-la-transformacion-social-en-mexico" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Publicación</span> &rarr;
      </a>
    </div>

    <!-- CAPÍTULOS DE LIBRO -->
    <!-- Capítulo 1 (2025) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2025</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, H.</strong> (2025). “Precariedades”. En Velasco, P. y Salas, H. (Coords.) <em>Glosario etnográfico de las ruralidades mexicanas</em>. Secretaría de Desarrollo Institucional UNAM, pp. 24-55.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-587-807-2</p>
      </div>
      <a href="https://estudiosrurales.sdi.unam.mx/index.php/es/component/sppagebuilder/page/45" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Capítulo</span> &rarr;
      </a>
    </div>

    <!-- Capítulo 2 (2025) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2025</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • CLACSO</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, H. y Velasco, P.</strong> (2025). “Historia sociolaboral de la Cuenca Atoyac-Zahuapan en el Altiplano Mexicano”. En Carton de Grammont, H. et al. (Coords.) <em>Mercados de trabajo rurales, desigualdades y vulnerabilidad social en América Latina</em>. CLACSO, Argentina, pp. 323-350.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-987-813-957-9</p>
      </div>
      <a href="https://estudiosrurales.sdi.unam.mx/media/attachments/2025/02/19/mercados-trabajo-rurales.pdf" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver PDF</span> &rarr;
      </a>
    </div>

    <!-- Capítulo 3 (2025) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2025</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • CONAHCYT</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco, P. y Salas, H.</strong> (2025). “Historia socioambiental de la Cuenca Alta del Atoyac-Zahuapan”. En Delgado, A. et al. (Coords.) <em>Problemas socioambientales en la Cuenca del Alto Atoyac: diálogos transdisciplinarios</em>. CONAHCYT, Inst. MORA, pp. 109-128.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-8273-87-4</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Historia%20socioambiental%20de%20la%20Cuenca%20Alta%20del%20Atoyac-Zahuapan" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 4 (2023) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2023</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán</strong> (2023). “El modo de vida rural: vulnerabilidad y desafíos por la pandemia de COVID-19 en Tlahuapan, Puebla”. En Salas, H. y Pérez Castro, A. B. (Eds.) <em>La década COVID en México: afectaciones a las poblaciones Rurales en México</em>. Tomo 3, UNAM, pp. 149-191.
        </p>
        <p class="text-xs text-gray-500 font-mono">e-ISBN: 978-607-30-7278-6</p>
      </div>
      <a href="https://decadacovid.humanidades.unam.mx/wp-content/uploads/DCM_tomo-3_C07.pdf" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver PDF</span> &rarr;
      </a>
    </div>

    <!-- Capítulo 5 (2021) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2021</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • UdeG</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2021). “Sujetos de mezclilla. Especialización y precariedad tóxica en el suroeste de Tlaxcala” (Capítulo 4). Universidad de Guadalajara.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-571-076-1</p>
      </div>
      <a href="https://www.academia.edu/48952789/Sujetos_de_Mezclilla_especializaci%C3%B3n_y_precariedad_t%C3%B3xica_en_el_suroeste_de_Tlaxcala" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Capítulo</span> &rarr;
      </a>
    </div>

    <!-- Capítulo 6 (2021) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2021</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • IIA UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola y Rojas Contreras, Janeth</strong> (2021). “Manufacturando familias precarias. Implicaciones de la producción de pantalones mezclilla en el suroeste de Tlaxcala” (Capítulo 5). Instituto de Investigaciones Antropológicas, UNAM.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-305-237-5</p>
      </div>
      <a href="https://www.humanindex.unam.mx/humanindex/consultas/detalle_capitulos.php?id=33299&rfc=VkVTUDgwMDEwNA==&idi=1" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Capítulo</span> &rarr;
      </a>
    </div>

    <!-- Capítulo 7 (2021) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2021</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • IIA UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán</strong> (2021). “Reacomodos del grupo doméstico rural. Agricultura y pluriactividad en Nativitas, Tlaxcala (México)”. En Pérez Castro, A. et al. (Eds.) <em>Ganarse la vida. La reproducción social en el mundo contemporáneo</em>. IIA UNAM, pp. 103-132.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-30-5237-5</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Reacomodos%20del%20grupo%20dom%C3%A9stico%20rural" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 8 (2018) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2018</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • CEIICH UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Vallejo, Janett y Salas, Hernán</strong> (2018). “Trabajo y educación: ser jóvenes en Tepetitla de Lardizábal, Tlaxcala, un espacio de alta especialización textil y de confección”. En Contreras, E. y Contreras, F. (Coords.) <em>Empleo, capacitación y jóvenes rurales de México</em>. Ed. CEIICH UNAM, pp. 111-131.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-30-0464-0</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Trabajo%20y%20educaci%C3%B3n:%20ser%20j%C3%B3venes%20en%20Tepetitla" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 9 (2015) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2015</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • BUAP</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González Nava, Leonor Alejandra</strong> (2015). "Las fiestas patronales en los espacios rurales actuales. El caso de San Miguel del Milagro, Nativitas, Tlaxcala", en Fuentes Díaz, Antonio (ed.). <em>Conflictos y sujetos emergentes. Episodios en la transformación rural neoliberal</em>. Puebla: ICSH "Alfonso Vélez Pliego", BUAP: 197-222.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-487-910-0</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Las%20fiestas%20patronales%20en%20los%20espacios%20rurales%20actuales" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 10 (2015) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2015</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Artículo / Capítulo • Ruta Antropológica</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González Nava, Leonor Alejandra y Ramírez, Led</strong> (2015). "El mercado del México-Mágico: una crítica visual al Programa de los Pueblos Mágicos". <em>Ruta Antropológica</em>, Unidad de Posgrado Antropología, 2(3): 48-61.
        </p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20art%C3%ADculo:%20El%20mercado%20del%20M%C3%A9xico-M%C3%A1gico" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 11 (2014) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2014</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • IIA UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2014). “Re-pensando el pasado agrícola para entender el presente rural” (Capítulo 7). IIA, UNAM.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-02-5543-4</p>
      </div>
      <a href="https://www.academia.edu/21062351/Re_pensando_el_pasado_agr%C3%ADcola_para_entender_el_presente_rural" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Capítulo</span> &rarr;
      </a>
    </div>

    <!-- Capítulo 12 (2013) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2013</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • IIA UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y Velasco, Paola</strong> (2013). “Paisaje cultural y pertenencia socioterritorial en San Miguel del Milagro, Nativitas, Tlaxcala”. En Salas, H. et al. (Eds.) <em>Identidad y Patrimonio cultural en América Latina. La diversidad en el mundo globalizado</em>. IIA – UNAM, pp. 301-329.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-02-4993-8</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Paisaje%20cultural%20y%20pertenencia%20socioterritorial" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 13 (2012) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2012</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • BUAP</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2012). “Nueva ruralidad y ecología política. ¿Cómo acercarnos a las transformaciones socioambientales en Natívitas, Tlaxcala?” (Capítulo 9). BUAP, Puebla.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-487-455-6</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Nueva%20ruralidad%20y%20ecolog%C3%ADa%20pol%C3%ADtica" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

    <!-- Capítulo 14 (2011) -->
    <div class="p-5 bg-gray-50/70 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2011</span>
          <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Capítulo de Libro • IIA UNAM</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2011). “Cambios, reacomodos y permanencias en San Andrés Cholula, Puebla: la construcción de una forma actual de ruralidad” (Capítulo 5). En: <em>Nuevas ruralidades. Expresiones de la transformación social en México</em>. IIA, UNAM y Juan Pablos Editor.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-02-2393-8</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20cap%C3%ADtulo:%20Cambios,%20reacomodos%20y%20permanencias%20en%20San%20Andr%C3%A9s%20Cholula" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

  </div>
</div>

<!-- SUBSECCIÓN 2: ARTÍCULOS ACADÉMICOS -->
<div class="mb-14">
  <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
    <span class="text-teal-700">📄</span> Artículos Académicos
  </h3>

  <div class="space-y-4">

    <!-- Artículo 1 (2026) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2026</span>
          <span class="text-xs text-gray-500 font-semibold">Empiria. Revista de metodología de Ciencias Sociales</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y González-Fuente, Iñigo</strong> (2026). “The inexorable and precarious work-consumption articulation in the transition to adulthood of young people in rural Mexico”. <em>Empiria</em>, 67: 77-95.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 1139-5737 | DOI: empiria.67.2026.48253</p>
      </div>
      <a href="https://revistas.uned.es/index.php/empiria/article/view/48253/34407" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 2 (2024) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2024</span>
          <span class="text-xs text-gray-500 font-semibold">Anthropological Notebooks</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González-Fuente, Iñigo, Salas Quintanal, Hernán y López Miguel, Celia</strong> (2024). “Towards a hegemonic consumption-based model of shopping-tourist-residential territory (consumpnity): A comparative case study in China, Mexico, Spain, and the United Arab Emirates”. <em>Anthropological Notebooks</em>, 30(2): 1–27.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 1408-032X</p>
      </div>
      <a href="https://doi.org/10.5281/zenodo.14149025" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver DOI</span> &rarr;
      </a>
    </div>

    <!-- Artículo 3 (2024) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2024</span>
          <span class="text-xs text-gray-500 font-semibold">Encrucijadas. Revista Crítica de Ciencias Sociales</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González-Fuente, Iñigo, Salas Quintanal, Hernán y López Miguel, Celia</strong> (2024). “Consumidad: una categoría para el análisis de las prácticas de explotación socio-espacial en el medio rural a nivel global”. <em>Encrucijadas</em>, 24(2): a2408.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN-e: 2174-6753</p>
      </div>
      <a href="https://recyt.fecyt.es/index.php/encrucijadas/article/view/102954" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 4 (2023) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2023</span>
          <span class="text-xs text-gray-500 font-semibold">Anales de Antropología</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola & González Nava, Leonor</strong> (2023). “La luz del ecoturismo: la producción social de las luciérnagas y las trampas de la fe neoliberal”. <em>Anales de Antropología</em>.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN (E): 2448-6221 | ISSN (P): 0185-1225</p>
      </div>
      <a href="HTTPS://DOI.ORG/10.22201/IIA.24486221E.2023.85391" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver DOI</span> &rarr;
      </a>
    </div>

    <!-- Artículo 5 (2022) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2022</span>
          <span class="text-xs text-gray-500 font-semibold">Profesorado. Revista de Currículum y Formación de Profesorado</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas Quintanal, Hernán, González-Fuente, Iñigo y Hernández Flores, Daniel</strong> (2022). “Mobility and vulnerability in the school-to-work transition of rural youth in Mexico”. <em>Profesorado</em>, 26(3): 32-50.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 1138-414X | ISSNe: 1989-6395</p>
      </div>
      <a href="https://revistaseug.ugr.es/index.php/profesorado/article/view/22766" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 6 (2022) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2022</span>
          <span class="text-xs text-gray-500 font-semibold">Boletín del GT CLACSO</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas Quintanal, Hernán</strong> (2022). “Precariedad laboral en pueblos rurales del centro de México”. <em>Boletín del GT CLACSO Trabajo agrario, desigualdades y ruralidades</em>, junio # 6: 28-40.
        </p>
      </div>
      <a href="https://www.clacso.org/boletin-6-trabajo-agrario-y-ruralidades-en-transformacion/" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Boletín</span> &rarr;
      </a>
    </div>

    <!-- Artículo 7 (2022) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2022</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Latinoamericana de Estudios Rurales</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas Quintanal, Hernán y González-Fuente, Iñigo</strong> (2022). “Gentrificación rural en México. Fragmentar el espacio, desplazar la civitas, explotar lo cotidiano”. <em>Revista Latinoamericana de Estudios Rurales</em>, 7(13): 1-27.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 2525-1635</p>
      </div>
      <a href="http://id.caicyt.gov.ar/ark:/s25251635/fh90m1wu2" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 8 (2021) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2021</span>
          <span class="text-xs text-gray-500 font-semibold">Conservation Science and Practice</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Lewis, Sara M.; Thancharoen, Anchana; Wong, Choong Hay; López Palafox, Tania; Velasco Santos, Paola et al.</strong> (2021). “Firefly tourism: Advancing a global phenomenon toward a brighter future”. <em>Conservation Science and Practice</em>.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN (E): 2578-4854</p>
      </div>
      <a href="https://conbio.onlinelibrary.wiley.com/doi/10.1111/csp2.391" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 9 (2021) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2021</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Antropología Experimental</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González-Fuente, Iñigo y Salas Quintanal, Hernán</strong> (2021). “Fragmentar, descolectivizar, acumular. Surgimiento y desarrollo de la consumidad del Val’Quirico, México”. <em>Revista Antropología Experimental</em>, nº 21, 07: 91-106.
        </p>
      </div>
      <a href="https://dx.doi.org/10.17561/rae.v21.5397" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver DOI</span> &rarr;
      </a>
    </div>

    <!-- Artículo 10 (2021) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2021</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Mexicana de Sociología</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, H., Velasco, P., González, A. y López, C.</strong> (2021). “La pandemia de COVID-19: Significados y consecuencias en los modos de vida en Tlahuapan, Puebla”. <em>Revista Mexicana de Sociología</em>, vol. 83, núm. especial, 159-191.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 0188-2503 | e-ISSN: 2594-0651</p>
      </div>
      <a href="http://revistamexicanadesociologia.unam.mx/index.php/rms/article/view/60172/53164" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 11 (2020) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2020</span>
          <span class="text-xs text-gray-500 font-semibold">Collectivus, Revista de Ciencias Sociales</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2020). “El ciclo hidropolítico en Tlahuapan, Puebla: reflexiones en el Capitaloceno”. <em>Collectivus, Revista de Ciencias Sociales</em>.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN (E): 2382-4018</p>
      </div>
      <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=7671897" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 12 (2020) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2020</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Antropología Americana</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán</strong> (2020). “Ruralidades interrumpidas. El comportamiento de los ciclos agrícola y festivo en tiempos de pandemia”. <em>Revista Antropología Americana</em>, vol. 5, n° 10, pp. 193-222.
        </p>
      </div>
      <a href="https://revistasipgh.org/index.php/anam/article/view/817/1225" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 13 (2019) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2019</span>
          <span class="text-xs text-gray-500 font-semibold">Biblio3W. Revista Bibliográfica de Geografía y Ciencias Sociales</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González-Fuente, Iñigo y Salas Quintanal, Hernán</strong> (2019). “Plantar la Toscana en México. Comunidad-consumo, patrimonio franquicia y gentrificación rural”. <em>Biblio3W</em>, vol. XXIV, nº 1.272, pp. 1-25.
        </p>
      </div>
      <a href="http://revistes.ub.edu/index.php/b3w/article/view/28439/29317" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 14 (2019) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2019</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Euroamericana de Antropología</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González-Fuente, Iñigo y Salas Quintanal, Hernán</strong> (2019). “La consumidad: vida cotidiana, consumo y espacio rural”. <em>Revista Euroamericana de Antropología</em>, n° 7, pp. 13-26.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 2387-1555</p>
      </div>
      <a href="http://revistas.usal.es/index.php/2387-1555/article/view/20127" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 15 (2018) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2018</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Mexicana de Sociología</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González-Fuente, Iñigo, Salas Quintanal, Hernán y Hernández Flores, Daniel</strong> (2018). “Jóvenes rurales y empleo en Tlaxcala, México: trayectorias inciertas”. <em>Revista Mexicana de Sociología</em>, vol. 80, n° 3, pp. 549-575.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 0188-2503</p>
      </div>
      <a href="http://revistamexicanadesociologia.unam.mx/index.php/rms/article/view/57737/51191" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 16 (2017) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2017</span>
          <span class="text-xs text-gray-500 font-semibold">Alteridades</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2017). “Deshilando etnográficamente la mezclilla: materialidad y entramados socioambientales paradójicos”. <em>Alteridades</em>.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN (P): 0188-7017, ISSN (E): 2448-850X</p>
      </div>
      <a href="https://www.scielo.org.mx/scielo.php?pid=S0188-70172017000200095&script=sci_abstract" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 17 (2017) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2017</span>
          <span class="text-xs text-gray-500 font-semibold">Revista San Gregorio</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2017). “Mezclilla, consumo y la configuración de los sujetos rurales neoliberales en Tlaxcala, México”. <em>Revista San Gregorio</em>, monográfico: “Del arado al smartphone: consumo, empleo, precariedad en el medio rural”.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN (P): 1390-7247, ISSN (E): 2528-7907</p>
      </div>
      <a href="https://revista.sangregorio.edu.ec/index.php/REVISTASANGREGORIO/article/view/397" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 18 (2017) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2017</span>
          <span class="text-xs text-gray-500 font-semibold">Revista San Gregorio</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y González de la Fuente, Iñigo</strong> (2017). “De la producción al consumo. La transformación de los sujetos rurales”. <em>Revista San Gregorio</em>, n° 18, pp. 6-19.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 2528-7907</p>
      </div>
      <a href="http://revista.sangregorio.edu.ec/index.php/REVISTASANGREGORIO/issue/view/14/showToc" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Revista</span> &rarr;
      </a>
    </div>

    <!-- Artículo 19 (2014) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2014</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Papeles de población</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y González de la Fuente, Iñigo</strong> (2014). “La reproducción de la pluriactividad laboral entre los jóvenes rurales en Tlaxcala, México”. <em>Papeles de población</em>, vol. 20, núm. 79, pp. 281-307.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 1405-7425</p>
      </div>
      <a href="http://www.redalyc.org/articulo.oa?id=11230198010" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Redalyc</span> &rarr;
      </a>
    </div>

    <!-- Artículo 20 (2013) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2013</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Márgenes</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y Velasco, Paola</strong> (2013). “Los rostros rurales de dominación en el neoliberalismo actual”. <em>Revista Márgenes</em>, vol. 10, n° 13, pp. 7-14.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 0718-4034 | eISSN: 0719-4463</p>
      </div>
      <a href="http://revistamargenes.weebly.com/uploads/1/1/1/8/11182415/salas-velasco_margenes_13_dic_2013.pdf" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver PDF</span> &rarr;
      </a>
    </div>

    <!-- Artículo 21 (2013) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2013</span>
          <span class="text-xs text-gray-500 font-semibold">Revista Gazeta de Antropología</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Salas, Hernán y González de la Fuente, Iñigo</strong> (2013). “Nueva Ruralidad: procesos sociolaborales y desagrarización de una sociedad local en México (1980-2010)”. <em>Gazeta de Antropología</em>, 29 (2).
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 2340-2792 | DOI: 10.30827/Digibug.28504</p>
      </div>
      <a href="http://www.gazeta-antropologia.es/?p=4295" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver Artículo</span> &rarr;
      </a>
    </div>

    <!-- Artículo 22 (2012) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2012</span>
          <span class="text-xs text-gray-500 font-semibold">Anthropological Notebooks</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>González de la Fuente, Iñigo y Salas, Hernán</strong> (2012). “Community Projects in the Era of Globalization: The Case of a Local Rural Society in Mexico”. <em>Anthropological Notebooks</em>, 18 (1): 41–64.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISSN: 1408-032X</p>
      </div>
      <a href="http://www.drustvo-antropologov.si/AN/PDF/2012_1/Anthropological_Notebooks_XVIII_1_delaFuente.pdf" target="_blank" rel="noopener noreferrer" class="shrink-0 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Ver PDF</span> &rarr;
      </a>
    </div>

    <!-- Artículo 23 (2009) -->
    <div class="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div class="space-y-1 max-w-4xl">
        <div class="flex items-center gap-2">
          <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">2009</span>
          <span class="text-xs text-gray-500 font-semibold">Cuadernos de Trabajo de Posgrado. Estudios Regionales</span>
        </div>
        <p class="text-gray-800 text-sm md:text-base leading-relaxed academic-text">
          <strong>Velasco Santos, Paola</strong> (2009). “Formas actuales de ruralidad: el caso de la región sociocultural de Cholula, Puebla”. <em>Cuadernos de Trabajo de Posgrado. Estudios Regionales</em>.
        </p>
        <p class="text-xs text-gray-500 font-mono">ISBN: 978-607-7613-25-1</p>
      </div>
      <a href="mailto:contacto@ejemplo.com?subject=Solicitud%20de%20art%C3%ADculo:%20Formas%20actuales%20de%20ruralidad" class="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm">
        <span>Solicitar por correo</span> ✉
      </a>
    </div>

  </div>
</div>

    <!-- Subsección: VIDEOS DE CONFERENCIAS Y PONENCIAS -->
    <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm mt-8 mb-8">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-3">
        <span class="text-orange-600">🎥</span> Videos de Conferencias y Ponencias
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Video 1 -->
        <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-gray-800 text-base mb-2">
              Gestión comunitaria e hidropolítica en el Valle Tlaxcala-Puebla
            </h4>
            <p class="text-gray-600 text-xs leading-relaxed mb-4">
              Análisis sobre las dinámicas de organización colectiva, gestión asociativa del agua potable y respuestas comunitarias ante la contaminación e hidropolítica en la región.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=WniosHPojIM&t=2820s" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors pt-3 border-t border-gray-100"
          >
            ▶️ Ver Conferencia en YouTube →
          </a>
        </div>

        <!-- Video 2 -->
        <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-gray-800 text-base mb-2">
              Transformaciones rurales, precariedad y modos de vida contemporáneos
            </h4>
            <p class="text-gray-600 text-xs leading-relaxed mb-4">
              Discusión sobre los cambios socioeconómicos, trabajo precario, fragmentación territorial y resiliencia rural en el centro de México.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=IcZ5EnMlNGQ&t=5180s" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors pt-3 border-t border-gray-100"
          >
            ▶️ Ver Conferencia en YouTube →
          </a>
        </div>

        <!-- Video 3 -->
        <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-gray-800 text-base mb-2">
              Ecoturismo, conservación y producción social de la naturaleza
            </h4>
            <p class="text-gray-600 text-xs leading-relaxed mb-4">
              Exploración de cómo las áreas protegidas y el ecoturismo transforman las economías locales y la organización comunitaria en Tlaxcala y Puebla.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=skFIO2OARAA&t=35s" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors pt-3 border-t border-gray-100"
          >
            ▶️ Ver Conferencia en YouTube →
          </a>
        </div>

        <!-- Video 4 -->
        <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <h4 class="font-bold text-gray-800 text-base mb-2">
              Riesgo socioambiental y monitoreo comunitario en la Cuenca Atoyac-Zahuapan
            </h4>
            <p class="text-gray-600 text-xs leading-relaxed mb-4">
              Presentación de resultados e investigación-acción sobre percepción de toxicidad, riesgo y salud en comunidades afectadas por contaminación hídrica.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=7qigfOTzd6k&t=109s" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors pt-3 border-t border-gray-100"
          >
            ▶️ Ver Conferencia en YouTube →
          </a>
        </div>

        <!-- Video 5 -->
        <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between md:col-span-2">
          <div>
            <h4 class="font-bold text-gray-800 text-base mb-2">
              Antropología de las ruralidades: memoria, territorio y resistencias
            </h4>
            <p class="text-gray-600 text-xs leading-relaxed mb-4">
              Reflexión etnográfica sobre la defensa de la vida, el agua y la memoria histórica frente a procesos de despojo en los territorios rurales.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=fhH8aQ-7AQU&t=271s" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors pt-3 border-t border-gray-100"
          >
            ▶️ Ver Conferencia en YouTube →
          </a>
        </div>

      </div>
    </div>

    <!-- Subsección: PLÁTICAS Y TALLERES -->
    <div class="bg-gray-50/60 p-6 rounded-xl border-2 border-dashed border-gray-300 mb-8">
      <h4 class="font-bold text-gray-800 mb-2 flex items-center gap-2">
        <span>🗣️️</span> Pláticas y Talleres
      </h4>
      <p class="text-gray-500 text-xs leading-relaxed mb-3">
        Lista de charlas de divulgación, talleres y eventos de comunicación social impartidos en comunidades e instituciones.
      </p>
      <span class="text-xs text-orange-600 font-medium italic">Próximamente registros</span>
    </div>
  </div>
</section>

<!-- Sección: Acervo -->
<section id="acervo" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Acervo
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Colección de recursos visuales, registros de campo y mapas desarrollados en la región Tlaxcala-Puebla.
      </p>
    </div>

    <!-- Grilla de las 2 Subáreas de Acervo -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- 1. Acervo Fotográfico -->
      <div class="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-8 flex flex-col justify-between shadow-sm hover:border-orange-400 transition-colors">
        <div>
          <div class="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-3xl mb-5">
            📷
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-3">
            Acervo Fotográfico
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Galería visual y fotográfica que documenta el paisaje, las faenas comunitarias, las asambleas, los procesos productivos y el trabajo de campo etnográfico en las localidades de la región.
          </p>
        </div>

        <div class="pt-4 border-t border-gray-200 flex items-center justify-between">
          <span class="text-xs text-orange-600 font-semibold italic">Pendiente de galería de imágenes</span>
          <span class="text-xs text-gray-400 font-medium">Ver fotos &rarr;</span>
        </div>
      </div>

      <!-- 2. Cartografía Participativa -->
      <div class="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-8 flex flex-col justify-between shadow-sm hover:border-teal-500 transition-colors">
        <div>
          <div class="w-14 h-14 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-3xl mb-5">
            🗺️
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-3">
            Repositorio de Mapas
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            Mapas participativos, diagnósticos socioambientales espaciales, capas geográficas y modelos territoriales elaborados mediante Sistemas de Información Geográfica (SIG) y talleres colaborativos.
          </p>
        </div>

        <div class="pt-4 border-t border-gray-200 flex items-center justify-between">
          <span class="text-xs text-teal-700 font-semibold italic">Pendiente de mapas y visores interactivos</span>
          <span class="text-xs text-gray-400 font-medium">Ver cartografía &rarr;</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Sección: Vinculación -->
<section id="vinculacion" class="py-16 bg-gray-50 border-b">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Vinculación Social e Institucional
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Procesos de retribución social, trabajo colaborativo con actores locales e intercambio con instituciones de la región.
      </p>
    </div>

    <!-- Grilla de Vinculación (3 arriba, 2 abajo) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      
      <!-- 1. Monografías -->
<div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between md:col-span-3">
  <div>
    <div class="flex items-center justify-between mb-4 border-b pb-3">
      <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">
        <span class="text-orange-600">📖</span> Monografías Socio-antropológicas de la Región
      </h3>
      <span class="text-xs bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full">
        Publicación 2025
      </span>
    </div>
    
<!-- 1. Monografías y Cuadernillos Comunitarios (Pasa a abarcar todo el ancho) -->
    <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between mb-8">
      <div>
        <div class="flex items-center justify-between mb-4 border-b pb-3">
          <h3 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span class="text-orange-600">📖</span> Monografías y Cuadernillos Comunitarios
          </h3>
          <span class="text-xs bg-orange-100 text-orange-800 font-semibold px-3 py-1 rounded-full">
            Publicaciones 2025
          </span>
        </div>

        <p class="text-gray-600 text-xs md:text-sm mb-6 leading-relaxed">
          <strong>Elaborados por:</strong> Paola Velasco Santos, Hernán Salas Quintanal, Celia López Miguel y Leonor Alejandra González Nava (IIA-UNAM, Proyectos CONAHCYT 318959, 318962 y PAPIIT-UNAM IN303322).
        </p>

        <!-- Grilla de los 7 Cuadernillos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <!-- 1. San Rafael Ixtapalucan -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Tlahuapan, Puebla</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">San Rafael Ixtapalucan</h4>
              <p class="text-xs text-gray-500 mb-3">Historia socioambiental, bosques, ejidos, gestión del agua y producción de calcetín.</p>
            </div>
            <a 
              href="{base}/documentos/san_rafael_cuad.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

          <!-- 2. Santa María Tepetzala -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Atlangatepec, Tlaxcala</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">Santa María Tepetzala</h4>
              <p class="text-xs text-gray-500 mb-3">Historia social, vida actual, patrimonio y cartografía comunitaria.</p>
            </div>
            <a 
              href="{base}/documentos/cuadernillo_santa_maria_tepetzala.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

          <!-- 3. San Pedro Ecatepec -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Atlangatepec, Tlaxcala</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">San Pedro Ecatepec</h4>
              <p class="text-xs text-gray-500 mb-3">Luchas por la tierra, haciendas, jaguarismo y transformaciones rurales.</p>
            </div>
            <a 
              href="{base}/documentos/cuadernillo_san_pedro_ecatepec.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

          <!-- 4. Santa Rita Tlahuapan -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Tlahuapan, Puebla</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">Santa Rita Tlahuapan</h4>
              <p class="text-xs text-gray-500 mb-3">Bosques de la Sierra Nevada, agua, ameyales, ecoturismo y luciérnagas.</p>
            </div>
            <a 
              href="{base}/documentos/cuadernillo_santa_rita_tlahuapan.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

          <!-- 5. Villa de las Flores -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Atlangatepec, Tlaxcala</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">Villa de las Flores</h4>
              <p class="text-xs text-gray-500 mb-3">Historia habitacional, rellenos sanitarios, reciclaje e industrias.</p>
            </div>
            <a 
              href="{base}/documentos/cuadernillo_villa_de_las_flores.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

          <!-- 6. Santa Ana Nopalucan -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Nopalucan, Tlaxcala</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">Santa Ana Nopalucan</h4>
              <p class="text-xs text-gray-500 mb-3">Pasado lacustre, Laguna del Rosario, chinampas y feria de la quesadilla.</p>
            </div>
            <a 
              href="{base}/documentos/cuadernillo_santa_ana_nopalucan.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

          <!-- 7. San Luis Apizaquito -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col justify-between">
            <div>
              <span class="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Apizaco, Tlaxcala</span>
              <h4 class="text-sm font-bold text-gray-800 mt-2 mb-1">San Luis Apizaquito</h4>
              <p class="text-xs text-gray-500 mb-3">Historia textil, Laguna del Ojito, patrimonio industrial y manantiales.</p>
            </div>
            <a 
              href="{base}/documentos/cuadernillo_san_luis_apizaquito.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-3 py-2 rounded transition-colors text-center shadow-sm"
            >
              📄 Descargar PDF
            </a>
          </div>

        </div>
      </div>
    </div>

      <!-- 2. Carteles -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-2xl mb-4">
            🎨
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Carteles Divulgativos</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Materiales gráficos e infografías diseñados para la síntesis y difusión clara de problemáticas socioambientales.
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-teal-700 font-semibold italic">Pendiente de galería de carteles</span>
          <span class="text-xs text-gray-400">Ver materiales &rarr;</span>
        </div>
      </div>

      <!-- 3. Devolución de conocimiento -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-2xl mb-4">
            🔄
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Devolución de Conocimiento</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Talleres, asambleas informativas y entrega de diagnósticos participativos a los ejidos y poblaciones colaboradoras.
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-amber-700 font-semibold italic">Pendiente de registros de retribución</span>
          <span class="text-xs text-gray-400">Ver actividades &rarr;</span>
        </div>
      </div>

    </div>

    <!-- Segunda Fila (2 centradas) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      
      <!-- 4. Cartografía colaborativa -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl mb-4">
            🗺️
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Cartografía Colaborativa</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Mapas y talleres de mapeo participativo construidos de la mano con los habitantes de la región.
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-emerald-700 font-semibold italic">Pendiente de mapas compartidos</span>
          <span class="text-xs text-gray-400">Ver mapas &rarr;</span>
        </div>
      </div>

      <!-- 5. Vinculación con instituciones -->
      <div class="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-2xl mb-4">
            🏛️
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Vinculación Institucional</h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Convenios, mesas de trabajo y proyectos coordinados con dependencias gubernamentales, universidades y colectivos.
          </p>
        </div>
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-xs text-blue-700 font-semibold italic">Pendiente de lista de colaboradores</span>
          <span class="text-xs text-gray-400">Ver convenios &rarr;</span>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- Sección: Mapa Interactivo -->
<section id="mapa" class="py-16 bg-white border-b">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Mapa interactivo de los lugares en que se ha trabajado
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Visualización de los municipios, localidades y regiones de Puebla y Tlaxcala donde se desarrollan los proyectos de investigación y trabajo con poblaciones.
      </p>
    </div>

    <!-- Cuerpos del Mapa -->
    <div class="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
      <!-- Div donde se renderiza el mapa -->
      <div id="mapa-region" class="w-full h-[450px] bg-gray-100 z-10"></div>

      <!-- Leyenda o banner informativo sobre el mapa -->
      <div class="p-4 bg-orange-50 border-t border-orange-100 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-700 gap-2">
        <span class="flex items-center gap-2 font-medium">
          <span class="w-3 h-3 rounded-full bg-orange-600 inline-block"></span>
          Haz clic en las ubicaciones para explorar los proyectos y publicaciones asociados a cada territorio.
        </span>
        <span class="text-orange-700 font-semibold italic">
          [Maqueta preliminar — Se incorporarán más polígonos y puntos del equipo]
        </span>
      </div>
    </div>
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
          Seminario Universitario Interdisciplinario de Estudios Rurales - UNAM
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
