import landing from "../../assets/landing.svg";

export function HeroImage() {
  return (
    <img 
      src={landing} 
      alt="Proffy" 
      className="w-full h-full lg:w-[50%]" 
    />
  )
}
