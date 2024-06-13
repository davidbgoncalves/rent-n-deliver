using RentNDeliver.Web._keenthemes.libs;

namespace RentNDeliver.Web._keenthemes;

public interface IKTBootstrapBase
{
    void InitThemeMode();
    
    void InitThemeDirection();

    void InitLayout();
    
    void Init(IKTTheme theme);
}