"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import PastWinnersModal from "@/components/leaderboard/PastWinnersModal";
import WinnersCard from "@/components/leaderboard/WinnersCard";
import { useState } from "react";
import "../../styles/leaderboardpage.css";

export default function page() {
  const [showWinnersModal, setShowWinnersModal] = useState(false);

  const handleModal = () => {
    setShowWinnersModal(!showWinnersModal);
  };

  return (
    <>
      <Header />
      <Hero content={false} img="/images/leaderboard__bg.png" />

      {/* leaderboard card area  */}
      <div className="leaderboard__card--area">
        <div className="container">
          <div className="leaderboard__cards">
            <WinnersCard img="/images/leaderboard-card-1.png" />
            <WinnersCard img="/images/leaderboard-card-2.png" />
            <WinnersCard img="/images/leaderboard-card-3.png" />
          </div>
        </div>
      </div>

      {/* leaderboard area  */}
      <div className="leaderboard__area">
        <div className="container">
          <div className="leaderboard__inner">
            <div className="leaderboard">
              <h3 className="title">Leaderboard is ending</h3>
              <p className="subtitle">
                The winners will be determined when the timer runs out
              </p>
              <div className="times__remaining">
                <div className="day">
                  <p className="num">0</p>
                  <p>days</p>
                </div>
                <div className="hours">
                  <p className="num">0</p>
                  <p>days</p>
                </div>
                <div className="mins">
                  <p className="num">10</p>
                  <p>days</p>
                </div>
                <div className="sec">
                  <p className="num">20</p>
                  <p>days</p>
                </div>
              </div>
            </div>

            <div className="challengers">
              <h3 className="challengers__title">Challengers</h3>

              <div className="challengers__header">
                <p>place</p>
                <p>username</p>
                <p>Wagered</p>
                <p>Prize</p>
              </div>
              <div className="challengers__table">
                <div className="challengers__item">
                  <p className="sl">1</p>
                  <p className="name">Jamenson</p>
                  <p className="challengers__num">$300</p>
                  <p className="challengers__prize">$500</p>
                </div>
                <div className="challengers__item">
                  <p className="sl">1</p>
                  <p className="name">Jamenson</p>
                  <p className="challengers__num">$300</p>
                  <p className="challengers__prize">$500</p>
                </div>
                <div className="challengers__item">
                  <p className="sl">1</p>
                  <p className="name">Jamenson</p>
                  <p className="challengers__num">$300</p>
                  <p className="challengers__prize">$500</p>
                </div>
                <div className="challengers__item">
                  <p className="sl">1</p>
                  <p className="name">Jamenson</p>
                  <p className="challengers__num">$300</p>
                  <p className="challengers__prize">$500</p>
                </div>
                <div className="challengers__item">
                  <p className="sl">1</p>
                  <p className="name">Jamenson</p>
                  <p className="challengers__num">$300</p>
                  <p className="challengers__prize">$500</p>
                </div>
                <div className="challengers__item">
                  <p className="sl">1</p>
                  <p className="name">Jamenson</p>
                  <p className="challengers__num">$300</p>
                  <p className="challengers__prize">$500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* past winners */}
      <div className="past__winners">
        <div className="container">
          <h3 className="winners__title">PAST WINNERS</h3>
          <div className="past__winner">
            <WinnersCard img="/images/past-winner-1.png" />
            <WinnersCard img="/images/past-winner-1.png" />
            <WinnersCard img="/images/past-winner-1.png" />
          </div>

          <button className="past__winner--btn" onClick={handleModal}>
            View All
          </button>
        </div>
      </div>

      {showWinnersModal && (
        <PastWinnersModal
          showWinnersModal={showWinnersModal}
          setShowWinnersModal={setShowWinnersModal}
        />
      )}
      <Footer />
    </>
  );
}
