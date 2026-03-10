import styled from "styled-components";

const BusinessChooseStyle = styled.section`
  padding: 65px 0 20px;
  position: relative;
  max-width: 1800px;
  margin: auto;
  .why-choose-tab {
    // border-bottom: 2px solid rgba(0, 206, 201, 0.2);
    max-width: 1170px;
    margin: auto;
    margin-bottom: 60px;
    padding-bottom: 12px;
    height: 38px;
    position: relative;
    /* &::before {
      content: "";
      position: absolute;
      height: 2px;
      background: rgba(0, 206, 201, 0.2);
      border-radius: 1px;
      width: 100%;
      bottom: 0px;
      left: 0px;
    } */
    .tab-buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 32px;

      /* active tab progress line — real <span> remounted via React key */
      .tab-progress-line {
        position: absolute;
        bottom: -8px;
        left: 0;
        height: 4px;
        width: 0%;
        background: #ed740a;
        animation: lineProgress 6000ms linear forwards;
      }

      .slick-slide {
        cursor: pointer;
        width: max-content !important;
        position: relative;
        text-align: center;
        &.slick-current {
          opacity: 1;
          span {
            &:nth-child(1) {
              color: #ed740a;
            }
          }
        }
      }
      .tab-btn {
        height: 26px;
        text-align: center;
      }
    }
  }

  .tab-content {
    margin-top: 60px;
    width: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tab-btn {
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};
    transition: 0.3s;
    position: relative;
    padding-bottom: 10px;
    background: none;
    border: none;
    cursor: pointer;
    span {
      color: #ed740a;
      transition: 0.3s;
      
      &:nth-child(1) {
        color: #ed740a;
      }
    }

    .text,
    .text2 {
      color: ${({ theme }) => theme.colors.title};
    }

    &.active {
      span {
        color: #ed740a;
      }

      .text,
      .text2 {
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }
  .tab-body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 50px;

    &-icon {
      width: 30%;
      flex: 0 0 auto;
    }
    &-img {
      img {
        border-radius: 20px;
      }
    }
    &-text {
      flex: 0 0 auto;
      width: 50%;
    }
    h2 {
      font-size: 24px;
      line-height: 36px;
    }
    p {
      margin-top: 29px;
      color: ${({ theme }) => theme.colors.textColor};
    }
    .list {
      margin-top: 11px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          font-size: 18px;
          color: ${({ theme }) => theme.colors.iconColor};
          position: relative;
          top: -5px;
        }
        .check-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          object-fit: contain;
        }
        p {
          margin-top: 0;
          color: ${({ theme }) => theme.colors.title};
        }
      }
    }
  }

  .why-choose-parent {
    width: 100%;
    margin: 0 auto;
    position: relative;
    width: 100%;
    overflow: hidden;
    .overlay-left,
    .overlay-right {
      position: absolute;
      z-index: 3;
      top: 0;
      width: 20%;
      height: 100%;
    }
    .overlay-left {
      left: 0;
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .overlay-right {
      right: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 100%
      );
    }
  }

  .why-chose-slider {
    .slick-list {
      overflow: visible;
    }
    .section {
      max-width: 1170px;
      width: 100%;
      margin: auto;
    }
  }

  .why-choose-tab {
    progress {
      position: relative;
      top: -20px;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      border: none;
      background: transparent;
      z-index: 2000;
    }

    progress::-webkit-progress-bar {
      background: transparent;
    }
    progress::-webkit-progress-value {
      background: #ed740a;
      background-attachment: fixed;
    }
    progress::-moz-progress-bar {
      background: #ed740a;
      background-attachment: fixed;
    }
  }

  @media screen and (max-width: 1200px) {
    .tab-body {
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 767px) {
    .why-choose-tab {
      height: 68px;
      .tab-buttons {
        .slick-track {
          flex-wrap: wrap;
        }
        .slick-slide {
          width: 50% !important;
          margin-bottom: 15px;
        }
      }
    }
    .tab-btn {
      padding: 0px;
      &::after {
        
      }
    }
    .tab-body {
      flex-wrap: wrap;
    }
    .tab-body-text {
      width: 100%;
    }
  }
`;

export default BusinessChooseStyle;