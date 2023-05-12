import styled from "styled-components";

interface Props{
    rotulo: string;
    value: string;
    set: Function;
}

export function Propriedade({rotulo,value,set}:Props){
    return(
        <WrapperSld>
            <LabelSld>{rotulo}</LabelSld>
            <InputSld type="text"value={value} onChange={e=>set(e.target.value)}/>
        </WrapperSld>
    );
}
const WrapperSld = styled.div`
    background-color: ${props => props.theme.fundo}
`;
const InputSld = styled.input`
    border: 1px solid #555;
    border-radius: 10px;
    color: ${props => props.theme.fonte}
`;

const LabelSld = styled.label`
    font-family: calibri;
    font-size: 12px
`;