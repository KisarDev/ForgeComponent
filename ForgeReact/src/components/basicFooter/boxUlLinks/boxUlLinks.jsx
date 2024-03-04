import Icon from "../icon/icon"

export default function BoxUlLinks({
  dados,
  title,
  have_icon = false,
  className = "",
}) {
  function RenderIcon({ dado }) {
    if (!have_icon) return;
    return <Icon svgString={dado.icon} />;
  }

  return (
    <div className={"flex flex-col gap-4 max-md:items-center " + className}>
      <h1 className="uppercase">{title}</h1>

      <ul className="flex flex-col gap-1 max-md:items-center text-sm">
        {dados.map((dado, index) => (
          <li key={index}>
            <a href={dado.link} target="_blank">
              <div className="flex gap-2">
                <RenderIcon dado={dado} />
                <div>{dado.title}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
