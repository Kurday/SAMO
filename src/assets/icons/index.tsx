type Props = Record<string, string>;

export const CalendarCloseCross = (props: Props) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 1L11 11"
            stroke="#25315B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M1 11.0003L11 1.00034"
            stroke="#25315B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

export const CalendarFlag = (props: Props) => (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.66667 13.3333H16.6667C16.8196 13.3332 16.9696 13.291 17.1002 13.2114C17.2308 13.1317 17.3369 13.0176 17.407 12.8817C17.477 12.7457 17.5083 12.593 17.4974 12.4405C17.4864 12.2879 17.4337 12.1413 17.345 12.0167L13.5233 6.66667L17.345 1.31667C17.4337 1.19206 17.4864 1.04544 17.4974 0.892867C17.5083 0.740295 17.477 0.587659 17.407 0.45168C17.3369 0.315702 17.2308 0.201629 17.1002 0.121958C16.9696 0.0422878 16.8196 9.42771e-05 16.6667 0H0.833333C0.61232 0 0.400358 0.0877975 0.244078 0.244078C0.0877975 0.400358 0 0.61232 0 0.833333V19.1667C0 19.3877 0.0877975 19.5996 0.244078 19.7559C0.400358 19.9122 0.61232 20 0.833333 20C1.05435 20 1.26631 19.9122 1.42259 19.7559C1.57887 19.5996 1.66667 19.3877 1.66667 19.1667V13.3333Z"
            fill="#25315B"
        />
    </svg>
);

export const CalendarAddDescription = (props: Props) => (
    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 11.5C0 11.2789 0.0877975 11.067 0.244078 10.9107C0.400358 10.7544 0.61232 10.6666 0.833333 10.6666H10.8333C11.0543 10.6666 11.2663 10.7544 11.4226 10.9107C11.5789 11.067 11.6667 11.2789 11.6667 11.5C11.6667 11.721 11.5789 11.9329 11.4226 12.0892C11.2663 12.2455 11.0543 12.3333 10.8333 12.3333H0.833333C0.61232 12.3333 0.400358 12.2455 0.244078 12.0892C0.0877975 11.9329 0 11.721 0 11.5ZM0 6.49996C0 6.27895 0.0877975 6.06698 0.244078 5.9107C0.400358 5.75442 0.61232 5.66663 0.833333 5.66663H19.1667C19.3877 5.66663 19.5996 5.75442 19.7559 5.9107C19.9122 6.06698 20 6.27895 20 6.49996C20 6.72097 19.9122 6.93294 19.7559 7.08922C19.5996 7.2455 19.3877 7.33329 19.1667 7.33329H0.833333C0.61232 7.33329 0.400358 7.2455 0.244078 7.08922C0.0877975 6.93294 0 6.72097 0 6.49996ZM0 1.49996C0 1.27895 0.0877975 1.06698 0.244078 0.910704C0.400358 0.754424 0.61232 0.666626 0.833333 0.666626H19.1667C19.3877 0.666626 19.5996 0.754424 19.7559 0.910704C19.9122 1.06698 20 1.27895 20 1.49996C20 1.72097 19.9122 1.93293 19.7559 2.08921C19.5996 2.2455 19.3877 2.33329 19.1667 2.33329H0.833333C0.61232 2.33329 0.400358 2.2455 0.244078 2.08921C0.0877975 1.93293 0 1.72097 0 1.49996Z"
            fill="black"
        />
    </svg>
);

export const CalendarCheck = (props: Props) => (
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8306 2.15508L5.59744 10.4667L0.818359 5.70725L2.23842 4.29304L5.49239 7.53362L11.313 0.845215L12.8306 2.15508Z"
            fill="white"
        />
    </svg>
);

export const CalendarPerson = (props: Props) => (
    <svg
        className="icon"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 0.813721C5 0.64796 4.93415 0.488989 4.81694 0.371779C4.69973 0.254569 4.54076 0.188721 4.375 0.188721C4.20924 0.188721 4.05027 0.254569 3.93306 0.371779C3.81585 0.488989 3.75 0.64796 3.75 0.813721V1.43872H2.5C1.83696 1.43872 1.20107 1.70211 0.732233 2.17095C0.263392 2.63979 0 3.27568 0 3.93872L0 5.18872H20V3.93872C20 3.27568 19.7366 2.63979 19.2678 2.17095C18.7989 1.70211 18.163 1.43872 17.5 1.43872H16.25V0.813721C16.25 0.64796 16.1842 0.488989 16.0669 0.371779C15.9497 0.254569 15.7908 0.188721 15.625 0.188721C15.4592 0.188721 15.3003 0.254569 15.1831 0.371779C15.0658 0.488989 15 0.64796 15 0.813721V1.43872H5V0.813721ZM20 17.6887V6.43872H0V17.6887C0 18.3518 0.263392 18.9876 0.732233 19.4565C1.20107 19.9253 1.83696 20.1887 2.5 20.1887H17.5C18.163 20.1887 18.7989 19.9253 19.2678 19.4565C19.7366 18.9876 20 18.3518 20 17.6887ZM15.625 8.93872H16.875C17.0408 8.93872 17.1997 9.00457 17.3169 9.12178C17.4342 9.23899 17.5 9.39796 17.5 9.56372V10.8137C17.5 10.9795 17.4342 11.1385 17.3169 11.2557C17.1997 11.3729 17.0408 11.4387 16.875 11.4387H15.625C15.4592 11.4387 15.3003 11.3729 15.1831 11.2557C15.0658 11.1385 15 10.9795 15 10.8137V9.56372C15 9.39796 15.0658 9.23899 15.1831 9.12178C15.3003 9.00457 15.4592 8.93872 15.625 8.93872Z"
            fill="#25315B"
        />
    </svg>
);

