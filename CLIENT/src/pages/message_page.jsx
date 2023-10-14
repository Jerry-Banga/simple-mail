import { useDispatch, useSelector } from "react-redux";
import { MessagePageBigBox } from "../components/message_page_components";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { authenticateUser } from "../redux/userSlice";
import { fetchMails } from "../redux/mailsSlice";
import { Spinner } from "../components/spinner";
import { ErrorComponent } from "../components/error_component";

export default function MessagePage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const subjectRef = useRef(null);
    const contentRef = useRef(null);
    const mails = useSelector(state => state.mails.mailItems);
    const { status, error } = useSelector(state => state.user);

    if (mails.length > 0) {
        const index = parseInt(id);
        subjectRef.current = mails[index]['subject'];
        contentRef.current = mails[index]['content'];
    }

    useEffect(() => {

        if (status === 'idle') {
            dispatch(authenticateUser())
        } else if (status === 'authenticated') {
            if (mails.length === 0) {
                dispatch(fetchMails())
            }
        }
    }, [dispatch, mails, status, id])

    if (status === 'failed') {
        return (
            <ErrorComponent>
                {error}
            </ErrorComponent>
        );
    }

    if (status === 'loading' || status === 'idle' || mails.length === 0) {
        return (<><Spinner /></>)
    }


    return (
        <MessagePageBigBox>
            <p>{subjectRef.current}</p>
            <div>{contentRef.current}</div>
        </MessagePageBigBox>
    );
}