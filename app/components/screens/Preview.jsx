function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { useState, useEffect, use } from "react";
import { constructS3Url, constructMainEC2Url } from "../../../lib/utils";
export default function Preview({ nextStep, prevStep, pass, selectError }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const excludeKeys = ["image_name", "s3_path", "original_img", "sat_name"];
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(20);
  const [imageUrl, setImageUrl] = useState(null);

  const calculateFromTo = () => {
    // if (data?.data?.data) {
    const fromCalc = (page - 1) * 10 + 1;
    setFrom(fromCalc);

    const toFactor = data?.data?.data.length ?? 20;

    const toCalc = fromCalc + toFactor - 1;
    setTo(toCalc);
    // }
  };

  const fetchPasses = async () => {
    setLoading(true);
    const baseUrl = "/api/single-pass";
    const params = {
      page: page,
      image_name: pass.image_name,
    };
    const url = new URL(baseUrl, document.baseURI);

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);

    if (response.ok) {
      let resData = await response.json();

      resData.data.data = resData.data.data.map((item) => {
        // item.s3_path = constructS3Url(item.s3_path, item.image_name);
        item = {
          ID: item.ID,
          "Pass date": pass.passDate,
          "Processed date": pass.processedDate,
          ...item,
        };
        return item;
      });

      setData({
        ...resData,
      });

      setTimeout(() => {
        setImageUrl(constructMainEC2Url(pass.s3_path, pass.image_name));
      }, 300);

      setLoading(false);
    } else {
      setError(await response.json());
      setLoading(false);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
    calculateFromTo();
    fetchPasses();
  };

  const handlePrev = () => {
    setPage(page - 1);
    calculateFromTo();
    fetchPasses();
  };

  useEffect(() => {
    fetchPasses();
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full max-h-full overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div className="flex-1 py-5 sm:p-6">
        <div>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-bold text-gray-800 text-start">
                Select Error
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                {pass.image_name}'s Errors.
              </p>
            </div>
          </div>
          <div className="flow-root mt-8">
            <div className="-mx-4">
              <div className="relative inline-block w-full max-w-full py-2 align-middle">
                {imageUrl ? (
                  <div className="container flex items-center justify-center py-5 mx-auto">
                    <img
                      src={imageUrl}
                      alt="Fixed image"
                      className="object-cover w-full max-w-md overflow-hidden rounded-sm"
                    />
                  </div>
                ) : null}

                {loading ? (
                  <div className="absolute inset-0 z-50 flex items-center justify-center w-full h-full pt-20 bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-loader-2 animate-spin"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <div className="w-full overflow-auto">
                      <table className="border-separate border-spacing-0">
                        <thead>
                          <tr>
                            {
                              // loop through the data and get the keys
                              data?.data?.data
                                ? Object.keys(data?.data?.data[0]).map(
                                    (key, idx) =>
                                      !excludeKeys.includes(key) ? (
                                        <th
                                          key={idx + "th"}
                                          scope="col"
                                          className="sticky whitespace-nowrap top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                        >
                                          {key}
                                        </th>
                                      ) : null
                                  )
                                : null
                            }
                          </tr>
                        </thead>
                        <tbody>
                          {
                            // loop through the data and get the values
                            data?.data?.data
                              ? data?.data?.data.map((pass, idx) => (
                                  <tr
                                    className="transition duration-150 ease-in-out cursor-pointer hover:bg-gray-50"
                                    onClick={() => {
                                      selectError(pass);
                                    }}
                                    key={idx}
                                  >
                                    {/* for each on the following items in the schema create a td  */}

                                    {/* 

                                ID                      Int       @id @default(autoincrement())
  image_name              String?   @db.VarChar(100)
  error_type              String?   @db.VarChar(100)
  pic_size_h_pix          Int?
  pic_size_w_pix          Int?
  sub_img_count_h         Int?
  sub_img_count_w         Int?
  sub_img_loc_h           Int?
  sub_img_loc_w           Int?
  num_errors_raw          Int?
  sub_img_error_start_pix String?   @db.Text
  sub_img_error_end_pix   String?   @db.Text
  error_start_time        DateTime? @db.DateTime(0)
  error_end_time          DateTime? @db.DateTime(0)
                                
                                */}

                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.ID}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass["Pass date"]}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass["Processed date"]}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.error_type}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.pic_size_h_pix}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.pic_size_w_pix}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.sub_img_count_h}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.sub_img_count_w}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.sub_img_loc_h}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.sub_img_loc_w}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.num_errors_raw}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.sub_img_error_start_pix}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.sub_img_error_end_pix}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.error_start_time}
                                    </td>
                                    <td
                                      className={classNames(
                                        idx !== data?.data?.data.length - 1
                                          ? "border-b border-gray-200"
                                          : "",
                                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                      )}
                                    >
                                      {pass.error_end_time}
                                    </td>

                                    {/* <td
                                    className={classNames(
                                      idx !== data?.data?.data.length - 1
                                        ? "border-b border-gray-200"
                                        : "",
                                      "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                    )}
                                  >
                                    {value}
                                  </td> */}
                                  </tr>
                                ))
                              : null
                          }

                          {/* {data?.passes?.map((pass, idx) => (
                        <tr key={idx}>
                          <td
                            className={classNames(
                              idx !== data.passes.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            {pass.image_name}
                          </td>
                          <td
                            className={classNames(
                              idx !== data.passes.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            {pass.error_start_time}
                          </td>
                          <td
                            className={classNames(
                              idx !== data.passes.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            {pass.error_end_time}
                          </td>
                          <td
                            className={classNames(
                              idx !== data.passes.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            <button
                              onClick={() => {
                                selectPass(pass);
                                // setPass(pass);
                                // setModal(true);
                              }}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {data?.data?.data ? (
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
      ) : null}
    </div>
  );
}
