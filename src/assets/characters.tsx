export const characters: Record<string, string | JSX.Element> = {
  logo: (
    <svg width="88" height="18" viewBox="0 0 88 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.184 0.8V2.6C5.016 1.944 5.92 1.44 6.896 1.088C7.872 0.736 8.912 0.56 10.016 0.56H10.616C11.832 0.56 12.928 0.696 13.904 0.967999C14.896 1.24 15.736 1.64 16.424 2.168C17.128 2.696 17.664 3.352 18.032 4.136C18.416 4.92 18.608 5.824 18.608 6.848V7.832C18.608 8.856 18.416 9.76 18.032 10.544C17.664 11.328 17.128 11.984 16.424 12.512C15.736 13.04 14.896 13.44 13.904 13.712C12.928 13.984 11.832 14.12 10.616 14.12H10.016C8.656 14.12 7.488 13.92 6.512 13.52C5.536 13.104 4.76 12.552 4.184 11.864V17.84H0.92V0.8H4.184ZM15.32 6.872C15.32 5.72 14.904 4.832 14.072 4.208C13.24 3.584 12.112 3.272 10.688 3.272H10.016C9.36 3.272 8.768 3.312 8.24 3.392C7.728 3.472 7.24 3.608 6.776 3.8C6.328 3.992 5.896 4.24 5.48 4.544C5.064 4.848 4.632 5.224 4.184 5.672V8.648C4.824 9.464 5.648 10.128 6.656 10.64C7.664 11.152 8.784 11.408 10.016 11.408H10.688C12.112 11.408 13.24 11.096 14.072 10.472C14.904 9.848 15.32 8.96 15.32 7.808V6.872ZM29.3673 14.12C28.1513 14.12 27.0153 13.976 25.9593 13.688C24.9193 13.384 24.0153 12.96 23.2473 12.416C22.4793 11.856 21.8713 11.176 21.4233 10.376C20.9913 9.576 20.7753 8.664 20.7753 7.64V7.088C20.7753 6.064 20.9913 5.152 21.4233 4.352C21.8713 3.552 22.4793 2.88 23.2473 2.336C24.0153 1.776 24.9193 1.352 25.9593 1.064C27.0153 0.759999 28.1513 0.607999 29.3673 0.607999H30.5433C31.7593 0.607999 32.8873 0.759999 33.9273 1.064C34.9673 1.352 35.8713 1.776 36.6393 2.336C37.4073 2.88 38.0073 3.552 38.4393 4.352C38.8873 5.152 39.1113 6.064 39.1113 7.088V7.64C39.1113 8.664 38.8873 9.576 38.4393 10.376C38.0073 11.176 37.4073 11.856 36.6393 12.416C35.8713 12.96 34.9673 13.384 33.9273 13.688C32.8873 13.976 31.7593 14.12 30.5433 14.12H29.3673ZM30.6153 11.384C31.3193 11.384 31.9833 11.296 32.6073 11.12C33.2313 10.944 33.7753 10.696 34.2393 10.376C34.7193 10.04 35.0953 9.648 35.3673 9.2C35.6553 8.736 35.7993 8.216 35.7993 7.64V7.088C35.7993 6.512 35.6553 6 35.3673 5.552C35.0953 5.088 34.7193 4.696 34.2393 4.376C33.7753 4.04 33.2313 3.784 32.6073 3.608C31.9833 3.432 31.3193 3.344 30.6153 3.344H29.2953C28.5913 3.344 27.9193 3.432 27.2793 3.608C26.6553 3.784 26.1033 4.04 25.6233 4.376C25.1593 4.696 24.7833 5.088 24.4953 5.552C24.2233 6 24.0873 6.512 24.0873 7.088V7.64C24.0873 8.216 24.2233 8.736 24.4953 9.2C24.7833 9.648 25.1593 10.04 25.6233 10.376C26.1033 10.696 26.6553 10.944 27.2793 11.12C27.9193 11.296 28.5913 11.384 29.2953 11.384H30.6153ZM44.0666 0.8L49.9946 10.592L55.8506 0.8H59.5466L51.3626 14.12H48.6746L40.3226 0.8H44.0666Z" fill="#9549FF"/>
    <g clipPath="url(#clip0_1_3)">
    <path d="M86.1394 0.359842C84.8689 -0.269564 83.1854 -0.0469263 81.4881 0.821919C81.2865 0.640589 81.0589 0.485863 80.8051 0.359842C79.5345 -0.269564 77.8511 -0.0469263 76.1538 0.821919C75.9522 0.640589 75.7245 0.485863 75.4707 0.359842C72.919 -0.90387 68.6994 1.26789 66.0457 5.21165C63.392 9.15541 63.3088 13.3764 65.8605 14.6401C67.131 15.2695 68.8145 15.0469 70.5118 14.1781C70.7133 14.3594 70.941 14.5141 71.1948 14.6401C72.4653 15.2695 74.1488 15.0469 75.8461 14.1781C76.0477 14.3594 76.2753 14.5141 76.5291 14.6401C79.0808 15.9038 83.2997 13.7314 85.9542 9.78832C88.6079 5.84456 88.6911 1.62355 86.1394 0.359842Z" fill="#7E16FD"/>
    <ellipse cx="81.6504" cy="4.42608" rx="2.47781" ry="3.01983" fill="white"/>
    <ellipse cx="82.4764" cy="3.58731" rx="1.3215" ry="1.50991" fill="#231F20"/>
    <ellipse cx="78.0163" cy="4.42608" rx="2.47781" ry="3.01983" fill="white"/>
    <ellipse cx="78.8422" cy="3.58731" rx="1.3215" ry="1.50991" fill="#231F20"/>
    </g>
    <defs>
    <clipPath id="clip0_1_3">
    <rect width="24" height="15" fill="white" transform="translate(64)"/>
    </clipPath>
    </defs>
    </svg>
  ),
  type1: (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_653_6057)">
    <path d="M92.2471 20.4763C86.9532 17.8941 79.9389 18.8075 72.8668 22.3719C72.0269 21.628 71.0783 20.9933 70.0209 20.4763C64.727 17.8941 57.7127 18.8075 50.6405 22.3719C49.8007 21.628 48.8521 20.9933 47.7947 20.4763C37.1627 15.2918 19.581 24.2016 8.52396 40.381C-2.53305 56.5604 -2.87985 73.8772 7.75215 79.0616C13.046 81.6438 20.0604 80.7304 27.1325 77.1659C27.9723 77.9098 28.9209 78.5446 29.9784 79.0616C35.2723 81.6438 42.2866 80.7304 49.3587 77.1659C50.1985 77.9098 51.1472 78.5446 52.2046 79.0616C62.8366 84.246 80.4149 75.3334 91.4753 59.1569C102.532 42.9775 102.879 25.6607 92.2471 20.4763Z" fill="#7E16FD"/>
    <ellipse cx="73.5426" cy="37.158" rx="10.3241" ry="12.389" fill="white"/>
    <ellipse cx="76.984" cy="33.7166" rx="5.5062" ry="6.19448" fill="#231F20"/>
    <ellipse cx="58.4005" cy="37.158" rx="10.3241" ry="12.389" fill="white"/>
    <ellipse cx="61.8421" cy="33.7166" rx="5.5062" ry="6.19448" fill="#231F20"/>
    </g>
    <defs>
    <clipPath id="clip0_653_6057">
    <rect width="100" height="100" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  ),
  type2: (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M48.0783 12.2568C58.8515 12.5138 69.6901 12.8102 78.3917 18.7593C88.66 25.7796 97.2178 35.3529 99.078 47.1247C101.211 60.6227 100.337 76.8563 88.9124 85.3347C77.8252 93.5625 62.2202 85.4335 48.0783 84.9712C34.8663 84.5392 20.0758 90.7647 10.0013 82.7548C-0.363655 74.5141 -0.719721 59.8025 0.476304 47.1247C1.55972 35.6406 6.47705 24.3814 16.1787 17.2751C25.0051 10.8098 36.8729 11.9894 48.0783 12.2568Z" fill="#0DE781"/>
    <ellipse cx="52.9579" cy="34.8113" rx="10.5036" ry="12.8013" fill="white"/>
    <ellipse cx="56.4588" cy="33.3783" rx="5.6019" ry="6.40063" fill="#231F20"/>
    <ellipse cx="37.5526" cy="34.8113" rx="10.5036" ry="12.8013" fill="white"/>
    <ellipse cx="41.054" cy="33.3783" rx="5.6019" ry="6.40063" fill="#231F20"/>
    </svg>
  ),
  type3: (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15.005L60.6834 6L66.1966 18.5196L79.9246 14.8159L79.184 28.3657L93.248 30.6936L86.3909 42.6003L98 50.4967L86.3909 58.3997L93.248 70.3064L79.184 72.6343L79.9246 86.1841L66.1966 82.4804L60.6834 95L50 85.995L39.3166 95L33.8034 82.4804L20.0754 86.1841L20.816 72.6343L6.752 70.3064L13.6091 58.3997L2 50.4967L13.6091 42.6003L6.752 30.6936L20.816 28.3657L20.0754 14.8159L33.8034 18.5196L39.3166 6L50 15.005Z" fill="#FDD700"/>
    <ellipse cx="10.9237" cy="13.3" rx="10.9237" ry="13.3" transform="matrix(-1 0 0 1 52.8474 35)" fill="white"/>
    <ellipse cx="5.82597" cy="6.65" rx="5.82597" ry="6.65" transform="matrix(-1 0 0 1 44.1086 40.1613)" fill="#231F20"/>
    <ellipse cx="10.9237" cy="13.3" rx="10.9237" ry="13.3" transform="matrix(-1 0 0 1 68.8689 35)" fill="white"/>
    <ellipse cx="5.82597" cy="6.65" rx="5.82597" ry="6.65" transform="matrix(-1 0 0 1 60.1299 40.1613)" fill="#231F20"/>
    </svg>
  ),
  type4: (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_653_6060)">
    <path d="M100 50.0021C100 39.5618 89.6149 30.4717 74.2708 25.7335C69.5325 10.3851 60.4382 0 50.0021 0C39.5661 0 30.4717 10.3851 25.7335 25.7292C10.3851 30.4717 0 39.5618 0 50.0021C0 60.4424 10.3851 69.5325 25.7292 74.2708C30.4675 89.6192 39.5576 100 49.9979 100C60.4382 100 69.5283 89.6149 74.2665 74.2708C89.6149 69.5325 99.9958 60.4424 99.9958 50.0021H100Z" fill="#00FBFF"/>
    <ellipse cx="10.3242" cy="13.4215" rx="10.3242" ry="13.4215" transform="matrix(-1 0 0 1 42.7637 31.25)" fill="white"/>
    <ellipse cx="5.50624" cy="6.71073" rx="5.50624" ry="6.71073" transform="matrix(-1 0 0 1 34.5042 34.2325)" fill="#231F20"/>
    <ellipse cx="10.3242" cy="13.4215" rx="10.3242" ry="13.4215" transform="matrix(-1 0 0 1 57.906 31.25)" fill="white"/>
    <ellipse cx="5.50624" cy="6.71073" rx="5.50624" ry="6.71073" transform="matrix(-1 0 0 1 49.6465 34.2325)" fill="#231F20"/>
    </g>
    <defs>
    <clipPath id="clip0_653_6060">
    <rect width="100" height="100" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  ),
  type5: (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_653_6061)">
    <path d="M100 50.0021C100 43.7779 96.3104 38.0334 90.0734 33.4013C91.2071 25.7207 89.755 19.0464 85.3522 14.6436C80.9493 10.2407 74.2793 8.78869 66.5945 9.9223C61.9709 3.68955 56.2264 0 50.0021 0C43.7779 0 38.0334 3.68955 33.4013 9.92655C25.7207 8.79293 19.0464 10.245 14.6436 14.6478C10.2407 19.0507 8.78869 25.7207 9.9223 33.4055C3.68955 38.0291 0 43.7779 0 50.0021C0 56.2264 3.68955 61.9709 9.92655 66.603C8.79293 74.2835 10.245 80.9578 14.6478 85.3607C19.0507 89.7635 25.7207 91.2156 33.4055 90.0819C38.0334 96.3147 43.7821 100.008 50.0064 100.008C56.2306 100.008 61.9751 96.3189 66.6072 90.0819C74.2878 91.2156 80.9621 89.7635 85.3649 85.3607C89.7678 80.9578 91.2198 74.2878 90.0862 66.603C96.3189 61.9751 100.013 56.2264 100.013 50.0021H100Z" fill="#E94E3B"/>
    <ellipse cx="58.5304" cy="46.6316" rx="11.034" ry="14" fill="white"/>
    <ellipse cx="62.2081" cy="45.0645" rx="5.88482" ry="7" fill="#231F20"/>
    <ellipse cx="42.3473" cy="46.6316" rx="11.034" ry="14" fill="white"/>
    <ellipse cx="46.0254" cy="45.0645" rx="5.88482" ry="7" fill="#231F20"/>
    </g>
    <defs>
    <clipPath id="clip0_653_6061">
    <rect width="100" height="100" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  ),
  type6: (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M91.3251 50C96.7991 44.8698 100 38.6678 100 31.9876C100 14.3213 77.6142 0 50 0C22.3858 0 0 14.3213 0 31.9876C0 38.6678 3.20087 44.8698 8.67495 50C3.20087 55.1302 0 61.3322 0 68.0124C0 85.6787 22.3858 100 50 100C77.6142 100 100 85.6787 100 68.0124C100 61.3322 96.7991 55.1302 91.3251 50Z" fill="#1B76FF"/>
    <ellipse cx="11.0692" cy="13.2006" rx="11.0692" ry="13.2006" transform="matrix(-1 0 0 1 45.8499 30.7357)" fill="white"/>
    <ellipse cx="5.9036" cy="6.6003" rx="5.9036" ry="6.6003" transform="matrix(-1 0 0 1 36.9944 33.6692)" fill="#231F20"/>
    <ellipse cx="11.0692" cy="13.2006" rx="11.0692" ry="13.2006" transform="matrix(-1 0 0 1 62.0847 30.7357)" fill="white"/>
    <ellipse cx="5.9036" cy="6.6003" rx="5.9036" ry="6.6003" transform="matrix(-1 0 0 1 53.2292 33.6692)" fill="#231F20"/>
    </svg>
  ),
};

