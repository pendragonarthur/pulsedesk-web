export function formatDate(dateString: string): string {
    if (dateString === "0001-01-01T00:00:00") {
        return "-"
    }

    const date = new Date(dateString)

    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
}