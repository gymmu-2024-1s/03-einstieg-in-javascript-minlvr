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
  // Intialisiert eine leere Zeichenkette, um das konkatenierte Ergebnis zu speichern
  let result = ""
  for (let i = 0; i < args.length; i++) {
    // Abrufen des aktuell bearbeiteten Elements
    const currentElement = args[i]
    // hängt das aktuelle Element an die Ergebniszeichenkette an
    result += currentElement
  }
  // Rückgabe der verketteten Zeichenfolge in Grossbuchstaben
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
  // Initialisiert die Eingabe und die Variablen zur Überprüfung
  const input = args
  let hasLetter = false
  let hasUppercase = false

  // Iteriert über jedes Zeichen in der Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Überprüft, ob das aktuelle Zeichen ein Buchstabe ist
    if (currentElement.match(/[a-z]/i)) {
      hasLetter = true
    }

    // Überprüft, ob das aktuelle Zeichen ein Großbuchstabe ist
    if (
      currentElement === currentElement.toUpperCase() &&
      currentElement !== currentElement.toLowerCase()
    ) {
      hasUppercase = true
    }
  }
  // Gibt zurück, ob sowohl ein Buchstabe als auch ein Großbuchstabe vorkommen sind
  return hasLetter && hasUppercase
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

export function aufgabe08(args) {
  const input = args
  // Intialisiert eine leere Zeichenkette zur Speicherung des Ergebnisses
  let result = ""

  // Iteriert über jedes Zeichen in der Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Prüft, ob das aktuelle Zeichen ein kleingeschriebenes "e" ist
    if (currentElement === "e") {
      // Prüft, ob das nächste Zeichen ein kleingeschriebenes "g" ist
      if (i < input.length - 1 && input[i + 1] === "g") {
        // Wenn ja wird das ursprüngliche Zeichen an die Ergebniszeichenkette angehängt
        result += currentElement
      } else {
        // Ist dies nicht der Fall, wird eine "3" an die Ergebniszeichenkette angehängt
        result += "3"
      }
    } else {
      // Ist dies nicht der Fall, wird das ursprüngliche Zeichen an die Ergebniszeichenkette angehängt
      result += currentElement
    }
  }
  // Rückgabe der geänderten Zeichenfolge
  return result
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe12(args) {
  // Initialisiert die Eingabe und die Position
  const input = args
  let position = null

  // Iteriert über jedes Zeichen in der Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Überprüft, ob das aktuelle Zeichen ein "e" ist
    if (currentElement === "e") {
      // Wenn ja, aktualisiert die Position und bricht die Schleife ab
      position = i
      break
    }
  }
  // Gibt die Position zurück oder null, wenn das "e" nicht gefunden wird
  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe19(args) {
  const input = args
  // Intialisiert ein leeres Array, um die duplizierten Zeichen zu speichern
  const result = []

  // Iteriert über jedes Zeichen in der Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    // Ermittelt das aktuelle Zeichen, das verarbeitet wird.
    const currentElement = input[i]

    // Schiebt das aktuelle Zeichen zweimal in das Ergebnisfeld
    result.push(currentElement)
    result.push(currentElement)
  }
  // Fügt die Zeichen im Ergebnis-Array zu einer einzigen Zeichenkette zusammen und gibt diese zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe17(args) {
  const input = args
  // Das Array zur Aufnahme der Teilzeichenfolgen
  const totalList = []
  // Das Array zur Aufnahme der aktuellen Teilzeichenkette
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === " ") {
      // Fügt die aktuelle Teilzeichenkette zur Gesamtliste hinzu
      totalList.push(currentList.join(""))
      // Zurücksetzen der aktuellen Teilzeichenkette
      currentList.length = 0
    } else {
      // Fügt das aktuelle Zeichen zur aktuellen Teilzeichenkette hinzu
      currentList.push(currentElement)
    }
  }
  // Fügt die letzte Teilzeichenkette zur Gesamtliste hinzu
  totalList.push(currentList.join(""))
  // Rückgabe der Gesamtliste
  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  // Speichern der Eingabezeichenfolge in einer Variablen
  const input = args

  // Ruft eine weitere Funktion zum Extrahieren von Name und Alter aus dem Eingabestring auf
  const nameAndAge = aufgabe17(input)

  // Initialisieren eines leeren Arrays zum Speichern der Satzteile
  const result = []

  // Fügt den ersten Teil des Satzes zum Array hinzu
  result.push("Sie heissen ")

  // Fügt den Namen in den Satz ein
  result.push(nameAndAge[0])

  // Fügt weitere Satzteile zum Array hinzu
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  // Die Satzteile zu einer einzigen Zeichenkette zusammenfügen und diese zurückgeben
  return result.join() // Hinweis: Ich habe nach der Verknüpfung Klammern hinzugefügt
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

