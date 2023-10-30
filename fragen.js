import chalk from 'chalk';
export const question = {
  easy: [
    {
      // Frage 1
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                 
 Javascript ist genau wie Java ? 
                                 `),
                                                              
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                      
      a. Nein         
                      `)}
     ${chalk.hex('#FF8800').bold.bgBlack(`
                      
     b. Ja            
                      `)}
     ${chalk.hex('#FF8800').bold.bgBlack(`
                      
     c. Keine Ahnung  
                      `)}
      
      Antwort: `],
      correct: 'a',
      correct1: 'A'
    },
  //   Frage 2
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                        
 Was ist eine Variable? 
                        `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                                   
      a. Eine Higher-Order-Function                                
                                                                   `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                                   
      b. Eine Klasse um Objekte zu definieren                      
                                                                   `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                                   
      c. Benannter Speicherplatz um Daten oder Werte zu speichern  
                                                                   `)}
      
      Antwort: `],
      correct: "c",
      correct1: "C"
    },
  //   Frage 3
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                               
 Welches JavaScript-Objekt repräsentiert den globalen Bereich? 
                                                               `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                   
      a. window    
                   `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                   
      b. document  
                   `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                   
      c. navigator 
                   `)}
      
      Antwort: `],
      correct: "a",
      correct1: "A"
    },
  //   Frage 4
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                     
 Was ist Javascript? 
                     `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                 
      a. Eine Programmiersprache 
                                 `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                 
      b. Eine Art von Kaffee     
                                 `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                 
      c. Ein Betriebssystem      
                                 `)}
      
      Antwort: `],
      correct: "a",
      correct1: "A"
    },
        //   Frage 5
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                    
 Welches Schlüsselwort wird verwendet um eine Funktion in Javascript zu definieren? 
                                                                                    `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                  
      a. Def      
                  `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                  
      b. Function 
                  `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                  
      c. Method   
                  `)}
        
      Antwort: `],
      correct: "b",
      correct1: "B"
    },
  //   Frage 6
   {
    question: chalk.hex('#33FF33').bold.bgBlack(`
                                                      
 Wie greift man auf die erste Stelle eines Arrays zu? 
                                                      `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                     
      a. array.first 
                     `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                     
      b. array[0]    
                     `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                     
      c. Array.start 
                     `)}

      Antwort: `],
      correct: "b",
      correct1: "B"
    },
   //   Frage 7
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                          
 Welches Symbol wird verwendet, um Kommentare in Javascript zu schreiben? 
                                                                          `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
            
      a. // 
            `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
            
      b. %% 
            `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
            
      c. -- 
            `)}

      Antwort: `],
      correct: "a",
      correct1: "A"
    },
    //   Frage 8
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                      
 Welches Schlüsselwort wird verwendet, um eine Variable in Javascript zu deklarieren? 
                                                                                      `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                
      a. define 
                `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                
      b. print  
                `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                
      c. let    
                `)}
      
      Antwort: `],
      correct: "c",
      correct1: "C"
    },    
    //   Frage 9
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                 
 Was macht der Operator typeof ? 
                                 `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                    
      a. Baut eine Html Datei auf                   
                                                    `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                    
      b. ermittelt den Datentyp eines Wertes        
                                                    `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                    
      c. benutzt man um einen Git push zu vollenden 
                                                    `)} 
 
      Antwort: `],
      correct: "b",
      correct1: "B"
      },   
      //   Frage 10
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                           
 Welches Zeichen wird verwendet, um Zeichenfolgen (String) in Javascript zu kennzeichnen ? 
                                                                                           `),
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
            
      a. () 
            `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
            
      b. "" 
            `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
            
      c. {} 
            `)}
 
        Antwort: `],
        correct: "b",
        correct1: "B"
        },
  ],

  //////////////////////////////////////////////
  normal: [
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                                  
 Welche Methode wird verwendet, um ein Element an das Ende eines Arrays in JavaScript anzuhängen? 
                                                                                                  `),
      
      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                 
      a. pop()   
                 `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                 
      b. shift() 
                 `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                 
      c. push()  
                 `)}
      
      Antwort: `],

      correct: "c",
      correct1: "C"
    },
    // Frage 2
  {
    question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                                                                       
 Welche Art von Schleife wird verwendet, um Code auszuführen, mindestens einmal, und dann zu überprüfen, ob er wiederholt werden soll? 
                                                                                                                                       `),

    answer: [`
    ${chalk.hex('#FF8800').bold.bgBlack(`
                            
    a. For-Schleife         
                            `)}
    ${chalk.hex('#FF8800').bold.bgBlack(`
                            
    b. do... while-Schleife 
                            `)}
    ${chalk.hex('#FF8800').bold.bgBlack(`
                            
    c. while-Schleife       
                            `)}

    Antwort: `],

    correct: "b",
    correct1: "B"
  },
  // Frage 3
{
  question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                    
 Welche Methode wird verwendet, um die Länge eines Arrays in Javascript abzurufen ? 
                                                                                    `),

  answer: [`
    ${chalk.hex('#FF8800').bold.bgBlack(`
                 
    a. length    
                 `)}
    ${chalk.hex('#FF8800').bold.bgBlack(`
                 
    b. size()    
                 `)}
    ${chalk.hex('#FF8800').bold.bgBlack(`
                 
    c. theLength 
                 `)}

  Antwort: `],

  correct: "a",
  correct1: "A"
},
// Frage 4
  {
    question: chalk.hex('#33FF33').bold.bgBlack(`
                                                     
 Was ist ein Ergebnis von typeof null in Javascript? 
                                                     `),

    answer: [`
    ${chalk.hex('#FF8800').bold.bgBlack(`
                 
    a. object    
                 `)}
    ${chalk.hex('#FF8800').bold.bgBlack(`
                 
    b. null      
                 `)}
    ${chalk.hex('#FF8800').bold.bgBlack(`
                 
    c. AndiFeind 
                 `)}
 
    Antwort: `],

    correct: "a",
    correct1: "A"
  },
    // Frage 5
    {
      question: chalk.hex('#33FF33').bold.bgBlack(`
                                                                                                                    
 Welche der folgenden Methoden wird verwendet, um eine Zeichenkette(String) in eine Zahl in Javascript umzuwandeln? 
                                                                                                                    `),

      answer: [`
      ${chalk.hex('#FF8800').bold.bgBlack(`
                       
      a. Array.isArray 
                       `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                       
      b. toNumber      
                       `)}
      ${chalk.hex('#FF8800').bold.bgBlack(`
                       
      c. parseInt      
                       `)}

      Antwort: `],

      correct: "c",
      correct1: "C"
    },
    
    // Frage 6
    {
      question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
        ${chalk.hex('#33FF33').bold.bgBlack(`
                                             
        const array = [1, 2, 3, 4, 5];       
        let neuArray = array.map(item =>)    
        console.log(neuArray)                
        Erwartete Ausgabe = [2, 4, 6, 8, 10] 
                                             `)}`,
  
        answer: [`                                
        ${chalk.hex('#FF8800').bold.bgBlack(`
                                                                
        Lösche nichts von Code. Füge nur hinzu was fehlt!       
                                                                `)}
                                                         
      Antwort: `],
      correct: `item * 2`},


    
    // Frage 7
    {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
      ${chalk.hex('#33FF33').bold.bgBlack(`
                                                   
      let string = "eshcüF-kcatslluF"              
      let newString = string.split("").reverse().; 
      console.log(newString)                       
      Erwartete Ausgabe = "Fullstack-Füchse"       
                                                   `)}`,

      answer: [`                                
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                             
      Lösche nichts von Code. Füge nur hinzu was fehlt!      
                                                             `)}

      Antwort: `],
      correct: `join("")`},
    // Frage 8
    {
      question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
      ${chalk.hex('#33FF33').bold.bgBlack(`
                                                                                                        
      const array1 = [1, 2, 3, 4];                                                                      
      const initialValue = 0;                                                                           
      const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,); 
      console.log(sumWithInitial);                                                                      
      Erwartete Ausgabe = "10"                                                                          
                                                                                                        `)}`,

      answer: [`                                
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                             
      Lösche nichts von Code. Füge nur hinzu was fehlt!      
                                                             `)}

      Antwort: `],
      correct: `initialValue`
    },
    // Frage 9
    {
      question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
      ${chalk.hex('#33FF33').bold.bgBlack(`
                                
      const datum = new Date(); 
      const year = datum;       
      console.log(year);        
      Erwartete Ausgabe = 2023  
                                `)}`,

      answer: [`                                
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                                             
      Lösche nichts von Code. Füge nur hinzu was fehlt!      
                                                             `)}

      Antwort: `],
      correct: `.getFullYear()`
    },
    // Frage 10
    {
      question: `
      ${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}

      ${chalk.hex('#33FF33').bold.bgBlack(`
                                                                                
      const object = {                                                          
      name: "John Kebab",                                                       
      age: 31                                                                   
      }                                                                         
      job = "bundeskanzler";                                                    
      console.log(object)                                                       
                                                                                
      Erwartete Ausgabe = { name: 'John Kebab', age: 31, job: 'bundeskanzler'}  
                                                                                `)}`,

      answer: [`
      ${chalk.hex('FF8800').bold.bgBlack(`
                                                             
      Lösche nichts von Code. Füge nur hinzu was fehlt!      
                                                             `)}

      Antwort: `],
      correct: `object.`,
    },
  ],
  /////////////////////////////////////////////////////////
  hard: [
    // Frage 1
    {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                           
    function simpleMap(number, callback) { 
      let result = callback(number);       
      return result;                       
    }                                      
    function double(number) {              
      return number * 2;                   
    }                                      
    console.log(simpleMap(2, ));           
    Erwartete Ausgabe = 4                  
                                           `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}
    
    Antwort: `],
    correct: `double`,
      
      },
  // Frage 2
  {
    question: `
    ${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}

    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                     
    function getSecondsToday() {                     
      const now= new Date();                         
      const seconds = new Date().getSeconds();       
      const minutes = new Date().getMinutes();       
      const hours = new Date().getHours();           
      const total = minutes * 60 + seconds + hours * 
      return {total};                                
    }                                                
    console.log(getSecondsToday());                  
                                                     
    Erwartete Ausgabe = { total: 54251 }             
                                                     `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}
    
    Antwort: `],
    correct: `3600`,
    
    
  },
  // Frage 3
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                
    function betterTypeOf(value) {              
      if(Array.isArray(value)){                 
          return "array";                       
      } else{                                   
          return value;                         
      }                                         
                                                
    }                                           
                                                
    console.log(betterTypeOf(1));               
    console.log(betterTypeOf("hello"));         
    console.log(betterTypeOf(true));            
    console.log(betterTypeOf(""));              
    console.log(betterTypeOf([1, 2, 3]));       
    console.log(betterTypeOf(["a", "b", "c"])); 
                                                
    Erwartete Ausgabe =                         
    'number'                                    
    'string'                                    
    'boolean'                                   
    'string'                                    
    'array'                                     
    'array'                                     
                                                `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}
    
    Antwort: `],
    correct: `typeof`,
  },
  // Frage 4
  {
    question: `
    ${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                           
    const daten = ["Banane", "Birne", "Orange", "Orange"]; 
                                                           
    const object = daten((acc, item) => {                  
        if(acc[item]){                                     
            acc[item] = acc[item] + 1;                     
        } else{                                            
            acc[item] = 1;                                 
        }                                                  
        return acc;                                        
    }, {});                                                
                                                           
    console.log(object);                                   
                                                           
    Erwartete Ausgabe = { Banane: 1, Birne: 1, Orange: 2 } 
                                                           `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}
    
    Antwort: `],
    correct: `.reduce`,
    
  },
  // Frage 5
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                                              
    class Person {                                                            
      constructor(name, age) {                                                
          this.name = name;                                                   
          this.age = age;                                                     
      }                                                                       
    }                                                                         
                                                                              
    const greet = new Person("Alice", "30");                                  
                                                                              
    class Stundet Person{                                                     
      constructor(name, age, major){                                          
          super(name, age)                                                    
          this.major = major;                                                 
                                                                              
      }                                                                       
    }                                                                         
    const greeting = new Stundet("Alice", "30","Sports")                      
    console.log(greeting);                                                    
                                                                              
    Erwartete Ausgabe = Stundet { name: 'Alice', age: '30', major: 'Sports' } 
                                                                              `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                          
    Lösche nichts von Code. Füge nur hinzu was fehlt!     
                                                          `)}
    
    Antwort: `],
    correct: `extends`,
    
  },
  // Frage 6
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}  
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                                    
    const product = {                                               
      type: "t-shirt",                                              
      brand: "Awesome Tees",                                        
      price: 19.99,                                                 
      colors: ["green", "yellow", "pink"],                          
      sizes: ["S", "M", "L"],                                       
      material: "organic cotton",                                   
    };                                                              
                                                                    
    const keys = ["type", "brand", "id", "material", "details"];    
                                                                    
    for (let i = 0; i < keys.; i++){                                
                                                                    
      if (product[keys[i]]){                                        
        console.log(keys[i]: product[keys[i]]);                     
    }                                                               
    else{                                                           
      console.log("Das Produkt hat keine", keys[i] ,"Eigenschaft"); 
    }                                                               
    }                                                               
                                                                    
    Erwartete Ausgabe:                                              
    type: t-shirt                                                   
    brand: Awesome Tees                                             
    Das Produkt hat keine id Eigenschaft                            
    material: organic cotton                                        
    Das Produkt hat keine details Eigenschaft                       
                                                                    `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}
    
    Antwort: `],
    correct: `length`,
  },
  // Frage 7
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                
    let fruits = ['apple', 'banana', 'cherry']; 
    console.log(typeof fruits === Array);       
    console.log(Array(fruits));                 
                                                
    Erwartete Ausgabe =                         
    false                                       
    true                                        
                                                `)}`,

    answer: [`

    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}

    Antwort: `],
    correct: `Array.is`,

  },
  // Frage 8
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                            
    const args = process.argv.splice();     
    const things = [];                      
                                            
    for (let i = 0; i < args.length; i++) { 
        things.push(args[i])                
      }                                     
    console.log("Things to buy", things)    
                                            
    Erwartete Ausgabe = Things to buy []    
                                            `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}

    Antwort: `],
    correct: `2`,



  },
  // Frage 9
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
                                                         
    function archersReady(archers) {                     
      for (let i = 0; i < archers.length; i++) {         
        if (archers[i] < 5) {                            
          return false;                                  
        } else if (archers >= 5) {                       
          return true;                                   
        }                                                
      }                                                  
                                                         
      return false;                                      
    }                                                    
                                                         
    console.log(archersReady([]));                       
    console.log(archersReady([1, 2, 3, 4]));             
    console.log(archersReady([5, 6, 7, 8]));             
    console.log(archersReady([1, 2, 3, 4, 5, 6, 7, 8])); 
    Erwartete Ausgabe =                                  
    false                                                
    false                                                
    true                                                 
    false                                                
                                                         `)}`,

    answer: [`

    ${chalk.hex('FF8800').bold.bgBlack(`
                                                      
    Lösche nichts von Code. Füge nur hinzu was fehlt! 
                                                      `)}

    Antwort: `],
    correct: `[i]`,

  },
  // Frage 10
  {
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
    ${chalk.hex('#33FF33').bold.bgBlack(`
    let prev = 0;                                                                                                                                                  
    let current = 1;                                                                                                                                               
    let next = 1;                                                                                                                                                  
    let count = 1;                                                                                                                                                 
                                                                                                                                                                   
    do {                                                                                                                                                           
      count;                                                                                                                                                       
      next = prev + current;                                                                                                                                       
      prev = current;                                                                                                                                              
      current = next;                                                                                                                                              
    } while (next <= 1000000);                                                                                                                                     
                                                                                                                                                                   
    console.log("Die Fibonacci-Folge wurde " + count + " Schritte lang berechnet, bis ein Wert größer als 1.000.  000 erreicht wurde. Das Ergebnis ist: " + next); 
                                                                                                                                                                   
    Erwartete Ausgabe = Die Fibonacci-Folge wurde 31 Schritte lang berechnet, bis ein Wert größer als 1.000.000 erreicht wurde. Das Ergebnis ist: 1346269          
                                                                                                                                                                   `)}`,
    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                      
    Lösche nichts von Code. Füge nur hinzu was fehlt! 
                                                      `)}
    
    Antwort: `],
    correct: `++`,
  },
  {
    // Frage 11
    question: `${chalk.hex('#FF8800').bold.bgBlack(`
                                     
 Vervollständige den folgenden Code: 
                                     `)}
                                                                    
    ${chalk.hex('#33FF33').bold.bgBlack(`
    const inputArray = [5, 8, 12, 3, 16, 7, 21, 45, 9, 11, 25];     
    let result = [];                                                
                                                                    
    for (let i = 0; i < inputArray.length; i++) {                   
      if (inputArray[i] % 3 === 0) {                                
        let currentElement = inputArray[i];                         
        if (currentElement < 10) {                                  
          for (let j = 1; j <= 5; j++) {                            
            if (j % 2 === 0) {                                      
              currentElement += j;                                  
            } else {                                                
              currentElement -= i;                                  
            }                                                       
          }                                                         
          result.push(currentElement);                              
        }                                                           
      }                                                             
    }                                                               
                                                                    
    const filteredResult = result.filter((element) => element > 5); 
                                                                    
    let sum = 0;                                                    
    for (let i = 0; i < filteredResult.length; i++) {               
      if (i % 2 === 0) {                                            
        sum += filteredResult[i];                                   
      }                                                             
    }                                                               
                                                                    
    const finalValue = Math.sqrt(sum);                              
                                                                    
    console.log(finalValue);                                        
                                                                    
    Die Ausgabe = 5.196152422706632                                 
                                                                    `)}`,
                                                                    
    answer: [`
    
    ${chalk.hex('FF8800').bold.bgBlack(`
                                                         
    Lösche nichts von Code. Füge nur hinzu was fehlt!    
                                                         `)}
    
    Antwort: `],
    correct: `j`,

  },
],
};

