import { Content } from "@/app/components/elements/Content"
import Image from "next/image"
import { facilitySectionData } from "../../../../../../json/facility"

export const FacilitySection = () => {
  return (
    <div className="w-[85%] m-auto grid grid-cols-4 gap-6">
        {
            facilitySectionData?.map((facility,index)=>{
                return(
                    <div key={index} className="flex flex-col justify-center items-center gap-2">
                        <Image src={facility?.image} width={1000} height={1000} alt="facility-images" className="w-14 mb-2" />
                        <Content text={facility?.title} className={'font-semibold text-[18px]'} />
                        <Content text={facility?.desc} className={'text-center text-[15px]'} />
                    </div>
                )
            })
        }
    </div>
  )
}
