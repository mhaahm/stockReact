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

class  CategoryController extends AbstractController
{


    private EntityManagerInterface $entityManager;


    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/api/category/save', name: 'app_category', methods: ['POST'])]
    public function save(Request $request): Response
    {
        // save to database
        $data = $request->toArray();
        $categ_name = $data['categ_name_to_add'];

        try {
            $categ =  $this->entityManager->getRepository(Category::class)->findOneByName($categ_name);
            if(!$categ) {
                $categ = new Category();
            }
            $categ->setName($categ_name);
            $this->entityManager->persist($categ);
            $this->entityManager->flush();
            return $this->json(['msg' => 'Sauvegarde terminé avec success', 'res' => 'success','id' => $categ->getId()]);
        } catch (\Exception $e) {
            return $this->json(['msg' => 'Sauvegarde terminé erreur '.$e->getMessage(), 'res' => 'error','id' => 0]);
        }
    }
}