export const CalendarPlace = (props: Props) => (
    <svg
        className="icon"
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8 0.0219727C9.98912 0.0219727 11.8968 0.812149 13.3033 2.21867C14.7098 3.62519 15.5 5.53285 15.5 7.52197C15.5 10.627 13.1333 13.8803 8.5 17.3553C8.35575 17.4635 8.18031 17.522 8 17.522C7.81969 17.522 7.64425 17.4635 7.5 17.3553C2.86667 13.8803 0.5 10.627 0.5 7.52197C0.5 5.53285 1.29018 3.62519 2.6967 2.21867C4.10322 0.812149 6.01088 0.0219727 8 0.0219727ZM8 5.02197C7.33696 5.02197 6.70107 5.28536 6.23223 5.75421C5.76339 6.22305 5.5 6.85893 5.5 7.52197C5.5 8.18501 5.76339 8.8209 6.23223 9.28974C6.70107 9.75858 7.33696 10.022 8 10.022C8.66304 10.022 9.29893 9.75858 9.76777 9.28974C10.2366 8.8209 10.5 8.18501 10.5 7.52197C10.5 6.85893 10.2366 6.22305 9.76777 5.75421C9.29893 5.28536 8.66304 5.02197 8 5.02197Z"
            fill="#25315B"
        />
    </svg>
);

export const CalendarGuests = (props: Props) => (
    <svg
        className="icon"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 13.1888V15.1888H0V13.1888C0 13.1888 0 9.18877 7 9.18877C14 9.18877 14 13.1888 14 13.1888ZM10.5 3.68877C10.5 2.99654 10.2947 2.31985 9.91014 1.74428C9.52556 1.16871 8.97893 0.720102 8.33939 0.455195C7.69985 0.190288 6.99612 0.120977 6.31718 0.256025C5.63825 0.391073 5.01461 0.724416 4.52513 1.2139C4.03564 1.70338 3.7023 2.32702 3.56725 3.00596C3.4322 3.68489 3.50152 4.38862 3.76642 5.02816C4.03133 5.66771 4.47993 6.21433 5.0555 6.59892C5.63108 6.9835 6.30777 7.18877 7 7.18877C7.92826 7.18877 8.8185 6.82002 9.47487 6.16365C10.1313 5.50727 10.5 4.61703 10.5 3.68877ZM13.94 9.18877C14.5547 9.66452 15.0578 10.2692 15.4137 10.9603C15.7696 11.6514 15.9697 12.412 16 13.1888V15.1888H20V13.1888C20 13.1888 20 9.55877 13.94 9.18877ZM13 0.188773C12.3117 0.184941 11.6385 0.390729 11.07 0.778773C11.6774 1.62751 12.0041 2.64506 12.0041 3.68877C12.0041 4.73249 11.6774 5.75004 11.07 6.59877C11.6385 6.98682 12.3117 7.19261 13 7.18877C13.9283 7.18877 14.8185 6.82002 15.4749 6.16365C16.1313 5.50727 16.5 4.61703 16.5 3.68877C16.5 2.76052 16.1313 1.87028 15.4749 1.2139C14.8185 0.557522 13.9283 0.188773 13 0.188773Z"
            fill="#25315B"
        />
    </svg>
);

export const CalendarTime = (props: Props) => (
    <svg
        className="icon"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 0.188721C4.486 0.188721 0 4.67472 0 10.1887C0 15.7027 4.486 20.1887 10 20.1887C15.514 20.1887 20 15.7027 20 10.1887C20 4.67472 15.514 0.188721 10 0.188721ZM15.75 11.1887H9V4.18872H11V9.18872H15.75V11.1887Z"
            fill="#25315B"
        />
    </svg>
);

export const BookIcon = (props: Props) => (
    <svg width={15} height={20} color="#25315b" {...props}>
        <path
            d="M1.984 0A1.984 1.984 0 0 0 0 1.984v16.04A1.975 1.975 0 0 0 1.984 20h13V0h-13Zm12 19.2H2.232a1.072 1.072 0 0 1-1.072-1.064v-.64a1.072 1.072 0 0 1 1.072-1.072h11.784l-.032 2.776Z"
            fill="currentColor"
        />
    </svg>
);

export const BookmarkIcon = (props: Props) => (
    <svg width={15} height={20} color="#25315b" {...props}>
        <path
            d="m9.647 5.273 1.92.96V0h3.417v20h-13A1.978 1.978 0 0 1 0 18.024V1.984A1.984 1.984 0 0 1 1.984 0h5.743v6.233l1.92-.96ZM2.232 19.2h11.752l.032-2.776H2.232a1.072 1.072 0 0 0-1.072 1.072v.64A1.072 1.072 0 0 0 2.232 19.2Z"
            fill="currentColor"
        />
    </svg>
);

export const TextIcon = (props: Props) => (
    <svg width={20} height={13} color="#25315b" {...props}>
        <path
            d="M0 11.5a.833.833 0 0 1 .833-.833h10a.833.833 0 0 1 0 1.667h-10A.833.833 0 0 1 0 11.5Zm0-5a.833.833 0 0 1 .833-.833h18.334a.833.833 0 0 1 0 1.667H.833A.833.833 0 0 1 0 6.5Zm0-5A.833.833 0 0 1 .833.667h18.334a.833.833 0 0 1 0 1.667H.833A.833.833 0 0 1 0 1.5Z"
            fill="currentColor"
        />
    </svg>
);

export const TrashIcon = (props: Props) => (
    <svg width={15} height={15} color="#25315b" {...props}>
        <path
            d="M5.167 0v.833H1V2.5h.833v10.833A1.666 1.666 0 0 0 3.5 15h8.333a1.666 1.666 0 0 0 1.667-1.667V2.5h.833V.833h-4.166V0h-5ZM3.5 2.5h8.333v10.833H3.5V2.5Zm1.667 1.667v7.5h1.666v-7.5H5.167Zm3.333 0v7.5h1.667v-7.5H8.5Z"
            fill="currentColor"
        />
    </svg>
);

