import { useState } from "react";

const UpperSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="main w-full min-h-screen overflow-hidden pb-[2vw]"
      style={{
        background: "linear-gradient(135deg, #76c7f4 0%, #ff8a96 100%)",
      }}
    >
      <nav className="w-full bg-transparent">
        <div className="bar flex items-center justify-between p-5 font-sans">
          <div className="logo flex items-center justify-center p-5 px-10 gap-3">
            <div>
              <svg
                width="37"
                height="64"
                viewBox="0 0 37 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z"
                  fill="white"
                />
                <path
                  d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z"
                  fill="white"
                />
                <path
                  d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="font-bold text-white">Pop Rock Crystal</h2>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="semi-container hidden md:flex items-center gap-[15vw]">
            <div className="content">
              <ul className="flex items-center justify-center gap-4 text-white">
                <li>Home</li>
                <li>Shop</li>
                <li>About Us</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="shop">
              <svg
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.8502 11.25H41.0937L35.75 4.125C35.6626 4.00857 35.5494 3.91406 35.4192 3.84897C35.289 3.78389 35.1455 3.75 35 3.75C34.8544 3.75 34.7109 3.78389 34.5807 3.84897C34.4505 3.91406 34.3373 4.00857 34.25 4.125L28.9062 11.25H25.1498C24.6444 11.2492 24.1594 11.4489 23.8011 11.8052C23.4428 12.1616 23.2405 12.6455 23.2384 13.1508C23.2373 13.3294 23.2632 13.5072 23.3152 13.6781L26.0263 23.2371C26.2026 23.8601 26.5776 24.4085 27.0941 24.7989C27.6107 25.1893 28.2406 25.4003 28.888 25.3998H41.1119C41.7594 25.3978 42.3889 25.1864 42.9064 24.7971C43.4239 24.4079 43.8015 23.8616 43.983 23.24L46.6976 13.6682C46.7101 13.6228 46.7192 13.5766 46.7246 13.5299L46.7556 13.241C46.7591 13.2109 46.7609 13.1805 46.7609 13.1502C46.7587 12.6451 46.5564 12.1614 46.1982 11.8052C45.8401 11.449 45.3553 11.2494 44.8502 11.25ZM35 6.2502L38.75 11.25H31.25L35 6.2502ZM35 20.6057C34.5635 20.6036 34.1375 20.4723 33.7756 20.2283C33.4137 19.9843 33.1322 19.6386 32.9667 19.2347C32.8011 18.8309 32.7588 18.3871 32.8453 17.9593C32.9317 17.5315 33.1429 17.1389 33.4522 16.831C33.7616 16.5231 34.1552 16.3138 34.5834 16.2294C35.0116 16.145 35.4552 16.1894 35.8583 16.3569C36.2613 16.5244 36.6057 16.8075 36.8479 17.1705C37.0902 17.5336 37.2195 17.9602 37.2195 18.3967C37.2162 18.9831 36.9809 19.5445 36.565 19.958C36.1491 20.3715 35.5864 20.6035 35 20.6033V20.6057Z"
                  fill="white"
                />
                <circle cx="7" cy="15" r="7" fill="#FF2B77" />
                <path
                  d="M4.29756 18.128C3.8389 18.128 3.43623 18.0053 3.08956 17.76C2.7429 17.5093 2.47356 17.168 2.28156 16.736C2.0949 16.2987 2.00156 15.808 2.00156 15.264C2.00156 14.72 2.0949 14.232 2.28156 13.8C2.47356 13.3627 2.7429 13.0213 3.08956 12.776C3.43623 12.5253 3.8389 12.4 4.29756 12.4C4.75623 12.4 5.1589 12.5253 5.50556 12.776C5.85223 13.0213 6.1189 13.3627 6.30556 13.8C6.49756 14.232 6.59356 14.72 6.59356 15.264C6.59356 15.808 6.49756 16.2987 6.30556 16.736C6.1189 17.168 5.85223 17.5093 5.50556 17.76C5.1589 18.0053 4.75623 18.128 4.29756 18.128ZM4.29756 17.144C4.55356 17.144 4.7749 17.064 4.96156 16.904C5.15356 16.7387 5.29756 16.5147 5.39356 16.232C5.4949 15.944 5.54556 15.6213 5.54556 15.264C5.54556 14.7093 5.43356 14.2587 5.20956 13.912C4.98556 13.56 4.68156 13.384 4.29756 13.384C3.9189 13.384 3.61756 13.56 3.39356 13.912C3.16956 14.264 3.05756 14.7147 3.05756 15.264C3.05756 15.6213 3.10556 15.944 3.20156 16.232C3.3029 16.5147 3.4469 16.7387 3.63356 16.904C3.82556 17.064 4.0469 17.144 4.29756 17.144ZM9.696 18.128C9.23733 18.128 8.83467 18.0053 8.488 17.76C8.14133 17.5093 7.872 17.168 7.68 16.736C7.49333 16.2987 7.4 15.808 7.4 15.264C7.4 14.72 7.49333 14.232 7.68 13.8C7.872 13.3627 8.14133 13.0213 8.488 12.776C8.83467 12.5253 9.23733 12.4 9.696 12.4C10.1547 12.4 10.5573 12.5253 10.904 12.776C11.2507 13.0213 11.5173 13.3627 11.704 13.8C11.896 14.232 11.992 14.72 11.992 15.264C11.992 15.808 11.896 16.2987 11.704 16.736C11.5173 17.168 11.2507 17.5093 10.904 17.76C10.5573 18.0053 10.1547 18.128 9.696 18.128ZM9.696 17.144C9.952 17.144 10.1733 17.064 10.36 16.904C10.552 16.7387 10.696 16.5147 10.792 16.232C10.8933 15.944 10.944 15.6213 10.944 15.264C10.944 14.7093 10.832 14.2587 10.608 13.912C10.384 13.56 10.08 13.384 9.696 13.384C9.31733 13.384 9.016 13.56 8.792 13.912C8.568 14.264 8.456 14.7147 8.456 15.264C8.456 15.6213 8.504 15.944 8.6 16.232C8.70133 16.5147 8.84533 16.7387 9.032 16.904C9.224 17.064 9.44533 17.144 9.696 17.144Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white text-gray-800 space-y-4 py-6 transition-opacity duration-300 ease-in-out">
            <a href="#" className="transition-opacity duration-300 ease-in-out">Home</a>
            <a href="#" className="transition-opacity duration-300 ease-in-out">Shop</a>
            <a href="#" className="transition-opacity duration-300 ease-in-out">About Us</a>
            <a href="#" className="transition-opacity duration-300 ease-in-out">Help</a>
          </div>
        )}
      </nav>

      <div className="heroSection w-full h-[80vh] p-10 flex flex-col md:flex-row justify-evenly relative">
        <svg
          className="absolute bottom-[-6%] left-0 w-full"
          viewBox="0 0 1440 604"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
            fill="white"
          />
        </svg>
        <div className="flex w-full md:w-[45%] flex-col space-y-4 z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Pop Rock Crystal Shop!
          </h2>
          <p className="text-md md:text-lg text-white mt-4">
            Here you will find unique phone accessories, crystals, jewelry, and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <button className="bg-white text-blue-500 py-3 px-6 md:px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              SHOP NOW
            </button>
            <a href="#" className="text-white underline text-md md:text-lg">
              about us
            </a>
          </div>
        </div>
        <div className="product-card hidden md:w-[35%] bg-white rounded-lg shadow-lg p-6 md:p-8 md:flex flex-col items-center space-y-6 relative z-20 gap-5">
          <div className="new-lot bg-purple-400 text-white p-2 rounded-r-2xl absolute top-[10%] left-0">
            New lot
          </div>
          <img
            src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crystal Agate Phone Grip"
            className="w-[50vw] md:w-[15vw] object-cover rounded-lg"
          />
          <h3 className="text-lg font-bold text-gray-800 text-center">
            CRYSTAL AGATE PHONE GRIP -{" "}
            <span className="text-[#2f3556]">18.99$</span>
          </h3>
        </div>
        <div className="hidden md:block absolute top-[100%] right-[20%]">
          <svg
            width="158"
            height="14"
            viewBox="0 0 158 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="#8A93E5" />
            <circle cx="31" cy="7" r="7" fill="#D7DBFF" />
            <circle cx="55" cy="7" r="7" fill="#D7DBFF" />
            <circle cx="79" cy="7" r="7" fill="#D7DBFF" />
            <circle cx="103" cy="7" r="7" fill="#D7DBFF" />
            <circle cx="127" cy="7" r="7" fill="#D7DBFF" />
            <circle cx="151" cy="7" r="7" fill="#D7DBFF" />
          </svg>
        </div>
      </div>
      <div className="hidden absolute inset-0 top-[100%] md:flex items-center justify-center font-black">
        <svg
          width="121"
          height="38"
          viewBox="0 0 121 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 24.256C47.0613 24.256 46.2933 24.0533 45.696 23.648C45.0987 23.232 44.6773 22.704 44.432 22.064L46 21.376C46.192 21.8027 46.4587 22.128 46.8 22.352C47.152 22.576 47.552 22.688 48 22.688C48.4373 22.688 48.8053 22.6133 49.104 22.464C49.4027 22.304 49.552 22.0693 49.552 21.76C49.552 21.4613 49.424 21.2267 49.168 21.056C48.912 20.8853 48.5173 20.736 47.984 20.608L47.008 20.368C46.3573 20.208 45.8187 19.9253 45.392 19.52C44.9653 19.1147 44.752 18.6027 44.752 17.984C44.752 17.504 44.8907 17.0827 45.168 16.72C45.456 16.3573 45.84 16.08 46.32 15.888C46.8 15.6853 47.3227 15.584 47.888 15.584C48.6453 15.584 49.312 15.7387 49.888 16.048C50.464 16.3467 50.88 16.784 51.136 17.36L49.6 18.032C49.2907 17.4027 48.7253 17.088 47.904 17.088C47.5093 17.088 47.1787 17.168 46.912 17.328C46.6453 17.488 46.512 17.696 46.512 17.952C46.512 18.1973 46.6133 18.4 46.816 18.56C47.0187 18.7093 47.3173 18.8373 47.712 18.944L48.912 19.248C49.712 19.4507 50.3147 19.76 50.72 20.176C51.136 20.5813 51.344 21.0827 51.344 21.68C51.344 22.192 51.1947 22.6453 50.896 23.04C50.608 23.424 50.208 23.7227 49.696 23.936C49.184 24.1493 48.6187 24.256 48 24.256ZM52.7896 15.84H54.4696V17.04H54.5496C54.731 16.624 55.0456 16.2827 55.4936 16.016C55.9416 15.7387 56.4163 15.6 56.9176 15.6C57.3123 15.6 57.643 15.6533 57.9096 15.76V17.584C57.4403 17.4133 57.019 17.328 56.6456 17.328C56.2403 17.328 55.8776 17.4347 55.5576 17.648C55.2483 17.8613 55.003 18.1493 54.8216 18.512C54.6403 18.864 54.5496 19.2533 54.5496 19.68V24H52.7896V15.84ZM62.598 24.256C61.7767 24.256 61.0407 24.0693 60.39 23.696C59.7393 23.312 59.2327 22.7893 58.87 22.128C58.5073 21.4667 58.326 20.7307 58.326 19.92C58.326 19.1093 58.5073 18.3733 58.87 17.712C59.2327 17.0507 59.7393 16.5333 60.39 16.16C61.0407 15.776 61.7767 15.584 62.598 15.584C63.4193 15.584 64.1553 15.776 64.806 16.16C65.4567 16.544 65.9633 17.0667 66.326 17.728C66.6887 18.3893 66.87 19.12 66.87 19.92C66.87 20.7307 66.6887 21.4667 66.326 22.128C65.9633 22.7893 65.4567 23.312 64.806 23.696C64.1553 24.0693 63.4193 24.256 62.598 24.256ZM62.598 22.64C63.046 22.64 63.462 22.5333 63.846 22.32C64.23 22.096 64.534 21.7813 64.758 21.376C64.9927 20.96 65.11 20.4747 65.11 19.92C65.11 19.3653 64.9927 18.8853 64.758 18.48C64.534 18.0747 64.23 17.7653 63.846 17.552C63.462 17.328 63.046 17.216 62.598 17.216C62.15 17.216 61.734 17.328 61.35 17.552C60.966 17.7653 60.6567 18.0747 60.422 18.48C60.198 18.8853 60.086 19.3653 60.086 19.92C60.086 20.4747 60.198 20.96 60.422 21.376C60.6567 21.7813 60.966 22.096 61.35 22.32C61.734 22.5333 62.15 22.64 62.598 22.64ZM68.4146 12.544H70.1746V24H68.4146V12.544ZM72.2428 12.544H74.0028V24H72.2428V12.544ZM83.3089 24.256C82.5729 24.256 81.9062 24.0693 81.3089 23.696C80.7115 23.3227 80.2369 22.8107 79.8849 22.16C79.5435 21.4987 79.3729 20.752 79.3729 19.92C79.3729 19.088 79.5435 18.3467 79.8849 17.696C80.2369 17.0347 80.7115 16.5173 81.3089 16.144C81.9062 15.7707 82.5729 15.584 83.3089 15.584C83.8849 15.584 84.4022 15.712 84.8609 15.968C85.3195 16.224 85.6662 16.5387 85.9009 16.912H85.9809L85.9009 15.76V12.544H87.6609V24H85.9809V22.944H85.9009C85.6662 23.3067 85.3195 23.616 84.8609 23.872C84.4022 24.128 83.8849 24.256 83.3089 24.256ZM83.5649 22.64C83.9915 22.64 84.3862 22.528 84.7489 22.304C85.1222 22.08 85.4209 21.76 85.6449 21.344C85.8689 20.928 85.9809 20.4533 85.9809 19.92C85.9809 19.3867 85.8689 18.9173 85.6449 18.512C85.4209 18.096 85.1222 17.776 84.7489 17.552C84.3862 17.328 83.9915 17.216 83.5649 17.216C83.1382 17.216 82.7382 17.328 82.3649 17.552C81.9915 17.776 81.6929 18.096 81.4689 18.512C81.2449 18.9173 81.1329 19.3867 81.1329 19.92C81.1329 20.4533 81.2449 20.928 81.4689 21.344C81.6929 21.76 81.9915 22.08 82.3649 22.304C82.7382 22.528 83.1382 22.64 83.5649 22.64ZM93.4574 24.256C92.636 24.256 91.9 24.0693 91.2494 23.696C90.5987 23.312 90.092 22.7893 89.7294 22.128C89.3667 21.4667 89.1854 20.7307 89.1854 19.92C89.1854 19.1093 89.3667 18.3733 89.7294 17.712C90.092 17.0507 90.5987 16.5333 91.2494 16.16C91.9 15.776 92.636 15.584 93.4574 15.584C94.2787 15.584 95.0147 15.776 95.6654 16.16C96.316 16.544 96.8227 17.0667 97.1854 17.728C97.548 18.3893 97.7294 19.12 97.7294 19.92C97.7294 20.7307 97.548 21.4667 97.1854 22.128C96.8227 22.7893 96.316 23.312 95.6654 23.696C95.0147 24.0693 94.2787 24.256 93.4574 24.256ZM93.4574 22.64C93.9054 22.64 94.3214 22.5333 94.7054 22.32C95.0894 22.096 95.3934 21.7813 95.6174 21.376C95.852 20.96 95.9694 20.4747 95.9694 19.92C95.9694 19.3653 95.852 18.8853 95.6174 18.48C95.3934 18.0747 95.0894 17.7653 94.7054 17.552C94.3214 17.328 93.9054 17.216 93.4574 17.216C93.0094 17.216 92.5934 17.328 92.2094 17.552C91.8254 17.7653 91.516 18.0747 91.2814 18.48C91.0574 18.8853 90.9454 19.3653 90.9454 19.92C90.9454 20.4747 91.0574 20.96 91.2814 21.376C91.516 21.7813 91.8254 22.096 92.2094 22.32C92.5934 22.5333 93.0094 22.64 93.4574 22.64ZM98.2839 15.84H100.188L101.836 21.68H101.9L103.74 15.84H105.548L107.372 21.68H107.436L109.084 15.84H110.956L108.348 24H106.492L104.62 18.144H104.572L102.716 24H100.892L98.2839 15.84ZM112.087 15.84H113.767V16.912H113.847C114.081 16.528 114.428 16.2133 114.887 15.968C115.356 15.712 115.852 15.584 116.375 15.584C117.367 15.584 118.119 15.8773 118.631 16.464C119.153 17.04 119.415 17.8293 119.415 18.832V24H117.655V19.072C117.655 18.432 117.495 17.9627 117.175 17.664C116.865 17.3653 116.433 17.216 115.879 17.216C115.484 17.216 115.132 17.328 114.823 17.552C114.513 17.7653 114.273 18.0533 114.103 18.416C113.932 18.7787 113.847 19.168 113.847 19.584V24H112.087V15.84Z"
            fill="#317189"
          />
          <path
            d="M14 7C13.6906 7 13.3938 7.12291 13.175 7.3417C12.9562 7.5605 12.8333 7.85724 12.8333 8.16666V10.5C12.8333 10.8094 12.9562 11.1062 13.175 11.325C13.3938 11.5437 13.6906 11.6667 14 11.6667C14.3094 11.6667 14.6061 11.5437 14.8249 11.325C15.0437 11.1062 15.1666 10.8094 15.1666 10.5V8.16666C15.1666 7.85724 15.0437 7.5605 14.8249 7.3417C14.6061 7.12291 14.3094 7 14 7ZM14 2.33333C11.834 2.33333 9.75682 3.19374 8.22527 4.72529C6.69373 6.25684 5.83331 8.33406 5.83331 10.5V17.5C5.83331 19.6659 6.69373 21.7432 8.22527 23.2747C9.75682 24.8062 11.834 25.6667 14 25.6667C16.1659 25.6667 18.2431 24.8062 19.7747 23.2747C21.3062 21.7432 22.1666 19.6659 22.1666 17.5V10.5C22.1666 8.33406 21.3062 6.25684 19.7747 4.72529C18.2431 3.19374 16.1659 2.33333 14 2.33333ZM19.8333 17.5C19.8333 19.0471 19.2187 20.5308 18.1248 21.6248C17.0308 22.7187 15.5471 23.3333 14 23.3333C12.4529 23.3333 10.9692 22.7187 9.87519 21.6248C8.78123 20.5308 8.16665 19.0471 8.16665 17.5V10.5C8.16665 8.9529 8.78123 7.46917 9.87519 6.37521C10.9692 5.28124 12.4529 4.66666 14 4.66666C15.5471 4.66666 17.0308 5.28124 18.1248 6.37521C19.2187 7.46917 19.8333 8.9529 19.8333 10.5V17.5Z"
            fill="#307189"
          />
          <path
            d="M14.866 36.5C14.4811 37.1667 13.5189 37.1667 13.134 36.5L12.2679 35C11.883 34.3333 12.3642 33.5 13.134 33.5L14.866 33.5C15.6358 33.5 16.117 34.3333 15.7321 35L14.866 36.5Z"
            fill="#307189"
          />
        </svg>
      </div>
    </div>
  );
};

export default UpperSection;
