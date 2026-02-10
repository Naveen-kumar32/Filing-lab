import styled from "styled-components";

const UsefulFeatureStyleWrapper = styled.section`
    padding: 65px 0;

    .useful-feature-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }

    .useful-feature-slider-nav {
        .slick-list {
            padding: 0 !important;

            .slick-slide {
                width: max-content !important;

                &.slick-current {
                    .slider-item {
                        color: #ff9a42;
                        p {
                            font-weight: 700;
                            color: #000000ff;
                        }
                        &::before {
                            opacity: 1;
                            animation: tabAnimate 6.5s linear;
                        }
                    }
                }
            }
        }

        .slick-track {
            width: 100% !important;
            transform: translate3d(0px, 0px, 0px) !important;
            margin: 0 -10px;
        }

        .slider-item {
            margin: 10px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            width: max-content !important;
            height: 50px !important;
            padding: 13px 28px !important;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ff9a42;
            border-radius: 26px;
            background-color: transparent;
            text-transform: capitalize;
            font-weight: 400;
            line-height: 24px;
            color: #999999;
            transition: 0.3s;

            p {
                font-weight: 400;
                color: #999999;
                margin: 0;
            }

            &::before {
                position: absolute;
                z-index: -1;
                content: "";
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                background-color: #ff9a42;
                opacity: 0;
                transition: 0.3s;
            }
        }
    }

    @keyframes tabAnimate {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }

    .feature-box {
        background: #ffffff;
        border-radius: 12px;
        padding: 30px;
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }

        .feature-box-header {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 20px;

            .feature-icon {
                width: 60px;
                height: 60px;
                object-fit: contain;
                flex-shrink: 0;
            }

            h3 {
                margin: 0;
                font-size: 18px;
                font-weight: 700;
                color: ${({ theme }) => theme.colors.blackColor};
                line-height: 24px;
            }
        }

        .feature-description {
            margin: 0 0 20px 0;
            font-size: 14px;
            line-height: 22px;
            color: #666666;
            flex-grow: 1;
        }

        .feature-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #ff9a42;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: 0.3s ease;

            .iconify {
                font-size: 16px;
                transition: 0.3s ease;
            }

            &:hover {
                gap: 12px;
                color: #ed740a;

                .iconify {
                    transform: translateX(3px);
                }
            }
        }
    }

    @media screen and (max-width: 991px) {
        padding-top: 10px;
        padding-bottom: 55px;

        .feature-box {
            padding: 25px;
        }
    }

    @media screen and (max-width: 768px) {
        .feature-box {
            padding: 20px;

            .feature-box-header {
                gap: 12px;

                .feature-icon {
                    width: 35px;
                    height: 35px;
                }

                h3 {
                    font-size: 16px;
                }
            }
        }
    }

    @media screen and (max-width: 575px) {
        .feature-box {
            padding: 15px;

            .feature-box-header {
                h3 {
                    font-size: 14px;
                }
            }

            .feature-description {
                font-size: 13px;
            }
        }
    }
`;

export default UsefulFeatureStyleWrapper;