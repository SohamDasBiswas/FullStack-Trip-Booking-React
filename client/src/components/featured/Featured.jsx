import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=sundarban,agra,darjeeling,goa"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading, Please Wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt="" 
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sundarban</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.visittnt.com/blog/wp-content/uploads/2018/09/Agra-Tour.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Agra</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.xcitefun.net/users/2015/01/378269,xcitefun-darjeeling-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Darjeeling</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/originals/8a/e7/aa/8ae7aa10503dc0ad47c12b19e0dcb1e3.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[3]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
