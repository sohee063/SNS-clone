import MsgList from "../components/MsgList";
import { fetcher } from "../queryClient.js";
import { GET_MESSAGES } from "../graphql/messages.js";
import { GET_USERS } from "../graphql/user.js";

const Home = ({ smsgs, users }) => (
  <>
    <h1>SIMPLE SNS</h1>
    <MsgList smsgs={smsgs} users={users} />
  </>
);

export const getServerSideProps = async () => {
  const { messages: smsgs } = await fetcher(GET_MESSAGES);
  const { users } = await fetcher(GET_USERS);
  return {
    props: { smsgs, users }
  };
};
export default Home;
