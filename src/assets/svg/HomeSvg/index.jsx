const logo = new URL("./laying-girl.svg", import.meta.url);

export default HomeSvg = ({ width }) => {
    return <img src={logo} width={width} alt="Laying Girl With Computer SVG" />;
};
