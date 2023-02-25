export default function Badge({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return <span className={`rounded-full px-2 text-center ${className}`}>
        {children}
    </span>
}