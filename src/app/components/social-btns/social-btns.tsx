import { GithubIcon } from "../icons/github.icon";
import { InstaIcon } from "../icons/insta.icon";
import { LindedinIcon } from "../icons/linkedin.icon";
import { TwitterIcon } from "../icons/twitter.icon";

import "./social-btns.scss"



export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/_mossini_/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/kauan-mossini/">
                <LindedinIcon/>
            </a>
            <a href="https://github.com/Mossinii">
                <GithubIcon/>
            </a>
            <a href="https://twitter.com/K_Mossini">
                <TwitterIcon/>
            </a>
        </div>
    )
}