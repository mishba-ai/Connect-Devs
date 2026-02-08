import { useEffect, useState } from "react"
import { ImagePlus, X } from "lucide-react"
interface file {
    label?: string
}

export default function UploadFile({ label }: file) {
    const [selectedFile, setSelectedFile] = useState<File | undefined>()
    const [preview, setpreview] = useState<string | undefined>()

    useEffect(() => {
        if (!selectedFile) {
            setpreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setpreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onselectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className="">
            <label className="block text-xl font- mb-4 uppercase ">
                {label}
            </label>
            <div className='w-44 border-2 flex justify-center items-center h-40 border-black border-dashed'>
                {
                    !selectedFile && (
                        <button className="relative cursor-pointer">
                            <input type="file" className="opacity-0 inset-0 absolute" onChange={onselectFile} />
                            <ImagePlus size={40} className="text-purple" />
                        </button>
                    )
                }

                {/* preview */}
                <div className="p-2">
                    {selectedFile && (
                        <div className="relative">
                            <button className="w-5 h-5 rounded-full flex justify-center items-center absolute right-0 bg-neutral-50 opacity-40" onClick={() => { setSelectedFile(undefined) }}><X /></button>
                            <img src={preview} alt="" />
                        </div>)}
                </div>
            </div>
        </div>
    )
}