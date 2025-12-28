# 📝 To-Do List - TP - Lopez Merino Maria Fernanda @chimki
Deploy: https://tp-react-lopezmerino.netlify.app/

## 📋 Descripción del Proyecto

Aplicación web interactiva para gestionar tareas diarias desarrollada con **React** y **Vite**. Permite crear, editar, completar y eliminar tareas con un sistema de prioridades visual y persistencia de datos local.

### ✨ Características Principales

- Crear, editar y eliminar tareas
- Sistema de prioridades (Baja, Media, Alta) con slider visual degradado
- Marcar tareas como completadas con efecto visual de tachado
- Filtros por estado: Todas, Completadas y Pendientes
- Persistencia de datos con LocalStorage
- Interfaz amigable con diseño natural 
- Diseño responsive con grid adaptable
- Tooltips informativos en todos los botones
- Diálogo de confirmación personalizado para eliminar tareas
- Validación de campos (mínimo 4 caracteres)

---

## 🛠️ Requisitos para Clonar

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** (viene incluido con Node.js)
- **Git** (para clonar el repositorio)

---

## 🚀 Instrucciones de Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Lopez-Merin0/TP-React.git
cd TP_Final
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Compilar para producción (opcional)

```bash
npm run build
```

---

## 📦 Dependencias Principales

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "vite": "^7.3.0"
}
```

---

## 🎨 Mejoras de UX (User Experience)

### 1. **Sistema de Tooltips Interactivos**
- Cada botón muestra información contextual al pasar el mouse
- Colores diferenciados por acción:
  - 🟢 Verde: Añadir/Completar tarea
  - 🔵 Azul: Información de prioridad
  - 🟠 Naranja: Editar
  - 🔴 Rojo: Cancelar
  - 🟢 Turquesa: Guardar
  - ⚫ Negro: Eliminar

### 2. **Diálogo de Confirmación**
- Reemplaza el `alert` nativo del navegador
- Diseño coherente con la estética de la aplicación
- Animación suave de entrada (slide down)
- Botones claramente diferenciados (Eliminar/Cancelar)

### 3. **Sistema de Filtros Inteligente**
- Mensajes contextuales según el filtro activo:
  - "No hay tareas, añade una nueva" (sin filtro)
  - "No hay tareas completadas" (filtro completadas)
  - "No hay tareas pendientes" (filtro pendientes)

### 4. **Feedback Visual Inmediato**
- Las tareas completadas se muestran con:
  - Texto tachado
  - Fondo verde claro
  - Opacidad reducida
- Badge de estado (PENDIENTE/REALIZADA) con colores distintivos

### 5. **Validación de Entrada**
- Mensajes de error claros y visibles
- Mínimo 4 caracteres para crear/editar tareas
- Prevención de tareas vacías

### 6. **Diseño Responsive**
- Grid adaptable que reorganiza las tarjetas según el tamaño de pantalla
- Mínimo 280px por tarjeta, máximo aprovechamiento del espacio

### 7. **Efectos de Hover y Transiciones**
- Botones con efecto de escala al pasar el mouse
- Tarjetas que se elevan ligeramente al hacer hover
- Transiciones suaves en todos los elementos interactivos

### 8. **Persistencia de Datos**
- Uso de LocalStorage para guardar tareas
- Las tareas persisten al recargar la página
- Sincronización automática con cada cambio


---

## 📸 Capturas de Pantalla

Para ver las capturas de pantalla de la aplicación, consulta el archivo [screenshots.md](./screenshots.md)

---

## 👨‍💻 Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos personalizados con variables CSS
- **LocalStorage API** - Persistencia de datos local

---

## 📝 Estructura del Proyecto

```
TP_Final/
├── src/
│   ├── components/
│   │   ├── Form.jsx           # Formulario de nueva tarea y filtros
│   │   ├── TodoList.jsx       # Lista de tareas
│   │   ├── Todo.jsx           # Tarjeta individual de tarea
│   │   └── ConfirmDialog.jsx  # Diálogo de confirmación
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```