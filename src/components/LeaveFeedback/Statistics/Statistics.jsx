export default function Statistics({good, neutral, bad, totalFeedback, positiveFeedbackCount }) {
    return (
        <ul>
            <li>
                <span>Good : {good}</span>
            </li>
            <li>
                <span>Neutral : {neutral}</span>
            </li>
            <li>
                <span>Bad : {bad}</span>
            </li>
            <li>
                <span>Total : {totalFeedback}</span>
            </li>
            <li>
                <span>Positive feedback : {positiveFeedbackCount}%</span>
            </li>
        </ul>
    )
}