import { useFontSize } from "../Context/FontSizeContext";
import Article from "./Article";
import Sidebar from "./Sidebar";

export default function Content() {
    const { fontSize } = useFontSize();
    const size = fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px';

    return (
    <main style={{ fontSize: size }}>
        <Article/>
        <Sidebar/>
    </main>
    );
}