import React from "react";

interface IconListProps {
  width: number;
  height: number;
  svg: JSX.Element;
}

export interface IconList {
  indicator: IconListProps;
  hirachyLayout: IconListProps;
  hirachyText: IconListProps;
  hirachyImage: IconListProps;
  pipette: IconListProps;
  headerInsert: IconListProps;
  headerScreen: IconListProps;
  headerFrame: IconListProps;
  headerText: IconListProps;
  headerScroll: IconListProps;
  headerPage: IconListProps;
  headerComponent: IconListProps;
  headerVariables: IconListProps;
  headerHandoff: IconListProps;
  headerZoom: IconListProps;
  xPostion: IconListProps;
  yPostion: IconListProps;
  close: IconListProps;
  allBoundary: IconListProps;
  cornerBoundary: IconListProps;
}

const icons: IconList = {
  indicator: {
    width: 12,
    height: 12,
    svg: <path d="M5 8.5L7.5 6L5 3.5V8.5Z" fill="#888888" />,
  },
  hirachyLayout: {
    width: 12,
    height: 12,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H9C10.1046 11 11 10.1046 11 9V3C11 1.89543 10.1046 1 9 1H3ZM6 7.25C6.69036 7.25 7.25 6.69036 7.25 6C7.25 5.30964 6.69036 4.75 6 4.75C5.30964 4.75 4.75 5.30964 4.75 6C4.75 6.69036 5.30964 7.25 6 7.25Z"
        fill="white"
      />
    ),
  },
  hirachyText: {
    width: 12,
    height: 12,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 1H1V3H5L5 11H7L7 3H11V1H7H5Z"
        fill="white"
      />
    ),
  },
  hirachyImage: {
    width: 12,
    height: 12,
    svg: (
      <path
        d="M10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5ZM4.25 6.75L5.5 8.255L7.25 6L9.5 9H2.5L4.25 6.75Z"
        fill="white"
      />
    ),
  },
  pipette: {
    width: 16,
    height: 16,
    svg: (
      <path
        d="M13.8067 3.75305L12.2467 2.19305C11.9867 1.93305 11.5667 1.93305 11.3067 2.19305L9.22667 4.27305L8.40667 3.46638C8.14667 3.20638 7.72667 3.21305 7.46667 3.46638C7.20667 3.72638 7.20667 4.14638 7.46667 4.40638L7.94667 4.88638L2.1 10.733C2.03333 10.7997 2 10.8797 2 10.973V13.6664C2 13.853 2.14667 13.9997 2.33333 13.9997H5.02667C5.11333 13.9997 5.2 13.9664 5.26 13.8997L11.1067 8.05305L11.5867 8.53305C11.8467 8.79305 12.2667 8.79305 12.5267 8.53305C12.7867 8.27305 12.7867 7.85305 12.5267 7.59305L11.7133 6.77971L13.7933 4.69971C14.0667 4.43305 14.0667 4.01305 13.8067 3.75305ZM4.61333 12.6664L3.33333 11.3864L8.70667 6.01305L9.98667 7.29305L4.61333 12.6664Z"
        fill="#D8D8D8"
      />
    ),
  },
  headerComponent: {
    width: 24,
    height: 24,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 5C4 4.44772 4.44772 4 5 4H10C10.5523 4 11 4.44772 11 5V10C11 10.5523 10.5523 11 10 11H5C4.44772 11 4 10.5523 4 10V5ZM4 14C4 13.4477 4.44772 13 5 13H10C10.5523 13 11 13.4477 11 14V19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19V14ZM14 4C13.4477 4 13 4.44772 13 5V10C13 10.5523 13.4477 11 14 11H19C19.5523 11 20 10.5523 20 10V5C20 4.44772 19.5523 4 19 4H14ZM15.5 13H17.5V15.5H20V17.5H17.5V20H15.5V17.5H13V15.5H15.5V13Z"
        fill="#8E8E8E"
      />
    ),
  },
  headerFrame: {
    width: 24,
    height: 24,
    svg: <rect x="4" y="4" width="16" height="16" rx="2" fill="#8E8E8E" />,
  },
  headerHandoff: {
    width: 24,
    height: 24,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM13.0904 12L10 15.06L10.9514 16L15 12L10.9514 8L10 8.94L13.0904 12Z"
        fill="#8E8E8E"
      />
    ),
  },
  headerInsert: {
    width: 24,
    height: 24,
    svg: <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8E8E8E" />,
  },
  headerPage: {
    width: 24,
    height: 24,
    svg: (
      <>
        <rect x="4" y="3" width="11" height="18" rx="2" fill="#8E8E8E" />
        <path
          d="M16 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H16V6Z"
          fill="#8E8E8E"
        />
      </>
    ),
  },
  headerScreen: {
    width: 24,
    height: 24,
    svg: (
      <>
        <rect x="4" y="3" width="11" height="18" rx="2" fill="#8E8E8E" />
        <path
          d="M16 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H16V6Z"
          fill="#8E8E8E"
        />
      </>
    ),
  },
  headerScroll: {
    width: 24,
    height: 24,
    svg: (
      <>
        <rect x="4" y="10" width="16" height="4" rx="1" fill="#8E8E8E" />
        <path
          d="M5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V8C19 8.55228 18.5523 9 18 9H6C5.44772 9 5 8.55228 5 8V7Z"
          fill="#8E8E8E"
        />
        <path
          d="M5 16C5 15.4477 5.44772 15 6 15H18C18.5523 15 19 15.4477 19 16V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V16Z"
          fill="#8E8E8E"
        />
      </>
    ),
  },
  headerText: {
    width: 24,
    height: 24,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM7 7H11H13H17V9H13V17H11L11 9H7V7Z"
        fill="#8E8E8E"
      />
    ),
  },
  headerVariables: {
    width: 24,
    height: 24,
    svg: (
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM16.2426 9.17154L14.8284 7.75732L12 10.5858L9.41421 7.99997L8 9.41418L10.5858 12L7.75736 14.8284L9.17158 16.2426L16.2426 9.17154ZM14.248 12.8337L12.8337 14.2479L15.0711 16.4853L16.4853 15.071L14.248 12.8337Z"
        fill="#8E8E8E"
      />
    ),
  },
  headerZoom: {
    width: 24,
    height: 24,
    svg: (
      <path
        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
        fill="#8E8E8E"
      />
    ),
  },
  xPostion: {
    width: 16,
    height: 16,
    svg: (
      <path
        d="M8.98438 8.16797L10.4688 5.3125H11.3203L9.35938 8.87891V11H8.60938V8.87891L6.64844 5.3125H7.50781L8.98438 8.16797Z"
        fill="#747474"
      />
    ),
  },
  yPostion: {
    width: 16,
    height: 16,
    svg: (
      <path
        d="M9.99219 7.49219L11.3555 5.3125H12.2383L10.4414 8.13281L12.2812 11H11.3906L9.99219 8.78125L8.58594 11H7.69922L9.54297 8.13281L7.74219 5.3125H8.62109L9.99219 7.49219Z"
        fill="#747474"
      />
    ),
  },
  close: {
    width: 16,
    height: 16,
    svg: (
      <path
        d="M10.73 5.13444C10.5567 4.96111 10.2767 4.96111 10.1033 5.13444L7.93 7.30333L5.75667 5.13C5.58333 4.95667 5.30333 4.95667 5.13 5.13C4.95667 5.30333 4.95667 5.58333 5.13 5.75667L7.30333 7.93L5.13 10.1033C4.95667 10.2767 4.95667 10.5567 5.13 10.73C5.30333 10.9033 5.58333 10.9033 5.75667 10.73L7.93 8.55667L10.1033 10.73C10.2767 10.9033 10.5567 10.9033 10.73 10.73C10.9033 10.5567 10.9033 10.2767 10.73 10.1033L8.55667 7.93L10.73 5.75667C10.8989 5.58778 10.8989 5.30333 10.73 5.13444Z"
        fill="#8E8E8E"
      />
    ),
  },
  allBoundary: {
    width: 17,
    height: 17,
    svg: (
      <path
        d="M12.75 2.83331H4.25004C3.47087 2.83331 2.83337 3.47081 2.83337 4.24998V12.75C2.83337 13.5291 3.47087 14.1666 4.25004 14.1666H12.75C13.5292 14.1666 14.1667 13.5291 14.1667 12.75V4.24998C14.1667 3.47081 13.5292 2.83331 12.75 2.83331ZM12.75 12.75H4.25004V4.24998H12.75V12.75Z"
        fill="white"
      />
    ),
  },
  cornerBoundary: {
    width: 17,
    height: 17,
    svg: (
      <path
        d="M2.625 3.54167V5.66667C2.625 6.05625 2.94375 6.375 3.33333 6.375C3.72292 6.375 4.04167 6.05625 4.04167 5.66667V4.25C4.04167 3.86042 4.36042 3.54167 4.75 3.54167H6.16667C6.55625 3.54167 6.875 3.22292 6.875 2.83333C6.875 2.44375 6.55625 2.125 6.16667 2.125H4.04167C3.2625 2.125 2.625 2.7625 2.625 3.54167ZM3.33333 10.625C2.94375 10.625 2.625 10.9437 2.625 11.3333V13.4583C2.625 14.2375 3.2625 14.875 4.04167 14.875H6.16667C6.55625 14.875 6.875 14.5562 6.875 14.1667C6.875 13.7771 6.55625 13.4583 6.16667 13.4583H4.75C4.36042 13.4583 4.04167 13.1396 4.04167 12.75V11.3333C4.04167 10.9437 3.72292 10.625 3.33333 10.625ZM13.9583 12.75C13.9583 13.1396 13.6396 13.4583 13.25 13.4583H11.8333C11.4437 13.4583 11.125 13.7771 11.125 14.1667C11.125 14.5562 11.4437 14.875 11.8333 14.875H13.9583C14.7375 14.875 15.375 14.2375 15.375 13.4583V11.3333C15.375 10.9437 15.0562 10.625 14.6667 10.625C14.2771 10.625 13.9583 10.9437 13.9583 11.3333V12.75ZM13.9583 2.125H11.8333C11.4437 2.125 11.125 2.44375 11.125 2.83333C11.125 3.22292 11.4437 3.54167 11.8333 3.54167H13.25C13.6396 3.54167 13.9583 3.86042 13.9583 4.25V5.66667C13.9583 6.05625 14.2771 6.375 14.6667 6.375C15.0562 6.375 15.375 6.05625 15.375 5.66667V3.54167C15.375 2.7625 14.7375 2.125 13.9583 2.125Z"
        fill="#7E7E7E"
      />
    ),
  },
};

export default icons;
