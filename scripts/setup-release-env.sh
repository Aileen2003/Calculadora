#!/usr/bin/env bash
set -euo pipefail

echo "==> Preparando entorno de liberacion"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js no esta instalado"
  exit 1
fi

echo "Node version:"
node -v

echo "NPM version:"
npm -v || true

mkdir -p dist
mkdir -p reports

# Si existe package.json, instalar dependencias
if [ -f package.json ]; then
  echo "package.json encontrado, instalando dependencias..."
  npm ci
else
  echo "No existe package.json. Se continua en modo estatico."
fi

# Validar archivos minimos
test -f index.html || (echo "Falta index.html" && exit 1)

echo "Entorno listo"