let questions = [
    {
        "question": "Was bedeutet die Abkürzung 'CPU'?",
        "answer_1": "Central Processing Unit",
        "answer_2": "Computer Personal Unit",
        "answer_3": "Central Power User",
        "answer_4": "Control Process Utility",
        "right_answer": 1
    },
    {
        "question": "Welches Bauteil speichert Daten kurzzeitig?",
        "answer_1": "Festplatte",
        "answer_2": "Grafikkarte",
        "answer_3": "RAM",
        "answer_4": "Netzteil",
        "right_answer": 3
    },
    {
        "question": "Welches Betriebssystem stammt von Apple?",
        "answer_1": "Windows",
        "answer_2": "Linux",
        "answer_3": "macOS",
        "answer_4": "Android",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptaufgabe einer GPU?",
        "answer_1": "Soundwiedergabe",
        "answer_2": "Grafikberechnung",
        "answer_3": "Datenspeicherung",
        "answer_4": "Stromversorgung",
        "right_answer": 2
    },
    {
        "question": "Wofür steht 'WWW'?",
        "answer_1": "World Wide Web",
        "answer_2": "World Wide Work",
        "answer_3": "Wide World Web",
        "answer_4": "Web World Wide",
        "right_answer": 1
    },
    {
        "question": "Welche Taste wird meist zum Kopieren genutzt?",
        "answer_1": "Strg + V",
        "answer_2": "Strg + X",
        "answer_3": "Strg + C",
        "answer_4": "Strg + Z",
        "right_answer": 3
    },
    {
        "question": "Was ist ein Beispiel für ein Eingabegerät?",
        "answer_1": "Monitor",
        "answer_2": "Drucker",
        "answer_3": "Maus",
        "answer_4": "Lautsprecher",
        "right_answer": 3
    },
    {
        "question": "Was ist eine SSD?",
        "answer_1": "Ein Bildschirm",
        "answer_2": "Ein schneller Datenspeicher",
        "answer_3": "Ein Prozessor",
        "answer_4": "Ein Maustyp",
        "right_answer": 2
    },
    {
        "question": "Welches Protokoll wird für Webseiten genutzt?",
        "answer_1": "FTP",
        "answer_2": "SMTP",
        "answer_3": "HTTP",
        "answer_4": "POP3",
        "right_answer": 3
    },
    {
        "question": "Was ist Linux?",
        "answer_1": "Ein Browser",
        "answer_2": "Ein Open-Source-Betriebssystem",
        "answer_3": "Ein Hardwarehersteller",
        "answer_4": "Ein Dateiformat",
        "right_answer": 2
    },
    {
        "question": "Wie viele Bit sind ein Byte?",
        "answer_1": "4",
        "answer_2": "8",
        "answer_3": "16",
        "answer_4": "32",
        "right_answer": 2
    },
    {
        "question": "Was macht ein Antivirenprogramm?",
        "answer_1": "Es beschleunigt das Internet",
        "answer_2": "Es löscht alle Bilder",
        "answer_3": "Es schützt vor Schadsoftware",
        "answer_4": "Es reinigt die Tastatur",
        "right_answer": 3
    },
    {
        "question": "Was ist 'Google Chrome'?",
        "answer_1": "Ein Webbrowser",
        "answer_2": "Ein Betriebssystem",
        "answer_3": "Eine Suchmaschine",
        "answer_4": "Ein Texteditor",
        "right_answer": 1
    },
    {
        "question": "Welcher Anschluss wird oft für Monitore genutzt?",
        "answer_1": "USB-A",
        "answer_2": "HDMI",
        "answer_3": "SATA",
        "answer_4": "RJ45",
        "right_answer": 2
    },
    {
        "question": "Was ist eine Firewall?",
        "answer_1": "Ein physischer Schutz gegen Feuer",
        "answer_2": "Ein Netzwerksicherheits-System",
        "answer_3": "Ein schneller Prozessor",
        "answer_4": "Ein spezieller USB-Stick",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet 'PDF'?",
        "answer_1": "Personal Data File",
        "answer_2": "Portable Document Format",
        "answer_3": "Public Digital Folder",
        "answer_4": "Printable Data Form",
        "right_answer": 2
    },
    {
        "question": "Welches Zeichen muss in jeder E-Mail-Adresse vorkommen?",
        "answer_1": "#",
        "answer_2": "&",
        "answer_3": "@",
        "answer_4": "$",
        "right_answer": 3
    },
    {
        "question": "Was ist der 'Desktop'?",
        "answer_1": "Die Gehäuserückseite",
        "answer_2": "Die Arbeitsfläche des Betriebssystems",
        "answer_3": "Ein spezielles Kabel",
        "answer_4": "Ein Computer-Virus",
        "right_answer": 2
    },
    {
        "question": "Wofür steht die Endung '.jpg'?",
        "answer_1": "Ein Videoformat",
        "answer_2": "Ein Textdokument",
        "answer_3": "Ein Bildformat",
        "answer_4": "Eine ausführbare Datei",
        "right_answer": 3
    },
    {
        "question": "Was ist ein Pixel?",
        "answer_1": "Ein Bildpunkt",
        "answer_2": "Eine Taste",
        "answer_3": "Ein Kabel",
        "answer_4": "Ein Speicherchip",
        "right_answer": 1
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestions();
}

function showQuestions() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

    } else {

        let question = questions[currentQuestion];


        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    showQuestions(); // ruft die Funktion showQuestions auf

    document.getElementById('next-button').disabled = true; // setzt die klickbarkeit des Buttons wieder auf klickbar

    resetAnswerButton();

}

function resetAnswerButton() {

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');


}