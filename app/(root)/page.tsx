import React from "react";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Jzavier" };

  return (
    <div className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={1}
            totalBanks={1}
            totalCurrentBalance={2250.49}
          />
        </header>
      </div>
    </div>
  );
};

export default Home;
