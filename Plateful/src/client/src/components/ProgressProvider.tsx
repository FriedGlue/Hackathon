import React, { useState, useEffect } from "react";

interface ProgressProviderProps {
    valueStart: number;
    valueEnd: number;
    children: (value: number) => React.ReactNode;
}

const ProgressProvider: React.FC<ProgressProviderProps> = ({
    valueStart,
    valueEnd,
    children,
}) => {
    const [value, setValue] = useState<number>(valueStart);

    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

    return children(value);
};

export default ProgressProvider;
