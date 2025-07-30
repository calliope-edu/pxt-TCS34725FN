You will find the English ReadMe at the end of the document.

# TCS34725FN TGB Farbsensor MakeCode-Erweiterung für Calliope mini

Diese MakeCode-Erweiterung ermöglicht die einfache Ansteuerung des Farbsensors **TCS34725FN TGB** mit dem **Calliope mini**. Der Sensor misst präzise RGB-Farben und Helligkeit und kommuniziert über den Grove A0 Konnektor des Calliope mini (I2C).

## 🔧 Installation

Diese Erweiterung kann direkt in das [MakeCode-Editor](https://makecode.calliope.cc/) Projekt eingebunden werden:

1. Öffne [makecode.calliope.cc](https://makecode.calliope.cc/)
2. Erstelle ein neues Projekt
3. Klicke auf das Zahnrad ⚙️ oben rechts → **Erweiterungen**
4. Füge folgenden GitHub-Link ein: https://github.com/calliope-edu/pxt-TCS34725FN


## 📦 Funktionen

Die Erweiterung bietet folgende Blöcke zur Steuerung des TCS34725FN Farbsensors:

- `initialisiere Farbsensor`: Initialisiert den Sensor und bereitet ihn auf Messungen vor.
- `Lese Farbwert (Rot, Grün, Blau, Helligkeit)`: Gibt den jeweiligen Farbkanal als Zahl zurück.
- `Lese Farbe als Zahl`: Gibt eine Zahl zurück, die einer erkannten Farbe zugeordnet ist.
- `Lese Farbname`: Gibt den Namen der erkannten Farbe als Text aus.

Die Blöcke sind im MakeCode-Editor unter der Kategorie `TCS34725` verfügbar.

## 🧪 Beispiel

```blocks
basic.forever(function () {
    let farbe = TCS34725.getColorName()
    basic.showString(farbe)
})
```

# TCS34725FN TGB Color Sensor Extension for Calliope mini

This MakeCode extension enables easy control of the **TCS34725FN TGB** color sensor with the **Calliope mini**. The sensor accurately measures RGB color values and brightness and communicates via Grove connector A0 (I2C).

## 🔧 Installation

You can add this extension directly to your [MakeCode Editor](https://makecode.calliope.cc/) project:

1. Open [makecode.calliope.cc](https://makecode.calliope.cc/)
2. Create a new project
3. Click on the gear icon ⚙️ in the top right corner → **Extensions**
4. Paste the following GitHub link:  
   `https://github.com/calliope-edu/pxt-TCS34725FN`

## 📦 Features

The extension provides the following blocks to interact with the TCS34725FN color sensor:

- `initialize color sensor`: Initializes the sensor and prepares it for measurements.
- `read color value (red, green, blue, brightness)`: Returns the value of the selected color channel.
- `read color as number`: Returns a number corresponding to the detected color.
- `read color name`: Returns the name of the detected color as text.

These blocks can be found in the MakeCode editor under the category `TCS34725`.

## 🧪 Example

```blocks
basic.forever(function () {
    let color = TCS34725.getColorName()
    basic.showString(color)
})
```
This example continuously reads the detected color and displays its name on the Calliope mini.



## Supported targets

  * pxt/calliopemini

## License

MIT
