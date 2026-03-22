#!/usr/bin/env bash
set -euo pipefail

echo "==> Generando despliegue"

rm -rf dist
mkdir -p dist

# Copiar archivos principales del sitio
cp index.html dist/

if [ -d css ]; then
  cp -r css dist/
fi

if [ -d js ]; then
  cp -r js dist/
fi

if [ -d assets ]; then
  cp -r assets dist/
fi

echo "Contenido de dist:"
find dist -maxdepth 3 -type f | sort

echo "Artefacto listo para despliegue"