export const EditIcon = (props: Props) => (
    <svg width={15} height={15} color="#25315b" {...props}>
        <path
            d="m13.328 3.824-2.149-2.149a1.568 1.568 0 0 0-2.085-.055L2.037 8.677c-.254.256-.411.59-.447.949l-.337 3.27a.784.784 0 0 0 .784.854h.07l3.27-.298c.358-.036.693-.193.949-.447l7.057-7.057a1.505 1.505 0 0 0-.055-2.124Zm-8.092 8.06-2.352.22.211-2.353 4.43-4.375 2.117 2.117-4.406 4.39Zm5.426-5.442L8.56 4.341l1.53-1.568 2.14 2.14-1.568 1.53Z"
            fill="currentColor"
        />
    </svg>
);

export const SearchIcon = (props: Props) => (
    <svg
        className={props?.className}
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0)">
            <path
                d="M12.902 6.5C12.902 9.64148 10.2167 12.25 6.82598 12.25C3.4353 12.25 0.75 9.64148 0.75 6.5C0.75 3.35852 3.4353 0.75 6.82598 0.75C10.2167 0.75 12.902 3.35852 12.902 6.5Z"
                stroke={props?.stroke || '#25315B'}
                strokeWidth="1.5"
            />
            <path
                d="M11.5516 11L15.7522 15"
                stroke={props?.stroke || '#25315B'}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="16.8024" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const PushIcon = (props: Props) => (
    <svg
        width="20"
        className={props?.className}
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.20337 19C10.3625 19 11.3027 18.1047 11.3027 17H7.10405C7.10405 18.1047 8.04427 19 9.20337 19ZM16.2719 14.3216C15.6378 13.6728 14.4515 12.6969 14.4515 9.5C14.4515 7.07188 12.6636 5.12812 10.2529 4.65125V4C10.2529 3.44781 9.78292 3 9.20337 3C8.62382 3 8.15388 3.44781 8.15388 4V4.65125C5.74312 5.12812 3.95524 7.07188 3.95524 9.5C3.95524 12.6969 2.7689 13.6728 2.13487 14.3216C1.93797 14.5231 1.85068 14.7641 1.85232 15C1.85593 15.5125 2.27828 16 2.90575 16H15.501C16.1285 16 16.5511 15.5125 16.5544 15C16.5561 14.7641 16.4688 14.5228 16.2719 14.3216Z"
            fill={props?.fill || '#25315b'}
        />
        <path
            d="M14.4542 8.75C16.5733 8.75 18.3546 7.10523 18.3546 5C18.3546 2.89477 16.5733 1.25 14.4542 1.25C12.335 1.25 10.5537 2.89477 10.5537 5C10.5537 7.10523 12.335 8.75 14.4542 8.75Z"
            fill="#69f7d5"
            stroke={props?.stroke || '#dde2ff'}
            strokeWidth="1.5"
        />
    </svg>
);

export const ArrowIcon = () => (
    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 17L9.5 9.5L2 2"
            stroke="#25315B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const BalanceWheelIcon = () => (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12V20H9V13H13V20H18V12H22L11 0L0 12H4Z"
            fill="#25315B"
        />
    </svg>
);

export const DiaryIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.0734 2.15334V3.86667H5.58668V2.15334H2.15335V17.96H17.96V2.15334H15.0734ZM15.8334 7.39334H4.59335V6.42H15.8334V7.39334ZM15.8334 10.7267H4.59335V9.75334H15.8334V10.7267ZM15.8334 14.06H4.59335V13.0867H15.8334V14.06Z"
            fill="#25315B"
        />
        <path d="M14 1.29335H6.66666V2.66668H14V1.29335Z" fill="#25315B" />
    </svg>
);

export const CalendarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.5 0C3.63261 0 3.75979 0.0526784 3.85355 0.146447C3.94732 0.240215 4 0.367392 4 0.5V1H12V0.5C12 0.367392 12.0527 0.240215 12.1464 0.146447C12.2402 0.0526784 12.3674 0 12.5 0C12.6326 0 12.7598 0.0526784 12.8536 0.146447C12.9473 0.240215 13 0.367392 13 0.5V1H14C14.5304 1 15.0391 1.21071 15.4142 1.58579C15.7893 1.96086 16 2.46957 16 3V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V5H16V4H0V3C0 2.46957 0.210714 1.96086 0.585786 1.58579C0.960859 1.21071 1.46957 1 2 1H3V0.5C3 0.367392 3.05268 0.240215 3.14645 0.146447C3.24021 0.0526784 3.36739 0 3.5 0V0Z"
            fill="#25315B"
        />
    </svg>
);

export const PurposesIcon = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.8533 0.333328H3.81333C3.31256 0.333328 2.81669 0.431963 2.35403 0.623601C1.89138 0.815239 1.471 1.09613 1.1169 1.45023C0.401761 2.16537 0 3.1353 0 4.14666V13.1867C0 14.198 0.401761 15.168 1.1169 15.8831C1.471 16.2372 1.89138 16.5181 2.35403 16.7097C2.81669 16.9014 3.31256 17 3.81333 17H12.8533C13.8647 17 14.8346 16.5982 15.5498 15.8831C16.2649 15.168 16.6667 14.198 16.6667 13.1867V4.14666C16.6667 3.1353 16.2649 2.16537 15.5498 1.45023C14.8346 0.735089 13.8647 0.333328 12.8533 0.333328ZM7.33333 13.9267L1.73333 8.83999L2.94667 7.50666L7.16667 11.3333L13.9067 3.33333L15.28 4.49999L7.33333 13.9267Z"
            fill="#25315B"
        />
    </svg>
);

