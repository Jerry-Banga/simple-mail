import { useSelector } from "react-redux";
import { MessagePageBigBox } from "../components/message_page_components";
import { useParams } from "react-router-dom";

export default function MessagePage() {
    const { id } = useParams();
    const index = parseInt(id, 10);
    const { subject, content } = useSelector(state => state.mails.value[index]);

    return (
        <MessagePageBigBox>
            <p>{subject}</p>
            <div>{content}</div>
        </MessagePageBigBox>
    );
}