import styled from "styled-components";

const MegaMenuWrapper = styled.div`
  .mega-menu {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .mega-menu-card {
    width: 100%;
  }

  /* Left side menu titles - Categories */
  .mega-menu-left {
    width: 25%;
    background: #ffffff;
    padding: 15px;
    border-right: 1px solid #ddd;
  }

  .menu-title-item {
    color: #000000;
    padding: 10px 15px;
    cursor: pointer;
    transition: background 0.3s linear, color 0.3s linear;
    border-radius: 6px;
    margin-bottom: 8px;
    width: 100%;
    font-weight: 500;
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
    width: 75%;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    padding: 10px;
  }

  .mega-menu-column {
    width: 50%;
    padding: 10px;
    overflow-y: scroll;
    max-height: 300px;
    
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
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mega-menu-list li {
    margin-bottom: 8px;
  }

  .mega-menu-list a {
    font-size: 14px;
    transition: all 0.2s ease;
    color: #002145;
    text-decoration: none;
    display: block;
    padding: 10px 14px;
    border-radius: 8px;
    background-color: #ffffff;
  }

  .mega-menu-list a:hover {
    background-color: #e8e8e8;
    color: #002145;
    font-weight: bold;
    border-radius: 8px;
    padding: 10px 14px;
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
