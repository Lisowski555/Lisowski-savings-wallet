interface Props {
    title: string,
    amount: number,
}

export default function Card({title, amount}: Props) {
    // TODO - move style outside tsx file
    return (
        <div className="card">
            <h3>{title}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${amount}</p>
        </div>
    );
}
