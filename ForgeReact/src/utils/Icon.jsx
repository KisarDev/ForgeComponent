export function Icon({ svgString, className }) {
    return <div className={`${className} w-[16px]`} dangerouslySetInnerHTML={{ __html: svgString }} />;
}
