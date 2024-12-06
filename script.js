import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  let result = ""
  for (let i = 0; i < args.length; i++) {
    const currentElement = args[i]
    result += currentElement
  }
  return result.toUpperCase()
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // count vor for-Schleife deklarieren

    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
    } else {
      // do nothing
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " " || currentElement === " ") {
      count = count + 1
    } else {
      // do nothing
    }
  }

  return count
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  // checks whether it contains upper case letters
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "." || currentElement === " ") {
      continue //ignore
    }
    if (currentElement === currentElement.toUpperCase()) {
      return true
    }
  }
  return false
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe11(args) {
  const input = args

  // speichere den ACII-Code vom ersten Zeichen
  const asciiCode = input.charCodeAt(0)

  // Gib den ASCII-Code zurück

  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe06(args) {
  // checks whether it contains special characters
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (/^[a-zA-Z0-9\s]$/.test(currentElement)) {
      continue //ignore letters, numbers and spaces
      // a-z -> kleine Buchstaben
      // A-Z -> große Buchstaben
      // 0-9 -> Ziffern
      // \s -> Leerzeichen
    }
    return true
  }
  return false
}

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(input) {
  for (let i = 0; i < input.length - 2; i++) {
    const currentElement = input[i]
    // checkt nach der genauen Abfolge der Zeichen 'u', 'n', 'd'
    // gibt true zurück, wenn das Wort 'und' gefunden wird, egal wie es geschrieben ist
    if (input[i] + input[i + 1] + input[i + 2] === "und") {
      // wenn eine Zuordnung gefunden wird, gebe sofort true zurück
      return true
    } // zählt die Leerzeichen und Sonderzeichen mit
  }

  return false
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(input) {
  let result = ""
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      // wenn es 'e' oder 'E' ist, wird es durch '3' ersetzt
      // 3“ an das Ergebnis anhängen
      result += "3"
    } else {
      // wenn es nicht 'e' oder 'E' ist, bleibt es unverändert
      // anhängen des ursprünglichen Zeichens ans Ergebnis
      result += currentElement
    }
  }
  return result
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe12(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "E") {
      return i + 1 // in JavaScript beginnen Array-Indizes bei 0, das heisst, das erste Element eines Arrays steht bei Index 0, das zweite Element bei Index 1 und so weiter
    }
  }
  return 0 // 0 zurückgeben, wenn kein „e“ gefunden wird
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe13(input) {
  // die Zeichenkette läuft von hinten nach vorne durch
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] === "e" || input[i] === "E") {
      // gibt die Position des letzten "e"s vom Ende der Zeichenkette zurück
      return input.length - i
    }
  }
  return 0
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)
