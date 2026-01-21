# ¡Bienvenido a tu juego de adivinar el número secreto!

El objetivo es sencillo: descubrir un **número de 5 dígitos distintos** antes de que se acaben los intentos. Cada fila del tablero representa un intento, y los colores te dan pistas sobre tus aciertos.

## Cómo jugar

1. Pulsa los botones del 0 al 9 para ingresar números en la fila actual.  
2. Cuando completes los 5 números de la fila, pulsa **Comprobar**.  
3. Observa los colores de las celdas:  
   - 🟩 → número correcto en la posición correcta.  
   - 🟨 → número correcto pero en otra posición.  
   - 🟥 → número incorrecto.  
4. Continúa intentando en las siguientes filas hasta:  
   - Adivinar los 5 números (¡felicidades!)  
   - O agotar los 6 intentos (entonces perderás y verás el número secreto).  
5. Pulsa **Reset** para reiniciar el juego y generar un nuevo número secreto.

## Tecnologías usadas

- HTML5  
- CSS3  
- JavaScript  

> Todo está hecho con tecnología web básica, para que puedas jugar directamente desde tu navegador.

## Funciones principales

- `generarNumeroSecreto()`: crea un número secreto de 5 dígitos únicos.  
- `pulsar(numero)`: coloca el número que pulsaste en la casilla correspondiente de la fila actual.  
- `comprobarFila()`: revisa la fila actual y actualiza los colores según los aciertos.  
- `colorearcelda()`: cambia el color de las casillas para indicar aciertos, casi aciertos o errores.  
- `reset()`: reinicia el tablero y genera un nuevo número secreto.

## Notas importantes

- Cada fila admite exactamente 5 números.  
- Solo hay 6 intentos por partida.  
- El número secreto siempre tiene dígitos únicos.
