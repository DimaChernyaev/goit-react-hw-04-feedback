import { Title } from "./SectionTitle.style"

const SectionTitle = ({ title, children }) => {
    return ( 
    <>
        <Title>{title}</Title>
        {children}
    </>)
}

export default SectionTitle