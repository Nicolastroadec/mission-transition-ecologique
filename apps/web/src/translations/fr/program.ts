const programFrDict = {
  program: {
    programResume: 'Le dispositif en deux mots',
    programObjective: {
      title: {
        inProgram: 'Au programme :',
        applicationSteps: 'Les étapes de votre demande d’aide :'
      }
    },
    programProviders: 'Contact',
    CTAButton: 'Contactez un conseiller',
    programType: "Nature de l'aide",
    programEndValidity: "Date de fin de l'aide",
    programAvailable: 'Aide disponible',
    programNotAvailable: "Cette aide n'est plus disponible",
    programAvailableUntil: "Disponible jusqu'au {date}",
    programDuration: 'Prestation',
    programLoanDuration: 'Durée du prêt',
    programKnowMore: 'En savoir plus',
    projectExamples: 'Quelques exemples de projets financés par cette aide :',
    programAmIEligible: "Conditions d'éligibilité",
    form: {
      hint: '👋 Envoyez votre demande, un conseiller {operator} vous contactera prochainement',
      errorEmail: {
        subject: "[france-transition] Demande d'informations concernant le dispositif {program}"
      },
      needs: `Bonjour,

Mon entreprise a une activité de type "{secteur}".
J'ai pour projet de ...
J'ai besoin d'être accompagné(e) sur ...

Le dispositif "{titreAide}" pourrait m'intéresser.

Merci d'avance pour votre retour`
    }
  }
}

export default programFrDict
