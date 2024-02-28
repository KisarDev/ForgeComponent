export default function SimpleTable({ dados }) {
    return (
        <table className="w-[400px]">
            <thead>
                <tr className="flex  bg-[#F1F1F1] rounded justify-between text-center ">
                    <th className="w-[33%]">MARCA</th>
                    <th className="w-[33%]">ANO</th>
                    <th className="w-[33%]">MODELO</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((dado, index) => (
                    <tr key={index} className="flex gap-2 justify-between text-center">
                        <td className="w-[33%]">{dado.brand}</td>
                        <td className="w-[33%]">{dado.year}</td>
                        <td className="w-[33%]">{dado.model}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}