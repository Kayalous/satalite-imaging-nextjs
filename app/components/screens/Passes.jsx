function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import { useState, useEffect, use } from "react";
import moment from "moment";
export default function Locations({
  nextStep,
  prevStep,
  satalite,
  selectPass = (pass) => {},
}) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(
    new Date("1/1/2021").toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const fetchPasses = async () => {
    setLoading(true);
    const baseUrl = "/api/passes";
    const params = {
      page: page,
      limit: 10,
      sat_name: satalite.id,
      startTime: startDate,
      endTime: endDate,
    };
    const url = new URL(baseUrl, document.baseURI);

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url);

    if (response.ok) {
      // setData(await response.json());

      // await response.json then execute the following
      let passes = await response.json();

      // console.log(passes);

      const tempData = [];

      passes.passes.forEach((pass) => {
        let parts = pass.image_name.split("_");

        let passDate = moment(pass.Pass_Date, "YYYY-MM-DD HH:mm:ss").format(
          "DD/MM/YYYY h:mm a"
        );

        let processedDate = moment(parts[1], "YYYY-MM-DD-HH:mm:ss").format(
          "DD/MM/YYYY h:mm a"
        );

        let error_start_time = moment(
          pass.error_start_time,
          "YYYY-MM-DD-HH:mm:ss"
        ).format("DD/MM/YYYY h:mm a");

        let error_end_time = moment(
          pass.error_end_time,
          "YYYY-MM-DD-HH:mm:ss"
        ).format("DD/MM/YYYY h:mm a");

        pass.error_start_time = error_start_time;

        pass.error_end_time = error_end_time;

        tempData.push({
          passDate: passDate,
          processedDate: processedDate,
          ...pass,
        });
      });

      setDisplayData(tempData);

      setData(passes);

      setLoading(false);
    } else {
      setError(await response.json());
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPasses();

    let tempData = [];
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full max-h-full overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div className="flex-1 py-5 sm:p-6">
        <div>
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-bold text-gray-800 text-start">
                Passes
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the passes for {satalite.title}.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <div className="flex items-center">
                <div className="relative">
                  <input
                    name="start"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      fetchPasses();
                    }}
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <input
                    name="end"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      fetchPasses();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flow-root mt-8">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="relative inline-block min-w-full py-2 align-middle">
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
                  <table className="min-w-full border-separate border-spacing-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="sticky top-0 w-1 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          Pass Date
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          Processing Date
                        </th>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          local_folder_name
                        </th>
                        {/* <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          <span className="sr-only">Action</span>
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {displayData?.map((pass, idx) => (
                        <tr
                          className="transition duration-150 ease-in-out cursor-pointer hover:bg-gray-50"
                          onClick={() => {
                            selectPass(pass);
                            // setPass(pass);
                            // setModal(true);
                          }}
                          key={idx}
                        >
                          <td
                            className={classNames(
                              idx !== displayData.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            {idx + 1}
                          </td>
                          <td
                            className={classNames(
                              idx !== displayData.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            {pass.passDate}
                          </td>
                          <td
                            className={classNames(
                              idx !== displayData.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                            )}
                          >
                            {pass.processedDate}
                          </td>
                          <td
                            className={classNames(
                              idx !== displayData.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8 overflow-ellipsis line-clamp-1"
                            )}
                          >
                            {pass.s3_path}
                          </td>
                          {/* <td
                            className={classNames(
                              idx !== displayData.length - 1
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
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-end gap-x-6">
          {prevStep ? (
            <button
              onClick={prevStep}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Previous
            </button>
          ) : null}

          {nextStep ? (
            <button
              onClick={nextStep}
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
