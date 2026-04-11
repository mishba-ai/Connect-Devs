import { PencilIcon, GithubIcon, LinkedinIcon, XIcon, GlobeIcon } from "lucide-react";

interface socialProps {
    editProfile: boolean
    github: string
    setGithub: (v: string) => void
    linkedin: string
    setLinkedin: (v: string) => void
    website: string
    setWebsite: (v: string) => void
    twitter: string
    setTwitter: (v: string) => void
}

export default function socialLinks({ editProfile = false, github, setGithub, linkedin, setLinkedin, website, setWebsite, twitter, setTwitter }: socialProps) {

    const socials = [
        { name: 'Github', logo: <GithubIcon />, value: github, setValue: setGithub },
        { name: 'Linkedin', logo: <LinkedinIcon />, value: linkedin, setValue: setLinkedin },
        { name: 'website', logo: <GlobeIcon />, value: website, setValue: setWebsite },
        { name: 'twitter', logo: <XIcon />, value: twitter, setValue: setTwitter }
    ]

    // show the links and  icon which are not empty if empty then do not show 
    const socialsDisplay = [
        { name: 'Github', logo: <GithubIcon size={20} className="stroke-neutral-600"/>, value: github },
        { name: 'Linkedin', logo: <LinkedinIcon size={20} className="stroke-neutral-600"/>, value: linkedin },
        { name: 'Website', logo: <GlobeIcon size={20} className="stroke-neutral-600"/>, value: website },
        { name: 'twitter', logo: <XIcon size={20}className="stroke-neutral-600"/>,value: twitter }
    ]

    return (
        <div>
            {editProfile && (
                <div>
                    {
                        socials.map((social, index) => (
                            <div key={index} className="gap-y-3 flex flex-col">
                                <fieldset className="border border-gray-600 rounded-lg px-3 pb-3">
                                    <legend className="text-xs text-gray-400 uppercase tracking-widest px-2">
                                        {social.name}
                                    </legend>
                                    <div className="flex items-center gap-2">
                                        {social.logo}
                                        <input
                                            type="url"
                                            value={social.value}
                                            placeholder={`${social.name} URL`}
                                            className="bg-transparent text-black  placeholder-gray-500 outline-none w-full text-sm"
                                            onChange={(e) => social.setValue(e.target.value)}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        ))
                    }</div>
            )}

            {!editProfile && (
                <div>
                    {socialsDisplay.filter(s => s.value).map((display, index) => (
                        <div key={index}>
                            <div key={index} className="gap-y-3 flex flex-col">
                                <div className=" border-gray-600 rounded-lg px-3 pb-3">
                                    <div className="flex items-center gap-2">
                                       {display.logo}
                                        <a href={display.value} target="_blank" className="underline-offset-1 font-extralight font-Roboto-mono hover:text-black text-neutral-600 underline text-lg">
                                            {/* only show username */}                                           
                                            {display.value.split('/').filter(Boolean).pop()}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
