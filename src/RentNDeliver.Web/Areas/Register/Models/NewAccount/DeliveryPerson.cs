using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentNDeliver.Web.Areas.Register.Models.NewAccount;
public class DeliveryPerson
{
    public DeliveryPerson()
    {
        
    }
    
    public DeliveryPerson(string name, string cnpj, DateTime birthDate, string cnhNumber, string cnhType, IFormFile cnhImage)
    {
        Name = name;
        Cnpj = cnpj;
        BirthDate = birthDate;
        CnhNumber = cnhNumber;
        CnhType = cnhType;
        CnhImage = cnhImage;
    }

    [Required] public string Name { get; init; } = string.Empty;

    [Required] [StringLength(14)] public string Cnpj { get; init; } = string.Empty;
    
    [Required]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; init; }

    [Required] public string CnhNumber { get; init; } = string.Empty;

    [Required]
    [StringLength(2, MinimumLength = 1, ErrorMessage = "A, B or AB")]
    public string CnhType { get; init; } = string.Empty;

    [NotMapped] 
    public IFormFile CnhImage { get; set; } = null!;
}