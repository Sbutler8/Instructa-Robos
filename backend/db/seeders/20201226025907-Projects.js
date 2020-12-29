'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
        name: 'Analog Read Serial',
        description: 'Read a potentiometer, print its state out to the Arduino Serial Monitor',
        code: `
        /*
        AnalogReadSerial

        Reads an analog input on pin 0, prints the result to the Serial Monitor.
        Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
        Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

        This example code is in the public domain.

        http://www.arduino.cc/en/Tutorial/AnalogReadSerial
      */
      // the setup routine runs once when you press reset:
      void setup() {
        // initialize serial communication at 9600 bits per second:
        Serial.begin(9600);
      }

      // the loop routine runs over and over again forever:
      void loop() {
        // read the input on analog pin 0:
        int sensorValue = analogRead(A0);
        // print out the value you read:
        Serial.println(sensorValue);
        delay(1);        // delay in between reads for stability
      }`,
      robotPicURL: 'https://robohash.org/a',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Bare Minimum',
      description: 'The bare minimum of code needed to start an Arduino sketch',
      code: `
      void setup() {
        // put your setup code here, to run once:

      }

      void loop() {
        // put your main code here, to run repeatedly:

      }`,
      robotPicURL: 'https://robohash.org/b',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Blink',
      description: 'Turn an LED on and off',
      code: `
      /*
      Blink

      Turns an LED on for one second, then off for one second, repeatedly.

      Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO
      it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN is set to
      the correct LED pin independent of which board is used.
      If you want to know what pin the on-board LED is connected to on your Arduino
      model, check the Technical Specs of your board at:
      https://www.arduino.cc/en/Main/Products

      modified 8 May 2014
      by Scott Fitzgerald
      modified 2 Sep 2016
      by Arturo Guadalupi
      modified 8 Sep 2016
      by Colby Newman

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Blink
    */

    // the setup function runs once when you press reset or power the board
    void setup() {
      // initialize digital pin LED_BUILTIN as an output.
      pinMode(LED_BUILTIN, OUTPUT);
    }

    // the loop function runs over and over again forever
    void loop() {
      digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
      delay(1000);                       // wait for a second
      digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
      delay(1000);                       // wait for a second
    }`,
      robotPicURL: 'https://robohash.org/c',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Digital Read Serial',
      description: 'Read a switch, print the state out to the Arduino Serial Monitor',
      code: `
      /*
      DigitalReadSerial

      Reads a digital input on pin 2, prints the result to the Serial Monitor

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/DigitalReadSerial
    */

    // digital pin 2 has a pushbutton attached to it. Give it a name:
    int pushButton = 2;

    // the setup routine runs once when you press reset:
    void setup() {
      // initialize serial communication at 9600 bits per second:
      Serial.begin(9600);
      // make the pushbutton's pin an input:
      pinMode(pushButton, INPUT);
    }

    // the loop routine runs over and over again forever:
    void loop() {
      // read the input pin:
      int buttonState = digitalRead(pushButton);
      // print out the state of the button:
      Serial.println(buttonState);
      delay(1);        // delay in between reads for stability
    }`,
      robotPicURL: 'https://robohash.org/d',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Fade',
      description: 'Demonstrates the use of analog output to fade an LED',
      code: `
      /*
      Fade

      This example shows how to fade an LED on pin 9 using the analogWrite()
      function.

      The analogWrite() function uses PWM, so if you want to change the pin you're
      using, be sure to use another PWM capable pin. On most Arduino, the PWM pins
      are identified with a "~" sign, like ~3, ~5, ~6, ~9, ~10 and ~11.

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Fade
    */

    int led = 9;           // the PWM pin the LED is attached to
    int brightness = 0;    // how bright the LED is
    int fadeAmount = 5;    // how many points to fade the LED by

    // the setup routine runs once when you press reset:
    void setup() {
      // declare pin 9 to be an output:
      pinMode(led, OUTPUT);
    }

    // the loop routine runs over and over again forever:
    void loop() {
      // set the brightness of pin 9:
      analogWrite(led, brightness);

      // change the brightness for next time through the loop:
      brightness = brightness + fadeAmount;

      // reverse the direction of the fading at the ends of the fade:
      if (brightness <= 0 || brightness >= 255) {
        fadeAmount = -fadeAmount;
      }
      // wait for 30 milliseconds to see the dimming effect
      delay(30);
    }`,
      robotPicURL: 'https://robohash.org/e',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Read Analog Voltage',
      description: 'Reads an analog input and prints the voltage to the Serial Monitor',
      code: `
      /*
      ReadAnalogVoltage

      Reads an analog input on pin 0, converts it to voltage, and prints the result to the Serial Monitor.
      Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
      Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ReadAnalogVoltage
    */

    // the setup routine runs once when you press reset:
    void setup() {
      // initialize serial communication at 9600 bits per second:
      Serial.begin(9600);
    }

    // the loop routine runs over and over again forever:
    void loop() {
      // read the input on analog pin 0:
      int sensorValue = analogRead(A0);
      // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
      float voltage = sensorValue * (5.0 / 1023.0);
      // print out the value you read:
      Serial.println(voltage);
    }`,
      robotPicURL: 'https://robohash.org/f',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/**************DIGITAL************************************************/
    {
      name: 'Blink Without Delay',
      description: 'Reads an analog input and prints the voltage to the Serial Monitor',
      code: `
      /*
      ReadAnalogVoltage

      Reads an analog input on pin 0, converts it to voltage, and prints the result to the Serial Monitor.
      Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
      Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ReadAnalogVoltage
      */

      // the setup routine runs once when you press reset:
      void setup() {
        // initialize serial communication at 9600 bits per second:
        Serial.begin(9600);
      }

      // the loop routine runs over and over again forever:
      void loop() {
        // read the input on analog pin 0:
        int sensorValue = analogRead(A0);
        // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
        float voltage = sensorValue * (5.0 / 1023.0);
        // print out the value you read:
        Serial.println(voltage);
      }`,
      robotPicURL: 'https://robohash.org/g',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Button',
      description: 'Use a pushbutton to control an LED',
      code: `
      /*
      Button

      Turns on and off a light emitting diode(LED) connected to digital pin 13,
      when pressing a pushbutton attached to pin 2.

      The circuit:
      - LED attached from pin 13 to ground
      - pushbutton attached to pin 2 from +5V
      - 10K resistor attached to pin 2 from ground

      - Note: on most Arduinos there is already an LED on the board
        attached to pin 13.

      created 2005
      by DojoDave <http://www.0j0.org>
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Button
    */

    // constants won't change. They're used here to set pin numbers:
    const int buttonPin = 2;     // the number of the pushbutton pin
    const int ledPin =  13;      // the number of the LED pin

    // variables will change:
    int buttonState = 0;         // variable for reading the pushbutton status

    void setup() {
      // initialize the LED pin as an output:
      pinMode(ledPin, OUTPUT);
      // initialize the pushbutton pin as an input:
      pinMode(buttonPin, INPUT);
    }

    void loop() {
      // read the state of the pushbutton value:
      buttonState = digitalRead(buttonPin);

      // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
      if (buttonState == HIGH) {
        // turn LED on:
        digitalWrite(ledPin, HIGH);
      } else {
        // turn LED off:
        digitalWrite(ledPin, LOW);
      }
    }`,
      robotPicURL: 'https://robohash.org/h',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Debounce',
      description: 'Read a pushbutton, filtering noise',
      code: `
      /*
      Debounce

      Each time the input pin goes from LOW to HIGH (e.g. because of a push-button
      press), the output pin is toggled from LOW to HIGH or HIGH to LOW. There's a
      minimum delay between toggles to debounce the circuit (i.e. to ignore noise).

      The circuit:
      - LED attached from pin 13 to ground
      - pushbutton attached from pin 2 to +5V
      - 10 kilohm resistor attached from pin 2 to ground

      - Note: On most Arduino boards, there is already an LED on the board connected
        to pin 13, so you don't need any extra components for this example.

      created 21 Nov 2006
      by David A. Mellis
      modified 30 Aug 2011
      by Limor Fried
      modified 28 Dec 2012
      by Mike Walters
      modified 30 Aug 2016
      by Arturo Guadalupi

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Debounce
    */

    // constants won't change. They're used here to set pin numbers:
    const int buttonPin = 2;    // the number of the pushbutton pin
    const int ledPin = 13;      // the number of the LED pin

    // Variables will change:
    int ledState = HIGH;         // the current state of the output pin
    int buttonState;             // the current reading from the input pin
    int lastButtonState = LOW;   // the previous reading from the input pin

    // the following variables are unsigned longs because the time, measured in
    // milliseconds, will quickly become a bigger number than can be stored in an int.
    unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
    unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers

    void setup() {
      pinMode(buttonPin, INPUT);
      pinMode(ledPin, OUTPUT);

      // set initial LED state
      digitalWrite(ledPin, ledState);
    }

    void loop() {
      // read the state of the switch into a local variable:
      int reading = digitalRead(buttonPin);

      // check to see if you just pressed the button
      // (i.e. the input went from LOW to HIGH), and you've waited long enough
      // since the last press to ignore any noise:

      // If the switch changed, due to noise or pressing:
      if (reading != lastButtonState) {
        // reset the debouncing timer
        lastDebounceTime = millis();
      }

      if ((millis() - lastDebounceTime) > debounceDelay) {
        // whatever the reading is at, it's been there for longer than the debounce
        // delay, so take it as the actual current state:

        // if the button state has changed:
        if (reading != buttonState) {
          buttonState = reading;

          // only toggle the LED if the new button state is HIGH
          if (buttonState == HIGH) {
            ledState = !ledState;
          }
        }
      }

      // set the LED:
      digitalWrite(ledPin, ledState);

      // save the reading. Next time through the loop, it'll be the lastButtonState:
      lastButtonState = reading;
    }`,
      robotPicURL: 'https://robohash.org/i',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Digital Input Pullup',
      description: 'Demonstrates the use of INPUT_PULLUP with pinMode()',
      code: `
      /*
      Input Pull-up Serial

      This example demonstrates the use of pinMode(INPUT_PULLUP). It reads a digital
      input on pin 2 and prints the results to the Serial Monitor.

      The circuit:
      - momentary switch attached from pin 2 to ground
      - built-in LED on pin 13

      Unlike pinMode(INPUT), there is no pull-down resistor necessary. An internal
      20K-ohm resistor is pulled to 5V. This configuration causes the input to read
      HIGH when the switch is open, and LOW when it is closed.

      created 14 Mar 2012
      by Scott Fitzgerald

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/InputPullupSerial
    */

    void setup() {
      //start serial connection
      Serial.begin(9600);
      //configure pin 2 as an input and enable the internal pull-up resistor
      pinMode(2, INPUT_PULLUP);
      pinMode(13, OUTPUT);

    }

    void loop() {
      //read the pushbutton value into a variable
      int sensorVal = digitalRead(2);
      //print out the value of the pushbutton
      Serial.println(sensorVal);

      // Keep in mind the pull-up means the pushbutton's logic is inverted. It goes
      // HIGH when it's open, and LOW when it's pressed. Turn on pin 13 when the
      // button's pressed, and off when it's not:
      if (sensorVal == HIGH) {
        digitalWrite(13, LOW);
      } else {
        digitalWrite(13, HIGH);
      }
    }`,
      robotPicURL: 'https://robohash.org/j',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'State Change Detection',
      description: 'Count the number of button pushes',
      code: `
      /*
      State change detection (edge detection)

      Often, you don't need to know the state of a digital input all the time, but
      you just need to know when the input changes from one state to another.
      For example, you want to know when a button goes from OFF to ON. This is called
      state change detection, or edge detection.

      This example shows how to detect when a button or button changes from off to on
      and on to off.

      The circuit:
      - pushbutton attached to pin 2 from +5V
      - 10 kilohm resistor attached to pin 2 from ground
      - LED attached from pin 13 to ground (or use the built-in LED on most
        Arduino boards)

      created  27 Sep 2005
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ButtonStateChange
    */

    // this constant won't change:
    const int  buttonPin = 2;    // the pin that the pushbutton is attached to
    const int ledPin = 13;       // the pin that the LED is attached to

    // Variables will change:
    int buttonPushCounter = 0;   // counter for the number of button presses
    int buttonState = 0;         // current state of the button
    int lastButtonState = 0;     // previous state of the button

    void setup() {
      // initialize the button pin as a input:
      pinMode(buttonPin, INPUT);
      // initialize the LED as an output:
      pinMode(ledPin, OUTPUT);
      // initialize serial communication:
      Serial.begin(9600);
    }


    void loop() {
      // read the pushbutton input pin:
      buttonState = digitalRead(buttonPin);

      // compare the buttonState to its previous state
      if (buttonState != lastButtonState) {
        // if the state has changed, increment the counter
        if (buttonState == HIGH) {
          // if the current state is HIGH then the button went from off to on:
          buttonPushCounter++;
          Serial.println("on");
          Serial.print("number of button pushes: ");
          Serial.println(buttonPushCounter);
        } else {
          // if the current state is LOW then the button went from on to off:
          Serial.println("off");
        }
        // Delay a little bit to avoid bouncing
        delay(50);
      }
      // save the current state as the last state, for next time through the loop
      lastButtonState = buttonState;


      // turns on the LED every four button pushes by checking the modulo of the
      // button push counter. the modulo function gives you the remainder of the
      // division of two numbers:
      if (buttonPushCounter % 4 == 0) {
        digitalWrite(ledPin, HIGH);
      } else {
        digitalWrite(ledPin, LOW);
      }

    }`,
      robotPicURL: 'https://robohash.org/k',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tone Keyboard',
      description: 'A three-key musical keyboard using force sensors and a piezo speaker',
      code: `
      /*
      Keyboard

      Plays a pitch that changes based on a changing analog input

      circuit:
      - three force-sensing resistors from +5V to analog in 0 through 5
      - three 10 kilohm resistors from analog in 0 through 5 to ground
      - 8 ohm speaker on digital pin 8

      created 21 Jan 2010
      modified 9 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Tone3
    */

    #include "pitches.h"

    const int threshold = 10;    // minimum reading of the sensors that generates a note

    // notes to play, corresponding to the 3 sensors:
    int notes[] = {
      NOTE_A4, NOTE_B4, NOTE_C3
    };

    void setup() {

    }

    void loop() {
      for (int thisSensor = 0; thisSensor < 3; thisSensor++) {
        // get a sensor reading:
        int sensorReading = analogRead(thisSensor);

        // if the sensor is pressed hard enough:
        if (sensorReading > threshold) {
          // play the note corresponding to this sensor:
          tone(8, notes[thisSensor], 20);
        }
      }
    }`,
      robotPicURL: 'https://robohash.org/l',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tone Melody',
      description: 'Play a melody with a Piezo speaker',
      code: `
      /*
      Melody

      Plays a melody

      circuit:
      - 8 ohm speaker on digital pin 8

      created 21 Jan 2010
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Tone
    */

    #include "pitches.h"

    // notes in the melody:
    int melody[] = {
      NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
    };

    // note durations: 4 = quarter note, 8 = eighth note, etc.:
    int noteDurations[] = {
      4, 8, 8, 4, 4, 4, 4, 4
    };

    void setup() {
      // iterate over the notes of the melody:
      for (int thisNote = 0; thisNote < 8; thisNote++) {

        // to calculate the note duration, take one second divided by the note type.
        //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
        int noteDuration = 1000 / noteDurations[thisNote];
        tone(8, melody[thisNote], noteDuration);

        // to distinguish the notes, set a minimum time between them.
        // the note's duration + 30% seems to work well:
        int pauseBetweenNotes = noteDuration * 1.30;
        delay(pauseBetweenNotes);
        // stop the tone playing:
        noTone(8);
      }
    }

    void loop() {
      // no need to repeat the melody.
    }`,
      robotPicURL: 'https://robohash.org/m',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tone Multiple ',
      description: 'Play tones on multiple speakers sequentially using the tone() command',
      code: `
      /*
      Multiple tone player

      Plays multiple tones on multiple pins in sequence

      circuit:
      - three 8 ohm speakers on digital pins 6, 7, and 8

      created 8 Mar 2010
      by Tom Igoe
      based on a snippet from Greg Borenstein

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Tone4
    */

    void setup() {

    }

    void loop() {
      // turn off tone function for pin 8:
      noTone(8);
      // play a note on pin 6 for 200 ms:
      tone(6, 440, 200);
      delay(200);

      // turn off tone function for pin 6:
      noTone(6);
      // play a note on pin 7 for 500 ms:
      tone(7, 494, 500);
      delay(500);

      // turn off tone function for pin 7:
      noTone(7);
      // play a note on pin 8 for 300 ms:
      tone(8, 523, 300);
      delay(300);
    }`,
      robotPicURL: 'https://robohash.org/n',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tone Pitch Follower ',
      description: 'Play a pitch on a piezo speaker depending on an analog input',
      code: `
      /*
      Pitch follower

      Plays a pitch that changes based on a changing analog input

      circuit:
      - 8 ohm speaker on digital pin 9
      - photoresistor on analog 0 to 5V
      - 4.7 kilohm resistor on analog 0 to ground

      created 21 Jan 2010
      modified 31 May 2012
      by Tom Igoe, with suggestion from Michael Flynn

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Tone2
    */

    void setup() {
      // initialize serial communications (for debugging only):
      Serial.begin(9600);
    }

    void loop() {
      // read the sensor:
      int sensorReading = analogRead(A0);
      // print the sensor reading so you know its range
      Serial.println(sensorReading);
      // map the analog input range (in this case, 400 - 1000 from the photoresistor)
      // to the output pitch range (120 - 1500Hz)
      // change the minimum and maximum input numbers below depending on the range
      // your sensor's giving:
      int thisPitch = map(sensorReading, 400, 1000, 120, 1500);

      // play the pitch:
      tone(9, thisPitch, 10);
      delay(1);        // delay in between reads for stability
    }`,
      robotPicURL: 'https://robohash.org/o',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/*************ANALOG*************************************************/
    {
      name: 'Analog In Out Serial',
      description: 'Read an analog input pin, map the result, and then use that data to dim or brighten an LED',
      code: `
      /*
      Analog input, analog output, serial output

      Reads an analog input pin, maps the result to a range from 0 to 255 and uses
      the result to set the pulse width modulation (PWM) of an output pin.
      Also prints the results to the Serial Monitor.

      The circuit:
      - potentiometer connected to analog pin 0.
        Center pin of the potentiometer goes to the analog pin.
        side pins of the potentiometer go to +5V and ground
      - LED connected from digital pin 9 to ground

      created 29 Dec. 2008
      modified 9 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/AnalogInOutSerial
    */

    // These constants won't change. They're used to give names to the pins used:
    const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
    const int analogOutPin = 9; // Analog output pin that the LED is attached to

    int sensorValue = 0;        // value read from the pot
    int outputValue = 0;        // value output to the PWM (analog out)

    void setup() {
      // initialize serial communications at 9600 bps:
      Serial.begin(9600);
    }

    void loop() {
      // read the analog in value:
      sensorValue = analogRead(analogInPin);
      // map it to the range of the analog out:
      outputValue = map(sensorValue, 0, 1023, 0, 255);
      // change the analog out value:
      analogWrite(analogOutPin, outputValue);

      // print the results to the Serial Monitor:
      Serial.print("sensor = ");
      Serial.print(sensorValue);
      Serial.print("\t output = ");
      Serial.println(outputValue);

      // wait 2 milliseconds before the next loop for the analog-to-digital
      // converter to settle after the last reading:
      delay(2);
    }`,
      robotPicURL: 'https://robohash.org/p',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Analog Input',
      description: 'Use a potentiometer to control the blinking of an LED',
      code: `
      /*
      Analog Input

      Demonstrates analog input by reading an analog sensor on analog pin 0 and
      turning on and off a light emitting diode(LED) connected to digital pin 13.
      The amount of time the LED will be on and off depends on the value obtained
      by analogRead().

      The circuit:
      - potentiometer
        center pin of the potentiometer to the analog input 0
        one side pin (either one) to ground
        the other side pin to +5V
      - LED
        anode (long leg) attached to digital output 13
        cathode (short leg) attached to ground

      - Note: because most Arduinos have a built-in LED attached to pin 13 on the
        board, the LED is optional.

      created by David Cuartielles
      modified 30 Aug 2011
      By Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/AnalogInput
    */

    int sensorPin = A0;    // select the input pin for the potentiometer
    int ledPin = 13;      // select the pin for the LED
    int sensorValue = 0;  // variable to store the value coming from the sensor

    void setup() {
      // declare the ledPin as an OUTPUT:
      pinMode(ledPin, OUTPUT);
    }

    void loop() {
      // read the value from the sensor:
      sensorValue = analogRead(sensorPin);
      // turn the ledPin on
      digitalWrite(ledPin, HIGH);
      // stop the program for <sensorValue> milliseconds:
      delay(sensorValue);
      // turn the ledPin off:
      digitalWrite(ledPin, LOW);
      // stop the program for for <sensorValue> milliseconds:
      delay(sensorValue);
    }`,
      robotPicURL: 'https://robohash.org/q',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Analog Write Mega',
      description: 'Fade 12 LEDs on and off, one by one, using an Arduino Mega board',
      code: `
      /*
      Mega analogWrite() test

      This sketch fades LEDs up and down one at a time on digital pins 2 through 13.
      This sketch was written for the Arduino Mega, and will not work on other boards.

      The circuit:
      - LEDs attached from pins 2 through 13 to ground.

      created 8 Feb 2009
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/AnalogWriteMega
    */

    // These constants won't change. They're used to give names to the pins used:
    const int lowestPin = 2;
    const int highestPin = 13;


    void setup() {
      // set pins 2 through 13 as outputs:
      for (int thisPin = lowestPin; thisPin <= highestPin; thisPin++) {
        pinMode(thisPin, OUTPUT);
      }
    }

    void loop() {
      // iterate over the pins:
      for (int thisPin = lowestPin; thisPin <= highestPin; thisPin++) {
        // fade the LED on thisPin from off to brightest:
        for (int brightness = 0; brightness < 255; brightness++) {
          analogWrite(thisPin, brightness);
          delay(2);
        }
        // fade the LED on thisPin from brightest to off:
        for (int brightness = 255; brightness >= 0; brightness--) {
          analogWrite(thisPin, brightness);
          delay(2);
        }
        // pause between LEDs:
        delay(100);
      }
    }`,
      robotPicURL: 'https://robohash.org/r',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Calibration',
      description: 'Define a maximum and minimum for expected analog sensor values',
      code: `
      /*
      Calibration

      Demonstrates one technique for calibrating sensor input. The sensor readings
      during the first five seconds of the sketch execution define the minimum and
      maximum of expected values attached to the sensor pin.

      The sensor minimum and maximum initial values may seem backwards. Initially,
      you set the minimum high and listen for anything lower, saving it as the new
      minimum. Likewise, you set the maximum low and listen for anything higher as
      the new maximum.

      The circuit:
      - analog sensor (potentiometer will do) attached to analog input 0
      - LED attached from digital pin 9 to ground

      created 29 Oct 2008
      by David A Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Calibration
    */

    // These constants won't change:
    const int sensorPin = A0;    // pin that the sensor is attached to
    const int ledPin = 9;        // pin that the LED is attached to

    // variables:
    int sensorValue = 0;         // the sensor value
    int sensorMin = 1023;        // minimum sensor value
    int sensorMax = 0;           // maximum sensor value


    void setup() {
      // turn on LED to signal the start of the calibration period:
      pinMode(13, OUTPUT);
      digitalWrite(13, HIGH);

      // calibrate during the first five seconds
      while (millis() < 5000) {
        sensorValue = analogRead(sensorPin);

        // record the maximum sensor value
        if (sensorValue > sensorMax) {
          sensorMax = sensorValue;
        }

        // record the minimum sensor value
        if (sensorValue < sensorMin) {
          sensorMin = sensorValue;
        }
      }

      // signal the end of the calibration period
      digitalWrite(13, LOW);
    }

    void loop() {
      // read the sensor:
      sensorValue = analogRead(sensorPin);

      // apply the calibration to the sensor reading
      sensorValue = map(sensorValue, sensorMin, sensorMax, 0, 255);

      // in case the sensor value is outside the range seen during calibration
      sensorValue = constrain(sensorValue, 0, 255);

      // fade the LED using the calibrated value:
      analogWrite(ledPin, sensorValue);
    }`,
      robotPicURL: 'https://robohash.org/s',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Fading',
      description: 'Use an analog output (PWM pin) to fade an LED',
      code: `
      /*
      Fading

      This example shows how to fade an LED using the analogWrite() function.

      The circuit:
      - LED attached from digital pin 9 to ground.

      created 1 Nov 2008
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Fading
    */

    int ledPin = 9;    // LED connected to digital pin 9

    void setup() {
      // nothing happens in setup
    }

    void loop() {
      // fade in from min to max in increments of 5 points:
      for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
      }

      // fade out from max to min in increments of 5 points:
      for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
      }
    }`,
      robotPicURL: 'https://robohash.org/t',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Smoothing',
      description: 'Smooth multiple readings of an analog input',
      code: `
      /*
      Smoothing

      Reads repeatedly from an analog input, calculating a running average and
      printing it to the computer. Keeps ten readings in an array and continually
      averages them.

      The circuit:
      - analog sensor (potentiometer will do) attached to analog input 0

      created 22 Apr 2007
      by David A. Mellis  <dam@mellis.org>
      modified 9 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Smoothing
    */

    // Define the number of samples to keep track of. The higher the number, the
    // more the readings will be smoothed, but the slower the output will respond to
    // the input. Using a constant rather than a normal variable lets us use this
    // value to determine the size of the readings array.
    const int numReadings = 10;

    int readings[numReadings];      // the readings from the analog input
    int readIndex = 0;              // the index of the current reading
    int total = 0;                  // the running total
    int average = 0;                // the average

    int inputPin = A0;

    void setup() {
      // initialize serial communication with computer:
      Serial.begin(9600);
      // initialize all the readings to 0:
      for (int thisReading = 0; thisReading < numReadings; thisReading++) {
        readings[thisReading] = 0;
      }
    }

    void loop() {
      // subtract the last reading:
      total = total - readings[readIndex];
      // read from the sensor:
      readings[readIndex] = analogRead(inputPin);
      // add the reading to the total:
      total = total + readings[readIndex];
      // advance to the next position in the array:
      readIndex = readIndex + 1;

      // if we're at the end of the array...
      if (readIndex >= numReadings) {
        // ...wrap around to the beginning:
        readIndex = 0;
      }

      // calculate the average:
      average = total / numReadings;
      // send it to the computer as ASCII digits
      Serial.println(average);
      delay(1);        // delay in between reads for stability
    }`,
      robotPicURL: 'https://robohash.org/u',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/**************COMMUNICATION******************************************/
    {
      name: 'ACII Table',
      description: `Demonstrates Arduino's advanced serial output functions`,
      code: `
      /*
      ASCII table

      Prints out byte values in all possible formats:
      - as raw binary values
      - as ASCII-encoded decimal, hex, octal, and binary values

      For more on ASCII, see http://www.asciitable.com and http://en.wikipedia.org/wiki/ASCII

      The circuit: No external hardware needed.

      created 2006
      by Nicholas Zambetti <http://www.zambetti.com>
      modified 9 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ASCIITable
    */

    void setup() {
      //Initialize serial and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // prints title with ending line break
      Serial.println("ASCII Table ~ Character Map");
    }

    // first visible ASCIIcharacter '!' is number 33:
    int thisByte = 33;
    // you can also write ASCII characters in single quotes.
    // for example, '!' is the same as 33, so you could also use this:
    // int thisByte = '!';

    void loop() {
      // prints value unaltered, i.e. the raw binary version of the byte.
      // The Serial Monitor interprets all bytes as ASCII, so 33, the first number,
      // will show up as '!'
      Serial.write(thisByte);

      Serial.print(", dec: ");
      // prints value as string as an ASCII-encoded decimal (base 10).
      // Decimal is the default format for Serial.print() and Serial.println(),
      // so no modifier is needed:
      Serial.print(thisByte);
      // But you can declare the modifier for decimal if you want to.
      // this also works if you uncomment it:

      // Serial.print(thisByte, DEC);


      Serial.print(", hex: ");
      // prints value as string in hexadecimal (base 16):
      Serial.print(thisByte, HEX);

      Serial.print(", oct: ");
      // prints value as string in octal (base 8);
      Serial.print(thisByte, OCT);

      Serial.print(", bin: ");
      // prints value as string in binary (base 2) also prints ending line break:
      Serial.println(thisByte, BIN);

      // if printed last visible character '~' or 126, stop:
      if (thisByte == 126) {    // you could also use if (thisByte == '~') {
        // This loop loops forever and does nothing
        while (true) {
          continue;
        }
      }
      // go on to the next character
      thisByte++;
    }`,
      robotPicURL: 'https://robohash.org/v',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dimmer',
      description: `Move the mouse to change the brightness of an LED`,
      code: `
      /*
      Dimmer

      Demonstrates sending data from the computer to the Arduino board, in this case
      to control the brightness of an LED. The data is sent in individual bytes,
      each of which ranges from 0 to 255. Arduino reads these bytes and uses them to
      set the brightness of the LED.

      The circuit:
      - LED attached from digital pin 9 to ground.
      - Serial connection to Processing, Max/MSP, or another serial application

      created 2006
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe and Scott Fitzgerald

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Dimmer
    */

    const int ledPin = 9;      // the pin that the LED is attached to

    void setup() {
      // initialize the serial communication:
      Serial.begin(9600);
      // initialize the ledPin as an output:
      pinMode(ledPin, OUTPUT);
    }

    void loop() {
      byte brightness;

      // check if data has been sent from the computer:
      if (Serial.available()) {
        // read the most recent byte (which will be from 0 to 255):
        brightness = Serial.read();
        // set the brightness of the LED:
        analogWrite(ledPin, brightness);
      }
    }

    /* Processing code for this example

      // Dimmer - sends bytes over a serial port

      // by David A. Mellis
      // This example code is in the public domain.

      import processing.serial.*;
      Serial port;

      void setup() {
        size(256, 150);

        println("Available serial ports:");
        // if using Processing 2.1 or later, use Serial.printArray()
        println(Serial.list());

        // Uses the first port in this list (number 0). Change this to select the port
        // corresponding to your Arduino board. The last parameter (e.g. 9600) is the
        // speed of the communication. It has to correspond to the value passed to
        // Serial.begin() in your Arduino sketch.
        port = new Serial(this, Serial.list()[0], 9600);

        // If you know the name of the port used by the Arduino board, you can specify
        // it directly like this.
        //port = new Serial(this, "COM1", 9600);
      }

      void draw() {
        // draw a gradient from black to white
        for (int i = 0; i < 256; i++) {
          stroke(i);
          line(i, 0, i, 150);
        }

        // write the current X-position of the mouse to the serial port as
        // a single byte
        port.write(mouseX);
      }

    */

    /* Max/MSP v5 patch for this example

    ----------begin_max5_patcher----------
    1008.3ocuXszaiaCD9r8uhA5rqAeHIa0aAMaAVf1S6hdoYQAsDiL6JQZHQ2M
    YWr+2KeX4vjnjXKKkKhhiGQ9MeyCNz+X9rnMp63sQvuB+MLa1OlOalSjUvrC
    ymEUytKuh05TKJWUWyk5nE9eSyuS6jesvHu4F4MxOuUzB6X57sPKWVzBLXiP
    xZtGj6q2vafaaT0.BzJfjj.p8ZPukazsQvpfcpFs8mXR3plh8BoBxURIOWyK
    rxspZ0YI.eTCEh5Vqp+wGtFXZMKe6CZc3yWZwTdCmYW.BBkdiby8v0r+ST.W
    sD9SdUkn8FYspPbqvnBNFtZWiUyLmleJWo0vuKzeuj2vpJLaWA7YiE7wREui
    FpDFDp1KcbAFcP5sJoVxp4NB5Jq40ougIDxJt1wo3GDZHiNocKhiIExx+owv
    AdOEAksDs.RRrOoww1Arc.9RvN2J9tamwjkcqknvAE0l+8WnjHqreNet8whK
    z6mukIK4d+Xknv3jstvJs8EirMMhxsZIusET25jXbX8xczIl5xPVxhPcTGFu
    xNDu9rXtUCg37g9Q8Yc+EuofIYmg8QdkPCrOnXsaHwYs3rWx9PGsO+pqueG2
    uNQBqWFh1X7qQG+3.VHcHrfO1nyR2TlqpTM9MDsLKNCQVz6KO.+Sfc5j1Ykj
    jzkn2jwNDRP7LVb3d9LtoWBAOnvB92Le6yRmZ4UF7YpQhiFi7A5Ka8zXhKdA
    4r9TRGG7V4COiSbAJKdXrWNhhF0hNUh7uBa4Mba0l7JUK+omjDMwkSn95Izr
    TOwkdp7W.oPRmNRQsiKeu4j3CkfVgt.NYPEYqMGvvJ48vIlPiyzrIuZskWIS
    xGJPcmPiWOfLodybH3wjPbMYwlbFIMNHPHFOtLBNaLSa9sGk1TxMzCX5KTa6
    WIH2ocxSdngM0QPqFRxyPHFsprrhGc9Gy9xoBjz0NWdR2yW9DUa2F85jG2v9
    FgTO4Q8qiC7fzzQNpmNpsY3BrYPVJBMJQ1uVmoItRhw9NrVGO3NMNzYZ+zS7
    3WTvTOnUydG5kHMKLqAOjTe7fN2bGSxOZDkMrBrGQ9J1gONBEy0k4gVo8qHc
    cxmfxVihWz6a3yqY9NazzUYkua9UnynadOtogW.JfsVGRVNEbWF8I+eHtcwJ
    +wLXqZeSdWLo+FQF6731Tva0BISKTx.cLwmgJsUTTvkg1YsnXmxDge.CDR7x
    D6YmX6fMznaF7kdczmJXwm.XSOOrdoHhNA7GMiZYLZZR.+4lconMaJP6JOZ8
    ftCs1YWHZI3o.sIXezX5ihMSuXzZtk3ai1mXRSczoCS32hAydeyXNEu5SHyS
    xqZqbd3ZLdera1iPqYxOm++v7SUSz
    -----------end_max5_patcher-----------

    */`,
      robotPicURL: 'https://robohash.org/Dimmer',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Graph',
      description: `Send data to the computer and graph it in Processing`,
      code: `
      /*
      Graph

      A simple example of communication from the Arduino board to the computer: The
      value of analog input 0 is sent out the serial port. We call this "serial"
      communication because the connection appears to both the Arduino and the
      computer as a serial port, even though it may actually use a USB cable. Bytes
      are sent one after another (serially) from the Arduino to the computer.

      You can use the Arduino Serial Monitor to view the sent data, or it can be
      read by Processing, PD, Max/MSP, or any other program capable of reading data
      from a serial port. The Processing code below graphs the data received so you
      can see the value of the analog input changing over time.

      The circuit:
      - any analog input sensor attached to analog in pin 0

      created 2006
      by David A. Mellis
      modified 9 Apr 2012
      by Tom Igoe and Scott Fitzgerald

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Graph
    */

    void setup() {
      // initialize the serial communication:
      Serial.begin(9600);
    }

    void loop() {
      // send the value of analog input 0:
      Serial.println(analogRead(A0));
      // wait a bit for the analog-to-digital converter to stabilize after the last
      // reading:
      delay(2);
    }

    /* Processing code for this example

      // Graphing sketch

      // This program takes ASCII-encoded strings from the serial port at 9600 baud
      // and graphs them. It expects values in the range 0 to 1023, followed by a
      // newline, or newline and carriage return

      // created 20 Apr 2005
      // updated 24 Nov 2015
      // by Tom Igoe
      // This example code is in the public domain.

      import processing.serial.*;

      Serial myPort;        // The serial port
      int xPos = 1;         // horizontal position of the graph
      float inByte = 0;

      void setup () {
        // set the window size:
        size(400, 300);

        // List all the available serial ports
        // if using Processing 2.1 or later, use Serial.printArray()
        println(Serial.list());

        // I know that the first port in the serial list on my Mac is always my
        // Arduino, so I open Serial.list()[0].
        // Open whatever port is the one you're using.
        myPort = new Serial(this, Serial.list()[0], 9600);

        // don't generate a serialEvent() unless you get a newline character:
        myPort.bufferUntil('\n');

        // set initial background:
        background(0);
      }

      void draw () {
        // draw the line:
        stroke(127, 34, 255);
        line(xPos, height, xPos, height - inByte);

        // at the edge of the screen, go back to the beginning:
        if (xPos >= width) {
          xPos = 0;
          background(0);
        } else {
          // increment the horizontal position:
          xPos++;
        }
      }

      void serialEvent (Serial myPort) {
        // get the ASCII string:
        String inString = myPort.readStringUntil('\n');

        if (inString != null) {
          // trim off any whitespace:
          inString = trim(inString);
          // convert to an int and map to the screen height:
          inByte = float(inString);
          println(inByte);
          inByte = map(inByte, 0, 1023, 0, height);
        }
      }

    */

    /* Max/MSP v5 patch for this example

    ----------begin_max5_patcher----------
    1591.3oc0YszbaaCD9r7uBL5RalQUAO3CvdyS5zVenWZxs5NcfHgjPCIfJIT
    RTxj+6AOHkoTDooroUs0AQPR73a+1cwtK3WtZxzEpOwqlB9YveAlL4KWMYh6
    Q1GLo99ISKXeJMmU451zTUQAWpmNy+NM+SZ2y+sR1l02JuU9t0hJvFlNcMPy
    dOuBv.U5Rgb0LPpRpYBooM3529latArTUVvzZdFPtsXAuDrrTU.f.sBffXxL
    vGE50lIHkUVJXq3fRtdaoDvjYfbgjujaFJSCzq4.tLaN.bi1tJefWpqbO0uz
    1IjIABoluxrJ1guxh2JfPO2B5zRNyBCLDFcqbwNvuv9fHCb8bvevyyEU2JKT
    YhkBSWPAfq2TZ6YhqmuMUo0feUn+rYpY4YtY+cFw3lUJdCMYAapZqzwUHX8S
    crjAd+SIOU6UBAwIygy.Q1+HAA1KH6EveWOFQlitUK92ehfal9kFhUxJ3tWc
    sgpxadigWExbt1o7Ps5dk3yttivyg20W0VcSmg1G90qtx92rAZbH4ez.ruy1
    nhmaDPidE07J+5n2sg6E6oKXxUSmc20o6E3SPRDbrkXnPGUYE.i5nCNB9TxQ
    jG.G0kCTZtH88f07Rt0ZMMWUw8VvbKVAaTk6GyoraPdZff7rQTejBN54lgyv
    HE0Ft7AvIvvgvIwO23jBdUkYOuSvIFSiNcjFhiSsUBwsUCh1AgfNSBAeNDBZ
    DIDqY.f8.YjfjV1HAn9XDTxyNFYatVTkKx3kcK9GraZpI5jv7GOx+Z37Xh82
    LSKHIDmDXaESoXRngIZQDKVkpxUkMCyXCQhcCK1z.G457gi3TzMz4RFD515F
    G3bIQQwcP3SOF0zlkGhiCBQ1kOHHFFlXaEBQIQnCwv9QF1LxPZ.A4jR5cyQs
    vbvHMJsLll01We+rE2LazX6zYmCraRrsPFwKg1ANBZFY.IAihr8Ox.aH0oAL
    hB8nQVw0FSJiZeunOykbT6t3r.NP8.iL+bnwNiXuVMNJH9H9YCm89CFXPBER
    bz422p8.O4dg6kRxdyjDqRwMIHTbT3QFLskxJ8tbmQK4tm0XGeZWF7wKKtYY
    aTAF.XPNFaaQBinQMJ4QLF0aNHF0JtYuHSxoUZfZY6.UU2ejJTb8lQw8Fo5k
    Rv6e2PI+fOM71o2ecY1VgTYdCSxxUqLokuYq9jYJi6lxPgD2NIPePLB0mwbG
    YA9Rgxdiu1k5xiLlSU6JVnx6wzg3sYHwTesB8Z5D7RiGZpXyvDNJY.DQX3.H
    hvmcUN4bP1yCkhpTle2P37jtBsKrLWcMScEmltOPv22ZfAqQAdKr9HzATQwZ
    q18PrUGt6Tst2XMCRUfGuhXs6ccn23YloomMqcTiC5iMGPsHsHRWhWFlaenV
    XcqwgCQiGGJzptyS2ZMODBz6fGza0bzmXBj7+DA94bvpR01MffAlueO7HwcI
    pWCwmzJdvi9ILgflLAFmyXB6O7ML0YbD26lenmcGxjVsZUN+A6pUK7AtTrPg
    M+eRYG0qD9j4I7eEbco8Xh6WcO.or9XDC6UCiewbXHkh6xm5LiPEkzpJDRTu
    mEB44Fgz4NCtJvX.SM1vo2SlTCZGAe7GZu6ahdRyzFOhYZ+mbVVSYptBw.K1
    tboIkatIA7c1cTKD1u.honLYV04VkluHsXe0szv9pQCE9Ro3jaVB1o15pz2X
    zYoBvO5KXCAe0LCYJybE8ZODf4fV8t9qW0zYxq.YJfTosj1bv0xc.SaC0+AV
    9V9L.KKyV3SyTcRtmzi6rO.O16USvts4B5xe9EymDvebK0eMfW6+NIsNlE2m
    eqRyJ0utRq13+RjmqYKN1e.4d61jjdsauXe3.2p6jgi9hsNIv97CoyJ01xzl
    c3ZhUCtSHx3UZgjoEJYqNY+hYs5zZQVFW19L3JDYaTlMLqAAt1G2yXlnFg9a
    53L1FJVcv.cOX0dh7mCVGCLce7GFcQwDdH5Ta3nyAS0pQbHxegr+tGIZORgM
    RnMj5vGl1Fs16drnk7Tf1XOLgv1n0d2iEsCxR.eQsNOZ4FGF7whofgfI3kES
    1kCeOX5L2rifbdu0A9ae2X.V33B1Z+.Bj1FrP5iFrCYCG5EUWSG.hhunHJd.
    HJ5hhnng3h9HPj4lud02.1bxGw.
    -----------end_max5_patcher-----------

    */`,
      robotPicURL: 'https://robohash.org/Graph',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Midi',
      description: `Send MIDI note messages serially`,
      code: `
      /*
      MIDI note player

      This sketch shows how to use the serial transmit pin (pin 1) to send MIDI note data.
      If this circuit is connected to a MIDI synth, it will play the notes
      F#-0 (0x1E) to F#-5 (0x5A) in sequence.

      The circuit:
      - digital in 1 connected to MIDI jack pin 5
      - MIDI jack pin 2 connected to ground
      - MIDI jack pin 4 connected to +5V through 220 ohm resistor
      - Attach a MIDI cable to the jack, then to a MIDI synth, and play music.

      created 13 Jun 2006
      modified 13 Aug 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Midi
    */

    void setup() {
      // Set MIDI baud rate:
      Serial.begin(31250);
    }

    void loop() {
      // play notes from F#-0 (0x1E) to F#-5 (0x5A):
      for (int note = 0x1E; note < 0x5A; note ++) {
        //Note on channel 1 (0x90), some note value (note), middle velocity (0x45):
        noteOn(0x90, note, 0x45);
        delay(100);
        //Note on channel 1 (0x90), some note value (note), silent velocity (0x00):
        noteOn(0x90, note, 0x00);
        delay(100);
      }
    }

    // plays a MIDI note. Doesn't check to see that cmd is greater than 127, or that
    // data values are less than 127:
    void noteOn(int cmd, int pitch, int velocity) {
      Serial.write(cmd);
      Serial.write(pitch);
      Serial.write(velocity);
    }`,
      robotPicURL: 'https://robohash.org/Midi',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Multi Serial Mega',
      description: `Use two of the serial ports available on the Arduino Mega`,
      code: `
      /*
      Multiple Serial test

      Receives from the main serial port, sends to the others.
      Receives from serial port 1, sends to the main serial (Serial 0).

      This example works only with boards with more than one serial like Arduino Mega, Due, Zero etc.

      The circuit:
      - any serial device attached to Serial port 1
      - Serial Monitor open on Serial port 0

      created 30 Dec 2008
      modified 20 May 2012
      by Tom Igoe & Jed Roach
      modified 27 Nov 2015
      by Arturo Guadalupi

      This example code is in the public domain.
    */


    void setup() {
      // initialize both serial ports:
      Serial.begin(9600);
      Serial1.begin(9600);
    }

    void loop() {
      // read from port 1, send to port 0:
      if (Serial1.available()) {
        int inByte = Serial1.read();
        Serial.write(inByte);
      }

      // read from port 0, send to port 1:
      if (Serial.available()) {
        int inByte = Serial.read();
        Serial1.write(inByte);
      }
    }`,
      robotPicURL: 'https://robohash.org/MultiSerialMega',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Physical Pixel',
      description: `Turn a LED on and off by sending data to your Arduino from Processing or Max/MSP`,
      code: `
      /*
      Physical Pixel

      An example of using the Arduino board to receive data from the computer. In
      this case, the Arduino boards turns on an LED when it receives the character
      'H', and turns off the LED when it receives the character 'L'.

      The data can be sent from the Arduino Serial Monitor, or another program like
      Processing (see code below), Flash (via a serial-net proxy), PD, or Max/MSP.

      The circuit:
      - LED connected from digital pin 13 to ground

      created 2006
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe and Scott Fitzgerald

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/PhysicalPixel
    */

    const int ledPin = 13; // the pin that the LED is attached to
    int incomingByte;      // a variable to read incoming serial data into

    void setup() {
      // initialize serial communication:
      Serial.begin(9600);
      // initialize the LED pin as an output:
      pinMode(ledPin, OUTPUT);
    }

    void loop() {
      // see if there's incoming serial data:
      if (Serial.available() > 0) {
        // read the oldest byte in the serial buffer:
        incomingByte = Serial.read();
        // if it's a capital H (ASCII 72), turn on the LED:
        if (incomingByte == 'H') {
          digitalWrite(ledPin, HIGH);
        }
        // if it's an L (ASCII 76) turn off the LED:
        if (incomingByte == 'L') {
          digitalWrite(ledPin, LOW);
        }
      }
    }

    /* Processing code for this example

      // Mouse over serial

      // Demonstrates how to send data to the Arduino I/O board, in order to turn ON
      // a light if the mouse is over a square and turn it off if the mouse is not.

      // created 2003-4
      // based on examples by Casey Reas and Hernando Barragan
      // modified 30 Aug 2011
      // by Tom Igoe
      // This example code is in the public domain.

      import processing.serial.*;

      float boxX;
      float boxY;
      int boxSize = 20;
      boolean mouseOverBox = false;

      Serial port;

      void setup() {
        size(200, 200);
        boxX = width / 2.0;
        boxY = height / 2.0;
        rectMode(RADIUS);

        // List all the available serial ports in the output pane.
        // You will need to choose the port that the Arduino board is connected to
        // from this list. The first port in the list is port #0 and the third port
        // in the list is port #2.
        // if using Processing 2.1 or later, use Serial.printArray()
        println(Serial.list());

        // Open the port that the Arduino board is connected to (in this case #0)
        // Make sure to open the port at the same speed Arduino is using (9600bps)
        port = new Serial(this, Serial.list()[0], 9600);
      }

      void draw() {
        background(0);

        // Test if the cursor is over the box
        if (mouseX > boxX - boxSize && mouseX < boxX + boxSize &&
            mouseY > boxY - boxSize && mouseY < boxY + boxSize) {
          mouseOverBox = true;
          // draw a line around the box and change its color:
          stroke(255);
          fill(153);
          // send an 'H' to indicate mouse is over square:
          port.write('H');
        }
        else {
          // return the box to its inactive state:
          stroke(153);
          fill(153);
          // send an 'L' to turn the LED off:
          port.write('L');
          mouseOverBox = false;
        }

        // Draw the box
        rect(boxX, boxY, boxSize, boxSize);
      }

    */

    /* Max/MSP version 5 patch to run with this example:

    ----------begin_max5_patcher----------
    1672.3oc2ZszaaiCD9ryuBBebQVCQRYao8xhf1cQCPVfBzh8RRQ.sDsM2HSZ
    HQmlzh9eu7gjsjsEk7y0oWjiHoHm4aluYHGlueUmtiDuPy5B9Cv8fNc99Uc5
    XZR2Pm726zcF4knDRlYXciDylQ4xtWa6SReQZZ+iSeMiEQR.ej8BM4A9C7OO
    kkAlSjQSAYTdbFfvA27o2c6sfO.Doqd6NfXgDHmRUCKkolg4hT06BfbQJGH3
    5Qd2e8d.QJIQSow5tzebZ7BFW.FIHow8.2JAQpVIIYByxo9KIMkSjL9D0BRT
    sbGHZJIkDoZOSMuQT.8YZ5qpgGI3locF4IpQRzq2nDF+odZMIJkRjpEF44M3
    A9nWAum7LKFbSOv+PSRXYOvmIhYiYpg.8A2LOUOxPyH+TjPJA+MS9sIzTRRr
    QP9rXF31IBZAHpVHkHrfaPRHLuUCzoj9GSoQRqIB52y6Z.tu8o4EX+fddfuj
    +MrXiwPL5+9cXwrOVvkbxLpomazHbQO7EyX7DpzXYgkFdF6algCQpkX4XUlo
    hA6oa7GWck9w0Gnmy6RXQOoQeCfWwlzsdnHLTq8n9PCHLv7Cxa6PAN3RCKjh
    ISRVZ+sSl704Tqt0kocE9R8J+P+RJOZ4ysp6gN0vppBbOTEN8qp0YCq5bq47
    PUwfA5e766z7NbGMuncw7VgNRSyQhbnPMGrDsGaFSvKM5NcWoIVdZn44.eOi
    9DTRUT.7jDQzSTiF4UzXLc7tLGh4T9pwaFQkGUGIiOOkpBSJUwGsBd40krHQ
    9XEvwq2V6eLIhV6GuzP7uzzXBmzsXPSRYwBtVLp7s5lKVv6UN2VW7xRtYDbx
    7s7wRgHYDI8YVFaTBshkP49R3rYpH3RlUhTQmK5jMadJyF3cYaTNQMGSyhRE
    IIUlJaOOukdhoOyhnekEKmZlqU3UkLrk7bpPrpztKBVUR1uorLddk6xIOqNt
    lBOroRrNVFJGLrDxudpET4kzkstNp2lzuUHVMgk5TDZx9GWumnoQTbhXsEtF
    tzCcM+z0QKXsngCUtTOEIN0SX2iHTTIIz968.Kf.uhfzUCUuAd3UKd.OKt.N
    HTynxTQyjpQD9jlwEXeKQxfHCBahUge6RprSa2V4m3aYOMyaP6gah2Yf1zbD
    jVwZVGFZHHxINFxpjr5CiTS9JiZn6e6nTlXQZTAFj6QCppQwzL0AxVtoi6WE
    QXsANkEGWMEuwNvhmKTnat7A9RqLq6pXuEwY6xM5xRraoTiurj51J1vKLzFs
    CvM7HI14Mpje6YRxHOSieTsJpvJORjxT1nERK6s7YTN7sr6rylNwf5zMiHI4
    meZ4rTYt2PpVettZERbjJ6PjfqN2loPSrUcusH01CegsGEE5467rnCdqT1ES
    QxtCvFq.cvGz+BaAHXKzRSfP+2Jf.KCvj5ZLJRAhwi+SWHvPyN3vXiaPn6JR
    3eoA.0TkFhTvpsDMIrL20nAkCI4EoYfSHAuiPBdmJRyd.IynYYjIzMvjOTKf
    3DLvnvRLDLpWeEOYXMfAZqfQ0.qsnlUdmA33t8CNJ7MZEb.u7fiZHLYzDkJp
    R7CqEVLGN75U+1JXxFUY.xEEBcRCqhOEkz2bENEWnh4pbh0wY25EefbD6EmW
    UA6Ip8wFLyuFXx+Wrp8m6iff1B86W7bqJO9+mx8er4E3.abCLrYdA16sBuHx
    vKT6BlpIGQIhL55W7oicf3ayv3ixQCm4aQuY1HZUPQWY+cASx2WZ3f1fICuz
    vj5R5ZbM1y8gXYN4dIXaYGq4NhQvS5MmcDADy+S.j8CQ78vk7Q7gtPDX3kFh
    3NGaAsYBUAO.8N1U4WKycxbQdrWxJdXd10gNIO+hkUMmm.CZwknu7JbNUYUq
    0sOsTsI1QudDtjw0t+xZ85wWZd80tMCiiMADNX4UzrcSeK23su87IANqmA7j
    tiRzoXi2YRh67ldAk79gPmTe3YKuoY0qdEDV3X8xylCJMTN45JIakB7uY8XW
    uVr3PO8wWwEoTW8lsfraX7ZqzZDDXCRqNkztHsGCYpIDDAOqxDpMVUMKcOrp
    942acPvx2NPocMC1wQZ8glRn3myTykVaEUNLoEeJjVaAevA4EAZnsNgkeyO+
    3rEZB7f0DTazDcQTNmdt8aACGi1QOWnMmd+.6YjMHH19OB5gKsMF877x8wsJ
    hN97JSnSfLUXGUoj6ujWXd6Pk1SAC+Pkogm.tZ.1lX1qL.pe6PE11DPeMMZ2
    .P0K+3peBt3NskC
    -----------end_max5_patcher-----------

    */`,
      robotPicURL: 'https://robohash.org/PhysicalPixel',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Read ASCII String',
      description: `Parse a comma-separated string of integers to fade an LED`,
      code: `
      /*
      Reading a serial ASCII-encoded string.

      This sketch demonstrates the Serial parseInt() function.
      It looks for an ASCII string of comma-separated values.
      It parses them into ints, and uses those to fade an RGB LED.

      Circuit: Common-Cathode RGB LED wired like so:
      - red anode: digital pin 3
      - green anode: digital pin 5
      - blue anode: digital pin 6
      - cathode: GND

      created 13 Apr 2012
      by Tom Igoe
      modified 14 Mar 2016
      by Arturo Guadalupi

      This example code is in the public domain.
    */

    // pins for the LEDs:
    const int redPin = 3;
    const int greenPin = 5;
    const int bluePin = 6;

    void setup() {
      // initialize serial:
      Serial.begin(9600);
      // make the pins outputs:
      pinMode(redPin, OUTPUT);
      pinMode(greenPin, OUTPUT);
      pinMode(bluePin, OUTPUT);

    }

    void loop() {
      // if there's any serial available, read it:
      while (Serial.available() > 0) {

        // look for the next valid integer in the incoming serial stream:
        int red = Serial.parseInt();
        // do it again:
        int green = Serial.parseInt();
        // do it again:
        int blue = Serial.parseInt();

        // look for the newline. That's the end of your sentence:
        if (Serial.read() == '\n') {
          // constrain the values to 0 - 255 and invert
          // if you're using a common-cathode LED, just use "constrain(color, 0, 255);"
          red = 255 - constrain(red, 0, 255);
          green = 255 - constrain(green, 0, 255);
          blue = 255 - constrain(blue, 0, 255);

          // fade the red, green, and blue legs of the LED:
          analogWrite(redPin, red);
          analogWrite(greenPin, green);
          analogWrite(bluePin, blue);

          // print the three numbers in one string as hexadecimal:
          Serial.print(red, HEX);
          Serial.print(green, HEX);
          Serial.println(blue, HEX);
        }
      }
    }`,
      robotPicURL: 'https://robohash.org/ReadASCIIString',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Serial Call Response',
      description: `Send multiple variables using a call-and-response (handshaking) method`,
      code: `
      /*
      Serial Call and Response
      Language: Wiring/Arduino

      This program sends an ASCII A (byte of value 65) on startup and repeats that
      until it gets some data in. Then it waits for a byte in the serial port, and
      sends three sensor values whenever it gets a byte in.

      The circuit:
      - potentiometers attached to analog inputs 0 and 1
      - pushbutton attached to digital I/O 2

      created 26 Sep 2005
      by Tom Igoe
      modified 24 Apr 2012
      by Tom Igoe and Scott Fitzgerald
      Thanks to Greg Shakar and Scott Fitzgerald for the improvements

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/SerialCallResponse
    */

    int firstSensor = 0;    // first analog sensor
    int secondSensor = 0;   // second analog sensor
    int thirdSensor = 0;    // digital sensor
    int inByte = 0;         // incoming serial byte

    void setup() {
      // start serial port at 9600 bps:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      pinMode(2, INPUT);   // digital sensor is on digital pin 2
      establishContact();  // send a byte to establish contact until receiver responds
    }

    void loop() {
      // if we get a valid byte, read analog ins:
      if (Serial.available() > 0) {
        // get incoming byte:
        inByte = Serial.read();
        // read first analog input, divide by 4 to make the range 0-255:
        firstSensor = analogRead(A0) / 4;
        // delay 10ms to let the ADC recover:
        delay(10);
        // read second analog input, divide by 4 to make the range 0-255:
        secondSensor = analogRead(1) / 4;
        // read switch, map it to 0 or 255L
        thirdSensor = map(digitalRead(2), 0, 1, 0, 255);
        // send sensor values:
        Serial.write(firstSensor);
        Serial.write(secondSensor);
        Serial.write(thirdSensor);
      }
    }

    void establishContact() {
      while (Serial.available() <= 0) {
        Serial.print('A');   // send a capital A
        delay(300);
      }
    }

    /* Processing sketch to run with this example:

      // This example code is in the public domain.

      import processing.serial.*;

      int bgcolor;           // Background color
      int fgcolor;           // Fill color
      Serial myPort;                       // The serial port
      int[] serialInArray = new int[3];    // Where we'll put what we receive
      int serialCount = 0;                 // A count of how many bytes we receive
      int xpos, ypos;                // Starting position of the ball
      boolean firstContact = false;        // Whether we've heard from the microcontroller

      void setup() {
        size(256, 256);  // Stage size
        noStroke();      // No border on the next thing drawn

        // Set the starting position of the ball (middle of the stage)
        xpos = width / 2;
        ypos = height / 2;

        // Print a list of the serial ports for debugging purposes
        // if using Processing 2.1 or later, use Serial.printArray()
        println(Serial.list());

        // I know that the first port in the serial list on my Mac is always my FTDI
        // adaptor, so I open Serial.list()[0].
        // On Windows machines, this generally opens COM1.
        // Open whatever port is the one you're using.
        String portName = Serial.list()[0];
        myPort = new Serial(this, portName, 9600);
      }

      void draw() {
        background(bgcolor);
        fill(fgcolor);
        // Draw the shape
        ellipse(xpos, ypos, 20, 20);
      }

      void serialEvent(Serial myPort) {
        // read a byte from the serial port:
        int inByte = myPort.read();
        // if this is the first byte received, and it's an A, clear the serial
        // buffer and note that you've had first contact from the microcontroller.
        // Otherwise, add the incoming byte to the array:
        if (firstContact == false) {
          if (inByte == 'A') {
            myPort.clear();          // clear the serial port buffer
            firstContact = true;     // you've had first contact from the microcontroller
            myPort.write('A');       // ask for more
          }
        }
        else {
          // Add the latest byte from the serial port to array:
          serialInArray[serialCount] = inByte;
          serialCount++;

          // If we have 3 bytes:
          if (serialCount > 2 ) {
            xpos = serialInArray[0];
            ypos = serialInArray[1];
            fgcolor = serialInArray[2];

            // print the values (for debugging purposes only):
            println(xpos + "\t" + ypos + "\t" + fgcolor);

            // Send a capital A to request new sensor readings:
            myPort.write('A');
            // Reset serialCount:
            serialCount = 0;
          }
        }
      }

    */

    /* Max/MSP version 5 patch to run with this example:

    ----------begin_max5_patcher----------
    3908.3oc6ckziiaiE9b0+J3XjCIXpp.WzZNMURv.jCInQ5fYNjNngrDssRKK
    4nkp6JA4+973hrkrsjncKu0SRiXasQ83G+dKj7QV+4qtaxzrOxKlf9Zzuft6
    t+7U2cm7ThSbm936lrL3igIAExaaRJ+CYS+sI2qtTI+ikxSuBMKNojm+N3D4
    Aua5KkPwpuoUAkgKhSm+tbdXo5cQXVOhuGwrohuHD4WT7iXzupen3HY4BuqG
    rH0kzrrzxzfkb4kdJONHo9JoUKiSS3kRgjt4jYUk0mkznPJh+CYgHewpSqty
    xWVwUh3jIqkEYEfmqQEMr.ETbB+YddQbVZix+tIAqV03z203QDX4ukIKHm6W
    ep3T0ovqOUN+435m2Rcx+5U0E+FTzVBh9xOsHXIh5YuADg1x4IYgumG0r3mj
    shmFmtJmWvSKCJ0um0WNhOKnJo7c6GmZe8YAg7Ne381Rc2j44wQYoBgn0SJN
    c8qCHH1RhQqJi7NRCVsmGt.pGUESCxE31zDdCV.PRyxRZeo0MU.WOHMdYPIu
    LVIrT75BMd4p73zxVuHdZ.TFKJByyRRZUTpq77dtRDzZFx+PbT4BYY0DJgaO
    dUcSvj0XTT7bdQY6yUFLun8YZo71jl0TIt042RYNLa4RfCTWfsznKWDWfJpl
    tJHrbgV6t.AZInfzWP.4INpJHA8za91u+6QN1nk7hh.PpQwonxEbTAWzpilV
    MimilkmsDtPbo3TPiUdY0pGa9ZShS4gYUJz1pwE1iwCpxbAgJI9DGGwWNzFT
    ksLf3z7M0MybG6Hj1WngsD7VEXS8j5q7Wu5U0+39ir8QJJS5GMHdtRimL4m1
    0e1EVX0YsE2YssINriYRoFRyWVMoRRUGQvnkmms3pnXDYHbBKMPpIOL5i1s8
    3rMPwFcRCsGRyPH780.8HBnpWz.vlEQBWJ+0CSunehJSmJxiIZRtNGhhDYrU
    jt3ZQyA2fHJhZDifXIQHUHH8oGYgOREI5nqHIzhFWUndPyBdB3VzHJGwUhkV
    rgvRl2UCVNMHcd234lf1DN16HFEIdHt99A5hrp7v5WWMSBQZgMP.Tkwoqig8
    W1.Sn1f3h3nn1wLpBypPDzlJ7XinEGkLiMPloWOhrgR7dpZWJQV1faDy35Qj
    MThMFkWFGsJChQPqrQp8iorV6Q28HBVF4nMVDJj7f1xyYACFScisg.ruLHOW
    uMUS4Am4pI4PTnHi.6bi02HNzSYnDBe4cgAgKzRk1jc8PJLoH3Ydz6.Q.7K8
    tfxx73oUkJq1MGuCy5TpAi.POWZ3AenidLOOIaZPhdjZVW3sdk6LXEGzHb7p
    Mfr7SEy3SXHyBSxJ3J2ncNNYVJsXG6Me10nj4cfCRFdTFjLo7q3SiCpjjEDM
    .nvra.GN39.E2CDTHWXPo8.xzfqrHCHKnf5QUYUVdoZPUjCSC7LU8.XtTUXl
    X8vr51GjwFGLC2AlMdLkU4RiaRrnmJuiudnDk0ZW+9p6TuKBe433JUCzp6fU
    iOF0SUk2UQYUPNTEkiZubvKa1tsmgL5SCTXGHnnG0CceLpkpR9Rs28IUESWl
    EwWNKfHlg.zj6Ee7S+nE8A+m9F7Cu40u9gMm+aRp3kYYkKd3GDOz5y+c7b96
    K9gfvuIK68uNO6g2vUUL80WxihCVFD9vlB30e2SOrmxUb527RZ3nZNrljGrR
    70vs1J9suWuZ3zaHVdG3RIJLgGj2Gfn6TcGcstEfvtH.hpFLlnBndjOLGQAI
    z98BXc6yQxghmOn6gZqj0ShPOXhynLOjzCESt+XwE8TxrCvrdXo16rqnLgvb
    HaFmbh29QD+K0DyNdjDwvzQL.NXpoMvoOBxkger0HwMRQbpbCh91fjjG9Idw
    prTH9SzaSea5a.GQEPnnh43WNefMlsOgx18n.vgUNO.tKl7tDyI3iHzafJHZ
    VVNedVEbGgYIY42i93prB0i7B7KT1LnnCiyAiinpBnsPV7OG.tYKfBsrJOkG
    UG5aq26iJw6GyJ4eM5mEgEKaNQPMEBUp.t8.krplOVTlZdJAW27bjvGK7p2p
    HQPgLOSJDYv4E9gQBYBjMUselRxDy+4WplIzm9JQAWOEmfb.E364B43CAwp5
    uRRDEv8hWXprjADMUOYpOg9.bVQpEfhKgGCnAnk.rghBJCdTVICA3sDvAhE5
    oU4hf67ea5zWPuILqrD8uiK+i477fjHIt9y.V88yy3uMsZUj7wnxGKNAdPx5
    fAZMErDZOcJU4M01WFQokix.pKa+JE1WacmnKFeYd7b.0PeIzB8Kk+5WIZpB
    Ejt34KJeHgOCh4HK8Y3QiAkAfs8TRhhOkG7AAGQf0qxyfmQxa+PLb8Ex.2PS
    4BdO5GB9Hvg+cfJCMofAIMu9Qz+UPCjckqVJlEmyA8Bf.rC6.3hAEuG8TdTU
    bZljQ0nr1ayIqmTwQYfyRGafZhur5vfuyMSqYNWmtAPwWHalDSuUgT0Bosh.
    JpAR89Y6Ez5QEfPTQO4J0DHLInIliz8BZV2JfV3Bd36qsQwAVVXbr1BGXp6s
    Sd5sSDruo74wofx.HxUgxQwTnMLqTXvRmiGh2PUZr5pBynKChjl6feNUjSRn
    hEUfRPT1GfG9Ik4TQBm.hEZZ.bc38HjAMKGzDRijEm1ifx1dbgzQyKh6FZc3
    wOCkRJH+KUh0daWs6wzltWx1puXxlWW6NZWY2JiTBzzILRIANku02NourySM
    VI1VJTvQZff32AJr+dS9e34QAoA6EGXlGFH9yk7yyQAlVd3SR94g+TxOu1sU
    Flgd6ICI96LzazyPu1cgqsZ8r74SgF.65+efbMf4pGHT7lgHh30Sha3N5Ia.
    oqjMf7nsuMwycf7iYDybiAAVr3eC.oTMjpzEr8GDRc9bFRGHYXDrzg.Tlx+q
    NW8TY1IkzCfZ2IftkQstbB08HUezoDS+oFyI.cWIhWBaDiUo7qIrDO7f.L6n
    AXqCmyNT9act.z+Iv.GR0uES0ZXfjdz.IczAxQOUR+zvRsUTigRxmyPYeNlj
    yXv8Peef2ZFzuLzWPPeAE8ELzWXYlhe8WzAcUg+b1UkIoCLzIH60zwASGXau
    a1Dq2nUY.sox4vng+m0nACePngC9lEMLZMBPodOxf+yx5d4uMCTHm3kJvIIG
    jcLMedEQldkjpoBkQyjY1Hk.hmSY95Iwos8NDb9VSlIWOIntqgxryUjL6bCJ
    y1lli5tWWxrQ7YmqGYlc6shK1iY2dr0wtNjYxgHyzaq0OznY235awCr8zSz6
    EGd1QNUKf.74dADTBbTbeotjpW95IolY0WpKYONY8M83Rx2MChx3fL+iG5Mm
    tXpdmvXj8uTvaAL1WjbbarQD4Z6kXBpnm6a69oKV2PY9WY174IbC3CaRQ9iK
    Q4sYGQpwdtZ5wFrc7n569.M83OOR5ydSB1ZcAWCxdbKuavz9LILxfD.wWO.W
    Nq+Zu4Es+AP6s5p9jDWH8ET+c85+XbW0.N1nDCTD7U4DGc6ohnU019fS7kQ0
    o43luuOGjv5agHp0DT.CysOfgLR3xXlXTUKm16RivRsn3z0O6cl3YScAvtrb
    hwekGB7BZuqESUzBJWmCvK7t9HF8Ts6cUAPoFWso3aP8ApWyJ3wqOPo2pJDC
    BQ0NI0Pj8QCQ2r1L5vKaU5lDRYX7yRur1UYYZmJQ9iDHwN9dndB5n5ejflmm
    UsBwLHnDkKXWRuAkb3NeuzqRstiQGP.fCQFdHNzaE.8u58Nz9svFE9SGIE1X
    kv9Iwfl1BdNWjA7xcThsWCS847loyFD8pZq2E2F04lYULzBTDYhrFSDDJdjo
    fisN2NUN26e4xRu51zD5ZseJ4HC63WyIX6jRqsp0jangBnK.Qlo58PCpWevt
    ahzqK7fbKsdX6R64aao8LmWhBPh9jKVAPMzb5a2cV6opdWHneMmqMEmAGsPh
    ieigIjV+4gF1GgbMNXg+NH44YaRYyd..S1ThHzKhFwwGRaWVITqyj9FvPqMT
    d0pDuSqDrOGF.Uogf.juCFi9WAUkYR+rFPanDcPG8SbrtjyG03ZQ8m3AqC5H
    NcUUoXSwVrqXKVcZu.5ZnkwIfIVdXVZTwAuTTUiYuxwjZDK6ZgnRtYV8tJmP
    hEcuXgz2Goxyaiw35UkaWbpqtfzD02oUkkYqi.YQbZqIIWrIljFolsdmMKFR
    wCJ2+DTn.9QlkOld+d9Qy9IJdpLfy05Ik2b8GsG9h8rdm1ZFx1FrmmlA2snw
    qI9Mcdi2nr6q3Gc87nLawurbw1dda+tMyGJ9HaQmlkGwy6davisMgrkM65oz
    eulfYCzG46am8tSDK144xV4cEvVMTRXq9CIX8+ALNWb6sttKNkiZetnbz+lx
    cQnb1Nds2C0tvLNe14hwQtxYbxhqc17qHfamUcZZ3NYSWqjJuiDoizZ+ud2j
    naRK4k3346IIVdR1kKiQjM39adMamvc6n+Xp36Yf3SIGh3uKbquqs1JksTII
    kuJ7RrZSFb2Cn9j5a6DT8cMo0iczU+lsYaU8YNVh5k5uzJLU26ZcfuJE6XLY
    0mcRp9NTCp+L+Ap+in7Xf3b9jFQBLtIY06PbrGhcrU6N00Qlaf9N0+QPo9nS
    P6qsI7aYNLSNOHpsAxis0ggnZLjYqyyFkdSqinVsPaqSDZaYBZ6c93uLCjGm
    iCroJVLzU45iNE.pIUfs3TWb.0FejHp9uANr0GcJPTroFDNOHpkIweLnI1QT
    dHl3P7LhOF3Ahd9rnvLwAMy5JSdNezGlsIsW9mW44r26js+alhxjlkdhN0YE
    YqiH5MTeWo6D4Qm.ieLS7OynmuVGSbmbFUlnWWhiQlhOeN+Yl35bq.tGo9JR
    cj8AVqdz7nSgVB9zNj.FTOU68o5d9KO5TUOGxVMw+jTO8T6wqD0hEiHsOJO5
    TTOMoS.zlqN0SpZjz6GcH05ylVM0jwuidlkmAif374ih5M5QPfccr8Hqifff
    otN8pt3hUcaWu8nosBhwmD0Epw5KmoF.poxy4YHbnjqfPJqcM3Y2vun7nS.i
    f3eETiqcRX2LR.4QmhZrkoCSGwzZrqKHrVR8caari+55d2caPqmq5n.ywe8Q
    WrZL9fpwVXeaogMByE6y1SMdjk+gbavbN7fYvVtt1C2XwHJSzpk+tidUO25H
    UB9onw9mlFQ10fhpZBaDatcMTTEGcJpwzqg92qqiVtM6Cu0IRQ0ndEdfCAqV
    l0qYAUmPrctbxO4XCuPMa1asYzKDks1D52ZCne6Mednz9qW8+.vfqkDA
    -----------end_max5_patcher-----------

    */`,
      robotPicURL: 'https://robohash.org/SerialCallResponse',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Serial Event',
      description: `Demonstrates the use of serialEvent()`,
      code: `
      /*
      Serial Event example

      When new serial data arrives, this sketch adds it to a String.
      When a newline is received, the loop prints the string and clears it.

      A good test for this is to try it with a GPS receiver that sends out
      NMEA 0183 sentences.

      NOTE: The serialEvent() feature is not available on the Leonardo, Micro, or
      other ATmega32U4 based boards.

      created 9 May 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/SerialEvent
    */

    String inputString = "";         // a String to hold incoming data
    bool stringComplete = false;  // whether the string is complete

    void setup() {
      // initialize serial:
      Serial.begin(9600);
      // reserve 200 bytes for the inputString:
      inputString.reserve(200);
    }

    void loop() {
      // print the string when a newline arrives:
      if (stringComplete) {
        Serial.println(inputString);
        // clear the string:
        inputString = "";
        stringComplete = false;
      }
    }

    /*
      SerialEvent occurs whenever a new data comes in the hardware serial RX. This
      routine is run between each time loop() runs, so using delay inside loop can
      delay response. Multiple bytes of data may be available.
    */
    void serialEvent() {
      while (Serial.available()) {
        // get the new byte:
        char inChar = (char)Serial.read();
        // add it to the inputString:
        inputString += inChar;
        // if the incoming character is a newline, set a flag so the main loop can
        // do something about it:
        if (inChar == '\n') {
          stringComplete = true;
        }
      }
    }`,
      robotPicURL: 'https://robohash.org/SerialEvent',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Serial Passthrough',
      description: `Demonstrates how to virtually connect Serial and Serial1`,
      code: `
      /*
      SerialPassthrough sketch

      Some boards, like the Arduino 101, the MKR1000, Zero, or the Micro, have one
      hardware serial port attached to Digital pins 0-1, and a separate USB serial
      port attached to the IDE Serial Monitor. This means that the "serial
      passthrough" which is possible with the Arduino UNO (commonly used to interact
      with devices/shields that require configuration via serial AT commands) will
      not work by default.

      This sketch allows you to emulate the serial passthrough behaviour. Any text
      you type in the IDE Serial monitor will be written out to the serial port on
      Digital pins 0 and 1, and vice-versa.

      On the 101, MKR1000, Zero, and Micro, "Serial" refers to the USB Serial port
      attached to the Serial Monitor, and "Serial1" refers to the hardware serial
      port attached to pins 0 and 1. This sketch will emulate Serial passthrough
      using those two Serial ports on the boards mentioned above, but you can change
      these names to connect any two serial ports on a board that has multiple ports.

      created 23 May 2016
      by Erik Nyquist
    */

    void setup() {
      Serial.begin(9600);
      Serial1.begin(9600);
    }

    void loop() {
      if (Serial.available()) {      // If anything comes in Serial (USB),
        Serial1.write(Serial.read());   // read it and send it out Serial1 (pins 0 & 1)
      }

      if (Serial1.available()) {     // If anything comes in Serial1 (pins 0 & 1)
        Serial.write(Serial1.read());   // read it and send it out Serial (USB)
      }
    }`,
      robotPicURL: 'https://robohash.org/SerialPassthrough',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Virtual Color Mixer',
      description: `Send multiple variables from Arduino to your computer and read them in Processing or Max/MSP`,
      code: `
      /*
      This example reads three analog sensors (potentiometers are easiest) and sends
      their values serially. The Processing and Max/MSP programs at the bottom take
      those three values and use them to change the background color of the screen.

      The circuit:
      - potentiometers attached to analog inputs 0, 1, and 2

      created 2 Dec 2006
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe and Scott Fitzgerald

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/VirtualColorMixer
    */

    const int redPin = A0;		// sensor to control red color
    const int greenPin = A1;	// sensor to control green color
    const int bluePin = A2;		// sensor to control blue color

    void setup() {
      Serial.begin(9600);
    }

    void loop() {
      Serial.print(analogRead(redPin));
      Serial.print(",");
      Serial.print(analogRead(greenPin));
      Serial.print(",");
      Serial.println(analogRead(bluePin));
    }

    /* Processing code for this example

      // This example code is in the public domain.

      import processing.serial.*;

      float redValue = 0;        // red value
      float greenValue = 0;      // green value
      float blueValue = 0;       // blue value

      Serial myPort;

      void setup() {
        size(200, 200);

        // List all the available serial ports
        // if using Processing 2.1 or later, use Serial.printArray()
        println(Serial.list());

        // I know that the first port in the serial list on my Mac is always my
        // Arduino, so I open Serial.list()[0].
        // Open whatever port is the one you're using.
        myPort = new Serial(this, Serial.list()[0], 9600);
        // don't generate a serialEvent() unless you get a newline character:
        myPort.bufferUntil('\n');
      }

      void draw() {
        // set the background color with the color values:
        background(redValue, greenValue, blueValue);
      }

      void serialEvent(Serial myPort) {
        // get the ASCII string:
        String inString = myPort.readStringUntil('\n');

        if (inString != null) {
          // trim off any whitespace:
          inString = trim(inString);
          // split the string on the commas and convert the resulting substrings
          // into an integer array:
          float[] colors = float(split(inString, ","));
          // if the array has at least three elements, you know you got the whole
          // thing.  Put the numbers in the color variables:
          if (colors.length >= 3) {
            // map them to the range 0-255:
            redValue = map(colors[0], 0, 1023, 0, 255);
            greenValue = map(colors[1], 0, 1023, 0, 255);
            blueValue = map(colors[2], 0, 1023, 0, 255);
          }
        }
      }

    */

    /* Max/MSP patch for this example

     ----------begin_max5_patcher----------
    1512.3oc4Z00aaaCE8YmeED9ktB35xOjrj1aAsXX4g8xZQeYoXfVh1gqRjdT
    TsIsn+2K+PJUovVVJ1VMdCAvxThV7bO7b48dIyWtXxzkxaYkSA+J3u.Sl7kK
    lLwcK6MlT2dxzB5so4zRW2lJXeRt7elNy+HM6Vs61uDDzbOYkNmo02sg4euS
    4BSede8S2P0o2vEq+aEKU66PPP7b3LPHDauPvyCmAvv4v6+M7L2XXF2WfCaF
    lURgVPKbCxzKUbZdySDUEbgABN.ia08R9mccGYGn66qGutNir27qWbg8iY+7
    HDRx.Hjf+OPHCQgPdpQHoxhBlwB+QF4cbkthlCRk4REnfeKScs3ZwaugWBbj
    .PS+.qDPAkZkgPlY5oPS4By2A5aTLFv9pounjsgpnZVF3x27pqtBrRpJnZaa
    C3WxTkfUJYA.BzR.BhIy.ehquw7dSoJCsrlATLckR.nhLPNWvVwL+Vp1LHL.
    SjMG.tRaG7OxT5R2c8Hx9B8.wLCxVaGI6qnpj45Ug84kL+6YIM8CqUxJyycF
    7bqsBRULGvwfWyRMyovElat7NvqoejaLm4f+fkmyKuVTHy3q3ldhB.WtQY6Z
    x0BSOeSpTqA+FW+Yy3SyybH3sFy8p0RVCmaMpTyX6HdDZ2JsPbfSogbBMueH
    JLd6RMBdfRMzPjZvimuWIK2XgFA.ZmtfKoh0Sm88qc6OF4bDQ3P6kEtF6xej
    .OkjD4H5OllyS+.3FlhY0so4xRlWqyrXErQpt+2rsnXgQNZHZgmMVzEofW7T
    S4zORQtgIdDbRHrObRzSMNofUVZVcbKbhQZrSOo934TqRHIN2ncr7BF8TKR1
    tHDqL.PejLRRPKMR.pKFAkbtDa+UOvsYsIFH0DYsTCjqZ66T1CmGeDILLpSm
    myk0SdkOKh5LUr4GbWwRYdW7fm.BvDmzHnSdH3biGpSbxxDNJoGDAD1ChH7L
    I0DaloOTBLvkO7zPs5HJnKNoGAXbol5eytUhfyiSfnjE1uAq+Fp0a+wygGwR
    q3ZI8.psJpkpJnyPzwmXBj7Sh.+bNvVZxlcKAm0OYHIxcIjzEKdRChgO5UMf
    LkMPNN0MfiS7Ev6TYQct.F5IWcCZ4504rGsiVswGWWSYyma01QcZgmL+f+sf
    oU18Hn6o6dXkMkFF14TL9rIAWE+6wvGV.p.TPqz3HK5L+VxYxl4UmBKEjr.B
    6zinuKI3C+D2Y7azIM6N7QL6t+jQyZxymK1ToAKqVsxjlGyjz2c1kTK3180h
    kJEYkacWpv6lyp2VJTjWK47wHA6fyBOWxH9pUf6jUtZkLpNKW.9EeUBH3ymY
    XSQlaqGrkQMGzp20adYSmIOGjIABo1xZyAWJtCX9tg6+HMuhMCPyx76ao+Us
    UxmzUE79H8d2ZB1m1ztbnOa1mGeAq0awyK8a9UqBUc6pZolpzurTK232e5gp
    aInVw8QIIcpaiNSJfY4Z+92Cs+Mc+mgg2cEsvGlLY6V+1kMuioxnB5VM+fsY
    9vSu4WI1PMBGXye6KXvNuzmZTh7U9h5j6vvASdngPdgOFxycNL6ia1axUMmT
    JIzebXcQCn3SKMf+4QCMmOZung+6xBCPLfwO8ngcEI52YJ1y7mx3CN9xKUYU
    bg7Y1yXjlKW6SrZnguQdsSfOSSDItqv2jwJFjavc1vO7OigyBr2+gDYorRk1
    HXZpVFfu2FxXkZtfp4RQqNkX5y2sya3YYL2iavWAOaizH+pw.Ibg8f1I9h3Z
    2B79sNeOHvBOtfEalWsvyu0KMf015.AaROvZ7vv5AhnndfHLbTgjcCK1KlHv
    gOk5B26OqrXjcJ005.QqCHn8fVTxnxfj93SfQiJlv8YV0VT9fVUwOOhSV3uD
    eeqCUClbBPa.j3vWDoMZssNTzRNEnE6gYPXazZaMF921syaLWyAeBXvCESA8
    ASi6Zyw8.RQi65J8ZsNx3ho93OhGWENtWpowepae4YhCFeLErOLENtXJrOSc
    iadi39rf4hwc8xdhHz3gn3dBI7iDRlFe8huAfIZhq
    -----------end_max5_patcher-----------

    */`,
      robotPicURL: 'https://robohash.org/VirtualColorMixer',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/*************Control*************************************************/
    {
      name: 'Arrays',
      description: `A variation on the For Loop example that demonstrates how to use an array`,
      code: `
      /*
      Arrays

      Demonstrates the use of an array to hold pin numbers in order to iterate over
      the pins in a sequence. Lights multiple LEDs in sequence, then in reverse.

      Unlike the For Loop tutorial, where the pins have to be contiguous, here the
      pins can be in any random order.

      The circuit:
      - LEDs from pins 2 through 7 to ground

      created 2006
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Array
    */

    int timer = 100;           // The higher the number, the slower the timing.
    int ledPins[] = {
      2, 7, 4, 6, 5, 3
    };       // an array of pin numbers to which LEDs are attached
    int pinCount = 6;           // the number of pins (i.e. the length of the array)

    void setup() {
      // the array elements are numbered from 0 to (pinCount - 1).
      // use a for loop to initialize each pin as an output:
      for (int thisPin = 0; thisPin < pinCount; thisPin++) {
        pinMode(ledPins[thisPin], OUTPUT);
      }
    }

    void loop() {
      // loop from the lowest pin to the highest:
      for (int thisPin = 0; thisPin < pinCount; thisPin++) {
        // turn the pin on:
        digitalWrite(ledPins[thisPin], HIGH);
        delay(timer);
        // turn the pin off:
        digitalWrite(ledPins[thisPin], LOW);

      }

      // loop from the highest pin to the lowest:
      for (int thisPin = pinCount - 1; thisPin >= 0; thisPin--) {
        // turn the pin on:
        digitalWrite(ledPins[thisPin], HIGH);
        delay(timer);
        // turn the pin off:
        digitalWrite(ledPins[thisPin], LOW);
      }
    }`,
      robotPicURL: 'https://robohash.org/Arrays',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'For Loop Iteration',
      description: `Control multiple LEDs with a for loop`,
      code: `
      /*
      For Loop Iteration

      Demonstrates the use of a for() loop.
      Lights multiple LEDs in sequence, then in reverse.

      The circuit:
      - LEDs from pins 2 through 7 to ground

      created 2006
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ForLoop
    */

    int timer = 100;           // The higher the number, the slower the timing.

    void setup() {
      // use a for loop to initialize each pin as an output:
      for (int thisPin = 2; thisPin < 8; thisPin++) {
        pinMode(thisPin, OUTPUT);
      }
    }

    void loop() {
      // loop from the lowest pin to the highest:
      for (int thisPin = 2; thisPin < 8; thisPin++) {
        // turn the pin on:
        digitalWrite(thisPin, HIGH);
        delay(timer);
        // turn the pin off:
        digitalWrite(thisPin, LOW);
      }

      // loop from the highest pin to the lowest:
      for (int thisPin = 7; thisPin >= 2; thisPin--) {
        // turn the pin on:
        digitalWrite(thisPin, HIGH);
        delay(timer);
        // turn the pin off:
        digitalWrite(thisPin, LOW);
      }
    }`,
      robotPicURL: 'https://robohash.org/ForLoopIteration',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'If Statement Conditional',
      description: `Use an ‘if statement' to change the output conditions based on changing the input conditions`,
      code: `
      /*
      Conditionals - If statement

      This example demonstrates the use of if() statements.
      It reads the state of a potentiometer (an analog input) and turns on an LED
      only if the potentiometer goes above a certain threshold level. It prints the
      analog value regardless of the level.

      The circuit:
      - potentiometer
        Center pin of the potentiometer goes to analog pin 0.
        Side pins of the potentiometer go to +5V and ground.
      - LED connected from digital pin 13 to ground

      - Note: On most Arduino boards, there is already an LED on the board connected
        to pin 13, so you don't need any extra components for this example.

      created 17 Jan 2009
      modified 9 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/IfStatement
    */

    // These constants won't change:
    const int analogPin = A0;    // pin that the sensor is attached to
    const int ledPin = 13;       // pin that the LED is attached to
    const int threshold = 400;   // an arbitrary threshold level that's in the range of the analog input

    void setup() {
      // initialize the LED pin as an output:
      pinMode(ledPin, OUTPUT);
      // initialize serial communications:
      Serial.begin(9600);
    }

    void loop() {
      // read the value of the potentiometer:
      int analogValue = analogRead(analogPin);

      // if the analog value is high enough, turn on the LED:
      if (analogValue > threshold) {
        digitalWrite(ledPin, HIGH);
      } else {
        digitalWrite(ledPin, LOW);
      }

      // print the analog value:
      Serial.println(analogValue);
      delay(1);        // delay in between reads for stability
    }`,
      robotPicURL: 'https://robohash.org/IfStatementConditional',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Switch Case Statement',
      description: `How to choose between a discrete number of values`,
      code: `
      /*
      Switch statement

      Demonstrates the use of a switch statement. The switch statement allows you
      to choose from among a set of discrete values of a variable. It's like a
      series of if statements.

      To see this sketch in action, put the board and sensor in a well-lit room,
      open the Serial Monitor, and move your hand gradually down over the sensor.

      The circuit:
      - photoresistor from analog in 0 to +5V
      - 10K resistor from analog in 0 to ground

      created 1 Jul 2009
      modified 9 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/SwitchCase
    */

    // these constants won't change. They are the lowest and highest readings you
    // get from your sensor:
    const int sensorMin = 0;      // sensor minimum, discovered through experiment
    const int sensorMax = 600;    // sensor maximum, discovered through experiment

    void setup() {
      // initialize serial communication:
      Serial.begin(9600);
    }

    void loop() {
      // read the sensor:
      int sensorReading = analogRead(A0);
      // map the sensor range to a range of four options:
      int range = map(sensorReading, sensorMin, sensorMax, 0, 3);

      // do something different depending on the range value:
      switch (range) {
        case 0:    // your hand is on the sensor
          Serial.println("dark");
          break;
        case 1:    // your hand is close to the sensor
          Serial.println("dim");
          break;
        case 2:    // your hand is a few inches from the sensor
          Serial.println("medium");
          break;
        case 3:    // your hand is nowhere near the sensor
          Serial.println("bright");
          break;
      }
      delay(1);        // delay in between reads for stability
    }`,
      robotPicURL: 'https://robohash.org/Switchcase',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'While Statement',
      description: `How to use a while loop to calibrate a sensor while a button is being read`,
      code: `
      /*
      Conditionals - while statement

      This example demonstrates the use of  while() statements.

      While the pushbutton is pressed, the sketch runs the calibration routine.
      The sensor readings during the while loop define the minimum and maximum of
      expected values from the photoresistor.

      This is a variation on the calibrate example.

      The circuit:
      - photoresistor connected from +5V to analog in pin 0
      - 10 kilohm resistor connected from ground to analog in pin 0
      - LED connected from digital pin 9 to ground through 220 ohm resistor
      - pushbutton attached from pin 2 to +5V
      - 10 kilohm resistor attached from pin 2 to ground

      created 17 Jan 2009
      modified 30 Aug 2011
      by Tom Igoe
      modified 20 Jan 2017
      by Arturo Guadalupi

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/WhileLoop
    */


    // These constants won't change:
    const int sensorPin = A0;       // pin that the sensor is attached to
    const int ledPin = 9;           // pin that the LED is attached to
    const int indicatorLedPin = 13; // pin that the built-in LED is attached to
    const int buttonPin = 2;        // pin that the button is attached to


    // These variables will change:
    int sensorMin = 1023;  // minimum sensor value
    int sensorMax = 0;     // maximum sensor value
    int sensorValue = 0;         // the sensor value


    void setup() {
      // set the LED pins as outputs and the switch pin as input:
      pinMode(indicatorLedPin, OUTPUT);
      pinMode(ledPin, OUTPUT);
      pinMode(buttonPin, INPUT);
    }

    void loop() {
      // while the button is pressed, take calibration readings:
      while (digitalRead(buttonPin) == HIGH) {
        calibrate();
      }
      // signal the end of the calibration period
      digitalWrite(indicatorLedPin, LOW);

      // read the sensor:
      sensorValue = analogRead(sensorPin);

      // apply the calibration to the sensor reading
      sensorValue = map(sensorValue, sensorMin, sensorMax, 0, 255);

      // in case the sensor value is outside the range seen during calibration
      sensorValue = constrain(sensorValue, 0, 255);

      // fade the LED using the calibrated value:
      analogWrite(ledPin, sensorValue);
    }

    void calibrate() {
      // turn on the indicator LED to indicate that calibration is happening:
      digitalWrite(indicatorLedPin, HIGH);
      // read the sensor:
      sensorValue = analogRead(sensorPin);

      // record the maximum sensor value
      if (sensorValue > sensorMax) {
        sensorMax = sensorValue;
      }

      // record the minimum sensor value
      if (sensorValue < sensorMin) {
        sensorMin = sensorValue;
      }
    }`,
      robotPicURL: 'https://robohash.org/WhileStatement',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/*************Sensors*************************************************/
    {
      name: 'ADXL3xx',
      description: `Read an ADXL3xx accelerometer`,
      code: `
      /*
      ADXL3xx

      Reads an Analog Devices ADXL3xx accelerometer and communicates the
      acceleration to the computer. The pins used are designed to be easily
      compatible with the breakout boards from SparkFun, available from:
      http://www.sparkfun.com/commerce/categories.php?c=80

      The circuit:
      - analog 0: accelerometer self test
      - analog 1: z-axis
      - analog 2: y-axis
      - analog 3: x-axis
      - analog 4: ground
      - analog 5: vcc

      created 2 Jul 2008
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ADXL3xx
    */

    // these constants describe the pins. They won't change:
    const int groundpin = 18;             // analog input pin 4 -- ground
    const int powerpin = 19;              // analog input pin 5 -- voltage
    const int xpin = A3;                  // x-axis of the accelerometer
    const int ypin = A2;                  // y-axis
    const int zpin = A1;                  // z-axis (only on 3-axis models)

    void setup() {
      // initialize the serial communications:
      Serial.begin(9600);

      // Provide ground and power by using the analog inputs as normal digital pins.
      // This makes it possible to directly connect the breakout board to the
      // Arduino. If you use the normal 5V and GND pins on the Arduino,
      // you can remove these lines.
      pinMode(groundpin, OUTPUT);
      pinMode(powerpin, OUTPUT);
      digitalWrite(groundpin, LOW);
      digitalWrite(powerpin, HIGH);
    }

    void loop() {
      // print the sensor values:
      Serial.print(analogRead(xpin));
      // print a tab between values:
      Serial.print("\t");
      Serial.print(analogRead(ypin));
      // print a tab between values:
      Serial.print("\t");
      Serial.print(analogRead(zpin));
      Serial.println();
      // delay before next reading:
      delay(100);
    }`,
      robotPicURL: 'https://robohash.org/ADXL3xx',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Knock',
      description: `Detect knocks with a piezo element`,
      code: `
      /*
      Knock Sensor

      This sketch reads a piezo element to detect a knocking sound.
      It reads an analog pin and compares the result to a set threshold.
      If the result is greater than the threshold, it writes "knock" to the serial
      port, and toggles the LED on pin 13.

      The circuit:
      - positive connection of the piezo attached to analog in 0
      - negative connection of the piezo attached to ground
      - 1 megohm resistor attached from analog in 0 to ground

      created 25 Mar 2007
      by David Cuartielles <http://www.0j0.org>
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Knock
    */


    // these constants won't change:
    const int ledPin = 13;      // LED connected to digital pin 13
    const int knockSensor = A0; // the piezo is connected to analog pin 0
    const int threshold = 100;  // threshold value to decide when the detected sound is a knock or not


    // these variables will change:
    int sensorReading = 0;      // variable to store the value read from the sensor pin
    int ledState = LOW;         // variable used to store the last LED status, to toggle the light

    void setup() {
      pinMode(ledPin, OUTPUT); // declare the ledPin as as OUTPUT
      Serial.begin(9600);       // use the serial port
    }

    void loop() {
      // read the sensor and store it in the variable sensorReading:
      sensorReading = analogRead(knockSensor);

      // if the sensor reading is greater than the threshold:
      if (sensorReading >= threshold) {
        // toggle the status of the ledPin:
        ledState = !ledState;
        // update the LED pin itself:
        digitalWrite(ledPin, ledState);
        // send the string "Knock!" back to the computer, followed by newline
        Serial.println("Knock!");
      }
      delay(100);  // delay to avoid overloading the serial port buffer
    }`,
      robotPicURL: 'https://robohash.org/Knock',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Memsic2125',
      description: `Two-axis accelerometer`,
      code: `
      /*
      Memsic2125

      Read the Memsic 2125 two-axis accelerometer. Converts the pulses output by the
      2125 into milli-g's (1/1000 of Earth's gravity) and prints them over the
      serial connection to the computer.

      The circuit:
      - X output of accelerometer to digital pin 2
      - Y output of accelerometer to digital pin 3
      - +V of accelerometer to +5V
      - GND of accelerometer to ground

      created 6 Nov 2008
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Memsic2125
    */

    // these constants won't change:
    const int xPin = 2;		// X output of the accelerometer
    const int yPin = 3;		// Y output of the accelerometer

    void setup() {
      // initialize serial communications:
      Serial.begin(9600);
      // initialize the pins connected to the accelerometer as inputs:
      pinMode(xPin, INPUT);
      pinMode(yPin, INPUT);
    }

    void loop() {
      // variables to read the pulse widths:
      int pulseX, pulseY;
      // variables to contain the resulting accelerations
      int accelerationX, accelerationY;

      // read pulse from x- and y-axes:
      pulseX = pulseIn(xPin, HIGH);
      pulseY = pulseIn(yPin, HIGH);

      // convert the pulse width into acceleration
      // accelerationX and accelerationY are in milli-g's:
      // Earth's gravity is 1000 milli-g's, or 1 g.
      accelerationX = ((pulseX / 10) - 500) * 8;
      accelerationY = ((pulseY / 10) - 500) * 8;

      // print the acceleration
      Serial.print(accelerationX);
      // print a tab character:
      Serial.print("\t");
      Serial.print(accelerationY);
      Serial.println();

      delay(100);
    }`,
      robotPicURL: 'https://robohash.org/Memsic',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ping',
      description: `Detect objects with an ultrasonic range finder`,
      code: `
      /*
      Ping))) Sensor

      This sketch reads a PING))) ultrasonic rangefinder and returns the distance
      to the closest object in range. To do this, it sends a pulse to the sensor to
      initiate a reading, then listens for a pulse to return. The length of the
      returning pulse is proportional to the distance of the object from the sensor.

      The circuit:
      - +V connection of the PING))) attached to +5V
      - GND connection of the PING))) attached to ground
      - SIG connection of the PING))) attached to digital pin 7

      created 3 Nov 2008
      by David A. Mellis
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/Ping
    */

    // this constant won't change. It's the pin number of the sensor's output:
    const int pingPin = 7;

    void setup() {
      // initialize serial communication:
      Serial.begin(9600);
    }

    void loop() {
      // establish variables for duration of the ping, and the distance result
      // in inches and centimeters:
      long duration, inches, cm;

      // The PING))) is triggered by a HIGH pulse of 2 or more microseconds.
      // Give a short LOW pulse beforehand to ensure a clean HIGH pulse:
      pinMode(pingPin, OUTPUT);
      digitalWrite(pingPin, LOW);
      delayMicroseconds(2);
      digitalWrite(pingPin, HIGH);
      delayMicroseconds(5);
      digitalWrite(pingPin, LOW);

      // The same pin is used to read the signal from the PING))): a HIGH pulse
      // whose duration is the time (in microseconds) from the sending of the ping
      // to the reception of its echo off of an object.
      pinMode(pingPin, INPUT);
      duration = pulseIn(pingPin, HIGH);

      // convert the time into a distance
      inches = microsecondsToInches(duration);
      cm = microsecondsToCentimeters(duration);

      Serial.print(inches);
      Serial.print("in, ");
      Serial.print(cm);
      Serial.print("cm");
      Serial.println();

      delay(100);
    }

    long microsecondsToInches(long microseconds) {
      // According to Parallax's datasheet for the PING))), there are 73.746
      // microseconds per inch (i.e. sound travels at 1130 feet per second).
      // This gives the distance travelled by the ping, outbound and return,
      // so we divide by 2 to get the distance of the obstacle.
      // See: http://www.parallax.com/dl/docs/prod/acc/28015-PING-v1.3.pdf
      return microseconds / 74 / 2;
    }

    long microsecondsToCentimeters(long microseconds) {
      // The speed of sound is 340 m/s or 29 microseconds per centimeter.
      // The ping travels out and back, so to find the distance of the object we
      // take half of the distance travelled.
      return microseconds / 29 / 2;
    }`,
      robotPicURL: 'https://robohash.org/Ping',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/*************Display*************************************************/
    {
      name: 'Bar graph',
      description: `Make an LED bar graph`,
      code: `
      /*
      LED bar graph

      Turns on a series of LEDs based on the value of an analog sensor.
      This is a simple way to make a bar graph display. Though this graph uses 10
      LEDs, you can use any number by changing the LED count and the pins in the
      array.

      This method can be used to control any series of digital outputs that depends
      on an analog input.

      The circuit:
      - LEDs from pins 2 through 11 to ground

      created 4 Sep 2010
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/BarGraph
    */

    // these constants won't change:
    const int analogPin = A0;   // the pin that the potentiometer is attached to
    const int ledCount = 10;    // the number of LEDs in the bar graph

    int ledPins[] = {
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    };   // an array of pin numbers to which LEDs are attached


    void setup() {
      // loop over the pin array and set them all to output:
      for (int thisLed = 0; thisLed < ledCount; thisLed++) {
        pinMode(ledPins[thisLed], OUTPUT);
      }
    }

    void loop() {
      // read the potentiometer:
      int sensorReading = analogRead(analogPin);
      // map the result to a range from 0 to the number of LEDs:
      int ledLevel = map(sensorReading, 0, 1023, 0, ledCount);

      // loop over the LED array:
      for (int thisLed = 0; thisLed < ledCount; thisLed++) {
        // if the array element's index is less than ledLevel,
        // turn the pin for this element on:
        if (thisLed < ledLevel) {
          digitalWrite(ledPins[thisLed], HIGH);
        }
        // turn off all pins higher than the ledLevel:
        else {
          digitalWrite(ledPins[thisLed], LOW);
        }
      }
    }`,
      robotPicURL: 'https://robohash.org/BarGraph',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Row Column Scanning',
      description: `Control an 8x8 matrix of LEDs`,
      code: `
      /*
      Row-Column Scanning an 8x8 LED matrix with X-Y input

      This example controls an 8x8 LED matrix using two analog inputs.

      This example works for the Lumex LDM-24488NI Matrix. See
      http://sigma.octopart.com/140413/datasheet/Lumex-LDM-24488NI.pdf
      for the pin connections.

      For other LED cathode column matrixes, you should only need to change the pin
      numbers in the row[] and column[] arrays.

      rows are the anodes
      cols are the cathodes
      ---------

      Pin numbers:
      Matrix:
      - digital pins 2 through 13,
      - analog pins 2 through 5 used as digital 16 through 19
      Potentiometers:
      - center pins are attached to analog pins 0 and 1, respectively
      - side pins attached to +5V and ground, respectively

      created 27 May 2009
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/RowColumnScanning

      see also http://www.tigoe.net/pcomp/code/category/arduinowiring for more
    */

    // 2-dimensional array of row pin numbers:
    const int row[8] = {
      2, 7, 19, 5, 13, 18, 12, 16
    };

    // 2-dimensional array of column pin numbers:
    const int col[8] = {
      6, 11, 10, 3, 17, 4, 8, 9
    };

    // 2-dimensional array of pixels:
    int pixels[8][8];

    // cursor position:
    int x = 5;
    int y = 5;

    void setup() {
      // initialize the I/O pins as outputs iterate over the pins:
      for (int thisPin = 0; thisPin < 8; thisPin++) {
        // initialize the output pins:
        pinMode(col[thisPin], OUTPUT);
        pinMode(row[thisPin], OUTPUT);
        // take the col pins (i.e. the cathodes) high to ensure that the LEDS are off:
        digitalWrite(col[thisPin], HIGH);
      }

      // initialize the pixel matrix:
      for (int x = 0; x < 8; x++) {
        for (int y = 0; y < 8; y++) {
          pixels[x][y] = HIGH;
        }
      }
    }

    void loop() {
      // read input:
      readSensors();

      // draw the screen:
      refreshScreen();
    }

    void readSensors() {
      // turn off the last position:
      pixels[x][y] = HIGH;
      // read the sensors for X and Y values:
      x = 7 - map(analogRead(A0), 0, 1023, 0, 7);
      y = map(analogRead(A1), 0, 1023, 0, 7);
      // set the new pixel position low so that the LED will turn on in the next
      // screen refresh:
      pixels[x][y] = LOW;

    }

    void refreshScreen() {
      // iterate over the rows (anodes):
      for (int thisRow = 0; thisRow < 8; thisRow++) {
        // take the row pin (anode) high:
        digitalWrite(row[thisRow], HIGH);
        // iterate over the cols (cathodes):
        for (int thisCol = 0; thisCol < 8; thisCol++) {
          // get the state of the current pixel;
          int thisPixel = pixels[thisRow][thisCol];
          // when the row is HIGH and the col is LOW,
          // the LED where they meet turns on:
          digitalWrite(col[thisCol], thisPixel);
          // turn the pixel off:
          if (thisPixel == LOW) {
            digitalWrite(col[thisCol], HIGH);
          }
        }
        // take the row pin low to turn off the whole row:
        digitalWrite(row[thisRow], LOW);
      }
    }`,
      robotPicURL: 'https://robohash.org/RowColumnScanning',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/*************Strings*************************************************/
    {
      name: 'Character Analysis',
      description: `Use the operators to recognise the type of character we are dealing with`,
      code: `
      /*
      Character analysis operators

      Examples using the character analysis operators.
      Send any byte and the sketch will tell you about it.

      created 29 Nov 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/CharacterAnalysis
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("send any byte and I'll tell you everything I can about it");
      Serial.println();
    }

    void loop() {
      // get any incoming bytes:
      if (Serial.available() > 0) {
        int thisChar = Serial.read();

        // say what was sent:
        Serial.print("You sent me: \'");
        Serial.write(thisChar);
        Serial.print("\'  ASCII Value: ");
        Serial.println(thisChar);

        // analyze what was sent:
        if (isAlphaNumeric(thisChar)) {
          Serial.println("it's alphanumeric");
        }
        if (isAlpha(thisChar)) {
          Serial.println("it's alphabetic");
        }
        if (isAscii(thisChar)) {
          Serial.println("it's ASCII");
        }
        if (isWhitespace(thisChar)) {
          Serial.println("it's whitespace");
        }
        if (isControl(thisChar)) {
          Serial.println("it's a control character");
        }
        if (isDigit(thisChar)) {
          Serial.println("it's a numeric digit");
        }
        if (isGraph(thisChar)) {
          Serial.println("it's a printable character that's not whitespace");
        }
        if (isLowerCase(thisChar)) {
          Serial.println("it's lower case");
        }
        if (isPrintable(thisChar)) {
          Serial.println("it's printable");
        }
        if (isPunct(thisChar)) {
          Serial.println("it's punctuation");
        }
        if (isSpace(thisChar)) {
          Serial.println("it's a space character");
        }
        if (isUpperCase(thisChar)) {
          Serial.println("it's upper case");
        }
        if (isHexadecimalDigit(thisChar)) {
          Serial.println("it's a valid hexadecimaldigit (i.e. 0 - 9, a - F, or A - F)");
        }

        // add some space and ask for another byte:
        Serial.println();
        Serial.println("Give me another byte:");
        Serial.println();
      }
    }`,
      robotPicURL: 'https://robohash.org/CharacterAnalysis',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Addition Operator',
      description: `Add strings together in a variety of ways`,
      code: `
      /*
      Adding Strings together

      Examples of how to add Strings together
      You can also add several different data types to String, as shown here:

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringAdditionOperator
    */

    // declare three Strings:
    String stringOne, stringTwo, stringThree;

    void setup() {
      // initialize serial and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      stringOne = String("You added ");
      stringTwo = String("this string");
      stringThree = String();
      // send an intro:
      Serial.println("\n\nAdding Strings together (concatenation):");
      Serial.println();
    }

    void loop() {
      // adding a constant integer to a String:
      stringThree =  stringOne + 123;
      Serial.println(stringThree);    // prints "You added 123"

      // adding a constant long integer to a String:
      stringThree = stringOne + 123456789;
      Serial.println(stringThree);    // prints "You added 123456789"

      // adding a constant character to a String:
      stringThree =  stringOne + 'A';
      Serial.println(stringThree);    // prints "You added A"

      // adding a constant string to a String:
      stringThree =  stringOne +  "abc";
      Serial.println(stringThree);    // prints "You added abc"

      stringThree = stringOne + stringTwo;
      Serial.println(stringThree);    // prints "You added this string"

      // adding a variable integer to a String:
      int sensorValue = analogRead(A0);
      stringOne = "Sensor value: ";
      stringThree = stringOne  + sensorValue;
      Serial.println(stringThree);    // prints "Sensor Value: 401" or whatever value analogRead(A0) has

      // adding a variable long integer to a String:
      stringOne = "millis() value: ";
      stringThree = stringOne + millis();
      Serial.println(stringThree);    // prints "The millis: 345345" or whatever value millis() has

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringAdditionOperator',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Append Operator',
      description: `Use the += operator and the concat() method to append things to Strings`,
      code: `
      /*
      Appending to Strings using the += operator and concat()

      Examples of how to append different data types to Strings

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringAppendOperator
    */

    String stringOne, stringTwo;

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      stringOne = String("Sensor ");
      stringTwo = String("value");
      // send an intro:
      Serial.println("\n\nAppending to a String:");
      Serial.println();
    }

    void loop() {
      Serial.println(stringOne);  // prints  "Sensor "

      // adding a string to a String:
      stringOne += stringTwo;
      Serial.println(stringOne);  // prints "Sensor value"

      // adding a constant string to a String:
      stringOne += " for input ";
      Serial.println(stringOne);  // prints "Sensor value for input"

      // adding a constant character to a String:
      stringOne += 'A';
      Serial.println(stringOne);   // prints "Sensor value for input A"

      // adding a constant integer to a String:
      stringOne += 0;
      Serial.println(stringOne);   // prints "Sensor value for input A0"

      // adding a constant string to a String:
      stringOne += ": ";
      Serial.println(stringOne);  // prints "Sensor value for input"

      // adding a variable integer to a String:
      stringOne += analogRead(A0);
      Serial.println(stringOne);   // prints "Sensor value for input A0: 456" or whatever analogRead(A0) is

      Serial.println("\n\nchanging the Strings' values");
      stringOne = "A long integer: ";
      stringTwo = "The millis(): ";

      // adding a constant long integer to a String:
      stringOne += 123456789;
      Serial.println(stringOne);   // prints "A long integer: 123456789"

      // using concat() to add a long variable to a String:
      stringTwo.concat(millis());
      Serial.println(stringTwo); // prints "The millis(): 43534" or whatever the value of the millis() is

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringAppendOperator',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Case Changes',
      description: `Change the case of a string`,
      code: `
      /*
      String Case changes

      Examples of how to change the case of a String

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringCaseChanges
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString case changes:");
      Serial.println();
    }

    void loop() {
      // toUpperCase() changes all letters to upper case:
      String stringOne = "<html><head><body>";
      Serial.println(stringOne);
      stringOne.toUpperCase();
      Serial.println(stringOne);

      // toLowerCase() changes all letters to lower case:
      String stringTwo = "</BODY></HTML>";
      Serial.println(stringTwo);
      stringTwo.toLowerCase();
      Serial.println(stringTwo);


      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringCaseChanges',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Characters',
      description: `Get/set the value of a specific character in a string`,
      code: `
      /*
      String charAt() and setCharAt()

      Examples of how to get and set characters of a String

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringCharacters
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      Serial.println("\n\nString charAt() and setCharAt():");
    }

    void loop() {
      // make a String to report a sensor reading:
      String reportString = "SensorReading: 456";
      Serial.println(reportString);

      // the reading's most significant digit is at position 15 in the reportString:
      char mostSignificantDigit = reportString.charAt(15);

      String message = "Most significant digit of the sensor reading is: ";
      Serial.println(message + mostSignificantDigit);

      // add blank space:
      Serial.println();

      // you can also set the character of a String. Change the : to a = character
      reportString.setCharAt(13, '=');
      Serial.println(reportString);

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringCharacters',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Comparison Operators',
      description: `Compare strings alphabetically`,
      code: `
      /*
      Comparing Strings

      Examples of how to compare Strings using the comparison operators

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringComparisonOperators
    */

    String stringOne, stringTwo;

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }


      stringOne = String("this");
      stringTwo = String("that");
      // send an intro:
      Serial.println("\n\nComparing Strings:");
      Serial.println();

    }

    void loop() {
      // two Strings equal:
      if (stringOne == "this") {
        Serial.println("StringOne == \"this\"");
      }
      // two Strings not equal:
      if (stringOne != stringTwo) {
        Serial.println(stringOne + " =! " + stringTwo);
      }

      // two Strings not equal (case sensitivity matters):
      stringOne = "This";
      stringTwo = "this";
      if (stringOne != stringTwo) {
        Serial.println(stringOne + " =! " + stringTwo);
      }
      // you can also use equals() to see if two Strings are the same:
      if (stringOne.equals(stringTwo)) {
        Serial.println(stringOne + " equals " + stringTwo);
      } else {
        Serial.println(stringOne + " does not equal " + stringTwo);
      }

      // or perhaps you want to ignore case:
      if (stringOne.equalsIgnoreCase(stringTwo)) {
        Serial.println(stringOne + " equals (ignoring case) " + stringTwo);
      } else {
        Serial.println(stringOne + " does not equal (ignoring case) " + stringTwo);
      }

      // a numeric String compared to the number it represents:
      stringOne = "1";
      int numberOne = 1;
      if (stringOne.toInt() == numberOne) {
        Serial.println(stringOne + " = " + numberOne);
      }



      // two numeric Strings compared:
      stringOne = "2";
      stringTwo = "1";
      if (stringOne >= stringTwo) {
        Serial.println(stringOne + " >= " + stringTwo);
      }

      // comparison operators can be used to compare Strings for alphabetic sorting too:
      stringOne = String("Brown");
      if (stringOne < "Charles") {
        Serial.println(stringOne + " < Charles");
      }

      if (stringOne > "Adams") {
        Serial.println(stringOne + " > Adams");
      }

      if (stringOne <= "Browne") {
        Serial.println(stringOne + " <= Browne");
      }


      if (stringOne >= "Brow") {
        Serial.println(stringOne + " >= Brow");
      }

      // the compareTo() operator also allows you to compare Strings
      // it evaluates on the first character that's different.
      // if the first character of the String you're comparing to comes first in
      // alphanumeric order, then compareTo() is greater than 0:
      stringOne = "Cucumber";
      stringTwo = "Cucuracha";
      if (stringOne.compareTo(stringTwo) < 0) {
        Serial.println(stringOne + " comes before " + stringTwo);
      } else {
        Serial.println(stringOne + " comes after " + stringTwo);
      }

      delay(10000);  // because the next part is a loop:

      // compareTo() is handy when you've got Strings with numbers in them too:

      while (true) {
        stringOne = "Sensor: ";
        stringTwo = "Sensor: ";

        stringOne += analogRead(A0);
        stringTwo += analogRead(A5);

        if (stringOne.compareTo(stringTwo) < 0) {
          Serial.println(stringOne + " comes before " + stringTwo);
        } else {
          Serial.println(stringOne + " comes after " + stringTwo);

        }
      }
    }`,
      robotPicURL: 'https://robohash.org/StringComparisonOperators',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Constructors',
      description: `Initialize string objects`,
      code: `
      /*
      String constructors

      Examples of how to create Strings from other data types

      created 27 Jul 2010
      modified 30 Aug 2011
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringConstructors
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString Constructors:");
      Serial.println();
    }

    void loop() {
      // using a constant String:
      String stringOne = "Hello String";
      Serial.println(stringOne);      // prints "Hello String"

      // converting a constant char into a String:
      stringOne =  String('a');
      Serial.println(stringOne);       // prints "a"

      // converting a constant string into a String object:
      String stringTwo =  String("This is a string");
      Serial.println(stringTwo);      // prints "This is a string"

      // concatenating two strings:
      stringOne =  String(stringTwo + " with more");
      // prints "This is a string with more":
      Serial.println(stringOne);

      // using a constant integer:
      stringOne =  String(13);
      Serial.println(stringOne);      // prints "13"

      // using an int and a base:
      stringOne =  String(analogRead(A0), DEC);
      // prints "453" or whatever the value of analogRead(A0) is
      Serial.println(stringOne);

      // using an int and a base (hexadecimal):
      stringOne =  String(45, HEX);
      // prints "2d", which is the hexadecimal version of decimal 45:
      Serial.println(stringOne);

      // using an int and a base (binary)
      stringOne =  String(255, BIN);
      // prints "11111111" which is the binary value of 255
      Serial.println(stringOne);

      // using a long and a base:
      stringOne =  String(millis(), DEC);
      // prints "123456" or whatever the value of millis() is:
      Serial.println(stringOne);

      // using a float and the right decimal places:
      stringOne = String(5.698, 3);
      Serial.println(stringOne);

      // using a float and less decimal places to use rounding:
      stringOne = String(5.698, 2);
      Serial.println(stringOne);

      // do nothing while true:
      while (true);

    }`,
      robotPicURL: 'https://robohash.org/StringConstructors',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Index Of',
      description: `Look for the first/last instance of a character in a string`,
      code: `
      /*
      String indexOf() and lastIndexOf() functions

      Examples of how to evaluate, look for, and replace characters in a String

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringIndexOf
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString indexOf() and lastIndexOf()  functions:");
      Serial.println();
    }

    void loop() {
      // indexOf() returns the position (i.e. index) of a particular character in a
      // String. For example, if you were parsing HTML tags, you could use it:
      String stringOne = "<HTML><HEAD><BODY>";
      int firstClosingBracket = stringOne.indexOf('>');
      Serial.println("The index of > in the string " + stringOne + " is " + firstClosingBracket);

      stringOne = "<HTML><HEAD><BODY>";
      int secondOpeningBracket = firstClosingBracket + 1;
      int secondClosingBracket = stringOne.indexOf('>', secondOpeningBracket);
      Serial.println("The index of  the second > in the string " + stringOne + " is " + secondClosingBracket);

      // you can also use indexOf() to search for Strings:
      stringOne = "<HTML><HEAD><BODY>";
      int bodyTag = stringOne.indexOf("<BODY>");
      Serial.println("The index of the body tag in the string " + stringOne + " is " + bodyTag);

      stringOne = "<UL><LI>item<LI>item<LI>item</UL>";
      int firstListItem = stringOne.indexOf("<LI>");
      int secondListItem = stringOne.indexOf("<LI>", firstListItem + 1);
      Serial.println("The index of the second list tag in the string " + stringOne + " is " + secondListItem);

      // lastIndexOf() gives you the last occurrence of a character or string:
      int lastOpeningBracket = stringOne.lastIndexOf('<');
      Serial.println("The index of the last < in the string " + stringOne + " is " + lastOpeningBracket);

      int lastListItem  = stringOne.lastIndexOf("<LI>");
      Serial.println("The index of the last list tag in the string " + stringOne + " is " + lastListItem);


      // lastIndexOf() can also search for a string:
      stringOne = "<p>Lorem ipsum dolor sit amet</p><p>Ipsem</p><p>Quod</p>";
      int lastParagraph = stringOne.lastIndexOf("<p");
      int secondLastGraf = stringOne.lastIndexOf("<p", lastParagraph - 1);
      Serial.println("The index of the second to last paragraph tag " + stringOne + " is " + secondLastGraf);

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringIndexOf',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Length',
      description: `Get and trim the length of a string`,
      code: `
      /*
      String length()

      Examples of how to use length() in a String.
      Open the Serial Monitor and start sending characters to see the results.

      created 1 Aug 2010
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringLengthTrim
    */

    String txtMsg = "";                         // a string for incoming text
    unsigned int lastStringLength = txtMsg.length();     // previous length of the String

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString  length():");
      Serial.println();
    }

    void loop() {
      // add any incoming characters to the String:
      while (Serial.available() > 0) {
        char inChar = Serial.read();
        txtMsg += inChar;
      }

      // print the message and a notice if it's changed:
      if (txtMsg.length() != lastStringLength) {
        Serial.println(txtMsg);
        Serial.println(txtMsg.length());
        // if the String's longer than 140 characters, complain:
        if (txtMsg.length() < 140) {
          Serial.println("That's a perfectly acceptable text message");
        } else {
          Serial.println("That's too long for a text message.");
        }
        // note the length for next time through the loop:
        lastStringLength = txtMsg.length();
      }
    }`,
      robotPicURL: 'https://robohash.org/StringLength',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Replace',
      description: `Replace individual characters in a string`,
      code: `
      /*
      String replace()

      Examples of how to replace characters or substrings of a String

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringReplace
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString replace:\n");
      Serial.println();
    }

    void loop() {
      String stringOne = "<html><head><body>";
      Serial.println(stringOne);
      // replace() changes all instances of one substring with another:
      // first, make a copy of the original string:
      String stringTwo = stringOne;
      // then perform the replacements:
      stringTwo.replace("<", "</");
      // print the original:
      Serial.println("Original string: " + stringOne);
      // and print the modified string:
      Serial.println("Modified string: " + stringTwo);

      // you can also use replace() on single characters:
      String normalString = "bookkeeper";
      Serial.println("normal: " + normalString);
      String leetString = normalString;
      leetString.replace('o', '0');
      leetString.replace('e', '3');
      Serial.println("l33tspeak: " + leetString);

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringReplace',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Start With Ends With',
      description: `Check which characters/substrings a given string starts or ends with`,
      code: `
      /*
      String startWith() and endsWith()

      Examples of how to use startsWith() and endsWith() in a String

      created 27 Jul 2010
      modified 2 Apr 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringStartsWithEndsWith
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString startsWith() and endsWith():");
      Serial.println();
    }

    void loop() {
      // startsWith() checks to see if a String starts with a particular substring:
      String stringOne = "HTTP/1.1 200 OK";
      Serial.println(stringOne);
      if (stringOne.startsWith("HTTP/1.1")) {
        Serial.println("Server's using http version 1.1");
      }

      // you can also look for startsWith() at an offset position in the string:
      stringOne = "HTTP/1.1 200 OK";
      if (stringOne.startsWith("200 OK", 9)) {
        Serial.println("Got an OK from the server");
      }

      // endsWith() checks to see if a String ends with a particular character:
      String sensorReading = "sensor = ";
      sensorReading += analogRead(A0);
      Serial.print(sensorReading);
      if (sensorReading.endsWith("0")) {
        Serial.println(". This reading is divisible by ten");
      } else {
        Serial.println(". This reading is not divisible by ten");
      }

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringStartWithEndsWith',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String Substring',
      description: `Look for "phrases" within a given string`,
      code: `
      /*
      String substring()

      Examples of how to use substring in a String

      created 27 Jul 2010,
      modified 2 Apr 2012
      by Zach Eveland

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringSubstring
    */

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString  substring():");
      Serial.println();
    }

    void loop() {
      // Set up a String:
      String stringOne = "Content-Type: text/html";
      Serial.println(stringOne);

      // substring(index) looks for the substring from the index position to the end:
      if (stringOne.substring(19) == "html") {
        Serial.println("It's an html file");
      }
      // you can also look for a substring in the middle of a string:
      if (stringOne.substring(14, 18) == "text") {
        Serial.println("It's a text-based file");
      }

      // do nothing while true:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/StringSubstring',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'String To Int',
      description: `Allows you to convert a String to an integer number`,
      code: `
      /*
      String to Integer conversion

      Reads a serial input string until it sees a newline, then converts the string
      to a number if the characters are digits.

      The circuit:
      - No external components needed.

      created 29 Nov 2010
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/StringToInt
    */

    String inString = "";    // string to hold input

    void setup() {
      // Open serial communications and wait for port to open:
      Serial.begin(9600);
      while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
      }

      // send an intro:
      Serial.println("\n\nString toInt():");
      Serial.println();
    }

    void loop() {
      // Read serial input:
      while (Serial.available() > 0) {
        int inChar = Serial.read();
        if (isDigit(inChar)) {
          // convert the incoming byte to a char and add it to the string:
          inString += (char)inChar;
        }
        // if you get a newline, print the string, then the string's value:
        if (inChar == '\n') {
          Serial.print("Value:");
          Serial.println(inString.toInt());
          Serial.print("String: ");
          Serial.println(inString);
          // clear the string for new input:
          inString = "";
        }
      }
    }`,
      robotPicURL: 'https://robohash.org/StringToInt',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
/*************USB*************************************************/
    {
      name: 'Keyboard Logout',
      description: `Logs out the current user with key commands`,
      code: `
      /*
      Keyboard logout

      This sketch demonstrates the Keyboard library.

      When you connect pin 2 to ground, it performs a logout.
      It uses keyboard combinations to do this, as follows:

      On Windows, CTRL-ALT-DEL followed by ALT-l
      On Ubuntu, CTRL-ALT-DEL, and ENTER
      On OSX, CMD-SHIFT-q

      To wake: Spacebar.

      Circuit:
      - Arduino Leonardo or Micro
      - wire to connect D2 to ground

      created 6 Mar 2012
      modified 27 Mar 2012
      by Tom Igoe

      This example is in the public domain.

      http://www.arduino.cc/en/Tutorial/KeyboardLogout
    */

    #define OSX 0
    #define WINDOWS 1
    #define UBUNTU 2

    #include "Keyboard.h"

    // change this to match your platform:
    int platform = OSX;

    void setup() {
      // make pin 2 an input and turn on the pull-up resistor so it goes high unless
      // connected to ground:
      pinMode(2, INPUT_PULLUP);
      Keyboard.begin();
    }

    void loop() {
      while (digitalRead(2) == HIGH) {
        // do nothing until pin 2 goes low
        delay(500);
      }
      delay(1000);

      switch (platform) {
        case OSX:
          Keyboard.press(KEY_LEFT_GUI);
          // Shift-Q logs out:
          Keyboard.press(KEY_LEFT_SHIFT);
          Keyboard.press('Q');
          delay(100);
          Keyboard.releaseAll();
          // enter:
          Keyboard.write(KEY_RETURN);
          break;
        case WINDOWS:
          // CTRL-ALT-DEL:
          Keyboard.press(KEY_LEFT_CTRL);
          Keyboard.press(KEY_LEFT_ALT);
          Keyboard.press(KEY_DELETE);
          delay(100);
          Keyboard.releaseAll();
          // ALT-l:
          delay(2000);
          Keyboard.press(KEY_LEFT_ALT);
          Keyboard.press('l');
          Keyboard.releaseAll();
          break;
        case UBUNTU:
          // CTRL-ALT-DEL:
          Keyboard.press(KEY_LEFT_CTRL);
          Keyboard.press(KEY_LEFT_ALT);
          Keyboard.press(KEY_DELETE);
          delay(1000);
          Keyboard.releaseAll();
          // Enter to confirm logout:
          Keyboard.write(KEY_RETURN);
          break;
      }

      // do nothing:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/KeyboardLogout',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Keyboard Message',
      description: `Sends a text string when a button is pressed`,
      code: `
      /*
      Keyboard Message test

      For the Arduino Leonardo and Micro.

      Sends a text string when a button is pressed.

      The circuit:
      - pushbutton attached from pin 4 to +5V
      - 10 kilohm resistor attached from pin 4 to ground

      created 24 Oct 2011
      modified 27 Mar 2012
      by Tom Igoe
      modified 11 Nov 2013
      by Scott Fitzgerald

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/KeyboardMessage
    */

    #include "Keyboard.h"

    const int buttonPin = 4;          // input pin for pushbutton
    int previousButtonState = HIGH;   // for checking the state of a pushButton
    int counter = 0;                  // button push counter

    void setup() {
      // make the pushButton pin an input:
      pinMode(buttonPin, INPUT);
      // initialize control over the keyboard:
      Keyboard.begin();
    }

    void loop() {
      // read the pushbutton:
      int buttonState = digitalRead(buttonPin);
      // if the button state has changed,
      if ((buttonState != previousButtonState)
          // and it's currently pressed:
          && (buttonState == HIGH)) {
        // increment the button counter
        counter++;
        // type out a message
        Keyboard.print("You pressed the button ");
        Keyboard.print(counter);
        Keyboard.println(" times.");
      }
      // save the current button state for comparison next time:
      previousButtonState = buttonState;
    }`,
      robotPicURL: 'https://robohash.org/KeyboardMessage',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Keyboard Reprogram',
      description: `Opens a new window in the Arduino IDE and reprograms the Leonardo with a simple blink program`,
      code: `
      /*
      Arduino Programs Blink

      This sketch demonstrates the Keyboard library.

      For Leonardo and Due boards only.

      When you connect pin 2 to ground, it creates a new window with a key
      combination (CTRL-N), then types in the Blink sketch, then auto-formats the
      text using another key combination (CTRL-T), then uploads the sketch to the
      currently selected Arduino using a final key combination (CTRL-U).

      Circuit:
      - Arduino Leonardo, Micro, Due, LilyPad USB, or Yún
      - wire to connect D2 to ground

      created 5 Mar 2012
      modified 29 Mar 2012
      by Tom Igoe
      modified 3 May 2014
      by Scott Fitzgerald

      This example is in the public domain.

      http://www.arduino.cc/en/Tutorial/KeyboardReprogram
    */

    #include "Keyboard.h"

    // use this option for OSX.
    // Comment it out if using Windows or Linux:
    char ctrlKey = KEY_LEFT_GUI;
    // use this option for Windows and Linux.
    // leave commented out if using OSX:
    //  char ctrlKey = KEY_LEFT_CTRL;


    void setup() {
      // make pin 2 an input and turn on the pull-up resistor so it goes high unless
      // connected to ground:
      pinMode(2, INPUT_PULLUP);
      // initialize control over the keyboard:
      Keyboard.begin();
    }

    void loop() {
      while (digitalRead(2) == HIGH) {
        // do nothing until pin 2 goes low
        delay(500);
      }
      delay(1000);
      // new document:
      Keyboard.press(ctrlKey);
      Keyboard.press('n');
      delay(100);
      Keyboard.releaseAll();
      // wait for new window to open:
      delay(1000);

      // versions of the Arduino IDE after 1.5 pre-populate new sketches with
      // setup() and loop() functions let's clear the window before typing anything new
      // select all
      Keyboard.press(ctrlKey);
      Keyboard.press('a');
      delay(500);
      Keyboard.releaseAll();
      // delete the selected text
      Keyboard.write(KEY_BACKSPACE);
      delay(500);

      // Type out "blink":
      Keyboard.println("void setup() {");
      Keyboard.println("pinMode(13, OUTPUT);");
      Keyboard.println("}");
      Keyboard.println();
      Keyboard.println("void loop() {");
      Keyboard.println("digitalWrite(13, HIGH);");
      Keyboard.print("delay(3000);");
      // 3000 ms is too long. Delete it:
      for (int keystrokes = 0; keystrokes < 6; keystrokes++) {
        delay(500);
        Keyboard.write(KEY_BACKSPACE);
      }
      // make it 1000 instead:
      Keyboard.println("1000);");
      Keyboard.println("digitalWrite(13, LOW);");
      Keyboard.println("delay(1000);");
      Keyboard.println("}");
      // tidy up:
      Keyboard.press(ctrlKey);
      Keyboard.press('t');
      delay(100);
      Keyboard.releaseAll();
      delay(3000);
      // upload code:
      Keyboard.press(ctrlKey);
      Keyboard.press('u');
      delay(100);
      Keyboard.releaseAll();

      // wait for the sweet oblivion of reprogramming:
      while (true);
    }`,
      robotPicURL: 'https://robohash.org/KeyboardReprogram',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Keyboard Serial',
      description: `Reads a byte from the serial port, and sends back a keystrok`,
      code: `
      /*
      Keyboard test

      For the Arduino Leonardo, Micro or Due

      Reads a byte from the serial port, sends a keystroke back.
      The sent keystroke is one higher than what's received, e.g. if you send a,
      you get b, send A you get B, and so forth.

      The circuit:
      - none

      created 21 Oct 2011
      modified 27 Mar 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/KeyboardSerial
    */

    #include "Keyboard.h"

    void setup() {
      // open the serial port:
      Serial.begin(9600);
      // initialize control over the keyboard:
      Keyboard.begin();
    }

    void loop() {
      // check for incoming serial data:
      if (Serial.available() > 0) {
        // read incoming serial data:
        char inChar = Serial.read();
        // Type the next ASCII value from what you received:
        Keyboard.write(inChar + 1);
      }
    }`,
      robotPicURL: 'https://robohash.org/KeyboardSerial',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Keyboard Mouse Control',
      description: `Reads a byte from the serial port, and sends back a keystrok`,
      code: `
      /*
      KeyboardAndMouseControl

      Controls the mouse from five pushbuttons on an Arduino Leonardo, Micro or Due.

      Hardware:
      - five pushbuttons attached to D2, D3, D4, D5, D6

      The mouse movement is always relative. This sketch reads four pushbuttons, and
      uses them to set the movement of the mouse.

      WARNING: When you use the Mouse.move() command, the Arduino takes over your
      mouse! Make sure you have control before you use the mouse commands.

      created 15 Mar 2012
      modified 27 Mar 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/KeyboardAndMouseControl
    */

    #include "Keyboard.h"
    #include "Mouse.h"

    // set pin numbers for the five buttons:
    const int upButton = 2;
    const int downButton = 3;
    const int leftButton = 4;
    const int rightButton = 5;
    const int mouseButton = 6;

    void setup() { // initialize the buttons' inputs:
      pinMode(upButton, INPUT);
      pinMode(downButton, INPUT);
      pinMode(leftButton, INPUT);
      pinMode(rightButton, INPUT);
      pinMode(mouseButton, INPUT);

      Serial.begin(9600);
      // initialize mouse control:
      Mouse.begin();
      Keyboard.begin();
    }

    void loop() {
      // use serial input to control the mouse:
      if (Serial.available() > 0) {
        char inChar = Serial.read();

        switch (inChar) {
          case 'u':
            // move mouse up
            Mouse.move(0, -40);
            break;
          case 'd':
            // move mouse down
            Mouse.move(0, 40);
            break;
          case 'l':
            // move mouse left
            Mouse.move(-40, 0);
            break;
          case 'r':
            // move mouse right
            Mouse.move(40, 0);
            break;
          case 'm':
            // perform mouse left click
            Mouse.click(MOUSE_LEFT);
            break;
        }
      }

      // use the pushbuttons to control the keyboard:
      if (digitalRead(upButton) == HIGH) {
        Keyboard.write('u');
      }
      if (digitalRead(downButton) == HIGH) {
        Keyboard.write('d');
      }
      if (digitalRead(leftButton) == HIGH) {
        Keyboard.write('l');
      }
      if (digitalRead(rightButton) == HIGH) {
        Keyboard.write('r');
      }
      if (digitalRead(mouseButton) == HIGH) {
        Keyboard.write('m');
      }

    }`,
      robotPicURL: 'https://robohash.org/KeyboardMouseControl',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Button Mouse Control',
      description: `Control cursor movement with 5 pushbuttons`,
      code: `
      /*
      ButtonMouseControl

      For Leonardo and Due boards only.

      Controls the mouse from five pushbuttons on an Arduino Leonardo, Micro or Due.

      Hardware:
      - five pushbuttons attached to D2, D3, D4, D5, D6

      The mouse movement is always relative. This sketch reads four pushbuttons,
      and uses them to set the movement of the mouse.

      WARNING: When you use the Mouse.move() command, the Arduino takes over your
      mouse! Make sure you have control before you use the mouse commands.

      created 15 Mar 2012
      modified 27 Mar 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/ButtonMouseControl
    */

    #include "Mouse.h"

    // set pin numbers for the five buttons:
    const int upButton = 2;
    const int downButton = 3;
    const int leftButton = 4;
    const int rightButton = 5;
    const int mouseButton = 6;

    int range = 5;              // output range of X or Y movement; affects movement speed
    int responseDelay = 10;     // response delay of the mouse, in ms


    void setup() {
      // initialize the buttons' inputs:
      pinMode(upButton, INPUT);
      pinMode(downButton, INPUT);
      pinMode(leftButton, INPUT);
      pinMode(rightButton, INPUT);
      pinMode(mouseButton, INPUT);
      // initialize mouse control:
      Mouse.begin();
    }

    void loop() {
      // read the buttons:
      int upState = digitalRead(upButton);
      int downState = digitalRead(downButton);
      int rightState = digitalRead(rightButton);
      int leftState = digitalRead(leftButton);
      int clickState = digitalRead(mouseButton);

      // calculate the movement distance based on the button states:
      int  xDistance = (leftState - rightState) * range;
      int  yDistance = (upState - downState) * range;

      // if X or Y is non-zero, move:
      if ((xDistance != 0) || (yDistance != 0)) {
        Mouse.move(xDistance, yDistance, 0);
      }

      // if the mouse button is pressed:
      if (clickState == HIGH) {
        // if the mouse is not pressed, press it:
        if (!Mouse.isPressed(MOUSE_LEFT)) {
          Mouse.press(MOUSE_LEFT);
        }
      }
      // else the mouse button is not pressed:
      else {
        // if the mouse is pressed, release it:
        if (Mouse.isPressed(MOUSE_LEFT)) {
          Mouse.release(MOUSE_LEFT);
        }
      }

      // a delay so the mouse doesn't move too fast:
      delay(responseDelay);
    }`,
      robotPicURL: 'https://robohash.org/ButtonMouseControl',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Joystick Mouse Control',
      description: `Controls a computer's cursor movement with a Joystick when a button is pressed`,
      code: `
      /*
      JoystickMouseControl

      Controls the mouse from a joystick on an Arduino Leonardo, Micro or Due.
      Uses a pushbutton to turn on and off mouse control, and a second pushbutton
      to click the left mouse button.

      Hardware:
      - 2-axis joystick connected to pins A0 and A1
      - pushbuttons connected to pin D2 and D3

      The mouse movement is always relative. This sketch reads two analog inputs
      that range from 0 to 1023 (or less on either end) and translates them into
      ranges of -6 to 6.
      The sketch assumes that the joystick resting values are around the middle of
      the range, but that they vary within a threshold.

      WARNING: When you use the Mouse.move() command, the Arduino takes over your
      mouse! Make sure you have control before you use the command. This sketch
      includes a pushbutton to toggle the mouse control state, so you can turn on
      and off mouse control.

      created 15 Sep 2011
      updated 28 Mar 2012
      by Tom Igoe

      This example code is in the public domain.

      http://www.arduino.cc/en/Tutorial/JoystickMouseControl
    */

    #include "Mouse.h"

    // set pin numbers for switch, joystick axes, and LED:
    const int switchPin = 2;      // switch to turn on and off mouse control
    const int mouseButton = 3;    // input pin for the mouse pushButton
    const int xAxis = A0;         // joystick X axis
    const int yAxis = A1;         // joystick Y axis
    const int ledPin = 5;         // Mouse control LED

    // parameters for reading the joystick:
    int range = 12;               // output range of X or Y movement
    int responseDelay = 5;        // response delay of the mouse, in ms
    int threshold = range / 4;    // resting threshold
    int center = range / 2;       // resting position value

    bool mouseIsActive = false;    // whether or not to control the mouse
    int lastSwitchState = LOW;        // previous switch state

    void setup() {
      pinMode(switchPin, INPUT);       // the switch pin
      pinMode(ledPin, OUTPUT);         // the LED pin
      // take control of the mouse:
      Mouse.begin();
    }

    void loop() {
      // read the switch:
      int switchState = digitalRead(switchPin);
      // if it's changed and it's high, toggle the mouse state:
      if (switchState != lastSwitchState) {
        if (switchState == HIGH) {
          mouseIsActive = !mouseIsActive;
          // turn on LED to indicate mouse state:
          digitalWrite(ledPin, mouseIsActive);
        }
      }
      // save switch state for next comparison:
      lastSwitchState = switchState;

      // read and scale the two axes:
      int xReading = readAxis(A0);
      int yReading = readAxis(A1);

      // if the mouse control state is active, move the mouse:
      if (mouseIsActive) {
        Mouse.move(xReading, yReading, 0);
      }

      // read the mouse button and click or not click:
      // if the mouse button is pressed:
      if (digitalRead(mouseButton) == HIGH) {
        // if the mouse is not pressed, press it:
        if (!Mouse.isPressed(MOUSE_LEFT)) {
          Mouse.press(MOUSE_LEFT);
        }
      }
      // else the mouse button is not pressed:
      else {
        // if the mouse is pressed, release it:
        if (Mouse.isPressed(MOUSE_LEFT)) {
          Mouse.release(MOUSE_LEFT);
        }
      }

      delay(responseDelay);
    }

    /*
      reads an axis (0 or 1 for x or y) and scales the analog input range to a range
      from 0 to <range>
    */

    int readAxis(int thisAxis) {
      // read the analog input:
      int reading = analogRead(thisAxis);

      // map the reading from the analog input range to the output range:
      reading = map(reading, 0, 1023, 0, range);

      // if the output reading is outside from the rest position threshold, use it:
      int distance = reading - center;

      if (abs(distance) < threshold) {
        distance = 0;
      }

      // return the distance for this axis:
      return distance;
    }`,
      robotPicURL: 'https://robohash.org/JoystickMouseControl',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
