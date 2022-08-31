import React from 'react';

export interface IconProps {
  color?: string;
}

export const ArrowIcon = ({ color = '#214E41' }: IconProps) => {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_17)">
        <path
          d="M12.3371 1.18649L11.3988 0.113544L6.46055 5.7606L1.53874 0.113544L0.600464 1.18649L6.46055 7.88766H6.47701L12.3371 1.18649Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_17">
          <rect
            width="12"
            height="8"
            fill="white"
            transform="translate(0.46875 0.000602722)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LogoIcon = () => {
  return (
    <svg
      width="75"
      height="24"
      viewBox="0 0 75 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.3908 1.19026H46.7675V22.4635H49.3908V1.19026Z"
        fill="#214E41"
      />
      <path
        d="M56.078 1.19026H53.4547V22.4635H56.078V1.19026Z"
        fill="#214E41"
      />
      <path
        d="M73.7314 8.11542L72.4197 10.9721C71.2156 8.91614 69.1084 7.74752 66.6356 7.74752C62.2061 7.74752 59.1958 11.1235 59.1958 15.2786C59.1958 19.4337 62.2061 22.8097 66.6356 22.8097C68.9794 22.8097 71.0006 21.7493 72.2262 19.8882V22.4635H75V8.11542H73.7314ZM67.0442 21.2732C63.9263 21.2732 62.2061 18.7196 62.2061 15.2786C62.2061 11.7511 63.9263 9.28404 67.0442 9.28404C69.904 9.28404 72.0327 11.7944 72.0327 15.2786C72.0327 18.7629 69.904 21.2732 67.0442 21.2732Z"
        fill="#214E41"
      />
      <path
        d="M23.115 9.2624C22.2764 10.0631 21.6313 11.0586 21.2658 12.1623L19.9111 8.09378H18.6425V22.4418H21.4163V16.9883C21.4163 15.0189 21.6313 13.3742 22.4269 12.2056C23.115 11.2101 24.2976 10.6041 25.7812 10.6041C26.2543 10.6041 26.7274 10.6474 27.2004 10.734V7.98557C26.9209 7.94229 26.6413 7.92065 26.3618 7.92065C25.1577 7.94229 23.9966 8.4184 23.115 9.2624Z"
        fill="#214E41"
      />
      <path
        d="M35.7368 7.74752C31.2858 7.74752 28.125 10.9937 28.125 15.2786C28.125 19.5636 31.2213 22.8097 35.7153 22.8097C37.3925 22.8314 39.0482 22.3336 40.4458 21.3814C41.6069 20.4941 42.4455 19.239 42.8326 17.8106H39.9728C39.5427 19.6285 38.4246 21.2949 35.9088 21.2949C32.3609 21.2949 31.2213 18.5032 31.1568 15.5167V15.4734H43.1551C43.1551 15.3219 43.1551 15.2137 43.1551 15.1271C43.1766 10.8422 40.1448 7.74752 35.7368 7.74752ZM35.7583 9.2624C38.8976 9.2624 39.8867 11.8377 39.9728 13.9152H31.2428C31.5009 11.3832 32.791 9.2624 35.7583 9.2624Z"
        fill="#214E41"
      />
      <path
        d="M9.46101 12.0108C12.2778 11.4265 14.4495 9.91163 14.4495 7.27141C14.4495 4.02525 12.0198 2.46709 8.27838 2.46709H0V22.4851H9.15998C12.5358 22.4851 15.2021 20.7538 15.2021 17.0965C15.2021 14.0667 12.6649 12.2272 9.46101 12.0108ZM7.33228 3.91704C10.0201 3.91704 11.4177 5.28043 11.4177 7.4229C11.4177 9.56537 9.89106 11.2317 7.09576 11.2317H3.09633V3.91704H7.33228ZM7.69782 20.9919H3.09633V12.8981H7.22477C10.1706 12.8981 11.9983 14.3481 11.9983 16.9666C11.9983 19.2606 10.4716 20.9919 7.69782 20.9919Z"
        fill="#214E41"
      />
    </svg>
  );
};
