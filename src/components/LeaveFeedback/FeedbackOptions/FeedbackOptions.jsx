import { nanoid } from 'nanoid'

export default function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
        <ul>
            {options.map(elem =>
                <li key={nanoid()}>
                    <button type="button" onClick={() => onLeaveFeedback(elem)}>
                        {elem}
                    </button>
                </li>)}
        </ul>
    )

}

