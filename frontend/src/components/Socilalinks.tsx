import { PencilIcon, PlusSquareIcon, GithubIcon, LinkedinIcon, XIcon, GlobeIcon } from "lucide-react";
import { useState } from "react";
import type { userProfile } from "../types/index.ts";
import { useAuth } from "../hooks/useAuth.ts";

export default function () {

    const { user } = useAuth();
    const [linksExist, setLinkExist] = useState()
    const [github, setgithub] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [website, setwebsite] = useState('')
    const [twitter, setTwitter] = useState('')

    const socials = [
        { name: 'Github', logo: <GithubIcon />, value: github, setValue: setgithub },
        { name: 'Linkedin', logo: <LinkedinIcon />, value: linkedin, setValue: setLinkedin },
        { name: 'website', logo: <GlobeIcon />, value: website, setValue: setwebsite },
        { name: 'twitter', logo: <XIcon />, value: twitter, setValue: setTwitter }
    ]

    // show the links icon which are not empty if empty then do not show 
    const socialsDisplay = [
        { name: 'Github', logo: <GithubIcon /> },
        { name: 'Linkedin', logo: <LinkedinIcon /> },
        { name: 'Portfolio', logo: <GlobeIcon /> },
        { name: 'twitter', logo: <XIcon />, value: twitter }
    ]

    return (
        <div>
            {socials.map((social, index) => (
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
            }
            {
                socialsDisplay.map((display,index)=> (
                    <div key={index}>
                          
                    </div>
                ))
            }
        </div>
    )
}
