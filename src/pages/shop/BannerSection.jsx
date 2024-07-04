import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="flex justify-center items-center p-10">
      <section className="w-[95%] flex gap-10">
        {/* Banner 1 */}
        <div
          className="bg-cover bg-center py-24 flex-1 rounded-xl "
          style={{
            backgroundImage: `url('http://printlivepro.com/wp-content/uploads/2023/10/banner-print-assured.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Genuine Printers at Affordable Prices
            </h2>
            <Link
              to="/shop"
              className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-full"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Banner 2 */}
        <div
          className="bg-cover bg-center py-24 flex-1 rounded-xl "
          style={{
            backgroundImage: `url('http://printlivepro.com/wp-content/uploads/2023/10/print-assured-banner.jpg')`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Change Tires for Winter Ensure Your Safety
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
