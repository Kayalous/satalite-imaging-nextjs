function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { useState, useEffect, use } from "react";
import {
  constructMainEC2Url,
  constructS3Url,
  constructSubEC2Url,
} from "../../../lib/utils";
export default function Preview({ nextStep, prevStep, pass, error }) {
  //   const [page, setPage] = useState(1);
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const excludeKeys = ["image_name", "s3_path", "original_img", "sat_name"];
  //   const [from, setFrom] = useState(1);
  //   const [to, setTo] = useState(20);
  const [imageUrl, setImageUrl] = useState(null);
  const [errImageUrl, setErrImageUrl] = useState(null);

  //   const calculateFromTo = () => {
  //     // if (data?.data?.data) {
  //     const fromCalc = (page - 1) * 20 + 1;
  //     setFrom(fromCalc);

  //     const toFactor = data?.data?.data.length ?? 20;

  //     const toCalc = fromCalc + toFactor - 1;
  //     setTo(toCalc);
  //     // }
  //   };

  //   const fetchPasses = async () => {
  //     setLoading(true);
  //     const baseUrl = "/api/single-pass";
  //     const params = {
  //       page: page,
  //       image_name: pass.image_name,
  //     };
  //     const url = new URL(baseUrl, document.baseURI);

  //     url.search = new URLSearchParams(params).toString();

  //     const response = await fetch(url);

  //     if (response.ok) {
  //       const resData = await response.json();

  //       setData({
  //         ...pass,
  //         ...resData,
  //       });

  //       setTimeout(() => {
  //         setImageUrl(
  //           constructS3Url(
  //             data?.data?.data[0].s3_path,
  //             data?.data?.data[0].image_name
  //           )
  //         );
  //       }, 300);

  //       setLoading(false);
  //     } else {
  //       setError(await response.json());
  //       setLoading(false);
  //     }
  //   };

  //   const handleNext = () => {
  //     setPage(page + 1);
  //     calculateFromTo();
  //     fetchPasses();
  //   };

  //   const handlePrev = () => {
  //     setPage(page - 1);
  //     calculateFromTo();
  //     fetchPasses();
  //   };

  useEffect(() => {
    // fetchPasses();

    setTimeout(() => {
      setImageUrl(constructMainEC2Url(error.s3_path, error.image_name));

      setErrImageUrl(
        constructSubEC2Url(
          error.s3_path,
          error.image_name,
          error.sub_img_loc_h,
          error.sub_img_loc_w
        )
      );
    }, 300);
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full max-h-full overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div className="flex-1 py-5 sm:p-6">
        <div>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-bold text-gray-800 text-start">
                Preview
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                Preview for error #{error.ID}.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-4 sm:px-6">
        <div className="flex items-center flex-1 min-w-0">
          <div className="flex-shrink-0">
            <img className="w-12 h-12 rounded-full" src={imageUrl} alt="" />
          </div>
          <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div className="flex text-sm font-medium text-gray-900 truncate">
                <span className="truncate">{error.image_name}</span>
              </div>
              <p className="flex items-center mt-2 text-sm text-gray-500">
                <span className="truncate">{error.sat_name}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={prevStep}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full">
        <div className="container flex items-center justify-between w-full gap-5">
          <img className="flex-1 object-cover w-1/2" src={imageUrl} />
          <img className="flex-1 object-cover w-1/2" src={errImageUrl} />
        </div>
      </div>

      <ul className="flex flex-col flex-1 w-full max-h-full overflow-hidden bg-white divide-y divide-gray-200 shadow">
        {/* map the key and value pairs of each attribute in the error object */}
        {Object.entries(error).map(([key, value]) => {
          return (
            <li key={key} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between flex-1 min-w-0">
                <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div className="flex text-sm font-medium text-gray-900 truncate">
                      <span className="truncate">{key}</span>
                    </div>
                    <p className="flex items-center mt-2 text-sm text-gray-500">
                      <span className="truncate">{value}</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* {data?.data?.data ? (
        <div className="px-4 py-4 sm:px-6">
          <nav
            className="flex items-center justify-between px-4 py-3 bg-white sm:px-6"
            aria-label="Pagination"
          >
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700">
                page <span className="font-bold">{page}</span> of{" "}
                <span className="font-bold">
                  {parseInt(data?.data?.count / 20)}
                </span>{" "}
                of <span className="font-bold">{data?.data?.count}</span> total
                results
              </p>
            </div>
            <div className="flex justify-between flex-1 sm:justify-end">
              <button
                onClick={handlePrev}
                disabled={page <= 1}
                className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={page >= data?.data?.count / 20}
                className="relative inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-gray-900 bg-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      ) : null} */}
    </div>
  );
}
