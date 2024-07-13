import "../../styles/winnersCard.css";

export default function WinnersCard({ img }) {
  return (
    <>
      <div className="leaderboard__card">
        <img src={img} alt="" />
        <div className="leaderboard__card--content">
          <p className="user">User</p>
          <h3 className="name">Jameson</h3>
          <p className="wagered">Wagered</p>
          <p className="amount">
            <span>$</span>5,500.00
          </p>
          <p className="reward">Reward</p>

          <a href="#" className="leaderboard__card--btn">
            $50
          </a>
        </div>
      </div>
    </>
  );
}
