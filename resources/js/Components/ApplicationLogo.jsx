export default function ApplicationLogo({ className = 'h-10 w-auto', ...props }) {
    return (
        <img
            src="/images/logo.png"
            alt="Enggano Pedia Logo"
            className={`object-contain ${className}`}
            {...props}
        />
    );
}
