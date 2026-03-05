import styled from "styled-components";

const MobileMenuStyleWrapper = styled.div`
  position: fixed;
  z-index: 99999;

  .offcanvasStaco-body {
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      /* Safari and Chrome */
    }
  }

  .btn-close {
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .nav-menu {
    margin: 0 auto;
    padding: 0;
    padding: 0;
    list-style: none;

    li {
      overflow: hidden;

      &.mobile-mega-item {
        overflow: visible;
      }
    }

    li a,
    li button {
      border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      display: block;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.title};
      line-height: 20px;
      padding: 16px 0;
      width: 100%;
      transition: 0.3s;
      font-weight: 500;
      font-size: 15px;
    }
    li li a,
    li li button {
      border-bottom: 1px solid transparent;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 20px;
      padding: 7px 20px;
    }
    li {
      position: relative;
      &.active {
        a {
          border-bottom: 1px solid transparent;
        }
        .sub-menu {
          background-color: ${({ theme }) => theme.colors.blackColor}0a;
        }
      }
    }
  }

  .dropdown-item {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: 19px;
      right: 26px;
      width: 2px;
      height: 12px;
      background-color: ${({ theme }) => theme.colors.iconColor};
      transition: 0.3s;
    }

    &::after {
      position: absolute;
      content: "";
      top: 24px;
      right: 21px;
      width: 12px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.iconColor};
    }

    &.submenu-opened {
      &::before {
        background-color: #0086e5;
        transform: rotate(-90deg);
      }

      &::after {
        display: none;
      }
    }
  }

  .sub-menu {
    position: relative;
    left: 0;
    width: 100%;
    height: 0;
    margin: 0;
    text-align: left;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${({ theme }) => theme.colors.blackColor}0a;
    transition: 0.3s;

    li a {
      border-bottom: 1px solid transparent;
    }

    &.open {
      height: auto;
      padding-top: 10px;
    }
  }

  .submenu-button {
    position: absolute;
    z-index: 99;
    right: 0;
    top: 5px;
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    width: 100%;
    cursor: pointer;
    top: 0;
    height: 50px;
    &::before,
    &::after {
      position: absolute;
      top: 24px;
      right: 21px;
      width: 20px;
      height: 2px;
      display: block;
      background: ${({ theme }) => theme.colors.iconColor};
      z-index: 2;
      content: "";
      right: 2px;
      width: 12px;
      transition: 0.3s;
    }
    &::before {
      width: 2px;
      height: 12px;
      right: 26px;
      top: 19px;
    }
    em {
      display: block;
      position: absolute;
      right: 0;
      border-radius: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .submenu-button.submenu-opened {
    &::before {
      background: #0086e5;
      transform: rotate(-90deg);
    }
    &::after {
      display: none;
    }
  }

  ul ul li,
  li:hover > ul > li {
    height: auto;
  }

  /* ── Mobile mega-panel (mirrors desktop megamenu) ── */
  .mobile-mega-item {
    overflow: visible !important; /* allow panel to grow */
  }

  .mobile-mega-panel {
    display: flex;
    gap: 0;
    margin: 4px 0 8px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.blackColor}14;
    background: ${({ theme }) => theme.colors.white || "#fff"};
  }

  /* Left: category list */
  .mobile-mega-left {
    flex: 0 0 38%;
    background: #f5f7fa;
    padding: 6px 0;
    border-right: 1px solid ${({ theme }) => theme.colors.blackColor}14;
    overflow-y: auto;
    max-height: 52vh;

    .mobile-cat-title {
      padding: 10px 14px;
      font-size: 13px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
      cursor: pointer;
      border-left: 3px solid transparent;
      transition: all 0.2s;
      line-height: 1.35;

      &:hover {
        background: #e8f0fe;
        color: #0086e5;
        border-left-color: #0086e5;
      }

      &.active {
        background: #e8f0fe;
        color: #0086e5;
        border-left-color: #0086e5;
      }
    }
  }

  /* Right: link list for selected category */
  .mobile-mega-right {
    flex: 1;
    padding: 8px 4px;
    overflow-y: auto;
    max-height: 52vh;
    display: flex;
    flex-direction: column;

    .mobile-mega-link {
      display: block;
      padding: 8px 12px;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.textColor};
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s;
      line-height: 1.35;

      &:hover,
      &.active {
        background: #e8f0fe;
        color: #0086e5;
      }
    }
  }
`;

export default MobileMenuStyleWrapper;
