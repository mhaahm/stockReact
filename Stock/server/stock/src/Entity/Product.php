<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource(
    collectionOperations: ['get' => ['normalization_context' => ['groups' => 'product:list']]],
        itemOperations: ['get' => ['normalization_context' => ['groups' => 'product:item']]],
        order: ['created_at' => 'DESC'],
        paginationEnabled: false
    )]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['product:list', 'product:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['product:list', 'product:item'])]
    private ?string $productReference = null;

    #[ORM\Column(length: 255)]
    #[Groups(['product:list', 'product:item'])]
    private ?string $productDesignation = null;


    #[ORM\Column]
    #[Groups(['product:list', 'product:item'])]
    private ?float $stock_minimal = null;

    #[ORM\Column]
    #[Groups(['product:list', 'product:item'])]
    private ?float $stock_initial = null;

    #[ORM\Column]
    #[Groups(['product:list', 'product:item'])]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['product:list', 'product:item'])]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\ManyToOne]
    #[Groups(['product:list', 'product:item'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $category = null;

    #[ORM\ManyToOne]
    #[Groups(['product:list', 'product:item'])]
    private ?Emplacement $emplacement = null;

    #[ORM\ManyToOne]
    #[Groups(['product:list', 'product:item'])]
    private ?Unity $unity = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['product:list', 'product:item'])]
    private ?string $productNote = null;

    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductReference(): ?string
    {
        return $this->productReference;
    }

    public function setProductReference(string $product_reference): self
    {
        $this->productReference = $product_reference;

        return $this;
    }

    public function getProductDesignation(): ?string
    {
        return $this->productDesignation;
    }

    public function setProductDesignation(string $product_designation): self
    {
        $this->productDesignation = $product_designation;

        return $this;
    }

    public function getStockMinimal(): ?float
    {
        return $this->stock_minimal;
    }

    public function setStockMinimal(float $stock_minimal): self
    {
        $this->stock_minimal = $stock_minimal;

        return $this;
    }

    public function getStockInitial(): ?float
    {
        return $this->stock_initial;
    }

    public function setStockInitial(float $stock_initial): self
    {
        $this->stock_initial = $stock_initial;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getEmplacement(): ?Emplacement
    {
        return $this->emplacement;
    }

    public function setEmplacement(?Emplacement $emplacement): self
    {
        $this->emplacement = $emplacement;

        return $this;
    }

    public function getUnity(): ?Unity
    {
        return $this->unity;
    }

    public function setUnity(?Unity $unity): self
    {
        $this->unity = $unity;

        return $this;
    }

    public function getProductNote(): ?string
    {
        return $this->productNote;
    }

    public function setProductNote(?string $productNote): self
    {
        $this->productNote = $productNote;

        return $this;
    }
}