export const ValuesIcon = () => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 0.833336L14.8475 2.355C15.0326 2.39614 15.198 2.49914 15.3167 2.64701C15.4353 2.79487 15.5 2.97877 15.5 3.16834V11.4908C15.4999 12.3139 15.2967 13.1243 14.9082 13.85C14.5198 14.5757 13.9582 15.1943 13.2733 15.6508L8 19.1667L2.72667 15.6508C2.04189 15.1944 1.48038 14.5759 1.09196 13.8504C0.70353 13.1248 0.500197 12.3146 0.5 11.4917V3.16834C0.500033 2.97877 0.564698 2.79487 0.683325 2.64701C0.801951 2.49914 0.967447 2.39614 1.1525 2.355L8 0.833336ZM8 5.83334C7.63312 5.83335 7.2765 5.95442 6.98544 6.17777C6.69439 6.40111 6.48515 6.71426 6.3902 7.06863C6.29524 7.42301 6.31987 7.79881 6.46026 8.13777C6.60065 8.47672 6.84895 8.75988 7.16667 8.94334V12.5H8.83333L8.83417 8.94334C9.15194 8.75985 9.40028 8.47661 9.54066 8.13757C9.68103 7.79854 9.70559 7.42265 9.61053 7.06823C9.51546 6.71381 9.30609 6.40067 9.01489 6.17739C8.72369 5.95411 8.36695 5.83317 8 5.83334Z"
            fill="#25315B"
        />
    </svg>
);

export const ResultsIcon = () => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="9" width="5" height="10" fill="#25315B" />
        <rect x="7" width="5" height="19" fill="#25315B" />
        <rect x="14" y="6" width="5" height="13" fill="#25315B" />
    </svg>
);

export const ListIcon = () => (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.01662 0.508283C2.4685 0.508283 1.94284 0.72602 1.55526 1.1136C1.16769 1.50117 0.949951 2.02684 0.949951 2.57495V19.2833C0.949949 19.5543 1.00346 19.8226 1.10743 20.0729C1.21139 20.3232 1.36375 20.5505 1.55577 20.7417C1.74778 20.9329 1.97568 21.0844 2.22637 21.1873C2.47706 21.2903 2.74561 21.3427 3.01662 21.3416H16.5583V0.508283H3.01662ZM15.5166 20.5083H3.27495C2.98023 20.5083 2.69746 20.3918 2.48828 20.1842C2.2791 19.9766 2.16048 19.6947 2.15828 19.3999V18.7333C2.15828 18.4371 2.27593 18.1531 2.48535 17.9437C2.69476 17.7343 2.97879 17.6166 3.27495 17.6166H15.5499L15.5166 20.5083Z"
            fill="#25315B"
        />
    </svg>
);

export const SettingsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.0909 7.27273H17.7159C17.6196 7.00073 17.5089 6.73376 17.3839 6.47297L18.3567 5.50024C18.7117 5.14527 18.7117 4.56964 18.3567 4.21461L15.7855 1.64333C15.6149 1.47285 15.3837 1.37703 15.1426 1.37703C14.9015 1.37703 14.6703 1.47279 14.4998 1.64333L13.527 2.61606C13.2662 2.49121 12.9993 2.38042 12.7273 2.28418V0.909091C12.7273 0.40703 12.3202 0 11.8182 0H8.18182C7.67976 0 7.27273 0.40703 7.27273 0.909091V2.28418C7.00073 2.38042 6.73376 2.49121 6.47303 2.61606L5.50024 1.64333C5.14527 1.2883 4.56964 1.2883 4.21461 1.64333L1.64327 4.21455C1.47273 4.38503 1.37697 4.61624 1.37697 4.85739C1.37697 5.09849 1.47273 5.3297 1.64327 5.50018L2.616 6.47297C2.49115 6.73376 2.38042 7.00073 2.28418 7.27273H0.909091C0.40703 7.27273 0 7.67976 0 8.18182V11.8182C0 12.3202 0.40703 12.7273 0.909091 12.7273H2.28418C2.38042 12.9993 2.49115 13.2662 2.616 13.527L1.64327 14.4998C1.47273 14.6703 1.37697 14.9015 1.37697 15.1426C1.37697 15.3838 1.47273 15.615 1.64327 15.7855L4.21467 18.3567C4.5697 18.7117 5.14527 18.7117 5.5003 18.3567L6.47309 17.384C6.73382 17.5089 7.00079 17.6196 7.27273 17.7159V19.0909C7.27273 19.593 7.67976 20 8.18182 20H11.8182C12.3202 20 12.7273 19.593 12.7273 19.0909V17.7158C12.9993 17.6196 13.2662 17.5088 13.527 17.3839L14.4998 18.3567C14.8548 18.7116 15.4304 18.7117 15.7855 18.3567L18.3567 15.7854C18.7118 15.4304 18.7118 14.8548 18.3567 14.4998L17.384 13.527C17.5089 13.2662 17.6197 12.9992 17.7159 12.7273H19.0909C19.593 12.7273 20 12.3202 20 11.8182V8.18182C20 7.67976 19.593 7.27273 19.0909 7.27273ZM10 13.6364C7.99491 13.6364 6.36364 12.0051 6.36364 10C6.36364 7.99491 7.99491 6.36364 10 6.36364C12.0051 6.36364 13.6364 7.99491 13.6364 10C13.6364 12.0051 12.0051 13.6364 10 13.6364Z"
            fill="#25315B"
        />
    </svg>
);

