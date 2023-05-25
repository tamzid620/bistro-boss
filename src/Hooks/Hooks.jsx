import { useEffect } from "react"

const Hooks = title => {
    useEffect(()=> {
        document.title = ` ${title} - Handy Toy `;
    }, [title])
};

export default Hooks;