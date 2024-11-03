import React from "react";

interface Props {
  id: string;
}

export const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "header-logo":
      return (
        <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
            fill="#4793FF"
          />
          <path
            d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3234 11.1622C48.3234 11.1622 46.5495 14.0707 44.5393 12.8754L41.3829 9.79712L41.1963 14.2822L8.78807 46.265L27.0688 64.5458C28.8351 64.843 30.6491 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z"
            fill="#424FDD"
          />
          <path
            d="M58.3388 29.0023L59.7103 28.1252L58.2387 27.1841C56.6467 26.1659 56.217 24.03 57.2915 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4523 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4811 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1295 40.7095C31.9753 40.3038 33.7893 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4815 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.478 42.9594 47.0326 44.0339L48.4694 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9671 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023V29.0023Z"
            fill="#FDBF2D"
          />
          <path
            d="M57.4082 33.734L58.3451 35.0645L56.6275 35.3781C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z"
            fill="#FD9827"
          />
          <path
            d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5368 21.0296 28.5368 28.1243C28.5368 35.2191 34.2883 40.9705 41.383 40.9705Z"
            fill="#FFE05F"
          />
          <path
            d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239V28.1239Z"
            fill="#F9CB0D"
          />
          <path
            d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33776 32.5756 5.33776 38.4361C5.33776 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242V32.242Z"
            fill="white"
          />
          <path
            d="M50.9302 40.6436C50.9302 45.2846 47.1683 49.0467 42.5272 49.0467H28.134V18.9098C28.5015 18.876 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3874 41.5969 31.2067C41.5969 31.5754 41.5795 31.9396 41.5477 32.2996C41.8696 32.2626 42.1956 32.2407 42.5272 32.2407C47.1683 32.2407 50.9302 36.0036 50.9302 40.6436V40.6436Z"
            fill="#DAEFEC"
          />
        </svg>
      );
    case "change-theme":
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 7.01454V27.7083C12.673 27.7083 8.75004 23.8729 8.75004 19.1479C8.75004 16.8729 9.65421 14.7291 11.3021 13.1104L17.5 7.01454ZM17.5 2.91663L9.26046 11.025C7.14587 13.1104 5.83337 15.9833 5.83337 19.1479C5.83337 25.4916 11.0542 30.625 17.5 30.625C23.9459 30.625 29.1667 25.4916 29.1667 19.1479C29.1667 15.9833 27.8542 13.1104 25.7396 11.025L17.5 2.91663Z"
            fill="#4793FF"
          />
        </svg>
      );
    case "sun":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 288 282"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3_1)">
            <g filter="url(#filter1_df_3_1)">
              <path
                d="M141 248C200.094 248 248 200.094 248 141C248 81.9055 200.094 34 141 34C81.9055 34 34 81.9055 34 141C34 200.094 81.9055 248 141 248Z"
                fill="#FA9E42"
              />
            </g>
            <path
              d="M141 275C215.006 275 275 215.006 275 141C275 66.9938 215.006 7 141 7C66.9938 7 7 66.9938 7 141C7 215.006 66.9938 275 141 275Z"
              stroke="#FA9E42"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="1 66"
            />
            <g filter="url(#filter2_f_3_1)">
              <path
                d="M129.57 119.799C167.001 99.9184 188.174 66.5376 176.863 45.2411C165.551 23.9447 126.038 22.7972 88.6078 42.6782C51.1773 62.5591 30.0037 95.94 41.3152 117.236C52.6267 138.533 92.1398 139.68 129.57 119.799Z"
                fill="#F8E36F"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3_1"
              x="0"
              y="0"
              width="282"
              height="282"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_3_1"
              />
            </filter>
            <filter
              id="filter1_df_3_1"
              x="14"
              y="6"
              width="274"
              height="274"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_1"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_3_1"
              />
            </filter>
            <filter
              id="filter2_f_3_1"
              x="18.2694"
              y="8.48682"
              width="181.639"
              height="145.504"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_3_1"
              />
            </filter>
          </defs>
        </svg>
      );
    case "clear_sky":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1602)">
            <path
              d="M109 197C153.735 197 190 160.735 190 116C190 71.2649 153.735 35 109 35C64.2649 35 28 71.2649 28 116C28 160.735 64.2649 197 109 197Z"
              fill="#FA9E42"
            />
          </g>
          <g filter="url(#filter1_f_7_1602)">
            <path
              d="M109 216C164.228 216 209 171.228 209 116C209 60.7715 164.228 16 109 16C53.7715 16 9 60.7715 9 116C9 171.228 53.7715 216 109 216Z"
              stroke="#FA9E42"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="1 66"
            />
          </g>
          <g filter="url(#filter2_f_7_1602)">
            <path
              d="M100.4 99.9432C128.685 84.9199 144.685 59.6952 136.137 43.6022C127.59 27.5092 97.7311 26.6419 69.4464 41.6652C41.1617 56.6884 25.1617 81.9132 33.7094 98.0062C42.2571 114.099 72.1157 114.966 100.4 99.9432Z"
              fill="#F8E36F"
            />
          </g>
          <g filter="url(#filter3_df_7_1602)">
            <g filter="url(#filter4_d_7_1602)">
              <path
                d="M236.294 269.765C234.36 269.92 232.408 269.999 230.437 270H92.9126C83.4464 270.035 74.0663 268.201 65.3105 264.603C56.5546 261.005 48.5953 255.714 41.8892 249.032C35.183 242.351 29.8619 234.412 26.2312 225.669C22.6004 216.927 20.7314 207.554 20.7314 198.087C20.7314 188.621 22.6004 179.248 26.2312 170.506C29.8619 161.763 35.183 153.824 41.8892 147.143C48.5953 140.461 56.5546 135.17 65.3105 131.572C74.0663 127.974 83.4464 126.14 92.9126 126.175H144.189C160.813 89.6 199.1 64 243.673 64C303.5 64 352 110.115 352 167C352 223.885 303.5 270 243.673 270C241.193 270 238.733 269.922 236.294 269.765Z"
                fill="url(#paint0_linear_7_1602)"
              />
              <path
                d="M243.673 269C250.958 269 258.239 268.302 265.313 266.926C272.206 265.585 278.987 263.584 285.465 260.978C291.826 258.42 297.961 255.254 303.699 251.568C309.382 247.917 314.726 243.725 319.583 239.107C324.438 234.49 328.846 229.411 332.684 224.009C336.558 218.557 339.886 212.728 342.574 206.686C345.311 200.532 347.413 194.093 348.822 187.547C350.267 180.831 351 173.917 351 167C351 160.082 350.267 153.169 348.822 146.452C347.413 139.906 345.311 133.467 342.574 127.314C339.886 121.272 336.558 115.443 332.684 109.991C328.846 104.589 324.438 99.5095 319.583 94.8928C314.726 90.2752 309.382 86.0829 303.699 82.4323C297.961 78.7461 291.826 75.5801 285.465 73.0221C278.987 70.4165 272.206 68.4154 265.313 67.0742C258.239 65.6979 250.958 65 243.673 65C222.302 65 201.663 70.9523 183.986 82.2135C175.466 87.6418 167.809 94.1939 161.229 101.688C154.608 109.229 149.181 117.607 145.099 126.588L144.832 127.175H144.188H92.9127C83.3391 127.175 74.0525 129.049 65.3106 132.747C61.109 134.524 57.0564 136.724 53.2655 139.285C49.5103 141.822 45.9791 144.735 42.7699 147.945C39.5607 151.154 36.6472 154.685 34.1102 158.44C31.5491 162.231 29.3495 166.284 27.5723 170.485C23.8748 179.227 22 188.514 22 198.087C22 207.661 23.8748 216.948 27.5723 225.689C29.3495 229.891 31.5491 233.944 34.1102 237.735C36.6472 241.49 39.5607 245.021 42.7699 248.23C45.9791 251.439 49.5103 254.353 53.2655 256.89C57.0564 259.451 61.109 261.651 65.3106 263.428C74.0525 267.125 83.3391 269 92.9127 269H230.437C232.36 269 234.304 268.922 236.214 268.768L236.286 268.762L236.358 268.767C238.778 268.922 241.238 269 243.673 269ZM243.673 270C241.193 270 238.732 269.921 236.294 269.765C234.364 269.92 232.408 270 230.437 270H92.9127C53.1966 270 21 237.803 21 198.087C21 158.371 53.1966 126.175 92.9127 126.175H144.188C160.813 89.5954 199.098 64 243.673 64C303.5 64 352 110.115 352 167C352 223.885 303.5 270 243.673 270Z"
                fill="white"
                fillOpacity="0.49"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1602"
              x="24"
              y="31"
              width="170"
              height="170"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1602"
              />
            </filter>
            <filter
              id="filter1_f_7_1602"
              x="2"
              y="9"
              width="214"
              height="214"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_1602"
              />
            </filter>
            <filter
              id="filter2_f_7_1602"
              x="1.4082"
              y="0.941406"
              width="167.031"
              height="139.726"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="15"
                result="effect1_foregroundBlur_7_1602"
              />
            </filter>
            <filter
              id="filter3_df_7_1602"
              x="0.731445"
              y="36"
              width="391.269"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1602"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1602"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1602"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1602"
              x1="154.895"
              y1="89.9561"
              x2="220.937"
              y2="281.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.565" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "mainly_cloudy":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_df_7_2015)">
            <g filter="url(#filter1_d_7_2015)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_2015)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.581 230.926C271.475 229.585 278.255 227.584 284.733 224.978C291.094 222.42 297.229 219.254 302.967 215.568C308.65 211.917 313.994 207.725 318.851 203.107C323.706 198.49 328.114 193.411 331.952 188.009C335.826 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.681 158.093 348.09 151.547C349.535 144.831 350.268 137.917 350.268 131C350.268 124.082 349.535 117.169 348.09 110.452C346.681 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.826 79.4433 331.952 73.991C328.114 68.5893 323.706 63.5095 318.851 58.8928C313.994 54.2752 308.65 50.0829 302.967 46.4323C297.229 42.7461 291.094 39.5801 284.733 37.0221C278.255 34.4165 271.475 32.4154 264.581 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.254 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1807C82.6072 91.1747 73.3205 93.0495 64.5787 96.747C60.3771 98.5242 56.3245 100.724 52.5336 103.285C48.7784 105.822 45.2472 108.735 42.038 111.945C38.8288 115.154 35.9152 118.685 33.3783 122.44C30.8172 126.231 28.6175 130.284 26.8404 134.485C23.1429 143.227 21.2681 152.514 21.2681 162.087C21.2681 171.661 23.1429 180.948 26.8404 189.689C28.6175 193.891 30.8172 197.944 33.3783 201.735C35.9152 205.49 38.8288 209.021 42.038 212.23C45.2472 215.439 48.7784 218.353 52.5336 220.89C56.3245 223.451 60.3771 225.651 64.5787 227.428C73.3205 231.125 82.6072 233 92.1807 233H229.705C231.628 233 233.572 232.922 235.482 232.768L235.554 232.762L235.626 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.461 234 238 233.921 235.562 233.765C233.632 233.92 231.676 234 229.705 234H92.1807C52.4646 234 20.2681 201.803 20.2681 162.087C20.2681 122.371 52.4646 90.1747 92.1807 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.768 28 351.268 74.1151 351.268 131C351.268 187.885 302.768 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter1_d_7_2015"
              x="0"
              y="0"
              width="391.268"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_2015"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_2015"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_2015"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "overcast":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 332 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M215.562 205.765C213.629 205.92 211.676 205.999 209.705 206H72.1812C62.7149 206.035 53.3348 204.201 44.579 200.603C35.8232 197.005 27.8639 191.714 21.1577 185.032C14.4516 178.351 9.13049 170.412 5.49974 161.669C1.86898 152.927 0 143.554 0 134.087C0 124.621 1.86898 115.248 5.49974 106.506C9.13049 97.7633 14.4516 89.8238 21.1577 83.1426C27.8639 76.4614 35.8232 71.17 44.579 67.5718C53.3348 63.9737 62.7149 62.1397 72.1812 62.175H123.457C140.081 25.6 178.368 0 222.941 0C282.768 0 331.268 46.115 331.268 103C331.268 159.885 282.768 206 222.941 206C220.461 206 218.001 205.922 215.562 205.765Z"
            fill="url(#paint0_linear_4_3)"
          />
          <path
            d="M222.941 205C230.227 205 237.508 204.302 244.582 202.926C251.475 201.585 258.255 199.584 264.734 196.978C271.094 194.42 277.229 191.254 282.967 187.568C288.65 183.917 293.994 179.725 298.851 175.107C303.706 170.49 308.114 165.411 311.953 160.009C315.827 154.557 319.154 148.728 321.842 142.686C324.579 136.532 326.681 130.093 328.09 123.547C329.535 116.831 330.268 109.917 330.268 103C330.268 96.0819 329.535 89.1687 328.09 82.4522C326.681 75.9062 324.579 69.4673 321.842 63.3142C319.154 57.2716 315.827 51.4433 311.953 45.991C308.114 40.5893 303.706 35.5095 298.851 30.8928C293.994 26.2752 288.65 22.0829 282.967 18.4323C277.229 14.7461 271.094 11.5801 264.734 9.02208C258.255 6.41654 251.475 4.41537 244.582 3.07421C237.508 1.69788 230.227 1 222.941 1C201.57 1 180.931 6.95233 163.255 18.2135C154.734 23.6418 147.078 30.1939 140.498 37.6878C133.876 45.2291 128.449 53.6069 124.367 62.5885L124.1 63.1747H123.457H72.1809C62.6073 63.1747 53.3206 65.0495 44.5788 68.747C40.3772 70.5242 36.3246 72.7238 32.5337 75.2849C28.7785 77.8219 25.2473 80.7354 22.0381 83.9446C18.8289 87.1538 15.9154 90.685 13.3784 94.4402C10.8173 98.2311 8.61765 102.284 6.84048 106.485C3.14298 115.227 1.26819 124.514 1.26819 134.087C1.26819 143.661 3.14298 152.948 6.84048 161.689C8.61765 165.891 10.8173 169.944 13.3784 173.735C15.9154 177.49 18.8289 181.021 22.0381 184.23C25.2473 187.439 28.7785 190.353 32.5337 192.89C36.3246 195.451 40.3772 197.651 44.5788 199.428C53.3206 203.125 62.6073 205 72.1809 205H209.705C211.628 205 213.572 204.922 215.482 204.768L215.554 204.762L215.626 204.767C218.046 204.922 220.507 205 222.941 205ZM222.941 206C220.461 206 218 205.921 215.563 205.765C213.632 205.92 211.676 206 209.705 206H72.1809C32.4648 206 0.268188 173.803 0.268188 134.087C0.268188 94.3713 32.4648 62.1747 72.1809 62.1747H123.457C140.081 25.5954 178.366 0 222.941 0C282.768 0 331.268 46.1151 331.268 103C331.268 159.885 282.768 206 222.941 206Z"
            fill="white"
            fillOpacity="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4_3"
              x1="134.164"
              y1="25.9561"
              x2="200.206"
              y2="217.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "fog":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 262 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3_65)">
            <path
              d="M12.311 69.6249C12.311 69.6249 22.469 78.7689 30.406 78.4669C40.357 78.0789 42.061 70.1109 51.282 69.6249C60.933 69.7249 61.918 77.9869 72.382 78.4669C81.753 78.3549 85.727 69.7749 94.657 69.6249C103.587 69.4749 113.115 78.4669 113.115 78.4669"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_3_65)">
            <path
              d="M52.311 24.6448C52.311 24.6448 67.011 37.8808 78.504 37.4448C92.904 36.8828 95.375 25.3448 108.722 24.6448C122.692 24.7838 124.122 36.7448 139.261 37.4448C152.828 37.2838 158.576 24.8628 171.508 24.6448C184.44 24.4268 198.227 37.4438 198.227 37.4438"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter2_f_3_65)">
            <path
              d="M103.311 110.645C103.311 110.645 118.011 123.881 129.504 123.445C143.904 122.883 146.375 111.345 159.722 110.645C173.692 110.784 175.122 122.745 190.261 123.445C203.828 123.284 209.576 110.863 222.508 110.645C235.44 110.427 249.227 123.444 249.227 123.444"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter3_f_3_65)">
            <path
              d="M19.311 155.645C19.311 155.645 34.011 168.881 45.504 168.445C59.904 167.883 62.375 156.345 75.722 155.645C89.692 155.784 91.122 167.745 106.261 168.445C119.828 168.284 125.576 155.863 138.508 155.645C151.44 155.427 165.227 168.444 165.227 168.444"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter4_f_3_65)">
            <path
              d="M170 71L163 78"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M163 71L170 78"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M227.02 152L222 157.02"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M222 152L227.02 157.02"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M12.02 127L7 132.02"
              stroke="#713FFD"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M7 127L12.02 132.02"
              stroke="#713FFD"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24.02 4L19 9.02"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M19 4L24.02 9.02"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M218.02 9L213 14.02"
              stroke="#713FFD"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M213 9L218.02 14.02"
              stroke="#713FFD"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_65"
              x="0.310913"
              y="57.6226"
              width="124.804"
              height="32.8516"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_65"
              />
            </filter>
            <filter
              id="filter1_f_3_65"
              x="40.311"
              y="12.6421"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_65"
              />
            </filter>
            <filter
              id="filter2_f_3_65"
              x="91.3109"
              y="98.6421"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_65"
              />
            </filter>
            <filter
              id="filter3_f_3_65"
              x="7.31091"
              y="143.642"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_65"
              />
            </filter>
            <filter
              id="filter4_f_3_65"
              x="3"
              y="0"
              width="228.02"
              height="161.02"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_3_65"
              />
            </filter>
          </defs>
        </svg>
      );
    case "drizzle":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 268 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3_87)">
            <path
              d="M115.841 29.6248C115.841 29.6248 125.605 42.8608 133.236 42.4248C142.802 41.8628 144.436 30.3248 153.304 29.6248C162.582 29.7638 163.529 41.7248 173.585 42.4248C182.595 42.2638 186.412 29.8428 195.001 29.6248C203.59 29.4068 212.745 42.4248 212.745 42.4248"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_3_87)">
            <path
              d="M109.828 109.625C109.828 109.625 124.528 122.861 136.021 122.425C150.421 121.863 152.892 110.325 166.239 109.625C180.209 109.764 181.639 121.725 196.778 122.425C210.345 122.264 216.093 109.843 229.025 109.625C241.957 109.407 255.744 122.424 255.744 122.424"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter2_f_3_87)">
            <path
              d="M25.828 154.625C25.828 154.625 40.528 167.861 52.021 167.425C66.421 166.863 68.892 155.325 82.239 154.625C96.209 154.764 97.639 166.725 112.778 167.425C126.345 167.264 132.093 154.843 145.025 154.625C157.957 154.407 171.744 167.424 171.744 167.424"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter3_f_3_87)">
            <path
              d="M176.517 69.98L169.517 76.98"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M169.517 69.98L176.517 76.98"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M233.537 150.98L228.517 156"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M228.517 150.98L233.537 156"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M18.537 125.98L13.517 131"
              stroke="#D0D0D0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M13.517 125.98L18.537 131"
              stroke="#D0D0D0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M224.537 7.97998L219.517 13"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M219.517 7.97998L224.537 13"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter4_f_3_87)">
            <path
              d="M25.677 4.00001C27.622 4.02201 47.354 34.831 47.354 46.8C47.3544 52.5491 45.071 58.0629 41.006 62.1284C36.9411 66.1939 31.4276 68.4781 25.6785 68.4785C19.9294 68.4789 14.4156 66.1955 10.3501 62.1305C6.2846 58.0656 4.0004 52.5521 4 46.803C4 34.829 23.732 3.97901 25.677 4.00001Z"
              fill="#42A0F0"
            />
            <path
              d="M9.14943 54.9056C11.3154 55.5678 14.0682 52.8438 15.2979 48.8214C16.5277 44.799 15.7688 41.0014 13.6028 40.3392C11.4369 39.677 8.6841 42.4009 7.45433 46.4234C6.22455 50.4458 6.98348 54.2434 9.14943 54.9056Z"
              fill="white"
            />
            <path
              d="M69.432 59C70.817 59.015 84.864 80.948 84.864 89.471C84.864 93.5638 83.2381 97.489 80.3441 100.383C77.45 103.277 73.5248 104.903 69.432 104.903C65.3392 104.903 61.414 103.277 58.5199 100.383C55.6259 97.489 54 93.5638 54 89.471C54 80.948 68.047 58.985 69.432 59Z"
              fill="#42A0F0"
            />
            <path
              d="M57.6659 95.239C59.2081 95.7105 61.168 93.7713 62.0435 90.9077C62.919 88.044 62.3786 85.3404 60.8364 84.8689C59.2941 84.3974 57.3342 86.3366 56.4587 89.2002C55.5832 92.0639 56.1237 94.7675 57.6659 95.239Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_87"
              x="103.841"
              y="17.6201"
              width="120.905"
              height="36.8154"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_87"
              />
            </filter>
            <filter
              id="filter1_f_3_87"
              x="97.8279"
              y="97.6221"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_87"
              />
            </filter>
            <filter
              id="filter2_f_3_87"
              x="13.8279"
              y="142.622"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_87"
              />
            </filter>
            <filter
              id="filter3_f_3_87"
              x="9.51697"
              y="3.97998"
              width="228.02"
              height="156.02"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_3_87"
              />
            </filter>
            <filter
              id="filter4_f_3_87"
              x="0"
              y="0"
              width="88.864"
              height="108.903"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_87"
              />
            </filter>
          </defs>
        </svg>
      );
    case "freezing_drizzle":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 293 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3_112)">
            <path
              d="M140.663 43.6721C140.663 43.6721 150.427 56.9081 158.058 56.4721C167.624 55.9101 169.258 44.3721 178.126 43.6721C187.404 43.8111 188.351 55.7721 198.407 56.4721C207.417 56.3111 211.234 43.8901 219.823 43.6721C228.412 43.4541 237.567 56.4721 237.567 56.4721"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_3_112)">
            <path
              d="M134.65 123.672C134.65 123.672 149.35 136.908 160.843 136.472C175.243 135.91 177.714 124.372 191.061 123.672C205.031 123.811 206.461 135.772 221.6 136.472C235.167 136.311 240.915 123.89 253.847 123.672C266.779 123.454 280.566 136.471 280.566 136.471"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter2_f_3_112)">
            <path
              d="M50.6499 168.672C50.6499 168.672 65.3499 181.908 76.8429 181.472C91.2429 180.91 93.7139 169.372 107.061 168.672C121.031 168.811 122.461 180.772 137.6 181.472C151.167 181.311 156.915 168.89 169.847 168.672C182.779 168.454 196.566 181.471 196.566 181.471"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter3_f_3_112)">
            <path
              d="M201.339 84.0269L194.339 91.0269"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M194.339 84.0269L201.339 91.0269"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M258.359 165.027L253.339 170.047"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M253.339 165.027L258.359 170.047"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M43.3589 140.027L38.3389 145.047"
              stroke="#D0D0D0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M38.3389 140.027L43.3589 145.047"
              stroke="#D0D0D0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M249.359 22.0269L244.339 27.0469"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M244.339 22.0269L249.359 27.0469"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter4_f_3_112)">
            <path
              d="M85.1414 19.4438L48.1257 111.061"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M75.9105 41.7654L98.27 31.8526"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M75.9105 41.7655L66.2034 18.897"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M56.1687 90.6279L65.3668 113.291"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M56.1687 90.6281L33.3001 100.335"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M115.187 58.6675L17.3362 72.4195"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M91.2402 61.8335L111.005 76.2411"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M91.2402 61.8336L106.191 41.9927"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M39.0532 69.168L24.0256 88.4652"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M39.0533 69.168L19.2124 54.2168"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M96.2412 104.299L35.4065 26.4339"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M81.5257 85.1443L78.9307 109.465"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M81.5258 85.1442L106.184 88.1719"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M49.0803 43.6157L24.8546 40.2501"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M49.0804 43.6156L52.108 18.9573"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_112"
              x="128.662"
              y="31.6675"
              width="120.905"
              height="36.8154"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_112"
              />
            </filter>
            <filter
              id="filter1_f_3_112"
              x="122.65"
              y="111.669"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_112"
              />
            </filter>
            <filter
              id="filter2_f_3_112"
              x="38.6499"
              y="156.669"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_112"
              />
            </filter>
            <filter
              id="filter3_f_3_112"
              x="34.3389"
              y="18.0269"
              width="228.02"
              height="156.02"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_3_112"
              />
            </filter>
            <filter
              id="filter4_f_3_112"
              x="8.33545"
              y="9.89551"
              width="115.852"
              height="112.396"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_3_112"
              />
            </filter>
          </defs>
        </svg>
      );
    case "small_rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1614)">
            <path
              d="M120.777 227.122C123.068 227.151 146.286 263.402 146.286 277.491C146.286 284.256 143.598 290.745 138.814 295.529C134.03 300.313 127.542 303 120.777 303C114.011 303 107.523 300.313 102.739 295.529C97.9551 290.745 95.2676 284.256 95.2676 277.491C95.2676 263.402 118.488 227.097 120.777 227.122Z"
              fill="#42A0F0"
            />
            <path
              d="M101.326 287.027C103.875 287.806 107.115 284.6 108.562 279.866C110.009 275.133 109.116 270.663 106.567 269.884C104.018 269.105 100.779 272.311 99.3316 277.045C97.8843 281.778 98.7774 286.248 101.326 287.027Z"
              fill="white"
            />
            <path
              d="M261.078 227.122C263.369 227.151 286.587 263.402 286.587 277.491C286.587 284.256 283.9 290.745 279.116 295.529C274.332 300.313 267.844 303 261.078 303C254.313 303 247.825 300.313 243.041 295.529C238.257 290.745 235.569 284.256 235.569 277.491C235.569 263.402 258.789 227.097 261.078 227.122Z"
              fill="#42A0F0"
            />
            <path
              d="M241.628 287.027C244.177 287.806 247.416 284.6 248.864 279.866C250.311 275.133 249.418 270.663 246.869 269.884C244.32 269.105 241.081 272.311 239.633 277.045C238.186 281.778 239.079 286.248 241.628 287.027Z"
              fill="white"
            />
            <path
              d="M185.633 151.295C187.924 151.324 211.142 187.575 211.142 201.664C211.142 208.429 208.454 214.918 203.671 219.702C198.887 224.485 192.398 227.173 185.633 227.173C178.868 227.173 172.379 224.485 167.595 219.702C162.812 214.918 160.124 208.429 160.124 201.664C160.124 187.575 183.344 151.27 185.633 151.295Z"
              fill="#42A0F0"
            />
            <path
              d="M166.183 211.2C168.732 211.979 171.971 208.773 173.418 204.039C174.866 199.305 173.973 194.836 171.424 194.057C168.875 193.278 165.635 196.484 164.188 201.217C162.741 205.951 163.634 210.42 166.183 211.2Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_df_7_1614)">
            <g filter="url(#filter2_d_7_1614)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1614)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.078 58.1939 160.498 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.101 91.1747H143.457H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.457C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1614"
              x="91.2676"
              y="147.295"
              width="199.319"
              height="159.705"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1614"
              />
            </filter>
            <filter
              id="filter1_df_7_1614"
              x="0"
              y="0"
              width="391.269"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1614"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1614"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1614"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1614"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1555)">
            <path
              d="M126.035 206.834C126.564 207.318 115.495 231.126 109.063 238.525C102.631 245.924 94.7189 249.579 91.3921 246.687C88.0654 243.795 90.5824 235.452 97.0144 228.052C103.446 220.653 125.506 206.352 126.035 206.834Z"
              fill="#42A0F0"
            />
            <path
              d="M98.1599 233.023C98.8061 234.057 101.043 233.825 103.156 232.504C105.27 231.184 106.459 229.275 105.813 228.241C105.166 227.207 102.929 227.439 100.816 228.759C98.7029 230.08 97.5136 231.988 98.1599 233.023Z"
              fill="white"
            />
            <path
              d="M194.035 206.834C194.564 207.318 183.495 231.126 177.063 238.525C170.631 245.924 162.719 249.579 159.392 246.687C156.065 243.795 158.582 235.452 165.014 228.052C171.446 220.653 193.506 206.352 194.035 206.834Z"
              fill="#42A0F0"
            />
            <path
              d="M166.16 233.023C166.806 234.057 169.043 233.825 171.156 232.504C173.27 231.184 174.459 229.275 173.813 228.241C173.166 227.207 170.929 227.439 168.816 228.759C166.703 230.08 165.514 231.988 166.16 233.023Z"
              fill="white"
            />
            <path
              d="M262.035 206.834C262.564 207.318 251.495 231.126 245.063 238.525C238.631 245.924 230.719 249.579 227.392 246.687C224.065 243.795 226.582 235.452 233.014 228.052C239.446 220.653 261.506 206.352 262.035 206.834Z"
              fill="#42A0F0"
            />
            <path
              d="M234.16 233.023C234.806 234.057 237.043 233.825 239.156 232.504C241.27 231.184 242.459 229.275 241.813 228.241C241.166 227.207 238.929 227.439 236.816 228.759C234.703 230.08 233.514 231.988 234.16 233.023Z"
              fill="white"
            />
            <path
              d="M202.035 256.834C202.564 257.318 191.495 281.126 185.063 288.525C178.631 295.924 170.719 299.579 167.392 296.687C164.065 293.795 166.582 285.452 173.014 278.052C179.446 270.653 201.506 256.352 202.035 256.834Z"
              fill="#42A0F0"
            />
            <path
              d="M174.16 283.023C174.806 284.057 177.043 283.825 179.156 282.504C181.27 281.184 182.459 279.275 181.813 278.241C181.166 277.207 178.929 277.439 176.816 278.759C174.703 280.08 173.514 281.988 174.16 283.023Z"
              fill="white"
            />
            <path
              d="M126.035 256.834C126.564 257.318 115.495 281.126 109.063 288.525C102.631 295.924 94.7189 299.579 91.3921 296.687C88.0654 293.795 90.5824 285.452 97.0144 278.052C103.446 270.653 125.506 256.352 126.035 256.834Z"
              fill="#42A0F0"
            />
            <path
              d="M98.1599 283.023C98.8061 284.057 101.043 283.825 103.156 282.504C105.27 281.184 106.459 279.275 105.813 278.241C105.166 277.207 102.929 277.439 100.816 278.759C98.7029 280.08 97.5136 281.988 98.1599 283.023Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_df_7_1555)">
            <g filter="url(#filter2_d_7_1555)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1555)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.581 230.926C271.475 229.585 278.255 227.584 284.733 224.978C291.094 222.42 297.229 219.254 302.967 215.568C308.65 211.917 313.994 207.725 318.851 203.107C323.706 198.49 328.114 193.411 331.952 188.009C335.826 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.681 158.093 348.09 151.547C349.535 144.831 350.268 137.917 350.268 131C350.268 124.082 349.535 117.169 348.09 110.452C346.681 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.826 79.4433 331.952 73.991C328.114 68.5893 323.706 63.5095 318.851 58.8928C313.994 54.2752 308.65 50.0829 302.967 46.4323C297.229 42.7461 291.094 39.5801 284.733 37.0221C278.255 34.4165 271.475 32.4154 264.581 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.254 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1807C82.6072 91.1747 73.3205 93.0495 64.5787 96.747C60.3771 98.5242 56.3245 100.724 52.5336 103.285C48.7784 105.822 45.2472 108.735 42.038 111.945C38.8288 115.154 35.9152 118.685 33.3783 122.44C30.8172 126.231 28.6175 130.284 26.8404 134.485C23.1429 143.227 21.2681 152.514 21.2681 162.087C21.2681 171.661 23.1429 180.948 26.8404 189.689C28.6175 193.891 30.8172 197.944 33.3783 201.735C35.9152 205.49 38.8288 209.021 42.038 212.23C45.2472 215.439 48.7784 218.353 52.5336 220.89C56.3245 223.451 60.3771 225.651 64.5787 227.428C73.3205 231.125 82.6072 233 92.1807 233H229.705C231.628 233 233.572 232.922 235.482 232.768L235.554 232.762L235.626 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.461 234 238 233.921 235.562 233.765C233.632 233.92 231.676 234 229.705 234H92.1807C52.4646 234 20.2681 201.803 20.2681 162.087C20.2681 122.371 52.4646 90.1747 92.1807 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.768 28 351.268 74.1151 351.268 131C351.268 187.885 302.768 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1555"
              x="85.9238"
              y="202.822"
              width="180.13"
              height="98.855"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1555"
              />
            </filter>
            <filter
              id="filter1_df_7_1555"
              x="0"
              y="0"
              width="391.268"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1555"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1555"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1555"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1555"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "heav_rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 335"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1524)">
            <path
              d="M123.667 203.237C124.196 203.72 113.127 227.528 106.695 234.927C100.263 242.327 92.3507 245.981 89.024 243.089C85.6972 240.197 88.2142 231.854 94.6462 224.455C101.078 217.056 123.138 202.754 123.667 203.237Z"
              fill="#42A0F0"
            />
            <path
              d="M95.7917 229.425C96.4379 230.459 98.6749 230.227 100.788 228.906C102.901 227.586 104.091 225.677 103.444 224.643C102.798 223.609 100.561 223.841 98.448 225.162C96.3348 226.482 95.1455 228.391 95.7917 229.425Z"
              fill="white"
            />
            <path
              d="M191.667 203.237C192.196 203.72 181.127 227.528 174.695 234.927C168.263 242.327 160.351 245.981 157.024 243.089C153.697 240.197 156.214 231.854 162.646 224.455C169.078 217.056 191.138 202.754 191.667 203.237Z"
              fill="#42A0F0"
            />
            <path
              d="M163.792 229.425C164.438 230.459 166.675 230.227 168.788 228.906C170.901 227.586 172.091 225.677 171.444 224.643C170.798 223.609 168.561 223.841 166.448 225.162C164.335 226.482 163.145 228.391 163.792 229.425Z"
              fill="white"
            />
            <path
              d="M259.667 203.237C260.196 203.72 249.127 227.528 242.695 234.927C236.263 242.327 228.351 245.981 225.024 243.089C221.697 240.197 224.214 231.854 230.646 224.455C237.078 217.056 259.138 202.754 259.667 203.237Z"
              fill="#42A0F0"
            />
            <path
              d="M231.792 229.425C232.438 230.459 234.675 230.227 236.788 228.906C238.901 227.586 240.091 225.677 239.444 224.643C238.798 223.609 236.561 223.841 234.448 225.162C232.335 226.482 231.145 228.391 231.792 229.425Z"
              fill="white"
            />
            <path
              d="M199.667 253.237C200.196 253.72 189.127 277.528 182.695 284.927C176.263 292.327 168.351 295.981 165.024 293.089C161.697 290.197 164.214 281.854 170.646 274.455C177.078 267.056 199.138 252.754 199.667 253.237Z"
              fill="#42A0F0"
            />
            <path
              d="M171.792 279.425C172.438 280.459 174.675 280.227 176.788 278.906C178.901 277.586 180.091 275.677 179.444 274.643C178.798 273.609 176.561 273.841 174.448 275.162C172.335 276.482 171.145 278.391 171.792 279.425Z"
              fill="white"
            />
            <path
              d="M282.667 253.237C283.196 253.72 272.127 277.528 265.695 284.927C259.263 292.327 251.351 295.981 248.024 293.089C244.697 290.197 247.214 281.854 253.646 274.455C260.078 267.056 282.138 252.754 282.667 253.237Z"
              fill="#42A0F0"
            />
            <path
              d="M254.792 279.425C255.438 280.459 257.675 280.227 259.788 278.906C261.901 277.586 263.091 275.677 262.444 274.643C261.798 273.609 259.561 273.841 257.448 275.162C255.335 276.482 254.145 278.391 254.792 279.425Z"
              fill="white"
            />
            <path
              d="M222.667 289.237C223.196 289.72 212.127 313.528 205.695 320.927C199.263 328.327 191.351 331.981 188.024 329.089C184.697 326.197 187.214 317.854 193.646 310.455C200.078 303.056 222.138 288.754 222.667 289.237Z"
              fill="#42A0F0"
            />
            <path
              d="M194.792 315.425C195.438 316.459 197.675 316.227 199.788 314.906C201.901 313.586 203.091 311.677 202.444 310.643C201.798 309.609 199.561 309.841 197.448 311.162C195.335 312.482 194.145 314.391 194.792 315.425Z"
              fill="white"
            />
            <path
              d="M146.667 289.237C147.196 289.72 136.127 313.528 129.695 320.927C123.263 328.327 115.351 331.981 112.024 329.089C108.697 326.197 111.214 317.854 117.646 310.455C124.078 303.056 146.138 288.754 146.667 289.237Z"
              fill="#42A0F0"
            />
            <path
              d="M118.792 315.425C119.438 316.459 121.675 316.227 123.788 314.906C125.901 313.586 127.091 311.677 126.444 310.643C125.798 309.609 123.561 309.841 121.448 311.162C119.335 312.482 118.145 314.391 118.792 315.425Z"
              fill="white"
            />
            <path
              d="M123.667 253.237C124.196 253.72 113.127 277.528 106.695 284.927C100.263 292.327 92.3507 295.981 89.024 293.089C85.6972 290.197 88.2142 281.854 94.6462 274.455C101.078 267.056 123.138 252.754 123.667 253.237Z"
              fill="#42A0F0"
            />
            <path
              d="M95.7917 279.425C96.4379 280.459 98.6749 280.227 100.788 278.906C102.901 277.586 104.091 275.677 103.444 274.643C102.798 273.609 100.561 273.841 98.448 275.162C96.3348 276.482 95.1455 278.391 95.7917 279.425Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_df_7_1524)">
            <g filter="url(#filter2_d_7_1524)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1524)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.581 230.926C271.475 229.585 278.255 227.584 284.733 224.978C291.094 222.42 297.229 219.254 302.967 215.568C308.65 211.917 313.994 207.725 318.851 203.107C323.706 198.49 328.114 193.411 331.952 188.009C335.826 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.681 158.093 348.09 151.547C349.535 144.831 350.268 137.917 350.268 131C350.268 124.082 349.535 117.169 348.09 110.452C346.681 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.826 79.4433 331.952 73.991C328.114 68.5893 323.706 63.5095 318.851 58.8928C313.994 54.2752 308.65 50.0829 302.967 46.4323C297.229 42.7461 291.094 39.5801 284.733 37.0221C278.255 34.4165 271.475 32.4154 264.581 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.254 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1807C82.6072 91.1747 73.3205 93.0495 64.5787 96.747C60.3771 98.5242 56.3245 100.724 52.5336 103.285C48.7784 105.822 45.2472 108.735 42.038 111.945C38.8288 115.154 35.9152 118.685 33.3783 122.44C30.8172 126.231 28.6175 130.284 26.8404 134.485C23.1429 143.227 21.2681 152.514 21.2681 162.087C21.2681 171.661 23.1429 180.948 26.8404 189.689C28.6175 193.891 30.8172 197.944 33.3783 201.735C35.9152 205.49 38.8288 209.021 42.038 212.23C45.2472 215.439 48.7784 218.353 52.5336 220.89C56.3245 223.451 60.3771 225.651 64.5787 227.428C73.3205 231.125 82.6072 233 92.1807 233H229.705C231.628 233 233.572 232.922 235.482 232.768L235.554 232.762L235.626 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.461 234 238 233.921 235.562 233.765C233.632 233.92 231.676 234 229.705 234H92.1807C52.4646 234 20.2681 201.803 20.2681 162.087C20.2681 122.371 52.4646 90.1747 92.1807 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.768 28 351.268 74.1151 351.268 131C351.268 187.885 302.768 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1524"
              x="83.5557"
              y="199.225"
              width="203.13"
              height="134.855"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1524"
              />
            </filter>
            <filter
              id="filter1_df_7_1524"
              x="0"
              y="0"
              width="391.268"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1524"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1524"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1524"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1524"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "freezing_rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1614)">
            <path
              d="M120.777 227.122C123.068 227.151 146.286 263.402 146.286 277.491C146.286 284.256 143.598 290.745 138.814 295.529C134.03 300.313 127.542 303 120.777 303C114.011 303 107.523 300.313 102.739 295.529C97.9551 290.745 95.2676 284.256 95.2676 277.491C95.2676 263.402 118.488 227.097 120.777 227.122Z"
              fill="#42A0F0"
            />
            <path
              d="M101.326 287.027C103.875 287.806 107.115 284.6 108.562 279.866C110.009 275.133 109.116 270.663 106.567 269.884C104.018 269.105 100.779 272.311 99.3316 277.045C97.8843 281.778 98.7774 286.248 101.326 287.027Z"
              fill="white"
            />
            <path
              d="M185.633 151.295C187.924 151.324 211.142 187.575 211.142 201.664C211.142 208.429 208.454 214.918 203.671 219.702C198.887 224.485 192.398 227.173 185.633 227.173C178.868 227.173 172.379 224.485 167.595 219.702C162.812 214.918 160.124 208.429 160.124 201.664C160.124 187.575 183.344 151.27 185.633 151.295Z"
              fill="#42A0F0"
            />
            <path
              d="M166.183 211.2C168.732 211.979 171.971 208.773 173.418 204.039C174.866 199.305 173.973 194.836 171.424 194.057C168.875 193.278 165.635 196.484 164.188 201.217C162.741 205.951 163.634 210.42 166.183 211.2Z"
              fill="white"
            />
            <path
              d="M251.339 234V310.792"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M251.186 252.771L264.411 239.119"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M251.185 252.771L237.533 239.119"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M251.186 293.727L264.411 307.379"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M251.185 293.727L237.533 307.379"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M284.407 253.516L217.903 291.912"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M268.074 262.767L286.509 267.395"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M268.073 262.768L273.07 244.119"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M232.604 283.245L227.394 301.524"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M232.604 283.245L213.955 278.248"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M284.039 291.912L217.535 253.516"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M267.86 282.392L273.07 300.671"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M267.86 282.392L286.509 277.396"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M232.391 261.915L213.955 266.542"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M232.391 261.915L227.394 243.266"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_df_7_1614)">
            <g filter="url(#filter2_d_7_1614)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1614)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.078 58.1939 160.498 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.101 91.1747H143.457H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.457C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1614"
              x="91.2676"
              y="147.295"
              width="202.242"
              height="170.497"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1614"
              />
            </filter>
            <filter
              id="filter1_df_7_1614"
              x="0"
              y="0"
              width="391.269"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1614"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1614"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1614"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1614"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "light_snow":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1847)">
            <path
              d="M186.432 174.204V303.75"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M186.172 205.87L208.483 182.84"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M186.172 205.87L163.142 182.84"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M186.172 274.962L208.483 297.992"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M186.172 274.962L163.142 297.992"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M242.217 207.127L130.027 271.9"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M214.664 222.734L245.764 230.541"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M214.664 222.734L223.094 191.275"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M154.828 257.28L146.039 288.117"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M154.828 257.281L123.369 248.851"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M241.599 271.9L129.409 207.127"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M214.305 255.841L223.094 286.678"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M214.305 255.842L245.765 247.412"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M154.47 221.295L123.37 229.102"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M154.469 221.296L146.04 189.836"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>
          <path
            d="M138.864 148.295V157.143"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.673 150.454L140.112 149.734"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.673 150.454L136.514 149.734"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.673 155.492L140.112 156.212"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.673 155.492L136.514 156.212"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M142.675 150.544L135.012 154.968"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.792 151.61L142.916 152.143"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.792 151.61L141.368 149.461"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.705 153.969L136.105 156.076"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.705 153.969L134.557 153.393"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M142.631 154.968L134.968 150.544"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.768 153.871L141.368 155.977"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.767 153.871L142.916 153.295"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.681 151.511L134.556 152.045"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.68 151.511L136.105 149.362"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.936 167.885V183.053"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 171.326L263.182 170.606"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 171.326L256.704 170.606"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 179.962L263.182 181.401"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 179.962L256.704 181.401"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M267.466 171.74L254.33 179.324"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.239 173.566L267.88 174.48"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.24 173.566L265.227 169.883"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.233 177.611L256.205 181.221"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.234 177.611L253.551 176.624"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M267.394 179.324L254.258 171.74"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.198 177.444L265.227 181.054"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.198 177.443L267.881 176.457"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.192 173.398L253.552 174.312"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.192 173.398L256.205 169.715"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M251.592 279.439V291.892"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M250.946 282.16L253.105 281.44"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M250.946 282.16L248.067 281.44"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M250.946 289.357L253.105 290.796"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M250.946 289.357L248.067 290.796"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M256.953 282.604L246.169 288.831"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M254.305 284.105L257.295 284.855"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M254.305 284.104L255.115 281.08"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M248.554 287.425L247.709 290.389"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M248.553 287.425L245.529 286.614"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M256.894 288.83L246.109 282.604"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M254.269 287.287L255.114 290.251"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M254.27 287.286L257.294 286.476"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M248.518 283.966L245.528 284.717"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M248.518 283.966L247.708 280.942"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M149.333 308.227V319.196"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M148.747 310.948L150.906 310.228"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M148.747 310.948L146.588 310.228"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M148.747 316.705L150.906 318.144"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M148.747 316.705L146.588 318.144"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M154.058 311.015L144.558 316.5"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M151.724 312.337L154.358 312.998"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M151.725 312.337L152.438 309.673"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M146.657 315.262L145.913 317.873"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M146.658 315.262L143.994 314.548"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M154.004 316.499L144.504 311.015"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M151.694 315.139L152.438 317.75"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M151.694 315.139L154.357 314.425"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M146.627 312.214L143.994 312.875"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M146.627 312.214L145.913 309.55"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M107.942 262.166V271.063"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M107.726 264.167L109.165 263.447"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M107.725 264.167L105.566 263.447"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M107.726 269.205L109.165 269.925"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M107.725 269.205L105.566 269.925"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M111.773 264.427L104.068 268.875"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M109.881 265.499L112.017 266.035"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M109.881 265.499L110.46 263.338"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M105.771 267.872L105.167 269.99"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M105.771 267.872L103.61 267.293"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M111.73 268.875L104.025 264.426"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M109.856 267.773L110.46 269.891"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M109.856 267.773L112.017 267.194"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M105.746 265.4L103.61 265.936"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M105.746 265.4L105.167 263.239"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <g filter="url(#filter1_df_7_1847)">
            <g filter="url(#filter2_d_7_1847)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1847)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.078 58.1939 160.498 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.101 91.1747H143.457H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.457C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1847"
              x="114.367"
              y="165.204"
              width="140.398"
              height="147.546"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1847"
              />
            </filter>
            <filter
              id="filter1_df_7_1847"
              x="0"
              y="0"
              width="391.269"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1847"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1847"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1847"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1847"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "heavy_snow":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138.863 148.295V157.143"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.672 150.454L140.111 149.734"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.672 150.454L136.513 149.734"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.672 155.492L140.111 156.212"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M138.672 155.492L136.513 156.212"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M142.674 150.544L135.011 154.968"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.791 151.61L142.915 152.143"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.791 151.61L141.367 149.461"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.704 153.969L136.104 156.076"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.704 153.969L134.556 153.393"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M142.63 154.968L134.967 150.544"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.767 153.871L141.367 155.977"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M140.766 153.871L142.915 153.295"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.68 151.511L134.555 152.045"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M136.679 151.511L136.104 149.362"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.936 167.885V183.053"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 171.326L263.182 170.606"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 171.326L256.704 170.606"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 179.962L263.182 181.401"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M260.303 179.962L256.704 181.401"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M267.466 171.74L254.33 179.324"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.239 173.566L267.88 174.48"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.24 173.566L265.227 169.883"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.233 177.611L256.205 181.221"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.234 177.611L253.551 176.624"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M267.394 179.324L254.258 171.74"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.198 177.444L265.227 181.054"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M264.198 177.443L267.881 176.457"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.192 173.398L253.552 174.312"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M257.192 173.398L256.205 169.715"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M349.591 191.439V203.892"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M348.945 194.16L351.104 193.44"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M348.945 194.16L346.066 193.44"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M348.945 201.357L351.104 202.796"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M348.945 201.357L346.066 202.796"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M354.952 194.604L344.168 200.831"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M352.304 196.105L355.294 196.855"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M352.304 196.104L353.114 193.08"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M346.553 199.425L345.708 202.389"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M346.552 199.425L343.528 198.614"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M354.893 200.83L344.108 194.604"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M352.268 199.287L353.113 202.251"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M352.269 199.286L355.293 198.476"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M346.517 195.966L343.527 196.717"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M346.517 195.966L345.707 192.942"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M43.333 244.227V255.196"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M42.7471 246.948L44.9061 246.228"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M42.7469 246.948L40.5879 246.228"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M42.7471 252.705L44.9061 254.144"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M42.7469 252.705L40.5879 254.144"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M48.0576 247.015L38.5582 252.5"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M45.7243 248.337L48.3576 248.998"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M45.7247 248.337L46.4385 245.673"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M40.6572 251.262L39.913 253.873"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M40.6576 251.262L37.9939 250.548"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M48.0039 252.499L38.5045 247.015"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M45.6941 251.139L46.4383 253.75"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M45.6937 251.139L48.3574 250.425"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M40.627 248.214L37.9937 248.875"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M40.6266 248.214L39.9128 245.55"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M198.942 286.166V295.063"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M198.726 288.167L200.165 287.447"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M198.725 288.167L196.566 287.447"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M198.726 293.205L200.165 293.925"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M198.725 293.205L196.566 293.925"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M202.773 288.427L195.068 292.875"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M200.881 289.499L203.017 290.035"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M200.881 289.499L201.46 287.338"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M196.771 291.872L196.167 293.99"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M196.771 291.872L194.61 291.293"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M202.73 292.875L195.025 288.426"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M200.856 291.773L201.46 293.891"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M200.856 291.773L203.017 291.194"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M196.746 289.4L194.61 289.936"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <path
            d="M196.746 289.4L196.167 287.239"
            stroke="#42A0F0"
            strokeLinecap="round"
          />
          <g filter="url(#filter0_f_7_1639)">
            <path
              d="M281.976 263.003V339.795"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M281.822 281.774L295.047 268.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M281.822 281.774L268.17 268.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M281.822 322.73L295.047 336.382"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M281.822 322.73L268.17 336.382"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M315.044 282.519L248.54 320.915"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M298.71 291.77L317.146 296.398"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M298.71 291.771L303.707 273.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M263.241 312.248L258.031 330.527"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M263.241 312.248L244.592 307.251"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M314.676 320.915L248.172 282.519"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M298.496 311.395L303.707 329.674"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M298.497 311.395L317.146 306.398"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M263.027 290.917L244.592 295.545"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M263.028 290.918L258.031 272.269"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M194.976 175.003V251.795"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M194.822 193.774L208.047 180.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M194.822 193.774L181.17 180.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M194.822 234.73L208.047 248.382"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M194.822 234.73L181.17 248.382"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M228.044 194.519L161.54 232.915"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M211.71 203.77L230.146 208.398"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M211.71 203.771L216.707 185.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M176.241 224.248L171.031 242.527"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M176.241 224.248L157.592 219.251"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M227.676 232.915L161.172 194.519"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M211.496 223.395L216.707 241.674"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M211.497 223.395L230.146 218.398"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M176.027 202.917L157.592 207.545"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M176.028 202.918L171.031 184.269"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125.976 263.003V339.795"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125.822 281.774L139.047 268.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125.822 281.774L112.17 268.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125.822 322.73L139.047 336.382"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125.822 322.73L112.17 336.382"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M159.044 282.519L92.5401 320.915"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M142.71 291.77L161.146 296.398"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M142.71 291.771L147.707 273.122"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M107.241 312.248L102.031 330.527"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M107.241 312.248L88.5921 307.251"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M158.676 320.915L92.172 282.519"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M142.496 311.395L147.707 329.674"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M142.497 311.395L161.146 306.398"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M107.027 290.917L88.5919 295.545"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M107.028 290.918L102.031 272.269"
              stroke="#42A0F0"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_df_7_1639)">
            <g filter="url(#filter2_d_7_1639)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1639)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.078 58.1939 160.498 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.101 91.1747H143.457H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.457C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1639"
              x="81.5908"
              y="168.003"
              width="242.556"
              height="178.792"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1639"
              />
            </filter>
            <filter
              id="filter1_df_7_1639"
              x="0"
              y="0"
              width="391.269"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1639"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1639"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1639"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1639"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "snow_grains":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 293 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_2080)">
            <path
              d="M140.663 43.6721C140.663 43.6721 150.427 56.9081 158.058 56.4721C167.624 55.9101 169.258 44.3721 178.126 43.6721C187.404 43.8111 188.351 55.7721 198.407 56.4721C207.417 56.3111 211.234 43.8901 219.823 43.6721C228.412 43.4541 237.567 56.4721 237.567 56.4721"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_7_2080)">
            <path
              d="M134.649 123.672C134.649 123.672 149.349 136.908 160.842 136.472C175.242 135.91 177.713 124.372 191.06 123.672C205.03 123.811 206.46 135.772 221.599 136.472C235.166 136.311 240.914 123.89 253.846 123.672C266.778 123.454 280.565 136.471 280.565 136.471"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter2_f_7_2080)">
            <path
              d="M50.6494 168.672C50.6494 168.672 65.3494 181.908 76.8424 181.472C91.2424 180.91 93.7134 169.372 107.06 168.672C121.03 168.811 122.46 180.772 137.599 181.472C151.166 181.311 156.914 168.89 169.846 168.672C182.778 168.454 196.565 181.471 196.565 181.471"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter3_f_7_2080)">
            <path
              d="M201.339 84.0269L194.339 91.0269"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M194.339 84.0269L201.339 91.0269"
              stroke="#CAD1D2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M258.359 165.027L253.339 170.047"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M253.339 165.027L258.359 170.047"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M43.3589 140.027L38.3389 145.047"
              stroke="#D0D0D0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M38.3389 140.027L43.3589 145.047"
              stroke="#D0D0D0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M249.359 22.0269L244.339 27.0469"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M244.339 22.0269L249.359 27.0469"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter4_f_7_2080)">
            <path
              d="M85.1416 19.4438L48.126 111.061"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M75.9105 41.7654L98.27 31.8526"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M75.9102 41.7655L66.2031 18.897"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M56.1689 90.6279L65.367 113.291"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M56.1687 90.6281L33.3001 100.335"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M115.188 58.6675L17.3371 72.4195"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M91.2417 61.8335L111.006 76.2411"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M91.2412 61.8336L106.192 41.9927"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M39.0537 69.168L24.0261 88.4652"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M39.0533 69.168L19.2124 54.2168"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M96.2412 104.299L35.4065 26.4339"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M81.5255 85.1443L78.9305 109.465"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M81.5253 85.1442L106.184 88.1719"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M49.0801 43.6157L24.8544 40.2501"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M49.0799 43.6156L52.1075 18.9573"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_7_2080"
              x="128.662"
              y="31.6675"
              width="120.905"
              height="36.8154"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_2080"
              />
            </filter>
            <filter
              id="filter1_f_7_2080"
              x="122.649"
              y="111.669"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_2080"
              />
            </filter>
            <filter
              id="filter2_f_7_2080"
              x="38.6494"
              y="156.669"
              width="169.916"
              height="36.813"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_2080"
              />
            </filter>
            <filter
              id="filter3_f_7_2080"
              x="34.3389"
              y="18.0269"
              width="228.02"
              height="156.02"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_2080"
              />
            </filter>
            <filter
              id="filter4_f_7_2080"
              x="8.33691"
              y="9.89551"
              width="115.852"
              height="112.396"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_2080"
              />
            </filter>
          </defs>
        </svg>
      );
    case "showers":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 301"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_188)">
            <path
              d="M114.461 212.283C114.461 212.283 172.044 215.395 197.58 207.983C223.116 200.571 223.08 162.083 197.58 152.591C172.08 143.099 163.362 177.016 163.362 177.016"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M39.4111 256.858C39.4111 256.858 125.965 249.038 164.123 256.858C202.281 264.678 190.131 287.113 172.047 288.138C153.963 289.163 137.276 277.281 137.276 277.281"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_7_188)">
            <path
              d="M306.567 232.122C308.247 232.141 325.296 258.76 325.296 269.103C325.296 271.563 324.812 273.998 323.87 276.27C322.929 278.543 321.55 280.607 319.811 282.347C316.298 285.859 311.535 287.832 306.567 287.833C301.6 287.833 296.836 285.86 293.324 282.347C289.811 278.835 287.838 274.071 287.838 269.104C287.838 258.76 304.887 232.104 306.567 232.122Z"
              fill="#42A0F0"
            />
            <path
              d="M292.287 276.106C294.158 276.678 296.537 274.324 297.599 270.848C298.662 267.372 298.007 264.091 296.135 263.519C294.264 262.947 291.886 265.301 290.823 268.776C289.76 272.252 290.416 275.534 292.287 276.106Z"
              fill="white"
            />
            <path
              d="M250.792 190.295C252.532 190.314 270.192 217.883 270.192 228.595C270.192 233.74 268.148 238.675 264.509 242.313C260.871 245.951 255.937 247.995 250.792 247.995C245.646 247.995 240.712 245.951 237.074 242.313C233.436 238.675 231.392 233.74 231.392 228.595C231.392 217.883 249.049 190.276 250.792 190.295Z"
              fill="#42A0F0"
            />
            <path
              d="M236 235.846C237.939 236.439 240.402 234.001 241.502 230.402C242.603 226.803 241.924 223.404 239.985 222.812C238.047 222.219 235.584 224.657 234.483 228.256C233.383 231.855 234.062 235.254 236 235.846Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter2_df_7_188)">
            <g filter="url(#filter3_d_7_188)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.456C160.08 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_188)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_188"
              x="27.4102"
              y="138.915"
              width="201.309"
              height="161.286"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_188"
              />
            </filter>
            <filter
              id="filter1_f_7_188"
              x="227.392"
              y="186.295"
              width="101.904"
              height="105.538"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_188"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_188"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "heavy_showers":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1555)">
            <path
              d="M257.667 216.237C258.196 216.72 247.127 240.528 240.695 247.927C234.263 255.327 226.351 258.981 223.024 256.089C219.697 253.197 222.214 244.854 228.646 237.455C235.078 230.056 257.138 215.754 257.667 216.237Z"
              fill="#42A0F0"
            />
            <path
              d="M229.792 242.425C230.438 243.459 232.675 243.227 234.788 241.906C236.901 240.586 238.091 238.677 237.444 237.643C236.798 236.609 234.561 236.841 232.448 238.162C230.335 239.482 229.145 241.391 229.792 242.425Z"
              fill="white"
            />
            <path
              d="M325.667 216.237C326.196 216.72 315.127 240.528 308.695 247.927C302.263 255.327 294.351 258.981 291.024 256.089C287.697 253.197 290.214 244.854 296.646 237.455C303.078 230.056 325.138 215.754 325.667 216.237Z"
              fill="#42A0F0"
            />
            <path
              d="M297.792 242.425C298.438 243.459 300.675 243.227 302.788 241.906C304.901 240.586 306.091 238.677 305.444 237.643C304.798 236.609 302.561 236.841 300.448 238.162C298.335 239.482 297.145 241.391 297.792 242.425Z"
              fill="white"
            />
            <path
              d="M265.667 266.237C266.196 266.72 255.127 290.528 248.695 297.927C242.263 305.327 234.351 308.981 231.024 306.089C227.697 303.197 230.214 294.854 236.646 287.455C243.078 280.056 265.138 265.754 265.667 266.237Z"
              fill="#42A0F0"
            />
            <path
              d="M237.792 292.425C238.438 293.459 240.675 293.227 242.788 291.906C244.901 290.586 246.091 288.677 245.444 287.643C244.798 286.609 242.561 286.841 240.448 288.162C238.335 289.482 237.145 291.391 237.792 292.425Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_f_7_1555)">
            <path
              d="M131.05 253.368C131.05 253.368 188.633 256.48 214.169 249.068C239.705 241.656 239.669 203.168 214.169 193.676C188.669 184.184 179.951 218.101 179.951 218.101"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M56 297.943C56 297.943 142.554 290.123 180.712 297.943C218.87 305.763 206.72 328.198 188.636 329.223C170.552 330.248 153.865 318.366 153.865 318.366"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter2_df_7_1555)">
            <g filter="url(#filter3_d_7_1555)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_1555)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.581 230.926C271.475 229.585 278.255 227.584 284.733 224.978C291.094 222.42 297.229 219.254 302.967 215.568C308.65 211.917 313.994 207.725 318.851 203.107C323.706 198.49 328.114 193.411 331.952 188.009C335.826 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.681 158.093 348.09 151.547C349.535 144.831 350.268 137.917 350.268 131C350.268 124.082 349.535 117.169 348.09 110.452C346.681 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.826 79.4433 331.952 73.991C328.114 68.5893 323.706 63.5095 318.851 58.8928C313.994 54.2752 308.65 50.0829 302.967 46.4323C297.229 42.7461 291.094 39.5801 284.733 37.0221C278.255 34.4165 271.475 32.4154 264.581 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.254 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1807C82.6072 91.1747 73.3205 93.0495 64.5787 96.747C60.3771 98.5242 56.3245 100.724 52.5336 103.285C48.7784 105.822 45.2472 108.735 42.038 111.945C38.8288 115.154 35.9152 118.685 33.3783 122.44C30.8172 126.231 28.6175 130.284 26.8404 134.485C23.1429 143.227 21.2681 152.514 21.2681 162.087C21.2681 171.661 23.1429 180.948 26.8404 189.689C28.6175 193.891 30.8172 197.944 33.3783 201.735C35.9152 205.49 38.8288 209.021 42.038 212.23C45.2472 215.439 48.7784 218.353 52.5336 220.89C56.3245 223.451 60.3771 225.651 64.5787 227.428C73.3205 231.125 82.6072 233 92.1807 233H229.705C231.628 233 233.572 232.922 235.482 232.768L235.554 232.762L235.626 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.461 234 238 233.921 235.562 233.765C233.632 233.92 231.676 234 229.705 234H92.1807C52.4646 234 20.2681 201.803 20.2681 162.087C20.2681 122.371 52.4646 90.1747 92.1807 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.768 28 351.268 74.1151 351.268 131C351.268 187.885 302.768 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1555"
              x="217.556"
              y="212.225"
              width="112.13"
              height="98.855"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1555"
              />
            </filter>
            <filter
              id="filter1_f_7_1555"
              x="43.9995"
              y="180"
              width="201.308"
              height="161.286"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1555"
              />
            </filter>
            <filter
              id="filter3_d_7_1555"
              x="0"
              y="0"
              width="391.268"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.302 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1555"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1555"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1555"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "light_snow_showers":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 296 204"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_2590)">
            <path
              d="M149.094 109.243C149.094 109.243 214.005 112.751 242.794 104.391C271.583 96.0312 271.542 52.6452 242.794 41.9502C214.046 31.2552 204.221 69.4831 204.221 69.4831"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M37.4395 156.104C37.4395 156.104 135.008 147.289 178.021 156.104C221.034 164.919 207.338 190.204 186.953 191.365C166.568 192.526 147.753 179.127 147.753 179.127"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M245.107 156.039H283.899"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_7_2590)">
            <path
              d="M82.1133 30.2385L66.238 130.471"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M78.0323 54.7083L98.1173 39.6236"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M78.0318 54.7083L63.0352 34.0671"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M69.5654 108.166L84.006 128.719"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M69.565 108.166L48.9239 123.163"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M121.242 62.5471L26.5006 98.915"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M98.0098 71.2478L121.116 81.0996"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M98.0103 71.2477L108.388 47.9397"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M47.4805 90.644L36.9013 113.426"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M47.4809 90.644L24.1729 80.2666"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M112.826 112.589L33.9598 48.7239"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M93.6758 96.8193L96.697 121.756"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M93.6757 96.8193L119.05 94.1523"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M51.6133 62.7581L26.5935 64.9874"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M51.6132 62.758L48.9463 37.384"
              stroke="#42A0F0"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M48.4854 4.3623L47.4009 11.209"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M48.0719 6.00994L49.2743 5.62934"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M48.0722 6.00982L46.4902 5.18823"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M47.4551 9.90747L48.481 10.641"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M47.4553 9.90735L45.6969 10.1999"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M51.1572 6.5686L44.6856 9.05281"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M49.5705 7.16246L51.1486 7.83564"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M49.5706 7.16248L50.2793 5.5708"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M46.1191 8.4873L45.3969 10.0435"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M46.1192 8.48733L44.5276 7.77867"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M50.583 9.98657L45.1958 5.62412"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M49.275 8.90974L49.481 10.613"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M49.275 8.90966L51.0078 8.72754"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M46.4023 6.58325L44.6935 6.73584"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M46.4024 6.58318L46.2203 4.85041"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M140.532 34.4783L138.673 46.214"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M139.622 37.0627L141.937 36.8584"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M139.622 37.0627L136.926 36.0647"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M138.562 43.7454L140.613 45.2122"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M138.563 43.7454L135.602 44.4186"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M145.114 38.2615L134.021 42.5196"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M142.394 39.2798L145.099 40.4331"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M142.395 39.2799L143.609 36.5513"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M136.479 41.5508L135.24 44.2178"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M136.479 41.5508L133.75 40.336"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M144.129 44.1204L134.895 36.6428"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M141.887 42.2741L142.241 45.1933"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M141.887 42.2741L144.857 41.9619"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M136.962 38.2864L134.033 38.5473"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M136.962 38.2864L136.65 35.3159"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M119.634 119.646L118.108 129.281"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M118.801 121.672L120.56 121.38"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M118.801 121.672L116.662 120.762"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M117.919 127.24L119.413 128.619"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M117.919 127.24L115.515 128.001"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M123.395 122.751L114.287 126.247"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M121.161 123.587L123.382 124.534"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M121.162 123.587L122.159 121.347"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M116.304 125.452L115.287 127.641"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M116.304 125.452L114.064 124.454"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M122.586 127.562L115.005 121.423"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M120.746 126.046L121.036 128.443"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M120.746 126.046L123.185 125.79"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M116.702 122.772L114.297 122.986"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M116.702 122.772L116.445 120.333"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M36.9863 129.389L35.6421 137.876"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M36.1999 131.423L37.9583 131.13"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M36.2001 131.422L34.6182 130.601"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M35.4941 135.877L36.9879 137.256"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M35.4944 135.877L33.6478 136.727"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M40.2998 132.125L32.2775 135.204"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M38.3323 132.862L40.2892 133.696"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M38.332 132.862L39.2109 130.888"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M34.0547 134.504L33.1586 136.433"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M34.0544 134.504L32.0803 133.625"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M39.5859 136.361L32.9079 130.953"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M37.9639 135.026L38.22 137.137"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M37.9642 135.026L40.1133 134.8"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M34.4033 132.142L32.2844 132.331"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M34.4036 132.142L34.1778 129.993"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M10.6055 88.6775L9.51512 95.5617"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M10.192 90.1999L11.3944 89.8193"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M10.1923 90.1998L8.61035 89.3782"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M9.5752 94.0972L10.6011 94.8307"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M9.57545 94.0971L7.81704 94.3896"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M13.2939 90.8962L6.78689 93.3941"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M11.6978 91.4941L13.2845 92.1703"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M11.6975 91.494L12.4102 89.8933"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M8.22852 92.8259L7.50185 94.3902"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M8.2282 92.8259L6.62747 92.1132"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M12.7148 94.3333L7.29814 89.9469"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M11.3994 93.2498L11.6071 94.9621"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M11.399 93.2498L13.1416 93.0667"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M8.51074 90.9106L6.79267 91.0635"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M8.51031 90.9106L8.32716 89.168"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_7_2590"
              x="25.4385"
              y="28.062"
              width="270.461"
              height="175.375"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_2590"
              />
            </filter>
            <filter
              id="filter1_f_7_2590"
              x="4.12695"
              y="1.8623"
              width="143.487"
              height="138.514"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_2590"
              />
            </filter>
          </defs>
        </svg>
      );
    case "heavy_snow_showers":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 301"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_204)">
            <path
              d="M114.961 212.283C114.961 212.283 172.544 215.395 198.08 207.983C223.616 200.571 223.58 162.083 198.08 152.591C172.58 143.099 163.862 177.016 163.862 177.016"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M39.9111 256.858C39.9111 256.858 126.465 249.038 164.623 256.858C202.781 264.678 190.631 287.113 172.547 288.138C154.463 289.163 137.776 277.281 137.776 277.281"
              stroke="#D0D0D0"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter1_f_7_204)">
            <path
              d="M356.631 183.295V192.143"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M356.439 185.454L357.878 184.734"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M356.439 185.454L354.28 184.734"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M356.439 190.492L357.878 191.212"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M356.439 190.492L354.28 191.212"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M360.441 185.544L352.779 189.968"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M358.559 186.61L360.683 187.143"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M358.559 186.61L359.135 184.461"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M354.472 188.969L353.871 191.076"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M354.472 188.969L352.323 188.393"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M360.397 189.968L352.735 185.544"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M358.534 188.871L359.134 190.977"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M358.534 188.871L360.683 188.295"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M354.447 186.511L352.323 187.045"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M354.447 186.511L353.871 184.362"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter2_f_7_204)">
            <path
              d="M327.702 134.885V150.053"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M327.069 138.326L329.948 137.606"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M327.07 138.326L323.471 137.606"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M327.069 146.962L329.948 148.401"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M327.07 146.962L323.471 148.401"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M334.232 138.74L321.097 146.324"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M331.006 140.566L334.647 141.48"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M331.006 140.566L331.993 136.883"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M324 144.611L322.971 148.221"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M324 144.611L320.318 143.624"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M334.16 146.324L321.024 138.74"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M330.965 144.444L331.994 148.054"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M330.965 144.443L334.647 143.457"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M323.959 140.398L320.318 141.312"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M323.959 140.398L322.972 136.715"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter3_f_7_204)">
            <path
              d="M220.358 228.439V240.892"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M219.713 231.16L221.872 230.44"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M219.713 231.16L216.834 230.44"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M219.713 238.357L221.872 239.796"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M219.713 238.357L216.834 239.796"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M225.72 231.604L214.935 237.831"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M223.072 233.105L226.062 233.855"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M223.071 233.104L223.882 230.08"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M217.32 236.425L216.475 239.389"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M217.32 236.425L214.296 235.614"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M225.66 237.83L214.876 231.604"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M223.036 236.287L223.881 239.251"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M223.036 236.286L226.061 235.476"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M217.284 232.966L214.294 233.717"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M217.285 232.966L216.474 229.942"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter4_f_7_204)">
            <path
              d="M251.709 254.166V263.063"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M251.492 256.166L252.931 255.446"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M251.492 256.166L249.333 255.446"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M251.492 261.205L252.931 261.925"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M251.492 261.205L249.333 261.925"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M255.54 256.426L247.835 260.875"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M253.648 257.499L255.784 258.035"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M253.648 257.499L254.227 255.338"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M249.538 259.872L248.934 261.989"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M249.538 259.872L247.377 259.292"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M255.497 260.875L247.792 256.426"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M253.622 259.772L254.226 261.89"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M253.622 259.772L255.783 259.193"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M249.513 257.4L247.377 257.936"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
            <path
              d="M249.513 257.4L248.934 255.239"
              stroke="#42A0F0"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter5_f_7_204)">
            <path
              d="M334.685 216.54V274.602"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M334.568 230.733L344.568 220.411"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M334.568 230.733L324.246 220.411"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M334.568 261.7L344.568 272.022"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M334.568 261.7L324.246 272.022"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M359.687 231.295L309.403 260.326"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M347.337 238.291L361.276 241.791"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M347.337 238.292L351.115 224.191"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M320.52 253.775L316.58 267.596"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M320.519 253.775L306.419 249.997"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M359.41 260.327L309.127 231.296"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M347.176 253.13L351.115 266.951"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M347.176 253.13L361.276 249.352"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M320.358 237.646L306.419 241.145"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M320.359 237.646L316.58 223.546"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M268.903 150.003V208.065"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M268.787 164.196L278.787 153.874"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M268.787 164.196L258.465 153.874"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M268.787 195.163L278.787 205.485"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M268.787 195.163L258.465 205.485"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M293.905 164.758L243.622 193.789"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M281.556 171.754L295.495 175.254"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M281.556 171.754L285.334 157.654"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M254.738 187.238L250.799 201.059"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M254.738 187.238L240.638 183.46"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M293.629 193.79L243.346 164.759"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M281.395 186.592L285.334 200.414"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M281.395 186.593L295.495 182.814"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M254.577 171.109L240.638 174.608"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M254.577 171.109L250.799 157.009"
              stroke="#42A0F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
          <g filter="url(#filter6_df_7_204)">
            <g filter="url(#filter7_d_7_204)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.456C160.08 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint0_linear_7_204)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.077 58.1939 160.497 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.1 91.1747H143.456H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.456C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_204"
              x="27.9102"
              y="138.915"
              width="201.309"
              height="161.286"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_204"
              />
            </filter>
            <filter
              id="filter1_f_7_204"
              x="349.823"
              y="180.795"
              width="13.3594"
              height="13.8481"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_204"
              />
            </filter>
            <filter
              id="filter2_f_7_204"
              x="317.817"
              y="132.385"
              width="19.3301"
              height="20.168"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_204"
              />
            </filter>
            <filter
              id="filter3_f_7_204"
              x="211.794"
              y="225.939"
              width="16.7676"
              height="17.4531"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_204"
              />
            </filter>
            <filter
              id="filter4_f_7_204"
              x="244.877"
              y="251.666"
              width="13.4072"
              height="13.897"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="1"
                result="effect1_foregroundBlur_7_204"
              />
            </filter>
            <filter
              id="filter5_f_7_204"
              x="234.638"
              y="144.003"
              width="132.64"
              height="136.599"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_204"
              />
            </filter>
            <filter
              id="filter7_d_7_204"
              x="0"
              y="0"
              width="391.269"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.302 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_204"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_204"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_204"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "thunderstorm":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_1466)">
            <path
              d="M162.336 215.557H208.863L182.116 254.835L213.39 255.427L147.748 333.119L163.648 273.885H134.536L162.336 215.557Z"
              fill="url(#paint0_linear_7_1466)"
            />
            <path
              d="M266.533 194.557H298.04L279.927 221.157L301.105 221.557L256.654 274.168L267.425 234.057H247.707L266.533 194.557Z"
              fill="url(#paint1_linear_7_1466)"
            />
          </g>
          <g filter="url(#filter1_df_7_1466)">
            <g filter="url(#filter2_d_7_1466)">
              <path
                d="M235.78 233.765C233.847 233.92 231.894 233.999 229.923 234H92.3989C82.9327 234.035 73.5526 232.201 64.7968 228.603C56.041 225.005 48.0817 219.714 41.3755 213.032C34.6693 206.351 29.3483 198.412 25.7175 189.669C22.0868 180.927 20.2178 171.554 20.2178 162.087C20.2178 152.621 22.0868 143.248 25.7175 134.506C29.3483 125.763 34.6693 117.824 41.3755 111.143C48.0817 104.461 56.041 99.17 64.7968 95.5718C73.5526 91.9737 82.9327 90.1397 92.3989 90.175H143.675C160.299 53.6 198.586 28 243.159 28C302.986 28 351.486 74.115 351.486 131C351.486 187.885 302.986 234 243.159 234C240.679 234 238.219 233.922 235.78 233.765Z"
                fill="url(#paint2_linear_7_1466)"
              />
              <path
                d="M243.158 233C250.444 233 257.725 232.302 264.799 230.926C271.692 229.585 278.472 227.584 284.951 224.978C291.312 222.42 297.447 219.254 303.185 215.568C308.868 211.917 314.212 207.725 319.068 203.107C323.924 198.49 328.332 193.411 332.17 188.009C336.044 182.557 339.371 176.728 342.059 170.686C344.797 164.532 346.899 158.093 348.308 151.547C349.753 144.831 350.486 137.917 350.486 131C350.486 124.082 349.753 117.169 348.308 110.452C346.899 103.906 344.797 97.4673 342.059 91.3142C339.371 85.2716 336.044 79.4433 332.17 73.991C328.332 68.5893 323.924 63.5095 319.069 58.8928C314.212 54.2752 308.868 50.0829 303.185 46.4323C297.447 42.7461 291.312 39.5801 284.951 37.0221C278.472 34.4165 271.692 32.4154 264.799 31.0742C257.725 29.6979 250.444 29 243.158 29C221.788 29 201.148 34.9523 183.472 46.2135C174.952 51.6418 167.295 58.1939 160.715 65.6878C154.094 73.2291 148.667 81.6069 144.585 90.5885L144.318 91.1747H143.674H92.3985C82.825 91.1747 73.5383 93.0495 64.7965 96.747C60.5948 98.5242 56.5423 100.724 52.7513 103.285C48.9962 105.822 45.465 108.735 42.2558 111.945C39.0465 115.154 36.133 118.685 33.596 122.44C31.035 126.231 28.8353 130.284 27.0581 134.485C23.3606 143.227 21.4858 152.514 21.4858 162.087C21.4858 171.661 23.3606 180.948 27.0581 189.689C28.8353 193.891 31.035 197.944 33.596 201.735C36.133 205.49 39.0465 209.021 42.2558 212.23C45.465 215.439 48.9962 218.353 52.7513 220.89C56.5423 223.451 60.5948 225.651 64.7965 227.428C73.5383 231.125 82.825 233 92.3985 233H229.923C231.846 233 233.79 232.922 235.7 232.768L235.772 232.762L235.844 232.767C238.263 232.922 240.724 233 243.158 233ZM243.158 234C240.679 234 238.218 233.921 235.78 233.765C233.85 233.92 231.894 234 229.923 234H92.3985C52.6824 234 20.4858 201.803 20.4858 162.087C20.4858 122.371 52.6824 90.1747 92.3985 90.1747H143.674C160.299 53.5954 198.584 28 243.158 28C302.986 28 351.486 74.1151 351.486 131C351.486 187.885 302.986 234 243.158 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_1466"
              x="130.536"
              y="190.557"
              width="174.569"
              height="146.562"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_1466"
              />
            </filter>
            <filter
              id="filter1_df_7_1466"
              x="0.217773"
              y="0"
              width="391.268"
              height="266"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.596 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_1466"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_1466"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect2_foregroundBlur_7_1466"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_1466"
              x1="166.709"
              y1="274.338"
              x2="129.875"
              y2="260.835"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD100" />
              <stop offset="1" stopColor="#FFF0AA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7_1466"
              x1="269.493"
              y1="234.363"
              x2="244.551"
              y2="225.219"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD100" />
              <stop offset="1" stopColor="#FFF0AA" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_7_1466"
              x1="154.381"
              y1="53.9561"
              x2="220.424"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "thunderstorm_light":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_139)">
            <path
              d="M126.387 206.833C126.915 207.317 115.847 231.125 109.415 238.524C102.983 245.923 95.0737 249.574 91.747 246.682C88.4202 243.79 90.9339 235.451 97.3666 228.051C103.799 220.651 125.858 206.35 126.387 206.833Z"
              fill="#42A0F0"
            />
            <path
              d="M98.5114 233.022C99.1576 234.056 101.395 233.824 103.508 232.503C105.621 231.183 106.81 229.274 106.164 228.24C105.518 227.206 103.281 227.438 101.168 228.758C99.0545 230.079 97.8652 231.988 98.5114 233.022Z"
              fill="white"
            />
            <path
              d="M194.387 206.833C194.915 207.317 183.847 231.125 177.415 238.524C170.983 245.923 163.074 249.574 159.747 246.682C156.42 243.79 158.934 235.451 165.367 228.051C171.799 220.651 193.858 206.35 194.387 206.833Z"
              fill="#42A0F0"
            />
            <path
              d="M166.511 233.022C167.158 234.056 169.395 233.824 171.508 232.503C173.621 231.183 174.81 229.274 174.164 228.24C173.518 227.206 171.281 227.438 169.168 228.758C167.054 230.079 165.865 231.988 166.511 233.022Z"
              fill="white"
            />
            <path
              d="M202.387 256.833C202.915 257.317 191.847 281.125 185.415 288.524C178.983 295.923 171.074 299.574 167.747 296.682C164.42 293.79 166.934 285.451 173.367 278.051C179.799 270.651 201.858 256.35 202.387 256.833Z"
              fill="#42A0F0"
            />
            <path
              d="M174.511 283.022C175.158 284.056 177.395 283.824 179.508 282.503C181.621 281.183 182.81 279.274 182.164 278.24C181.518 277.206 179.281 277.438 177.168 278.758C175.054 280.079 173.865 281.988 174.511 283.022Z"
              fill="white"
            />
            <path
              d="M126.387 256.833C126.915 257.317 115.847 281.125 109.415 288.524C102.983 295.923 95.0737 299.574 91.747 296.682C88.4202 293.79 90.9339 285.451 97.3666 278.051C103.799 270.651 125.858 256.35 126.387 256.833Z"
              fill="#42A0F0"
            />
            <path
              d="M98.5114 283.022C99.1576 284.056 101.395 283.824 103.508 282.503C105.621 281.183 106.81 279.274 106.164 278.24C105.518 277.206 103.281 277.438 101.168 278.758C99.0545 280.079 97.8652 281.988 98.5114 283.022Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_f_7_139)">
            <path
              d="M256.667 212.557H288.174L270.061 239.157L291.239 239.557L246.788 292.168L257.559 252.057H237.841L256.667 212.557Z"
              fill="url(#paint0_linear_7_139)"
            />
          </g>
          <g filter="url(#filter2_df_7_139)">
            <g filter="url(#filter3_d_7_139)">
              <path
                d="M235.914 233.765C233.98 233.92 232.028 233.999 230.057 234H92.5327C83.0665 234.035 73.6864 232.201 64.9306 228.603C56.1747 225.005 48.2155 219.714 41.5093 213.032C34.8031 206.351 29.4821 198.412 25.8513 189.669C22.2205 180.927 20.3516 171.554 20.3516 162.087C20.3516 152.621 22.2205 143.248 25.8513 134.506C29.4821 125.763 34.8031 117.824 41.5093 111.143C48.2155 104.461 56.1747 99.17 64.9306 95.5718C73.6864 91.9737 83.0665 90.1397 92.5327 90.175H143.809C160.433 53.6 198.72 28 243.293 28C303.12 28 351.62 74.115 351.62 131C351.62 187.885 303.12 234 243.293 234C240.813 234 238.353 233.922 235.914 233.765Z"
                fill="url(#paint1_linear_7_139)"
              />
              <path
                d="M243.292 233C250.578 233 257.859 232.302 264.933 230.926C271.826 229.585 278.606 227.584 285.085 224.978C291.446 222.42 297.58 219.254 303.319 215.568C309.002 211.917 314.346 207.725 319.202 203.107C324.058 198.49 328.466 193.411 332.304 188.009C336.178 182.557 339.505 176.728 342.193 170.686C344.93 164.532 347.033 158.093 348.441 151.547C349.887 144.831 350.62 137.917 350.62 131C350.62 124.082 349.887 117.169 348.441 110.452C347.033 103.906 344.93 97.4673 342.193 91.3142C339.505 85.2716 336.178 79.4433 332.304 73.991C328.466 68.5893 324.058 63.5095 319.202 58.8928C314.346 54.2752 309.002 50.0829 303.319 46.4323C297.58 42.7461 291.446 39.5801 285.085 37.0221C278.606 34.4165 271.826 32.4154 264.933 31.0742C257.859 29.6979 250.578 29 243.292 29C221.921 29 201.282 34.9523 183.606 46.2135C175.086 51.6418 167.429 58.1939 160.849 65.6878C154.227 73.2291 148.8 81.6069 144.718 90.5885L144.452 91.1747H143.808H92.5323C82.9588 91.1747 73.6721 93.0495 64.9303 96.747C60.7286 98.5242 56.676 100.724 52.8851 103.285C49.13 105.822 45.5988 108.735 42.3895 111.945C39.1803 115.154 36.2668 118.685 33.7298 122.44C31.1688 126.231 28.9691 130.284 27.1919 134.485C23.4944 143.227 21.6196 152.514 21.6196 162.087C21.6196 171.661 23.4944 180.948 27.1919 189.689C28.9691 193.891 31.1688 197.944 33.7298 201.735C36.2668 205.49 39.1803 209.021 42.3895 212.23C45.5988 215.439 49.13 218.353 52.8851 220.89C56.676 223.451 60.7286 225.651 64.9303 227.428C73.6721 231.125 82.9588 233 92.5323 233H230.057C231.98 233 233.923 232.922 235.834 232.768L235.906 232.762L235.978 232.767C238.397 232.922 240.858 233 243.292 233ZM243.292 234C240.813 234 238.352 233.921 235.914 233.765C233.983 233.92 232.028 234 230.057 234H92.5323C52.8162 234 20.6196 201.803 20.6196 162.087C20.6196 122.371 52.8162 90.1747 92.5323 90.1747H143.808C160.432 53.5954 198.717 28 243.292 28C303.12 28 351.62 74.1151 351.62 131C351.62 187.885 303.12 234 243.292 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_139"
              x="86.2778"
              y="202.821"
              width="120.127"
              height="98.8516"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_139"
              />
            </filter>
            <filter
              id="filter1_f_7_139"
              x="233.841"
              y="208.557"
              width="61.3979"
              height="87.6113"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_139"
              />
            </filter>
            <filter
              id="filter3_d_7_139"
              x="0.351562"
              y="0"
              width="391.268"
              height="266.001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.302 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_139"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_139"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_139"
              x1="259.627"
              y1="252.362"
              x2="234.685"
              y2="243.218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD100" />
              <stop offset="1" stopColor="#FFF0AA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7_139"
              x1="154.515"
              y1="53.9561"
              x2="220.557"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "thunderstorm_heavy":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 392 334"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_7_103)">
            <path
              d="M124.034 202.833C124.562 203.317 113.494 227.125 107.062 234.524C100.63 241.923 92.7207 245.574 89.3939 242.682C86.0672 239.79 88.5809 231.451 95.0136 224.051C101.446 216.651 123.505 202.35 124.034 202.833Z"
              fill="#42A0F0"
            />
            <path
              d="M96.1589 229.022C96.8051 230.056 99.0421 229.824 101.155 228.503C103.269 227.183 104.458 225.274 103.812 224.24C103.165 223.206 100.928 223.438 98.8152 224.758C96.7019 226.079 95.5127 227.988 96.1589 229.022Z"
              fill="white"
            />
            <path
              d="M192.034 202.833C192.562 203.317 181.494 227.125 175.062 234.524C168.63 241.923 160.721 245.574 157.394 242.682C154.067 239.79 156.581 231.451 163.014 224.051C169.446 216.651 191.505 202.35 192.034 202.833Z"
              fill="#42A0F0"
            />
            <path
              d="M164.159 229.022C164.805 230.056 167.042 229.824 169.155 228.503C171.269 227.183 172.458 225.274 171.812 224.24C171.165 223.206 168.928 223.438 166.815 224.758C164.702 226.079 163.513 227.988 164.159 229.022Z"
              fill="white"
            />
            <path
              d="M200.034 252.833C200.562 253.317 189.494 277.125 183.062 284.524C176.63 291.923 168.721 295.574 165.394 292.682C162.067 289.79 164.581 281.451 171.014 274.051C177.446 266.651 199.505 252.35 200.034 252.833Z"
              fill="#42A0F0"
            />
            <path
              d="M172.159 279.022C172.805 280.056 175.042 279.824 177.155 278.503C179.269 277.183 180.458 275.274 179.812 274.24C179.165 273.206 176.928 273.438 174.815 274.758C172.702 276.079 171.513 277.988 172.159 279.022Z"
              fill="white"
            />
            <path
              d="M283.034 252.833C283.562 253.317 272.494 277.125 266.062 284.524C259.63 291.923 251.721 295.574 248.394 292.682C245.067 289.79 247.581 281.451 254.014 274.051C260.446 266.651 282.505 252.35 283.034 252.833Z"
              fill="#42A0F0"
            />
            <path
              d="M255.159 279.022C255.805 280.056 258.042 279.824 260.155 278.503C262.269 277.183 263.458 275.274 262.812 274.24C262.165 273.206 259.928 273.438 257.815 274.758C255.702 276.079 254.513 277.988 255.159 279.022Z"
              fill="white"
            />
            <path
              d="M223.034 288.833C223.562 289.317 212.494 313.125 206.062 320.524C199.63 327.923 191.721 331.574 188.394 328.682C185.067 325.79 187.581 317.451 194.014 310.051C200.446 302.651 222.505 288.35 223.034 288.833Z"
              fill="#42A0F0"
            />
            <path
              d="M195.159 315.022C195.805 316.056 198.042 315.824 200.155 314.503C202.269 313.183 203.458 311.274 202.812 310.24C202.165 309.206 199.928 309.438 197.815 310.758C195.702 312.079 194.513 313.988 195.159 315.022Z"
              fill="white"
            />
            <path
              d="M147.034 288.833C147.562 289.317 136.494 313.125 130.062 320.524C123.63 327.923 115.721 331.574 112.394 328.682C109.067 325.79 111.581 317.451 118.014 310.051C124.446 302.651 146.505 288.35 147.034 288.833Z"
              fill="#42A0F0"
            />
            <path
              d="M119.159 315.022C119.805 316.056 122.042 315.824 124.155 314.503C126.269 313.183 127.458 311.274 126.812 310.24C126.165 309.206 123.928 309.438 121.815 310.758C119.702 312.079 118.513 313.988 119.159 315.022Z"
              fill="white"
            />
          </g>
          <path
            d="M113.767 245.557H134.317L122.503 262.905L136.316 263.167L107.328 297.481L114.348 271.319H101.488L113.767 245.557Z"
            fill="url(#paint0_linear_7_103)"
          />
          <path
            d="M233.767 214.557H254.317L242.503 231.905L256.316 232.167L227.328 266.481L234.348 240.319H221.488L233.767 214.557Z"
            fill="url(#paint1_linear_7_103)"
          />
          <g filter="url(#filter1_df_7_103)">
            <g filter="url(#filter2_d_7_103)">
              <path
                d="M235.562 233.765C233.629 233.92 231.676 233.999 229.705 234H92.1812C82.7149 234.035 73.3348 232.201 64.579 228.603C55.8232 225.005 47.8639 219.714 41.1577 213.032C34.4516 206.351 29.1305 198.412 25.4997 189.669C21.869 180.927 20 171.554 20 162.087C20 152.621 21.869 143.248 25.4997 134.506C29.1305 125.763 34.4516 117.824 41.1577 111.143C47.8639 104.461 55.8232 99.17 64.579 95.5718C73.3348 91.9737 82.7149 90.1397 92.1812 90.175H143.457C160.081 53.6 198.368 28 242.941 28C302.768 28 351.268 74.115 351.268 131C351.268 187.885 302.768 234 242.941 234C240.461 234 238.001 233.922 235.562 233.765Z"
                fill="url(#paint2_linear_7_103)"
              />
              <path
                d="M242.941 233C250.227 233 257.508 232.302 264.582 230.926C271.475 229.585 278.255 227.584 284.734 224.978C291.095 222.42 297.229 219.254 302.968 215.568C308.651 211.917 313.995 207.725 318.851 203.107C323.707 198.49 328.115 193.411 331.953 188.009C335.827 182.557 339.154 176.728 341.842 170.686C344.579 164.532 346.682 158.093 348.09 151.547C349.536 144.831 350.269 137.917 350.269 131C350.269 124.082 349.536 117.169 348.09 110.452C346.682 103.906 344.579 97.4673 341.842 91.3142C339.154 85.2716 335.827 79.4433 331.953 73.991C328.115 68.5893 323.707 63.5095 318.851 58.8928C313.995 54.2752 308.651 50.0829 302.968 46.4323C297.229 42.7461 291.095 39.5801 284.734 37.0221C278.255 34.4165 271.475 32.4154 264.582 31.0742C257.508 29.6979 250.227 29 242.941 29C221.57 29 200.931 34.9523 183.255 46.2135C174.734 51.6418 167.078 58.1939 160.498 65.6878C153.876 73.2291 148.449 81.6069 144.367 90.5885L144.101 91.1747H143.457H92.1812C82.6077 91.1747 73.321 93.0495 64.5792 96.747C60.3776 98.5242 56.325 100.724 52.5341 103.285C48.7789 105.822 45.2477 108.735 42.0385 111.945C38.8293 115.154 35.9157 118.685 33.3788 122.44C30.8177 126.231 28.618 130.284 26.8408 134.485C23.1433 143.227 21.2686 152.514 21.2686 162.087C21.2686 171.661 23.1433 180.948 26.8408 189.689C28.618 193.891 30.8177 197.944 33.3788 201.735C35.9157 205.49 38.8293 209.021 42.0385 212.23C45.2477 215.439 48.7789 218.353 52.5341 220.89C56.325 223.451 60.3776 225.651 64.5792 227.428C73.321 231.125 82.6077 233 92.1812 233H229.706C231.629 233 233.572 232.922 235.483 232.768L235.555 232.762L235.627 232.767C238.046 232.922 240.507 233 242.941 233ZM242.941 234C240.462 234 238.001 233.921 235.563 233.765C233.632 233.92 231.676 234 229.706 234H92.1812C52.4651 234 20.2686 201.803 20.2686 162.087C20.2686 122.371 52.4651 90.1747 92.1812 90.1747H143.457C160.081 53.5954 198.366 28 242.941 28C302.769 28 351.269 74.1151 351.269 131C351.269 187.885 302.769 234 242.941 234Z"
                fill="white"
                fillOpacity="0.5"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_7_103"
              x="83.9248"
              y="198.821"
              width="203.127"
              height="134.852"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_7_103"
              />
            </filter>
            <filter
              id="filter2_d_7_103"
              x="0"
              y="0"
              width="391.269"
              height="266.001"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="10" dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.302 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_7_103"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_7_103"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_7_103"
              x1="115.698"
              y1="271.519"
              x2="99.4298"
              y2="265.555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD100" />
              <stop offset="1" stopColor="#FFF0AA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7_103"
              x1="235.698"
              y1="240.519"
              x2="219.43"
              y2="234.555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD100" />
              <stop offset="1" stopColor="#FFF0AA" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_7_103"
              x1="154.164"
              y1="53.9561"
              x2="220.206"
              y2="245.168"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.596" />
              <stop offset="1" stopColor="#F7F7F7" stopOpacity="0.204" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z"
            fill="#4793FF"
          />
          <path
            d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7197C5.9269 11.0126 5.9269 11.4874 6.21978 11.7802C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7802L9.00003 10.0605L10.7198 11.7802C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7802C12.0731 11.4874 12.0731 11.0126 11.7803 10.7197L10.0605 9Z"
            fill="#4793FF"
          />
        </svg>
      );
    default:
      return null;
  }
};

// case "":
//   return (
//   );
