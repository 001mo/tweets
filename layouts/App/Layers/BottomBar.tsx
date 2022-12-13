export default function BottomBar({ children }) {
    return (
        <div className="fixed bottom-0 left-0 right-0">
            {children}
        </div>
    )
}