export const CreateIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.8939 1.38037C14.5063 0.769005 15.3322 0.419238 16.1974 0.404765C17.0627 0.390291 17.8997 0.712243 18.5323 1.30278C19.1648 1.89333 19.5435 2.70635 19.5884 3.57054C19.6333 4.43474 19.341 5.28263 18.7731 5.93557L18.6171 6.10357L7.0899 17.6308C6.84419 17.8761 6.54819 18.0653 6.2223 18.1852L6.0243 18.2488L1.1583 19.576C1.06404 19.6019 0.964865 19.6045 0.869399 19.5834C0.773934 19.5623 0.685072 19.5182 0.610547 19.4549C0.536023 19.3916 0.478093 19.311 0.441798 19.2203C0.405504 19.1295 0.391945 19.0312 0.402301 18.934L0.421501 18.838L1.7487 13.9732C1.8399 13.6372 2.0031 13.3252 2.2263 13.0612L2.3667 12.9076L13.8939 1.38037ZM12.8619 4.11037L3.2151 13.756C3.10488 13.8664 3.01724 13.9972 2.9571 14.1412L2.9067 14.2888L1.8543 18.1408L5.7087 17.0908C5.8091 17.0634 5.90551 17.023 5.9955 16.9708L6.1239 16.8844L6.2415 16.7824L15.8871 7.13437L12.8619 4.11037ZM17.7687 2.22877C17.3913 1.85113 16.8864 1.6282 16.3531 1.60378C15.8198 1.57936 15.2966 1.7552 14.8863 2.09677L14.7423 2.22877L13.7103 3.26077L16.7343 6.28717L17.7687 5.25517C18.1463 4.8778 18.3693 4.37289 18.3937 3.83957C18.4181 3.30626 18.2423 2.78308 17.9007 2.37277L17.7687 2.22877Z"
            fill="#25315B"
        />
    </svg>
);

export const CloseIcon = (props: Props) => (
    <svg width="14" height="14" viewBox="0 0 14 14" color="#25315b" {...props}>
        <path
            d="M2.707 1.293a1 1 0 0 0-1.414 1.414L5.586 7l-4.293 4.294a1 1 0 1 0 1.414 1.414L7 8.415l4.293 4.292a1 1 0 0 0 1.414-1.414L8.415 7l4.292-4.292a1 1 0 0 0-1.414-1.414L7 5.586 2.707 1.293Z"
            fill="currentColor"
        />
    </svg>
);

export const FavoriteIcon = (props: Props) => (
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.37748 1.41005C6.83651 0.358759 8.1635 0.358759 8.62252 1.41005L10.2616 5.16264L13.9271 5.76419C14.9537 5.93202 15.3635 7.35763 14.6207 8.17603L11.9684 11.097L12.5943 15.2211C12.7696 16.3761 11.6963 17.2577 10.7782 16.7108L7.5 14.7648L4.22175 16.7118C3.30371 17.2567 2.2296 16.3761 2.4057 15.2211L3.03164 11.097L0.379328 8.17603C-0.363452 7.35763 0.0463282 5.93202 1.07287 5.76419L4.73836 5.1617L6.37748 1.40911V1.41005ZM7.5 3.10155L6.13796 6.21865C6.04803 6.42424 5.91519 6.60205 5.7509 6.73674C5.5866 6.87143 5.39578 6.95896 5.19488 6.99179L2.14948 7.49245L4.35362 9.91938C4.49894 10.0795 4.60762 10.2771 4.67028 10.4953C4.73295 10.7134 4.74772 10.9455 4.71332 11.1715L4.19338 14.5979L6.91746 12.9799C7.09711 12.8732 7.29704 12.8175 7.5 12.8175C7.70297 12.8175 7.90289 12.8732 8.08254 12.9799L10.8066 14.5979L10.2867 11.1715C10.2523 10.9455 10.2671 10.7134 10.3297 10.4953C10.3924 10.2771 10.5011 10.0795 10.6464 9.91938L12.8497 7.49245L9.80429 6.99274C9.60353 6.95976 9.41288 6.87216 9.24874 6.73748C9.0846 6.6028 8.9519 6.42507 8.86204 6.21959L7.5 3.10155Z"
            fill={props.fill || '#25315B'}
        />
    </svg>
);

export const TextAreaIcon = () => (
    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.4998C0 11.2788 0.0877975 11.0669 0.244078 10.9106C0.400358 10.7543 0.61232 10.6665 0.833333 10.6665H10.8333C11.0543 10.6665 11.2663 10.7543 11.4226 10.9106C11.5789 11.0669 11.6667 11.2788 11.6667 11.4998C11.6667 11.7209 11.5789 11.9328 11.4226 12.0891C11.2663 12.2454 11.0543 12.3332 10.8333 12.3332H0.833333C0.61232 12.3332 0.400358 12.2454 0.244078 12.0891C0.0877975 11.9328 0 11.7209 0 11.4998ZM0 6.49984C0 6.27882 0.0877975 6.06686 0.244078 5.91058C0.400358 5.7543 0.61232 5.6665 0.833333 5.6665H19.1667C19.3877 5.6665 19.5996 5.7543 19.7559 5.91058C19.9122 6.06686 20 6.27882 20 6.49984C20 6.72085 19.9122 6.93281 19.7559 7.08909C19.5996 7.24537 19.3877 7.33317 19.1667 7.33317H0.833333C0.61232 7.33317 0.400358 7.24537 0.244078 7.08909C0.0877975 6.93281 0 6.72085 0 6.49984ZM0 1.49984C0 1.27882 0.0877975 1.06686 0.244078 0.910582C0.400358 0.754301 0.61232 0.666504 0.833333 0.666504H19.1667C19.3877 0.666504 19.5996 0.754301 19.7559 0.910582C19.9122 1.06686 20 1.27882 20 1.49984C20 1.72085 19.9122 1.93281 19.7559 2.08909C19.5996 2.24537 19.3877 2.33317 19.1667 2.33317H0.833333C0.61232 2.33317 0.400358 2.24537 0.244078 2.08909C0.0877975 1.93281 0 1.72085 0 1.49984Z"
            fill="#25315B"
        />
    </svg>
);

