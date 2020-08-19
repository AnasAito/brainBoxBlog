import React from "react";
import PopoverMenu from "./PopoverMenu";

export default function AddButoon({
  activityId,
  history,
  position,
  submitStaticBlock,
  blockToDelete,
  isDelete,
}) {
  return (
    <PopoverMenu
      menuPlacement="right"
      menuSections={[
        {
          sectionTitle: "Dynamic Blocks",
          sectionItems: [
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Writing
                  </p>
                  <p className="text-xs font-normal text-left ">
                    attach a writing block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              ),
              onClick: () => alert("comming soon"),
            },
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Text
                  </p>
                  <p className="text-xs font-normal text-left ">
                    attach a text block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-8 w-8 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="m19.5 24h-15c-1.378 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.122-2.5 2.5-2.5h15c1.378 0 2.5 1.122 2.5 2.5v19c0 1.378-1.122 2.5-2.5 2.5zm-15-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z" />
                  <path d="m11.5 10c-.276 0-.5-.224-.5-.5v-.5h-5v.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5h6c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5z" />
                  <path d="m8.5 15c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z" />
                  <path d="m9.5 15h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  <path d="m18.5 9h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  <path d="m18.5 12h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  <path d="m18.5 15h-4c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h4c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  <path d="m18.5 18h-13c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h13c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  <path d="m18.5 21h-13c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h13c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                </svg>
              ),
              onClick: () =>
                isDelete
                  ? history.push({
                      pathname: `/admin/blocks/text`,
                      search: `&attach=${activityId}&order=${position}&delete=${blockToDelete}&page=0&pageSize=7`,
                    })
                  : history.push({
                      pathname: `/admin/blocks/text`,
                      search: `&attach=${activityId}&order=${position}&page=0&pageSize=7`,
                    }),
            },
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Quiz
                  </p>
                  <p className="text-xs font-normal text-left ">
                    attach a Quiz block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-10 w-10 text-gray-400  group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 294.023 294.023"
                  fill="currentColor"
                >
                  <path
                    d="M124.916,0.002
	c-1.649,0.045-3.169,0.9-4.064,2.285l-14.49,21.736h-49.35c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5
	V39.574l-10,15v19.449h-40v-40h37.682L85.631,55.117l-6.146-12.293c-1.205-2.485-4.196-3.523-6.681-2.318
	c-2.485,1.205-3.523,4.196-2.318,6.681c0.018,0.036,0.035,0.072,0.054,0.108l10,20c1.235,2.47,4.238,3.472,6.709,2.237
	c0.778-0.389,1.441-0.974,1.924-1.698l40-60c1.565-2.276,0.989-5.389-1.287-6.954C127.013,0.281,125.974-0.027,124.916,0.002
	L124.916,0.002z M147.012,44.025c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5
	H147.012z M57.012,94.06c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5v-50c0-2.761-2.239-5-5-5H57.012z
	 M62.012,104.06h40v40h-40V104.06z M147.012,114.023c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10
	c0-2.761-2.239-5-5-5H147.012z M57.012,164.023c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5v-50
	c0-2.761-2.239-5-5-5H57.012z M62.012,174.023h40v40h-40V174.023z M147.012,184.058c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90
	c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5H147.012z M57.012,234.023c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50
	c2.761,0,5-2.239,5-5v-50c0-2.761-2.239-5-5-5L57.012,234.023L57.012,234.023z M62.012,244.023h40v40h-40V244.023z M147.012,254.023
	c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5H147.012z"
                  />
                </svg>
              ),
              onClick: () =>
                isDelete
                  ? history.push({
                      pathname: `/admin/blocks/quiz`,
                      search: `&attach=${activityId}&order=${position}&delete=${blockToDelete}&page=0&pageSize=7`,
                    })
                  : history.push({
                      pathname: `/admin/blocks/quiz`,
                      search: `&attach=${activityId}&order=${position}&page=0&pageSize=7`,
                    }),
            },
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Audio
                  </p>
                  <p className="text-xs font-normal text-left ">
                    attach an audio block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 480 480"
                  fill="currentColor"
                >
                  <path
                    d="M278.944,17.577c-5.568-2.656-12.128-1.952-16.928,1.92L106.368,144.009H32c-17.632,0-32,14.368-32,32v128
                            c0,17.664,14.368,32,32,32h74.368l155.616,124.512c2.912,2.304,6.464,3.488,10.016,3.488c2.368,0,4.736-0.544,6.944-1.6
                            c5.536-2.656,9.056-8.256,9.056-14.4v-416C288,25.865,284.48,20.265,278.944,17.577z"
                  />
                  <path
                    d="M368.992,126.857c-6.304-6.208-16.416-6.112-22.624,0.128c-6.208,6.304-6.144,16.416,0.128,22.656
                            C370.688,173.513,384,205.609,384,240.009s-13.312,66.496-37.504,90.368c-6.272,6.176-6.336,16.32-0.128,22.624
                            c3.136,3.168,7.264,4.736,11.36,4.736c4.064,0,8.128-1.536,11.264-4.64C399.328,323.241,416,283.049,416,240.009
                            S399.328,156.777,368.992,126.857z"
                  />
                  <path
                    d="M414.144,81.769c-6.304-6.24-16.416-6.176-22.656,0.096c-6.208,6.272-6.144,16.416,0.096,22.624
                            C427.968,140.553,448,188.681,448,240.009s-20.032,99.424-56.416,135.488c-6.24,6.24-6.304,16.384-0.096,22.656
                            c3.168,3.136,7.264,4.704,11.36,4.704c4.064,0,8.16-1.536,11.296-4.64C456.64,356.137,480,299.945,480,240.009
                            S456.64,123.881,414.144,81.769z"
                  />
                </svg>
              ),
              onClick: () =>
                isDelete
                  ? history.push({
                      pathname: `/admin/blocks/audio`,
                      search: `&attach=${activityId}&order=${position}&delete=${blockToDelete}&page=0&pageSize=7`,
                    })
                  : history.push({
                      pathname: `/admin/blocks/audio`,
                      search: `&attach=${activityId}&order=${position}&page=0&pageSize=7`,
                    }),
            },
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Image
                  </p>
                  <p className="text-xs font-normal text-left ">
                    attach an image block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 477.867 477.867"
                  fill="currentColor"
                >
                  <g>
                    <g>
                      <path
                        d="M426.667,68.267H51.2c-28.277,0-51.2,22.923-51.2,51.2V358.4c0,28.277,22.923,51.2,51.2,51.2h375.467
			c28.277,0,51.2-22.923,51.2-51.2V119.467C477.867,91.19,454.944,68.267,426.667,68.267z M443.733,266.001L336.333,158.601
			c-6.664-6.663-17.468-6.663-24.132,0L170.667,300.134l-56.201-56.201c-6.664-6.663-17.468-6.663-24.132,0l-56.201,56.201V119.467
			c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V266.001z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <circle cx="153.6" cy="187.733" r="51.2" />
                    </g>
                  </g>
                </svg>
              ),
              onClick: () =>
                isDelete
                  ? history.push({
                      pathname: `/admin/blocks/image`,
                      search: `&attach=${activityId}&order=${position}&delete=${blockToDelete}&page=0&pageSize=7`,
                    })
                  : history.push({
                      pathname: `/admin/blocks/image`,
                      search: `&attach=${activityId}&order=${position}&page=0&pageSize=7`,
                    }),
            },
          ],
        },
        /* {
          sectionTitle: "Static Blocks",
          sectionItems: [
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Audio recording
                  </p>
                  <p className="text-xs font-normal text-left ">
                    add an audio recording block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 511.961 511.961"
                  fill="currentColor"
                >
                  <path d="m292.519 221.626c6.246-6.248 6.22-16.436 0-22.659l-9.406-9.407c-6.154-6.15-16.334-6.324-22.66 0-2.036 2.036-53.994 53.994-56.245 56.245-6.249 6.249-6.25 16.41.001 22.659l9.406 9.407c6.249 6.249 16.411 6.248 22.659 0 20.172-20.172 36.488-36.487 56.245-56.245zm-32.708 11.494c-.238.235-.521.285-.718.285-.198 0-.484-.05-.724-.289l-9.406-9.406c-.384-.385-.385-1.06-.001-1.445l22.098-22.098c.192-.192.457-.289.723-.289s.53.097.723.289l9.406 9.407c.386.385.386 1.061 0 1.446zm-34.145 34.145c-.386.385-1.06.384-1.445 0l-9.406-9.407c-.386-.385-.386-1.061 0-1.446l22.856-22.856c.225.255.442.515.686.759l9.406 9.407c.243.243.503.462.758.688z" />
                  <path d="m185.903 285.571-8.522 8.522c-2.93 2.929-2.93 7.677-.001 10.606 1.465 1.465 3.384 2.197 5.304 2.197 1.919 0 3.839-.732 5.303-2.197l8.522-8.522c2.93-2.929 2.93-7.677.001-10.606-2.93-2.928-7.679-2.929-10.607 0z" />
                  <path d="m43.995 495.393c18.612 18.612 48.986 18.704 67.71.203l91.886-90.788c12.829-12.675 33.638-12.61 46.388.14 12.914 12.913 12.853 33.831-.14 46.668l-48.085 47.51c-2.946 2.911-2.975 7.66-.063 10.606 2.91 2.946 7.659 2.976 10.606.063l48.085-47.51c18.916-18.691 19.004-49.142.204-67.944-18.566-18.566-48.861-18.656-67.538-.203l-91.886 90.788c-12.874 12.722-33.761 12.659-46.561-.14-12.906-12.908-12.906-33.794.001-46.701l27.696-27.697c7.569 6.829 19.088 6.477 26.225-.658l19.477-19.478c9.994 5.633 22.665 4.423 31.446-3.503l86.819-78.386c3.074-2.776 3.316-7.519.54-10.593-2.775-3.075-7.519-3.315-10.593-.541l-86.819 78.386c-4.783 4.32-12.101 4.134-16.66-.425l-.134-.134c-.001-.002-.003-.003-.004-.005l-25.565-25.566c-.003-.003-.007-.006-.01-.009l-.129-.129c-4.558-4.558-4.745-11.876-.426-16.661l161.136-178.472c.441.532 59.698 59.789 60.23 60.234.013.01.023.023.036.033l-65.641 59.264c-3.074 2.776-3.316 7.519-.54 10.593 2.776 3.075 7.519 3.315 10.593.541l72.006-65.011c5.795-.324 11.188-2.722 15.306-6.839l9.372-9.372c3.186 1.236 6.602 1.894 10.119 1.902h.236c27.014 0 52.515-10.388 71.828-29.264 35.023-34.231 40.959-88.852 14.112-129.877-2.269-3.466-6.917-4.438-10.382-2.169-3.466 2.268-4.438 6.917-2.169 10.383 22.933 35.045 17.867 81.701-12.046 110.936-16.495 16.122-38.271 24.992-61.345 24.992-.066 0-.136 0-.202 0-3.588-.008-6.854-1.451-9.246-3.844l-74.501-74.501c-2.387-2.384-3.837-5.648-3.845-9.243-.054-23.527 9.078-45.646 25.714-62.281 30.768-30.768 78.819-33.924 113.132-9.322 3.364 2.414 8.052 1.642 10.466-1.725 2.413-3.367 1.641-8.052-1.726-10.465-40.311-28.905-96.544-25.031-132.48 10.903-19.477 19.478-30.169 45.375-30.106 72.922.008 3.516.666 6.93 1.902 10.114l-9.373 9.373c-4.244 4.245-6.501 9.72-6.823 15.289l-166.898 184.854c-7.98 8.84-9.087 21.538-3.503 31.446l-19.478 19.477c-7.197 7.197-7.401 18.752-.657 26.224l-27.697 27.697c-18.724 18.725-18.724 49.191 0 67.915zm235.664-362.295 7.689-7.69 69.324 69.324-7.69 7.69c-3.279 3.28-8.673 3.331-12.014.081-.029-.028-.061-.052-.089-.081l-57.22-57.22c-.01-.01-.019-.021-.029-.032-3.293-3.329-3.298-8.746.029-12.072zm-196.702 251.066 18.768-18.768 14.959 14.959-18.768 18.768c-1.582 1.582-4.155 1.582-5.739 0-3.434-3.434-5.791-5.792-9.22-9.22-1.584-1.582-1.584-4.156 0-5.739z" />
                </svg>
              ),
              onClick: () =>
                submitStaticBlock(activityId, "audiorecorder", position),
            },
            {
              title: (
                <div>
                  <p className=" text-base text-black font-medium text-left">
                    Write
                  </p>
                  <p className="text-xs font-normal text-left ">
                    add a writing input block
                  </p>
                </div>
              ),

              icon: (
                <svg
                  class="mr-3 h-10 w-10 text-gray-400  group-hover:text-gray-500 group-focus:text-gray-500"
                  viewBox="0 0 496 496"
                  fill="currentColor"
                >
                  <path d="m144 368h16v16h-16zm0 0" />
                  <path d="m112 368h16v16h-16zm0 0" />
                  <path d="m432 81.800781v-13.113281l-68.6875-68.6875h-115.3125c-43.550781 0-86.105469 11.503906-123.585938 33.105469l-4.8125-4.816407c-7.921874-7.929687-18.449218-12.289062-29.664062-12.289062-23.121094 0-41.9375 18.816406-41.9375 41.945312 0 10.839844 4.167969 21.015626 11.617188 28.847657-38.464844 44.910156-59.617188 101.839843-59.617188 161.207031 0 136.742188 111.246094 248 248 248s248-111.257812 248-248c0-61.671875-22.734375-120.542969-64-166.199219zm48 166.199219c0 37.382812-8.945312 72.695312-24.710938 104h-236.863281l-24-16h-98.425781v-168c0-12.199219 9.183594-22.191406 20.984375-23.695312l43.015625 43.015624v132.679688h272v-213.320312c31.078125 40.398437 48 89.824218 48 141.320312zm-72.257812 168c-12.101563 11.511719-25.390626 21.777344-39.742188 30.488281v-30.488281zm-167.207032-16v16h111.464844v32h-128v-48h-104c-13.230469 0-24-10.769531-24-24v-24h93.574219l24 16h232.90625c-6.886719 11.351562-14.769531 22.023438-23.441407 32zm52.152344-176-12.6875 12.6875-148.6875-148.6875 12.6875-12.6875zm9.878906 46.566406-29.597656-4.230468 25.375-25.375zm-182.566406-171.253906 148.6875 148.6875-12.6875 12.6875-148.6875-148.6875zm248-72 36.6875 36.6875h-36.6875zm-16-11.3125v64h64v224h-240v-100.679688l76.222656 76.222657 69.203125 9.890625-9.890625-69.203125-135.535156-135.542969v-57.144531c23.113281-7.535157 47.375-11.542969 72-11.542969zm-192 17.414062v35.28125l-23.847656-23.847656c7.742187-4.28125 15.695312-8.09375 23.847656-11.433594zm-70.0625-1.414062c6.933594 0 13.445312 2.695312 18.34375 7.601562l24.40625 24.398438-36.6875 36.6875-24.398438-24.398438c-4.90625-4.90625-7.601562-11.425781-7.601562-18.34375 0-14.304687 11.632812-25.945312 25.9375-25.945312zm-73.9375 216c0-55.089844 19.457031-107.9375 54.894531-149.792969l33.152344 33.152344c-14.125 6.183594-24.046875 20.265625-24.046875 36.640625v208c0 22.054688 17.945312 40 40 40h88v32h-32v16h156.496094c-26.207032 10.289062-54.6875 16-84.496094 16-127.921875 0-232-104.070312-232-232zm0 0" />
                  <path d="m192 32h16v16h-16zm0 0" />
                  <path d="m224 32h112v16h-112zm0 0" />
                  <path d="m192 64h144v16h-144zm0 0" />
                  <path d="m288 96h112v16h-112zm0 0" />
                  <path d="m288 128h112v16h-112zm0 0" />
                  <path d="m288 160h112v16h-112zm0 0" />
                  <path d="m336 192h64v16h-64zm0 0" />
                  <path d="m336 224h64v16h-64zm0 0" />
                  <path d="m336 256h64v16h-64zm0 0" />
                </svg>
              ),
              //onClick: onDelete
            },
          ],
        },*/
      ]}
      buttonContent={
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 496 496"
          className="h-20 w-20  bg-transparent   self-center transition duration-500 ease-in-out text-gray-500 cursor-pointer hover:text-gray-700 "
          fill="currentColor"
        >
          <g>
            <g>
              <g>
                <path
                  d="M248,0C111.033,0,0,111.033,0,248c0.154,136.903,111.097,247.846,248,248c136.967,0,248-111.033,248-248S384.967,0,248,0
                  z M248,480C119.87,480,16,376.13,16,248C16.146,119.93,119.93,16.146,248,16c128.13,0,232,103.87,232,232S376.13,480,248,480z"
                />
                <path
                  d="M400,240H256V96c0-4.418-3.582-8-8-8s-8,3.582-8,8v144H96c-4.418,0-8,3.582-8,8s3.582,8,8,8h144v144c0,4.418,3.582,8,8,8
                  s8-3.582,8-8V256h144c4.418,0,8-3.582,8-8S404.418,240,400,240z"
                />
              </g>
            </g>
          </g>
        </svg>
      }
    />
  );
}
