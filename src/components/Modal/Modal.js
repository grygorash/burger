import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { cleanCart, feedbackTel, modalClose } from '../../actions';
import './Modal.css';

const Modal = props =>
  <div className={props.modals.cart || props.modals.feedback ? 'modal-bg show' : 'modal-bg'}>
    {props.type === 'cart' ? (
      <div className="modal">
        <p>Спасибо, Ваш заказ принят</p>
        <p>В ближайшее время с Вами свяжется наш оператор</p>
        <button className="btn"
                onClick={() => {
                  props.cleanCart();
                  props.modalClose('cart');
                  props.history.push('/menu');
                }}>Ок
        </button>
      </div>
    ) : props.type === 'feedback' ? (
      <div className="modal">
        <p>Укажите Ваш мобильный телефон</p>
        <p>В ближайшее время с Вами свяжется наш оператор</p>
        <input type="tel"
               onChange={({target}) => props.feedbackTel(target.value)} />
        <button className="btn"
                onClick={() => props.modalClose('feedback')}>Перезвоните мне
        </button>
        <button className="btn close-btn"
                onClick={() => props.modalClose('feedback')}>X
        </button>
      </div>
    ) : null}
  </div>;

const mapStateToProps = state => ({
  modals: state.modals,
});

const mapDispatchToProps = dispatch => ({
  modalClose: bindActionCreators(modalClose, dispatch),
  feedbackTel: bindActionCreators(feedbackTel, dispatch),
  cleanCart: bindActionCreators(cleanCart, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));