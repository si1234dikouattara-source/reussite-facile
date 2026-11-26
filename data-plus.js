/* Catalogue du collège et du primaire. Initialisation explicite des données utilisées par cours.html et lecon.html. */
const NIVEAUX = { primaire: "Primaire", college: "Collège (6ème à 3ème)", lycee: "Lycée" };
const COURS = [];

/* Cours supplémentaires. Ils s'ajoutent automatiquement à la liste de data.js */
COURS.push(
  /* ===================== PRIMAIRE ===================== */
  {
    id: "ce1-addition-posee", niveau: "primaire", classe: "CE1", matiere: "Maths",
    titre: "L'addition posée avec retenue",
    resume: "Poser une addition en colonnes et gérer la retenue.",
    lecon: [
      { titre: "Poser l'addition", html: `<p>On écrit les nombres l'un sous l'autre : unités sous unités, dizaines sous dizaines. On calcule en commençant par la <strong>droite</strong>.</p>` },
      { titre: "La retenue", html: `<p>Si un total dépasse 9, on écrit le chiffre des unités et on <strong>retient</strong> la dizaine.</p>
        <div class="exemple">47 + 36<br>Unités : 7 + 6 = 13 → j'écris 3, je retiens 1<br>Dizaines : 4 + 3 + 1 = 8<br>Résultat : <strong>83</strong></div>` }
    ],
    retenir: ["On commence toujours par les unités (à droite).", "Si le total dépasse 9, on écrit le chiffre des unités et on retient 1.", "On n'oublie pas d'ajouter la retenue aux dizaines."],
    exercices: [
      { enonce: "Pose et calcule 58 + 27.", correction: "8 + 7 = 15 → j'écris 5, je retiens 1. 5 + 2 + 1 = 8. Résultat : <strong>85</strong>." },
      { enonce: "Marie a 46 billes. Elle en gagne 38. Combien en a-t-elle ?", correction: "46 + 38 = <strong>84 billes</strong>." }
    ],
    quiz: [
      { q: "25 + 19 = ?", choix: ["34", "44", "43", "54"], bonne: 1, explication: "5 + 9 = 14, j'écris 4 et je retiens 1 ; 2 + 1 + 1 = 4 → 44." },
      { q: "Dans 38 + 27, quel chiffre écrit-on dans les unités ?", choix: ["5", "15", "1", "6"], bonne: 0, explication: "8 + 7 = 15 : on écrit 5 et on retient 1." },
      { q: "67 + 15 = ?", choix: ["72", "82", "92", "81"], bonne: 1, explication: "7 + 5 = 12 → 2, retenue 1 ; 6 + 1 + 1 = 8 → 82." }
    ]
  },
  {
    id: "ce2-sujet-verbe", niveau: "primaire", classe: "CE2", matiere: "Français",
    titre: "Le sujet et le verbe",
    resume: "Trouver le sujet d'une phrase et accorder le verbe.",
    lecon: [
      { titre: "Trouver le sujet", html: `<p>Pour trouver le sujet, on pose la question « <strong>Qui est-ce qui</strong> + verbe ? ».</p>
        <div class="exemple">Le chat dort. → Qui est-ce qui dort ? <strong>Le chat</strong>.</div>` },
      { titre: "Accorder le verbe", html: `<p>Le verbe s'accorde avec son sujet. Si le sujet est pluriel, le verbe l'est aussi.</p>
        <div class="exemple">Le garçon chante. / Les garçons chantent.</div>` }
    ],
    retenir: ["Sujet : Qui est-ce qui + verbe ?", "Le verbe s'accorde avec le sujet."],
    exercices: [
      { enonce: "Trouve le sujet : « Les enfants jouent dans la cour. »", correction: "Qui est-ce qui joue ? <strong>Les enfants</strong>." },
      { enonce: "Complète : Mes amis (arriver) demain.", correction: "Mes amis <strong>arrivent</strong> demain." }
    ],
    quiz: [
      { q: "Quel est le sujet de « Tom mange une pomme » ?", choix: ["une pomme", "mange", "Tom", "Tom mange"], bonne: 2, explication: "Qui est-ce qui mange ? Tom." },
      { q: "Le verbe s'accorde avec…", choix: ["le sujet", "le complément", "l'adjectif", "la ponctuation"], bonne: 0, explication: "Le verbe s'accorde toujours avec son sujet." },
      { q: "Ma sœur (chanter) bien.", choix: ["chantent", "chantes", "chante", "chantez"], bonne: 2, explication: "Sujet singulier « ma sœur » : elle chante." }
    ]
  },
  {
    id: "cm1-gaulois-cesar", niveau: "primaire", classe: "CM1", matiere: "Histoire",
    titre: "Les Gaulois et la conquête romaine",
    resume: "Vercingétorix, Jules César et la bataille d'Alésia.",
    lecon: [
      { titre: "La Gaule", html: `<p>Avant les Romains, la Gaule est occupée par de nombreux peuples gaulois, dirigés par des chefs. Ils vivent dans des villages et des oppida (villes fortifiées).</p>` },
      { titre: "La conquête", html: `<p>Entre 58 et 50 av. J.-C., le général romain <strong>Jules César</strong> conquiert la Gaule. Le chef gaulois <strong>Vercingétorix</strong> unit plusieurs peuples. Il est vaincu à <strong>Alésia en 52 av. J.-C.</strong></p>
        <p>La Gaule devient romaine : on parle de civilisation <em>gallo-romaine</em> (routes, villes, langue latine).</p>` }
    ],
    retenir: ["Jules César conquiert la Gaule (58 – 50 av. J.-C.).", "Vercingétorix est vaincu à Alésia en 52 av. J.-C.", "La Gaule devient gallo-romaine."],
    exercices: [
      { enonce: "Qui est Vercingétorix ?", correction: "C'est un chef gaulois qui a dirigé la résistance contre Jules César." },
      { enonce: "Quelle civilisation naît après la conquête ?", correction: "La civilisation <strong>gallo-romaine</strong>, mélange de traditions gauloises et romaines." }
    ],
    quiz: [
      { q: "Qui a conquis la Gaule ?", choix: ["Vercingétorix", "Jules César", "Charlemagne", "Louis XIV"], bonne: 1, explication: "Jules César, général romain." },
      { q: "Où Vercingétorix est-il vaincu ?", choix: ["Paris", "Lyon", "Alésia", "Rome"], bonne: 2, explication: "À Alésia, en 52 av. J.-C." },
      { q: "Comment appelle-t-on la civilisation après la conquête ?", choix: ["Franque", "Gallo-romaine", "Grecque", "Celte"], bonne: 1, explication: "Gallo-romaine." }
    ]
  },
  {
    id: "cm1-anglais-bases", niveau: "primaire", classe: "CM1", matiere: "Anglais",
    titre: "Hello ! Salutations, couleurs et nombres",
    resume: "Se présenter, dire les couleurs et compter jusqu'à 10 en anglais.",
    lecon: [
      { titre: "Se présenter", html: `<ul><li>Hello ! = Bonjour !</li><li>My name is Sam. = Je m'appelle Sam.</li><li>How are you ? = Comment vas-tu ?</li><li>I'm fine, thank you. = Je vais bien, merci.</li></ul>` },
      { titre: "Couleurs et nombres", html: `<p><strong>Couleurs :</strong> red (rouge), blue (bleu), green (vert), yellow (jaune), black (noir), white (blanc).</p>
        <p><strong>Nombres :</strong> one, two, three, four, five, six, seven, eight, nine, ten.</p>` }
    ],
    retenir: ["Hello = bonjour ; My name is… = je m'appelle…", "red, blue, green, yellow, black, white.", "one → ten : 1 → 10."],
    exercices: [
      { enonce: "Traduis : « Je m'appelle Léa. »", correction: "<strong>My name is Léa.</strong>" },
      { enonce: "Écris en anglais : 7 et 9.", correction: "7 = <strong>seven</strong>, 9 = <strong>nine</strong>." }
    ],
    quiz: [
      { q: "« Blue » signifie…", choix: ["rouge", "vert", "bleu", "jaune"], bonne: 2, explication: "Blue = bleu." },
      { q: "« Five » est le nombre…", choix: ["4", "5", "6", "15"], bonne: 1, explication: "Five = 5." },
      { q: "Réponse à « How are you ? »", choix: ["My name is Sam.", "I'm fine, thank you.", "Goodbye.", "Red."], bonne: 1, explication: "I'm fine, thank you = je vais bien, merci." }
    ]
  },
  {
    id: "cm2-cycle-eau", niveau: "primaire", classe: "CM2", matiere: "Sciences",
    titre: "Le cycle de l'eau",
    resume: "Comprendre comment l'eau circule entre la mer, le ciel et la terre.",
    lecon: [
      { titre: "Les étapes", html: `<ol><li><strong>Évaporation</strong> : le Soleil chauffe l'eau, elle passe de l'état liquide à l'état gazeux (vapeur).</li>
        <li><strong>Condensation</strong> : en montant, la vapeur refroidit et forme de minuscules gouttes : les nuages.</li>
        <li><strong>Précipitations</strong> : pluie, neige ou grêle retombent sur la terre.</li>
        <li><strong>Ruissellement et infiltration</strong> : l'eau coule vers les rivières et la mer, ou s'enfonce dans le sol.</li></ol>` }
    ],
    retenir: ["Évaporation : liquide → gaz.", "Condensation : gaz → gouttelettes (nuages).", "Précipitations : pluie, neige, grêle.", "Le cycle recommence en permanence."],
    exercices: [
      { enonce: "Quelle énergie fait évaporer l'eau ?", correction: "La chaleur du <strong>Soleil</strong>." },
      { enonce: "Comment se forment les nuages ?", correction: "La vapeur d'eau monte, refroidit et se <strong>condense</strong> en petites gouttes." }
    ],
    quiz: [
      { q: "Le passage de l'état liquide à l'état gazeux s'appelle…", choix: ["condensation", "évaporation", "précipitation", "infiltration"], bonne: 1, explication: "C'est l'évaporation." },
      { q: "Pluie et neige sont des…", choix: ["évaporations", "condensations", "précipitations", "nappes"], bonne: 2, explication: "Ce sont des précipitations." },
      { q: "Que forme la vapeur d'eau qui refroidit ?", choix: ["Du vent", "Des nuages", "Du sel", "Des rivières"], bonne: 1, explication: "Elle se condense en nuages." }
    ]
  },
  {
    id: "cm2-continents-oceans", niveau: "primaire", classe: "CM2", matiere: "Géographie",
    titre: "Les continents et les océans",
    resume: "Situer les grandes terres et les grands océans du monde.",
    lecon: [
      { titre: "Les continents", html: `<p>Selon le découpage utilisé en France, on distingue 6 continents : <strong>Europe, Asie, Afrique, Amérique, Océanie, Antarctique</strong>. La France est en Europe.</p>` },
      { titre: "Les océans", html: `<p>Il y a 5 océans : <strong>Pacifique</strong> (le plus grand), <strong>Atlantique</strong>, <strong>Indien</strong>, <strong>Arctique</strong> et <strong>Austral</strong>.</p>` }
    ],
    retenir: ["6 continents : Europe, Asie, Afrique, Amérique, Océanie, Antarctique.", "5 océans, dont le Pacifique, le plus grand.", "La France est en Europe, bordée par l'Atlantique."],
    exercices: [
      { enonce: "Cite 3 océans.", correction: "Par exemple : <strong>Atlantique, Pacifique, Indien</strong>." },
      { enonce: "Sur quel continent se trouve la France ?", correction: "En <strong>Europe</strong>." }
    ],
    quiz: [
      { q: "Quel est le plus grand océan ?", choix: ["Atlantique", "Indien", "Pacifique", "Arctique"], bonne: 2, explication: "Le Pacifique." },
      { q: "L'Égypte est sur le continent…", choix: ["asiatique", "africain", "européen", "océanien"], bonne: 1, explication: "L'Égypte est en Afrique." },
      { q: "Quel océan borde l'ouest de la France ?", choix: ["Indien", "Pacifique", "Atlantique", "Arctique"], bonne: 2, explication: "L'océan Atlantique." }
    ]
  },

  /* ===================== COLLÈGE ===================== */
  {
    id: "6e-prehistoire", niveau: "college", classe: "6e", matiere: "Histoire",
    titre: "De la chasse à l'agriculture : le Néolithique",
    resume: "Comment les humains sont passés de nomades à agriculteurs.",
    lecon: [
      { titre: "Le Paléolithique", html: `<p>Les humains sont <strong>nomades</strong> : ils chassent, pêchent et cueillent (chasseurs-cueilleurs), maîtrisent le feu et fabriquent des outils en pierre.</p>` },
      { titre: "Le Néolithique", html: `<p>Il y a environ 10 000 ans, les humains inventent l'<strong>agriculture</strong> et l'<strong>élevage</strong>. Ils deviennent <strong>sédentaires</strong> : ils construisent des villages, fabriquent des poteries et des outils en pierre polie.</p>` }
    ],
    retenir: ["Paléolithique : nomades, chasse et cueillette.", "Néolithique : agriculture, élevage, villages (sédentarisation)."],
    exercices: [
      { enonce: "Que veut dire « sédentaire » ?", correction: "Vivre toujours au même endroit, dans un village." },
      { enonce: "Cite deux inventions du Néolithique.", correction: "L'<strong>agriculture</strong>, l'<strong>élevage</strong> (ou la poterie)." }
    ],
    quiz: [
      { q: "Au Paléolithique, les humains sont…", choix: ["sédentaires", "nomades", "agriculteurs", "marchands"], bonne: 1, explication: "Ils se déplacent pour chasser et cueillir." },
      { q: "Qu'invente-t-on au Néolithique ?", choix: ["L'écriture", "L'agriculture", "L'imprimerie", "L'électricité"], bonne: 1, explication: "L'agriculture et l'élevage." },
      { q: "Un chasseur-cueilleur…", choix: ["cultive des champs", "récolte et chasse ce que la nature offre", "élève des vaches", "vit en ville"], bonne: 1, explication: "Il vit de chasse, de pêche et de cueillette." }
    ]
  },
  {
    id: "5e-nombres-relatifs", niveau: "college", classe: "5e", matiere: "Maths",
    titre: "Les nombres relatifs : additionner et soustraire",
    resume: "Calculer avec des nombres positifs et négatifs.",
    lecon: [
      { titre: "Additionner", html: `<ul><li><strong>Même signe</strong> : on additionne les valeurs et on garde le signe. (−3) + (−4) = −7</li>
        <li><strong>Signes différents</strong> : on soustrait les valeurs, et on garde le signe du plus grand. (−8) + 5 = −3</li></ul>` },
      { titre: "Soustraire", html: `<p>Soustraire un nombre, c'est <strong>ajouter son opposé</strong>.</p><div class="exemple">5 − (−3) = 5 + 3 = 8</div>` }
    ],
    retenir: ["Même signe : on additionne et on garde le signe.", "Signes différents : on soustrait, signe du plus grand.", "Soustraire = ajouter l'opposé."],
    exercices: [
      { enonce: "Calcule (−7) + (−5).", correction: "Même signe : 7 + 5 = 12, donc <strong>−12</strong>." },
      { enonce: "Calcule (−9) + 4.", correction: "9 − 4 = 5, signe du plus grand (−) : <strong>−5</strong>." },
      { enonce: "Calcule 6 − (−2).", correction: "6 + 2 = <strong>8</strong>." }
    ],
    quiz: [
      { q: "(−2) + (−6) = ?", choix: ["8", "−8", "−4", "4"], bonne: 1, explication: "Même signe : 2 + 6 = 8, signe − → −8." },
      { q: "3 + (−8) = ?", choix: ["5", "−5", "11", "−11"], bonne: 1, explication: "8 − 3 = 5, signe du plus grand (−) → −5." },
      { q: "4 − (−1) = ?", choix: ["3", "−3", "5", "−5"], bonne: 2, explication: "4 + 1 = 5." }
    ]
  },
  {
    id: "5e-anglais-present-simple", niveau: "college", classe: "5e", matiere: "Anglais",
    titre: "Le présent simple (present simple)",
    resume: "Parler de ses habitudes et de ce qui est toujours vrai.",
    lecon: [
      { titre: "Affirmatif", html: `<p>On utilise le verbe à l'infinitif, et on ajoute <strong>-s</strong> à he / she / it.</p>
        <div class="exemple">I play tennis. / She play<strong>s</strong> tennis.</div>` },
      { titre: "Négatif et question", html: `<ul><li>Négatif : <strong>do not (don't)</strong> / <strong>does not (doesn't)</strong> + verbe. He doesn't like fish.</li>
        <li>Question : <strong>Do</strong> / <strong>Does</strong> + sujet + verbe ? Does she live here ?</li></ul>` }
    ],
    retenir: ["He / she / it + verbe + s.", "Négation : don't / doesn't + verbe sans s.", "Question : Do / Does + sujet + verbe ?"],
    exercices: [
      { enonce: "Complète : She (play) football.", correction: "She <strong>plays</strong> football." },
      { enonce: "Mets à la forme négative : He likes fish.", correction: "He <strong>doesn't like</strong> fish." }
    ],
    quiz: [
      { q: "He ___ tennis.", choix: ["play", "plays", "playing", "do play"], bonne: 1, explication: "He + verbe + s : plays." },
      { q: "I ___ like spinach.", choix: ["doesn't", "don't", "isn't", "not"], bonne: 1, explication: "Avec I : don't." },
      { q: "___ she live here ?", choix: ["Do", "Is", "Does", "Are"], bonne: 2, explication: "Avec she : Does." }
    ]
  },
  {
    id: "4e-equations", niveau: "college", classe: "4e", matiere: "Maths",
    titre: "Résoudre une équation du premier degré",
    resume: "Trouver l'inconnue x avec des opérations équilibrées.",
    lecon: [
      { titre: "Le principe", html: `<p>Une équation est une égalité avec une inconnue. On peut ajouter, soustraire, multiplier ou diviser <strong>des deux côtés</strong> par le même nombre sans changer la solution.</p>` },
      { titre: "Exemple", html: `<div class="exemple">2x + 3 = 11<br>2x = 11 − 3 = 8<br>x = 8 ÷ 2 = <strong>4</strong></div>` }
    ],
    retenir: ["On garde l'équilibre : même opération des deux côtés.", "On isole x en deux temps : d'abord +/−, puis × ou ÷.", "On vérifie en remplaçant x par la solution."],
    exercices: [
      { enonce: "Résous 5x − 7 = 3x + 9.", correction: "5x − 3x = 9 + 7, donc 2x = 16 et x = <strong>8</strong>." },
      { enonce: "Résous 4(x − 1) = 12.", correction: "x − 1 = 3, donc x = <strong>4</strong>." },
      { enonce: "Résous −3x + 6 = 0.", correction: "−3x = −6, donc x = <strong>2</strong>." }
    ],
    quiz: [
      { q: "x + 5 = 12. Que vaut x ?", choix: ["7", "17", "−7", "5"], bonne: 0, explication: "12 − 5 = 7." },
      { q: "3x = 15. Que vaut x ?", choix: ["12", "18", "5", "45"], bonne: 2, explication: "15 ÷ 3 = 5." },
      { q: "2x − 4 = 10. Que vaut x ?", choix: ["3", "7", "6", "14"], bonne: 1, explication: "2x = 14, donc x = 7." }
    ]
  },
  {
    id: "4e-revolution-francaise", niveau: "college", classe: "4e", matiere: "Histoire",
    titre: "La Révolution française (1789)",
    resume: "Les grands événements qui mettent fin à la monarchie absolue.",
    lecon: [
      { titre: "1789 : la Révolution commence", html: `<p>Le <strong>14 juillet 1789</strong>, le peuple de Paris prend la Bastille, symbole du pouvoir royal. Le <strong>26 août 1789</strong>, la Déclaration des droits de l'homme et du citoyen proclame la liberté et l'égalité des droits.</p>` },
      { titre: "La fin de la monarchie", html: `<p>En 1792, la <strong>Première République</strong> est proclamée. Le roi <strong>Louis XVI</strong> est exécuté le 21 janvier 1793.</p>` }
    ],
    retenir: ["14 juillet 1789 : prise de la Bastille.", "26 août 1789 : Déclaration des droits de l'homme et du citoyen.", "1792 : Première République ; 1793 : mort de Louis XVI."],
    exercices: [
      { enonce: "Que symbolise la Bastille ?", correction: "Le pouvoir absolu du roi." },
      { enonce: "Que proclame la Déclaration de 1789 ?", correction: "La <strong>liberté</strong> et l'<strong>égalité des droits</strong> pour tous les citoyens." }
    ],
    quiz: [
      { q: "Quand la Bastille est-elle prise ?", choix: ["14 juillet 1789", "1er janvier 1800", "11 novembre 1918", "1er mai 1900"], bonne: 0, explication: "Le 14 juillet 1789." },
      { q: "Quel roi est exécuté en 1793 ?", choix: ["Louis XIV", "Louis XVI", "Charlemagne", "Napoléon"], bonne: 1, explication: "Louis XVI." },
      { q: "Quel régime est proclamé en 1792 ?", choix: ["L'Empire", "La monarchie", "La République", "La dictature"], bonne: 2, explication: "La Première République." }
    ]
  },
  {
    id: "3e-loi-ohm", niveau: "college", classe: "3e", matiere: "Physique-Chimie",
    titre: "La loi d'Ohm : U = R × I",
    resume: "Relier tension, résistance et intensité dans un circuit.",
    lecon: [
      { titre: "La loi", html: `<p>Pour un conducteur ohmique : <strong>U = R × I</strong></p>
        <ul><li><strong>U</strong> : tension en volts (V)</li><li><strong>R</strong> : résistance en ohms (Ω)</li><li><strong>I</strong> : intensité en ampères (A)</li></ul>` },
      { titre: "Les autres formes", html: `<div class="exemple">I = U ÷ R &nbsp;&nbsp;et&nbsp;&nbsp; R = U ÷ I</div>` }
    ],
    retenir: ["U = R × I.", "U en volts, R en ohms, I en ampères.", "I = U / R et R = U / I."],
    exercices: [
      { enonce: "R = 20 Ω et I = 0,5 A. Calcule U.", correction: "U = 20 × 0,5 = <strong>10 V</strong>." },
      { enonce: "U = 12 V et R = 6 Ω. Calcule I.", correction: "I = 12 ÷ 6 = <strong>2 A</strong>." },
      { enonce: "U = 9 V et I = 3 A. Calcule R.", correction: "R = 9 ÷ 3 = <strong>3 Ω</strong>." }
    ],
    quiz: [
      { q: "Quelle est l'unité de la résistance ?", choix: ["Volt", "Ampère", "Ohm", "Watt"], bonne: 2, explication: "L'ohm (Ω)." },
      { q: "R = 10 Ω, I = 2 A. U = ?", choix: ["5 V", "12 V", "20 V", "8 V"], bonne: 2, explication: "U = 10 × 2 = 20 V." },
      { q: "Quelle formule donne I ?", choix: ["U × R", "U / R", "R / U", "U + R"], bonne: 1, explication: "I = U / R." }
    ]
  },

  /* ===================== LYCÉE ===================== */
  {
    id: "1re-suites-arithmetiques", niveau: "lycee", classe: "1re", matiere: "Maths",
    titre: "Les suites arithmétiques",
    resume: "Raison, terme général et calcul d'un terme.",
    lecon: [
      { titre: "Définition", html: `<p>Une suite est <strong>arithmétique</strong> si on passe d'un terme au suivant en ajoutant toujours le même nombre r, la <em>raison</em> : <strong>uₙ₊₁ = uₙ + r</strong>.</p>` },
      { titre: "Terme général", html: `<div class="exemple">uₙ = u₀ + n × r</div><p>Par exemple, u₀ = 3 et r = 4 : u₅ = 3 + 5 × 4 = 23.</p>` }
    ],
    retenir: ["uₙ₊₁ = uₙ + r.", "uₙ = u₀ + n × r.", "Raison r = uₙ₊₁ − uₙ."],
    exercices: [
      { enonce: "Quelle est la raison de la suite 5 ; 8 ; 11 ; 14 ?", correction: "8 − 5 = 3, donc <strong>r = 3</strong>." },
      { enonce: "uₙ = 7 + 2n. Calcule u₁₀.", correction: "u₁₀ = 7 + 2 × 10 = <strong>27</strong>." }
    ],
    quiz: [
      { q: "Quelle suite est arithmétique ?", choix: ["2 ; 4 ; 8 ; 16", "1 ; 4 ; 7 ; 10", "1 ; 2 ; 4 ; 7", "3 ; 9 ; 27"], bonne: 1, explication: "On ajoute 3 à chaque fois." },
      { q: "u₀ = 2 et r = 5. u₃ = ?", choix: ["10", "17", "15", "12"], bonne: 1, explication: "2 + 3 × 5 = 17." },
      { q: "La raison est…", choix: ["uₙ × uₙ₊₁", "uₙ₊₁ − uₙ", "uₙ ÷ 2", "u₀"], bonne: 1, explication: "r = uₙ₊₁ − uₙ." }
    ]
  },
  {
    id: "1re-second-degre", niveau: "lycee", classe: "1re", matiere: "Maths",
    titre: "Le second degré et le discriminant",
    resume: "Résoudre ax² + bx + c = 0 avec Δ.",
    lecon: [
      { titre: "Le discriminant", html: `<p>Pour ax² + bx + c = 0, on calcule <strong>Δ = b² − 4ac</strong>.</p>` },
      { titre: "Les solutions", html: `<ul><li>Δ &gt; 0 : deux solutions x = (−b ± √Δ) / (2a).</li><li>Δ = 0 : une solution x = −b / (2a).</li><li>Δ &lt; 0 : aucune solution réelle.</li></ul>` }
    ],
    retenir: ["Δ = b² − 4ac.", "Δ > 0 : 2 solutions ; Δ = 0 : 1 solution ; Δ < 0 : aucune.", "x = (−b ± √Δ) / (2a)."],
    exercices: [
      { enonce: "Résous x² − 5x + 6 = 0.", correction: "Δ = 25 − 24 = 1. x = (5 ± 1)/2 donc <strong>x = 2 ou x = 3</strong>." },
      { enonce: "Résous x² + 2x + 1 = 0.", correction: "Δ = 4 − 4 = 0. x = −2/2 = <strong>−1</strong>." },
      { enonce: "Résous x² + x + 1 = 0.", correction: "Δ = 1 − 4 = −3 &lt; 0 : <strong>aucune solution réelle</strong>." }
    ],
    quiz: [
      { q: "Quelle est la formule de Δ ?", choix: ["b² + 4ac", "b² − 4ac", "a² − 4bc", "2b − ac"], bonne: 1, explication: "Δ = b² − 4ac." },
      { q: "Si Δ < 0, l'équation a…", choix: ["2 solutions", "1 solution", "aucune solution réelle", "une infinité"], bonne: 2, explication: "Pas de solution réelle." },
      { q: "Si Δ = 0, l'équation a…", choix: ["1 solution", "2 solutions", "0 solution", "3 solutions"], bonne: 0, explication: "Une solution : x = −b / (2a)." }
    ]
  },
  {
    id: "terminale-exponentielle", niveau: "lycee", classe: "Terminale", matiere: "Maths",
    titre: "La fonction exponentielle",
    resume: "Propriétés, dérivée et calculs avec eˣ.",
    lecon: [
      { titre: "Propriétés", html: `<ul><li>e⁰ = 1</li><li>eˣ &gt; 0 pour tout x</li><li>eᵃ⁺ᵇ = eᵃ × eᵇ</li><li>(eˣ)′ = eˣ, donc la fonction est croissante sur ℝ</li></ul>` },
      { titre: "Dérivée composée", html: `<div class="exemple">(e²ˣ)′ = 2e²ˣ</div>` }
    ],
    retenir: ["e⁰ = 1 et eˣ > 0.", "eᵃ⁺ᵇ = eᵃ × eᵇ.", "(eˣ)′ = eˣ ; (e^(kx))′ = k·e^(kx)."],
    exercices: [
      { enonce: "Simplifie e³ × e⁻¹.", correction: "e³⁺⁽⁻¹⁾ = <strong>e²</strong>." },
      { enonce: "Dérive f(x) = x·eˣ.", correction: "(u·v)′ avec u = x, v = eˣ : f′(x) = eˣ + x·eˣ = <strong>(1 + x)eˣ</strong>." }
    ],
    quiz: [
      { q: "Que vaut e⁰ ?", choix: ["0", "1", "e", "−1"], bonne: 1, explication: "e⁰ = 1." },
      { q: "Quelle est la dérivée de eˣ ?", choix: ["x·eˣ⁻¹", "eˣ", "1", "e"], bonne: 1, explication: "(eˣ)′ = eˣ." },
      { q: "eˣ × e² = ?", choix: ["e²ˣ", "eˣ⁺²", "2eˣ", "eˣ⁻²"], bonne: 1, explication: "On additionne les exposants : eˣ⁺²." }
    ]
  },
  {
    id: "terminale-guerre-froide", niveau: "lycee", classe: "Terminale", matiere: "Histoire",
    titre: "La Guerre froide (1947 – 1991)",
    resume: "L'opposition entre les États-Unis et l'URSS.",
    lecon: [
      { titre: "Deux blocs", html: `<p>Après 1945, le monde se divise en deux blocs : le bloc de l'Ouest dirigé par les <strong>États-Unis</strong> (capitalisme, démocratie libérale) et le bloc de l'Est dirigé par l'<strong>URSS</strong> (communisme). Ils ne s'affrontent pas directement, d'où le nom de « guerre froide ».</p>` },
      { titre: "Dates clés", html: `<ul><li>1947 : doctrine Truman</li><li>1948 – 1949 : blocus de Berlin</li><li>1961 : construction du mur de Berlin</li><li>1962 : crise des missiles de Cuba</li><li>1989 : chute du mur de Berlin</li><li>1991 : disparition de l'URSS</li></ul>` }
    ],
    retenir: ["Deux blocs : États-Unis (Ouest) contre URSS (Est).", "Pas de guerre directe, mais des crises et des conflits indirects.", "1989 : chute du mur de Berlin ; 1991 : fin de l'URSS."],
    exercices: [
      { enonce: "Pourquoi parle-t-on de « guerre froide » ?", correction: "Parce que les deux grandes puissances ne se sont <strong>jamais affrontées directement</strong>." },
      { enonce: "Cite deux crises de la Guerre froide.", correction: "Le <strong>blocus de Berlin</strong> (1948) et la <strong>crise de Cuba</strong> (1962)." }
    ],
    quiz: [
      { q: "Quand le mur de Berlin est-il construit ?", choix: ["1945", "1961", "1989", "1991"], bonne: 1, explication: "En 1961." },
      { q: "Quel pays dirige le bloc de l'Est ?", choix: ["Les États-Unis", "La France", "L'URSS", "La Chine"], bonne: 2, explication: "L'URSS." },
      { q: "Quand disparaît l'URSS ?", choix: ["1962", "1975", "1989", "1991"], bonne: 3, explication: "En 1991." }
    ]
  },
  {
    id: "2de-quantite-matiere", niveau: "lycee", classe: "2de", matiere: "Physique-Chimie",
    titre: "La quantité de matière (la mole)",
    resume: "Passer de la masse à la quantité de matière avec n = m / M.",
    lecon: [
      { titre: "Définitions", html: `<p>La <strong>quantité de matière</strong> n se mesure en <strong>moles (mol)</strong>. Une mole contient 6,02 × 10²³ entités (nombre d'Avogadro).</p>` },
      { titre: "Formule", html: `<div class="exemple">n = m / M</div><p>m : masse en grammes ; M : masse molaire en g/mol.</p>
        <p>M(H₂O) = 2 × 1 + 16 = 18 g/mol. M(CO₂) = 12 + 2 × 16 = 44 g/mol.</p>` }
    ],
    retenir: ["n s'exprime en mol.", "n = m / M, donc m = n × M.", "On calcule M en additionnant les masses atomiques."],
    exercices: [
      { enonce: "Quelle quantité de matière dans 36 g d'eau (M = 18 g/mol) ?", correction: "n = 36 / 18 = <strong>2 mol</strong>." },
      { enonce: "Quelle quantité dans 88 g de CO₂ (M = 44 g/mol) ?", correction: "n = 88 / 44 = <strong>2 mol</strong>." }
    ],
    quiz: [
      { q: "L'unité de la quantité de matière est…", choix: ["le gramme", "le litre", "la mole", "le mètre"], bonne: 2, explication: "La mole (mol)." },
      { q: "Quelle est la masse molaire de H₂O ?", choix: ["10 g/mol", "16 g/mol", "18 g/mol", "20 g/mol"], bonne: 2, explication: "2 × 1 + 16 = 18 g/mol." },
      { q: "n = 3 mol d'eau (M = 18 g/mol). Quelle masse ?", choix: ["6 g", "21 g", "54 g", "15 g"], bonne: 2, explication: "m = n × M = 3 × 18 = 54 g." }
    ]
  }
);

