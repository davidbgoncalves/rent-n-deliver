using System.ComponentModel.DataAnnotations;

namespace RentNDeliver.Web.Areas.Register.Models.Home;

public class Identity
{
    [Required] [StringLength(14)] public string Cnpj { get; set; } = string.Empty;
}