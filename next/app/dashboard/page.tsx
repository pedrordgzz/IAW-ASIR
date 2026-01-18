// Pagina del dashboard - Pedro Rodriguez

export default async function Page({ params }: { params: Promise<{ param: string }> }) {
    const { param } = await params
    return (
        <div>Pedro Rodríguez Jiménez</div>
    )
}