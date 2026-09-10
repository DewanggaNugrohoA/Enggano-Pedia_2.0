export default function ApplicationLogo({ className = 'h-10 w-auto', ...props }) {
    return (
        <img
            src="/images/brand-logo.png"
            alt="EngganoPedia Logo"
            className={`object-contain ${className}`}
            {...props}
        />
    );
}
