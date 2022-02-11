let srcUrl = new URL("./laying-girl.svg", import.meta.url);

console.log(srcUrl);
export default HomeSvg = ({ width }) => {
    return (
        <img src={srcUrl} width={width} alt="Laying Girl With Computer SVG" />
    );
};
