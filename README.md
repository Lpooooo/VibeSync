

VibeSync est une application conçue pour organiser vos projets, événements et tâches de manière efficace. Elle offre la possibilité de marquer chaque action comme terminée, vous permettant ainsi de suivre l'avancement de vos activités. De plus, l'application permet de partager des photos en utilisant des URL, facilitant ainsi la collaboration et le partage de contenu.

Maintenance :

Actuellement, la relation entre la base de données et le backend présente plusieurs anomalies, notamment des problèmes de connexion et de création d'utilisateurs. Bien que ces dysfonctionnements n'empêchent pas l'accès aux fonctionnalités de l'application via les URL, ils nécessitent une analyse approfondie pour être résolus.

Lancement :

Pour démarrer l'application, suivez les étapes suivantes :

Connexion à la base de données :

Ouvrez votre terminal et exécutez la commande suivante pour vous connecter à la base de données :
bash
Copier
node backend/server.js
Assurez-vous que le fichier server.js est correctement configuré pour établir la connexion à votre base de données.
Lancement du projet :

Dans le répertoire principal de votre projet, exécutez la commande suivante pour démarrer l'application :
bash
Copier
npm start
Cette commande démarre le serveur et rend l'application accessible via le navigateur.
Remarque :

Avant de lancer l'application, assurez-vous que toutes les dépendances sont installées en exécutant npm install dans le répertoire principal du projet.