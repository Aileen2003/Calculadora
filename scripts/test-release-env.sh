#!/usr/bin/env bash
set -euo pipefail

echo "==> Ejecutando pruebas del entorno de liberacion"

# Validaciones de estructura
test -f index.html || (echo "Error: no existe index.html" && exit 1)

# Validar referencias basicas
grep -qi "<html" index.html || (echo "Error: index.html no parece un HTML valido" && exit 1)

# Si existe package.json y script test, ejecutar
if [ -f package.json ]; then
  if npm run | grep -q "test"; then
    echo "Ejecutando npm test..."
    npm test
  else
    echo "No existe script test en package.json, se usan pruebas basicas."
  fi
fi

echo "Pruebas completadas correctamente"