import styled from "styled-components";

const TeamBestPricingStyleWrapper = styled.section`
  padding: 112px 0 120px 0;
  background: linear-gradient(90deg, #d3e1ff 0%, #ecf1f8 45.31%, #ffeaef 98.8%);
  border-radius: 50px;

  /*-- best-pricing-header style --*/
  .best-pricing-header {
    margin-bottom: 40px;
    text-align: center;
    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }

  /*-- best-pricing-selector style --*/
  .best-pricing-selector {
    margin-bottom: 40px;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      button {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textColor};
        span {
          color: ${({ theme }) => theme.colors.heroimg1Bg};
        }
        &.active {
          color: ${({ theme }) => theme.colors.title};
        }
      }
      input[type="checkbox"] {
        appearance: none;
        width: 50px;
        height: 24px;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.colors.whiteColor};
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        &::before {
          position: absolute;
          content: "";
          top: 4px;
          left: 5px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.primary}80;
          transition: 0.3s;
        }
        &:checked {
          background-color: ${({ theme }) => theme.colors.primary};
          &::before {
            left: 28px;
            background-color: ${({ theme }) => theme.colors.whiteColor};
          }
        }
      }
    }
  }
  .best-pricing-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    align-items: stretch;
    &.yearly {
      display: none;
    }
  }

  .best-pricing-card {
    padding: 28px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    border-radius: 20px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    height: 650px;
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .best-pricing-card-header {
      h3 {
        margin-bottom: 0;
        line-height: 1.3;
        font-size: 22px;
        font-weight: 700;
        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-shrink: 0;
      text-align: center;
    }
    
    &.meeting {
      .start-free-btn {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.whiteColor};
        span{
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }

    &.v2 {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    }

    .overlay {
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 30px;
      border-radius: 10px 10px 0 0;
      background-color: ${({ theme }) => theme.colors.heroimg1Bg};
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 38px;
      p {
        font-size: 13px;
        font-weight: 700;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.whiteColor};
        text-transform: uppercase;
      }
    }

    &-header {
      p {
        margin-bottom: 15px;
        white-space: normal;
        word-break: break-word;
        overflow: visible;
        text-overflow: clip;
        min-height: 40px;
        max-height: 40px;
        line-height: 1.4;
        color: ${({ theme }) => theme.colors.textColor};
        font-size: 14px;
        font-weight: 400;
      }
    }
    &-title {
      margin-bottom: 8px;
      position: relative;
      padding-right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 50px;
      h2 {
        font-size: 18px;
        line-height: 1.4;
        white-space: normal;
        word-break: break-word;
        margin: 0;
        padding-right: 0;
        height: auto;
      }
      img {
        position: relative;
        width: 35px;
        height: 35px;
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      
      .list {
        padding: 0;
        list-style: none;
        margin-top: 20px;
        margin-bottom: 10px;
        flex: 1;
        overflow-y: auto;
        padding-right: 8px;
        min-height: 0;
        
        &::-webkit-scrollbar {
          width: 6px;
        }
        
        &::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          
          &:hover {
            background: rgba(0, 0, 0, 0.3);
          }
        }
        
        li {
          color: ${({ theme }) => theme.colors.textColor};
          padding-left: 16px;
          padding-bottom: 6px;
          position: relative;
          line-height: 1.5;
          word-wrap: break-word;
          word-break: break-word;
          font-weight: 400;

          &:not(:first-child) {
            margin-top: 10px;
          }

          &::before {
            position: absolute;
            content: "";
            top: 8px;
            left: 0;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #000000;
            flex-shrink: 0;
          }
        }
      }
    }
    
    .buy-now-btn {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #ff9a42;
      border-radius: 25px;
      background-color: transparent;
      color: #000000;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: #ff9a42;
        transition: left 0.3s ease;
        z-index: -1;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.whiteColor};
        
        &::before {
          left: 0;
        }
      }
    }
  }

  .users-list {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      &:not(:first-child) {
        margin-left: -4px;
        a img {
          border: 2px solid ${({ theme }) => theme.colors.borderColor2};
        }
      }
    }
    li a {
      width: 36px;
      height: 36px;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
    li button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary}4d;
      border: 2px solid ${({ theme }) => theme.colors.borderColor2};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      img {
        transition: 0.3s;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
  }

  .best-pricing-info {
    margin-top: 40px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 35px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    .list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          font-size: 18px;
          color: ${({ theme }) => theme.colors.textColor};
        }
        p {
          margin-bottom: 0;
          font-weight: 600;
        }
      }
    }
    &-right {
      display: flex;
      align-items: center;
      gap: 27px;
      flex-wrap: wrap;
      p {
        margin-bottom: 0;
        font-weight: 600;
      }
    }
  }

  .compare-plans-btn {
    display: flex;
    align-items: center;
    gap: 13px;
    transition: 0.3s;
    font-weight: 800;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary}4d;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      svg {
        font-size: 16px;
        transition: 0.3s;
      }
    }
    &:hover {
      .icon {
        background-color: ${({ theme }) => theme.colors.primary};
        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .best-pricing-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .best-pricing-card {
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 74px;
    padding-bottom: 80px;
  }
  @media screen and (max-width: 767px) {
    .best-pricing-info {
      padding: 30px;
    }
    .best-pricing-grid {
      grid-template-columns: 1fr;
    }
    .best-pricing-card {
      border-radius: 20px;
    }

    .best-pricing-info {
      gap: 10px;

      .list {
        gap: 10px;
      }

      &-right {
        gap: 20px;

        a {
          gap: 10px;
        }
      }
    }
    .best-pricing-card-body {
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 575px) {
    .best-pricing-header {
      h2 {
        font-size: 30px;
      }
    }
    .best-pricing-card-title h2 {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 480px) {
    .best-pricing-header {
      h2 {
        font-size: 24px;
      }
    }
  }
`;

export default TeamBestPricingStyleWrapper;