/* ===================== DEUXIÈME LOT DE COURS ===================== */
COURS.push(
  {
    id: "cp-nombres-20", niveau: "primaire", classe: "CP", matiere: "Maths",
    titre: "Les nombres jusqu'à 20",
    resume: "Lire, écrire et décomposer les nombres de 0 à 20.",
    lecon: [
      { titre: "Les nombres à connaître", html: `<p>11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf, 20 vingt.</p>` },
      { titre: "Dizaines et unités", html: `<p>Une dizaine, c'est 10 unités. On peut décomposer un nombre :</p><div class="exemple">14 = 10 + 4<br>17 = 10 + 7</div>` }
    ],
    retenir: ["Une dizaine = 10 unités.", "Les nombres de 11 à 16 ont un nom à apprendre par cœur.", "De 17 à 19 : dix-sept, dix-huit, dix-neuf."],
    exercices: [
      { enonce: "Écris 16 en lettres.", correction: "<strong>seize</strong>." },
      { enonce: "Complète : 13 = 10 + ___", correction: "13 = 10 + <strong>3</strong>." },
      { enonce: "Combien font 10 + 7 ?", correction: "<strong>17</strong> (dix-sept)." }
    ],
    quiz: [
      { q: "Quel nombre s'écrit « dix-huit » ?", choix: ["8", "18", "80", "19"], bonne: 1, explication: "Dix-huit = 10 + 8 = 18." },
      { q: "12 = 10 + ?", choix: ["1", "3", "2", "12"], bonne: 2, explication: "12 = 10 + 2." },
      { q: "Quel nombre s'écrit « quinze » ?", choix: ["5", "15", "50", "14"], bonne: 1, explication: "Quinze = 15." }
    ]
  },
  {
    id: "cm2-passe-compose", niveau: "primaire", classe: "CM2", matiere: "Français",
    titre: "Le passé composé",
    resume: "Former le passé composé avec avoir ou être.",
    lecon: [
      { titre: "Comment le former", html: `<p>Passé composé = auxiliaire (<strong>avoir</strong> ou <strong>être</strong>) au présent + <strong>participe passé</strong>.</p>
        <div class="exemple">J'ai mangé. / Nous avons chanté.<br>Elle est partie. / Ils sont arrivés.</div>` },
      { titre: "Les règles à retenir", html: `<ul><li>Verbes en -er : participe passé en <strong>-é</strong> (jouer → joué).</li>
        <li>Avec <strong>être</strong>, le participe passé s'accorde avec le sujet : il est parti, elle est parti<strong>e</strong>, ils sont parti<strong>s</strong>.</li></ul>` }
    ],
    retenir: ["Passé composé = avoir / être au présent + participe passé.", "Verbes en -er : participe passé en -é.", "Avec être, on accorde avec le sujet."],
    exercices: [
      { enonce: "Hier, nous (jouer) au foot.", correction: "Nous <strong>avons joué</strong> au foot." },
      { enonce: "Elle (partir) tôt ce matin.", correction: "Elle <strong>est partie</strong> tôt ce matin." },
      { enonce: "Tu (finir) tes devoirs.", correction: "Tu <strong>as fini</strong> tes devoirs." }
    ],
    quiz: [
      { q: "Quel auxiliaire pour « aller » ?", choix: ["avoir", "être", "faire", "aucun"], bonne: 1, explication: "Je suis allé : on utilise être." },
      { q: "Il (manger) → ?", choix: ["il a mangé", "il est mangé", "il a manger", "il mange"], bonne: 0, explication: "Auxiliaire avoir + participe passé mangé." },
      { q: "Ils (arriver) → ?", choix: ["ils ont arrivé", "ils sont arrivés", "ils sont arrivé", "ils ont arrivés"], bonne: 1, explication: "Avec être, on accorde : ils sont arrivés." }
    ]
  },
  {
    id: "6e-perimetre-aire", niveau: "college", classe: "6e", matiere: "Maths",
    titre: "Périmètre et aire",
    resume: "Calculer le périmètre et l'aire du rectangle, du carré et du triangle.",
    lecon: [
      { titre: "Les formules", html: `<ul><li>Rectangle : périmètre = 2 × (L + l) ; aire = L × l</li><li>Carré de côté c : périmètre = 4 × c ; aire = c × c</li><li>Triangle : aire = (base × hauteur) ÷ 2</li></ul>` },
      { titre: "Exemple", html: `<div class="exemple">Rectangle de 8 cm sur 5 cm<br>Périmètre : 2 × (8 + 5) = 26 cm<br>Aire : 8 × 5 = 40 cm²</div>` }
    ],
    retenir: ["Le périmètre est une longueur (cm), l'aire une surface (cm²).", "Rectangle : 2 × (L + l) et L × l.", "Triangle : base × hauteur ÷ 2."],
    exercices: [
      { enonce: "Un carré a un côté de 6 cm. Calcule son périmètre et son aire.", correction: "Périmètre : 4 × 6 = <strong>24 cm</strong>. Aire : 6 × 6 = <strong>36 cm²</strong>." },
      { enonce: "Un triangle a pour base 10 cm et pour hauteur 4 cm. Calcule son aire.", correction: "10 × 4 ÷ 2 = <strong>20 cm²</strong>." }
    ],
    quiz: [
      { q: "Aire d'un rectangle de 7 cm sur 3 cm ?", choix: ["10 cm²", "20 cm²", "21 cm²", "14 cm²"], bonne: 2, explication: "7 × 3 = 21 cm²." },
      { q: "Périmètre d'un carré de côté 5 cm ?", choix: ["10 cm", "20 cm", "25 cm", "15 cm"], bonne: 1, explication: "4 × 5 = 20 cm." },
      { q: "Aire d'un triangle de base 6 et de hauteur 5 ?", choix: ["30", "15", "11", "60"], bonne: 1, explication: "6 × 5 ÷ 2 = 15." }
    ]
  },
  {
    id: "5e-digestion", niveau: "college", classe: "5e", matiere: "SVT",
    titre: "La digestion",
    resume: "Le trajet des aliments dans le corps et l'absorption des nutriments.",
    lecon: [
      { titre: "Le tube digestif", html: `<ol><li><strong>Bouche</strong> : mastication et salive.</li><li><strong>Œsophage</strong> : conduit les aliments vers l'estomac.</li><li><strong>Estomac</strong> : brasse les aliments avec le suc gastrique.</li><li><strong>Intestin grêle</strong> : fin de la digestion et passage des nutriments dans le sang.</li><li><strong>Gros intestin</strong> : récupère l'eau, forme les déchets.</li></ol>` }
    ],
    retenir: ["La digestion transforme les aliments en nutriments.", "L'absorption des nutriments se fait dans l'intestin grêle.", "Les nutriments passent dans le sang, qui les distribue au corps."],
    exercices: [
      { enonce: "Où commence la digestion ?", correction: "Dans la <strong>bouche</strong>, avec la mastication et la salive." },
      { enonce: "Où les nutriments passent-ils dans le sang ?", correction: "Dans l'<strong>intestin grêle</strong>." }
    ],
    quiz: [
      { q: "Quel organe brasse les aliments avec le suc gastrique ?", choix: ["L'œsophage", "L'estomac", "Le foie", "Le cœur"], bonne: 1, explication: "L'estomac." },
      { q: "Où a lieu l'absorption des nutriments ?", choix: ["Bouche", "Estomac", "Intestin grêle", "Œsophage"], bonne: 2, explication: "Dans l'intestin grêle." },
      { q: "Les nutriments sont transportés par…", choix: ["l'air", "le sang", "la salive", "les os"], bonne: 1, explication: "Par le sang." }
    ]
  },
  {
    id: "3e-thales", niveau: "college", classe: "3e", matiere: "Maths",
    titre: "Le théorème de Thalès",
    resume: "Calculer des longueurs avec des droites parallèles.",
    lecon: [
      { titre: "Le théorème", html: `<p>Soit ABC un triangle, M un point de [AB] et N un point de [AC]. Si <strong>(MN) est parallèle à (BC)</strong>, alors :</p>
        <div class="exemple">AM / AB = AN / AC = MN / BC</div>` },
      { titre: "Exemple", html: `<p>AM = 2, AB = 6 et AN = 3. Alors 2/6 = 3/AC, donc AC = 3 × 6 ÷ 2 = <strong>9</strong>.</p>` }
    ],
    retenir: ["Il faut des droites parallèles : (MN) // (BC).", "AM/AB = AN/AC = MN/BC.", "On calcule avec un produit en croix."],
    exercices: [
      { enonce: "AM = 2, AB = 6, AN = 3. Calcule AC.", correction: "2/6 = 3/AC donc AC = 6 × 3 ÷ 2 = <strong>9</strong>." },
      { enonce: "AM = 2, AB = 6, BC = 12. Calcule MN.", correction: "MN/12 = 2/6 donc MN = 12 × 2 ÷ 6 = <strong>4</strong>." }
    ],
    quiz: [
      { q: "Quelle condition faut-il pour utiliser Thalès ?", choix: ["Un angle droit", "Des droites parallèles", "Un triangle isocèle", "Un cercle"], bonne: 1, explication: "(MN) doit être parallèle à (BC)." },
      { q: "Quel rapport est égal à AM/AB ?", choix: ["AN/AC", "AN/BC", "AB/AC", "MN/AB"], bonne: 0, explication: "AM/AB = AN/AC." },
      { q: "AM = 3, AB = 9, AC = 12. AN = ?", choix: ["3", "4", "6", "36"], bonne: 1, explication: "3/9 = AN/12 donc AN = 4." }
    ]
  },
  {
    id: "4e-anglais-past-simple", niveau: "college", classe: "4e", matiere: "Anglais",
    titre: "Le prétérit (past simple)",
    resume: "Raconter des actions terminées dans le passé.",
    lecon: [
      { titre: "Verbes réguliers et irréguliers", html: `<ul><li>Réguliers : on ajoute <strong>-ed</strong> (play → played).</li><li>Irréguliers à apprendre : go → went, see → saw, have → had, eat → ate.</li></ul>` },
      { titre: "Négatif et question", html: `<ul><li>Négatif : <strong>didn't</strong> + verbe à l'infinitif : I didn't go.</li><li>Question : <strong>Did</strong> + sujet + infinitif ? Did you go ?</li></ul>` }
    ],
    retenir: ["Réguliers : verbe + -ed.", "Négatif : didn't + infinitif ; question : Did + infinitif.", "go → went, see → saw, have → had, eat → ate."],
    exercices: [
      { enonce: "Mets au prétérit : see.", correction: "<strong>saw</strong>." },
      { enonce: "Forme négative : She played tennis.", correction: "She <strong>didn't play</strong> tennis." },
      { enonce: "Forme interrogative : You watched TV.", correction: "<strong>Did you watch</strong> TV ?" }
    ],
    quiz: [
      { q: "Le prétérit de « go » est…", choix: ["goed", "went", "gone", "goes"], bonne: 1, explication: "go → went." },
      { q: "She ___ football yesterday.", choix: ["play", "plays", "played", "playing"], bonne: 2, explication: "Verbe régulier : played." },
      { q: "Did he ___ to school ?", choix: ["go", "went", "goes", "going"], bonne: 0, explication: "Après did, on utilise l'infinitif : go." }
    ]
  },
  {
    id: "1re-probabilites-conditionnelles", niveau: "lycee", classe: "1re", matiere: "Maths",
    titre: "Les probabilités conditionnelles",
    resume: "Calculer la probabilité de B sachant A.",
    lecon: [
      { titre: "Définition", html: `<p>La probabilité de B sachant A (avec P(A) &gt; 0) est :</p><div class="exemple">P<sub>A</sub>(B) = P(A ∩ B) / P(A)</div>` },
      { titre: "Formule des probabilités composées", html: `<div class="exemple">P(A ∩ B) = P(A) × P<sub>A</sub>(B)</div>` }
    ],
    retenir: ["P_A(B) = P(A ∩ B) / P(A).", "P(A ∩ B) = P(A) × P_A(B).", "On utilise souvent un arbre pondéré."],
    exercices: [
      { enonce: "P(A) = 0,5 et P(A ∩ B) = 0,2. Calcule P_A(B).", correction: "0,2 / 0,5 = <strong>0,4</strong>." },
      { enonce: "Une urne contient 3 boules rouges et 2 bleues. On tire 2 boules sans remise. Probabilité d'obtenir deux rouges ?", correction: "3/5 × 2/4 = 6/20 = <strong>3/10</strong>." }
    ],
    quiz: [
      { q: "Quelle est la formule de P_A(B) ?", choix: ["P(A) / P(B)", "P(A ∩ B) / P(A)", "P(A) + P(B)", "P(A ∩ B) × P(A)"], bonne: 1, explication: "P_A(B) = P(A ∩ B) / P(A)." },
      { q: "P(A) = 0,4 et P_A(B) = 0,5. P(A ∩ B) = ?", choix: ["0,9", "0,2", "0,1", "0,8"], bonne: 1, explication: "0,4 × 0,5 = 0,2." },
      { q: "P(A) = 0,2 et P(A ∩ B) = 0,1. P_A(B) = ?", choix: ["0,5", "0,02", "2", "0,1"], bonne: 0, explication: "0,1 / 0,2 = 0,5." }
    ]
  },
  {
    id: "1re-energie-cinetique", niveau: "lycee", classe: "1re", matiere: "Physique-Chimie",
    titre: "L'énergie cinétique",
    resume: "Calculer l'énergie d'un objet en mouvement.",
    lecon: [
      { titre: "La formule", html: `<p>L'énergie cinétique d'un objet de masse m et de vitesse v est :</p><div class="exemple">Ec = ½ × m × v²</div><p>Ec en joules (J), m en kilogrammes (kg), v en mètres par seconde (m/s).</p>` },
      { titre: "À savoir", html: `<p>Si la vitesse est multipliée par 2, l'énergie cinétique est multipliée par <strong>4</strong> (car v est au carré).</p>` }
    ],
    retenir: ["Ec = ½ m v².", "Unités : J, kg, m/s.", "Vitesse × 2 ⇒ énergie × 4."],
    exercices: [
      { enonce: "m = 2 kg et v = 3 m/s. Calcule Ec.", correction: "½ × 2 × 3² = 1 × 9 = <strong>9 J</strong>." },
      { enonce: "Une voiture de 1000 kg roule à 10 m/s. Calcule Ec.", correction: "½ × 1000 × 100 = <strong>50 000 J</strong>." }
    ],
    quiz: [
      { q: "Quelle est l'unité de l'énergie cinétique ?", choix: ["Watt", "Joule", "Newton", "Volt"], bonne: 1, explication: "Le joule (J)." },
      { q: "m = 4 kg et v = 5 m/s. Ec = ?", choix: ["20 J", "50 J", "100 J", "10 J"], bonne: 1, explication: "½ × 4 × 25 = 50 J." },
      { q: "Si la vitesse double, Ec est multipliée par…", choix: ["2", "4", "8", "1"], bonne: 1, explication: "v est au carré, donc × 4." }
    ]
  }
);


