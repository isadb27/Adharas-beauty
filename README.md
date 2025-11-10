# Adhara´s Beauty - Algoritmos 2025

**Adhara´s Beauty** es un ecommerce enfocado en el maquillaje y la belleza personalizada. Aquí puedes:

- Descubrir los best sellers y productos en tendencia alrededor del mundo.
- Encontrar tu match perfecto: tonos y maquillajes que se adaptan a ti.
- Ser miembro de la comunidad y acceder a beneficios exclusivos.

Nuestro objetivo es crear un espacio donde la belleza sea inclusiva, accesible y personalizada para cada persona.

---

## 🧠 Estructura del Proyecto (Scaffolding)

```bash
Adharas-beauty/
├── dist/                        # Archivos de distribución
├── node_modules/                # Dependencias del proyecto
├── public/                      # Archivos públicos como imágenes
├── public/                     
│   ├── index.html              # HTML principal
│   ├── images/                 # Imágenes estáticas
│   └── icons/                  # Íconos (favicon, logos, etc.)
│
├── src/
│   ├── assets/                 # Recursos (fuentes, imágenes locales)
│   ├── components/             # Componentes UI reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductFilter.tsx
│   │   ├── ProductCarousel.tsx
│   │   ├── Banner.tsx
│   │   ├── MembershipCard.tsx
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   │
│   ├── layouts/                # Layouts principales
│   │   ├── MainLayout.ts
│   │   └── AuthLayout.ts
│   │
│   ├── pages/                  # Vistas del e-commerce
│   │   ├── Home.tsx
│   │   ├── Category.tsx        # (ej: lips, skincare, etc.)
│   │   ├── ProductDetail.tsx
│   │   ├── Cart.tsx
│   │   ├── Membership.tsx
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   │
│   ├── services/               # Conexión a API o datos fake
│   │   ├── ProductService.tsx
│   │   └── AuthService.tsx
│   │
│   ├── store/                  # Estado global (ej: carrito, usuario)
│   │   ├── cartSlice.tsx
│   │   ├── userSlice.tsx
│   │   └── index.tsx
│   │
│   ├── styles/                 # Estilos globales o módulos CSS
│   │   └── globals.css
│   │
│   ├── utils/                  # Funciones helper
│   │   └── formatPrice.tsx      # Calcular descuentos y membresías
│   │   ├── applyDiscount.tsx    # Funciones para manejar carrito (subtotal, total, etc.)
│   │   ├── cartHelpers.tsx       # Validar emails en registro/login   
│   │   └── validateEmail.tsx       
│   └── types/                  # Definiciones de tipos TS
│       ├── product.tsx
│       └── user.tsx
│
├── .gitignore
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md


✍️ Convención de Commits
Para mantener un historial limpio y coherente, seguimos la siguiente convención de nombres de commits:

Tipo	Descripción
Fix	Corrección de errores
FEAT	Nuevas características o funcionalidades
STYLE	Cambios de formato que no afectan la lógica del código
REFACTOR	Cambios en la estructura del código sin corregir errores
TEST	Modificaciones o agregados en pruebas
CHORE	Tareas de mantenimiento o configuración del proyecto
breaking	Cambios que rompen compatibilidad con versiones anteriores
DOCS	Cambios en la documentación
CREATE COMPONENT	Creación de un nuevo componente

🚀 Tecnologías Usadas
TypeScript
REACT
HTML / CSS
TAILWIND

Web Components

Eslint

Firebase (por definir si aplica)
