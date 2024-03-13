export default function ProductComponent({ props }) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col md:w-[1200px] justify-center items-center border">
        <div className="flex flex-wrap pt-4 md:w-[875px] justify-center gap-4">
          {props.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-lg shadow overflow-hidden border w-[280px]"
            >
              <img
                className=" max-w-[280px] min-w-[280px] max-md:max-w-[40px]"
                src={product.img}
              />
              <div className="shadow min-w-full rounded border text-start">
                <div className="text-[#113B85] font-bold text-center flex flex-col">
                  <h1>
                    R$<span className="text-2xl">{product.price}</span>,90
                    <img
                      src="https://media.discordapp.net/attachments/1075408036073582673/1217284018416910486/image.png?ex=66037716&is=65f10216&hm=8559b31bd010ad72e3c969e79c80828c152e5e93a5ac7c0754be791ad489798b&=&format=webp&quality=lossless"
                      alt=""
                    />
                  </h1>
                </div>
                <div className="text-[8pt] h-[100px]">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
