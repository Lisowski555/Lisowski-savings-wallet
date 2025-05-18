interface Props {
    typeTitle: string,
    typeRate: number,
    typeAmount: number,
}

export default function SavingsAccounts({typeTitle}, {typeRate}, {typeAmount}: Props) {
    const [accounts, setAccounts] = useState<Props>([]);

    return (
        <div>
            <h3>{typeTitle}</h3>

        </div>
    )
}