export const CreateDarkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.495 0.976075C14.1074 0.364708 14.9333 0.0149408 15.7985 0.000467659C16.6637 -0.0140055 17.5008 0.307946 18.1334 0.898488C18.7659 1.48903 19.1445 2.30205 19.1895 3.16625C19.2344 4.03044 18.9421 4.87833 18.3742 5.53127L18.2182 5.69927L6.69098 17.2265C6.44526 17.4718 6.14926 17.661 5.82338 17.7809L5.62537 17.8445L0.759375 19.1717C0.665117 19.1976 0.565939 19.2002 0.470474 19.1791C0.375008 19.158 0.286147 19.1139 0.211622 19.0506C0.137097 18.9873 0.0791669 18.9067 0.0428726 18.816C0.00657824 18.7252 -0.00698068 18.6269 0.0033756 18.5297L0.0225754 18.4337L1.34978 13.5689C1.44098 13.2329 1.60418 12.9209 1.82738 12.6569L1.96778 12.5033L13.495 0.976075ZM12.463 3.70608L2.81618 13.3517C2.70595 13.4621 2.61832 13.5929 2.55818 13.7369L2.50778 13.8845L1.45538 17.7365L5.30977 16.6865C5.41017 16.6591 5.50658 16.6187 5.59658 16.5665L5.72498 16.4801L5.84258 16.3781L15.4882 6.73007L12.463 3.70608ZM17.3698 1.82448C16.9924 1.44683 16.4875 1.22391 15.9542 1.19948C15.4209 1.17506 14.8977 1.3509 14.4874 1.69248L14.3434 1.82448L13.3114 2.85648L16.3354 5.88287L17.3698 4.85087C17.7474 4.47351 17.9703 3.96859 17.9948 3.43527C18.0192 2.90196 17.8433 2.37878 17.5018 1.96848L17.3698 1.82448Z"
            fill="#DDE2FF"
        />
    </svg>
);

export const AttachmentIcon = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.2207 1.83984C10.3809 -5.96046e-08 7.38478 -5.96046e-08 5.54689 1.83984L0.449237 6.93359C0.416034 6.9668 0.398456 7.01172 0.398456 7.05859C0.398456 7.10547 0.416034 7.15039 0.449237 7.18359L1.16994 7.9043C1.20288 7.9371 1.24748 7.95551 1.29396 7.95551C1.34045 7.95551 1.38504 7.9371 1.41799 7.9043L6.51564 2.81055C7.14846 2.17773 7.99025 1.83008 8.88478 1.83008C9.77931 1.83008 10.6211 2.17773 11.252 2.81055C11.8848 3.44336 12.2324 4.28516 12.2324 5.17773C12.2324 6.07227 11.8848 6.91211 11.252 7.54492L6.05666 12.7383L5.21486 13.5801C4.42775 14.3672 3.14846 14.3672 2.36135 13.5801C1.98049 13.1992 1.7715 12.6934 1.7715 12.1543C1.7715 11.6152 1.98049 11.1094 2.36135 10.7285L7.51564 5.57617C7.6465 5.44727 7.81838 5.375 8.00197 5.375H8.00392C8.18752 5.375 8.35744 5.44727 8.48634 5.57617C8.6172 5.70703 8.68752 5.87891 8.68752 6.0625C8.68752 6.24414 8.61525 6.41602 8.48634 6.54492L4.27346 10.7539C4.24025 10.7871 4.22267 10.832 4.22267 10.8789C4.22267 10.9258 4.24025 10.9707 4.27346 11.0039L4.99416 11.7246C5.0271 11.7574 5.07169 11.7758 5.11818 11.7758C5.16467 11.7758 5.20926 11.7574 5.24221 11.7246L9.45314 7.51367C9.84181 7.125 10.0547 6.60938 10.0547 6.06055C10.0547 5.51172 9.83986 4.99414 9.45314 4.60742C8.65041 3.80469 7.34572 3.80664 6.54299 4.60742L6.04299 5.10938L1.39064 9.75976C1.07488 10.0737 0.824586 10.4471 0.654267 10.8585C0.483948 11.2699 0.396997 11.711 0.398456 12.1562C0.398456 13.0605 0.751971 13.9102 1.39064 14.5488C2.05275 15.209 2.91994 15.5391 3.78713 15.5391C4.65431 15.5391 5.5215 15.209 6.18166 14.5488L12.2207 8.51367C13.1094 7.62305 13.6016 6.4375 13.6016 5.17773C13.6035 3.91602 13.1113 2.73047 12.2207 1.83984Z"
            fill="#25315B"
        />
    </svg>
);

export const PlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 2V18"
            stroke="#25315B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2 10L18 10"
            stroke="#25315B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const RemoveIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1 1L11 11"
            stroke="#25315B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M1 11.0005L11 1.00049"
            stroke="#25315B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const ClockIcon = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 0.188477C4.486 0.188477 0 4.67448 0 10.1885C0 15.7025 4.486 20.1885 10 20.1885C15.514 20.1885 20 15.7025 20 10.1885C20 4.67448 15.514 0.188477 10 0.188477ZM15.75 11.1885H9V4.18848H11V9.18848H15.75V11.1885Z"
            fill="#25315B"
        />
    </svg>
);

export const CheckedIcon = () => (
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_709_1980)">
            <path
                d="M22.8731 4.86928L20.5589 2.61187C20.4776 2.53273 20.3675 2.48828 20.2526 2.48828C20.1377 2.48828 20.0276 2.53273 19.9463 2.61187L11.584 10.7673L9.95439 9.17857C9.87313 9.09936 9.76295 9.05487 9.64807 9.05487C9.53319 9.05487 9.42301 9.09936 9.34175 9.17857L7.02707 11.436C6.98676 11.4752 6.95478 11.5217 6.93296 11.573C6.91114 11.6242 6.8999 11.6792 6.8999 11.7347C6.8999 11.7902 6.91114 11.8452 6.93296 11.8964C6.95478 11.9477 6.98676 11.9943 7.02707 12.0335L11.2639 16.1644C11.345 16.2435 11.4551 16.2883 11.5703 16.2883C11.5754 16.2883 11.5802 16.2857 11.5853 16.2857C11.5896 16.2857 11.5942 16.288 11.5987 16.288C11.6556 16.2881 11.712 16.2771 11.7645 16.2559C11.8171 16.2346 11.8648 16.2035 11.905 16.1642L22.8731 5.46701C23.0422 5.30154 23.0422 5.03423 22.8731 4.86928Z"
                fill="#25315B"
            />
            <path
                d="M16.8604 12.4963V18.1993H4.98919V6.32805H13.3608L16.0505 3.63867H3.69948V3.64056C3.69328 3.64056 3.68762 3.63867 3.68115 3.63867C3.32097 3.63893 2.97518 3.78005 2.71767 4.03187C2.46015 4.28369 2.31134 4.62625 2.30304 4.98633H2.2998V19.541H2.30331C2.31179 19.8948 2.45613 20.2318 2.70639 20.4821C2.95666 20.7323 3.29364 20.8767 3.64746 20.8852V20.8887H18.2022V20.8852C18.556 20.8767 18.893 20.7324 19.1433 20.4822C19.3936 20.2319 19.5379 19.8949 19.5463 19.541H19.5498V9.80689L16.8604 12.4963Z"
                fill="#25315B"
            />
        </g>
        <defs>
            <clipPath id="clip0_709_1980">
                <rect width="23" height="23" fill="white" transform="translate(0 0.188477)" />
            </clipPath>
        </defs>
    </svg>
);

