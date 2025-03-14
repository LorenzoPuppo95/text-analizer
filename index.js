// #region FUNZIONI
function removePunctuationAndAccents(text) {
    const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const cleanedText = normalizedText.replace(/[^\w\s]/g, ' ');
    return cleanedText;
}

function charNumber(text) {
    text = removePunctuationAndAccents(text);
    const rgx = /\p{L}/gu;
    const letters = text.match(rgx);
    return letters ? letters.length : 0;   
    // text=removePunctuationAndAccents(text);
    // return text.replace(/\s/g, '').length;
}

function wordNumber(text) {
    text = removePunctuationAndAccents(text);
    const rgx=/\p{L}+/gu;
    const words = text.match(rgx);
    return words.length;
    // text=removePunctuationAndAccents(text);
    // return text.trim().split(/\s+/).length;
}

function wordCount(text) {
    text=removePunctuationAndAccents(text);
    const words = text.trim().toLowerCase().split(/\s+/);
    const wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
    return wordFrequency;
}
// #endregion

// #region TESTO
const incipit = `Quel ramo del lago di Como, che volge a mezzogiorno, tra due
catene non interrotte di monti, tutto a seni e a golfi, a seconda
dello sporgere e del rientrare di quelli, vien, quasi a un tratto, a
ristringersi, e a prender corso e figura di fiume, tra un
promontorio a destra, e un’ampia costiera dall’altra parte; e il
ponte, che ivi congiunge le due rive, par che renda ancor più
sensibile all’occhio questa trasformazione, e segni il punto in cui
il lago cessa, e l’Adda rincomincia, per ripigliar poi nome di lago
dove le rive, allontanandosi di nuovo, lascian l’acqua distendersi e rallentarsi in
nuovi golfi e in nuovi seni. La costiera, formata dal deposito di tre grossi torrenti,
scende appoggiata a due monti contigui, l’uno detto di san Martino, l’altro, con
voce lombarda, il Resegone, dai molti suoi cocuzzoli in fila, che in vero lo fanno
somigliare a una sega: talchè non è chi, al primo vederlo, purchè sia di fronte,
come per esempio di su le mura di Milano che guardano a settentrione, non lo
discerna tosto, a un tal contrassegno, in quella lunga e vasta giogaia, dagli altri
monti di nome più oscuro e di forma più comune. Per un buon pezzo, la costa sale
con un pendìo lento e continuo; poi si rompe in poggi e in valloncelli, in erte e in
ispianate, secondo l’ossatura de’ due monti, e il lavoro dell’acque. Il lembo
estremo, tagliato dalle foci de’ torrenti, è quasi tutto ghiaia e ciottoloni; il resto,
campi e vigne, sparse di terre, di ville, di casali; in qualche parte boschi, che si
prolungano su per la montagna. Lecco, la principale di quelle terre, e che dà nome
al territorio, giace poco discosto dal ponte, alla riva del lago, anzi viene in parte a
trovarsi nel lago stesso, quando questo ingrossa: un gran borgo al giorno d’oggi, e
che s’incammina a diventar città. Ai tempi in cui accaddero i fatti che prendiamo
a raccontare, quel borgo, già considerabile, era anche un castello, e aveva perciò
l’onore d’alloggiare un comandante, e il vantaggio di possedere una stabile
guarnigione di soldati spagnoli, che insegnavan la modestia alle fanciulle e alle
donne del paese, accarezzavan di tempo in tempo le spalle a qualche marito, a
qualche padre; e, sul finir dell’estate, non mancavan mai di spandersi nelle vigne,
per diradar l’uve, e alleggerire a’ contadini le fatiche della vendemmia. Dall’una
all’altra di quelle terre, dall’alture alla riva, da un poggio all’altro, correvano, e
corrono tuttavia, strade e stradette, più o men ripide, o piane; ogni tanto affondate,
sepolte tra due muri, donde, alzando lo sguardo, non iscoprite che un pezzo di
cielo e qualche vetta di monte; ogni tanto elevate su terrapieni aperti: e da qui la
vista spazia per prospetti più o meno estesi, ma ricchi sempre e sempre qualcosa
nuovi, secondo che i diversi punti piglian più o meno della vasta scena
circostante, e secondo che questa o quella parte campeggia o si scorcia, spunta o
sparisce a vicenda. Dove un pezzo, dove un altro, dove una lunga distesa di quel
vasto e variato specchio dell’acqua; di qua lago, chiuso all’estremità o piuttosto
smarrito in un gruppo, in un andirivieni di montagne, e di mano in mano più
allargato tra altri monti che si spiegano, a uno a uno, allo sguardo, e che l’acqua
riflette capovolti, co’ paesetti posti sulle rive; di là braccio di fiume, poi lago, poi
fiume ancora, che va a perdersi in lucido serpeggiamento pur tra’ monti che
l’accompagnano, degradando via via, e perdendosi quasi anch’essi nell’orizzonte.
Il luogo stesso da dove contemplate que’ vari spettacoli, vi fa spettacolo da ogni
parte: il monte di cui passeggiate le falde, vi svolge, al di sopra, d’intorno, le sue
cime e le balze, distinte, rilevate, mutabili quasi a ogni passo, aprendosi e
contornandosi in gioghi ciò che v’era sembrato prima un sol giogo, e comparendo
in vetta ciò che poco innanzi vi si rappresentava sulla costa: e l’ameno, il
domestico di quelle falde tempera gradevolmente il selvaggio, e orna vie più il
magnifico dell’altre vedute.
Per una di queste stradicciole, tornava bel bello dalla passeggiata verso casa,
sulla sera del giorno 7 novembre dell’anno 1628, don Abbondio, curato d’una
delle terre accennate di sopra: il nome di questa, nè il casato del personaggio, non
si trovan nel manoscritto, nè a questo luogo nè altrove. Diceva tranquillamente il
suo ufizio, e talvolta, tra un salmo e l’altro, chiudeva il breviario, tenendovi
dentro, per segno, l’indice della mano destra, e, messa poi questa nell’altra dietro
la schiena, proseguiva il suo cammino, guardando a terra, e buttando con un piede
verso il muro i ciottoli che facevano inciampo nel sentiero: poi alzava il viso, e,
girati oziosamente gli occhi all’intorno, li fissava alla parte d’un monte, dove la
luce del sole già scomparso, scappando per i fessi del monte opposto, si dipingeva
qua e là sui massi sporgenti, come a larghe e inuguali pezze di porpora. Aperto
poi di nuovo il breviario, e recitato un altro squarcio, giunse a una voltata della
stradetta, dov’era solito d’alzar sempre gli occhi dal libro, e di guardarsi dinanzi:
e così fece anche quel giorno. Dopo la voltata, la strada correva diritta, forse un
sessanta passi, e poi si divideva in due viottole, a foggia d’un ipsilon: quella a
destra saliva verso il monte, e menava alla cura: l’altra scendeva nella valle fino a
un torrente; e da questa parte il muro non arrivava che all’anche del passeggiero. I
muri interni delle due viottole, in vece di riunirsi ad angolo, terminavano in un
tabernacolo, sul quale eran dipinte certe figure lunghe, serpeggianti, che finivano
in punta, e che, nell’intenzion dell’artista, e agli occhi degli abitanti del vicinato,
volevan dir fiamme; e, alternate con le fiamme, cert’altre figure da non potersi
descrivere, che volevan dire anime del purgatorio: anime e fiamme a color di
mattone, sur un fondo bigiognolo, con qualche scalcinatura qua e là. Il curato,
voltata la stradetta, e dirizzando, com’era solito, lo sguardo al tabernacolo, vide
una cosa che non s’aspettava, e che non avrebbe voluto vedere. Due uomini
stavano, l’uno dirimpetto all’altro, al confluente, per dir così, delle due viottole:
un di costoro, a cavalcioni sul muricciolo basso, con una gamba spenzolata al di
fuori, e l’altro piede posato sul terreno della strada; il compagno, in piedi,
appoggiato al muro, con le braccia incrociate sul petto. L’abito, il portamento, e
quello che, dal luogo ov’era giunto il curato, si poteva distinguer dell’aspetto, non
lasciavan dubbio intorno alla lor condizione. Avevano entrambi intorno al capo
una reticella verde, che cadeva sull’omero sinistro, terminata in una gran nappa, e
dalla quale usciva sulla fronte un enorme ciuffo: due lunghi mustacchi arricciati in
punta: una cintura lucida di cuoio, e a quella attaccate due pistole: un piccol corno
ripieno di polvere, cascante sul petto, come una collana: un manico di coltellaccio
che spuntava fuori d’un taschino degli ampi e gonfi calzoni, uno spadone, con una
gran guardia traforata a lamine d’ottone, congegnate come in cifra, forbite e
lucenti: a prima vista si davano a conoscere per individui della specie de’ bravi.
Questa specie, ora del tutto perduta, era allora floridissima in Lombardia, e
già molto antica. Chi non ne avesse idea, ecco alcuni squarci autentici, che
potranno darne una bastante de’ suoi caratteri principali, degli sforzi fatti per
ispegnerla, e della sua dura e rigogliosa vitalità.
Fino dall’otto aprile dell’anno 1583, l’Illustrissimo ed Eccellentissimo signor
don Carlo d’Aragon, Principe di Castelvetrano, Duca di Terranuova, Marchese
d’Avola, Conte di Burgeto, grande Ammiraglio, e gran Contestabile di Sicilia,
Governatore di Milano e Capitan Generale di Sua Maestà Cattolica in Italia,
pienamente informato della intollerabile miseria in che è vivuta e vive questa
Città di Milano, per cagione dei bravi e vagabondi, pubblica un bando contro di
essi.
Dichiara e diffinisce tutti coloro essere compresi in questo bando, e doversi
ritenere bravi e vagabondi... i quali, essendo forestieri o del paese, non hanno
esercizio alcuno, od avendolo, non lo fanno... ma, senza salario, o pur con esso,
s’appoggiano a qualche cavaliere o gentiluomo, officiale o mercante... per fargli
spalle e favore, o veramente, come si può presumere, per tendere insidie ad altri...
A tutti costoro ordina che, nel termine di giorni sei, abbiano a sgomberare il
paese, intima la galera a’ renitenti, e dà a tutti gli ufiziali della giustizia le più
stranamente ampie e indefinite facoltà, per l’esecuzione dell’ordine. Ma,
nell’anno seguente, il 12 aprile, scorgendo il detto signore, che questa Città è
tuttavia piena di detti bravi... tornati a vivere come prima vivevano, non punto
mutato il costume loro, né scemato il numero, dà fuori un’altra grida, ancor più
vigorosa e notabile, nella quale, tra l’altre ordinazioni, prescrive:
Che qualsivoglia persona, così di questa Città, come forestiera, che per due
testimonj consterà esser tenuto, e comunemente riputato per bravo, et aver tal
nome, ancorché non si verifichi aver fatto delitto alcuno... per questa sola
riputazione di bravo, senza altri indizj, possa dai detti giudici e da ognuno di loro
esser posto alla corda et al tormento, per processo informativo... et ancorché non
confessi delitto alcuno, tuttavia sia mandato alla galea, per detto triennio, per la
sola opinione e nome di bravo, come di sopra. Tutto ciò, e il di più che si
tralascia, perché Sua Eccellenza è risoluta di voler essere obbedita da ognuno.
All’udir parole d’un tanto signore, così gagliarde e sicure, e accompagnate
da tali ordini, viene una gran voglia di credere che, al solo rimbombo di esse, tutti
i bravi siano scomparsi per sempre. Ma la testimonianza d’un signore non meno
autorevole, né meno dotato di nomi, ci obbliga a credere tutto il contrario. È
questi l’Illustrissimo ed Eccellentissimo Signor Juan Fernandez de Velasco,
Contestabile di Castiglia, Cameriero maggiore di Sua Maestà, Duca della Città di
Frias, Conte di Haro e Castelnovo, Signore della Casa di Velasco, e di quella delli
sette Infanti di Lara, Governatore dello Stato di Milano, etc. Il 5 giugno dell’anno
1593, pienamente informato anche lui di quanto danno e rovine sieno... i bravi e
vagabondi, e del pessimo effetto che tal sorta di gente, fa contra il ben pubblico,
et in delusione della giustizia, intima loro di nuovo che, nel termine di giorni sei,
abbiano a sbrattare il paese, ripetendo a un dipresso le prescrizioni e le minacce
medesime del suo predecessore. Il 23 maggio poi dell’anno 1598, informato, con
non poco dispiacere dell’animo suo, che... ogni dì più in questa Città e Stato va
crescendo il numero di questi tali (bravi e vagabondi), né di loro, giorno e notte,
altro si sente che ferite appostatamente date, omicidii e ruberie et ogni altra
qualità di delitti, ai quali si rendono più facili, confidati essi bravi d’essere aiutati
dai capi e fautori loro,.... prescrive di nuovo gli stessi rimedi, accrescendo la
dose, come s’usa nelle malattie ostinate. Ognuno dunque, conchiude poi,
onninamente si guardi di contravvenire in parte alcuna alla grida presente,
perchè, in luogo di provare la clemenza di Sua Eccellenza, proverà il rigore, e
l’ira sua... essendo risoluta e determinata che questa sia l’ultima e perentoria
monizione.
Non fu però di questo parere l’Illustrissimo ed Eccellentissimo Signore, il
Signor Don Pietro Enriquez de Acevedo, Conte di Fuentes, Capitano, e
Governatore dello Stato di Milano; non fu di questo parere, e per buone ragioni.
Pienamente informato della miseria in che vive questa Città e Stato per cagione
del gran numero di bravi che in esso abbonda... e risoluto di totalmente estirpare
seme tanto pernizioso, dà fuori, il 5 decembre 1600, una nuova grida piena
anch’essa di severissime comminazioni, con fermo proponimento che, con ogni
rigore, e senza speranza di remissione, siano onninamente eseguite.
Convien credere però che non ci si mettesse con tutta quella buona voglia
che sapeva impiegare nell’ordir cabale, e nel suscitar nemici al suo gran nemico
Enrico IV; giacchè, per questa parte, la storia attesta come riuscisse ad armare
contro quel re il duca di Savoia, a cui fece perder più d’una città; come riuscisse a
far congiurare il duca di Biron, a cui fece perder la testa; ma, per ciò che riguarda
quel seme tanto pernizioso de’ bravi, certo è che esso continuava a germogliare, il
22 settembre dell’anno 1612. In quel giorno l’Illustrissimo ed Eccellentissimo
Signore, il Signor Don Giovanni de Mendozza, Marchese de la Hynojosa,
Gentiluomo etc., Governatore etc., pensò seriamente ad estirparlo. A quest’effetto,
spedì a Pandolfo e Marco Tullio Malatesti, stampatori regii camerali, la solita
grida, corretta ed accresciuta, perchè la stampassero ad esterminio de’ bravi. Ma
questi vissero ancora per ricevere, il 24 decembre dell’anno 1618, gli stessi e più
forti colpi dall’Illustrissimo ed Eccellentissimo Signore, il Signor Don Gomez
Suarez de Figueroa, Duca di Feria, etc., Governatore etc. Però, non essendo essi
morti neppur di quelli, l’Illustrissimo ed Eccellentissimo Signore, il Signor
Gonzalo Fernandez di Cordova, sotto il cui governo accadde la passeggiata di don
Abbondio, s’era trovato costretto a ricorreggere e ripubblicare la solita grida
contro i bravi, il giorno 5 ottobre del 1627, cioè un anno, un mese e due giorni
prima di quel memorabile avvenimento.
Nè fu questa l’ultima pubblicazione; ma noi delle posteriori non crediamo
dover far menzione, come di cosa che esce dal periodo della nostra storia. Ne
accenneremo soltanto una del 13 febbraio dell’anno 1632, nella quale
l’Illustrissimo ed Eccellentissimo Signore, el Duque de Feria, per la seconda
volta governatore, ci avvisa che le maggiori sceleraggini procedono da quelli che
chiamano bravi. Questo basta ad assicurarci che, nel tempo di cui noi trattiamo,
c’era de’ bravi tuttavia.
Che i due descritti di sopra stessero ivi ad aspettar qualcheduno, era cosa
troppo evidente; ma quel che più dispiacque a don Abbondio fu il dover
accorgersi, per certi atti, che l’aspettato era lui. Perchè, al suo apparire, coloro
s’eran guardati in viso, alzando la testa, con un movimento dal quale si scorgeva
che tutt’e due a un tratto avevan detto: è lui; quello che stava a cavalcioni s’era
alzato, tirando la sua gamba sulla strada; l’altro s’era staccato dal muro; e tutt’e
due gli s’avviavano incontro. Egli, tenendosi sempre il breviario aperto dinanzi,
come se leggesse, spingeva lo sguardo in su, per ispiar le mosse di coloro; e,
vedendoseli venir proprio incontro, fu assalito a un tratto da mille pensieri.
Domandò subito in fretta a sè stesso, se, tra i bravi e lui, ci fosse qualche uscita di
strada, a destra o a sinistra; e gli sovvenne subito di no. Fece un rapido esame, se
avesse peccato contro qualche potente, contro qualche vendicativo; ma, anche in
quel turbamento, il testimonio consolante della coscienza lo rassicurava alquanto:
i bravi però s’avvicinavano, guardandolo fisso. Mise l’indice e il medio della
mano sinistra nel collare, come per raccomodarlo; e, girando le due dita intorno al
collo, volgeva intanto la faccia all’indietro, torcendo insieme la bocca, e
guardando con la coda dell’occhio, fin dove poteva, se qualcheduno arrivasse; ma
non vide nessuno. Diede un’occhiata, al di sopra del muricciolo, ne’ campi:
nessuno; un’altra più modesta sulla strada dinanzi; nessuno, fuorchè i bravi. Che
fare? tornare indietro, non era a tempo: darla a gambe, era lo stesso che dire,
inseguitemi, o peggio. Non potendo schivare il pericolo, vi corse incontro, perchè
i momenti di quell’incertezza erano allora così penosi per lui, che non desiderava
altro che d’abbreviarli. Affrettò il passo, recitò un versetto a voce più alta,
compose la faccia a tutta quella quiete e ilarità che potè, fece ogni sforzo per
preparare un sorriso; quando si trovò a fronte dei due galantuomini, disse
mentalmente: ci siamo; e si fermò su due piedi. “Signor
curato,” disse un di que’ due, piantandogli gli occhi in
faccia.
“Cosa comanda?” rispose subito don Abbondio,
alzando i suoi dal libro, che gli restò spalancato nelle
mani, come sur un leggìo.
“Lei ha intenzione,” proseguì l’altro, con l’atto
minaccioso e iracondo di chi coglie un suo inferiore
sull’intraprendere una ribalderia, “lei ha intenzione di
maritar domani Renzo Tramaglino e Lucia Mondella!”
“Cioè...” rispose, con voce tremolante, don
Abbondio: “cioè. Lor signori son uomini di mondo, e
sanno benissimo come vanno queste faccende. Il povero
curato non c’entra: fanno i loro pasticci tra loro, e poi... e
poi, vengon da noi, come s’anderebbe a un banco a
riscotere; e noi... noi siamo i servitori del comune.”
“Or bene,” gli disse il bravo, all’orecchio, ma in
tono solenne di comando, “questo matrimonio non s’ha
da fare, né domani, né mai.`
// #endregion

// #region TEST
const cNumb = charNumber(incipit);
console.log("Character Number (excluding spaces):", cNumb);

const wNumb = wordNumber(incipit);
console.log("Word Number:", wNumb);

// const wCount = wordCount(incipit);
// console.log("Word Count (frequency of each word):", wCount);
// #endregion