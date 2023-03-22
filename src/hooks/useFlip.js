import { useState } from "react";

const useFlip = () => {
    const [value, setValue] = useState(true);
    const toggle = () => {
        setValue(oldValue => !oldValue);
    };

    return [value,toggle]


}

export default useFlip