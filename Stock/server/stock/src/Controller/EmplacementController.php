<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Category;
use App\Entity\Emplacement;
use App\Entity\Product;
use App\Entity\Unity;
use Exception;

class  EmplacementController extends AbstractController
{


    private EntityManagerInterface $entityManager;


    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/api/emplacement/save', name: 'app_emplacement', methods: ['POST'])]
    public function save(Request $request): Response
    {
        // save to database
        $data = $request->toArray();
        $categ_name = $data['emplacement_name'];

        try {
            $categ =  $this->entityManager->getRepository(Emplacement::class)->findOneByPlaceName($categ_name);
            if(!$categ) {
                $empl = new Emplacement();
            }
            $empl->setPlaceName($categ_name);
            $this->entityManager->persist($empl);
            $this->entityManager->flush();
            return $this->json(['msg' => 'Sauvegarde terminé avec success', 'res' => 'success','id' => $empl->getId()]);
        } catch (\Exception $e) {
            return $this->json(['msg' => 'Sauvegarde terminé erreur '.$e->getMessage(), 'res' => 'error','id' => 0]);
        }
    }
}
