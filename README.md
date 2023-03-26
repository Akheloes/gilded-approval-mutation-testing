# Prérequis

Se mettre sur une version 16+ de Node.js. l'Usage de NVM est recommandé pour jonglé entre versions.

Par la suite, installer en mode global la librairie `approvals` pour pouvoir jouer les tests de caractérisation :

<center>

```npm i -g approvals```

</center>


Du reste, l'ensemble des dépendances est présent sur le package.json du fichier, donc un simple :

<center>

```npm i --force```

</center>

Est le tour est joué.

# Exécuter les tests

## Tests de caractérisation
Une fois vos tests de caractérisation écrits dans le fichier `./src/approval-test.spec.ts`, vous pouvez exécuter la commande suivante:

<center>

```npm run test```

</center>

Cette commande lancera le runner Jest qui vous fera une première exécution des 'approvals tests', vous devez voir deux fichiers s'ajouter sur votre dossier `src`:

- `approval-test.approved.txt`: vide pour le moment;
- `approval-test.received.txt`: contenant des lignes dans la structure suivante: `['Sulfuras, Hand of Ragnaros'], -15, 20`;

Vous avez juste exécuter vos tests de caractérisation, mais ils sont en état "rouge" ou "failed".

En réalité, les tests de caractérisation se valident lorsque les fichier `approved.txt` et `received.txt` partagent le même contenu.

Ceci veut dire qu'on peut "passer" les tests dès lors que les contenus des deux fichiers matchent. Naturellement, c'est un standard de qualité assez bas, la vraie et bonne manière de valider sera de faire en en sorte que ce test ait une couverture absolue (sur les statements et les branches).

Pour vérifier la couverture, vous pouvez ouvrir le fichier index.html dans le chemin suivant: `./coverage/lcov-report/index.html`

Si vous estimer que votre Golden Master passe, vous pouvez valider vos tests de caractérisation:

- ```npm run approve:test```
- Voire tout simplement copier le contenu du `received.txt` dans le `approved.txt`

Ensuite, rejouer le test runner avec:

<center>

```npm run test```

</center>
Cette fois, votre test approval est vert, et, remarquez, votre fichier `received.txt` a été eradiqué.

Par contre le fichier `approved.txt` reste, c'est votre benchmark.

Si vous estimez que ce benchmark est améliorable, vous pouvez refaire vos tests, mais il faudra effacer le benchmark et en générer un nouveau.

Vous pouvez le faire avec:

<center>

```npm run approval:refresh```

</center>

Voilà, ce petit cycle se répétera autant qu'il faut pour cerner le comportement de votre code.

## Test de mutation

Vous avez votre Golden Master ? Excellent mais perfectible.

On peut améliorer nos tests en jouant des mutations et voir si nos tests sont capables de les attraper.

Vous avez déjà installer la librairie `Stryker` avec le ```npm i --force```, donc rien à faire en plus.

Commencez par un:
```npm run stryker:run```

Vous aurez besoin d'un peu de temps (1min-3min), `Sryker` est en train de générer des mutations de votre code et de les confronter à votre Golden Master.

Vous verrez déjà se créer un dossier `.stryker-tmp`, ce dossier contiendra une sandbox suivit d'un numéro.

En effet, pour chaque execution de ```npm run stryker:run```, vous allez avoir une nouvelle sandbox. (vérifier)

Et surtout, vous avez sur la racine de votre projet un dossier ```reports``` avec à l'intérieur un fichier `./reports/mutation/html/index.html`.

Si vous l'ouvrez, vous pouvez avoir un compte-rendu des mutations qui survivent vos tests.

## Extensions heureuses

Si vous êtes utilisateurs de Visual Studio Code, voici quelques extensions qui facilitent la vie:

- `Jest Test Explorer` : pour expédier l'exécution de vos tests sans passer par des commandes;
- `Code Coverage` : pour surveiller votre coverture de code;
- `JS Refactor :: JS Code Former` : pour des faciliter le refactoring;
