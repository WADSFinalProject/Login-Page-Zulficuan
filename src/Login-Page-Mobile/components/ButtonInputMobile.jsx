import { Button} from "@mui/material"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function ButtonInputMobile({label}) {
    const style = {
        color: '#04315B',
        textTransform: 'none',
        backgroundColor: '#BDD8B0',
        borderRadius: '27px',
        '&:hover': {
            backgroundColor: '#BDD8B0',
        },
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/XYZManager')
    }

    return (
        <Button variant="contained" sx={style} onClick={handleClick}>{label}</Button>
    )
}
export default ButtonInputMobile