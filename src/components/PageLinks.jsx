import {links} from "../data";
import PageLink from "./PageLink";

function PageLinks({parentClass, itemClass}) {
    return (
        <ul className={parentClass} id="nav-links">
            {links.map((link) => (
                <PageLink key={link.id} link={link} itemClass={itemClass} />
            ))}
        </ul>
    )
}

export default PageLinks