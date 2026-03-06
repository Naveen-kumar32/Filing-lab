import styled from "styled-components";

import BgImg from "../../../assets/images/corporate/consultation-bg.png";
import DropdownImg from "../../../assets/images/corporate/dropdown-icon.svg";

const ConsultationStyleWrapper = styled.section`
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 140px;
  .consultation-card {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 30px 30px 0px 0px;
    overflow: visible;
  }
  .consultation-card .row > .col-md-6:first-child {
    flex: 0 0 auto !important;
    max-width: calc(50% - 50px) !important;
    width: calc(50% - 50px) !important;
  }
  .consultation-card .row > .col-md-6:last-child {
    flex: 0 0 auto !important;
    max-width: calc(50% + 50px) !important;
    width: calc(50% + 50px) !important;
  }
  .consultation-left {
    width: 100%;
    height: 100%;
    padding: 48px 40px;
    background: linear-gradient(90deg, #ff6600 0%, #ff9a42 100%);
    border-radius: 30px 0px 0px 0px;
  }

  .consultation-img {
    margin-bottom: 24px;
  }

  .consultation-text {
    p {
      font-size: 14px !important;
      margin-bottom: 14px !important;
    }
    h5 {
      font-size: 20px !important;
      font-family: ${({ theme }) => theme.fonts.dmSans};
      line-height: 1.4 !important;
      margin-bottom: 20px !important;
      a {
        color: #fff !important;
        text-decoration: none;
      }
    }
    h5.mb-0 {
      margin-bottom: 0 !important;
    }
  }
  .consultation-form {
    padding: 60px 60px 60px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .consultation-form-title {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 48px;
      margin-top: 30px;
      max-width: 320px;
      text-align: center;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;

      /* each label+input block */
      .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }

      .consultation-disclaimer {
        font-size: 11px;
        color: #999999;
        text-align: center;
        width: 100%;
        margin-top: 16px;
        margin-bottom: 0;
        line-height: 1.5;
        a {
          color: #999999;
          text-decoration: underline;
          &:hover { color: #ff6600; }
        }
      }

      .field-error {
        display: block;
        font-size: 11px;
        color: #e53935;
        margin-top: 4px;
      }

      label {
        font-weight: 500;
        font-size: 15px;
        line-height: 30px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 5px;
      }
      input {
        border: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
        border-radius: 10px;
        height: 50px;
        width: 100%;
        overflow: hidden;
        outline: none;
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.title};
        padding: 10px 15px;
        margin-bottom: 0;
      }
    }
  }

  .whatsapp-toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 28px;

    .whatsapp-toggle-label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
    }

    .whatsapp-toggle {
      width: 34px;
      height: 18px;
      border-radius: 9px;
      background: #cccccc;
      cursor: pointer;
      position: relative;
      transition: background 0.3s ease;
      flex-shrink: 0;

      &.active {
        background: #ff6600;
      }

      .whatsapp-toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        transition: left 0.3s ease;
      }

      &.active .whatsapp-toggle-thumb {
        left: 18px;
      }
    }
  }

  .consultation-btn {
    height: 42px !important;
    min-height: unset !important;
    padding: 0 24px !important;
    font-size: 13px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: visible !important;
    align-self: center !important;
    margin-top: 16px;
    .btn-inner { height: 42px !important; }
  }

  .phone-input-group {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 0;
    border: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
    border-radius: 10px;
    overflow: visible;
    position: relative;

    .country-code-btn {
      display: flex;
      align-items: center;
      gap: 3px;
      height: 40px;
      width: 80px;
      flex-shrink: 0;
      padding: 0 8px;
      background: #f8f9fa;
      border-right: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
      user-select: none;
      .cc-arrow { font-size: 8px; margin-left: 2px; opacity: 0.5; }
    }

    .country-code-list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 130px;
      max-height: 180px;
      overflow-y: auto;
      background: #fff;
      border: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
      z-index: 9999;
      .cc-option {
        padding: 6px 10px;
        font-size: 12px;
        cursor: pointer;
        &:hover { background: #f0f0f0; }
        &.selected { background: #fff3ec; font-weight: 600; }
      }
    }

    .phone-number-input {
      border: none !important;
      border-radius: 0 !important;
      height: 50px;
      flex: 1;
      outline: none;
      font-weight: 500;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.title};
      padding: 10px 15px;
      margin-bottom: 0 !important;
      background: transparent;
    }
  }

  .consultation-dropdown {
    position: relative;
    width: 100%;
    &::after {
      content: "";
      position: absolute;
      right: 20px;
      top: 20px;
      width: 18px;
      height: 18px;
      background-image: url(${DropdownImg});
      background-repeat: no-repeat;
    }
    select {
      border: 1px solid ${({ theme }) => theme.colors.blackColor}1f;
      border-radius: 10px;
      height: 50px;
      width: 100%;
      overflow: hidden;
      outline: none;
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.title};
      padding: 10px 15px;
      margin-bottom: 40px;
      -webkit-appearance: none;
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 110px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 80px;
    .consultation-form {
      padding: 60px 30px;
    }
    .consultation-left {
      padding: 60px 30px;
    }
  }
`;

export default ConsultationStyleWrapper;
