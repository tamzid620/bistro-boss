import { useEffect } from "react"

const useHooks = title => {
    useEffect(()=> {
        document.title = ` ${title} `;
    }, [title])
};

export default useHooks;