export const DialogIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18 0H2C0.897 0 0 0.897 0 2V20L4 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0Z"
            fill="#25315B"
        />
    </svg>
);

export const PlusCircleIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M18 10V26"
            stroke="#25315B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M10 18L26 18"
            stroke="#25315B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="17" stroke="#25315B" strokeWidth="2" />
    </svg>
);

export const CheckedFavoriteIcon = (props: Props) => (
    <svg width="15" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.4182 6.09792L12.0222 5.36795L9.60999 0.816003C9.54411 0.691373 9.43572 0.590482 9.30183 0.529157C8.96604 0.374853 8.55799 0.503439 8.39009 0.816003L5.97791 5.36795L0.581865 6.09792C0.433096 6.11771 0.297079 6.18299 0.192941 6.2819C0.0670438 6.40235 -0.00233122 6.56439 5.98176e-05 6.73243C0.00245086 6.90047 0.0764123 7.06074 0.205692 7.17805L4.10981 10.7211L3.18744 15.7241C3.16581 15.8405 3.17965 15.9601 3.22738 16.0696C3.27511 16.179 3.35483 16.2738 3.4575 16.3432C3.56016 16.4126 3.68166 16.4539 3.80823 16.4623C3.9348 16.4707 4.06136 16.4459 4.17356 16.3907L9.00004 14.0287L13.8265 16.3907C13.9583 16.456 14.1113 16.4778 14.258 16.454C14.6277 16.3947 14.8764 16.0683 14.8126 15.7241L13.8903 10.7211L17.7944 7.17805C17.9007 7.08111 17.9708 6.9545 17.992 6.81603C18.0494 6.46983 17.7901 6.14936 17.4182 6.09792Z"
            fill={props?.fill || '#25315B'}
        />
    </svg>
);

export const DoneIcon = () => (
    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.8731 2.6808L14.559 0.423396C14.4777 0.344254 14.3675 0.299805 14.2527 0.299805C14.1378 0.299805 14.0277 0.344254 13.9464 0.423396L5.58404 8.57881L3.95448 6.99009C3.87322 6.91089 3.76304 6.86639 3.64816 6.86639C3.53328 6.86639 3.4231 6.91089 3.34185 6.99009L1.02717 9.2475C0.986856 9.28669 0.954873 9.33325 0.93305 9.38451C0.911227 9.43577 0.899994 9.49073 0.899994 9.54624C0.899994 9.60174 0.911227 9.6567 0.93305 9.70797C0.954873 9.75923 0.986856 9.80579 1.02717 9.84497L5.26404 13.976C5.34511 14.055 5.45518 14.0998 5.57035 14.0998C5.57545 14.0998 5.58028 14.0972 5.58539 14.0972C5.58968 14.0972 5.59424 14.0995 5.59881 14.0995C5.65571 14.0996 5.71206 14.0887 5.76463 14.0674C5.81719 14.0462 5.86494 14.015 5.90512 13.9757L16.8731 3.27854C17.0423 3.11307 17.0423 2.84575 16.8731 2.6808Z"
            fill="#25315B"
        />
    </svg>
);

export const ClockCalendarIcon = (props: Props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props} color={props.color ?? '#25315B'}>
        <path
            d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM15.75 11H9V4H11V9H15.75V11Z"
            fill="currentColor"
        />
    </svg>
);

export const CloseCalendarIcon = (props: Props) => (
    <svg width="12" height="12" viewBox="0 0 12 12" {...props} color={props.color ?? '#25315B'}>
        <path
            d="M2.707 1.293a1 1 0 0 0-1.414 1.414L5.586 7l-4.293 4.294a1 1 0 1 0 1.414 1.414L7 8.415l4.293 4.292a1 1 0 0 0 1.414-1.414L8.415 7l4.292-4.292a1 1 0 0 0-1.414-1.414L7 5.586 2.707 1.293Z"
            fill="currentColor"
        />
    </svg>
);

export const FlagIcon = (props: Props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props} color={props.color ?? '#25315B'}>
        <path
            d="M2.66667 13.3333H17.6667C17.8196 13.3332 17.9696 13.291 18.1002 13.2114C18.2308 13.1317 18.3369 13.0176 18.407 12.8817C18.477 12.7457 18.5083 12.593 18.4974 12.4405C18.4864 12.2879 18.4337 12.1413 18.345 12.0167L14.5233 6.66667L18.345 1.31667C18.4337 1.19206 18.4864 1.04544 18.4974 0.892867C18.5083 0.740295 18.477 0.587659 18.407 0.45168C18.3369 0.315702 18.2308 0.201629 18.1002 0.121958C17.9696 0.0422878 17.8196 9.42771e-05 17.6667 0H1.83333C1.61232 0 1.40036 0.0877975 1.24408 0.244078C1.0878 0.400358 1 0.61232 1 0.833333V19.1667C1 19.3877 1.0878 19.5996 1.24408 19.7559C1.40036 19.9122 1.61232 20 1.83333 20C2.05435 20 2.26631 19.9122 2.42259 19.7559C2.57887 19.5996 2.66667 19.3877 2.66667 19.1667V13.3333Z"
            fill="currentColor"
        />
    </svg>
);

