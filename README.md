# Calculadora Web - DevOps CI/CD

Aplicación web de una calculadora moderna desarrollada con HTML, CSS y JavaScript, implementando un flujo completo de **Integración Continua (CI)** y **Despliegue Continuo (CD)** mediante GitHub Actions y GitHub Pages.

---

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una calculadora interactiva con diseño moderno tipo aplicación móvil, que permite realizar operaciones básicas:

- Suma ➕
- Resta ➖
- Multiplicación ✖
- División ➗
- Porcentaje %
- Cambio de signo (+/-)

Además, incluye un pipeline automatizado que valida, prueba y despliega la aplicación de forma continua.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (Diseño moderno tipo app)
- JavaScript
- Git y GitHub
- GitHub Actions (CI/CD)
- GitHub Pages (Despliegue)

---


---

## ⚙️ Pipeline CI/CD

El flujo de trabajo automatizado incluye:

1. **Integración continua**
   - Validación del proyecto
   - Instalación de dependencias
   - Ejecución de pruebas

2. **Liberación continua**
   - Generación del artefacto (`dist/`)

3. **Despliegue continuo**
   - Publicación automática en GitHub Pages

---

## 🔧 Scripts del proyecto

### Preparación del entorno
```bash
./scripts/setup-release-env.sh

#Pruebas realizadas
| ID    | Prueba | Resultado esperado       |
| ----- | ------ | ------------------------ |
| PF-01 | 7 + 3  | 10                       |
| PF-02 | 9 - 4  | 5                        |
| PF-03 | 6 × 2  | 12                       |
| PF-04 | 8 ÷ 2  | 4                        |
| PF-05 | AC     | Limpia pantalla          |
| PF-06 | %      | Convierte a decimal      |
| PF-07 | Deploy | Página visible en GitHub |

