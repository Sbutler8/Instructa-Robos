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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
