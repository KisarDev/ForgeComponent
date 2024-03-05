export default function Icon({ svgString, className }) {
    return <div className={`${className}`} dangerouslySetInnerHTML={{ __html: svgString }} />;
}
