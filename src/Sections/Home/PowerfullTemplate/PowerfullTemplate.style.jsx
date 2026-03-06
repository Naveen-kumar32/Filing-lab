import styled from "styled-components";

const PowerfullTemplateStyle = styled.section`
  margin-bottom: 140px;
  margin-top: 80px;
  overflow-y: hidden;
  background: ${({ theme }) => theme.colors.whiteColor};
  position: relative;
  z-index: 2;
  
  .powerfull-template-content {
    margin-top: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: visible;
  }

  .template-card-wrapper {
    position: relative;
    width: 90%;
    min-width: 1200px;
    margin-bottom: 80px;
    opacity: 0;
    transform: translateY(50px);
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .template-card-wrapper.reverse {
    .circle-decoration {
      left: auto;
      right: -30px;
    }

    .rectangle-decoration {
      left: auto;
      right: 50px;
      clip-path: polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 0 50%);
    }

    .template-card {
      flex-direction: row-reverse;
    }

    .card-left {
      flex: 0 0 45%;
    }

    .card-right {
      flex: 0 0 55%;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .circle-decoration {
    position: absolute;
    top: -50px;
    left: -30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ed740a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.whiteColor};
    z-index: 3;
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);

    span {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
    }
  }

  .rectangle-decoration {
    position: absolute;
    top: -30px;
    left: 50px;
    width: 400px;
    height: 60px;
    background: #ed740a;
    clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 40px;

    h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size: 24px;
      line-height: 32px;
      font-weight: 900;
      margin: 0;
      white-space: nowrap;
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      text-align: center;
    }
  }

  .rectangle-decoration::after {
    content: attr(data-title);
    color: ${({ theme }) => theme.colors.whiteColor};
    font-weight: 700;
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
  }

  .template-card {
    display: flex;
    background: linear-gradient(90deg, #001a4d 0%, #003d7a 50%, #004d99 100%);
    border-radius: 20px;
    overflow: hidden;
    min-height: 450px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;
  }

  .card-left {
    flex: 0 0 45%;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;

    h4 {
      display: none;
    }

    .points-list {
      list-style: none;
      padding: 0;
      margin: 30px 0 50px 0;

      li {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        margin-bottom: 25px;
        color: ${({ theme }) => theme.colors.whiteColor};
        font-size: 20px;
        line-height: 32px;
        font-weight: 700;

        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
          font-size: 32px;
          font-weight: 900 !important;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          margin-top: 5px;
          object-fit: contain;
        }
      }
    }


    .cta-button {
      align-self: flex-start;
      padding: 12px 32px;
      background: transparent;
      color: #ed740a;
      border: 2px solid #ed740a;
      border-radius: 25px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};

      &:hover {
        background: #ed740a;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }

  .card-right {
    flex: 0 0 55%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 700px;
      height: auto;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 1199px) {
    .template-card-wrapper {
      width: 90%;
    }

    .rectangle-decoration {
      width: 200px;
      height: 50px;
    }

    .circle-decoration {
      width: 80px;
      height: 80px;
      font-size: 28px;
      top: -20px;
      left: -20px;
    }

    .card-left {
      padding: 50px 30px;

      h4 {
        font-size: 20px;
        margin-bottom: 25px;
      }

      .points-list li {
        font-size: 14px;
        margin-bottom: 15px;
      }
    }

    .card-right {
      padding: 30px;
    }
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 85px;

    .template-card {
      flex-direction: column;
      min-height: auto;
    }

    .card-left,
    .card-right {
      flex: 0 0 100%;
    }

    .card-left {
      padding: 50px 30px 30px;

      h4 {
        font-size: 18px;
      }

      .points-list li {
        font-size: 13px;
      }
    }

    .card-right {
      padding: 30px;
      min-height: 300px;
    }

    .rectangle-decoration {
      width: 150px;
      height: 40px;
      top: 15px;
      left: 25px;
    }

    .circle-decoration {
      width: 70px;
      height: 70px;
      font-size: 24px;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;

    .template-card-wrapper {
      width: 95%;
    }

    .card-left {
      padding: 40px 20px 20px;

      h4 {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .points-list li {
        font-size: 12px;
        margin-bottom: 12px;
      }

      .cta-button {
        padding: 10px 24px;
        font-size: 14px;
      }
    }

    .card-right {
      padding: 20px;
      min-height: 250px;
    }

    .rectangle-decoration {
      width: 120px;
      height: 35px;
    }

    .circle-decoration {
      width: 60px;
      height: 60px;
      font-size: 20px;
      top: -15px;
      left: -15px;
    }
  }

  @media screen and (max-width: 575px) {
    margin-bottom: 30px;

    .template-card-wrapper {
      width: 100%;
      padding: 0 15px;
    }

    .card-left {
      padding: 30px 15px 15px;

      h4 {
        font-size: 14px;
        margin-bottom: 15px;
      }

      .points-list li {
        font-size: 11px;
        margin-bottom: 10px;
        gap: 10px;
      }

      .cta-button {
        padding: 8px 20px;
        font-size: 12px;
      }
    }

    .card-right {
      padding: 15px;
      min-height: 200px;
    }

    .rectangle-decoration {
      width: 100px;
      height: 30px;
      top: 10px;
      left: 20px;
    }

    .circle-decoration {
      width: 50px;
      height: 50px;
      font-size: 16px;
      top: -10px;
      left: -10px;
    }
  }
`;

export default PowerfullTemplateStyle;

