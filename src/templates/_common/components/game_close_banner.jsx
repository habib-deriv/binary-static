/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GameCloseBanner extends Component {
    render() {
        const { has_margin } = this.props;
        return (
            <div
                id='close_banner_container'
                className={`invisible ${has_margin ? 'has_margin' : ''}`}
            >
                <div className='close_banner_text'>
                    <img
                        src={it.url_for('images/close-banner/icon_left.png')}
                        className='close_banner_img'
                    />
                    <div className='close_banner_text_wrapper'>
                        <h3>Your Gaming Acount is scheduled to be closed</h3>
                        <p>Please proceed to withdraw your funds.</p>
                    </div>
                </div>
                <div id='close_banner_btn' className='close_banner_btn'>{it.L('Learn more')}</div>
            </div>
        );
    }
}

GameCloseBanner.propTypes = {
    has_margin: PropTypes.bool,
};
