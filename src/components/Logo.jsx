function Logo({ light = true }) {
  const color = light ? '#FFFFFF' : '#211B18';
  return (
    <a href="#home" className="logo" style={{ color }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 24V10L8 6V24M2 24H24M8 24V2L15 6V24M8 24H15M15 24V12L22 15V24M15 24H22M22 24V16"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__text">AtiSunya Infratech</span>
    </a>
  );
}

export default Logo;
