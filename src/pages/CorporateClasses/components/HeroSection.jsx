import { corporate } from "../../../assets/img";

export const HeroSection = () => {
    return (
        <div className="relative h-[calc(100vh-96px)] lg:h-[calc(100vh-144px)] w-full">
            <img 
                src={corporate}
                alt="Background Image" 
                className="absolute inset-0 w-full h-full object-cover filter blur-sm" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0">
                <h1 className="text-3xl md:text-7xl text-white font-bold">Plan Corporativo</h1>
        
            </div>
        </div>
    );
};
