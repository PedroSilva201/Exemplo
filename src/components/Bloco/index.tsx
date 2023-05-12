import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLElement>{
    
}
export function Bloco({children}:Props){
    return(
        <Sld>{children}</Sld>
    );
}

const Sld = styled.p`
    color: blue`
;