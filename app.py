# app.py
from calculator import sumar, restar, multiplicar, dividir

def pedir_numero(mensaje: str) -> float:
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Error: ingresa un número válido (ej: 10, 3.5).")

def mostrar_menu() -> None:
    print("\n--- CALCULADORA SIMPLE ---")
    print("1) Sumar")
    print("2) Restar")
    print("3) Multiplicar")
    print("4) Dividir")
    print("5) Salir")

def main() -> None:
    while True:
        mostrar_menu()
        opcion = input("Elige una opción (1-5): ").strip()

        if opcion == "5":
            print("¡Hasta luego!")
            break

        if opcion not in {"1", "2", "3", "4"}:
            print("Opción inválida. Intenta de nuevo.")
            continue

        a = pedir_numero("Ingresa el primer número: ")
        b = pedir_numero("Ingresa el segundo número: ")

        try:
            if opcion == "1":
                resultado = sumar(a, b)
                print(f"Resultado: {resultado}")
            elif opcion == "2":
                resultado = restar(a, b)
                print(f"Resultado: {resultado}")
            elif opcion == "3":
                resultado = multiplicar(a, b)
                print(f"Resultado: {resultado}")
            elif opcion == "4":
                resultado = dividir(a, b)
                print(f"Resultado: {resultado}")
        except ZeroDivisionError as e:
            print(f" Error: {e}")

if __name__ == "__main__":
    main()