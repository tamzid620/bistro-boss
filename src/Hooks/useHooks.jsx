import { useEffect } from "react"

const useHooks = title => {
    useEffect(()=> {
        document.title = ` ${title} - Handy Toy `;
    }, [title])
};

export default useHooks;