export function aufgabe09(args) {
  // Überprüft, ob die Eingabe eine Zeichenkette ist
  const input = args

  // Überprüft, ob die Länge der Eingabezeichenkette genau 6 Zeichen beträgt
  return input.length === 6
}
linkupExerciseHandler("[data-click=aufgabe9]", aufgabe09)

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
  if (input.length < 2) {
    return input
  }
  let result = "" // Initialisieren einer leeren Ergebniszeichenkette
  for (let i = 0; i < input.length; i++) {
    // Wenn dies das erste Zeichen ist, wird das LETZTE Zeichen an das Ergebnis angehängt
    if (i === 0) {
      result += input[input.length - 1]
    }
    // Wenn dies das letzte Zeichen ist, wird das erste Zeichen an das Ergebnis angehängt
    else if (i === input.length - 1) {
      result += input[0]
    }
    // Bei allen anderen Zeichen wird das Zeichen unverändert angefügt
    else {
      //Der aktuelle Wert von result wird genommen und das Zeichen bei Index i der Eingabezeichenkette wird an das Ende der Zeichenkette angehängt
      result += input[i]
    }
  }
  // gibt die resultierende Zeichenfolge mit vertauschten ersten und letzten Zeichen zurück
  return result
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(input) {
  const length = input.length

  // Berechnet den mittleren Index, indem die Bits um eine Position nach rechts verschieben werden,
  // die Länge durch 2 geteilt und auf die nächste Ganzzahl abgerundet wird
  let middleIndex = length >> 1
  // Initialisiert eine leere Ergebniszeichenkette
  let result = ""
  if (length % 2 === 0) {
    // Wenn die Länge gerade ist, werden die beiden mittleren Zeichen gelöscht
    for (let i = 0; i < length; i++) {
      // Wenn der aktuelle Index nicht einer der beiden mittleren Indices ist, wird das Zeichen an die Ergebniszeichenkette angehängt
      if (i < middleIndex - 1 || i > middleIndex + 1) {
        result += input[i]
      }
    }
  } else {
    // Wenn die Länge ungerade ist, wird das einzelne mittlere Zeichen gelöscht
    for (let i = 0; i < length; i++) {
      // Wenn der aktuelle Index nicht der mittlere Index ist, wird das Zeichen an die Ergebniszeichenkette angehängt
      if (i < middleIndex || i > middleIndex) {
        result += input[i]
      }
    }
  }

  return result
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(input) {
  const firstChar = input[0]
  const secondChar = input[1]

  // Vergleicht die ersten beiden Zeichen und vertauscht sie gegebenfalls
  if (firstChar > secondChar) {
    // Wenn das erste Zeichen grösser als das zweite Zeichen ist, werden sie vertauscht.
    let result = secondChar + firstChar
    for (let i = 2; i < input.length; i++) {
      result += input[i]
    }
    return result
  } else {
    // Wenn das erste Zeichen kleiner oder gleich dem zweiten Zeichen ist, werden sie nicht vertauscht.
    return input
  }
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(input) {
  // Prüft, ob die Eingabe bereits eine Zahl ist
  // Dies prüft den Typ der Eingabe, um festzustellen, ob es sich um eine Zahl handelt
  if (typeof input === "number") {
    // Wenn ja, sofort "true" zurückgeben
    return true
  } else {
    // Ist dies nicht der Fall, versucht es, sie in eine Zahl umzuwandeln
    // Hier wird die Funktion Zahl() verwendet, um die Eingabe in eine Zahl umzuwandeln
    const num = Number(input)
    // Prüft, ob die umgewandelte Zahl nicht NaN (Not a Number) ist
    // NaN ist der einzige Wert, der nicht gleich sich selbst ist, daher funktioniert diese Prüfung
    // Wenn die Zahl nicht NaN ist, handelt es sich um eine gültige Zahl, also wird true zurückgegeben
    return num === num
  }
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(input) {
  // Aufteilung der EIngabe in ein Array von substrings getreenten Teilzeichenfolgen
  const parts = input.split(" ")

  // Prüft, ob es genau zwei Teile gibt
  if (parts.length !== 2) {
    // Falls nicht ist die Rückgabe eine Fehlermeldung
    return "Error: Input must contain exactly two numbers separated by a space."
  }

  // versucht, die beiden Teile als Zahlen zu analysieren
  const num1 = parseFloat(parts[0])
  const num2 = parseFloat(parts[1])

  // Prüft, ob beide Teile gültige Zahlen sind
  if (isNaN(num1) || isNaN(num2)) {
    // Falls nicht ist die Rückgabe eine Fehlermeldung
    return "Error: Input must contain two valid numbers separated by a space."
  }

  // Berechnet und gibt die Summe der beiden Zahlen zurück
  return "The sum is: " + (num1 + num2)
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe14(args) {
  // Initialisiert die Eingabe und die Anzahl der "e"s
  const input = args
  let count = 0
  // Iteriert über jedes Zeichen in der Eingabezeichenkette
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Überprüft, ob das aktuelle Zeichen ein "e" ist
    if (currentElement === "e") {
      // Wenn ja, inkrementiert die Anzahl der "e"s
      count++
      // Wenn die Anzahl der "e"s 3 erreicht, gibt die Funktion die aktuelle Position zurück
      if (count === 3) {
        return i
      }
    }
  }
  // Wenn die Schleife beendet ist und die Anzahl der "e"s noch nicht 3 erreicht hat, gibt die Funktion -1 zurück
  return -1
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)
