/* ============================================================
   TOUS TES COURS SONT ICI.
   Pour ajouter un cours : copie un bloc { ... }, colle-le à la
   suite (avec une virgule), puis change le texte.
   niveau : "primaire" | "college" | "lycee"
   ============================================================ */
const COURS = [
  /* ---------------------- PRIMAIRE ---------------------- */
  {
    id: "ce2-tables-multiplication",
    niveau: "primaire",
    classe: "CE2",
    matiere: "Maths",
    titre: "Les tables de multiplication (2, 3, 4 et 5)",
    resume: "Comprendre la multiplication et retenir les premières tables.",
    lecon: [
      {
        titre: "Multiplier, c'est additionner plusieurs fois",
        html: `<p>Multiplier, c'est additionner plusieurs fois le même nombre.</p>
               <div class="exemple">3 × 4 = 3 + 3 + 3 + 3 = <strong>12</strong></div>
               <p>On lit : « 3 multiplié par 4 » ou « 4 fois 3 ».</p>`
      },
      {
        titre: "Des astuces pour aller plus vite",
        html: `<ul>
                 <li><strong>Table de 2</strong> : c'est le double. 2 × 6 = 6 + 6 = 12.</li>
                 <li><strong>Table de 5</strong> : le résultat finit toujours par 0 ou 5.</li>
                 <li><strong>Table de 4</strong> : c'est le double du double. 4 × 3 = (3 × 2) × 2 = 12.</li>
                 <li>On peut changer l'ordre : 3 × 4 = 4 × 3.</li>
               </ul>`
      }
    ],
    retenir: [
      "Multiplier = additionner plusieurs fois le même nombre.",
      "On peut changer l'ordre : 3 × 4 = 4 × 3.",
      "Les résultats de la table de 5 finissent par 0 ou 5."
    ],
    exercices: [
      { enonce: "Calcule 4 × 6.", correction: "4 × 6 = 6 + 6 + 6 + 6 = <strong>24</strong>." },
      { enonce: "Léa a 5 paquets de 3 stylos. Combien de stylos a-t-elle ?", correction: "5 × 3 = <strong>15 stylos</strong>." },
      { enonce: "Complète : 3 × ___ = 18.", correction: "3 × 6 = 18, donc la réponse est <strong>6</strong>." }
    ],
    quiz: [
      { q: "Combien font 5 × 7 ?", choix: ["30", "35", "40", "45"], bonne: 1, explication: "5 × 7 = 35 (le résultat finit par 5)." },
      { q: "Combien font 4 × 8 ?", choix: ["28", "32", "36", "24"], bonne: 1, explication: "4 × 8 = double de 8 (16), puis double de 16 : 32." },
      { q: "Quel nombre est dans la table de 5 ?", choix: ["23", "42", "35", "18"], bonne: 2, explication: "35 finit par 5 : 5 × 7 = 35." },
      { q: "Combien font 3 × 9 ?", choix: ["27", "24", "21", "30"], bonne: 0, explication: "3 × 9 = 9 + 9 + 9 = 27." }
    ]
  },
  {
    id: "cm1-present-premier-groupe",
    niveau: "primaire",
    classe: "CM1",
    matiere: "Français",
    titre: "Le présent des verbes du 1er groupe",
    resume: "Conjuguer les verbes en -er (chanter, jouer, parler…).",
    lecon: [
      {
        titre: "Les terminaisons",
        html: `<p>Les verbes du 1er groupe ont un infinitif en <strong>-er</strong> (sauf « aller »). Au présent, on garde le radical et on ajoute :</p>
               <div class="exemple">
                 je chant<strong>e</strong><br>tu chant<strong>es</strong><br>il / elle chant<strong>e</strong><br>
                 nous chant<strong>ons</strong><br>vous chant<strong>ez</strong><br>ils / elles chant<strong>ent</strong>
               </div>`
      },
      {
        titre: "Attention aux petits changements",
        html: `<ul>
                 <li><strong>manger</strong> → nous man<strong>ge</strong>ons (on garde le « e » pour le son [j]).</li>
                 <li><strong>commencer</strong> → nous commen<strong>ç</strong>ons (on met une cédille).</li>
               </ul>`
      }
    ],
    retenir: [
      "Terminaisons : -e, -es, -e, -ons, -ez, -ent.",
      "Avec « ils / elles », on écrit toujours -ent.",
      "manger → nous mangeons ; commencer → nous commençons."
    ],
    exercices: [
      { enonce: "Conjugue « jouer » avec « tu ».", correction: "Tu <strong>joues</strong>." },
      { enonce: "Complète : Les élèves (écouter) la maîtresse.", correction: "Les élèves <strong>écoutent</strong> la maîtresse." },
      { enonce: "Conjugue « manger » avec « nous ».", correction: "Nous <strong>mangeons</strong> (avec un « e » après le g)." }
    ],
    quiz: [
      { q: "Quelle est la terminaison de « ils » au présent (1er groupe) ?", choix: ["-ons", "-ent", "-ez", "-es"], bonne: 1, explication: "Ils chantent : la terminaison est -ent." },
      { q: "Vous (parler) → ?", choix: ["parlons", "parlent", "parlez", "parles"], bonne: 2, explication: "Avec « vous », on écrit -ez : vous parlez." },
      { q: "Nous (commencer) → ?", choix: ["commencons", "commençons", "commencent", "commençont"], bonne: 1, explication: "On met une cédille pour garder le son [s] : commençons." },
      { q: "Tu (danser) → ?", choix: ["danse", "danses", "dansent", "dansez"], bonne: 1, explication: "Avec « tu », on ajoute un -s : tu danses." }
    ]
  },

  /* ---------------------- COLLÈGE ---------------------- */
  {
    id: "6e-fractions",
    niveau: "college",
    classe: "6e",
    matiere: "Maths",
    titre: "Les fractions : bien démarrer",
    resume: "Lire une fraction, comparer, additionner et prendre une fraction d'une quantité.",
    lecon: [
      {
        titre: "Lire une fraction",
        html: `<p>Dans la fraction <strong>3/4</strong> :</p>
               <ul>
                 <li><strong>4</strong> (en bas) est le <em>dénominateur</em> : en combien de parts égales on partage.</li>
                 <li><strong>3</strong> (en haut) est le <em>numérateur</em> : combien de parts on prend.</li>
               </ul>`
      },
      {
        titre: "Comparer et additionner (même dénominateur)",
        html: `<p>Quand le dénominateur est le même, on compare les numérateurs, et on additionne les numérateurs.</p>
               <div class="exemple">5/8 &gt; 3/8 &nbsp;&nbsp;et&nbsp;&nbsp; 2/7 + 3/7 = 5/7</div>`
      },
      {
        titre: "Prendre une fraction d'une quantité",
        html: `<p>Pour prendre 3/4 de 20 : on divise par 4, puis on multiplie par 3.</p>
               <div class="exemple">20 ÷ 4 = 5 &nbsp;puis&nbsp; 5 × 3 = <strong>15</strong></div>`
      }
    ],
    retenir: [
      "Dénominateur = nombre de parts égales ; numérateur = parts prises.",
      "Même dénominateur : on additionne les numérateurs, le dénominateur ne change pas.",
      "Fraction d'une quantité : diviser par le dénominateur, multiplier par le numérateur."
    ],
    exercices: [
      { enonce: "Calcule 2/9 + 4/9 et simplifie.", correction: "2/9 + 4/9 = 6/9. On divise en haut et en bas par 3 : <strong>2/3</strong>." },
      { enonce: "Calcule 3/5 de 40.", correction: "40 ÷ 5 = 8, puis 8 × 3 = <strong>24</strong>." },
      { enonce: "Compare 5/8 et 3/8.", correction: "Même dénominateur, 5 &gt; 3 donc <strong>5/8 &gt; 3/8</strong>." }
    ],
    quiz: [
      { q: "Quel est le dénominateur de 5/12 ?", choix: ["5", "12", "17", "7"], bonne: 1, explication: "Le dénominateur est le nombre du bas : 12." },
      { q: "Combien font 1/5 + 2/5 ?", choix: ["3/10", "3/5", "2/5", "1/5"], bonne: 1, explication: "On additionne les numérateurs : 1 + 2 = 3, sur 5." },
      { q: "Combien vaut 1/2 de 18 ?", choix: ["8", "9", "10", "36"], bonne: 1, explication: "18 ÷ 2 = 9." },
      { q: "Quelle fraction est la plus grande ?", choix: ["3/10", "7/10", "1/10", "2/10"], bonne: 1, explication: "Même dénominateur : le plus grand numérateur gagne, donc 7/10." }
    ]
  },
  {
    id: "3e-pythagore",
    niveau: "college",
    classe: "3e",
    matiere: "Maths",
    titre: "Le théorème de Pythagore",
    resume: "Calculer une longueur dans un triangle rectangle, et prouver qu'un triangle est rectangle.",
    lecon: [
      {
        titre: "Le théorème",
        html: `<p>Dans un triangle rectangle, le carré de l'<strong>hypoténuse</strong> (le côté en face de l'angle droit) est égal à la somme des carrés des deux autres côtés.</p>
               <div class="exemple">ABC rectangle en A : <strong>BC² = AB² + AC²</strong></div>`
      },
      {
        titre: "Exemple de calcul",
        html: `<p>ABC est rectangle en A, AB = 3 cm et AC = 4 cm.</p>
               <div class="exemple">BC² = 3² + 4² = 9 + 16 = 25<br>BC = √25 = <strong>5 cm</strong></div>`
      },
      {
        titre: "La réciproque",
        html: `<p>Si le carré du plus grand côté est égal à la somme des carrés des deux autres, alors le triangle est rectangle (l'angle droit est en face du plus grand côté).</p>`
      }
    ],
    retenir: [
      "L'hypoténuse est le côté opposé à l'angle droit, et le plus long.",
      "Si ABC est rectangle en A : BC² = AB² + AC².",
      "Réciproque : on compare le carré du grand côté à la somme des deux autres carrés."
    ],
    exercices: [
      { enonce: "ABC est rectangle en A, AB = 6 et AC = 8. Calcule BC.", correction: "BC² = 6² + 8² = 36 + 64 = 100, donc BC = <strong>10</strong>." },
      { enonce: "ABC est rectangle en A, BC = 13 et AB = 5. Calcule AC.", correction: "L'hypoténuse est BC : AC² = 13² − 5² = 169 − 25 = 144, donc AC = <strong>12</strong>." },
      { enonce: "Un triangle a pour côtés 5, 12 et 13. Est-il rectangle ?", correction: "Le plus grand côté est 13 : 13² = 169. Et 5² + 12² = 25 + 144 = 169. Les deux sont égaux, donc d'après la réciproque, <strong>le triangle est rectangle</strong>." }
    ],
    quiz: [
      { q: "L'hypoténuse est…", choix: ["le plus petit côté", "le côté opposé à l'angle droit", "un côté de l'angle droit", "la hauteur"], bonne: 1, explication: "C'est le côté en face de l'angle droit." },
      { q: "ABC rectangle en A. Quelle égalité est vraie ?", choix: ["AB² = BC² + AC²", "AC² = AB² + BC²", "BC² = AB² + AC²", "BC = AB + AC"], bonne: 2, explication: "BC est l'hypoténuse : BC² = AB² + AC²." },
      { q: "AB = 9 et AC = 12 (rectangle en A). BC = ?", choix: ["15", "21", "225", "13"], bonne: 0, explication: "81 + 144 = 225, et √225 = 15." }
    ]
  },

  /* ---------------------- LYCÉE ---------------------- */
  {
    id: "2de-fonctions-affines",
    niveau: "lycee",
    classe: "2de",
    matiere: "Maths",
    titre: "Les fonctions affines",
    resume: "Coefficient directeur, sens de variation et équation d'une droite.",
    lecon: [
      {
        titre: "Définition",
        html: `<p>Une fonction affine s'écrit <strong>f(x) = ax + b</strong>. Sa courbe est une droite.</p>
               <ul>
                 <li><strong>a</strong> : coefficient directeur (la « pente »).</li>
                 <li><strong>b</strong> : ordonnée à l'origine (f(0) = b).</li>
               </ul>`
      },
      {
        titre: "Sens de variation",
        html: `<ul>
                 <li>Si a &gt; 0, f est <strong>croissante</strong>.</li>
                 <li>Si a &lt; 0, f est <strong>décroissante</strong>.</li>
                 <li>Si a = 0, f est constante.</li>
               </ul>`
      },
      {
        titre: "Retrouver a et b",
        html: `<p>Avec deux points A(x₁ ; y₁) et B(x₂ ; y₂) :</p>
               <div class="exemple">a = (y₂ − y₁) / (x₂ − x₁), puis on trouve b avec un des deux points.</div>`
      }
    ],
    retenir: [
      "f(x) = ax + b ; sa courbe est une droite.",
      "a > 0 : croissante ; a < 0 : décroissante.",
      "a = (y₂ − y₁) / (x₂ − x₁)."
    ],
    exercices: [
      { enonce: "Soit f(x) = 2x + 3. Calcule f(4).", correction: "f(4) = 2 × 4 + 3 = <strong>11</strong>." },
      { enonce: "Pour f(x) = 2x + 3, trouve l'antécédent de 7.", correction: "On résout 2x + 3 = 7, donc 2x = 4 et x = <strong>2</strong>." },
      { enonce: "La droite passe par A(1 ; 3) et B(3 ; 7). Donne f(x).", correction: "a = (7 − 3)/(3 − 1) = 2. Puis 3 = 2 × 1 + b, donc b = 1. <strong>f(x) = 2x + 1</strong>." }
    ],
    quiz: [
      { q: "f(x) = −3x + 1 est…", choix: ["croissante", "décroissante", "constante", "impossible à dire"], bonne: 1, explication: "a = −3 < 0, donc décroissante." },
      { q: "Si f(x) = 5x − 2, que vaut f(0) ?", choix: ["5", "0", "−2", "2"], bonne: 2, explication: "f(0) = b = −2." },
      { q: "Quel est le coefficient directeur de y = 4x − 7 ?", choix: ["4", "−7", "7", "−4"], bonne: 0, explication: "Dans ax + b, a = 4." },
      { q: "Pour quelle valeur de x a-t-on 2x − 6 = 0 ?", choix: ["x = 6", "x = −3", "x = 3", "x = 12"], bonne: 2, explication: "2x = 6, donc x = 3." }
    ]
  },
  {
    id: "terminale-derivees",
    niveau: "lycee",
    classe: "Terminale",
    matiere: "Maths",
    titre: "Dérivation : formules et tangente",
    resume: "Dérivées usuelles, dérivée d'un produit, équation d'une tangente.",
    lecon: [
      {
        titre: "Dérivées usuelles",
        html: `<ul>
                 <li>(k)′ = 0 (k constante)</li>
                 <li>(xⁿ)′ = n·xⁿ⁻¹ (par exemple (x⁵)′ = 5x⁴)</li>
                 <li>(1/x)′ = −1/x²</li>
                 <li>(√x)′ = 1/(2√x)</li>
               </ul>`
      },
      {
        titre: "Règles de calcul",
        html: `<ul>
                 <li>(u + v)′ = u′ + v′</li>
                 <li>(k·u)′ = k·u′</li>
                 <li><strong>(u·v)′ = u′v + uv′</strong></li>
               </ul>`
      },
      {
        titre: "Tangente",
        html: `<p>L'équation de la tangente à la courbe de f au point d'abscisse a est :</p>
               <div class="exemple">y = f′(a)(x − a) + f(a)</div>
               <p>Et si f′(x) &gt; 0 sur un intervalle, alors f est croissante sur cet intervalle.</p>`
      }
    ],
    retenir: [
      "(xⁿ)′ = n·xⁿ⁻¹ ; (1/x)′ = −1/x² ; (√x)′ = 1/(2√x).",
      "(u·v)′ = u′v + uv′.",
      "Tangente en a : y = f′(a)(x − a) + f(a).",
      "f′ > 0 sur un intervalle ⇒ f croissante sur cet intervalle."
    ],
    exercices: [
      { enonce: "Dérive f(x) = x³ − 2x² + 5.", correction: "f′(x) = 3x² − 4x + 0 = <strong>3x² − 4x</strong>." },
      { enonce: "Dérive f(x) = (2x + 1)(x² − 3) avec la formule du produit.", correction: "u = 2x + 1, u′ = 2 ; v = x² − 3, v′ = 2x.<br>f′(x) = 2(x² − 3) + (2x + 1)(2x) = 2x² − 6 + 4x² + 2x = <strong>6x² + 2x − 6</strong>." },
      { enonce: "Donne l'équation de la tangente à f(x) = x² au point d'abscisse 3.", correction: "f(3) = 9 et f′(x) = 2x donc f′(3) = 6.<br>y = 6(x − 3) + 9 = <strong>6x − 9</strong>." }
    ],
    quiz: [
      { q: "Quelle est la dérivée de x⁵ ?", choix: ["x⁴", "5x⁴", "5x⁵", "4x⁵"], bonne: 1, explication: "(xⁿ)′ = n·xⁿ⁻¹ donc 5x⁴." },
      { q: "Quelle est la dérivée de 1/x ?", choix: ["1/x²", "−1/x", "−1/x²", "ln x"], bonne: 2, explication: "(1/x)′ = −1/x²." },
      { q: "Quelle est la formule de (u·v)′ ?", choix: ["u′·v′", "u′v + uv′", "u′v − uv′", "u·v′"], bonne: 1, explication: "C'est la formule du produit : u′v + uv′." },
      { q: "Si f′(x) > 0 sur un intervalle, alors f est…", choix: ["décroissante", "constante", "croissante", "nulle"], bonne: 2, explication: "Une dérivée positive signifie que f monte : f est croissante." }
    ]
  }
];

const NIVEAUX = {
  primaire: "Primaire",
  college: "Collège",
  lycee: "Lycée"
};
