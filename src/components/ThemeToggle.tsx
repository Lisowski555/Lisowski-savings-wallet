import './ThemeToggle.css'

interface Props {
    isDark: boolean,
    onToggle: () => void,
}

export default function ThemeToggle({isDark, onToggle}: Props) {
    return (
        <label className="toggle">
            <input type="checkbox" checked={isDark} onChange={onToggle} />
            <span className="slider"></span>
        </label>
    );
}