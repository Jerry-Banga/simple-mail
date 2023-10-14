import { InBoxPageBigBox, MessageTile, PageTitleComponent } from "../components/inbox_page_components";
// import { msgs } from "../utils/fake_msgs";
import { Fragment, useEffect } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from "../redux/userSlice";
import { fetchMails } from "../redux/mailsSlice";
import { Spinner } from "../components/spinner";
import { ErrorComponent } from "../components/error_component";

export const InBoxPage = () => {
    const dispatch = useDispatch();
    const mails = useSelector(state => state.mails.mailItems)
    const { status, error} = useSelector(state => state.user);
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

    useEffect(()=>{
        if (status === 'idle') {
            dispatch(authenticateUser())
        } else if (status === 'authenticated'){
            if(mails.length === 0){
                dispatch(fetchMails())
            }
        }
    },[dispatch, mails, status])

    if(status === 'failed'){
        return (
            <ErrorComponent>
                {error}
            </ErrorComponent>
        );
    }

    if (status === 'loading' || status === 'idle' || mails.length === 0) {
        return (<><Spinner/></>)
    } 

    return (
        <Fragment>
            <PageTitleComponent>
                My Inbox
            </PageTitleComponent>
            <InBoxPageBigBox>
                <p>Messages</p>
                <div>
                    {mails !== undefined ? mails.map((msg, index) =>
                        <Link style={linkStyle} key={msg._id} to={`/inbox/message/${index}`}>
                            <MessageTile $isRead={msg.isRead} >
                                <p>{msg.subject}</p>
                                <p>{msg.content}</p>
                            </MessageTile>
                        </Link>
                    ) : <span/>
                    }
                </div>
            </InBoxPageBigBox>
        </Fragment>
    );
}