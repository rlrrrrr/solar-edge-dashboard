#### Membres équipe 1A
> CECCARELLI Luca
> CLEMENT Romain
> DESSAUD Hugo
> LARBAOUI Riyad
> RUBINI Thomas

# Magasin Connecté
## Objectifs
Le projet que nous souhaitons réaliser concerne le développement d'une application mobile et d'un site web dédiés à l'IUT, centrés sur le Magasin Connecté

#  Others
Login workflow:
```mermaid
sequenceDiagram
    Front->>+BackDuFront: Authenticate me with user=test password=test
    BackDuFront->>+Back: Authenticate with user=test password=test
    Back->>+BackDuFront: Authenticated ok, status 200
    BackDuFront->>+Front: Authenticated ok, status 200, userId=test
```
