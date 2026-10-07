# PECS 2028 — sitio preliminar para GitHub Pages

Sitio estático bilingüe (inglés/español), adaptable a móviles, sin dependencias, cookies, analítica ni formularios. Incluye el logo preliminar proporcionado por el equipo. No es un sitio publicado ni un repositorio remoto todavía.

## Publicar sin usar la terminal
1. Iniciar sesión en GitHub y crear un repositorio, por ejemplo `pecs-2028`. Para GitHub Pages con GitHub Free, usar un repositorio público. Verificar las condiciones del plan si se desea un repositorio privado.
2. Descomprimir el ZIP. Subir **el contenido** a la raíz del repositorio: `index.html`, `es.html`, la carpeta `assets`, `README.md` y `.nojekyll`. No subir solamente el ZIP ni una carpeta contenedora. GitHub permite arrastrar archivos/carpetas en **Add file → Upload files**. `.nojekyll` puede estar oculto; si no se sube, crearlo desde **Add file → Create new file**.
3. Confirmar los cambios en la rama `main`.
4. Abrir **Settings → Pages**. En **Build and deployment**, elegir **Deploy from a branch**. Seleccionar `main` y `/ (root)`, y guardar.
5. Esperar el despliegue. GitHub mostrará la URL del sitio en Settings → Pages; el formato habitual es `https://USUARIO.github.io/pecs-2028/` (o el nombre de la organización).
6. Revisar ambos idiomas, navegación móvil y enlaces. La publicación hace públicos los archivos e imágenes; subir solo información aprobada. No añadir contraseñas, datos de asistentes ni claves API.

## Vista local
Abrir `index.html` directamente en el navegador. Para servirlo por HTTP: ejecutar `python3 -m http.server 8000` en esta carpeta y abrir `http://localhost:8000`.

## Archivos
- `index.html`: portada en inglés.
- `es.html`: versión en español.
- `assets/styles.css`: colores, fuentes, tamaños y diseño.
- `assets/pecs-2028-logo.jpg`: logo preliminar. Reemplazarlo por una versión definitiva cuando se apruebe.
- `assets/config.js`: correo público y enlace de plataforma. Al dejarlos vacíos no se muestran botones activos de contacto o plataforma.
- `assets/main.js`: navegación móvil y enlaces configurables.
- `.nojekyll`: indica a GitHub Pages que sirva los archivos estáticos directamente.

## Cambios editoriales
Actualizar ambos HTML para mantener idiomas consistentes. Buscar `To be announced` y `Por anunciar` para sustituir pendientes. No usar los plazos, sede ni cuotas de 2018 como información de 2028.

Antes del lanzamiento definitivo confirmar:
- Fechas exactas y sede (incluida accesibilidad).
- Comité organizador y científico; instituciones y permisos para sus logos.
- Temas, ponentes, formatos de presentación y programa.
- Plazos, cuotas, políticas de cancelación y plataforma de pago/registro.
- Correo oficial, alojamiento y orientación de viaje.
- Revisión/aprobación del texto y del logo por el comité.

## Sciencesconf
Al aprobarse la plataforma, añadir su URL HTTPS a `conferencePlatformUrl` en `assets/config.js`. Aparecerá un botón en la sección de participación. El sitio estático NO procesa resúmenes, registros ni pagos. Si hay enlaces separados para resúmenes e inscripción, añadirlos explícitamente a ambos HTML y retirar los avisos «Aún no disponible» / «Not yet open» solo cuando realmente estén abiertos. No se han implementado API, sincronización ni migración automática con Sciencesconf.

## Dominio propio (opcional)
Primero comprobar que el comité controla el dominio. Configurarlo en Settings → Pages y añadir los registros DNS que GitHub indique. No se ha creado un archivo CNAME ni se asume acceso a `pecs-conferences.org`. Activar HTTPS cuando GitHub permita hacerlo. No modificar DNS sin autorización.

## Criterio de contenido y derechos
La portada de http://2018.pecs-conferences.org/ se revisó como referencia funcional de fechas, participación y sede. Este proyecto usa un diseño nuevo, sin copiar imágenes ni código de esa edición. El apartado «History of PECS» conserva el texto histórico aportado por el usuario y su atribución al Prof. J. van de Kreeke; la versión en español incluye una traducción editorial. Confirmar los permisos de reproducción y revisar la traducción antes del lanzamiento definitivo. El logo procede de la página Conference Logo del espacio de trabajo. El comité debe confirmar los derechos y autorizar su publicación. No se impone una licencia pública sobre el logo ni sobre los contenidos.

## Historia de PECS
Se añadió «History of PECS» dentro de About en `index.html`, y «Historia de PECS» dentro de Conferencia en `es.html`. El original inglés se conserva íntegro en cinco párrafos, con la autoría en negritas y cursiva. La lista histórica mencionada en el texto no fue proporcionada; una nota editorial lo aclara, sin inventar conferencias, presidentes ni instituciones. Los estilos de este apartado se encuentran al final de `assets/styles.css`.
