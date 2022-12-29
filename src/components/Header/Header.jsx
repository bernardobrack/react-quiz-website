import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    
    return <header>
        <Button onClick={() => navigate("/")} className="dark-purple-btn round">{"<"}</Button>
    </header>
}