import { useFontSize } from "../Context/FontSizeContext";


export default function FontControl() {
    const {fontSize, setFontSize} = useFontSize()
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}