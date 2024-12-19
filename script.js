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
  const result = []

  // nur noch Buchstaben und Lerzeichen bleiben übrig
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      // Grossbuchstabe
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Kleinbuchstabe
      result.push(currentElement)
    } else if (ascii === 32) {
      // Leerzeichen
      result.push(currentElement)
    }
  }

  //Jetzt kann man noch mehrere Leerzeichen am Stück haben, die müssen noch gefiltert werden
  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // hier sind 2 Leerzeichen hintereinander, das erste ignorieren
    } else {
      result2.push(currentElement)
    }
  }
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  return count + 1
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

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  totalList.push(currentList.join(""))
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  const nameAndAge = aufgabe17(input)
  const result = []

  result.push("Sie heissen ")

  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  return result.join
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

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

export function aufgabe10(input) {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return regex.test(input)
  // ^: beginn der Zeichenfolge
  // #: das #-Zeichen, das ein RGB-Hex-Code beginnt
  // ([A-Fa-f0-9]{6}: 6 hexadezimale Ziffern
  // ([A-Fa-f0-9]{3}: 3 hexadezimale Ziffern
  // $: ende der Zeichenfolge
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe9(input) {
  const result = []
  if (input.length === 6) {
    result.push(true)
  } else {
    result.push(false)
  }
  return result[0]
  // die Funktion überprüft die Länge der Eingabezeichenfolge mit der Eigenschaft "length".
  // Wenn die Länge genau 6 Zeichen beträgt, gibt die Funktion "true" zurück Ansonsten gibt die Funktion "false" zurück.
}
linkupExerciseHandler("[data-click=aufgabe9]", aufgabe9)

export function aufgabe15(input) {
  const result = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      // Beendet die Schleife, sobald ein Leerzeichen gefunden wird
      break // Beendet die Ausführung der Schleife sofort und springt zur nächsten Befehl
    }
    result.push(input[i])
  }
  // Gibt die Zeichenkette zurück, die aus den Elementen des result-Arrays besteht
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(input) {
  // Liest die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste

  const result = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "$") {
      // Beendet die Schleife, sobald das Zeichen '$' gefunden wird
      break
    }
    result.push(input[i])
  }
  const secondPart = input.slice(result.length + 1)

  return [result.join(""), secondPart]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe20(input) {
  const result = []
  for (let i = 0; i < input.length; i++) {
    // Prüft, ob das aktuelle Zeichen ein '.' ist
    if (input[i] === ".") {
      // Prüft, ob nach dem '.' kein Leerzeichen folgt
      if (i < input.length - 1 && input[i + 1] !== " ") {
        // Wenn nicht, sofort "false" zurückgeben
        return false // Wird die Zeichenkette überprüft, ohne dass ein Fehler gefunden wird, wird "true" zurückgegeben.
      }
    }
  }
  return true // Leerzeichen nach jedem '.'
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(input) {
  const result = []
  // Iteriert über die Eingabezeichenkette vom Ende zum Anfang
  for (let i = input.length - 1; i >= 0; i--) {
    // Jedes Zeichen wird in das Ergebnisfeld einfügt
    result.push(input[i])
  }
  // fügt das Ergebnis-Array mit der join-Methode zu einer Zeichenkette zusammen
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(input) {
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "k" || currentElement === "K") {
      // Wenn das Zeichen 'k' oder 'K' ist, wird es zu dem Ergebnisfeld hinzugefügt und beende die Schleife
      result.push(currentElement)
      break
    }

    // ersetzt alle anderen Zeichen durch '_'.
    result.push("_")
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(input) {
  const firstCharacter = input.charAt(0)
  // Erstellt eine neue Zeichenkette, indem das erste Zeichen, die ursprüngliche Eingabe und erneut das erste Zeichen aneinanderhängt
  const result = firstCharacter + input + firstCharacter

  // Rückgabe der geänderten Zeichenfolge
  return result
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(input) {
  // Prüft, ob die Eingabezeichenfolge mindestens 2 Zeichen enthält
  if (input.length < 2) {
    return input // Falls nicht, wird die ursprüngliche Zeichenkette zurückgegeben
  }
  // Ermittelt das erste Zeichen der Eingabezeichenfolge
  const firstCharacter = input.charAt(0)
  // ruft das letzte Zeichen der Eingabezeichenfolge ab
  const lastCharacter = input.charAt(input.length - 1)
  // Erstellt eine neue Zeichenkette durch das Verketten des letzten Zeichens, des mittleren Zeichens und des ersten Zeichens
  let result = lastCharacter
  for (let i = 1; i < input.length - 1; i++) {
    result += input.charAt(i)
  }
  result += firstCharacter
  return result
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(input) {
  let result = ""
  let count = 0

  for (let i = 0; i < input.length; i++) {
    if (count === getMiddleIndex(input)) {
      i++
      if (hasTwoMiddleCharacters(input)) {
        i++
      }
    } else {
      result += input.charAt(i)
    }
    count++
  }

  return result
}

function getMiddleIndex(input) {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    count++
  }
  return count / 2
}

function hasTwoMiddleCharacters(input) {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    count++
  }
  return count === count + count
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(input) {
  if (input.length < 2) {
    return input
  }

  const firstChar = input[0]
  const secondChar = input[1]

  if (firstChar > secondChar) {
    return secondChar + firstChar + input.slice(2)
  } else {
    return input
  }
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(input) {
  for (let i = 0; i < input.length; i++) {
    const ascii = input.charCodeAt(i)
    if (ascii < 48 || ascii > 57) {
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(input) {
  const parts = input.split(" ")
  if (parts.length !== 2) {
    return "Error: Input must contain two numbers separated by a space."
  }
  const ascii1 = parts[0].charCodeAt(0)
  const ascii2 = parts[1].charCodeAt(0)
  if (ascii1 < 48 || ascii1 > 57 || ascii2 < 48 || ascii2 > 57) {
    return "Error: Both parts must be numbers."
  }
  return ascii1 - 48 + (ascii2 - 48)
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)
