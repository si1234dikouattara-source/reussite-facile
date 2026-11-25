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
