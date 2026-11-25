# Estela · Pintura profesional — Landing page

Sitio estático (HTML + CSS + JS, sin dependencias). Se puede publicar tal cual en Netlify, Vercel, GitHub Pages o cualquier hosting.

## 1. Configura tus datos (obligatorio)

Edita **`js/config.js`**:

| Campo | Qué poner |
|---|---|
| `email` | El correo donde quieres recibir las solicitudes |
| `whatsapp` | Tu número en formato internacional, solo dígitos (ej. `56912345678`) |
| `phoneDisplay` | Cómo se muestra el número en la página |
| `whatsappMode` | `"auto"` (abre WhatsApp al enviar), `"button"` (solo muestra el botón) u `"off"` |
| `coverage` | Tu zona de cobertura |
| `hours` | Horario de atención que aparece en el chat de WhatsApp |

Mientras `email` y `whatsapp` tengan los valores de ejemplo, el formulario **no envía nada** (solo muestra el mensaje de éxito para pruebas).

## 2. Activa el correo (una sola vez)

El formulario envía a tu correo mediante [FormSubmit](https://formsubmit.co) (gratis, sin registro).
La **primera** vez que se envíe el formulario con tu correo configurado, FormSubmit te enviará un
correo de activación: ábrelo y haz clic en *Activate*. Desde ahí, cada solicitud llega a tu bandeja
con todos los datos en una tabla, y puedes responder directamente al cliente.

## 3. Reemplaza las fotos por tus trabajos

Las imágenes actuales son fotos de referencia de Unsplash. Para usar las tuyas:

1. Copia tus fotos a `assets/img/` y tus videos a `assets/video/` (formato `.mp4`, idealmente < 10 MB).
2. **Galería de proyectos:** edita la lista `GALLERY` al inicio de `js/main.js`. Cada ítem es:
   ```js
   { cat: "exterior", title: "Fachada en Ñuñoa", type: "image", src: "assets/img/fachada-nunoa.jpg", size: "wide" }
   { cat: "oficinas", title: "Oficina en timelapse", type: "video", src: "assets/video/oficina.mp4", poster: "assets/img/oficina.jpg", size: "" }
   ```
   Categorías: `exterior`, `interior`, `techos`, `departamentos`, `oficinas`, `jardines`, `empresas`, `negocios`, `reparacion`.
   `size`: `""` normal, `"tall"` alta, `"wide"` ancha.
3. **Servicios, hero y diseño para negocios:** cambia los `src` de las `<img>` en `index.html`.
4. **Antes / después:** pon dos fotos reales del mismo proyecto en la sección `#beforeAfter` de `index.html`
   y elimina la línea `filter: ...` de `.ba__before` en `css/styles.css` (hoy simula el "antes").

## 4. Ver en local

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```
Luego abre http://localhost:8080
