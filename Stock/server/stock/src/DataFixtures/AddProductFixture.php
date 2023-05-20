<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Emplacement;
use App\Entity\Product;
use App\Entity\Unity;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AddProductFixture extends Fixture
{
    private $products;

    public function __construct()
    {
        $this->products = [
            [
                'category' => [
                    'name' => 'Category 1'
                ],
                'emplacement' => [
                    'place_name' => 'Emplacement 1'
                ],
                'unity' => [
                    'name' => 'PC',
                    'label' => 'PC'
                ],
                'product_reference' => 'X012345',
                'product_designation' => 'Ordinateur portable DELL',
                'stock_minimal' => 10,
                'stock_initial' => 20
            ]
        ];
    }

    public function load(ObjectManager $manager): void
    {

        foreach($this->products as $p_detail)
        {
            $categ = $manager->getRepository(Category::class)->findOneByName($p_detail['category']['name']);
            if(!$categ) {
                $categ = new Category();
                $categ->setName($p_detail['category']['name']);
                $manager->persist($categ);
            }
            $unit = $manager->getRepository(Unity::class)->findOneByName($p_detail['unity']['name']);
            if(!$unit) {
                $unit = new Unity();
                $unit->setName($p_detail['unity']['name']);
                $unit->setLabel($p_detail['unity']['name']);
                $manager->persist($unit);
            }
            $empl = $manager->getRepository(Emplacement::class)->findOneByPlaceName($p_detail['emplacement']['place_name']);
            if(!$empl) {
                $empl = new Emplacement();
                $empl->setPlaceName($p_detail['emplacement']['place_name']);
                $manager->persist($empl);
            }

            $product = $manager->getRepository(Product::class)->findOneByProductReference($p_detail['product_reference']);
            if(!$product) {
                $product = new Product();
                $product->setProductReference($p_detail['product_reference']);
                $product->setProductDesignation($p_detail['product_designation']);
                $product->setUnity($unit);
                $product->setEmplacement($empl);
                $product->setCategory($categ);
                $product->setStockInitial($p_detail['stock_initial']);
                $product->setStockMinimal($p_detail['stock_minimal']);
                $manager->persist($product);
            }

        }
        $manager->flush();
    }
}
