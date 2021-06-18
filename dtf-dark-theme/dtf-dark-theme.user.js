// ==UserScript==
// @name        DTF Dark Theme
// @version     9
// @namespace   https://github.com/Ciberus/user-scripts
// @updateURL   https://github.com/Ciberusps/user-scripts/raw/main/dtf-dark-theme/dtf-dark-theme.user.js
// @downloadURL https://github.com/Ciberusps/user-scripts/raw/main/dtf-dark-theme/dtf-dark-theme.user.js
// @description DTF Dark Theme
// @author      CiberusPS
// @include     *://*.dtf.ru*
// @include     *://dtf.ru/*
// @include     *://*.tjournal.ru*
// @include     *://tjournal.ru/*
// @include     *://*.vc.ru*
// @include     *://vc.ru/*
// @grant       none
// @require     file://G:\user-scripts\dtf-dark-theme\dtf-dark-theme.user.js
// ==/UserScript==

(function () {
  console.log("SCRIPT LOADED");
  // const whiteTheme = {
  //   // black: "#0F0F0F"
  // };

  const blackTheme = {
    black: "#000000",
    blackWhiter: "#0F0F0F",
    darkGrey: "#1B1B1B",
    lighterGrey: "#E3E3E3",
    lightGrey: "#3F3F3F",
    grey: "#595959", // from web
    darkerGrey: "#1F1F1F",
    white: "#FFFFFF",
    link: "#70B1E3",
    blue: "#4683d9",
  };

  const naviTheme = {
    black: "#000000",
    blackWhiter: "#0F0F0F",
    darkGrey: "#1B1B1B",
    lighterGrey: "#E3E3E3",
    lightGrey: "#3F3F3F",
    grey: "#595959", // from web
    darkerGrey: "#1F1F1F",
    white: "#FFFFFF",
    link: "",
    blue: "#4683d9",
  };

  const theme = blackTheme;

  const defaultStyles = `
    html, body {
      background: ${theme.black};
      color: ${theme.white};
    }

    .live__item__text, .live__item__user__name {
      color: ${theme.white} !important;
    }
    
    .sidebar, .l-island-bg, .sidebar__footer, .sidebar__footer::before, .live {
      background: ${theme.blackWhiter} !important;
      color: ${theme.white} !important;
    }
    .sidebar-tree-list-item--active {
      background: ${theme.darkerGrey} !important;
    }
    .sidebar-tree-list-item:hover {
      background: ${theme.darkerGrey} !important;
    }
    .sidebar-tree-list-item__child-item:hover {
      background: ${theme.lightGrey} !important;
    }
    .sidebar-tree-list__show-more-button {
      background: transparent !important;
    }

    .site-header {
      background: ${theme.blackWhiter} !important;
      color: ${theme.lighterGrey} !important;
    }

    // .site-header-logo {
    //   color: ${theme.lighterGrey};
    // }

    .block-person a, .block-quote a, .block-warning a, .comments__item__text a, .content figcaption a, .content h2 a, .content h3 a, .content h4 a, .content ol a, .content p a, .content ul a, .page--error .error__message a, .profile_comment_favorite__text a, .profile_comment_self__text a, .sitemap a, .subsite_card_simple__description a, .subsite_head__description a, .t-link-classic {
      border-bottom: 0 !important;
      color: ${theme.link} !important;
    }
    #notify .notify__item p a, .advice__caption a, .advice__list a, .andropov_telegram__text a, .andropov_tweet__text a, .island__container--with_links a, .island__info a, .island__list__link, .subsite_about__text a {
      border-bottom: 0 !important;
      color: ${theme.link} !important;
    }

    .search__input, .search-dropdown, .search--active .search__input, .search--filled .search__input {
      background: ${theme.darkGrey} !important;
      color: ${theme.white} !important;
    }
    
    .search__input::placeholder {
      color: ${theme.grey} !important;
    }

    .search__field > .icon--search {
      color: ${theme.grey} !important;
    }

    .search-dropdown__title, .search-dropdown-item--string {
      color: ${theme.white} !important;
    }

    .ui-rounded-button--active .ui-rounded-button__link {
      background: ${theme.lightGrey} !important;
    }

    .ui-rounded-button__link:hover {
      background: ${theme.darkerGrey} !important;
    }

    .v-split-button {
      background: ${theme.darkerGrey} !important;
      color: ${theme.white} !important;
    }
    .v-split-button-option:hover {
      background: ${theme.lightGrey} !important;
    }
    .v-split-button__dropdown {
      background: ${theme.darkerGrey} !important;
    }

    .ui-dropdown__item:hover {
      background: ${theme.lightGrey} !important;
    }

    #ui_briefcase > *, #ui_diamond > * {
      stroke: ${theme.white} !important;
    }

    #v_gear, #ui_plus, #ui_sidebar_messenger {
      fill: ${theme.white};
    }

    .head-notifies__panel {
      // background: ${theme.blackWhiter} !important;
      background: ${theme.darkerGrey} !important;
      color: ${theme.white} !important;
      box-shadow: 0 6px 8px 0 rgb(0 0 0 / 25%);
    }

    .u-notification--hover:hover {
      // background: ${theme.darkerGrey} !important;
      background: ${theme.lightGrey} !important;
    }

    .u-notification--border, .head-notifies__header, .head-notifies__footer {
      border-color: ${theme.darkGrey} !important;
    }
    .u-notification--unread {
      background: ${theme.lightGrey} !important;
    }

    .block-quote--centered, .block-quote--default {
      background: ${theme.darkGrey} !important;
    }
    
    .v-tabs--overflown::after {
      background: linear-gradient(90deg, ${theme.blackWhiter + "00"}  0%, 
      ${theme.blackWhiter} 40%) !important;
    }
    .v-tabs--overflown::before {
      background: linear-gradient(-90deg, ${theme.blackWhiter + "00"} 0%, 
      ${theme.blackWhiter} 40%) !important;
    }
    .v-button, .thesis__submit .v-button, .v-button--blue {
      background: ${theme.grey} !important;
      color: ${theme.white} !important;
    }
    
    .v-tabs-navigation {
      background: ${theme.darkerGrey} !important;
    }

    .andropov_link {
      background: ${theme.darkerGrey} !important;
      border: ${theme.darkerGrey} !important;
      color: ${theme.white} !important;
    }
    .andropov_tweet {
      background: ${theme.darkerGrey} !important;
      border: ${theme.darkerGrey} !important;
      color: ${theme.white} !important;
    }

    .etc_control__list, .etc_control__list:before {
      background: ${theme.darkerGrey} !important;
    }
    .etc_control__item {
      color: ${theme.white} !important;
    }
    .etc_control__item:hover {
      background: ${theme.lightGrey} !important;
    }
    .etc_control:hover, .etc_control--open  {
      color: ${theme.white} !important;
    }
    

    .ui-tab--active .ui-tab__label {
      color: ${theme.white} !important;
    }
    .ui-border--bottom {
      border-color: ${theme.darkerGrey} !important;
    }

    .comments_form, .comments_pseudo_form {
      background: ${theme.darkerGrey} !important;
    }
    .thesis__attach_something, .comments_pseudo_form__button {
      background: ${theme.lightGrey} !important;
    }
    .thesis__attach_something:hover {
      background: ${theme.grey} !important;
    }
    .vote--comment .vote__value {
      background-color: rgba(89,89,89,.1) !important;
    }
    .vote.vote__value:hover, .vote__users--not-empty:before {
      background: ${theme.darkerGrey} !important;
    }
    #vote_triangle > * {
      fill: ${theme.darkerGrey} !important;
      stroke: ${theme.darkerGrey} !important;
    }

    .comments__item .vote__value {
      background-color: rgba(89,89,89,.1) !important;
    }

    .vote .vote__users {
      background: ${theme.darkerGrey} !important;
      border: ${theme.grey} !important;
    }
    .vote .vote__users__item:before {
      background: ${theme.grey} !important;
    }
    .vote .vote__users--overflowed .vote__users__content_wrapper:after {
      background-image: linear-gradient(45deg, ${
        theme.blackWhiter
      }, transparent);
    }

    .ui-button {
      background: ${theme.darkerGrey} !important;
    }
    .thesis__submit.ui-button.ui-button--1 {
      background: ${theme.blue} !important;
    }

    .messenger {
      background: ${theme.blackWhiter} !important;
    }

    .bubble {
      background: ${theme.darkerGrey} !important;
    }
    .bubble:before {
      background: ${theme.darkerGrey} !important;
    }
    .item__text {
      color: ${theme.white} !important;
    }
    // .list__item.item.item--selected {
    //   background: ${theme.lightGrey} !important;
    // }
    .list__item.item:hover {
      background: ${theme.lightGrey} !important;
    }

    .content-header-label {
      background: ${theme.lightGrey} !important;
    }

    .bp-unit, .vacancies_widget {
      background: ${theme.darkerGrey} !important;
    }

    .vacancies_widget__item__city, .vacancies_widget__item__company, .vacancies_widget__item__salary {
      color: ${theme.white} !important;;
    }

    .vacancies_widget__new {
      background: ${theme.lightGrey} !important;
    }

    .widget_wrapper--type-blue {
      background: ${theme.darkerGrey} !important;
    }

    .comments__item__self--author .comments__item__user__name .user_name {
      color: ${theme.black} !important;
    }
    .comments__item__children {
      border-color: ${theme.lightGrey} !important;
    }
    .comments__item__space.comments__item__space--new {
      background: ${theme.darkerGrey} !important;
    }
    .comments__item__space.comments__item__space--highlighted {
      background: ${theme.darkerGrey} !important;
    }
    .comments__item__expand {
      background: transparent !important; 
    }
    .comments__link_to_all {
      background: ${theme.darkerGrey} !important;
    }

    .select__current:hover {
      color: ${theme.white} !important;
      text-decoration: underline;
    }

    .notifications-header::after {
      background-color: ${theme.lightGrey} !important;
    }

    .editor__authors {
      background-color: transparent !important;
    }
    textarea {
      background: transparent !important;
      color: ${theme.white} !important;
    }
    .editor-cp__content::before {
      background: transparent !important;
    }
    .editor__actions, .editor-cp {
      background: ${theme.blackWhiter} !important;
    }
    .editor .ce-redactor a, .miniEditor .ce-redactor a {
      border-bottom: 0 !important;
      color: ${theme.link} !important;
    }
    .form-text-input, .input {
      background: ${theme.blackWhiter} !important;
    }
    .ce-popover {
      background: ${theme.darkerGrey} !important;
    }

    .commercial-list__name {
      color: ${theme.white} !important;
    }
    .commercial-list__item.commercial-list__item--active, .commercial-list__item:hover {
      background: ${theme.darkerGrey} !important;
    }
    .commercial-list__price {
      color: ${theme.white} !important;
    }

    .ad-contacts__title {
      color: ${theme.white} !important;
    }
    .ad-user__position {
      color: ${theme.grey} !important;
    }
    .ad-user::after {
      background: ${theme.darkerGrey} !important;
    }

    .island--blogs_entries {
      background: ${theme.darkerGrey} !important;
    }

    .subsite_subscribe_button__main .ui-button {
      background: ${theme.lightGrey} !important;
    }

    #v_apple, #v_android {
      fill: white;
    }

    .page--plus .plus-features {
      background: ${theme.darkerGrey} !important;
    }
    .page--plus .ui-button--5 {
      color: ${theme.white} !important;
      background: ${theme.lightGrey} !important;
    }

    .avatar-grid__item {
      background: ${theme.darkerGrey} !important;
    }
    .comments__item__more.comments__item__more--inner {
      background: transparent !important;
    }
    .comments_updates {
      background: ${theme.darkerGrey} !important;
    }
    .comments_updates #updates_arrows {
      background: ${theme.white} !important;
    }
    #updates_arrows {
      stroke: white;
      fill: white;
    }

    .notify-new-items-label {
      background: ${theme.darkerGrey} !important;
    }

    .block-incut {
      background: ${theme.darkerGrey} !important;
    }

    .boost_panel.l-block {
      background: ${theme.darkerGrey} !important;
    }

    .boost_panel.l-block .ui-button {
      background: ${theme.grey} !important;
      color: ${theme.white} !important;
    }

    .quiz {
      background: ${theme.darkerGrey} !important;
    }
    .comments__item__space--pinned, .comments__item__space--new, .comments__item__space--highlighted {
      background: ${theme.darkerGrey} !important;
    }

    .thesis__custom_button {
      color: ${theme.white} !important;
    }
  `;

  const onLoaded = async () => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerHTML = defaultStyles;
    document.head.appendChild(styleSheet);

    const root = document.documentElement;
    const test = "#0d7bcd";
    root.style.setProperty("--color-text-main", test);
    root.style.setProperty("--color-text-gray", test);
    root.style.setProperty("--color-text-blue-hover", test);
    root.style.setProperty("--color-line-gray", test);
    root.style.setProperty("--color-text-negative", test);
    root.style.setProperty("--color-bg-gray", test);
    root.style.setProperty("--color-text-gray", test);
    root.style.setProperty("--color-text-gray", test);
    root.style.setProperty("--color-background", test);
    root.style.setProperty("--color-text", test);

    console.log("WORKES");
  };

  onLoaded();
})();