export const LocationIcon = (props: Props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props} color={props.color ?? '#25315B'}>
        <path
            d="M10 0.833328C11.9891 0.833328 13.8968 1.6235 15.3033 3.03003C16.7098 4.43655 17.5 6.3442 17.5 8.33333C17.5 11.4383 15.1333 14.6917 10.5 18.1667C10.3558 18.2748 10.1803 18.3333 10 18.3333C9.81969 18.3333 9.64425 18.2748 9.5 18.1667C4.86667 14.6917 2.5 11.4383 2.5 8.33333C2.5 6.3442 3.29018 4.43655 4.6967 3.03003C6.10322 1.6235 8.01088 0.833328 10 0.833328V0.833328ZM10 5.83333C9.33696 5.83333 8.70107 6.09672 8.23223 6.56556C7.76339 7.0344 7.5 7.67029 7.5 8.33333C7.5 8.99637 7.76339 9.63225 8.23223 10.1011C8.70107 10.5699 9.33696 10.8333 10 10.8333C10.663 10.8333 11.2989 10.5699 11.7678 10.1011C12.2366 9.63225 12.5 8.99637 12.5 8.33333C12.5 7.67029 12.2366 7.0344 11.7678 6.56556C11.2989 6.09672 10.663 5.83333 10 5.83333Z"
            fill="currentColor"
        />
    </svg>
);
export const PeopleIcon = (props: Props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props} color={props.color ?? '#25315B'}>
        <path
            d="M14 15.0001V17.0001H0V15.0001C0 15.0001 0 11.0001 7 11.0001C14 11.0001 14 15.0001 14 15.0001ZM10.5 5.50005C10.5 4.80782 10.2947 4.13113 9.91014 3.55556C9.52556 2.97998 8.97893 2.53138 8.33939 2.26647C7.69985 2.00157 6.99612 1.93226 6.31718 2.0673C5.63825 2.20235 5.01461 2.5357 4.52513 3.02518C4.03564 3.51466 3.7023 4.1383 3.56725 4.81724C3.4322 5.49617 3.50152 6.1999 3.76642 6.83944C4.03133 7.47899 4.47993 8.02561 5.0555 8.4102C5.63108 8.79478 6.30777 9.00005 7 9.00005C7.92826 9.00005 8.8185 8.6313 9.47487 7.97493C10.1313 7.31855 10.5 6.42831 10.5 5.50005V5.50005ZM13.94 11.0001C14.5547 11.4758 15.0578 12.0805 15.4137 12.7716C15.7696 13.4626 15.9697 14.2233 16 15.0001V17.0001H20V15.0001C20 15.0001 20 11.3701 13.94 11.0001V11.0001ZM13 2.00005C12.3117 1.99622 11.6385 2.20201 11.07 2.59005C11.6774 3.43879 12.0041 4.45634 12.0041 5.50005C12.0041 6.54377 11.6774 7.56132 11.07 8.41005C11.6385 8.7981 12.3117 9.00389 13 9.00005C13.9283 9.00005 14.8185 8.6313 15.4749 7.97493C16.1313 7.31855 16.5 6.42831 16.5 5.50005C16.5 4.57179 16.1313 3.68156 15.4749 3.02518C14.8185 2.3688 13.9283 2.00005 13 2.00005V2.00005Z"
            fill="currentColor"
        />
    </svg>
);
export const PlusCalendarIcon = (props: Props) => (
    <svg width="12" height="12" viewBox="0 0 12 12" {...props} color={props.color ?? '#25315B'}>
        <path
            d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H5V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11V7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H7V1Z"
            fill="currentColor"
        />
    </svg>
);

export const BigEditIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.894 1.3804C14.5064 0.769035 15.3323 0.419268 16.1975 0.404795C17.0628 0.390322 17.8998 0.712273 18.5324 1.30282C19.1649 1.89336 19.5435 2.70638 19.5885 3.57057C19.6334 4.43477 19.3411 5.28266 18.7732 5.9356L18.6172 6.1036L7.08999 17.6308C6.84428 17.8762 6.54828 18.0653 6.22239 18.1852L6.02439 18.2488L1.15839 19.576C1.06413 19.602 0.964957 19.6045 0.869491 19.5834C0.774025 19.5623 0.685164 19.5182 0.610639 19.4549C0.536114 19.3916 0.478184 19.3111 0.44189 19.2203C0.405596 19.1295 0.392037 19.0312 0.402393 18.934L0.421593 18.838L1.74879 13.9732C1.83999 13.6372 2.00319 13.3252 2.22639 13.0612L2.36679 12.9076L13.894 1.3804ZM12.862 4.1104L3.21519 13.756C3.10497 13.8664 3.01734 13.9973 2.95719 14.1412L2.90679 14.2888L1.85439 18.1408L5.70879 17.0908C5.80919 17.0634 5.9056 17.0231 5.99559 16.9708L6.12399 16.8844L6.24159 16.7824L15.8872 7.1344L12.862 4.1104ZM17.7688 2.2288C17.3914 1.85116 16.8865 1.62824 16.3532 1.60381C15.8199 1.57939 15.2967 1.75523 14.8864 2.0968L14.7424 2.2288L13.7104 3.2608L16.7344 6.2872L17.7688 5.2552C18.1464 4.87783 18.3694 4.37292 18.3938 3.8396C18.4182 3.30629 18.2424 2.78311 17.9008 2.3728L17.7688 2.2288Z"
            fill="black"
        />
    </svg>
);

export const BurgerIcon = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15 1H1"
            stroke="#14407D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15 6H1"
            stroke="#14407D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15 11H1"
            stroke="#14407D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
