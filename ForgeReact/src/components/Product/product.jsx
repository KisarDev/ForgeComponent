export default function ProductComponent({ props }) {
  return (
    <div className="flex flex-col w-full justify-between items-center">
      <div className="flex flex-col md:w-[1200px] justify-center items-center border">
        <div className="flex flex-wrap pt-4 md:w-[875px] justify-center md:gap-4 gap-2">
          {props.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center rounded-2xl shadow-xl overflow-hidden border md:w-[280px] w-[45%]"
              id="card"
            >
              <img
                className=" max-w-[280px] min-w-[280px] max-md:max-w-[40px] "
                src={product.img}
              />
              <div className="shadow min-w-full rounded border text-start gap-2 pt-3 flex flex-col">
                <div className="text-[#113B85]  font-bold text-center flex flex-col justify-center items-center ">
                  <h1>
                    R$<span className="text-2xl">{product.price}</span>,90
                    <div className="flex flex-col pt-1">
                      <img
                        className="w-[100px] h-[16px]"
                        src="https://media.discordapp.net/attachments/1075408036073582673/1217284018416910486/image.png?ex=66037716&is=65f10216&hm=8559b31bd010ad72e3c969e79c80828c152e5e93a5ac7c0754be791ad489798b&=&format=webp&quality=lossless"
                        alt=""
                      />
                    </div>
                  </h1>
                </div>
                <p className="text-ellipsis overflow-hidden line-clamp-3 h-[100%] text-center px-2 pb-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
