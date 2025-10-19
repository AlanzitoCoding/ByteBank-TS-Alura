// Louvado seja o Senhor
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
}
function formatarData(data, formato = FormatData.standard) {
    if (formato == FormatData.longDate) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    else if (formato == FormatData.shortDate) {
        return data.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit"
        });
    }
    return data.toLocaleDateString("pt-br");
}
