import BannerSkeleton from "./banner";
import BigCardComponent from "./bigCard";
import CardSkeleton from "./cards";
import FooterSkleton from "./footer";
import LinesComponent from "./lines";
import SquadComponent from "./square";

export default function SkeletonComponent() {
    return (
        <div className="flex flex-col w-full gap-10 p-2 overflow-hidden">
            <BannerSkeleton />
            <div className="overflow-auto md:overflow-hidden flex gap-5 p-2 w-full  md:gap-40 md:justify-center">

                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                
               
            </div>

            <BannerSkeleton />


            <div className="overflow-auto md:overflow-hidden flex gap-5 p-2 w-full md:gap-44 md:justify-center">

                <BigCardComponent />
                <BigCardComponent />
                <BigCardComponent />
                

            </div>

            <div className="flex gap-5 justify-center">
                <SquadComponent />
                <LinesComponent />
                <LinesComponent />

            </div>


            <FooterSkleton />

        </div>
    )
}