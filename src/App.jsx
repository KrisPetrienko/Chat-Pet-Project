import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import { Notification } from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return (
      <svg
        role="img"
        aria-label="Loading animation"
        className="smiley"
        viewBox="0 0 128 128"
        width="128"
        height="128"
      >
        <defs>
          <clipPath id="smiley-eyes">
            <circle
              className="smiley__eye1"
              cx="64"
              cy="64"
              r="8"
              transform="rotate(-40,64,64) translate(0,-56)"
            />
            <circle
              className="smiley__eye2"
              cx="64"
              cy="64"
              r="8"
              transform="rotate(40,64,64) translate(0,-56)"
            />
          </clipPath>
          <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <mask id="smiley-mask">
            <rect
              x="0"
              y="0"
              width="128"
              height="128"
              fill="url(#smiley-grad)"
            />
          </mask>
        </defs>
        <g
          strokeLinecap="round"
          strokeWidth="12"
          strokeDasharray="175.93 351.86"
        >
          <g>
            <rect
              fill="hsla(303, 85%, 21%, 1.00)"
              width="128"
              height="64"
              clipPath="url(#smiley-eyes)"
            />
            <g fill="none" stroke="hsla(308, 64%, 76%, 1.00)">
              <circle
                className="smiley__mouth1"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(180,64,64)"
              />
              <circle
                className="smiley__mouth2"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(0,64,64)"
              />
            </g>
          </g>
          <g mask="url(#smiley-mask)">
            <rect
              fill="hsla(311, 77%, 20%, 1.00)"
              width="128"
              height="64"
              clipPath="url(#smiley-eyes)"
            />
            <g fill="none" stroke="hsla(313, 75%, 22%, 1.00)">
              <circle
                className="smiley__mouth1"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(180,64,64)"
              />
              <circle
                className="smiley__mouth2"
                cx="64"
                cy="64"
                r="56"
                transform="rotate(0,64,64)"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
