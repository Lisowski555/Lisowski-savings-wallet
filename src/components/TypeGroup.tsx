interface Props {
    typeName: string,
}

export default function TypeGroup({typeName}: Props) {
    const items: string[] = ["uno", "dos"]

    return (
        <div>
            <h2>{typeName}</h2>
            <button onClick={() => console.log("adding not implemented yet")}>+</button>
            <ul style={{color: 'black'}}>
                {items.map(item => (<li key={item}>{item}</li>))}
            </ul>
        </div>
    );
}


// Saving accounts moga byc componenty
// [Card] [Card] [Card] [+] -> [title, rate, amount]

// Saving deposits
// [Card] -> [title, rates, end date, amount]