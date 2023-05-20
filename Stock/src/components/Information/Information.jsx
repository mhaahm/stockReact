import React from 'react'

const Information = () => {
  return (
    <div>
        <h3>Licence</h3>
        <div className='row mt-2'>
            <div className='col-md-3'>
                <label className='form-label'>Numéro de licence</label>
            </div>
            <div className='col-md-5'>
                <input type='text' className='form-control'/>
            </div>
            <div className='col-md-4'>
                <button className='btn btn-success'>Acheter une licence</button>
            </div> 
        </div>
        <div className='row mt-2'>
            <div className='col-md-3'>
                <label className='form-label'>Licence accordé à</label>
               <textarea rows={10} cols={150} disabled defaultValue={ `
               CONTRAT DE LICENCE POUR LE LOGICIEL STOCK-PRATIQUE
AVIS A L'UTILISATEUR : Vous ne devez pas distribuer ou reproduire le logiciel dans son intégralité ou en partie sans l'accord de son auteur (sauf indications contraires prévue dans le présent contrat). Vous ne devez combiner le logiciel avec, ni l'incorporer dans tout autre application (sauf indications contraires prévue dans le présent contrat). Vous ne devez pas transférer, vendre ou louer le logiciel ou toute copie de celui-ci. Vous pouvez utiliser le logiciel sous le présent contrat de licence.
L'auteur vous accorde une licence non exclusive pour utiliser le logiciel, pourvu que vous acceptiez les termes et conditions suivants :
1. DEFINITIONS :
A. "Logiciel" : désigne toute partie de l'application Stock-Pratique
B. "Utilisateur" : désigne toute personne ou entreprise utilisant le logiciel
2. VERSION D'ESSAI : 
A. L'utilisateur est autorisé à utiliser gratuitement le logiciel en version d'essai (limitée à 20 entrées par onglet).
B. L'utilisateur est tenu de tester la version d'essai avant tout achat.

3. VERSION COMPLETE :

A. L'achat de la version complète permet à l'utilisateur d'utiliser le logiciel pendant une durée illimitée, sans les restrictions de la version d'essai.
B. Une licence est requise pour chaque copie du logiciel (copies de sauvegardes non comprises).
C. L'utilisateur ayant acheté la version complète est autorisé à modifier le logiciel pour son utilisation personnelle uniquement (si l'utilisateur est une entreprise, pour une utilisation interne à l'entreprise).
D. VERSION COMPLETE STANDARD : La version complète "standard" bénéficie de toutes les fonctionnalités de la version complète, seul l'accès au code VBA est interdit. L'utilisateur peut obtenir du support avec cette version en cas d'éventuel problème technique pour autant que ce problème n'ait pas pu apparaître dans la version d'essai (CF point 2B).
E. VERSION COMPLETE AVEC ACCES AU CODE VBA : L'utilisateur ayant acheté la version complète avec accès au code VBA reçoit le mot de passe VBA de la version complète du logiciel. Dans la mesure où le code source de cette version est accessible, aucun support ne sera fourni à l'utilisateur en cas de problème. Pour rappel, il est interdit de publier toute partie du code de cette application avec ou sans modification (il est donc important de créer des copies de sauvegarde régulièrement !).

4. RESTRICTIONS D'UTILISATION

A. L'utilisateur ne peut en aucun cas vendre ou louer le logiciel avec ou sans modifications.
B. L'utilisateur n'est pas autorisé à distribuer ou publier le code VBA du logiciel, le logiciel ou toute partie de celui-ci, avec ou sans modifications (y compris sur les forums).
C. L'utilisateur s'engage à toujours conserver une protection par mot de passe du code VBA du logiciel.

5. RESPONSABILITES :

A. Il est de la responsabilité de l'utilisateur de tester le logiciel avant tout achat grâce à la version d'essai. L'utilisateur est conscient qu'il ne peut en aucun cas demander le remboursement du logiciel.
B. Il est de la responsabilité de l'utilisateur d'effectuer régulièrement des copies de sauvegarde du logiciel et de les conserver en lieu sûr. Le logiciel n'est pas remplacé en cas de perte ou de problème.
C. L'auteur du logiciel ne peut en aucun être tenu pour responsable pour tout résultat ou problème lié directement ou indirectement à l'utilisation ou aux performances du logiciel.

Ce contrat devient effectif dès la première utilisation du logiciel.

Le non-respect du présent contrat peut entrainer des poursuites.

For juridique exclusif : Sion (Suisse)

Copyright Sébastien Mathier - Tous droits réservés `}>
               </textarea>
            </div> 
        </div>
    </div>
  )
}

export default Information