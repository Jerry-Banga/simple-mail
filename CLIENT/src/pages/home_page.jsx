import { AppNameComponent, HomePageBigBox, ViewMessagesButton } from "../components/home_page_components";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from "../redux/userSlice";
import { Spinner } from "../components/spinner";
import { fetchMails } from "../redux/mailsSlice";
import { ErrorComponent } from "../components/error_component";

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [numberOfUnreadMails, setNumberOfUnreadMails] = useState(0);
    const { status, userInfo, error } = useSelector(state => state.user);
    const mails = useSelector(state => state.mails.mailItems);

    const viewAllMessages = () => {
        navigate('/inbox');
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(authenticateUser())
        } else if (status === 'authenticated') {
            if (mails.length === 0) {
                dispatch(fetchMails())
            }
        }

        //Calculates the number of unread mails
        if (mails !== undefined && mails.length > 0) {
            const value = Object.values(mails).reduce((count, mail) => {
                if (!mail.isRead) {
                    count++;
                }
                return count;
            }, 0);
            setNumberOfUnreadMails(value)
        }

    },

        [dispatch, status, mails]);


    if (status === 'failed') {
        return (
            <ErrorComponent>
                {error}
            </ErrorComponent>
        );
    }


    return (
        <Fragment>
            <AppNameComponent>
                Simple Mail
            </AppNameComponent>
            <HomePageBigBox>
                {
                    userInfo != null ?
                        <div>
                            <p>Hello</p>
                            <p>{userInfo.name} {userInfo.lastName}</p>
                        </div> :
                        <Spinner />
                }
                {
                    userInfo && <div>
                        <p>You have {numberOfUnreadMails} unread messages out of {mails.length} total.</p>
                    </div>
                }
                {
                    mails.length > 0 ? <ViewMessagesButton onClick={viewAllMessages}>
                        View messages
                    </ViewMessagesButton> : <span />
                }
            </HomePageBigBox>
        </Fragment>
    );
}

export default HomePage;