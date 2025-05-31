import './ThemeToggle.css'

interface Props {
    isDark: boolean,
    onToggle: () => void,
}

export default function ThemeToggle({isDark, onToggle}: Props) {

    // TODO it can be styled as real toggle
    return (
        <label className="floating-toggle toggle">
            <input type="checkbox" checked={isDark} onChange={onToggle} />
            <span className="slider"></span>
        </label>
        // <div className="floating-toggle">
        //     <button onClick={onToggle}>{isDark ? 'light' : 'dark'}</button>
        // </div>
    );
}