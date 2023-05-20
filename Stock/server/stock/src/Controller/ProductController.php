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

class  ProductController extends AbstractController
{


    private EntityManagerInterface $entityManager;


    /**
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/api/product/save', name: 'app_product', methods: ['POST'])]
    public function save(Request $request): Response
    {
        // save to database
        $data = $request->toArray();
        $categ_id = $data['category'];
        $empl_id = $data['emplacement'];
        $unit_id = $data['unity'];
        $ref = $data['reference'];
        $designation = $data['designation'];
        $stockMinimal = $data['stockMinimal'];
        $stockInitial = $data['stockInitial'];
        $date = new \DateTimeImmutable($data['dateAjout']);
        try {
            $categ =  $this->entityManager->getRepository(Category::class)->find($categ_id);
            $empl = $this->entityManager->getRepository(Emplacement::class)->find($empl_id);
            $unit = $this->entityManager->getRepository(Unity::class)->find($unit_id);

            $product =  $this->entityManager->getRepository(Product::class)->findOneByProductReference($ref);
            if (!$product) {
                $product = new Product();
                $product->setProductReference($ref);
            }
            $product->setCategory($categ);
            $product->setEmplacement($empl);
            $product->setUnity($unit);
            $product->setUpdatedAt($date);
            $product->setProductDesignation($designation);
            $product->setStockMinimal($stockMinimal);
            $product->setStockInitial($stockInitial);
            $this->entityManager->persist($product);
            $this->entityManager->flush();
            return $this->json(['msg' => 'Sauvegarde terminé avec success', 'res' => 'success']);
        } catch (\Exception $e) {
            return $this->json(['msg' => 'Sauvegarde terminé erreur '.$e->getMessage(), 'res' => 'error']);
        }
    }

    #[Route('/api/product/saveNote', name: 'app_product_note', methods: ['POST'])]
    public function saveNote(Request $request): Response
    {
        // save to database
        $data = $request->toArray();
        $id = $data['id'];
        $note = $data['noteP'];
        try {
            /** @var Product $product */
            $product =  $this->entityManager->getRepository(Product::class)->find($id);
            if (!$product) {
                return $this->json(['msg' => 'Sauvegarde terminé erreur [Product not in database] ', 'res' => 'error']);
            }
            $product->setProductNote($note);
            $this->entityManager->persist($product);
            $this->entityManager->flush();
            return $this->json(['msg' => 'Sauvegarde terminé avec success', 'res' => 'success']);
        } catch (\Exception $e) {
            return $this->json(['msg' => 'Sauvegarde terminé erreur '.$e->getMessage(), 'res' => 'error']);
        }
    }
}
