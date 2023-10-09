import { InBoxPageBigBox, MessageTile, PageTitleComponent } from "../components/inbox_page_components";
// import { msgs } from "../utils/fake_msgs";
import { Fragment } from "react";
import { Link} from "react-router-dom";
import { useSelector} from 'react-redux';

export const InBoxPage = () => {
    const mails = useSelector(state => state.mails.value)
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
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