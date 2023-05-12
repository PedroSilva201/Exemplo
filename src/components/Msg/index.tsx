import styled from "styled-components";

interface Props{
    children: string;
}

export function Msg({children}:Props){
    return(
        <Sld>{children}</Sld>
    );
}

const Sld = styled.p`
    color: blue`
;