/* ===================== MATHEMATIQUES - PROGRAMME IVOIRIEN ===================== */
COURS.push(
  {
    id: "6e-nombres-entiers-naturels-officiel", niveau: "college", classe: "6e", matiere: "Maths",
    titre: "Les nombres entiers naturels et la divisibilité",
    resume: "Lire et utiliser les entiers naturels, reconnaître multiples, diviseurs et critères de divisibilité.",
    lecon: [
      { titre: "1. Les entiers naturels", html: `<p>Les <strong>nombres entiers naturels</strong> sont les nombres utilisés pour compter : 0, 1, 2, 3, 4, … On note leur ensemble <strong>ℕ</strong>.</p><p>Un entier naturel peut être pair ou impair. Un nombre pair est divisible par 2 ; un nombre impair ne l'est pas.</p><div class="exemple">Exemples : 0, 8, 125 et 2 040 appartiennent à ℕ. Le nombre −3 n'appartient pas à ℕ.</div>` },
      { titre: "2. Multiples et diviseurs", html: `<p>Un nombre <strong>a</strong> est un multiple de <strong>b</strong> si l'on peut écrire a = b × k, où k est un entier naturel. Dans ce cas, b est un diviseur de a.</p><div class="exemple">24 = 6 × 4 : 24 est un multiple de 6 et de 4 ; 6 et 4 sont des diviseurs de 24.</div><p>Pour trouver les diviseurs d'un nombre, on recherche les divisions qui donnent un quotient entier et un reste nul.</p>` },
      { titre: "3. Critères de divisibilité", html: `<ul><li>Par 2 : le chiffre des unités est 0, 2, 4, 6 ou 8.</li><li>Par 3 : la somme des chiffres est un multiple de 3.</li><li>Par 5 : le chiffre des unités est 0 ou 5.</li><li>Par 9 : la somme des chiffres est un multiple de 9.</li><li>Par 10 : le chiffre des unités est 0.</li></ul><div class="exemple">3 456 est divisible par 3 car 3 + 4 + 5 + 6 = 18, et 18 est divisible par 3. Il est aussi divisible par 2 car il se termine par 6.</div>` }
    ],
    retenir: ["ℕ désigne l'ensemble des entiers naturels.", "a est un multiple de b si a = b × k avec k entier naturel.", "Un diviseur donne une division avec reste nul.", "Pour tester la divisibilité par 3 ou 9, on additionne les chiffres."],
    exercices: [
      { enonce: "Parmi 0 ; 7 ; −2 ; 15 ; 3,5, quels nombres appartiennent à ℕ ?", correction: "Les entiers naturels sont <strong>0, 7 et 15</strong>. −2 est négatif et 3,5 n'est pas entier." },
      { enonce: "Écris tous les diviseurs positifs de 18.", correction: "Les paires de facteurs sont 1 × 18, 2 × 9 et 3 × 6. Les diviseurs sont <strong>1, 2, 3, 6, 9 et 18</strong>." },
      { enonce: "Le nombre 4 725 est-il divisible par 3, par 5 et par 9 ? Justifie.", correction: "La somme des chiffres vaut 4 + 7 + 2 + 5 = 18 : il est divisible par <strong>3 et 9</strong>. Il se termine par 5 : il est divisible par <strong>5</strong>." }
    ],
    quiz: [
      { q: "Quel nombre n'appartient pas à ℕ ?", choix: ["0", "12", "−4", "105"], bonne: 2, explication: "−4 est négatif ; les entiers naturels ne sont pas négatifs." },
      { q: "Lequel est un diviseur de 24 ?", choix: ["5", "7", "8", "10"], bonne: 2, explication: "24 ÷ 8 = 3, sans reste : 8 est un diviseur de 24." },
      { q: "Un nombre divisible par 9 a une somme de chiffres…", choix: ["toujours paire", "multiple de 9", "qui se termine par 9", "égale à 9 seulement"], bonne: 1, explication: "Le critère de divisibilité par 9 repose sur la somme des chiffres, qui doit être un multiple de 9." }
    ]
  },
  {
    id: "5e-nombres-premiers-officiel", niveau: "college", classe: "5e", matiere: "Maths",
    titre: "Les nombres premiers et la décomposition en facteurs premiers",
    resume: "Reconnaître un nombre premier et décomposer un entier en produit de facteurs premiers.",
    lecon: [
      { titre: "1. Définition", html: `<p>Un <strong>nombre premier</strong> est un entier naturel supérieur à 1 qui possède exactement deux diviseurs positifs : 1 et lui-même.</p><div class="exemple">2, 3, 5, 7, 11 et 13 sont premiers. 1 n'est pas premier car il ne possède qu'un seul diviseur positif.</div><p>Le nombre 2 est le seul nombre premier pair.</p>` },
      { titre: "2. Vérifier qu'un nombre est premier", html: `<p>Pour vérifier qu'un entier n est premier, on cherche s'il possède un diviseur autre que 1 et lui-même. Il suffit de tester les diviseurs premiers inférieurs ou égaux à √n.</p><div class="exemple">29 n'est divisible ni par 2, ni par 3, ni par 5. Comme √29 est inférieur à 6, ces tests suffisent : 29 est premier.</div>` },
      { titre: "3. Décomposer en facteurs premiers", html: `<p>Décomposer un entier en facteurs premiers consiste à l'écrire comme un produit de nombres premiers.</p><div class="exemple">60 = 2 × 30 = 2 × 2 × 15 = <strong>2² × 3 × 5</strong>.</div><p>Cette décomposition est utile pour simplifier des fractions et rechercher des diviseurs communs.</p>` }
    ],
    retenir: ["Un nombre premier possède exactement deux diviseurs positifs.", "1 n'est pas premier ; 2 est le seul nombre premier pair.", "La décomposition en facteurs premiers est un produit de nombres premiers."],
    exercices: [
      { enonce: "Parmi 1, 2, 9, 17 et 21, quels nombres sont premiers ?", correction: "<strong>2 et 17</strong> sont premiers. 1 n'a qu'un diviseur ; 9 = 3 × 3 et 21 = 3 × 7." },
      { enonce: "Décompose 84 en produit de facteurs premiers.", correction: "84 = 2 × 42 = 2 × 2 × 21 = <strong>2² × 3 × 7</strong>." },
      { enonce: "Pourquoi 35 n'est-il pas premier ?", correction: "Parce que 35 = 5 × 7 : il possède des diviseurs autres que 1 et 35." }
    ],
    quiz: [
      { q: "Combien de diviseurs positifs possède un nombre premier ?", choix: ["1", "2", "3", "4"], bonne: 1, explication: "Un nombre premier possède exactement deux diviseurs positifs : 1 et lui-même." },
      { q: "Lequel est un nombre premier ?", choix: ["1", "15", "19", "25"], bonne: 2, explication: "19 n'est divisible que par 1 et 19." },
      { q: "La décomposition de 36 en facteurs premiers est…", choix: ["2 × 18", "2² × 3²", "4 × 9", "6 × 6"], bonne: 1, explication: "36 = 4 × 9 = 2² × 3² ; tous les facteurs sont premiers." }
    ]
  },
  {
    id: "4e-nombres-rationnels-officiel", niveau: "college", classe: "4e", matiere: "Maths",
    titre: "Les nombres rationnels et les fractions",
    resume: "Reconnaître un nombre rationnel, simplifier et comparer des fractions, effectuer des opérations.",
    lecon: [
      { titre: "1. Définition d'un nombre rationnel", html: `<p>Un nombre rationnel est un nombre qui peut s'écrire sous la forme <strong>a/b</strong>, avec a et b entiers et b différent de 0. L'ensemble des rationnels est noté ℚ.</p><div class="exemple">3/4, −5/2 et 7 = 7/1 sont des nombres rationnels.</div><p>Plusieurs fractions peuvent représenter le même nombre : 1/2 = 2/4 = 3/6.</p>` },
      { titre: "2. Simplifier une fraction", html: `<p>Pour simplifier une fraction, on divise son numérateur et son dénominateur par un même diviseur non nul.</p><div class="exemple">18/24 = (18 ÷ 6)/(24 ÷ 6) = <strong>3/4</strong>.</div><p>Une fraction est irréductible lorsqu'on ne peut plus simplifier son numérateur et son dénominateur par un diviseur commun supérieur à 1.</p>` },
      { titre: "3. Comparer et calculer", html: `<p>Pour comparer deux fractions positives, on peut les réduire au même dénominateur ou comparer les produits en croix. Pour additionner ou soustraire, il faut d'abord obtenir un dénominateur commun.</p><div class="exemple">2/3 + 1/4 = 8/12 + 3/12 = <strong>11/12</strong>.<br>3/5 − 1/10 = 6/10 − 1/10 = <strong>1/2</strong>.</div><p>Pour multiplier deux fractions, on multiplie les numérateurs entre eux et les dénominateurs entre eux.</p>` }
    ],
    retenir: ["Un rationnel s'écrit a/b avec b ≠ 0.", "Pour simplifier, on divise en haut et en bas par le même nombre non nul.", "Pour additionner ou soustraire, on utilise un dénominateur commun.", "Pour multiplier deux fractions, on multiplie les numérateurs et les dénominateurs."],
    exercices: [
      { enonce: "Simplifie la fraction 42/56.", correction: "Le PGCD de 42 et 56 est 14. Donc 42/56 = (42 ÷ 14)/(56 ÷ 14) = <strong>3/4</strong>." },
      { enonce: "Calcule 5/6 + 1/4.", correction: "Le dénominateur commun est 12 : 5/6 = 10/12 et 1/4 = 3/12. La somme vaut <strong>13/12</strong>." },
      { enonce: "Compare 7/8 et 5/6.", correction: "7 × 6 = 42 et 5 × 8 = 40. Comme 42 &gt; 40, <strong>7/8 &gt; 5/6</strong>." }
    ],
    quiz: [
      { q: "Quel nombre n'est pas rationnel sous la forme a/b avec a et b entiers ?", choix: ["−2", "0,5", "3/7", "√2"], bonne: 3, explication: "√2 est irrationnel : il ne peut pas s'écrire comme quotient de deux entiers." },
      { q: "La fraction 18/24 simplifiée vaut…", choix: ["2/3", "3/4", "4/5", "6/8"], bonne: 1, explication: "On divise le numérateur et le dénominateur par 6 : 18/24 = 3/4." },
      { q: "2/5 + 1/5 = ?", choix: ["3/10", "2/10", "3/5", "1/5"], bonne: 2, explication: "Les dénominateurs sont identiques : on additionne les numérateurs et on conserve 5." }
    ]
  },
  {
    id: "3e-racines-carrees-officiel", niveau: "college", classe: "3e", matiere: "Maths",
    titre: "Les racines carrées",
    resume: "Comprendre la racine carrée, reconnaître les carrés parfaits et simplifier des expressions simples.",
    lecon: [
      { titre: "1. Définition", html: `<p>Pour un nombre réel positif a, sa <strong>racine carrée</strong> √a est l'unique nombre positif dont le carré est égal à a.</p><div class="exemple">√25 = 5 car 5² = 25. √0 = 0 et √1 = 1.</div><p>Dans les nombres réels, la racine carrée d'un nombre négatif n'est pas définie.</p>` },
      { titre: "2. Carrés parfaits", html: `<p>Les carrés parfaits sont les carrés d'entiers : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, etc. Les connaître aide à encadrer une racine carrée.</p><div class="exemple">Comme 25 &lt; 30 &lt; 36, on obtient 5 &lt; √30 &lt; 6.</div>` },
      { titre: "3. Propriétés utiles", html: `<p>Pour a ≥ 0 et b ≥ 0 : √(a × b) = √a × √b. Pour b &gt; 0 : √(a/b) = √a/√b.</p><div class="exemple">√(9 × 4) = √9 × √4 = 3 × 2 = 6.<br>√50 = √(25 × 2) = <strong>5√2</strong>.</div><p>Attention : en général, √(a + b) n'est pas égal à √a + √b.</p>` }
    ],
    retenir: ["√a est le nombre positif dont le carré vaut a.", "Dans ℝ, on ne prend la racine carrée que d'un nombre positif ou nul.", "√(ab) = √a × √b pour a et b positifs ou nuls.", "√(a + b) n'est généralement pas égal à √a + √b."],
    exercices: [
      { enonce: "Calcule √49 et √121.", correction: "√49 = <strong>7</strong> car 7² = 49 ; √121 = <strong>11</strong> car 11² = 121." },
      { enonce: "Encadre √20 entre deux entiers consécutifs.", correction: "16 &lt; 20 &lt; 25, donc <strong>4 &lt; √20 &lt; 5</strong>." },
      { enonce: "Simplifie √72.", correction: "72 = 36 × 2, donc √72 = √36 × √2 = <strong>6√2</strong>." }
    ],
    quiz: [
      { q: "√81 vaut…", choix: ["8", "9", "10", "−9"], bonne: 1, explication: "9² = 81 et la racine carrée désigne le nombre positif." },
      { q: "Entre quels entiers se trouve √15 ?", choix: ["2 et 3", "3 et 4", "4 et 5", "5 et 6"], bonne: 1, explication: "9 &lt; 15 &lt; 16, donc 3 &lt; √15 &lt; 4." },
      { q: "√(25 × 4) vaut…", choix: ["10", "20", "100", "29"], bonne: 0, explication: "√25 × √4 = 5 × 2 = 10." }
    ]
  }
);
