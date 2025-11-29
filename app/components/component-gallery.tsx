
export default ({ className }: { className?: string }) => {
    return (
        <section className={className ?? "not-prose"}>
            <div className="mx-auto max-w-5xl py-24 sm:py-32">
                <div id="gallery" className="mt-16 max-w-2xl mx-auto bg-white dark:bg-slate-900">

                    <div className="relative overflow-hidden bg-slate-50 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800">
                        {/*Decorative background glow (Matches Vue Green/Tailwind Blue)*/}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-teal-100/60 to-blue-100/60 dark:from-teal-900/30 dark:to-blue-900/30 blur-3xl rounded-full pointer-events-none"></div>

                        <div className="relative z-10 px-6 py-16 flex flex-col items-center text-center">

                            {/*Logos Container*/}
                            <div className="flex items-center justify-center space-x-10 sm:space-x-14 mb-8">
                                {/*ServiceStack Logo*/}
                                <a href="https://docs.servicestack.net/vue/autoquerygrid" className="transition-transform duration-300 hover:scale-110">
                                    <svg
                                        className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm text-gray-800 dark:text-white"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 6c1.544 1.76 2.276 4.15 2.217 6.61c3.968 1.67 9.924 6.12 11.181 12.39H28C26.051 14.31 14.918 6.77 10 6zm-2 7c4.67 4.913.81 11.582-4 12h18.97C21.5 18.289 11.95 13.533 8 13z" />
                                    </svg>                                </a>

                                {/*React Logo*/}
                                <div className="transition-transform duration-300 hover:scale-110">
                                    <svg
                                        className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="-11 -10.13 22 20.27"
                                    >
                                        <circle r={2} fill="#087ea4" />
                                        <g stroke="#087ea4">
                                            <ellipse rx={10} ry={4.5} />
                                            <ellipse rx={10} ry={4.5} transform="rotate(60)" />
                                            <ellipse rx={10} ry={4.5} transform="rotate(120)" />
                                        </g>
                                    </svg>
                                </div>

                                {/*Tailwind Logo*/}
                                <div className="transition-transform duration-300 hover:scale-110">
                                    <svg
                                        className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill="#44a8b3"
                                            d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/*Text Content*/}
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
                                Component Gallery
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                                Explore React Tailwind Component Gallery
                            </p>
                        </div>
                    </div>

                    <div className="pb-16">
                        <div className="mx-auto max-w-2xl not-prose">
                            <div>
                                <ul role="list"
                                    className="divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800">
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 28 28"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v6.262a3.296 3.296 0 0 0-1.5.22V11h-5v6h.856L17 19.356V18.5h-6v5h2.542a3.329 3.329 0 0 0-.02.077L13.166 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75ZM4.5 18.5v2.75a2.25 2.25 0 0 0 2.25 2.25H9.5v-5h-5Zm5-1.5v-6h-5v6h5Zm7.5 0v-6h-6v6h6Zm6.5-10.25a2.25 2.25 0 0 0-2.25-2.25H18.5v5h5V6.75ZM17 4.5h-6v5h6v-5Zm-7.5 0H6.75A2.25 2.25 0 0 0 4.5 6.75V9.5h5v-5Zm13.6 10.17l-7.903 7.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l7.902-7.902a2.286 2.286 0 0 0-3.232-3.233Z"
                                                        />
                                                    </svg>                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/autoquerygrid" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span>
                                                        AutoQueryGrid</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Instant customizable UIs for calling AutoQuery
                                                CRUD APIs </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M0 1v14h16V1H0zm6 9V7h4v3H6zm4 1v3H6v-3h4zm0-8v3H6V3h4zM5 3v3H1V3h4zM1 7h4v3H1V7zm10 0h4v3h-4V7zm0-1V3h4v3h-4zM1 11h4v3H1v-3zm10 3v-3h4v3h-4z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/datagrid" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> DataGrid</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> DataGrid Component Examples for rendering
                                                tabular data </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 1024 1024">
                                                        <path
                                                            fill="currentColor"
                                                            d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1l-360.5 359.7l-45.7 1.1l.7-46.4z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/autoform" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Auto Forms</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Render Auto Form UIs from a Request DTO class
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 36 36"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M21 12H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM8 10h12V7.94H8Z"
                                                            className="clr-i-outline clr-i-outline-path-1"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M21 14.08H7a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h11.36L22 16.3v-1.22a1 1 0 0 0-1-1ZM20 18H8v-2h12Z"
                                                            className="clr-i-outline clr-i-outline-path-2"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M11.06 31.51v-.06l.32-1.39H4V4h20v10.25l2-1.89V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h8a3.44 3.44 0 0 1 .06-.49Z"
                                                            className="clr-i-outline clr-i-outline-path-3"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="m22 19.17l-.78.79a1 1 0 0 0 .78-.79Z"
                                                            className="clr-i-outline clr-i-outline-path-4"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M6 26.94a1 1 0 0 0 1 1h4.84l.3-1.3l.13-.55v-.05H8V24h6.34l2-2H7a1 1 0 0 0-1 1Z"
                                                            className="clr-i-outline clr-i-outline-path-5"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="m33.49 16.67l-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.13 27.09L13 31.9a1.61 1.61 0 0 0 1.26 1.9a1.55 1.55 0 0 0 .31 0a1.15 1.15 0 0 0 .37 0l4.85-1.07L33.49 19a1.6 1.6 0 0 0 0-2.27ZM18.77 30.91l-3.66.81l.89-3.63L26.28 17.7l2.82 2.82Zm11.46-11.52l-2.82-2.82L29 15l2.84 2.84Z"
                                                            className="clr-i-outline clr-i-outline-path-6"
                                                        />
                                                        <path fill="none" d="M0 0h36v36H0z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/form-inputs" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Form Inputs</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Tailwind UI Input Components </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className="w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={15}
                                                        height={15}
                                                        viewBox="0 0 15 15"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="m2.5 5.5l.354-.354A.5.5 0 0 0 2 5.5h.5Zm2 2l-.354.354l.354.353l.354-.353L4.5 7.5Zm2-2H7a.5.5 0 0 0-.854-.354L6.5 5.5Zm4 4l-.354.354l.354.353l.354-.353L10.5 9.5ZM1.5 3h12V2h-12v1Zm12.5.5v8h1v-8h-1Zm-.5 8.5h-12v1h12v-1ZM1 11.5v-8H0v8h1Zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 13v-1Zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1ZM13.5 3a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 2v1Zm-12-1A1.5 1.5 0 0 0 0 3.5h1a.5.5 0 0 1 .5-.5V2ZM3 10V5.5H2V10h1Zm-.854-4.146l2 2l.708-.708l-2-2l-.708.708Zm2.708 2l2-2l-.708-.708l-2 2l.708.708ZM6 5.5V10h1V5.5H6Zm4-.5v4.5h1V5h-1ZM8.146 7.854l2 2l.708-.708l-2-2l-.708.708Zm2.708 2l2-2l-.708-.708l-2 2l.708.708Z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/markdown" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Markdown
                                                        Editor</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Rich Markdown Editing Input Control</p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 32 32"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M28 4H10a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h18a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2Zm0 16H10V6h18Z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M18 26H4V16h2v-2H4a2.006 2.006 0 0 0-2 2v10a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-2h-2Z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/modals" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Modals</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Modal Dialogs, Slide Overs &amp; SignIn forms
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 12 12"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M1 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2V7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2V3Zm3 6a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1V4a2 2 0 0 0-2 2v3Z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/navigation" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Navigation</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Tabs, Breadcrumbs and Link navigation components
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h3c0 1.108.892 2 2 2s2-.892 2-2h3a.5.5 0 0 0 .464-.685L12.5 8.9V7a2.49 2.49 0 0 1-1-.208v2.206a.5.5 0 0 0 .036.185L12.262 11H3.738l.726-1.817a.5.5 0 0 0 .036-.185V6.5a3.5 3.5 0 0 1 5.625-2.782c.107-.325.279-.622.501-.873A4.48 4.48 0 0 0 8 2Zm1 10c0 .556-.444 1-1 1s-1-.444-1-1h2Zm2.368-8.484a1.494 1.494 0 0 0-.351 1.208A1.497 1.497 0 0 0 12.5 6a1.5 1.5 0 1 0-1.132-2.484Z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/alerts" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Alerts</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> Tailwind Alert and Notification components </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="relative flex items-start space-x-4 py-6">
                                        <div className="flex-shrink-0">
                                            <span
                                                className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                                <span>
                                                    <svg
                                                        className=" w-6 h-6 text-indigo-700 dark:text-indigo-300 h-6 w-6 text-indigo-700 dark:text-indigo-300"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 1024 1024">
                                                        <path
                                                            fill="currentColor"
                                                            d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 .6.1 1.3.2 1.9c-.1 2-.2 4.1-.2 6.1c0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-.1-4.1-.2-6.1c.1-.6.2-1.2.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                                                <span
                                                    className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                                                    <a href="https://react.servicestack.net/gallery/formats" className="focus:outline-none"><span
                                                        className="absolute inset-0" aria-hidden="true"></span> Formats</a>
                                                </span>
                                            </h3>
                                            <p className="text-base text-gray-500"> HTML Value Formatters </p>
                                        </div>
                                        <div className="flex-shrink-0 self-center">
                                            <svg
                                                className="h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}