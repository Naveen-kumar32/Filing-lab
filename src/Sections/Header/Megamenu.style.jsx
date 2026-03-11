import styled from "styled-components";

const MegaMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .mega-menu {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .mega-menu-card {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  /* Left side menu titles - Categories */
  .mega-menu-left {
    flex: 0 0 280px;
    width: 280px;
    min-width: 280px;
    max-width: 280px;
    background: #f8f9fa;
    padding: 6px;
    border-right: 2px solid #e0e0e0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }

  .menu-title-item {
    color: #000000;
    padding: 4px 10px;
    cursor: pointer;
    transition: background 0.3s linear, color 0.3s linear;
    border-radius: 6px;
    margin-bottom: 1px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.6;
    white-space: normal;
    word-break: break-word;
  }

  .menu-title-item:hover {
    background: linear-gradient(90deg, #041783 0%, #1e90ff 50%, #ffffff 100%);
    color: #ffffff;
    font-weight: bold;
  }

  .menu-title-item.active {
    font-weight: bold;
    background: linear-gradient(90deg, #041783 0%, #1e90ff 50%, #ffffff 100%);
    color: #ffffff;
  }

  /* Right content panel with two columns */
  .mega-menu-right {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #ffffff;
    padding: 6px;
    overflow: hidden;
    height: 100%;
  }

  .mega-menu-column {
    flex: 1 1 0;
    min-width: 0;
    max-width: 50%;
    padding: 0 4px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    max-height: 100%;
    
    /* Show scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    -ms-overflow-style: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }

  .mega-menu-list {
    display: block;
    margin-bottom: 0px;
    padding: 0px;
    gap: 0px;
  }

  .mega-menu-list a {
    font-size: 14px;
    transition: background-color 0.15s ease, padding-left 0.15s ease, color 0.15s ease;
    color: #000000 !important;
    text-decoration: none;
    display: block;
    padding: 0px 15px;
    border-radius: 5px;
    background-color: #ffffff;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    /* Reserve space for bold state to prevent layout shift */
    &::after {
      content: attr(data-text);
      font-weight: 700;
      display: block;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }

  .mega-menu-list a:hover,
  .mega-menu-list a:focus,
  .mega-menu-list a:active {
    background-color: #f0f0f0;
    color: #000000 !important;
    font-weight: 700;
    border-radius: 5px;
    padding-left: 10px;
  }

  /* Hide all tab content & images by default */
  .mega-menu-tabcontent,
  .more-demo-card,
  .mega-menu-img {
    display: none !important;
  }

  @media (max-width: 1024px) {
    .mega-menu-left {
      width: 30%;
    }

    .mega-menu-right {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    .mega-menu-left {
      width: 100%;
    }

    .mega-menu-right {
      width: 100%;
      flex-direction: column;
    }

    .mega-menu-column {
      width: 100%;
    }
  }
`;

export default MegaMenuWrapper;