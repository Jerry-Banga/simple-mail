import { AppNameComponent, HomePageBigBox, ViewMessagesButton } from "../components/home_page_components";
import { useNavigate, useLoaderData } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setMails } from "../redux/mails";

const HomePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { mails, user } = useLoaderData();
    const [numberOfUnreadMails, setNumberOfUnreadMails] = useState(0);

    const viewAllMessages = () => {
        navigate('/inbox');
    }

    useEffect(() => {
        console.log("use effect in home page is called");
        //Calculates the number of unread mails
        if (mails !== undefined && mails.length > 0) {
            const value = Object.values(mails).reduce((count, mail) => {
                if (!mail.isRead) {
                    count++;
                }
                return count;
            }, 0);
            setNumberOfUnreadMails(value)
            dispatch(setMails(mails))
        }
    },
        
        [dispatch, mails]);

    return (
        <Fragment>
            <AppNameComponent>
                Simple Mail
            </AppNameComponent>
            <HomePageBigBox>
                {
                    user !== undefined ?
                        <div>
                            <p>Hello</p>
                            <p>{user.name} {user.lastName}</p>
                        </div> :
                        <p style={{color: "#D80032"}}>
                            Sorry this user is not authenticated
                        </p>
                }
                {
                    user && <div>
                        <p>You have {numberOfUnreadMails} unread messages out of {mails !== undefined ? mails.length : 0} total.</p>
                    </div>
                }
                <ViewMessagesButton onClick={viewAllMessages}>
                    View messages
                </ViewMessagesButton>
            </HomePageBigBox>
        </Fragment>
    );
}

export default HomePage;