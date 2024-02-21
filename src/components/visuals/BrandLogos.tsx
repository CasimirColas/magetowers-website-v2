import { cn } from "@/lib/utils";

interface SVGProps {
  w: string;
  className?: string;
}

export const Youtube = ({ w, className }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={w}
    height={w}
    className={cn("m-[-0.25rem]", className)}
  >
    <path
      fill="#FF3D00"
      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
    />
    <path fill="#FFF" d="M20 31L20 17 32 24z" />
  </svg>
);
export const ArtStation = ({ w, className }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={w}
    className={className}
    viewBox="0 0 48 48"
  >
    <path
      fill="#42a5f5"
      d="M2.141 34l3.771 6.519.001.001C6.656 41.991 8.18 43 9.94 43l.003 0 0 0h25.03l-5.194-9H2.141zM45.859 34.341c0-.872-.257-1.683-.697-2.364L30.977 7.319C30.245 5.94 28.794 5 27.124 5h-7.496l21.91 37.962 3.454-5.982C45.673 35.835 45.859 35.328 45.859 34.341zM25.838 28L16.045 11.038 6.252 28z"
    ></path>
  </svg>
);

export const Instagram = ({ w, className }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={w}
    className={cn("m-[-0.25rem]", className)}
    viewBox="0 0 48 48"
  >
    <radialGradient
      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
      cx="19.38"
      cy="42.035"
      r="44.899"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#fd5"></stop>
      <stop offset=".328" stopColor="#ff543f"></stop>
      <stop offset=".348" stopColor="#fc5245"></stop>
      <stop offset=".504" stopColor="#e64771"></stop>
      <stop offset=".643" stopColor="#d53e91"></stop>
      <stop offset=".761" stopColor="#cc39a4"></stop>
      <stop offset=".841" stopColor="#c837ab"></stop>
    </radialGradient>
    <path
      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
    ></path>
    <radialGradient
      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
      cx="11.786"
      cy="5.54"
      r="29.813"
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#4168c9"></stop>
      <stop offset=".999" stopColor="#4168c9" stopOpacity={0}></stop>
    </radialGradient>
    <path
      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
    ></path>
    <path
      fill="#fff"
      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
    ></path>
    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
    <path
      fill="#fff"
      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
    ></path>
  </svg>
);
export const Twitter = ({ w, className }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={w}
    className={cn("m-[-0.25rem]", className)}
    viewBox="0 0 50 50"
    z={10}
  >
    <path xmlns="http://www.w3.org/2000/svg" d="M0,0h1v1H0z" fill="#FFF" />
    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
  </svg>
);

export const TwitterFilled = ({ w, className }: SVGProps) => (
  <div
    style={{
      backgroundImage: "url(/white.svg)",
      backgroundSize: "90%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <Twitter w={w} className={className} />
  </div>
);

export const TikTok = ({ w, className }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={w}
    className={cn("m-[-0.25rem]", className)}
    viewBox="0 0 50 50"
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
  </svg>
);

export const TikTokFilled = ({ w, className }: SVGProps) => (
  <div
    style={{
      backgroundImage: "url(/white.svg)",
      backgroundSize: "90%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <TikTok w={w} className={className} />
  </div>
);

export const KickStarter = ({ w, className }: SVGProps) => (
  <svg
    width={w}
    height={w}
    className={cn("m-1 mx-2", className)}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M240.67 256H15.33C6.862 256 0 249.136 0 240.67V15.33C0 6.862 6.863 0 15.33 0h225.34C249.137 0 256 6.863 256 15.33v225.34c0 8.466-6.864 15.33-15.33 15.33"
      fill="#161D15"
    />
    <path
      d="M116.89 105.512l25.602-37.09c4.84-6.989 11.088-10.483 18.749-10.483 6.25 0 11.655 2.217 16.228 6.652 4.568 4.434 6.852 9.743 6.852 15.925 0 4.57-1.207 8.602-3.627 12.096l-23.083 33.563 28.223 35.782c2.822 3.561 4.233 7.728 4.233 12.498 0 6.318-2.215 11.741-6.652 16.277-4.435 4.537-9.813 6.803-16.127 6.803-6.922 0-12.195-2.249-15.825-6.752l-34.572-43.139v23.788c0 6.788-1.175 12.061-3.528 15.824-4.3 6.852-10.55 10.28-18.746 10.28-7.459 0-13.24-2.52-17.337-7.56-3.83-4.636-5.744-10.786-5.744-18.443V83.338c0-7.257 1.946-13.236 5.845-17.94 4.098-4.971 9.742-7.459 16.932-7.459 6.855 0 12.565 2.488 17.135 7.46 2.553 2.753 4.166 5.542 4.837 8.364.404 1.749.606 5.006.606 9.777v21.972"
      fill="#2CDF72"
    />
  </svg>
);
