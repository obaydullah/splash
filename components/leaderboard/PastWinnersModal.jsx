import { IoIosClose } from "react-icons/io";
import "../../styles/pastWinnersModal.css";

export default function PastWinnersModal({
  showWinnersModal,
  setShowWinnersModal,
}) {
  const hndleModalClose = () => {
    setShowWinnersModal(!showWinnersModal);
  };

  return (
    <>
      <div className="winners__modal--area">
        <div className="container">
          <div className="winners__modal">
            <div className="modal__header">
              <h3 className="modal__title">Past Winners</h3>
              <p className="modal__subtitle">Viewing month of June 2024</p>
              <IoIosClose className="modal__close" onClick={hndleModalClose} />
            </div>

            <div className="modal__table">
              <div className="modal__header--bottom">
                <p className="place">Place</p>
                <p className="username">Username</p>
                <p className="wagered">Wagered</p>
                <p className="prize">Prize</p>
              </div>

              <div className="modal__table--item">
                <p className="item__sl">1</p>
                <p className="item__name">Jamenson Kyle</p>
                <p className="item__wagered">$300</p>
                <p className="item__prize">$500</p>
              </div>
              <div className="modal__table--item">
                <p className="item__sl">1</p>
                <p className="item__name">Jamenson</p>
                <p className="item__wagered">$300</p>
                <p className="item__prize">$500</p>
              </div>
              <div className="modal__table--item">
                <p className="item__sl">1</p>
                <p className="item__name">Jamenson</p>
                <p className="item__wagered">$300</p>
                <p className="item__prize">$500</p>
              </div>
              <div className="modal__table--item">
                <p className="item__sl">1</p>
                <p className="item__name">Jamenson</p>
                <p className="item__wagered">$1300</p>
                <p className="item__prize">$500</p>
              </div>

              <div className="modal__pagination">
                <button className="btn__pagination">Previous Page</button>
                <div className="pagination__num">
                  <button className="pagination__num--btn">1</button>
                  <button className="pagination__num--btn">2</button>
                  <button className="pagination__num--btn">3</button>
                  <button className="pagination__num--btn">4</button>
                </div>
                <button className="btn__pagination">Next Page</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
