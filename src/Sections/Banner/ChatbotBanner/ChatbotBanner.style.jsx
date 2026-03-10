import styled from "styled-components";

import BgImg from "../../../assets/images/chatbot/chatbot-banner-grident.svg";

const ChatbotBannerStyle = styled.section`
  background: #002145;
  padding-top: 90px;
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  &.chatbot-banner {
    position: relative;
    z-index: 1;
    background-color: #002145 !important;
    background: #002145;

    .hero-content-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 35px;
      margin-top: 16px;
      list-style: none;
      padding: 0px;
      .list-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
          font-size: 22px;
          margin-right: 12px;
        }
      }
      p {
        margin-bottom: 10px;
      }
    }

    .cd-headline.loading-bar .cd-words-wrapper::after,
    .cd-headline.loading-bar .cd-words-wrapper.is-loading::after {
      background: #ffffff;
      
    }

    .chatbot-banner-text {
      position: relative;
      z-index: 1;
      min-height: auto;
      .title {
        font-size: 48px;
        font-weight: 700;
        line-height: 80px;
        text-align: left;
        color: #ffffff;
        span {
          position: relative;
          padding: 0px !important;

          &::after {
            content: "";
            height: 5px;
            border-radius: 2.5px;
            background: #ffc847;
            width: 100%;
            position: absolute;
            left: 0px;
            bottom: -6px;
          }

          img {
            position: absolute;
            top: -10px;
            right: -30px;
          }
        }
      }

      p {
        margin-top: 8px;
        color: #ffffff;
      }
    }
  }

  .chatbot-banner-video {
    position: relative;
    &.v8banner-video {
      video {
        min-height: 800px;
      }
    }
    .chatbot-banner-video-overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0px;
      right: 0px;
      width: 100%;
      background: linear-gradient(
        90deg,
        rgba(4, 23, 131,1)4.17%,
        rgba(4, 23, 131, 0.520833) 51.04%,
        rgba(4, 23, 131, 0) 100%
      );
    }
  }
  .start-free-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 35px;
    padding: 10px;
    max-width: 470px;
    width: 100%;
    max-height: 70px;
    .form-input {
      color: ${({ theme }) => theme.colors.title};
      background: transparent;
      border: none;
      outline: none;
      padding: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }
    .bg-blue-btn {
      padding: 12px 40px;
      border: none;
      outline: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     MAIN FLEX ROW — left text | right video, always side by side
     The section itself is full-width; the two halves split it 50/50.
  ═══════════════════════════════════════════════════════════════ */
  .banner-flex-row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    max-width: 100%;
  }

  /* LEFT half — text content, starts from the true left edge */
  .banner-left {
    flex: 1 1 50%;
    min-width: 0;
    display: flex;
    align-items: center;
    /* Left padding = Bootstrap container margin so text lines up with rest of page */
    // padding-left: clamp(20px, calc((100vw - 1210px) / 2), 320px);
    padding-left: 60px;
    padding-right: 48px;
    padding-top: 20px;
    padding-bottom: 50px;
    position: relative;
    z-index: 2;
  }

  /* RIGHT half — shrinks with screen width, video defines the height */
  .banner-right {
    flex: 1 1 50%;
    min-width: 0;
    position: relative;
    padding: 10px 10px 10px 0;
  }

  .banner-bg-video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: fill;
    border-radius: 20px;
  }

  .chatbot-banner-video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-chat-section {
    width: 100%;
    padding: 15px;
    overflow: hidden;
  }

  /* Text column content */
  .v8banner-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  &.chatbot-banner .chatbot-banner-text {
    position: relative;
    z-index: 1;
    p {
      margin-top: 8px;
      color: #ffffff;
    }
    .title {
      font-size: 48px;
      font-weight: 700;
      line-height: 80px;
      text-align: left;
      color: #ffffff;
    }
  }

  /* TRUST POINTS */
  .trust-points {
    margin-top: 10px;
    width: 100%;
  }

  .point {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .arrow-icon {
    color: #ed740a;
    font-size: 22px;
    flex-shrink: 0;
    animation: arrowBounce 1.2s infinite ease-in-out;
  }
  .point:nth-child(2) .arrow-icon {
    animation-delay: 0.2s;
  }
  @keyframes arrowBounce {
    0%   { transform: translateX(0);  opacity: 0.6; }
    50%  { transform: translateX(8px); opacity: 1; }
    100% { transform: translateX(0);  opacity: 0.6; }
  }

  /* SEARCH BAR */
  .search-box {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 40px;
    padding: 0 8px 0 20px;
    width: 100%;
    max-width: 500px;
    height: 55px;
  }
  .search-box input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0;
    font-size: 14px;
    color: #ffffff;
    background: transparent;
    height: 100%;
    text-align: left;
  }
  .search-box input::placeholder { color: #fff; }
  .search-box button {
    background: #00a8e8;
    color: white;
    border: none;
    padding: 10px 28px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.3s ease;
    height: 45px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .search-box button:hover { background: #0099d4; }

  /* RECOMMENDED SERVICES */
  .recommended-services {
    margin-top: 30px;
    width: 100%;
  }
  .services-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 8px;
    text-align: left;
  }
  .services-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
  }
  .service-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    background: #ffffff;
    color: #000000;
    text-decoration: none;
    border-radius: 16px;
    border: none;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }
  .service-button:hover { background: #f0f0f0; transform: translateY(-1px); }

  .banner-title { color: #ffffff !important; }

  /* ── responsive ─────────────────────────────────────────────── */

  /* Tablet landscape / smaller desktop — start stacking at 991px */
  @media screen and (max-width: 991px) {
    .banner-flex-row {
      flex-direction: column;
      min-height: auto;
    }
    .banner-left {
      flex: none;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 40px;
      padding-bottom: 30px;
    }
    .banner-right {
      flex: none;
      width: 100%;
      padding: 0 16px 20px 16px;
    }
    .v8banner-text {
      width: 100%;
    }
    &.chatbot-banner .chatbot-banner-text {
      .title {
        font-size: 36px;
        line-height: 52px;
      }
      p { font-size: 16px; line-height: 28px; }
    }
    .search-box { max-width: 100%; }
    .recommended-services { max-width: 100%; }
  }

  @media screen and (max-width: 767px) {
    padding-top: 70px;
    &.chatbot-banner { padding-top: 80px; }
    .banner-left {
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 30px;
    }
    &.chatbot-banner .chatbot-banner-text {
      .title { font-size: 28px; line-height: 40px; }
      p { font-size: 14px; line-height: 26px; }
    }
    .point { font-size: 15px; }
    .search-box { height: 48px; padding: 0 6px 0 14px; }
    .search-box button { padding: 8px 18px; font-size: 12px; }
  }

  @media screen and (max-width: 575px) {
    .banner-left { padding-left: 15px; padding-right: 15px; }
    &.chatbot-banner .chatbot-banner-text {
      .title { font-size: 24px; line-height: 36px; }
    }
    .service-button { font-size: 10px; padding: 5px 10px; }
  }

  @media screen and (max-width: 425px) {
    &.chatbot-banner .chatbot-banner-text {
      .title { font-size: 21px; line-height: 31px; }
    }
    .point { font-size: 14px; }
    .arrow-icon { font-size: 18px; }
  }

  @media screen and (max-width: 374px) {
    &.chatbot-banner .chatbot-banner-text {
      .title { font-size: 19px; line-height: 28px; }
      p { font-size: 13px; line-height: 22px; }
    }
  }

  /* Large screens — keep left padding aligned with rest of site */
  @media screen and (min-width: 1400px) {
    .banner-left { padding-right: 60px; }
  }
  @media screen and (min-width: 1600px) {
    .banner-left { padding-right: 80px; }
    .banner-title { font-size: 56px !important; line-height: 1.2 !important; }
  }
  @media screen and (min-width: 1920px) {
    .banner-left { padding-right: 100px; }
    .banner-title { font-size: 64px !important; line-height: 1.2 !important; }
    .point { font-size: 20px; }
    .search-box { max-width: 620px; height: 62px; }
    .service-button { font-size: 13px; padding: 8px 16px; }
  }
`;

export default ChatbotBannerStyle;
